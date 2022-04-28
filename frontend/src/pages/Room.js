import React, { useContext, useEffect, useState } from 'react'
import { SocketContext } from '../context/socketContext'

export default function Room() {

  const socket = useContext(SocketContext)
  const [playersInRoom, setPlayersInRoom] = useState([])

  useEffect(() => {

    socket.on('playersInRoom', (players) => {
      setPlayersInRoom(players)
    })

    return () => {
      socket.emit('leaveRoom')
      socket.off('playersInRoom')
    }
}, [socket])

  return (
    <div>
      <h1>Room</h1>
      <h3>Players in the room</h3>
      {playersInRoom.map((player) => { return <p key={player}>{player}</p> })}
    </div>
  )
}
