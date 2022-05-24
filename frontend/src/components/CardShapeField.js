import React from 'react'
import styles from '../css/components/CardShapeField.module.css'
import Tile from './Tile'

export default function CardShapeField({ turnCard }) {

  const handleDragStart = (event) => {
    event.dataTransfer.setData("shape", event.target.id);
  }

  return (
    <div className={styles.cardShapeFieldContainer}>
    { turnCard.type !== 'ruin' ? turnCard.tiles.map((tile) => turnCard.shapes.map((shape, si) => 
        <div id={si} key={si} className={styles.cardShape} draggable onDragStart={(event) => handleDragStart(event)}> {
            shape.map((row, ri) => <div key={ri} className={styles.cardShapeRow}> {row.map((column, ci) => 
                column === 1 ? <div key={ci} ><Tile value={tile}/></div> : <div><Tile/></div>
            )} </div>)
        }</div>
    )) : <div></div>}
    </div>
  )
}
