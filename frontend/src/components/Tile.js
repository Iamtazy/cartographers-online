import React from 'react'
import mountain from '../assets/tiles/mountain.png';
import ruins from '../assets/tiles/ruins.png';
import forest from '../assets/tiles/forest.png';
import monster from '../assets/tiles/monster.png';
import village from '../assets/tiles/village.png';
import water from '../assets/tiles/water.png';
import farm from '../assets/tiles/farm.png';

export default function Tile({ value }) {

const renderCell = (cell) => {
    switch (cell) {
        case 'MOU':
            return {'src': mountain, 'name': 'mountain'};
        case 'R':
            return {'src': ruins, 'name': 'ruins'};
        case 'FO':
            return {'src': forest, 'name': 'forest'};
        case 'MON':
            return {'src': monster, 'name': 'monster'};
        case 'V':
            return {'src': village, 'name': 'village'};
        case 'W':
            return {'src': water, 'name': 'water'};
        case 'FA':
            return {'src': farm, 'name': 'farm'};
        default:
        return '';
    }
}

  return (
    value !== 'E' ? <div content={renderCell(value).name} style={{width: '50px', height: '50px', backgroundImage: `url(${renderCell(value).src})`, backgroundSize: 'cover'}}/> : ''
  )
}
