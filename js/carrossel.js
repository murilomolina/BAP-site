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
    autoplay: {
        delay: 5000, // Define o tempo entre slides
        disableOnInteraction: false,
    },
});
