/*
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/
let facebookProfile = {
    name: "Kenny",
    friends: 3,
    messages: ["a", "b", "c"],
    postMessage: function(message){
        this.messages.push(message)
    },
    deleteMessage: function(index){
        this.messages.splice(index, 1)
    },
    addFriend: function(){
        return this.friends ++
    },
    removeFriend: function(){
        return this.friends --
    }
}
facebookProfile.postMessage("d")
facebookProfile.deleteMessage(1)
facebookProfile.addFriend()
console.log(facebookProfile)