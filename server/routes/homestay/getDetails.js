const express = require('express')

const { homestay, review } = require('../../model')

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {void}
 */

module.exports = async (req, res) => {
    const { id, page = 0, limit = 3 } = req.params

    try {
        const homestay = await homestay.findOne({ id })
        const reviews = await review
            .find({ homestayid: id })
            .skip(page * limit)
            .limit(limit)
        return res.json({ homestay, reviews })
    } catch (e) {
        console.error(e)
        return res.json({ message: 'Something went wrong' })
    }
}
