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

io.on('connection', (socket) => {
    
    socket.on('disconnect', () => {
        
    })
    socket.on('getRooms', () => {
        console.log('getRooms called')
        socket.emit('rooms', {rooms: '1'})
    })
})

httpServer.listen(8080, () => {console.log('Server is running!')})