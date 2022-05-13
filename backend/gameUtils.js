const { SCORING_DECKS, AMBUSH_CARDS, EXPLORE_CARDS } = require('./gameObjectMappings')

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

const getRandomTurnCard = (turnCards) => {
    return turnCards.map(card => ({ card, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ card }) => card)[0]
}

module.exports = {
    randomizeScoringCards,
    getRandomTurnCard
}