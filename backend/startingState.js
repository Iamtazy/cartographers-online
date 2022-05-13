const { SEASON_CARDS, EXPLORE_CARDS } = require('./gameObjectMappings')
const { randomizeScoringCards, getRandomTurnCard } = require('./gameUtils')

const STARTER_BOARD = [
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'MOU', 'E', 'R', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'R', 'E', 'E', 'E', 'E', 'E', 'E', 'MOU', 'R', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'MOU', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    ['E', 'R', 'MOU', 'E', 'E', 'E', 'E', 'E', 'E', 'R', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'R', 'E', 'MOU', 'E', 'E', 'E'],
    ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E']
]

const getStartingState = () => {
    return {
        'board' :  STARTER_BOARD,
        'seasonCard': SEASON_CARDS[0],
        'scoringCards': randomizeScoringCards(),
        'turnCards': [getRandomTurnCard(EXPLORE_CARDS)]
    }
}

module.exports = {
    STARTER_BOARD,
    getStartingState
}