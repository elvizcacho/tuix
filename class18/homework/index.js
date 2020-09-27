
const wall = document.getElementById('wall')
const btn = document.getElementById('btn')
const input = document.getElementById('input')

const generator = (n) => {
    let line = ''

    for (let i = 1; i <= n; i++) {

        let row = ''
    
        for (let j = 1; j <= (n - i); j++) {
            row += '<div class="grey-bricks"></div>'
        }
    
        for (let h = 0; h != (2 * i - 1); h++) {
            row += '<div class="red-bricks"></div>'
        }
    
        for (k = i + 1; k <= n; k++) {
    
            row += '<div class="grey-bricks"></div>'
        }
    
    line += '<p>' + row + '</p>'
    }

    wall.innerHTML = line
}


const onClick = function () {
    const n = Number(input.value)
    generator(n)
}

const onKeyPress = function(event) {
    let enterKey = event.keyCode

    if (enterKey === 13) {
        const n = Number(input.value)
        generator(n)
    } 
    
    console.log(enterKey)
}

btn.addEventListener('click', onClick)
input.addEventListener('keydown', onKeyPress)