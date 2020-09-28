const container = document.getElementById("container")
const btn1 = document.getElementById("start/stop")
const btn2 = document.getElementById("reset")
btn2.innerHTML = stopWatch.textBtn2

stopWatch.handlerDisplayChange = function (display) {
    container.innerHTML = `${display.min}:${display.sec}:${display.cSec}`
}

const onClickStarStop = function() {
    if (stopWatch.on) {
        stopWatch.stop()
    } else {
        stopWatch.start()
    }
    btn1.innerHTML = stopWatch.textBtn1
}

const onClickReset = function() {
    stopWatch.reset()
}

btn1.addEventListener('click', onClickStarStop)
btn2.addEventListener('click', onClickReset)


