const express = require('express')

const { guide, tourist } = require('../../model')

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {void}
 */

module.exports = async (req, res) => {
    const { username } = req.params

    try {
        const me = await tourist.findOne(
            { username: req.user.username },
            { id: true }
        )
        const theGuide = await guide.findOne({ username })
        theGuide.booked.push(me.id)
        await theGuide.save()

        await me.booked.push(theGuide.id)
        await me.save()

        //
        // Disconnect fro sockerio
        //

        return res.json({ message: 'Success' })
    } catch (e) {
        console.error(e)
        return res.status(500).json({ message: 'Something went wrong' })
    }
}
