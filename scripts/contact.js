const form = document.querySelector('form');
const contactPage = document.getElementById('contact-page');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  contactPage.innerHTML = '<p style="font-size: 24px;">Thank you for your message</p>';
});
