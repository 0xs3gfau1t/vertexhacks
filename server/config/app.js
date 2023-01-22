const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')

app.use(cors())

// Logger
app.use(function (req, _res, next) {
    console.log(`-> ${req.url}\n`)
    next()
})

// Serve the built files from the 'build' directory
if (process.env.NODE_ENV === 'production')
    app.use(express.static(path.resolve(__dirname, '../build')))

app.use(express.json({ limit: '10mb' }))
app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(require('cookie-parser')())

const server = require('http').createServer(app)

const io = require('socket.io')(server, {
    cors: {
        origin: process.env.FRONTEND_URL,
        credentials: true,
    },
    path: '/sock/',
})

io.on('connection', sock => {
    console.log('Connected to socket')
})

module.exports = { app, server, io }
