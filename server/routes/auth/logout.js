const express = require('express')
const userModel = require('../../model/user')

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {void}
 */

module.exports = async (req, res) => {
    try {
        await userModel.updateOne(
            { username: req.user.username },
            { accessToken: null }
        )
        res.clearCookie('accessToken').json({
            message: 'Log Out Successful',
        })
    } catch (e) {
        res.status(500).json({ message: 'Something went wrong.' })
    }

    console.log('Logging out: ', req.user.username)
}
