
/* shadows */
const mouseDownUpButton = function() {
    upButton.style.boxShadow = 'none'
    downButton.style.boxShadow = 'none'
}

const mouseUpUpButton = function() {
    upButton.style.boxShadow = '2px 2px 4px 0px rgba(0, 0, 0, .4)'
}


/* References */

// Player 1

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

// Player 2

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

// Lines

const line1 = document.getElementById('line1')
const line2 = document.getElementById('line2')
const line3 = document.getElementById('line3')
const line4 = document.getElementById('line4')


/* Direction */

let verticalSteps = 10
let horizontalSteps = 10

// Player 1

const onClickUpButton = function() {
   verticalSteps += 10
   const newTopValue = verticalSteps + 'px'
   megaSquare1.style.bottom = newTopValue
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

// Player 2

const onClickUpButton2 = function() {
    verticalSteps -= 10
    const newTopValue = verticalSteps + 'px'
    megaSquare2.style.top = newTopValue
 }

const onClickDownButton2 = function() {
    verticalSteps += 10
    const newDownValue = verticalSteps + 'px'
    megaSquare2.style.top = newDownValue
 }

const onClickLeftButton2 = function() {
    horizontalSteps += 10
    const newLeftValue = horizontalSteps + 'px'
    megaSquare2.style.right = newLeftValue
 }

const onClickRightButton2 = function() {
    horizontalSteps -= 10
    const newLeftValue = horizontalSteps + 'px'
    megaSquare2.style.right = newLeftValue
 }


/* Color */

// Player 1

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

// Player 2

const onClickBlueColor2 = function () {
    megaSquare2.style.backgroundColor = '#577590'
}

const onClickRedColor2 = function () {
    megaSquare2.style.backgroundColor = '#f94144'
}

const onClickyellowColor2 = function () {
    megaSquare2.style.backgroundColor = '#f9c74f'
}

const onClickgreenColor2 = function () {
    megaSquare2.style.backgroundColor = '#90be6d'
}


/* Size */

let size = 100

// Player 1

const onClickSmallButton = function () {
    size -= 10
    const newSizeValue = size + 'px'
    megaSquare1.style.width = newSizeValue
    megaSquare1.style.height = newSizeValue
}

const onClickBigButton = function () {
    size += 10
    const newSizeValue = size + 'px'
    megaSquare1.style.width = newSizeValue
    megaSquare1.style.height = newSizeValue
}

// Player 2

const onClickSmallButton2 = function () {
    size -= 10
    const newSizeValue = size + 'px'
    megaSquare2.style.width = newSizeValue
    megaSquare2.style.height = newSizeValue
}

const onClickBigButton2 = function () {
    size += 10
    const newSizeValue = size + 'px'
    megaSquare2.style.width = newSizeValue
    megaSquare2.style.height = newSizeValue
}

/* Lines */

/*const line1 = function () {

}*/

//---------------------


// Player 1
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

// Player 2
upButton2.addEventListener('click', onClickUpButton2)
downButton2.addEventListener('click', onClickDownButton2)
leftButton2.addEventListener('click', onClickLeftButton2)
rightButton2.addEventListener('click', onClickRightButton2)

blueColor2.addEventListener('click', onClickBlueColor2)
redColor2.addEventListener('click', onClickRedColor2)
yellowColor2.addEventListener('click', onClickyellowColor2)
greenColor2.addEventListener('click', onClickgreenColor2)

smallSize2.addEventListener('click', onClickSmallButton2)
bigSize2.addEventListener('click', onClickBigButton2)
