const express = require('express')
const bcrypt = require('bcryptjs')

const { jwtSign } = require('../../utils/jwtUtil')
const userModel = require('../../model')

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {void}
 */

module.exports = async (req, res) => {
    const { username, password } = req.body

    try {
        const user = await userModel.findOne(
            { username },
            { username: true, verified: true, password: true, role: true }
        )
        const passed = bcrypt.compareSync(password, user.password)

        // Check password hash
        if (!passed) throw Error('Wrong credentials provided')

        // If exists, create and return accessToken
        const accessToken = jwtSign({
            username: user.username,
            verified: user.verified,
            role: user.role,
        })

        // Now mark user login, used when generating new token after previous expiry
        // Not the best solution, but good enough atm
        await userModel.updateOne({ username }, { accessToken })

        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production',
        }).json({ accessToken })
    } catch (e) {
        console.error(e)
        res.status(401).json({ message: 'No such user exists' })
    }
    console.log('Logging', username, 'in')
}
