const express = require('express')

const { guide } = require('../../model')

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {void}
 */

module.exports = async (req, res) => {
    const { guides } = req.params

    try {
        //
        // Send sms
        // Wait for socket connection
        //


        return res.json({ guides })
    } catch (e) {
        console.error(e)
        return res.status(500).json({ message: 'Something went wrong' })
    }
}
