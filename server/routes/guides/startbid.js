const express = require('express')
const { emitChat } = require('./socketController')

const { guide, tourist } = require('../../model')
const sendSms = require('../../utils/sendSms')

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {void}
 */

module.exports = async (req, res) => {
    const { guides, source, destination } = req.params // Array of usernames

    try {
        // Update requests
        guides.forEach(async guide => {
            try {
                await sendSms(
                    guide.phoneNo,
                    `Hire request for ${source} --> ${destination})`
                )

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
