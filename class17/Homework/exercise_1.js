

console.log('———Intit Exercise 1———')

const n = 10

for (i = 1; i <= n; i++ ) {

    let row = ''
    for (j = 10; j >= i; j--) {

        row += '*'
    }

    for (let k = 1; k < i; k++) {
        row += ' '
    }

    console.log(row)
}

console.log('———End———')