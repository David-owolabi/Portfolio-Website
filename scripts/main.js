let menu = document.querySelector('#menu-icon');
let navbar  = document.querySelector('.navbar');
let header  = document.querySelector('header');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
window.onscroll = () => {
   menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}
window.addEventListener('scroll', () => {
   header.classList.toggle('shadow', window.scrollY > 0);
})

const sr =  ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true
})

sr.reveal('.home-text', {delay:200, origin:'top'})
sr.reveal('.home-img', {delay:400, origin:'top'})
sr.reveal('.about-title, .about-text, .heading, .box, input, textarea ', {delay:200, origin:'top'})

// submission of contact form using EmailJS

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_wtmtd6u", "template_rjci8ca", this)
    .then(() => {
      alert("Message sent successfully!");
      this.reset();
    }, (error) => {
      alert("Failed to send message. Please try again.");
      console.log("EmailJS Error:", error.text);
    });
});