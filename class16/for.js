
//i = i + 1 = i ++

console.log('---- INIT ---')

for (let i = 0; i < 10; i ++) {
    if (i % 2 === 0) {
        if (i % 3 === 0) {
            console.log(i + ' es par y multiplo de 3')
        } else {
            console.log(i + ' es par')
        }
    } else {
        if (i % 3 === 0) {
            console.log(i + ' es impar y multiplo de 3')
        } else {
            console.log(i + ' es impar')
        }
    }
}

console.log('---- END ---')
