
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext("2d")
ctx.lineWidth = 10

const gradient = ctx.createLinearGradient(125, 125, 250 + 125, 250 + 125);
gradient.addColorStop("0", "magenta");
gradient.addColorStop("0.5" ,"blue");
gradient.addColorStop("1.0", "red");
ctx.strokeStyle = gradient

// square
ctx.beginPath();
ctx.moveTo(125, 125)
ctx.lineTo(125 + 250, 125)
ctx.lineTo(125 + 250, 125 + 250)
ctx.lineTo(125, 125 + 250)
ctx.lineTo(125, 125)
ctx.stroke()


/// circle
ctx.beginPath();
ctx.arc(250, 250, 100, 0, 2 * Math.PI);
ctx.stroke();

const drawCircle = function (x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.stroke();
}


let r = 0

const id = setInterval(function () {
    drawCircle(250, 250, r)
    r += 10
}, 100)

setTimeout(function () {
    clearInterval(id)
}, 1000)

