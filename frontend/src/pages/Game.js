import React, { useContext, useEffect, useState } from 'react'
import { SocketContext } from '../context/socketContext'
import { GameContext } from '../context/gameContext'
import styles from '../css/pages/Game.module.css'
import Board from '../components/Board'
import SeasonCard from '../components/SeasonCard'
import ScoringCard from '../components/ScoringCard'
import TurnCard from '../components/TurnCard'
import CardShapeField from '../components/CardShapeField'


export default function Game() {

  const socket = useContext(SocketContext)
  const { room } = useContext(GameContext)
  const [playersInRoom, setPlayersInRoom] = useState([])
  const [gameState, setGameState] = useState({ 'board': [], 'seasonCard': { 'name' : ''}, 'scoringCards': [], 'turnCards': []})

  useEffect(() => {

    socket.on('playersInRoom', (players) => {
      setPlayersInRoom(players)
    })

    socket.on('gameState', (state) =>{
      //state.board = gameState.board // should be on backend
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
        <Board board={gameState.board} />
        <SeasonCard card={gameState.seasonCard.name} />
        <div style={{'display': 'flex', 'flexDirection': 'row'}}>{gameState.scoringCards.map((card) => <div style={{'margin': '20px'}} key={card}><ScoringCard card={card}/></div>)}</div>
        <div style={{'display': 'flex', 'flexDirection': 'row'}}>{gameState.turnCards.map((card) => <div style={{'margin': '20px'}} key={card.name}><TurnCard turnCard={card.name}/></div>)}</div>
        {gameState.turnCards.length > 0 ? <CardShapeField turnCard={gameState.turnCards[gameState.turnCards.length - 1]} /> : ''}
      </div>
    </div>
  )
}
