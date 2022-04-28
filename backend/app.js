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
    
    socket.on('disconnect', async () => {
        //When someone refreshes/closes the browser, update the lobby
        io.in(LOBBY).emit('players', await getPlayers())
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
            //When someone "joins" by selecting a username, update the lobby
            io.in(LOBBY).emit('players', await getPlayers())
        } else {
            socket.emit('invalidUsername')
        }
    })

    //Player handlers
    socket.on('getPlayers', async () => {
        socket.emit('players', await getPlayers())
    })

    //Room handlers
    socket.on('getRooms',  () => {
        socket.emit('rooms', getRooms())
    })

    socket.on('createRoom', async (room) => {
        socket.join(room)
        socket.leave(LOBBY)
        socket.emit('playersInRoom', await getPlayers(Array.from(socket.rooms)[0]))
        io.in(LOBBY).emit('rooms', getRooms())
    })

    socket.on('joinRoom', async (room) => {
        socket.join(room)
        socket.leave(LOBBY)
        socket.emit('playersInRoom', await getPlayers(Array.from(socket.rooms)[0]))
    })

    socket.on('leaveRoom', () => {
        //TODO - if the room is empty after leaving, delete it and emit to lobby
        socket.leave(Array.from(socket.rooms)[0])
        socket.join(LOBBY)
    })
})

const getPlayers = async (room) => {
    let sockets;
    if (room === undefined) {
        sockets = await io.fetchSockets()
    } else {
        sockets = await io.in(room).fetchSockets()
    }
    return sockets.map((socket) => socket.username)
}

const getRooms = () => {
    const rooms = Array.from(io.of('/').adapter.rooms.keys())
    return rooms.filter((room) => room != LOBBY)
}

httpServer.listen(8080, () => {console.log('Server is running!')})