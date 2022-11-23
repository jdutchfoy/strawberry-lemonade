'use strict'


// alert(thirst)
// let allergies =prompt("Any allergies")
// alert(allergies)

function message(){
    let thirst =prompt("Are you thirsty")
    if (thirst==="yes"){
        alert ("let's get you some lemonade")
    } else{
        alert ("invalid input try again")
        message()
    }
}
message()


let today = new Date();
let hour = today.getHours()
// let hour = 1 
console.log(hour)

let greeting;


function welcome(){

    if (hour > 17){
     return greeting = "Good evening"   
    } else {
     return  greeting = "Hello world"
    }
}

welcome()


console.log(welcome())

document.write("<h3>" + greeting + "</h3>")
