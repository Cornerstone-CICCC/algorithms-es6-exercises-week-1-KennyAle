/*
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
*/
let laugh = (n) => {
    let message = ""
    for(i = 0; i < n; i++) {
        message += "ha"
    }
    console.log(message)
}
laugh(3)