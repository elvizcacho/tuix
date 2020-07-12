
/* References */

const megaSquare1 = document.getElementById('mega-square-1')

const upButton = document.getElementById('up-btn')
const downButton = document.getElementById('down-btn')
const leftButton = document.getElementById('left-btn')
const rightButton = document.getElementById('right-btn')

const blueColor = document.getElementById('blue-btn')
const redColor = document.getElementById('red-btn')
const yellowColor = document.getElementById('yellow-btn')
const greenColor = document.getElementById('green-btn')

const smallSize = document.getElementById('small-btn')
const bigSize = document.getElementById('big-btn')


const megaSquare2 = document.getElementById('mega-square-2')

const upButton2 = document.getElementById('up-btn2')
const downButton2 = document.getElementById('down-btn2')
const leftButton2 = document.getElementById('left-btn2')
const rightButton2 = document.getElementById('right-btn2')

const blueColor2 = document.getElementById('blue-btn2')
const redColor2 = document.getElementById('red-btn2')
const yellowColor2 = document.getElementById('yellow-btn2')
const greenColor2 = document.getElementById('green-btn2')

const smallSize2 = document.getElementById('small-btn2')
const bigSize2 = document.getElementById('big-btn2')


/* Direction */

let verticalSteps = 10
let horizontalSteps = 10

const onClickUpButton = function() {
   verticalSteps += 10
   const newTopValue = verticalSteps + 'px'
   megaSquare1.style.bottom = newTopValue
}

const mouseDownUpButton = function() {
    upButton.style.boxShadow = 'none'
}

const mouseUpUpButton = function() {
    upButton.style.boxShadow = '2px 2px 4px 0px rgba(0, 0, 0, .4)'
}

const onClickDownButton = function() {
    verticalSteps -= 10
    const newDownValue = verticalSteps + 'px'
    megaSquare1.style.bottom = newDownValue
}

const onClickLeftButton = function() {
    horizontalSteps -= 10
    const newLeftValue = horizontalSteps + 'px'
    megaSquare1.style.left = newLeftValue
}

const onClickRightButton = function() {
    horizontalSteps += 10
    const newLeftValue = horizontalSteps + 'px'
    megaSquare1.style.left = newLeftValue
}


/* Color */

const onClickBlueColor = function () {
    megaSquare1.style.backgroundColor = '#577590'
}

const onClickRedColor = function () {
    megaSquare1.style.backgroundColor = '#f94144'
}

const onClickyellowColor = function () {
    megaSquare1.style.backgroundColor = '#f9c74f'
}

const onClickgreenColor = function () {
    megaSquare1.style.backgroundColor = '#90be6d'
}


/* Size */

let size = 100

const onClickSmallButton = function () {
    size = size - 10
    const newSizeValue = size + 'px'
    megaSquare1.style.width = newSizeValue
    megaSquare1.style.height = newSizeValue
}

const onClickBigButton = function () {
    size = size + 10
    const newSizeValue = size + 'px'
    megaSquare1.style.width = newSizeValue
    megaSquare1.style.height = newSizeValue
}



upButton.addEventListener('click', onClickUpButton)
upButton.addEventListener('mousedown', mouseDownUpButton) //No shadow
upButton.addEventListener('mouseup', mouseUpUpButton)
downButton.addEventListener('click', onClickDownButton)
leftButton.addEventListener('click', onClickLeftButton)
rightButton.addEventListener('click', onClickRightButton)

blueColor.addEventListener('click', onClickBlueColor)
redColor.addEventListener('click', onClickRedColor)
yellowColor.addEventListener('click', onClickyellowColor)
greenColor.addEventListener('click', onClickgreenColor)

smallSize.addEventListener('click', onClickSmallButton)
bigSize.addEventListener('click', onClickBigButton)
