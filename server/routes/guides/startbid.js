const express = require('express')

const { guide, tourist } = require('../../model')
const sendSms = require('../../utils/sendSms')
const io = require('../../config/app')

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
        guides.forEach(async singleGuide => {
            try {
                await sendSms(
                    singleGuide.phoneNo,
                    `Hire request for ${source} --> ${destination})`
                )
                const socketId =
                    singleGuide.username + '-bid-' + req.user.username

                await guide.findOneAndUpdate(
                    { username: guide.username },
                    { $push: { activeRequests: socketId } }
                )

                io.on('connection', socket => {
                    console.log('Connected internally: ', socket)
                    socket.on(
                        socketId,
                        async (price, guideUsername, rejected = false) => {
                            if (rejected) {
                                socket.disconnect(true)
                                return
                            }
                            const guideItem = await guide.findOne(
                                { username: guideUsername },
                                {
                                    location: true,
                                    avgStars: true,
                                    username: true,
                                }
                            )
                            const message =
                                'New bid price entered by: ' +
                                guideItem.username +
                                ' as ' +
                                price
                            socket.to(socketId).emit(message)
                        }
                    )
                })
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
