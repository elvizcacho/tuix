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
    // check for rows
    for (let i = 0; i < matrix.length; i ++) {
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
    }

    return {
        isThereAWinner: false,
        winnerCells: winnerCells
    }
}

const checkColumns = function (playerSymbol) {
    const winnerCells = [[null, null], [null, null], [null, null]]

    // check for columns
    let i = 0
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

const isThereAWinner = function () {
    // check rows
    const checkedRows = checkWinnerOnRows()
    if (checkedRows.isThereAWinner) {
        return checkedRows
    }
    //check columns
    const checkedColumns = checkWinnerOnColumns()
    if (checkedColumns.isThereAWinner) {
        return checkedColumns
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
                    result += `<div class="cell" id="cell-${i}-${j}">${row[j]}</div>`
                }
            } else {
                result += `<div class="cell" id="cell-${i}-${j}">${row[j]}</div>`
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
