const express = require('express')
const router = express.Router()
const auth = require('../../middlewares/auth')

router.post('/add', auth, require('./add'))
router.post('/confirm', auth, require('./confirm'))
router.get('/getUpdatedResponse', auth, require('./getUpdatedResponse'))
router.get('/updateResponse', require('./getConfirmed').updateResponse)
router.get('/acceptResponse', auth, require('./getConfirmed').acceptResponse)
router.get('/', auth, require('./getDetails'))
router.get('/list', auth, require('./list'))

module.exports = router
