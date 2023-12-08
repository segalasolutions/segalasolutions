// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Replace with your logic for handling form data
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;

  console.log('Email:', email);
  console.log('Subject:', subject);
  console.log('Message:', message);

  // You can add AJAX or fetch request to submit the form data to a server
});
