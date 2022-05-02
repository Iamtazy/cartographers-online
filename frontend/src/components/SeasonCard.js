import React from 'react'
import spring from '../assets/seasons/spring.jpg';
import summer from '../assets/seasons/summer.jpg';
import fall from '../assets/seasons/fall.jpg';
import winter from '../assets/seasons/winter.jpg';

export default function SeasonCard({ card }) {


    const renderCard = (cell) => {
        switch (cell) {
            case 'spring': 
                return {'src': spring, 'alt': 'spring'};
            case 'summer':
                return {'src': summer, 'alt': 'summer'};
            case 'fall':
                return {'src': fall, 'alt': 'fall'};
            case 'winter':
                return {'src': winter, 'alt': 'winter'};
            default:
            return '';
        }
    }

  return (
    <img height='250' alt={renderCard(card).alt} src={renderCard(card).src}/>
  )
}
