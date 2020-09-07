
console.log('———Intit Exercise 5———')

const n = 5


for (let i = 1; i <= n; i++) {

    let row = ''

    for (let j = 1; j <= (n - i); j++) {
        row += ' '
    }

    for (let h = 1; h <= i; h++) {
        row += '*'
    }

    for (k = 1; k <= n; k++) {

        row += '*'
    }

console.log(row);
}

console.log('———End———')
