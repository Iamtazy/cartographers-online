const SCORING_DECKS = [
    ['greenbough', 'sentinelWood', 'stonesideForest', 'treetower'],
    ['canalLake', 'magesValley', 'shoresideExpanse', 'theGoldenGranary'],
    ['greatCity','greengoldPlains', 'shieldgate', 'wildholds'],
    ['borderlands','lostBarony', 'theBrokenRoad', 'theCauldrons']
]

const SEASON_CARDS = {
    'spring': {
        'name': 'spring',
        'neededTurnTime': 8,
        'scoredEdicts': ['A','B']
    },
    'summer': {
        'name': 'summer',
        'neededTurnTime': 8,
        'scoredEdicts': ['B','C']
    },
    'fall': {
        'name': 'fall',
        'neededTurnTime': 7,
        'scoredEdicts': ['C','D']
    },
    'winter': {
        'name': 'winter',
        'neededTurnTime': 6,
        'scoredEdicts': ['D','A']
    }
}

module.exports = {
    SEASON_CARDS,
    SCORING_DECKS
}