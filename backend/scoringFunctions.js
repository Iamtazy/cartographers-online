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
    //Column
    for (let i = 0; i < board.length; i++) {
        board.every((row) => cellNotEmpty(row[i])) ? points += 6 : ''
    }
    //Row
    points += board.filter((row) => row.every((cell) => cellNotEmpty(cell))).length * 6
    return points
}

const scoreCanalLake = (board) => {
    let points = 0
    board.forEach((row, ri) => {
        row.forEach((cell, ci) => {
            if (cell === 'W' && ((board[ri - 1] !== undefined && board[ri - 1][ci] === 'FA') 
            || (board[ri][ci + 1] === 'FA') 
            || board[ri + 1] !== undefined && board[ri + 1][ci] === 'FA' 
            || board[ri][ci - 1] === 'FA')) {
                points++
            }
            if (cell === 'FA' && ((board[ri - 1] !== undefined && board[ri - 1][ci] === 'W') 
            || (board[ri][ci + 1] === 'W') 
            || board[ri + 1] !== undefined && board[ri + 1][ci] === 'W' 
            || board[ri][ci - 1] === 'W')) {
                points++
            }
        })
    })
    return points
}

const scoreGreatCity = (board) => {

}

const scoreGreenbough = (board) => {
    let points = 0
    //Column
    for (let i = 0; i < board.length; i++) {
        board.filter((row) => row[i] === 'FO').length > 0 ? points ++ : ''
    }
    //Row
    points += board.filter((row) => row.some((cell) => cell === 'FO')).length
    return points
}

const scoreGreengoldPlains = (board) => {

}

const scoreLostBarony = (board) => {

}

const scoreMagesValley = (board) => {
    let points = 0
    let adjacentCells = []
    board.forEach((row, ri) => {
        row.forEach((cell, ci) => {
            if (cell === 'MOU') {
                board[ri - 1] !== undefined ? adjacentCells.push(board[ri - 1][ci]) : ''
                adjacentCells.push(board[ri][ci + 1])
                board[ri + 1] !== undefined ? adjacentCells.push(board[ri + 1][ci]) : ''
                adjacentCells.push(board[ri][ci - 1]) 
            }
        })
    })
    points += adjacentCells.filter((cell) => cell === 'W').length * 2 + adjacentCells.filter((cell) => cell === 'FA').length
    return points
}

const scoreSentinelWood = (board) => {
    let points = 0
    //First and last column
    points += board.filter((row) => row[0] === 'FO').length
    points += board.filter((row) => row[board.length - 1] === 'FO').length
    //Top and bottom row
    points += board[0].filter((cell) => cell === 'FO').length
    points += board[board.length - 1].filter((cell) => cell === 'FO').length
    return points
}

const scoreShieldgate = (board) => {

}

const scoreShoresideExpanse = (board) => {

}

const scoreStonesideForest = (board) => {

}

const scoreTheBrokenRoad = (board) => {
    let points = 0;
    for(let r = 0; r < board.length; r++){
        let numOfNonEmpty = 0
        for (let c = 0; c < board.length - r; c++) {
            cellNotEmpty(board[r + c][c]) ? numOfNonEmpty++ : ''
        }
        numOfNonEmpty === board.length - r ? points++ : ''
    }
    return points
}

const scoreTheCauldrons = (board) => {
    let points = 0
    board.forEach((row, ri) => {
        row.forEach((cell, ci) => {
            if (!cellNotEmpty(cell) && ((board[ri - 1] === undefined || cellNotEmpty(board[ri - 1][ci])) 
            && (board[ri][ci + 1] === undefined || cellNotEmpty(board[ri][ci + 1])) 
            && (board[ri + 1] === undefined || cellNotEmpty(board[ri + 1][ci])) 
            && (board[ri][ci - 1] === undefined || cellNotEmpty(board[ri][ci - 1])))) {
                points++
            }
        })
    })
    return points
}

const scoreTheGoldenGranary = (board) => {

}

const scoreTreetower = (board) => {

}

const scoreWildholds = (board) => {

}

const cellNotEmpty = (cell) => {
    return cell !== 'E' && cell !== 'R'
}


module.exports = {
    scoreScoringCard
}