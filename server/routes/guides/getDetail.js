const express = require('express')

const { guide, reviewGuide } = require('../../model')

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {void}
 */

module.exports = async (req, res) => {
    const { username, limit = 5, page = 0 } = req.params

    try {
        const g = await guide.findOne({ username })
        const reviews = await reviewGuide
            .find({ guideId: id })
            .skip(limit * page)
            .limit(limit)
        return res.json({ guide: g, reviews })
    } catch (e) {
        console.error(e)
        return res.status(500).json({ message: 'Something went wrong' })
    }
}
