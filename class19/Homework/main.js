
const container = document.getElementById("container")
const btn1 = document.getElementById("start/stop")
const btn2 = document.getElementById("reset")

let mSec = 0
let sec = 0
let min = 0

let isStopwatchOn = false

const stopwatch = setInterval(function() {
    if (isStopwatchOn === true) {
         let displayMSec = ''
         let displaySec = ''
         let displayMin = ''
        
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
    
        container.innerHTML = displayMin + ':' + displaySec + ':' + displayMSec
        
    }
}, 10)


const onClickStarStop = function() {
    if (isStopwatchOn === true) {
        isStopwatchOn = false
        btn1.innerHTML = 'Start'

        console.log(isStopwatchOn)
    } else {
        isStopwatchOn = true
        btn1.innerHTML = 'Stop'

        console.log(isStopwatchOn)
    }
}

const onClickReset = function() {
    mSec = 0
    sec = 0
    min = 0

    container.innerHTML = '00:00:00'

    console.log(isStopwatchOn)
}


btn1.addEventListener('click', onClickStarStop)
btn2.addEventListener('click', onClickReset)