
const container = document.getElementById("container")
const btn1 = document.getElementById("start/stop")
const btn2 = document.getElementById("reset")

let mSec = 0
let sec = 0
let min = 0

let isStopwatchStopped = true

const stopwatch = function() {
    mSec ++
    console.log(mSec)

    if (mSec === 100) {
        mSec = 0
        sec ++

        console.log(sec)
    }
    if (sec === 60) {
        sec = 0
        min ++

        console.log(min)
    }

    container.innerHTML = min + ':' + sec + ':' + mSec
}


const onClickStarStop = function() {
    if (isStopwatchStopped = true) {
        setInterval(stopwatch, 10)

        isStopwatchStopped = false

        btn1.innerHTML = 'Stop'

        console.log('start')
    } else {
        clearInterval(stopwatch)

        isStopwatchStopped = true

        btn1.innerHTML = 'Start'

        console.log('stop')
    }
}

const onClickReset = function() {
    mSec = 0
    sec = 0
    min = 0

    clearInterval(stopwatch)

    container.innerHTML = '00:00:00'

    console.log('reset')
}



btn1.addEventListener('click', onClickStarStop)
btn2.addEventListener('click', onClickReset)
