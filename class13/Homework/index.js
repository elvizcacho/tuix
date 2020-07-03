
/* References */

const megaSquare = document.getElementById('mega-square')

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


/* Direction */

let verticalSteps = 0
let horizontalSteps = 50

const onClickUpButton = function() {
   verticalSteps = verticalSteps + 10
   const newTopValue = verticalSteps + 'px'
   megaSquare.style.bottom = newTopValue
}

/* const mouseDownUpButton = function() {
    upButton.style.boxShadow = 'none'
}

const mouseUpUpButton = function() {
    upButton.style.boxShadow = '2px 2px 4px 0px rgba(0, 0, 0, .4)'
} */

const onClickDownButton = function() {
    verticalSteps = verticalSteps - 10
    const newDownValue = verticalSteps + 'px'
    megaSquare.style.bottom = newDownValue 
}

const onClickLeftButton = function() {
    horizontalSteps = horizontalSteps - 1
    const newLeftValue = horizontalSteps + '%'
    megaSquare.style.left = newLeftValue 
}

const onClickRightButton = function() {
    horizontalSteps = horizontalSteps + 1
    const newLeftValue = horizontalSteps + '%'
    megaSquare.style.left = newLeftValue 
}


/* Color */

const onClickBlueColor = function () {
    megaSquare.style.backgroundColor = '#577590'
}

const onClickRedColor = function () {
    megaSquare.style.backgroundColor = '#f94144'
}

const onClickyellowColor = function () {
    megaSquare.style.backgroundColor = '#f9c74f'
}

const onClickgreenColor = function () {
    megaSquare.style.backgroundColor = '#90be6d'
}


/* Size */

let size = 100

const onClickSmallButton = function () {
    size = size - 10
    const newSizeValue = size + 'px'
    megaSquare.style.width = newSizeValue
    megaSquare.style.height = newSizeValue
}

const onClickBigButton = function () {
    size = size + 10
    const newSizeValue = size + 'px'
    megaSquare.style.width = newSizeValue
    megaSquare.style.height = newSizeValue
}



upButton.addEventListener('click', onClickUpButton)
/* upButton.addEventListener('mousedown', mouseDownUpButton) //No shadow
upButton.addEventListener('mouseup', mouseDownUpButton) */
downButton.addEventListener('click', onClickDownButton)
leftButton.addEventListener('click', onClickLeftButton)
rightButton.addEventListener('click', onClickRightButton)

blueColor.addEventListener('click', onClickBlueColor)
redColor.addEventListener('click', onClickRedColor)
yellowColor.addEventListener('click', onClickyellowColor)
greenColor.addEventListener('click', onClickgreenColor)

smallSize.addEventListener('click', onClickSmallButton)
bigSize.addEventListener('click', onClickBigButton)