const express = require('express')
const router = express.Router()

router.use('/auth', require('./auth'))
router.use('/homestay', require('./homestay'))
router.use('/guide', require('./guides'))

router.get('*', (_req, res) => {
    res.json({ message: 'yamete kudasai!' })
})

module.exports = router
