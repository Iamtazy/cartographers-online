import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GameContext } from '../context/gameContext'
import { SocketContext } from '../context/socketContext'

export default function Lobby() {

    const socket = useContext(SocketContext)
    const navigate = useNavigate()
    const [rooms, setRooms] = useState([])
    const [players, setPlayers] = useState([])

    useEffect(() => {
        socket.on('rooms', (rooms) => {
          setRooms(rooms)
        })

        socket.on('players', (players) => {
          setPlayers(players)
        })

        socket.emit('getRooms')
        socket.emit('getPlayers')

        return () => {
          socket.off('rooms')
          socket.off('players')
        }
    }, [socket])

    const createRoom = () => {
      socket.emit('createRoom', "random room")  //Uses username as lobby name for now
      navigate('/room')
    }

    const joinRoom = () => {
      socket.emit('joinRoom')
      navigate('/room')
    }

  return (
    <div>
      <div>
        <h1>Main lobby</h1>
        <h3>Rooms</h3>
        { rooms.map((room) => { return <div key={room}><p>{room}</p> <button id={room} onClick={() => joinRoom(room)}>Join</button></div> }) }
      </div>
      <div>
        <h3>Players</h3>
        { players.map((player) => { return <p key={player}>{player}</p> }) }
      </div>
      <button onClick={createRoom}>Create a room</button>
    </div>
    
  )
}
