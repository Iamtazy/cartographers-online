import React, { useContext, useEffect, useState } from 'react'
import { SocketContext } from '../context/socketContext'
import { GameContext } from '../context/gameContext'

export default function Room() {

  const socket = useContext(SocketContext)
  const { room } = useContext(GameContext)
  const [playersInRoom, setPlayersInRoom] = useState([])

  useEffect(() => {

    socket.on('playersInRoom', (players) => {
      setPlayersInRoom(players)
    })

    return () => {
      socket.emit('leaveRoom', room)
      socket.off('playersInRoom')
    }
}, [socket, room])

  return (
    <div>
      <h1>Room {room}</h1>
      <h3>Players in the room</h3>
      {playersInRoom.map((player) => { return <p key={player}>{player}</p> })}
    </div>
  )
}
