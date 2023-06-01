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
