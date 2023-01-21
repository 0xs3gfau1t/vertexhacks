const express = require('express')
const { jwtVerify } = require('../../utils/jwtUtil')
const userModel = require('../../model/user')

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {void}
 */

module.exports = async (req, res) => {
    const { token } = req.query
    if (!token)
        return res.status(401).json({ message: 'Verification token missing' })

    try {
        const data = jwtVerify(token)
        if (data) {
            // Update jwt and database to verified
            await userModel.updateOne(
                { username: data.username },
                { verified: true }
            )
            return res.status(302).send(`
                <style>
                    html{
                        background: black;
                        color: white;
                        }
                </style>
                Successfully verified. Redirecting to Home page for login.
                <script>
                    setTimeout(() => {
                       window.location.href = "https://${process.env.ORIGIN}" 
                    }, 2000);
                    </script>
            `)
        }
        res.status(401).status({ message: 'Invalid token' })
    } catch (e) {
        console.error(e)
        if (e.name === 'TokenExpiredError')
            return res
                .status(401)
                .json({ message: 'Token expired. Verify again' })

        res.status(409).json({ message: 'Verification failed' })
    }
}
