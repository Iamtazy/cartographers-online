import React from 'react'
import mountain from '../assets/tiles/mountain.png';
import ruins from '../assets/tiles/ruins.png';
import forest from '../assets/tiles/forest.png';
import monster from '../assets/tiles/monster.png';
import village from '../assets/tiles/village.png';
import water from '../assets/tiles/water.png';
import farm from '../assets/tiles/farm.png';

export default function Tile({value}) {

const renderCell = (cell) => {
    switch (cell) {
        case 'E': 
            return '';
        case 'MOU':
            return {'src': mountain, 'alt': 'mountain'};
        case 'R':
            return {'src': ruins, 'alt': 'ruins'};
        case 'FO':
            return {'src': forest, 'alt': 'forest'};
        case 'MON':
            return {'src': monster, 'alt': 'monster'};
        case 'V':
            return {'src': village, 'alt': 'village'};
        case 'W':
            return {'src': water, 'alt': 'water'};
        case 'FA':
            return {'src': farm, 'alt': 'farm'};
        default:
        return '';
    }
}

  return (
    <img width='50' height='50' alt={renderCell(value).alt} src={renderCell(value).src}/>
  )
}
