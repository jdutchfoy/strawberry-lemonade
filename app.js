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
// message()

function imgRendered(){
    let q =prompt("how many glasses of lemonade")
    for (let i = 0; i < q; i++){
        console.log("this is the value of q", q)
        console.log("this is the value of i", i)

        document.write("<img src='https://images.unsplash.com/photo-1549007953-2f2dc0b24019?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNsaWNlZCUyMHN0cmF3YmVycmllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' alt='Fresh sliced strawberries' width='200'       height='300'/>")
    }
}
imgRendered()


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
