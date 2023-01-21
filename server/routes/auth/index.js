const express = require('express')
const router = express.Router()
const auth = require('../../middlewares/auth')

router.post('/login', require('./login'))
router.delete('/logout', auth, require('./logout'))
router.post('/register', require('./register'))
router.post('/requestverification', auth, require('./requestverification'))
router.get('/verify', require('./verify'))

module.exports = router
