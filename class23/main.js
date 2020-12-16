const table = document.getElementById('table')

// 'X' 'O'
const matrix = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

let player = 'X'


const getWinnerCells = function () {
    return [[null, null], [null, null], [null, null]]
}

const checkRows = function (playerSymbol) {
    const winnerCells = [[null, null], [null, null], [null, null]]
    const row1 = matrix[0][0] === playerSymbol && matrix[0][1] === playerSymbol && matrix[0][2] === playerSymbol
    const row2 = matrix[1][0] === playerSymbol && matrix[1][1] === playerSymbol && matrix[1][2] === playerSymbol
    const row3 = matrix[2][0] === playerSymbol && matrix[2][1] === playerSymbol && matrix[2][2] === playerSymbol

    if (row1) {
        return {
            isThereAWinner: true,
            winnerCells: [[0,0],[0,1],[0,2]]
        }
    }

    if (row2) {
        return {
            isThereAWinner: true,
            winnerCells: [[1,0],[1,1],[1,2]]
        }
    }

    if (row3) {
        return {
            isThereAWinner: true,
            winnerCells: [[2,0],[2,1],[2,2]]
        }
    }

    // check for rows
    /* for (let i = 0; i < matrix.length; i ++) {
        let counter = 0;
        for (let j = 0; j < matrix[i].length; j ++) { 
            if (matrix[i][j] === playerSymbol) {
                winnerCells[counter] = [i, j]
                counter ++
            } 
        }
        if (counter === matrix[i].length) {
            return {
                isThereAWinner: true,
                winnerCells: winnerCells
            }
        }
    }*/

    return {
        isThereAWinner: false,
        winnerCells: winnerCells
    }
}

const checkColumns = function (playerSymbol) {
    const winnerCells = [[null, null], [null, null], [null, null]]
    const column1 = matrix[0][0] === playerSymbol && matrix[1][0] === playerSymbol && matrix[2][0] === playerSymbol
    const column2 = matrix[0][1] === playerSymbol && matrix[1][1] === playerSymbol && matrix[2][1] === playerSymbol
    const column3 = matrix[0][2] === playerSymbol && matrix[1][2] === playerSymbol && matrix[2][2] === playerSymbol

    if (column1) {
        return {
            isThereAWinner: true,
            winnerCells: [[0,0],[1,0],[2,0]]
        }
    }

    if (column2) {
        return {
            isThereAWinner: true,
            winnerCells: [[0,1],[1,1],[2,1]]
        }
    }

    if (column3) {
        return {
            isThereAWinner: true,
            winnerCells: [[0,2],[1,2],[2,2]]
        }
    }

    // check for columns
    /* let i = 0
    for (let j = 0; j < matrix[i].length; j ++) {
        let counter = 0;
        for (i = 0; i < matrix.length; i ++) {
            if (matrix[i][j] === playerSymbol) {
                winnerCells[counter] = [i, j]
                counter ++
            }
        }
        i = 0
        if (counter === matrix[i].length) {
            return {
                isThereAWinner: true,
                winnerCells: winnerCells
            }
        }
    } */

    return {
        isThereAWinner: false,
        winnerCells: winnerCells
    }
}

const checkDiagonals = function (playerSymbol) {
    const winnerCells = [[null, null], [null, null], [null, null]]
    const diagonal1 = matrix[0][0] === playerSymbol && matrix[1][1] === playerSymbol && matrix[2][2] === playerSymbol
    const diagonal2 = matrix[2][0] === playerSymbol && matrix[1][1] === playerSymbol && matrix[0][2] === playerSymbol

    if (diagonal1) {
        return {
            isThereAWinner: true,
            winnerCells: [[0,0],[1,1],[2,2]]
        }
    }

    if (diagonal2) {
        return {
            isThereAWinner: true,
            winnerCells: [[2,0],[1,1],[0,2]]
        }
    }


    return {
        isThereAWinner: false,
        winnerCells: winnerCells
    }
}

const checkWinnerOnRows = function () {
    const checkedXRows = checkRows('X')
    if (checkedXRows.isThereAWinner) {
        return checkedXRows
    }
    const checkedORows = checkRows('O')
    if (checkedORows.isThereAWinner) {
        return checkedORows
    }


    return checkedORows
}

const checkWinnerOnColumns = function () {
    const checkedXColumns = checkColumns('X')
    if (checkedXColumns.isThereAWinner) {
        return checkedXColumns
    }
    const checkedOColumns = checkColumns('O')
    if (checkedOColumns.isThereAWinner) {
        return checkedOColumns
    }


    return checkedOColumns
}

const checkWinnerOnDiagonals = function () {
    const checkedXDiagonals = checkDiagonals('X')
    if (checkedXDiagonals.isThereAWinner) {
        return checkedXDiagonals
    }
    const checkedODiagonals = checkDiagonals('O')
    if (checkedODiagonals.isThereAWinner) {
        return checkedODiagonals
    }


    return checkedODiagonals
}

const isThereAWinner = function () {
    // check rows
    const checkedRows = checkWinnerOnRows()
    if (checkedRows.isThereAWinner) {
        return {
            isThereAWinner: checkedRows.isThereAWinner,
            winnerCells: checkedRows.winnerCells,
        }
    }
    //check columns
    const checkedColumns = checkWinnerOnColumns()
    if (checkedColumns.isThereAWinner) {
        return checkedColumns
    }

    //check diagonals
    const checkedDiagonals = checkWinnerOnDiagonals()
    if (checkedDiagonals.isThereAWinner) {
        return checkedDiagonals
    }

    return checkedRows
}

const onCellClicked = function (i, j) {
    if (matrix[i][j] === null) {
        matrix[i][j] = player
        rederTriqui()
        player = player === 'X' ? 'O' : 'X'
    }
}

const addEventsToCells = function () {
    const cells = document.getElementsByClassName('cell')
    for (let x = 0; x < cells.length; x++) {
        const cell = cells[x]
        cell.addEventListener('click', function (e) {
            const ij = e.target.id.split('-').slice(1)
            onCellClicked(ij[0], ij[1])
        })
    }
}

const isCellPartOfWinnerCells = function (i, j, winnerCells) {
    for (let m = 0; m < winnerCells.length; m ++) {
        if (winnerCells[m][0] === i && winnerCells[m][1] === j) {
            return true
        }
    }
}

const rederTriqui = function () {
    let result = ''
    for (let i = 0; i < matrix.length; i ++) {
        const row = matrix[i]
        result += '<div class="row">'
        for (let j = 0; j < row.length; j++) {
            const isAWinner = isThereAWinner().isThereAWinner
            const winnerCells = isThereAWinner().winnerCells
            if (isAWinner) {
                if (isCellPartOfWinnerCells(i, j, winnerCells)) {
                    result += `<div class="cell winner" id="cell-${i}-${j}">
                                ${row[j]}
                                <div class="vertical-line"></div>
                               </div>`
                } else {
                    result += `<div class="cell" id="cell-${i}-${j}">
                                ${row[j]}
                               </div>`
                }
            } else {
                result += `<div class="cell" id="cell-${i}-${j}">
                            ${row[j]}
                           </div>`
            }
        }
        result += '</div>'
    }
    table.innerHTML = result

    if (!isThereAWinner().isThereAWinner) {
        addEventsToCells()
    }

}

rederTriqui()
