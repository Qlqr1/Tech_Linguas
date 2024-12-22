// Carrossel
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const indicators = document.querySelectorAll('.carousel-indicators div');

function updateCarousel() {
    const offset = -currentIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`; }
    
function moveSlide(direction) {
    currentIndex += direction;

    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    updateCarousel();
}

function moveToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

setInterval(() => {
    moveSlide(1);
}, 4000); 

// Link interno
