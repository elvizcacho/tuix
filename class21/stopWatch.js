stopWatch = {
    tack: 0,
    on: false,
    intervalId: 0,
    display: {
        cSec: '00',
        sec: '00',
        min: '00'
    },
    textBtn1: 'Start',
    textBtn2: 'Reset',
    start: function () {
        stopWatch.on = true
        stopWatch.intervalId = setInterval(stopWatch.counter, 10)
        stopWatch.textBtn1 = 'Stop'
    },
    stop: function () {
        stopWatch.on = false
        clearInterval(stopWatch.intervalId)
        stopWatch.textBtn1 = 'Start'
    },
    reset: function () {
        stopWatch.tack = -1
        stopWatch.counter()
        stopWatch.stop()
    },
    counter: function () {
        stopWatch.tack ++

        const cSec = stopWatch.tack % 100
        const sec = Math.floor(stopWatch.tack / 100) % 60
        const min = Math.floor(stopWatch.tack / (60 * 100)) % 60

        stopWatch.display.cSec  = (cSec < 10) ? `0${cSec}` : cSec.toString()
        stopWatch.display.sec = (sec < 10) ? `0${sec}` : sec.toString()
        stopWatch.display.min = (min < 10) ? `0${min}` : min.toString()
        stopWatch.onDisplayChange();
    },
    onDisplayChange: function () {
        stopWatch.handlerDisplayChange(stopWatch.display)
    },
    handlerDisplayChange: function () {}
}
