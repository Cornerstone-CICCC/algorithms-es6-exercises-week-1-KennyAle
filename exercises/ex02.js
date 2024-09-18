/*
Write a series of conditional statements that:

- Prints "not a group" if musicians is less than or equal to 0
- Prints "solo" if musicians is equal to 1
- Prints "duet" if musicians is equal to 2
- Prints "trio" if musicians is equal to 3
- Prints "quartet" if musicians is equal to 4
- Prints "this is a large group" if musicians is greater than 4

*/

let musicians = 0
if (musicians > 4) {
    console.log("This is a large group")
} else if (musicians == 4) {
    console.log("This is a quartet")
} else if (musicians == 3) {
    console.log("This is a trio")
} else if (musicians == 2) {
    console.log("This is a duet")
} else if (musicians == 1) {
    console.log("This is a solo")
} else {
    console.log("not a group")
}

