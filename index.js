// JavaScript for Contact Modal

// Select modal elements
const contactModal = document.getElementById('contact-modal');
const contactBtn = document.getElementById('contact-btn');
const closeModal = document.querySelector('.close');
const contactForm = document.getElementById('contact-form');

// Open modal on "Contact Me" button click
contactBtn.addEventListener('click', () => {
  contactModal.style.display = 'block';
});

// Close modal on "X" button click
closeModal.addEventListener('click', () => {
  contactModal.style.display = 'none';
});

// Close modal on clicking outside modal content
window.addEventListener('click', (e) => {
  if (e.target === contactModal) {
    contactModal.style.display = 'none';
  }
});

// Handle form submission
contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form from reloading the page

  // Get user input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Construct a mailto link
  const mailtoLink = `mailto:${email}?subject=Contact from ${name}&body=${encodeURIComponent(
    message
  )}`;

  // Open the mail client
  window.location.href = mailtoLink;

  // Close the modal after submission
  contactModal.style.display = 'none';

  // Clear the form fields
  contactForm.reset();
});
