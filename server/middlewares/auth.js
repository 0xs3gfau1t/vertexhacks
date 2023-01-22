const express = require('express')

const { jwtVerify, jwtSign } = require('../utils/jwtUtil')
const { userModel } = require('../model')

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {void}
 */

module.exports = async (req, res, next) => {
    let verified = null

    try {
        verified = jwtVerify(req?.headers?.cookie.split('=').at(-1))
    } catch (e) {
        if (e.name === 'TokenExpiredError') {
            // Checking if user has at least a session active
            const token = (
                await userModel.findOne(
                    { username: e.username },
                    { accessToken: true }
                )
            )?.accessToken

            if (token) {
                const newJWT = jwtSign({
                    username: e.username,
                    verified: false,
                })

                res.cookie('accessToken', newJWT, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'lax',
                })

                verified = e.username
            }
        }
    }

    if (!verified) return res.status(401).json({ message: 'Not authorized' })

    req.user = { username: verified.username, verified: verified.verified }
    next()
}
