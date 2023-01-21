const express = require('express')

const { guide } = require('../../model')

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {void}
 */

module.exports = async (req, res) => {
    const { source, destination } = req.params

    try {
        const guides = await guide.find({
            routes: { $elemMatch: { source, destination } },
        })
        return res.json({ guides })
    } catch (e) {
        console.error(e)
        return res.status(500).json({ message: 'Something went wrong' })
    }
}
