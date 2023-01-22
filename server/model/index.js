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
        dob: { type: Date },
        gender: { type: String },
        photo: {
            type: String,
            default: 'https://thispersondoesnotexist.com/image',
        },
        phoneNo: { type: String, default: '0000000000' },
        role: { type: String }, // tourist, owner, guide
    },
    { timeStamps: true }
)

const touristSchema = mongoose.Schema(
    {
        username: { type: String, ref: 'User' },
        country: { type: String, required: true },
        location: { type: String, default: null },
        booked: {
            type: [mongoose.Schema.Types.ObjectId],
            default: [],
            ref: 'Booked',
        },
        booking: {
            type: [mongoose.Schema.Types.ObjectId],
            default: [],
            ref: 'Booked',
        },
        guides: { type: [String], ref: 'Guide' },
        activeGuides: { type: [] },
    },
    { timeStamps: true }
)

const guideSchema = mongoose.Schema(
    {
        username: { type: String, ref: 'User' },
        routes: { type: Object, default: {} },
        location: { type: String, default: null },
        avgStars: { type: Number, default: 0 },
        booked: { type: [mongoose.Schema.Types.ObjectId], ref: 'BookedGuide' },
        points: { type: Number, default: 0 },
        activeRequests: {
            type: [
                { touristId: String, source: String, destination: String },
            ] /*Tourist username*/,
        },
    },
    { timeStamps: true }
)

const reviewGuideSchema = mongoose.Schema(
    {
        guideUsername: { type: String, ref: 'Guide' },
        touristUsername: { type: String, ref: 'Tourist' },
        stars: { type: Number, default: 0 },
        comment: { type: 'String', default: null },
    },
    { timeStamps: true }
)
const bookedGuideSchema = mongoose.Schema(
    {
        touristUsername: { type: String, ref: 'Tourist' },
        guideUsername: { type: String, ref: 'Guide' },
        dateRange: { type: [Date, Date], required: true },
    },
    { timeStamps: true }
)
const homestaySchema = mongoose.Schema(
    {
        location: { type: String, default: null },
        owner: { type: String, ref: 'User' },
        name: { type: String, required: true },
        floor: { type: Number, default: 1 },
        rooms: { type: Number, default: 1 },
        avgStars: { type: Number, default: 0 },
        booked: { type: [mongoose.Types.ObjectId], ref: 'Booked' },
    },
    { timeStamps: true }
)

const reviewSchema = mongoose.Schema(
    {
        touristUsername: { type: String, ref: 'Tourist' },
        homestayId: { type: mongoose.Schema.Types.ObjectId, ref: 'Homestay' },
        stars: { type: Number, default: 0 },
        comment: { type: 'String', default: null },
    },
    { timeStamps: true }
)

const bookedSchema = mongoose.Schema(
    {
        touristUsername: { type: String, ref: 'Tourist' },
        homestayId: { type: mongoose.Schema.Types.ObjectId, ref: 'Homestay' },
        dateRange: { type: [Date, Date], required: true },
    },
    { timeStamps: true }
)

const placesSchema = mongoose.Schema(
    {
        contributer: { type: String, ref: 'Guide' },
        location: { type: String, default: null },
        name: { type: String, required: true, unique: true },
        photos: { type: [String], default: [] },
        views: { type: Number, default: 0 },
        likes: { type: Number, default: 0 },
    },
    { timeStamps: true }
)

const user = mongoose.model('User', userSchema)
const tourist = mongoose.model('Tourist', touristSchema)
const guide = mongoose.model('Guide', guideSchema)
const homestay = mongoose.model('Homestay', homestaySchema)
const review = mongoose.model('Review', reviewSchema)
const booked = mongoose.model('Booked', bookedSchema)
const place = mongoose.model('Place', placesSchema)
const reviewGuide = mongoose.model('ReviewGuide', reviewGuideSchema)
const bookedGuide = mongoose.model('BookedGuide', bookedGuideSchema)

module.exports = {
    tourist,
    guide,
    homestay,
    review,
    booked,
    place,
    reviewGuide,
    bookedGuide,
    userModel: user,
}
