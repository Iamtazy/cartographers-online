const { SEASON_CARDS } = require('./gameObjectMappings')

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
        'seasonCard': SEASON_CARDS.spring
    }
}

module.exports = {
    STARTER_BOARD,
    getStartingState
}