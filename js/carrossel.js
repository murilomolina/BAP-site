const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Adiciona um clone do primeiro slide ao final para transição suave
const firstSlideClone = slides[0].cloneNode(true);
carousel.appendChild(firstSlideClone);

function showNextSlide() {
    currentSlide++;
    // Verifica se o slide atual é o último clone
    if (currentSlide >= slides.length) {
        carousel.style.transition = 'none'; // Remove a transição temporariamente
        carousel.style.transform = `translateX(0%)`; // Volta ao início
        currentSlide = 0;
        // Força um reflow para aplicar o estilo antes de reabilitar a transição
        carousel.offsetHeight; // Trigger reflow
        setTimeout(() => {
            carousel.style.transition = 'transform 1s infinte'; // Reaplica a transição
            carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
        }, 20); // Espera um pouco para garantir que a transição é reaplicada
    } else {
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
}

// Troca de slide a cada 5 segundos
setInterval(showNextSlide, 5000);

// Inicializa a transição suave
carousel.style.transition = 'transform 1s infinte';