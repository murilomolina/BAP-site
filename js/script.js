document.addEventListener('scroll', function() {    
    var targetContainer = document.getElementById('target-container');
    var navbar = document.querySelector('.navbar');
    var navbarLogo = document.querySelector('.logo-navbar');
    var containerPosition = targetContainer.getBoundingClientRect();

    if (containerPosition.top <= 0 && containerPosition.bottom >= 0) {
        navbar.classList.add('full-navbar');
        navbarLogo.classList.add('full-navbar-image');
    } else {
        navbar.classList.remove('full-navbar');
        navbarLogo.classList.remove('full-navbar-image');
    }
});

// Função para verificar a largura da tela e ajustar a navbar
function ajustarNavbar() {
    const navbarToggler = document.querySelector('.navbar-toggler');

    if (window.innerWidth <= 992) {
        // Se a largura da tela for menor ou igual a 992px (tamanho lg no Bootstrap)
        navbarToggler.classList.remove('d-none');
        navbarToggler.classList.add('d-block');
    } else {
        // Se a largura da tela for maior que 992px (tamanho lg no Bootstrap)
        navbarToggler.classList.remove('d-block');
        navbarToggler.classList.add('d-none');
    }
}

// Chama a função ao carregar a página
document.addEventListener('DOMContentLoaded', ajustarNavbar);

// Chama a função sempre que a janela for redimensionada
window.addEventListener('resize', ajustarNavbar);
