// DOM
/*<html>
    <head>

    </head>
    <body>
        <div class="container">
            <button class="button">
                <span class="text">Hola!</span>
            </button>
        </div>
    </body>
</html>


const document = {
    html: {
        head: {

        },
        body: {
            div: {
                class: 'container',
                button: {
                    class: 'button'
                    span: {
                        innerHtml: 'hola',
                        class: 'text'
                    },
                    classList: {
                      add: function(className) {

                      }
                    }
                }
            },
            class: 'body'
        }
    }
}*/


const button1 = document.getElementById('button-1')
const megaSquare1 = document.getElementById('mega-square-1')
const incrementButton = document.getElementById('increment-plus')
const incrementValue = document.getElementById('increment-value')

let increment = 0
let step = 0

const setValue = function(value) {
    const leftValue = document.getElementById('left-value')
    leftValue.innerText = value
}

const onClickButton1 = function() {
    step = step + increment
    const newLeftValue = step + 'px'
    megaSquare1.style.left = newLeftValue
    setValue(newLeftValue)
}

const setIncrementValue = function(value) {
    incrementValue.innerText = value
}

const onClickIncrementButton = function() {
    increment = increment + 1
    setIncrementValue(increment)
}


button1.addEventListener('click', onClickButton1)
incrementButton.addEventListener('click', onClickIncrementButton)
setIncrementValue(increment)


setValue(step + 'px')
