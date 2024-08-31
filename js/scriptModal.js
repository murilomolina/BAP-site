var swiper;

function openModal(images) {
    var swiperWrapper = document.getElementById('swiperWrapper');
    swiperWrapper.innerHTML = ''; // Limpa slides existentes

    // Adiciona slides ao swiper
    images.forEach(function (image) {
        var slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.style.backgroundImage = `url('${image}')`;
        swiperWrapper.appendChild(slide);
    });

    // Inicializa ou atualiza o Swiper
    if (swiper) {
        swiper.update();
    } else {
        const swiper = new Swiper('.swiper', {
            loop: true, // Ativa o loop
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
           
        });
    }

    // Abre o modal
    var modal = new bootstrap.Modal(document.getElementById('carouselModal'));
    modal.show();
}
