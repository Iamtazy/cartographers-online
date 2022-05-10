import React, { useContext, useEffect, useState } from 'react'
import { SocketContext } from '../context/socketContext'
import { GameContext } from '../context/gameContext'
import styles from '../css/pages/Room.module.css'
import { useNavigate } from 'react-router-dom'

export default function Room() {

  const socket = useContext(SocketContext)
  const { room } = useContext(GameContext)
  const [playersInRoom, setPlayersInRoom] = useState([])
  const [isReady, setIsReady] = useState(false)
  const navigate = useNavigate()

  const handleReadyButton = () => {
    socket.emit('isReadyChange', !isReady)
    setIsReady(!isReady)
  }

  useEffect(() => {

    socket.on('playersInRoom', (players) => {
      setPlayersInRoom(players)
      if (players.every((player) => player.isReady)) {
        navigate('/game')
      }
    })

    return () => {
      socket.off('playersInRoom')
    }
}, [socket, room, navigate])

  return (
    <div>
      <h1>Room {room}</h1>
      <h3>Players in the room</h3>
      {playersInRoom.map((player) => { return <div key={player.username}><div>{player.username}</div> <div>{player.isReady ? "Ready" : "Not ready"}</div> </div> })}
      <button className={styles.button} onClick={handleReadyButton}>{isReady ? "Unready" : "Ready"}</button>
    </div>
  )
}
