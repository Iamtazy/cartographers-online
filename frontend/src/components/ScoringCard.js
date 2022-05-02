import React from 'react'
import borderlands from '../assets/scoring_cards/borderlands.jpg';
import canalLake from '../assets/scoring_cards/canal_lake.jpg';
import greatCity from '../assets/scoring_cards/great_city.jpg';
import greenbough from '../assets/scoring_cards/greenbough.jpg';
import greengoldPlains from '../assets/scoring_cards/greengold_plains.jpg';
import lostBarony from '../assets/scoring_cards/lost_barony.jpg';
import magesValley from '../assets/scoring_cards/mages_valley.jpg';
import sentinelWood from '../assets/scoring_cards/sentinel_wood.jpg';
import shieldgate from '../assets/scoring_cards/shieldgate.jpg';
import shoresideExpanse from '../assets/scoring_cards/shoreside_expanse.jpg';
import stonesideForest from '../assets/scoring_cards/stoneside_forest.jpg';
import theBrokenRoad from '../assets/scoring_cards/the_broken_road.jpg';
import theCauldrons from '../assets/scoring_cards/the_cauldrons.jpg';
import theGoldenGranary from '../assets/scoring_cards/the_golden_granary.jpg';
import treetower from '../assets/scoring_cards/treetower.jpg';
import wildholds from '../assets/scoring_cards/wildholds.jpg';

export default function ScoringCard({ card }) {

    const renderCard = (cell) => {
        switch (cell) {
            case 'borderlands': 
            return {'src': borderlands, 'alt': 'borderlands'};
            case 'canalLake':
                return {'src': canalLake, 'alt': 'canalLake'};
            case 'greatCity':
                return {'src': greatCity, 'alt': 'greatCity'};
            case 'greenbough':
                return {'src': greenbough, 'alt': 'greenbough'};
            case 'greengoldPlains':
                return {'src': greengoldPlains, 'alt': 'greengoldPlains'};
            case 'lostBarony':
                return {'src': lostBarony, 'alt': 'lostBarony'};
            case 'magesValley':
                return {'src': magesValley, 'alt': 'magesValley'};
            case 'sentinelWood':
                return {'src': sentinelWood, 'alt': 'sentinelWood'};
            case 'shieldgate': 
                return {'src': shieldgate, 'alt': 'shieldgate'};
            case 'shoresideExpanse':
                return {'src': shoresideExpanse, 'alt': 'shoresideExpanse'};
            case 'stonesideForest':
                return {'src': stonesideForest, 'alt': 'stonesideForest'};
            case 'theBrokenRoad':
                return {'src': theBrokenRoad, 'alt': 'theBrokenRoad'};
            case 'theCauldrons':
                return {'src': theCauldrons, 'alt': 'theCauldrons'};
            case 'theGoldenGranary':
                return {'src': theGoldenGranary, 'alt': 'theGoldenGranary'};
            case 'treetower':
                return {'src': treetower, 'alt': 'treetower'};
            case 'wildholds':
                return {'src': wildholds, 'alt': 'wildholds'};
            default:
            return '';
        }
    }



  return (
    <img height='250' alt={renderCard(card).alt} src={renderCard(card).src}/>
  )
}
