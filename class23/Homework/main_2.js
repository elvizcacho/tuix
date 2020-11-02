const n = 4

for (let i = 1; i <= n; i++) {

    let row = ''

    for (let j = 1; j <= 1; j++) {
        if (i===1 || i === n) {
          row += ' '
        } else {
          row += '*'
        }
    }

    for (let h = 1; h <= n; h++) {
        if (i===1 || i === n) {
          row += '*'
        } else {
          row += ' '
        }
    }

    for (let k = 1; k <= 1; k++) {
      if (i===1 || i === n) {
          row += ' '
        } else {
          row += '*'
        }
    }

console.log(row);
}