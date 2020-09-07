
const app = document.getElementById('app')
const btn = document.getElementById('btn')
const input = document.getElementById('input')

const generator = (n) => {
    let row = ''
    let line = ''

    for (let i = 0; i < n; i++) {

        row += `<div class="super-border"></div>`

        line += '<p>' + row + '</p>'
    }

    app.innerHTML = line
}



const onClick = function () {
    const n = Number(input.value)
    generator(n)
}

document.addEventListener('click', onClick)







