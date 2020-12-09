const n = 4
const N = n + 2

const isACorner = function (i, j, N) {
    return (j === 1 || j === N) && (i === 1 || i === N)
}

const isInside = function (i, j, N) {
    return (j > 1 && j < N) && (i > 1 && i < N)
}

for (let i = 1; i <= N; i++) {

    let row = ''

    for (let j = 1; j <= N; j++) {
        if (isACorner(i, j, N)) {
          row += ' '
        } else {
          row += isInside(i, j, N) ? ' ' :  '*'
        }
    }

    console.log(row);
}