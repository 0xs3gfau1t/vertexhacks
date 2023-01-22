const express = require('express')

const { guide, tourist } = require('../../model')
const io = require('../../config/app')

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {void}
 */

module.exports = async (req, res) => {
    const { username } = req.body // Username of guide

    try {
        const me = await tourist.findOne(
            { username: req.user.username },
            { id: true }
        )

        const theGuide = await guide.findOne({ username })
        theGuide.booked.push(req.user.username)
        await theGuide.save()

        await me.booked.push(username)
        await me.save()

        io.sockets.connected.forEach(socket => {
            if (req.user.username in socket.id)
                io.sockets.sockets[socket.id].disconnect()
        })
        return res.json({ message: 'Success' })
    } catch (e) {
        console.error(e)
        return res.status(500).json({ message: 'Something went wrong' })
    }
}
