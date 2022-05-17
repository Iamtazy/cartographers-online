const SCORING_DECKS = [
    ['greenbough', 'sentinelWood', 'stonesideForest', 'treetower'],
    ['canalLake', 'magesValley', 'shoresideExpanse', 'theGoldenGranary'],
    ['greatCity','greengoldPlains', 'shieldgate', 'wildholds'],
    ['borderlands','lostBarony', 'theBrokenRoad', 'theCauldrons']
]

const SEASON_CARDS = [
    {
        'name': 'spring',
        'neededTurnTime': 8,
        'scoredEdicts': ['A','B']
    },
    {
        'name': 'summer',
        'neededTurnTime': 8,
        'scoredEdicts': ['B','C']
    },
    {
        'name': 'fall',
        'neededTurnTime': 7,
        'scoredEdicts': ['C','D']
    },
    {
        'name': 'winter',
        'neededTurnTime': 6,
        'scoredEdicts': ['D','A']
    }
]

const AMBUSH_CARDS = [
    {
        'name': 'bugbearAssault',
        'type': 'ambush',
        'passingDirection': 'left',
        'shape': [
            [1,0,1,0],
            [1,0,1,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        'tiles' : ['MON']
    },
    {
        'name': 'gnollRaid',
        'type': 'ambush',
        'passingDirection': 'right',
        'shape': [
            [1,1,0,0],
            [1,0,0,0],
            [1,1,0,0],
            [0,0,0,0]
        ],
        'tiles' : ['MON']
    },
    {
        'name': 'goblinAttack',
        'type': 'ambush',
        'passingDirection': 'right',
        'shape': [
            [1,0,0,0],
            [0,1,0,0],
            [0,0,1,0],
            [0,0,0,0]
        ],
        'tiles' : ['MON']
    },
    {
        'name': 'koboldOnslaught',
        'type': 'ambush',
        'passingDirection': 'left',
        'shape': [
            [1,0,0,0],
            [1,1,0,0],
            [1,0,0,0],
            [0,0,0,0]
        ],
        'tiles' : ['MON']
    }
]

const EXPLORE_CARDS = [
    {
        'name' : 'farmland',
        'type': 'explore',
        'turnTime': 1,
        'shapes': [
            [
                [1,0],
                [1,0]
            ],
            [
                [0,1,0],
                [1,1,1],
                [0,1,0]
            ],
        ],
        'tiles': ['FA'],
        'isFirstShapeForCoin': true
    },
    {
        'name' : 'fishingVillage',
        'type': 'explore',
        'turnTime': 2,
        'shapes': [
            [
                [1,1,1,1],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0]
            ]
        ],
        'tiles': ['V', 'W'],
        'isFirstShapeForCoin': false
    },
    {
        'name' : 'forgottenForest',
        'type': 'explore',
        'turnTime': 1,
        'shapes': [
            [
                [1,0],
                [0,1]
            ],
            [
                [1,0,0],
                [1,1,0],
                [0,1,0]
            ]
        ],
        'tiles': ['FO'],
        'isFirstShapeForCoin': true
    },
    {
        'name' : 'greatRiver',
        'type': 'explore',
        'turnTime': 1,
        'shapes': [
            [
                [1,0,0],
                [1,0,0],
                [1,0,0]
            ],
            [
                [0,0,1],
                [0,1,1],
                [1,1,0]
            ]
        ],
        'tiles': ['W'],
        'isFirstShapeForCoin': true
    },
    {
        'name' : 'hamlet',
        'type': 'explore',
        'turnTime': 1,
        'shapes': [
            [
                [1,0],
                [1,1]
            ],
            [
                [1,1,1],
                [1,1,0],
                [0,0,0]
            ]
        ],
        'tiles': ['V'],
        'isFirstShapeForCoin': true
    },
    {
        'name' : 'hinterlandStream',
        'type': 'explore',
        'turnTime': 2,
        'shapes': [
            [
                [1,1,1],
                [1,0,0],
                [1,0,0]
            ]
        ],
        'tiles': ['FA', 'W'],
        'isFirstShapeForCoin': false
    },
    {
        'name' : 'homestead',
        'type': 'explore',
        'turnTime': 2,
        'shapes': [
            [
                [1,0,0],
                [1,1,0],
                [1,0,0]
            ]
        ],
        'tiles': ['V', 'FA'],
        'isFirstShapeForCoin': false
    },
    {
        'name' : 'marshlands',
        'type': 'explore',
        'turnTime': 2,
        'shapes': [
            [
                [1,0,0],
                [1,1,1],
                [1,0,0]
            ]
        ],
        'tiles': ['FO', 'W'],
        'isFirstShapeForCoin': false
    },
    {
        'name' : 'orchard',
        'type': 'explore',
        'turnTime': 2,
        'shapes': [
            [
                [1,1,1],
                [0,0,1],
                [0,0,0]
            ]
        ],
        'tiles': ['FO', 'FA'],
        'isFirstShapeForCoin': false
    },
    {
        'name' : 'riftLands',
        'type': 'explore',
        'turnTime': 0,
        'shapes': [
            [
                [1]
            ]
        ],
        'tiles': ['FO', 'V', 'FA', 'W', 'MON'],
        'isFirstShapeForCoin': false
    },
    {
        'name' : 'treetopVillage',
        'type': 'explore',
        'turnTime': 2,
        'shapes': [
            [
                [0,0,1,1],
                [1,1,1,0],
                [0,0,0,0],
                [0,0,0,0]
            ]
        ],
        'tiles': ['FO', 'V'],
        'isFirstShapeForCoin': false
    },
    {
        'name' : 'templeRuins',
        'type': 'ruin'
    },
    {
        'name' : 'outpostRuins',
        'type': 'ruin'
    }
]

module.exports = {
    SEASON_CARDS,
    SCORING_DECKS,
    AMBUSH_CARDS,
    EXPLORE_CARDS
}