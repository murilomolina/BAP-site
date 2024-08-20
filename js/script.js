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
