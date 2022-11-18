'use strict'


let thirst =prompt("Are you thirsty")
alert(thirst)
let allergies =prompt("Any allergies")
alert(allergies)

let today = new Date();
let hour = today.getHours()
// let hour = 1 
console.log(hour)

let greeting;

if (hour > 17){
 greeting = "Good evening"   
} else {
    greeting = "Hello world"
}

console.log(greeting)

document.write("<h3>" + greeting + "</h3>")
