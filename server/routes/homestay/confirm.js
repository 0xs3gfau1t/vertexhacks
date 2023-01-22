const express = require('express')

const { homestay } = require('../../model')
const sendSms = require('../../utils/sendSms')

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {void}
 */

module.exports = async (req, res) => {
    const { homestayId } = req.body
    const selectedHomestay = await homestay.findOne({ _id: homestayId })

    try {
        // Send sms
        await sendSms(
            selectedHomestay.phoneNo,
            'Date Range: 2023/01/25 - 2023/01/30, Total Guests: 3,' +
                homestayId +
                ',' +
                req.user.username
        )
    } catch (e) {
        console.error(e)
        return res.status(500).json({ message: 'Something went wrong' })
    }

    res.json({ message: 'success' })
}
