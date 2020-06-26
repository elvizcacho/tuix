
function one(a) {
    const a = addition(num1)

    return a + 0
}


function addition(num1, num2, fn) {    
    return num1 + num2 - fn()
}

console.log(addition(2, 3, one))