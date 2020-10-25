
const container = document.getElementById("container")
const digital = document.getElementById("digits")
const btn1 = document.getElementById("start/stop")
const btn2 = document.getElementById("reset")
const minHand = document.getElementById("min-hand")
const secHand = document.getElementById("sec-hand")
const mSecHand = document.getElementById("millsec-hand")

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
        mSecHand.style.transform = `rotateZ(${mSec*3.6}deg)`        
        console.log(mSec)
    
        if (mSec === 100) {
            mSec = 0
            sec ++

            secHand.style.transform = `rotateZ(${sec*6}deg)`    
            console.log(sec)
        }
        if (sec === 60) {
            sec = 0
            min ++
    
            minHand.style.transform = `rotateZ(${min*6}deg)`    
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
    
        digital.innerHTML = displayMin + ':' + displaySec + ':' + displayMSec
        
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

    digital.innerHTML = '00:00:00'

    mSecHand.style.transform = `rotateZ(0deg)`
    secHand.style.transform = `rotateZ(0deg)`
    minHand.style.transform = `rotateZ(0deg)`

    console.log(isStopwatchOn)
}


btn1.addEventListener('click', onClickStarStop)
btn2.addEventListener('click', onClickReset)