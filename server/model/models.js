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
        name: { type: String, required: true },
        dob: { type: Date, required: true },
        gender: { type: String, required: true },
        photo: {
            type: String,
            default: 'https://thispersondoesnotexist.com/image',
        },
    },
    { timeStamps: true }
)
const touristSchema = mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        country: { type: String, required: true },
        location: { type: String, default: null },
        booked: {
            type: [mongoose.Schema.Types.ObjectId],
            default: [],
            ref: 'Homestay',
        },
        guides: { type: [mongoose.Schema.Types.ObjectId], ref: 'Guide' },
    },
    { timeStamps: true }
)
const guideSchema = mongoose.Schema({
    userid: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    location: { type: String, default: null },
})

const homestaySchema = mongoose.Schema({
    location: { type: String, default: null },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    floor: { type: Number, default: 1 },
    rooms: { type: Number, default: 1 },
    avgStars: { type: Number, default: 0 },
    booked: { type: [mongoose.Types.ObjectId], ref: 'Booked' },
})

const reviewSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    homestayId: { type: mongoose.Schema.Types.ObjectId, ref: 'Homestay' },
    stars: { type: Number, default: 0 },
    comment: { type: 'String', default: null },
})

const bookedSchema = mongoose.Schema({
    touristId: { type: mongoose.Schema.Types.ObjectId, ref: 'Booked' },
    homestayId: { type: mongoose.Schema.Types.ObjectId, ref: 'Homestay' },
    dateRange: { type: [String, String], required: true },
})

const placesSchema = mongoose.Schema({
    contributer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    location: { type: String, default: null },
    name: { type: String, required: true },
    photos: { type: [String], default: [] },
})

module.exports = mongoose.model('User', userSchema)
module.exports = mongoose.model('Tourist', touristSchema)
module.exports = mongoose.model('Guide', guideSchema)
module.exports = mongoose.model('Homestay', homestaySchema)
module.exports = mongoose.model('Review', reviewSchema)
module.exports = mongoose.model('Booked', bookedSchema)
module.exports = mongoose.model('Place', placesSchema)
