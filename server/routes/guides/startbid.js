const express = require('express')
const { emitChat } = require('./socketController')

const { guide, tourist } = require('../../model')

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {void}
 */

module.exports = async (req, res) => {
    const { guides } = req.params // Array of usernames

    try {
        //
        // Send sms
        // Wait for socket connection
        //

        // Update requests
        guides.forEach(async guide => {
            try {
                await guide.findOneAndUpdate(
                    { username: guide.username },
                    { $push: { activeRequests: req.user.username } }
                )
            } catch (e) {
                console.error(e)
            }
        })

        await tourist.updateOne(
            { username: req.user.username },
            { activeGuides: guides }
        )

        return res.json({ guides })
    } catch (e) {
        console.error(e)
        return res.status(500).json({ message: 'Something went wrong' })
    }
}
