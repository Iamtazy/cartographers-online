const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())

const httpServer = http.createServer(app)

const io = new socketio.Server(httpServer, {
    cors: {
        origin: process.env.FRONTEND_URL
    }
})

const LOBBY = 'lobby'

io.on('connection', (socket) => {
    socket.join(LOBBY)
    socket.leave(socket.id)
    
    socket.on('disconnect', () => {
        
    })

    //Username handlers
    socket.on('setUsername', async (username) => {
        const sockets = await io.fetchSockets()
        if ( sockets.every((socket) => {
            if (socket.username) {
                return socket.username != username
            }
                return true;
        })){
            socket.username = username
            socket.emit('validUsername')
        } else {
            socket.emit('invalidUsername')
        }
    })

    //Room handlers
    socket.on('getRooms', () => {
        const rooms = Array.from(io.of('/').adapter.rooms.keys())
        socket.emit('rooms', rooms.filter((room) => { return room != LOBBY }))
    })

    socket.on('createRoom', () => {
        socket.join(socket.username + "'s room")
        socket.leave(LOBBY)
    })
})

httpServer.listen(8080, () => {console.log('Server is running!')})