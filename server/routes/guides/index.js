const express = require('express')
const router = express.Router()
const auth = require('../../middlewares/auth')

router.get('/list', auth, require('./list'))
router.get('/', auth, require('./getDetail'))
router.post('/startbid', auth, require('./startbid'))
router.post('/confirmbid', auth, require('./confirmbid'))

router.get('*', (_req, res) => {
    res.json({ message: 'yamete kudasai!' })
})

module.exports = router
