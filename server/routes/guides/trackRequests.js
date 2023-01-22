const express = require('express')

const { guide } = require('../../model')

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {void}
 */

module.exports = async (req, res) => {
    try {
        const requestedTourists = guide.findOne(
            { username: req.user.username },
            { activeRequests: true }
        )

        res.json({ requestedDetails: requestedTourists })
    } catch (e) {
        console.error(e)
        res.status(500).json({ message: 'Something went wrong.' })
    }
}
