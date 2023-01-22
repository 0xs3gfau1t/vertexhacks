const { jwtVerify } = require('../../../utils/jwtUtil')
const { io } = require('../../../config/app')

const activeUsers = new Map()

function connectionHandler(socket) {
    const cookie = socket.handshake.headers.cookie
    const token = cookie.split('accessToken=')[1]

    console.log(
        `New client connected with socket id: ${socket.id} and token: ${token}`
    )
    try {
        const verified = jwtVerify(token)
        activeUsers.set(verified.username, socket.id)
    } catch (e) {
        socket.disconnect(true)
    }
    socket.on('disconnect', () => {
        try {
            var uid = null
            for (let [key, value] of activeUsers) {
                if (value === socket.id) {
                    uid = key
                    break
                }
            }
            activeUsers.delete(uid)
            console.log(`User ${uid} removed from activeUsers list`)
        } catch (err) {
            console.log(`Failed to remove User ${uid} from activeUsers list`)
            console.log(err.message)
        }
    })
}
const emitChat = (receiverId, mode, message) => {
    const receiverSocketId = activeUsers.get(receiverId.toString())
    console.log('Receiver user id', receiverId)
    console.log('Receiver socket id', receiverSocketId)
    if (receiverSocketId) {
        io.to(receiverSocketId).emit(mode, {
            message,
        })
    }
}
module.exports = { connectionHandler, emitChat }
