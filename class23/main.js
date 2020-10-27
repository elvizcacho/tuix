const table = document.getElementById('table')

// 'X' 'O'
const matrix = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

let init = false
let player = 'X'

const onCellClicked = function (i, j) {
    matrix[i][j] = player
    rederTriqui()
    player = player === 'X' ? 'O' : 'X'

}

const addEventsToCells = function () {
    const cells = document.getElementsByClassName('cell')
    for (let x = 0; x < cells.length; x++) {
        const cell = cells[x]
        cell.addEventListener('click', (e) => {
            const ij = e.target.id.split('-').slice(1)
            onCellClicked(ij[0], ij[1])
        })
    }
}

const rederTriqui = function () {
    let result = ''
    for (let i = 0; i < matrix.length; i ++) {
        const row = matrix[i]
        result += '<div class="row">'
        for (let j = 0; j < row.length; j++) {
            result += `<div class="cell" id="cell-${i}-${j}">${row[j]}</div>`
        }
        result += '</div>'
    }
    table.innerHTML = result

    addEventsToCells()
}

rederTriqui()
