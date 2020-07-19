
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

// Player 1

let verticalSteps = 10
let horizontalSteps = 10

const moveMegaSquareUp = function() {
    verticalSteps += 10
    const newBottomValue = verticalSteps + 'px'
    megaSquare1.style.bottom = newBottomValue
}

const moveMegaSquareDown = function() {
    verticalSteps -= 10
    const newBottomValue = verticalSteps + 'px'
    megaSquare1.style.bottom = newBottomValue
}

const moveMegaSquareLeft = function() {
    horizontalSteps -= 10
    const newLeftValue = horizontalSteps + 'px'
    megaSquare1.style.left = newLeftValue
}

const moveMegaSquareRight = function() {
    horizontalSteps += 10
    const newLeftValue = horizontalSteps + 'px'
    megaSquare1.style.left = newLeftValue
}

// Player 2

let verticalSteps2 = 10
let horizontalSteps2 = 10

const moveMegaSquareUp2 = function() {
    verticalSteps2 -= 10
    const newTopValue = verticalSteps2 + 'px'
    megaSquare2.style.top = newTopValue
 }

const moveMegaSquareDown2 = function() {
    verticalSteps2 += 10
    const newTopValue = verticalSteps2 + 'px'
    megaSquare2.style.top = newTopValue
 }

const moveMegaSquareLeft2 = function() {
    horizontalSteps2 += 10
    const newRightValue = horizontalSteps2 + 'px'
    megaSquare2.style.right = newRightValue
 }

const moveMegaSquareRight2 = function() {
    horizontalSteps2 -= 10
    const newRightValue = horizontalSteps2 + 'px'
    megaSquare2.style.right = newRightValue
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

const topLimit = 710
const rightLimit = 897.3
const bottomLimit = topLimit
const leftLimit = rightLimit

const line1LeftSide = 288
const line1RightSide = line1LeftSide + 5
const line1TopSide = 475.5


const horizontalBlock = function () {
    let megaSquare1RightSide = horizontalSteps + size
    let megaSquare1LeftSide = horizontalSteps
    /* let megaSquare1TopSide = verticalSteps + size */
    let megaSquare1LowerSide = verticalSteps

    if (megaSquare1RightSide >= line1LeftSide && megaSquare1LowerSide <= line1TopSide) {
        megaSquare1.style.left = line1LeftSide - size + 'px'
    }
    if (megaSquare1LeftSide <= 0) {
        megaSquare1.style.left = 0 + 'px'
    }
    if (megaSquare1RightSide >= rightLimit) {
        megaSquare1.style.left = rightLimit - size + 'px'
    }
}

const verticalBlock = function() {
    let megaSquare1RightSide = horizontalSteps + size
    let megaSquare1LeftSide = horizontalSteps
    let megaSquare1TopSide = verticalSteps + size
    let megaSquare1LowerSide = verticalSteps
    
    if (megaSquare1TopSide >= topLimit) {
        megaSquare1.style.bottom = topLimit - size + 'px'
    }
    if (megaSquare1LowerSide <= 0) {
        megaSquare1.style.bottom = 0 + 'px'
    }
    if (megaSquare1LowerSide <= line1TopSide && megaSquare1LeftSide <= line1RightSide && megaSquare1RightSide >= line1LeftSide) {
        megaSquare1.style.bottom >= line1TopSide + 'px'
    }
}

/* Keyboard control */

const onKeyPress = function(event) {
    switch (event.key) {
        case "a":
            moveMegaSquareLeft()
            horizontalBlock()
            break
        case "d":
            moveMegaSquareRight()
            horizontalBlock()
            break
        case "w":
            moveMegaSquareUp()
            verticalBlock()
            break
        case "s":
            moveMegaSquareDown()
            verticalBlock()
            break
        case "ArrowUp":
            moveMegaSquareUp2()
            break
        case "ArrowDown":
            moveMegaSquareDown2()
            break
        case "ArrowLeft":
            moveMegaSquareLeft2()
            break
        case "ArrowRight":
            moveMegaSquareRight2()
            break
        default:
            alert("This key is not supported, please use a, d, left arrow or right arrow.")
            break
    }
}


//---------------------

document.addEventListener('keydown', onKeyPress)

// Player 1
upButton.addEventListener('click', moveMegaSquareUp)
upButton.addEventListener('click', verticalBlock)
upButton.addEventListener('mousedown', mouseDownUpButton) //No shadow
upButton.addEventListener('mouseup', mouseUpUpButton)
downButton.addEventListener('click', moveMegaSquareDown)
downButton.addEventListener('click', verticalBlock)
leftButton.addEventListener('click', moveMegaSquareLeft)
leftButton.addEventListener('click', horizontalBlock)
rightButton.addEventListener('click', moveMegaSquareRight)
rightButton.addEventListener('click', horizontalBlock)

blueColor.addEventListener('click', onClickBlueColor)
redColor.addEventListener('click', onClickRedColor)
yellowColor.addEventListener('click', onClickyellowColor)
greenColor.addEventListener('click', onClickgreenColor)

smallSize.addEventListener('click', onClickSmallButton)
bigSize.addEventListener('click', onClickBigButton)

// Player 2
upButton2.addEventListener('click', moveMegaSquareUp2)
downButton2.addEventListener('click', moveMegaSquareDown2)
leftButton2.addEventListener('click', moveMegaSquareLeft2)
rightButton2.addEventListener('click', moveMegaSquareRight2)

blueColor2.addEventListener('click', onClickBlueColor2)
redColor2.addEventListener('click', onClickRedColor2)
yellowColor2.addEventListener('click', onClickyellowColor2)
greenColor2.addEventListener('click', onClickgreenColor2)

smallSize2.addEventListener('click', onClickSmallButton2)
bigSize2.addEventListener('click', onClickBigButton2)
