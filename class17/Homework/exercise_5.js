
console.log('———Intit Exercise 5———')

const n = 10


for (let i = 1; i <= n; i++) {

    let row = ''

    for (let j = 1; j <= (n - i); j++) {
        row += ' '
    }

    for (let h = 0; h != (2 * i - 1); h++) {
        row += '*'
    }

    for (k = i + 1; k <= n; k++) {

        row += ' '
    }

console.log(row);
}

console.log('———End———')
