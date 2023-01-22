const express = require('express')

const { homestay } = require('../../model')

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {void}
 */

module.exports = async (req, res) => {
    const { location, name, floor, rooms, booked = [] } = req.body

    const newHomestay = new homestay({
        location,
        name,
        floor,
        rooms,
        booked,
        owner: req?.user?.username,
    })

    try {
        await newHomestay.save()
        return res.json({ message: 'success' })
    } catch (e) {
        console.error(e)
        return res.status(500).json({ message: 'Something went wrong' })
    }
}
