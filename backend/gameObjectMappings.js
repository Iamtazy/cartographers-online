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
        ]
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
        ]
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
        ]
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
        ]
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
        'tiles': ['farm'],
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
        'tiles': ['village', 'water'],
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
        'tiles': ['forest'],
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
        'tiles': ['water'],
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
        'tiles': ['village'],
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
        'tiles': ['farm', 'water'],
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
        'tiles': ['village', 'farm'],
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
        'tiles': ['forest', 'water'],
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
        'tiles': ['forest', 'farm'],
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
        'tiles': ['forest', 'village', 'farm', 'water', 'monster'],
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
        'tiles': ['forest', 'village'],
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