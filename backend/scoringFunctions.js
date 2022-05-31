const scoreScoringCard = (scoringCard, board) => {
    switch (scoringCard) {
        case "borderlands": 
            return scoreBorderlands(board)
        case "canalLake": 
            return scoreCanalLake(board)
        case "greatCity": 
            return scoreGreatCity(board)
        case "greenbough": 
            return scoreGreenbough(board)
        case "greengoldPlains": 
            return scoreGreengoldPlains(board)
        case "lostBarony": 
            return scoreLostBarony(board)
        case "magesValley": 
            return scoreMagesValley(board)
        case "sentinelWood": 
            return scoreSentinelWood(board)
        case "shieldgate": 
            return scoreShieldgate(board)
        case "shoresideExpanse": 
            return scoreShoresideExpanse(board)
        case "stonesideForest": 
            return scoreStonesideForest(board)
        case "theBrokenRoad": 
            return scoreTheBrokenRoad(board)
        case "theCauldrons": 
            return scoreTheCauldrons(board)
        case "theGoldenGranary": 
            return scoreTheGoldenGranary(board)
        case "treetower": 
            return scoreTreetower(board)
        case "wildholds": 
            return scoreWildholds(board)
        default:
            return "card not found"
    }
}

const scoreBorderlands = (board) => {
    let points = 0
    for (let i = 0; i < board.length; i++) {
        board.every((row) => row[i] !== 'E' && row[i] !== 'R') ? points += 6 : ''
    }
    points += board.filter((row) => row.every((cell) => cell !== 'E' && cell !== 'R')).length * 6
    return points
}

const scoreCanalLake = (board) => {
    //Water next to farm, farm next to water 1 point
    let points = 0
    board.forEach((row, ri) => {
        row.forEach((cell, ci) => {
            if (cell === 'W' && ((board[ri - 1] !== undefined && board[ri - 1][ci] === 'FA') 
            || (board[ri][ci + 1] === 'FA') 
            || board[ri + 1] !== undefined && board[ri + 1][ci] === 'FA') 
            || board[ri][ci - 1] === 'FA') {
                points++
            }
            if (cell === 'FA' && ((board[ri - 1] !== undefined && board[ri - 1][ci] === 'W') 
            || (board[ri][ci + 1] === 'W') 
            || board[ri + 1] !== undefined && board[ri + 1][ci] === 'W') 
            || board[ri][ci - 1] === 'W') {
                points++
            }
        })
    })
    console.log(points)
}

const scoreGreatCity = (board) => {

}

const scoreGreenbough = (board) => {

}

const scoreGreengoldPlains = (board) => {

}

const scoreLostBarony = (board) => {

}

const scoreMagesValley = (board) => {

}

const scoreSentinelWood = (board) => {

}

const scoreShieldgate = (board) => {

}

const scoreShoresideExpanse = (board) => {

}

const scoreStonesideForest = (board) => {

}

const scoreTheBrokenRoad = (board) => {

}

const scoreTheCauldrons = (board) => {

}

const scoreTheGoldenGranary = (board) => {

}

const scoreTreetower = (board) => {

}

const scoreWildholds = (board) => {

}


module.exports = {
    scoreScoringCard
}