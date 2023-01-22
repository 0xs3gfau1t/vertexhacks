const express = require('express')
const { sendVerificationEmail } = require('../../utils/mail')
const { jwtSign } = require('../../utils/jwtUtil')
const userModel = require('../../model')

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {void}
 */

module.exports = async (req, res) => {
    try {
        const token = jwtSign(
            {
                username: req.user.username,
            },
            '5m'
        )
        const userEmail = await userModel.findOne({username: req.user.username}, {email: true})
        
        if(!userEmail) throw userEmail

        await sendVerificationEmail(userEmail, token)
        res.json({ message: 'Sent verification email' })

    } catch (e) {
        console.error(e)
        return res
            .status(403)
            .json({ message: 'Something went wrong' })
    }
}
