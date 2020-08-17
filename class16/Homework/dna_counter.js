
console.log("------ INIT ------")

const adn = 'cattctacagcgccaatcgctactgagcaggagaccattgtatttctggt'
const counter = {
    a: 0,
    c: 0,
    t: 0,
    g: 0
}

if (adn.length > 0) {
    console.log("Let's process the sequence with " + adn.length + " proteins.")

    for (let i = 0; i < adn.length; i ++) {
        if (adn[i] === 'a') {
            counter.a ++
        }
    }
    for (let i = 0; i < adn.length; i ++) {
        if (adn[i] === 'c') {
            counter.c ++
        }
    }
    for (let i = 0; i < adn.length; i ++) {
        if (adn[i] === 't') {
            counter.t ++
        }
    }
    for (let i = 0; i < adn.length; i ++) {
        if (adn[i] === 'g') {
            counter.g ++
        }
    }

        console.table(counter)

} else {
    console.log("There is no sequence to process")
}

console.log("---- END ---")