const jwt = require('jsonwebtoken')

function jwtVerify(token) {
    let verified = null
    try {
        verified = jwt.verify(token, process.env.SECRET)
    } catch (e) {
        if (e.name === 'TokenExpiredError') {
            e.username = jwt.verify(token, process.env.SECRET, {
                ignoreExpiration: true,
            }).username
            throw e
        }
        console.error(e)
    }
    return verified
}

function jwtSign(token, expiry = '5m') {
    return jwt.sign(token, process.env.SECRET, { expiresIn: expiry })
}

module.exports = { jwtVerify, jwtSign }
