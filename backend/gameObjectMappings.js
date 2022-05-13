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

const ambushCards = [
    {
        'name' : 'bugbearAssault',
        'passingDirection': 'left',
        'shape': [
            [1,0,1,0],
            [1,0,1,0],
            [0,0,0,0],
            [0,0,0,0]
        ]
    },
    {
        'name': 'gnollRaid',
        'passingDirection': 'right',
        'shape': [
            [1,1,0,0],
            [1,0,0,0],
            [1,1,0,0],
            [0,0,0,0]
        ]
    },
    {
        'name': 'goblinAttack',
        'passingDirection': 'right',
        'shape': [
            [1,0,0,0],
            [0,1,0,0],
            [0,0,1,0],
            [0,0,0,0]
        ]
    },
    {
        'name': 'koboldOnslaught',
        'passingDirection': 'left',
        'shape': [
            [1,0,0,0],
            [1,1,0,0],
            [1,0,0,0],
            [0,0,0,0]
        ]
    }
]

const exploreCards = [
    {
        'name' : 'farmland',
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
        'tiles': ['farm'],
        'isFirstShapeForCoin': true
    },
    {
        'name' : 'fishingVillage',
        'turnTime': 2,
        'shapes': [
            [
                [1,1,1,1],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0]
            ]
        ],
        'tiles': ['village', 'water'],
        'isFirstShapeForCoin': false
    },
    {
        'name' : 'forgottenForest',
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
        'tiles': ['forest'],
        'isFirstShapeForCoin': true
    },
    {
        'name' : 'greatRiver',
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
        'tiles': ['water'],
        'isFirstShapeForCoin': true
    },
    {
        'name' : 'hamlet',
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
        'tiles': ['village'],
        'isFirstShapeForCoin': true
    },
    {
        'name' : 'hinterlandStream',
        'turnTime': 2,
        'shapes': [
            [
                [1,1,1],
                [1,0,0],
                [1,0,0]
            ]
        ],
        'tiles': ['farm', 'water'],
        'isFirstShapeForCoin': false
    },
    {
        'name' : 'homestead',
        'turnTime': 2,
        'shapes': [
            [
                [1,0,0],
                [1,1,0],
                [1,0,0]
            ]
        ],
        'tiles': ['village', 'farm'],
        'isFirstShapeForCoin': false
    },
    {
        'name' : 'marshlands',
        'turnTime': 2,
        'shapes': [
            [
                [1,0,0],
                [1,1,1],
                [1,0,0]
            ]
        ],
        'tiles': ['forest', 'water'],
        'isFirstShapeForCoin': false
    },
    {
        'name' : 'orchard',
        'turnTime': 2,
        'shapes': [
            [
                [1,1,1],
                [0,0,1],
                [0,0,0]
            ]
        ],
        'tiles': ['forest', 'farm'],
        'isFirstShapeForCoin': false
    },
    {
        'name' : 'riftLands',
        'turnTime': 0,
        'shapes': [
            [
                [1]
            ]
        ],
        'tiles': ['forest', 'village', 'farm', 'water', 'monster'],
        'isFirstShapeForCoin': false
    },
    {
        'name' : 'treetopVillage',
        'turnTime': 2,
        'shapes': [
            [
                [0,0,1,1],
                [1,1,1,0],
                [0,0,0,0],
                [0,0,0,0]
            ]
        ],
        'tiles': ['forest', 'village'],
        'isFirstShapeForCoin': false
    },
    {
        'name' : 'templeRuins'
    },
    {
        'name' : 'outpostRuins'
    }
]

module.exports = {
    SEASON_CARDS,
    SCORING_DECKS
}