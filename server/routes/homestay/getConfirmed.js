const express = require('express')

const { homestay, booked, tourist } = require('../../model')

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {void}
 */

module.exports = async (req, res) => {
    const { homestayId, touristId, accepted, dateRange } = req.body

    // Use these info to address socket instance and emit respective response
    if (!accepted) return res.json({ message: 'Success' })

    if (
        dateRange.length === 2 &&
        typeof dateRange === Date &&
        typeof dateRange === Date
    )
        return res.status(400).json({ message: 'Invalid input' })

    // If accepted, execute the following
    try {
        const newBook = new booked({ touristId, homestayId, dateRange })
        const savedBook = await newBook.save()

        await homestay.findOneAndUpdate(
            { homestayId },
            { $push: { booked: savedBook._id } },
            options
        )

        await tourist.findOneAndUpdate(
            { id: touristId },
            { $push: { booked: savedBook._id } },
            options
        )
    } catch (e) {
        console.error(e)
        return res.status(500).json({ message: 'Something went wrong.' })
    }

    res.json({ message: 'success' })
}
