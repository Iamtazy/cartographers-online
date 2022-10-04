const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const cors = require('cors')
require('dotenv').config()
const { STARTER_BOARD, getStartingState } = require('./startingState')
const { scoreScoringCard } = require('./scoringFunctions')

const app = express()
app.use(cors())

//Should be HTTPS for public use
const httpServer = http.createServer(app)

const io = new socketio.Server(httpServer, {
    cors: {
        origin: process.env.FRONTEND_URL
    }
})

const LOBBY = 'lobby'
const roomStates = {}

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
        delete socket.gameState
        io.to(room).emit('playersInRoom', await getPlayers(room))
    })

    socket.on('isReadyChange', async (isReady) => {
        socket.isReady = isReady
        const room = Array.from(socket.rooms)[0]
        io.to(room).emit('playersInRoom', await getPlayers(room))
    })

    //Game handlers
    socket.on('getStarterGameState', async () => {
        socket.gameStarted = true;
        const room = Array.from(socket.rooms)[0];
        const sockets = await io.in(room).fetchSockets()
        socket.emit('playersInRoom', await getPlayers(room))
        //Handles that the starting state only gets sent when the last player "starts" the game
        if (sockets.every((socket) => socket.gameStarted === true)) {
            const startingState = getStartingState();
            sockets.forEach((socket) => {
                socket.gameState = startingState
            })
            //Players get sent the same starting state at the same time
            io.to(room).emit('gameState', startingState)
            delete startingState.board
            //Roomstate gets set to the starting state, without the board, since it's player specific
            roomStates[room] = startingState;
        }
    })
})


//When a room gets deleted, update everyone in the lobby
io.of("/").adapter.on("delete-room", (room) => {
    delete roomStates.room
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


const testBoard = [
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'MOU', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'R', 'E', 'E', 'E', 'E', 'E', 'E', 'MOU', 'R', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'MOU', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'R', 'MOU', 'E', 'E', 'E', 'E', 'E', 'E', 'R', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'R', 'E', 'MOU', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E']
]

scoreScoringCard('wildholds', testBoard)

httpServer.listen(8080, () => {console.log('Server is running!')})