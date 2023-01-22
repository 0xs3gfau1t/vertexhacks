const express = require('express')

const { guide, place } = require('../../model')

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {void}
 */

module.exports = async (req, res) => {
    const { name, location, photos = [] } = req.body

    try {
        // According to resource type i.e video/image, increase points correspondingly
        // Currently increased by one for photos only
        await guide.updateOne(
            { username: req.user.username },
            { $inc: { points: 1 } }
        )

        const photoUrls = photos.map(photo => {}) // Process, upload then returl raw urls to those photos

        const newPlace = new place({
            name,
            contributor: req.user.username,
            location,
            photos: photoUrls,
        })

        await newPlace.save()
        return res.json({ message: 'success' })
    } catch (e) {
        console.error(e)
        return res.status(500).json({ message: 'Something went wrong.' })
    }
}
