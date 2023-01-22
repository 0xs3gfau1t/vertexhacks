const express = require('express')

const { tourist } = require('../../model')

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {void}
 */

module.exports = async (req, res) => {
    try {
        const updatedResponse = await tourist.findOne(
            { username: req.user.username },
            { booking: true }
        )

        return res.json({ inProgress: updatedResponse })
    } catch (e) {
        console.error(e)
        return res.json({ message: 'Something went wrong' })
    }
}
