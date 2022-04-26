import React, { useContext, useEffect } from 'react'
import { SocketContext } from '../context/socketContext'

export default function Lobbies() {

    const socket = useContext(SocketContext)

    useEffect(() => {
        socket.on('rooms', (data) => {console.log(data)})

        socket.emit('getRooms')
    }, [socket])

  return (
    <div>Lobbies</div>
  )
}
