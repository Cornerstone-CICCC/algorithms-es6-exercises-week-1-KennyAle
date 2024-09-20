/*
Wrap the code you've written in a function called loopy(range, multiples, words) that you call with 3 parameters.

range - should be an array of 2 numbers representing the start and end values for the loop.
multiples - should be an array of 2 numbers representing the multiples you want to replace with words.
words - should be an array of 2 strings representing the words that will replace the multiples.
For example, say we called the function with the following arguments.

loopy([15, 90], [2, 5], ["Batty", "Beacon"]);

The loopy function should log to the console all the numbers from 15 to 90, except replacing multiples of 2 with "Batty", multiples of 5 with "Beacon", and multiples of 2 and 5 with "BattyBeacon".
*/
function loopy(range,multiples, words){
    for(i = range[0]; i <= range[1]; i++){
        if (i % multiples[0] == 0 && i % multiples[1] == 0){
            console.log(i + " " + words[0] + words[1])
        } else if (i % multiples[0] == 0) {
            console.log(i + " " + words[0])
        } else if (i % multiples[1] == 0) {
            console.log(i + " " + words[1])
        } else {
            console.log(`${i}`)
        }
    }
}
loopy([1,10],[2,5],["Batty","Beacon"])

// let range = [1,5]
// for (let index = range[0]; index < range[1] + 1; index++) {
//     console.log("a")
// }
// function loopy(range){
//     for (let index = range[0]; index < range[1] + 1; index++) {
//         console.log(index)
//     }
// }
// loopy([1,5])