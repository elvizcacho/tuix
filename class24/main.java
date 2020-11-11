const n = 4

const isACorner = function (i, j, n) {
    return (j === 1 || j === n) && (i === 1 || i === n)
}

const isInside = function (i, j, n) {
    return (j > 1 && j < n) && (i > 1 && i < n)
}

for (var i = 1; i <= n; i++) {

    var row = ''

    for (var j = 1; j <= n; j++) {
        if (isACorner(n, i, j)) {
          row += ' '
        } else {
          row += isInside(i, j, n) ? ' ' :  '*'
        }
    }

console.log(row);
}
