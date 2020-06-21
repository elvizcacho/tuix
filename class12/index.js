
const text = 'Strings'
const number = 123
const booleanoTrue = true
const booleanoFalse = false

/* lists */
const list = [0, 1, 2, 3, 4, 5]
const nombres  = ['juan', 'jose', 'sebastian']
const mix = [1, 'texto', [0, 1, [1, 3, [3, 2323, [223, 21, ['special hi!']]]], 3], false]

// objects
const person = {
    age: 10,
    name: 'Juan',
    pastJobs: [
        {
            duration: 12,
            name: 'rappi bici'
        },
        {
            duration: 6,
            name: 'rappi moto'
        },
        {
            duration: 1,
            name: 'counter'
        }
    ],
    run: function () {
        console.log("I'm running")
    }
}

// function

function add(num1, num2) {
    return num1 + num2
}

function mult(num1, num2) {
    return num1 * num2
}

function add3(num1, num2, num3) {
    const result1 = add(num1, num2) // num1 + num2
    const result2 = add(result1, num3)  // result1 + num3

    return result2
}

function superMessage(message) {
    console.log("/**************/")
    console.log("SUPER: ", message)
    console.log("/**************/")
}

const suma = add

function addAndExecute(num1, num2, fn) {
    fn()
    return num1 + num2
}

console.log(addAndExecute(2, 5, person.run))


// calculator(2, 3, addition) -> 5
// calculator(2, 3, multiplication) -> 6
// calculator(2, 3, division) -> 0.6666666
// calculator(2, 3, difference) -> -1

console.log(calculator(2, 3, add))
