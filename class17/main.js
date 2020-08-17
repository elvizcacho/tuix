



// const listNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

/*for (let pointer = 0; pointer < listNum.length; pointer ++) {
    console.log(listNum[pointer])
}*/

/*| pointer | pointer < listNum.length    | out |
|   0     |            true             | 0   |
|   1     |            true             |  1  |*/

/*let pointer = 0
while (pointer < listNum.length) {
    console.log(listNum[pointer])
    pointer ++
}*/




/*
Exercise 1
const n = 10
0000000000
000000000
00000000
0000000
000000
00000
0000
000
00
0
*/

/*
Exercise 2
const n = 10
0000000000
 000000000
  00000000
   0000000
    000000
     00000
      0000
       000
        00
         0
*/
/*
Exercise 3
const n = 10
0
00
000
0000
00000
000000
0000000
00000000
000000000
0000000000
*/
/*
Exercise 4
const n = 10
         0
        00
       000
      0000
     00000
    000000
   0000000
  00000000
 000000000
0000000000
*/

/*
Exercise 5
const n = 10
         0
        000
       00000
      0000000
     000000000
    00000000000
   0000000000000
  000000000000000
 00000000000000000
0000000000000000000
*/

/*const table = [
    [1, 2, 3, 4, 5], // 2, 4, 6  3, 5
    [1000, 2000, 2500, 3000, 1100] // [1001, 2001, 2501, 3001, 1101]
]

const table2Even  = []
const table2Odd = []
for (let i = 0; i < table.length; i ++) {
    const column = table[i]
    const newColumnEven = []
    const newColumnOdd = []
    let j = 0
    while (j < column.length) {
        const num = column[j] + 1
        if (num % 2 !== 0) {
            newColumnOdd.push(num)
        } else {
            newColumnEven.push(num)
        }
        j ++
    }
    table2Even.push(newColumnEven)
    table2Odd.push(newColumnOdd)
}

console.log(table2Even)
console.log(table2Odd)*/


//const list1 = []

/*list1.push(7)
list1.push(8)
list1.push(9)
console.log(list1.slice(0, 1).concat(list1.slice(2, 3)))*/

// console.log(list1)
