const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const cors = require('cors')
require('dotenv').config()
const { STARTER_BOARD, getStartingState } = require('./startingState')

const app = express()
app.use(cors())

//Should be HTTPS for public use
const httpServer = http.createServer(app)

const io = new socketio.Server(httpServer, {
    cors: {
        origin: [process.env.FRONTEND_URL, 'http://172.20.97.245:3000', '172.20.97.245:3000']
    }
})

const LOBBY = 'lobby'

//Players and rooms are always getting resent to re-render components, although performance-wise,
//it'd be better to have handlers for a single player leaving and updating the view by that

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
            socket.to(LOBBY).emit('players', await getPlayers())
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
        socket.isReady = false;
        socket.emit('playersInRoom', await getPlayers(room))
        io.to(LOBBY).emit('rooms', getRooms())
    })

    socket.on('joinRoom', async (room) => {
        socket.join(room)
        socket.leave(LOBBY)
        socket.isReady = false;
        io.to(room).emit('playersInRoom', await getPlayers(room))
    })

    socket.on('leaveRoom', async (room) => {
        socket.leave(room)
        socket.join(LOBBY)
        io.to(room).emit('playersInRoom', await getPlayers(room))
    })

    socket.on('isReadyChange', async (isReady) => {
        socket.isReady = isReady
        const room = Array.from(socket.rooms)[0]
        io.to(room).emit('playersInRoom', await getPlayers(room))
    })

    //Game handlers
    socket.on('getStarterGameState', async () => {
        socket.emit('playersInRoom', await getPlayers(Array.from(socket.rooms)[0]))
        if (socket.gameState === undefined) {
            socket.gameState = getStartingState()
            socket.emit('gameState', socket.gameState)
        } else {
            socket.emit('gameState', socket.gameState)
        }
    })
})


//When a room gets deleted, update everyone in the lobby
io.of("/").adapter.on("delete-room", () => {
    io.to(LOBBY).emit('rooms', getRooms())
});

const getPlayers = async (room) => {
    let sockets;
    if (room === undefined) {
        sockets = await io.fetchSockets()
        return sockets.map((socket) => socket.username)
    } else {
        sockets = await io.in(room).fetchSockets()
        return sockets.map((socket) => { return {'username' : socket.username, 'isReady': socket.isReady}})
    }
}

const getRooms = () => {
    const rooms = Array.from(io.of('/').adapter.rooms.keys())
    return rooms.filter((room) => room != LOBBY)
}

httpServer.listen(8080, () => {console.log('Server is running!')})