const dice = document.getElementById("dice1")
const dice2 = document.getElementById("dice2")
const playBtn = document.getElementById("play-btn")


const getDots = function (n) {
    switch (n) {
        case 1:
            return `<div class="dice">
                        <div class="dot one"></div>
                   </div>`
        case 2:
            return `<div class="dice">
                        <div class="dot two-a"></div>
                        <div class="dot two-b"></div>
                    </div>`
        case 3:
            return `<div class="dice">
                        <div class="dot three-a"></div>
                        <div class="dot three-b"></div>
                        <div class="dot three-c"></div>
                    </div>`
        case 4:
            return `<div class="dice">
                        <div class="dot four-a"></div>
                        <div class="dot four-b"></div>
                        <div class="dot four-c"></div>
                        <div class="dot four-d"></div>
                    </div>`
        case 5:
            return `<div class="dice">
                        <div class="dot five-a"></div>
                        <div class="dot five-b"></div>
                        <div class="dot five-c"></div>
                        <div class="dot five-d"></div>
                        <div class="dot five-e"></div>
                    </div>`
        case 6:
            return `<div class="dice">
                        <div class="dot six-a"></div>
                        <div class="dot six-b"></div>
                        <div class="dot six-c"></div>
                        <div class="dot six-d"></div>
                        <div class="dot six-e"></div>
                        <div class="dot six-f"></div>
                    </div>`
    }
}

const generateNumber = function() {
    return Math.ceil((Math.random() * 6))
}

const renderDice = function () {
    dice.innerHTML = getDots(generateNumber())
    dice2.innerHTML = getDots(generateNumber())
}



const throwDice = function () {

    const intervalId = setInterval(function () {
        renderDice()
    }, 200)

    setTimeout(function () {
        clearInterval(intervalId)
    }, 2000)
}

playBtn.addEventListener('click', throwDice)

throwDice()
