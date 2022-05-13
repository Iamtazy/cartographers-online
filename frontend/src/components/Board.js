import React from 'react'
import styles from '../css/components/Board.module.css'
import Tile from './Tile'

export default function Board({board}) {
  return (
    <div className={styles.boardContainer}>
        <div className={styles.cellContainer}>
        {board.map((row, rowIndex) => { return ( 
        <div className={styles.row} key={rowIndex}> { row.map((cell, cellIndex) => { return ( 
            <div className={styles.cell} row={rowIndex} col={cellIndex} key={cellIndex}>
            <Tile value={cell}/>
            </div> )})} 
        </div> )})
        }
        </div>
    </div>
  )
}
