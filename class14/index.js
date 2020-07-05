
const megaSquare = document.getElementById('mega-square-1')
const megaSquare2 = document.getElementById('mega-square-2')
const button = document.getElementById('button-1')
const button2 = document.getElementById('button-2')
const button3 = document.getElementById('button-3')
const button4 = document.getElementById('button-4')
const button5 = document.getElementById('button-5')
const button6 = document.getElementById('button-6')


/*const pxToNumber = function (px) {
    return Number(px.split('px')[0])
}

const line1Position = pxToNumber(window.getComputedStyle(line1).left)
const line1Width = pxToNumber(window.getComputedStyle(line1).width)
const line2Position = pxToNumber(window.getComputedStyle(line2).left)
const line2Width = pxToNumber(window.getComputedStyle(line2).width)
const megaSquareWidth = pxToNumber(window.getComputedStyle(megaSquare).width)*/

const megaSquareWidth = 100
const megaSquare2Width = 100
let leftMS1 = 50
let leftMS2 = 1000

megaSquare.style.width = megaSquareWidth + 'px'
megaSquare.style.left = leftMS1
megaSquare2.style.width = megaSquare2Width + 'px'
megaSquare2.style.left = leftMS2


const setFigureLeft = function(figure, value, increment, direction) {
    let newValue = value

    if (direction === 'left') {
        newValue -= increment
    }
    if (direction === 'right') {
        newValue += increment
    }

    const newValueToPx = newValue + 'px'

    figure.style.left = newValueToPx

    return newValue

}

const checkCollision = function () {
    const leftPointMS1 = leftMS1
    const rightPointMS1 = leftMS1 + megaSquareWidth
    const leftPointMS2 = leftMS2
    const rightPointMS2 = leftMS2 + megaSquare2Width

    if (leftPointMS2 < rightPointMS1 && leftPointMS2 > leftPointMS1 || rightPointMS2 < rightPointMS1 && rightPointMS2 > leftPointMS1) { // left point from MG2 is inside MG1
        megaSquare.style.backgroundColor = '#F00'
        megaSquare2.style.backgroundColor = '#F00'

        return true
    } else {
        megaSquare.style.backgroundColor = '#00F'
        megaSquare2.style.backgroundColor = '#00F'

        return false
    }
}

const moveMegaSquareLeft = function() {
    leftMS1 = setFigureLeft(megaSquare, leftMS1,100, 'left')
    if (checkCollision()) {
        console.log('CRASH!!!')
    } else {
        console.log('ALLRIGHT!!!')
    }
}

const moveMegaSquareRight = function() {
    leftMS1 = setFigureLeft(megaSquare, leftMS1,100, 'right')
    if (checkCollision()) {
        console.log('CRASH!!!')
    } else {
        console.log('ALLRIGHT!!!')
    }

}

const moveMegaSquare2Right = function() {
    leftMS2 = setFigureLeft(megaSquare2, leftMS2,100, 'right')
    if (checkCollision()) {
        console.log('CRASH!!!')
    } else {
        console.log('ALLRIGHT!!!')
    }
}

const moveMegaSquare2Left = function() {
    leftMS2 = setFigureLeft(megaSquare2, leftMS2,100, 'left')
    if (checkCollision()) {
        console.log('CRASH!!!')
    } else {
        console.log('ALLRIGHT!!!')
    }
}

const startAnimation = function() {
    megaSquare.style.animationName  = 'party'
}

const stopAnimation = function() {
    megaSquare.style.animationName = 'unset'
}

button.addEventListener('click', moveMegaSquareLeft)
button5.addEventListener('click', moveMegaSquareRight)
button4.addEventListener('click', moveMegaSquare2Left)
button6.addEventListener('click', moveMegaSquare2Right)
button2.addEventListener('click', startAnimation)
button3.addEventListener('click', stopAnimation)
