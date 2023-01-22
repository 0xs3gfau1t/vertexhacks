const express = require('express')
const router = express.Router()
const auth = require('../../middlewares/auth')

router.post('/add', auth, require('./add'))
router.post('/confirm', auth, require('./confirm'))
router.post('/getconfirmed', auth, require('./getConfirmed'))
router.get('/', auth, require('./getDetails'))
router.get('/list', auth, require('./list'))

module.exports = router
