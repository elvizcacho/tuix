

console.log("------ INIT ------")

const adn = 'gttatattcaaatg'
const counter = {
    a: 0,
    c: 0,
    t: 0,
    g: 0
}

if (adn.length > 0) {
    console.log("Let's process the sequence with " + adn.length + " proteins")

    if (adn[0] === 'a') { counter.a = counter.a + 1 }
    if (adn[1] === 'a') { counter.a = counter.a + 1 }
    if (adn[2] === 'a') { counter.a = counter.a + 1 }
    if (adn[3] === 'a') { counter.a = counter.a + 1 }
    if (adn[4] === 'a') { counter.a = counter.a + 1 }
    if (adn[5] === 'a') { counter.a = counter.a + 1 }
    if (adn[6] === 'a') { counter.a = counter.a + 1 }
    if (adn[7] === 'a') { counter.a = counter.a + 1 }
    if (adn[8] === 'a') { counter.a = counter.a + 1 }
    if (adn[9] === 'a') { counter.a = counter.a + 1 }

    if (adn[0] === 't') { counter.t = counter.t + 1 }
    if (adn[1] === 't') { counter.t = counter.t + 1 }
    if (adn[2] === 't') { counter.t = counter.t + 1 }
    if (adn[3] === 't') { counter.t = counter.t + 1 }
    if (adn[4] === 't') { counter.t = counter.t + 1 }
    if (adn[5] === 't') { counter.t = counter.t + 1 }
    if (adn[6] === 't') { counter.t = counter.t + 1 }
    if (adn[7] === 't') { counter.t = counter.t + 1 }
    if (adn[8] === 't') { counter.t = counter.t + 1 }
    if (adn[9] === 't') { counter.t = counter.t + 1 }

    if (adn[0] === 'c') { counter.c = counter.c + 1 }
    if (adn[1] === 'c') { counter.c = counter.c + 1 }
    if (adn[2] === 'c') { counter.c = counter.c + 1 }
    if (adn[3] === 'c') { counter.c = counter.c + 1 }
    if (adn[4] === 'c') { counter.c = counter.c + 1 }
    if (adn[5] === 'c') { counter.c = counter.c + 1 }
    if (adn[6] === 'c') { counter.c = counter.c + 1 }
    if (adn[7] === 'c') { counter.c = counter.c + 1 }
    if (adn[8] === 'c') { counter.c = counter.c + 1 }
    if (adn[9] === 'c') { counter.c = counter.c + 1 }

    if (adn[0] === 'g') { counter.g = counter.g + 1 }
    if (adn[1] === 'g') { counter.g = counter.g + 1 }
    if (adn[2] === 'g') { counter.g = counter.g + 1 }
    if (adn[3] === 'g') { counter.g = counter.g + 1 }
    if (adn[4] === 'g') { counter.g = counter.g + 1 }
    if (adn[5] === 'g') { counter.g = counter.g + 1 }
    if (adn[6] === 'g') { counter.g = counter.g + 1 }
    if (adn[7] === 'g') { counter.g = counter.g + 1 }
    if (adn[8] === 'g') { counter.g = counter.g + 1 }
    if (adn[9] === 'g') { counter.g = counter.g + 1 }

    console.log(counter)

} else {
    console.log("There is no sequence to process")
}

console.log("---- END ---")
