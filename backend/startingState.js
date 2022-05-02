const { SEASON_CARDS, SCORING_DECKS } = require('./gameObjectMappings')

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

const randomizeScoringCards = () => {
    const shuffledScoringDecks = SCORING_DECKS
        .map(deck => ({ deck, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ deck }) => deck)
    
    const scoringCards = shuffledScoringDecks.map((deck) => {
        return deck.map(deck => ({ deck, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ deck }) => deck)[0]
    })
    return scoringCards
}

const getStartingState = () => {
    return {
        'board' :  STARTER_BOARD,
        'seasonCard': SEASON_CARDS.spring,
        'scoringCards': randomizeScoringCards()
    }
}

module.exports = {
    STARTER_BOARD,
    getStartingState
}