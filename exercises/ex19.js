/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/
function emotions(emotion, n) {
    let laugh = (n) => {
        let message1 = `I am ${emotion} `
        let message2 = ""
        for(i = 0; i < n; i++) {
            message2 += "ha"
        }
        let finalmessage = message1 + message2 + "!"
        console.log(finalmessage)
    }
    laugh(n)
}

emotions("happy", 2)