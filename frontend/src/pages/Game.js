import React, { useContext, useEffect, useState } from 'react'
import { SocketContext } from '../context/socketContext'
import { GameContext } from '../context/gameContext'
import styles from '../css/Game.module.css'
import Tile from '../components/Tile'
import SeasonCard from '../components/SeasonCard'


export default function Game() {

  const socket = useContext(SocketContext)
  const { room } = useContext(GameContext)
  const [playersInRoom, setPlayersInRoom] = useState([])
  const [gameState, setGameState] = useState({ 'board': [], 'seasonCard': { 'name' : ''}})

  useEffect(() => {

    socket.on('playersInRoom', (players) => {
      setPlayersInRoom(players)
    })

    socket.on('gameState', (state) =>{
      setGameState(state)
    })

    socket.emit('getStarterGameState')  //Server emits the players in the room too

    return () => {
      socket.off('playersInRoom')
      socket.off('gameState')
    }

  }, [socket, room])



  return (
    <div>
      <div className={styles.gameContainer}>
        <div className={styles.boardContainer}>
          <div className={styles.cellContainer}>
            {gameState.board.map((row, rowIndex) => { return ( 
            <div className={styles.row} key={rowIndex}> { row.map((cell, cellIndex) => { return ( 
              <div className={styles.cell} row={rowIndex} col={cellIndex} key={cellIndex}>
                <Tile value={cell}/>
              </div> )})} 
            </div> )})
            }
          </div>
        </div>
        <SeasonCard card={gameState.seasonCard.name} />
      </div>
    </div>
  )
}
