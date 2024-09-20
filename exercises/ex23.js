/*
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

Write a loop under each comment in the file.
Under the first, write a while loop that prints out each item of ingredients.
Under the second, write a for loop that does the same thing.
And under the third, write any loop, while or for that prints out each item of ingredients but backwards (that is, the first should be "bananas" and the last "eggs").
*/
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"]

let index = 0
while (index < ingredients.length) {
    const element = ingredients[index]
    console.log(`${element} (while loop)`)
    index++
}

for (let index = 0; index < ingredients.length; index++) {
    const element = ingredients[index]
    console.log(`${element} (for loop)`)
}

const ingredientsReversed = ingredients.reverse()
ingredientsReversed.forEach(element => {
    console.log(`${element} (backwards)`)
});
