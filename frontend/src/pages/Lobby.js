import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GameContext } from '../context/gameContext'
import { SocketContext } from '../context/socketContext'
import styles from '../css/Lobby.module.css'

export default function Lobby() {

    const socket = useContext(SocketContext)
    const { setRoom } = useContext(GameContext)
    const navigate = useNavigate()
    const [rooms, setRooms] = useState([])
    const [players, setPlayers] = useState([])
    const [roomName, setRoomName] = useState("")

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
      if (roomName.length > 0){
        socket.emit('createRoom', roomName)  //Uses username as lobby name for now
        setRoom(roomName)
        navigate('/room')
      }
    }

    const joinRoom = (room) => {
      socket.emit('joinRoom', room)
      setRoom(room)
      navigate('/room')
    }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Main lobby</h1>
      <div className={styles.lobbyDisplayContainer}>
      <div className={styles.lobbyDisplay}>
          <h3>Players</h3>
          { players.map((player) => { return <p key={player}>{player}</p> }) }
        </div>
        <div className={styles.lobbyDisplay}>
          <h3>Rooms</h3>
          { rooms.map((room) => { return <div className={styles.roomContainer} key={room}><div className={styles.roomName}>{room}</div> <button id={room} className={styles.button} onClick={() => joinRoom(room)}>Join</button></div> }) }
        </div>
      </div>
      <input type='text' name='roomName' className={styles.roomNameInput} onChange={(event) => setRoomName(event.target.value)} />
      <button className={styles.button} onClick={createRoom}>Create a room</button>
    </div>
    
  )
}
