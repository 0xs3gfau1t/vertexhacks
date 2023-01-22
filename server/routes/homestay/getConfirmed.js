const express = require('express')

const { homestay, booked, tourist } = require('../../model')

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {void}
 */

const updateResponse = async (req, res) => {
    const { text } = req.params

    const data = text.split(',')

    const homestayId = data.at(-2)
    const username = data.at(-1)
    const dateRange = data.at(-4)

    try {
        await tourist.updateOne(
            { username },
            { $push: { booking: { homestayId, dateRange } } }
        )
    } catch (e) {
        res.status(500).json({ message: 'Something went wrong' })
    }
}

const acceptResponse = async (req, res) => {
    const { homestayId, accepted, dateRange } = req.body

    // Use these info to address socket instance and emit respective response
    if (!accepted) return res.json({ message: 'Success' })

    if (
        dateRange.length !== 2 ||
        typeof dateRange[0] !== Date ||
        typeof dateRange[1] !== Date
    )
        return res.status(400).json({ message: 'Invalid input' })

    // If accepted, execute the following
    try {
        const newBook = new booked({
            touristUsername: req.user.username,
            homestayId,
            dateRange,
        })
        const savedBook = await newBook.save()

        await homestay.findOneAndUpdate(
            { homestayId },
            { $push: { booked: savedBook._id } },
            options
        )

        await tourist.findOneAndUpdate(
            { username: req.user.username },
            { $push: { booked: savedBook._id }, booking: [] }
        )
    } catch (e) {
        console.error(e)
        return res.status(500).json({ message: 'Something went wrong.' })
    }

    res.json({ message: 'success' })
}

module.exports = { updateResponse, acceptResponse }
