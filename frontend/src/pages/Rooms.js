import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SocketContext } from '../context/socketContext'

export default function Rooms() {

    const socket = useContext(SocketContext)
    const navigate = useNavigate()
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        socket.on('rooms', (data) => {
          setRooms(data)
        })

        socket.emit('getRooms')

        return () => {
          socket.off('rooms')
        }
    }, [socket])

    const createRoom = () => {
      socket.emit('createRoom')  //Uses username as lobby name for now
      navigate('/room')
    }

  return (
    <div>
      Rooms
      <div>
        { rooms.map((room) => { console.log('in rooms foreach'); return <p>{room}</p> }) }
      </div>
      <button onClick={createRoom}>Create a room</button>
    </div>
    
  )
}
