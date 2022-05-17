import React from 'react'
import styles from '../css/components/Card.module.css';
import bugbearAssault from '../assets/turn_cards/ambush/bugbear_assault.jpg';
import gnollRaid from '../assets/turn_cards/ambush/gnoll_raid.jpg';
import goblinAttack from '../assets/turn_cards/ambush/goblin_attack.jpg';
import koboldOnslaught from '../assets/turn_cards/ambush/kobold_onslaught.jpg';
import farmland from '../assets/turn_cards/explore/farmland.jpg';
import fishingVillage from '../assets/turn_cards/explore/fishing_village.jpg';
import forgottenForest from '../assets/turn_cards/explore/forgotten_forest.jpg';
import greatRiver from '../assets/turn_cards/explore/great_river.jpg';
import hamlet from '../assets/turn_cards/explore/hamlet.jpg';
import hinterlandStream from '../assets/turn_cards/explore/hinterland_stream.jpg';
import homestead from '../assets/turn_cards/explore/homestead.jpg';
import marshlands from '../assets/turn_cards/explore/marshlands.jpg';
import orchard from '../assets/turn_cards/explore/orchard.jpg';
import outpostRuins from '../assets/turn_cards/explore/outpost_ruins.jpg';
import riftLands from '../assets/turn_cards/explore/rift_lands.jpg';
import templeRuins from '../assets/turn_cards/explore/temple_ruins.jpg';
import treetopVillage from '../assets/turn_cards/explore/treetop_village.jpg';
import exploreBack from '../assets/turn_cards/explore/explore_back.jpg';

export default function TurnCard({ turnCard }) {

    const renderCard = (cell) => {
        switch (cell) {
            case 'bugbearAssault': 
            return {'src': bugbearAssault, 'alt': 'bugbearAssault'};
            case 'gnollRaid':
                return {'src': gnollRaid, 'alt': 'gnollRaid'};
            case 'goblinAttack':
                return {'src': goblinAttack, 'alt': 'goblinAttack'};
            case 'koboldOnslaught':
                return {'src': koboldOnslaught, 'alt': 'koboldOnslaught'};
            case 'farmland':
                return {'src': farmland, 'alt': 'farmland'};
            case 'fishingVillage':
                return {'src': fishingVillage, 'alt': 'fishingVillage'};
            case 'forgottenForest':
                return {'src': forgottenForest, 'alt': 'forgottenForest'};
            case 'greatRiver':
                return {'src': greatRiver, 'alt': 'greatRiver'};
            case 'hamlet': 
                return {'src': hamlet, 'alt': 'hamlet'};
            case 'hinterlandStream':
                return {'src': hinterlandStream, 'alt': 'hinterlandStream'};
            case 'homestead':
                return {'src': homestead, 'alt': 'homestead'};
            case 'marshlands':
                return {'src': marshlands, 'alt': 'marshlands'};
            case 'orchard':
                return {'src': orchard, 'alt': 'orchard'};
            case 'outpostRuins':
                return {'src': outpostRuins, 'alt': 'outpostRuins'};
            case 'riftLands':
                return {'src': riftLands, 'alt': 'riftLands'};
            case 'templeRuins':
                return {'src': templeRuins, 'alt': 'templeRuins'};
            case 'treetopVillage':
                return {'src': treetopVillage, 'alt': 'treetopVillage'};
            case 'exploreBack':
                return {'src': exploreBack, 'alt': 'exploreBack'};
            default:
            return '';
        }
    }



  return (
    <img className={styles.card} alt={renderCard(turnCard).alt} src={renderCard(turnCard).src}/>
  )
}
