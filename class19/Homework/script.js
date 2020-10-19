
let mSec = 0
let sec = 0
let min = 0

let isStopwatchOn = true
console.log(isStopwatchOn)
const stopwatch = setInterval(function() {
    if (isStopwatchOn === true) {

        mSec ++
        //console.log(mSec)

        if (mSec === 100) {
            mSec = 0
            sec ++

            //console.log(sec)
        }
        if (sec === 60) {
            sec = 0
            min ++

            //console.log(min)
        }

        if (mSec < 10) {
            displayMSec = '0' + mSec
        } else {
            displayMSec = mSec
        }

        if (sec < 10) {
            displaySec = '0' + sec
        } else {
            displaySec = sec
        }

        if (min < 10) {
            displayMin = '0' + min
        } else {
            displayMin = min
        }

        console.log(displayMin + ':' + displaySec + ':' + displayMSec)

    }
}, 10)


const onClickStarStop = function() {
    if (isStopwatchOn === true) {
        isStopwatchOn = false

        console.log('stop')
    } else {
        isStopwatchOn = true

        console.log('start')
    }
}

const onClickReset = function() {
    mSec = 0
    sec = 0
    min = 0

    console.log(isStopwatchOn)
}
