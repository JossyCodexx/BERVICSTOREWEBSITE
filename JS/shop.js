// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slider .slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}





// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Show the first slide initially
showSlide(currentSlide);












