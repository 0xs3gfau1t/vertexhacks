const express = require('express')

const { homestay } = require('../../model')

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {void}
 */

module.exports = (req, res) => {
    const {homestayId, touristId} = req.body

    // Send sms
    console.log("Sending sms")

    //
    // Initiate socket connection
    // to listen to server poke after receiving sms reply
    //
    

    res.json({message: 'success'})
}
