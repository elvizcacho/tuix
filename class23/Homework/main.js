
console.log('———Intit Exercise O ———')

const n = 4
const j = n + 1

const drawSymbol = function (n, symbol) {
    let row = ''

    for (let h = 1; h <= n; h++) {
        row += symbol
    }

    return row
}

const drawEdge = function () {
    let row = ''
    row += drawSymbol(1, ' ')
    row += drawSymbol(n - 1, '*')
    row += drawSymbol(1, ' ')
    return row
}

let result = ''
const saveToResult = function (row) {
    result += row + '\n'
}


for (let i = 1; i <= j; i++) {
    let row = ''
    // first line
    if (i === 1 || i === j) {
        row += drawEdge()
        saveToResult(row)
        continue
    }

    row += drawSymbol(1, '*')
    row += drawSymbol(n - 1, ' ')
    row += drawSymbol(1, '*')
    saveToResult(row)

}

console.log(result.substr(0, result.length - 1))

console.log('———End———')
