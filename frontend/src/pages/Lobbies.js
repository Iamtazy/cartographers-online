import React, { useContext, useEffect } from 'react'
import { SocketContext } from '../context/socketContext'
import { GameContext } from '../context/gameContext';

export default function Lobbies() {

    const socket = useContext(SocketContext)
    const { username } = useContext(GameContext)

    useEffect(() => {
        socket.on('rooms', (data) => {console.log(data)})

        socket.emit('getRooms')

        return () => {
          socket.off('rooms')
        }
    }, [socket])

  return (
    <div>
      Lobbies
      <p>{username}</p>
    </div>
    
  )
}
