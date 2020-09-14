

let counter = 0

// setInterval runs every n seconds where n is the second parameter of the function
const interval = setInterval(function () {
    counter ++
    console.log(counter)
}, 100)

// set timeout runs only once
setTimeout(function () {
    clearInterval(interval)
}, 1000)
