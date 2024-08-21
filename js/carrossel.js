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

const swiper_card = new Swiper('.swiper-card', {
    slidesPerView: 3, // Mostra 3 slides por vez
    spaceBetween: 30, // Espaçamento entre os slides (pode ajustar conforme necessário)
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true, // Permite rolar infinitamente
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2, // Exibe 2 slides em telas menores
      },
      320: {
        slidesPerView: 1, // Exibe 1 slide em telas muito pequenas
      },
    },
  });
  
