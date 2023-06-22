document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      var nameInput = document.querySelector('#name-input');
      var emailInput = document.querySelector('#email-input');
      var messageInput = document.querySelector('#message-input');
  
      var name = nameInput.value;
      var email = emailInput.value;
      var message = messageInput.value;
  
      if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
      } else {
        // Perform form submission logic here
        alert('Form submitted successfully!');
        form.reset();
      }
    });
  });
  
  function message() {
    let thirst = prompt("Are you thirsty?");
    if (thirst === "yes") {
      alert("Let's get you some lemonade");
    } else {
      alert("Invalid input. Try again.");
      message();
    }
  }
  
  function imgRendered() {
    let q = prompt("How many glasses of lemonade?");
    for (let i = 0; i < q; i++) {
      document.write("<img src='https://example.com/lemonade.jpg' alt='Fresh sliced strawberries' width='200' height='300'/>");
    }
  }
  
  function welcome() {
    let today = new Date();
    let hour = today.getHours();
    let greeting;
  
    if (hour > 17) {
      greeting = "Good evening. Welcome to Dutch's Famous Strawberry Lemonade!";
    } else {
      greeting = "Hello. Welcome to Dutch's Famous Strawberry Lemonade!";
    }
  
    return greeting;
  }
  
  message();
  imgRendered();
  console.log(welcome());
  document.write("<h3>" + welcome() + "</h3>");
  