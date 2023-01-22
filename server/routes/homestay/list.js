const express = require('express')

const { homestay } = require('../../model')

const RADIUS = 1000

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @return {void}
 */
function distance(lat1, lat2, lon1, lon2) {
    // The math module contains a function
    // named toRadians which converts from
    // degrees to radians.
    lon1 = (lon1 * Math.PI) / 180
    lon2 = (lon2 * Math.PI) / 180
    lat1 = (lat1 * Math.PI) / 180
    lat2 = (lat2 * Math.PI) / 180

    // Haversine formula
    let dlon = lon2 - lon1
    let dlat = lat2 - lat1
    let a =
        Math.pow(Math.sin(dlat / 2), 2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2)

    let c = 2 * Math.asin(Math.sqrt(a))

    // Radius of earth in kilometers. Use 3956
    // for miles
    let r = 6371

    // calculate the result
    return c * r
}

module.exports = async (req, res) => {
    const { name, loc } = req.params

    try {
        if (name) {
            const homestays = await homestay.find({ name: `/${name}/` })
            return res.json({ homestays })
        }

        // Ofcourse this is ineffecient and I'm kinda blank on aggregation pipeline rn
        // so, because.
        const homestays = (await homestay.find({})).filter(queriedLoc => {
            const [lat1, lon1] = queriedLoc.split(',')
            const [lat2, lon2] = loc.split(',')

            const filteredHomestays = []
            if (distance(lon1, lon2, lat1, lat2) <= RADIUS) {
                filteredHomestays.push(queriedLoc)
            }
        })

        return res.json({ homestays })
    } catch (e) {
        console.error(e)
        return res.status(500).json({ message: 'Something went wrong' })
    }
}
