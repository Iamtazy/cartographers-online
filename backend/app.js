const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const cors = require('cors')

const app = express()
app.use(cors())

const httpServer = http.createServer(app)

const io = new socketio.Server(httpServer, {
    cors: {
        origin: 'http://localhost:3000'
    }
})

io.on('connection', (socket) => {
    console.log('User connected with ID: ' + socket.id)
    socket.on('disconnect', () => {
        console.log('User disconnected with ID: ' + socket.id)
    })
})

httpServer.listen(8080, () => {console.log('Server is running!')})