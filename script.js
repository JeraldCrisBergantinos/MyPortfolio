// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
  nav.classList.toggle('slide');
});

// Smooth scrolling
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
  speedAsDuration: true
});

// Form submission
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Validate form inputs
  if (nameInput.value === '') {
    alert('Please enter your name.');
    return;
  }

  if (emailInput.value === '') {
    alert('Please enter your email.');
    return;
  }

  if (messageInput.value === '') {
    alert('Please enter a message.');
    return;
  }

  // Submit form data
  const formData = new FormData(this);

  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  })
  .then(() => {
    alert('Message sent!');
    form.reset();
  })
  .catch(() => {
    alert('Message failed to send.');
  });
});
