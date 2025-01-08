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

// Trocar Idioma
const rbPortugues = document.getElementById("rbPortugues");
const rbIngles = document.getElementById("rbIngles");
const rbEspanhol = document.getElementById("rbEspanhol");

let inputsRadio = document.getElementsByTagName("input");
for (let i = 0; i < inputsRadio.length; i++) { 
    inputsRadio[i].addEventListener("change", trocarIdioma); 
}

function trocarIdioma(){
    var idioma;
    if (rbPortugues.checked){
        idioma = "pt";
    } else if(rbIngles.checked){
        idioma = "en";
    } else if(rbEspanhol.checked){
        idioma = "es";
    }

    localStorage.setItem("idioma", idioma);

    const elements = document.querySelectorAll('[data-lang-pt]');
    elements.forEach(element => {
    const translation = element.getAttribute(`data-lang-${idioma}`);
    if (translation) {
        element.textContent = translation;
    }
  });    
}

function verificarIdioma() { 
    if (localStorage.getItem("idioma")) {
        let idioma = localStorage.getItem("idioma");
        if (idioma == "pt") {
            rbPortugues.checked = true; 
        } else if (idioma == "en") {
            rbIngles.checked = true;
        } else if(idioma == "es"){ 
            rbEspanhol.checked = true; 
        }
        trocarIdioma();
    }
    
}

verificarIdioma();