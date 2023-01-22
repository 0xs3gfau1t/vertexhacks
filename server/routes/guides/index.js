const express = require('express')
const router = express.Router()

router.get('/list', require('./list'))
router.get('/', require('./getDetail'))
router.post('/startbid', require('./startbid'))
router.post('/confirmbid', require('./confirmbid'))

router.get('*', (_req, res) => {
    res.json({ message: 'yamete kudasai!' })
})

module.exports = router
