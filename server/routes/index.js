const express = require('express')
const router = express.Router()

router.use('/auth', require('./auth'))

router.get('*', (_req, res) => {
    res.json({ message: 'yamete kudasai!' })
})

module.exports = router
