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
    const { homeStayId } = req.body
    const selectedHomestay = await homestay.findOne({ _id: homeStayId })
    console.log(req.body)

    try {
        // Send sms
        await sendSms(
            selectedHomestay?.phoneNo || process.env.DUMMY_PHONE_NO,
            'Date Range: 2023/01/25 - 2023/01/30, Total Guests: 3,' +
                homeStayId +
                ',' +
                req.user.username
        )
    } catch (e) {
        console.error(e)
        return res.status(500).json({ message: 'Something went wrong' })
    }

    res.json({ message: 'success' })
}
