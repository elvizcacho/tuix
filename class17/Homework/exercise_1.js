

console.log('———Intit Exercise 1———')

const n = 3

for (i = 1; i <= n; i++ ) {

    let row = ''
    for (j = n; j >= i; j--) {

        row += '*'
    }

    for (let k = 1; k < i; k++) {
        row += ' '
    }

    console.log(row)
}

console.log('———End———')
