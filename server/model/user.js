const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: {
            type: String,
            required: true,
        },
        accessToken: { type: String, default: null },
        verified: { type: Boolean, default: false },
    },
    { timeStamps: true }
)

module.exports = mongoose.model('User', userSchema)
