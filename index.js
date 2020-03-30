// Code your solutions in this file
// In index.js, build a function named writeCards() that accepts two arguments: 
    // an array of string names
    // an event name. 
// Create a for loop with a counter that starts at 0 and increments at the end of each loop. The condition should halt the for loop after the last name in the array is printed out in the loop body.

function writeCards(names, event) {
    let arr = [];
    for (let i = 0; i < names.length; i++) {
        arr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return arr;
}


function countDown(start) {
    while (start >= 0) {
        console.log(start)
        start--;
    }
}
