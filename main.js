let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-card');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].style.display = 'block';
});

document.querySelector('.prev').addEventListener('click', () => {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].style.display = 'block';
});

// Initially display the first slide
slides.forEach((slide, index) => {
    slide.style.display = index === 0 ? 'block' : 'none';
});
