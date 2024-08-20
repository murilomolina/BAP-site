document.addEventListener('scroll', function() {
    var targetContainer = document.getElementById('target-container');
    var navbar = document.querySelector('.navbar');
    
    // Verifica a posição do container em relação à janela de visualização
    var containerPosition = targetContainer.getBoundingClientRect();

    // Se o topo do container estiver visível na janela de visualização
    if (containerPosition.top <= 0 && containerPosition.bottom >= 0) {
        navbar.classList.add('hidden-navbar');
    } else {
        navbar.classList.remove('hidden-navbar');
    }
});
