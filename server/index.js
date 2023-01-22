const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '.env') })
const { io } = require('./config/app')

require('./config/db')()

const { app, server } = require('./config/app')

const { connectionHandler } = require('./routes/guides/socketController')
io.on('connection', connectionHandler)

app.use('/api', require('./routes'))

app.get('/', (_req, res) => {
    if (process.env.NODE_ENV === 'production')
        return res.sendFile(
            path.resolve(__dirname, '..', 'build', 'index.html')
        )
    res.json({ message: 'What are you doing onii chaan' })
})

let host = process.env.HOST || 'localhost'
let port = process.env.PORT || 4000

server.listen({ host, port }, () => {
    console.log(`\nBackend Server at ${host}:${port}\n`)
})

module.exports = { app, server }
