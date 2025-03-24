'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useCallback, useMemo, useEffect } from 'react';
import { Swiper as SwiperType } from 'swiper';

const images = [
  '/assets/images/obras/boulangerie/imagem-1.jpg',
  '/assets/images/obras/gen_flores/imagem-5.jpg',
  '/assets/images/obras/drogaria_sp/imagem-6.jpg',
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Effect to track window width
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768 || window.innerHeight < 800);
    checkScreenSize(); // Run once on mount
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    setCurrentIndex(swiper.realIndex);
  }, []);

  const currentImage = useMemo(() => images[currentIndex], [currentIndex]);

  return (
    <div className="w-full h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={isMobile ? false : true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
        onSlideChange={handleSlideChange}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">

              <div className="absolute inset-0 flex items-center justify-between mb-4 px-6 md:px-12 z-10">
                {/* Left Section */}
                {!isMobile ? (
                  <div className="flex flex-col items-start justify-center text-white text-left md:w-1/2 space-y-6 p-6 md:p-10">
                    {/* Main Info Box */}
                    <div className="bg-gradient-to-r from-black/90 via-black/60 to-black/30 p-8 md:p-12 rounded-3xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-3xl">
                      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-5 tracking-wide leading-tight text-white drop-shadow-lg">
                        {currentImage.split('/obras/')[1]?.split('/')[0] === "boulangerie"
                          ? "Padaria Boulangerie"
                          : currentImage.split('/obras/')[1]?.split('/')[0] === "gen_flores"
                            ? "Coronel Flores"
                            : currentImage.split('/obras/')[1]?.split('/')[0] === "drogaria_sp"
                              ? "Drogaria São Paulo"
                              : "Outro Projeto"}
                      </h1>

                      <p className="text-lg md:text-2xl mb-6 leading-relaxed text-gray-300 drop-shadow-md">
                        {currentImage.split('/obras/')[1]?.split('/')[0] === "boulangerie"
                          ? "Rua das Caneleiras 668"
                          : currentImage.split('/obras/')[1]?.split('/')[0] === "gen_flores"
                            ? "Rua Coronel Flores 445"
                            : currentImage.split('/obras/')[1]?.split('/')[0] === "drogaria_sp"
                              ? "Avenida Portugal 337"
                              : "Outro Projeto"}
                      </p>

                      <div className="flex flex-wrap gap-4">
                        <Link href={currentImage} prefetch={false}>
                          <button className="bg-white text-black px-4 md:px-6 py-1 md:py-2 rounded-full text-md font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                            Saiba Mais
                          </button>
                        </Link>

                        <Link
                          href={
                            currentImage.split('/obras/')[1]?.split('/')[0] === "boulangerie"
                              ? "https://maps.app.goo.gl/MQ5Uvp4iPTrh5wih6"
                              : currentImage.split('/obras/')[1]?.split('/')[0] === "gen_flores"
                                ? "https://maps.app.goo.gl/RenKRquy9r7CLWkS9"
                                : currentImage.split('/obras/')[1]?.split('/')[0] === "drogaria_sp"
                                  ? "https://maps.app.goo.gl/BcW2WKSrJjEt1spV6"
                                  : "#"
                          }
                          target="_blank"
                          prefetch={false}
                        >
                          <button className="bg-blue-500 text-white px-4 md:px-6 py-1 md:py-2 rounded-full text-md font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
                            Google Maps
                          </button>
                        </Link>
                      </div>
                    </div>

                    {/* Bottom Section with Small Text and Button */}
                    <div className="absolute bottom-8 left-0 right-0 flex justify-center text-white px-4">
                      <div className="bg-black/50 backdrop-blur-md p-6 rounded-2xl text-center shadow-lg">
                        <p className="text-base md:text-md mb-4 font-semibold">
                          Quer saber mais sobre nossos projetos?
                        </p>
                        <Link href="#about">
                          <button className="bg-white text-black px-6 py-3 rounded-full text-base md:text-md font-semibold hover:bg-gray-300 transition-all duration-300 transform hover:scale-105">
                            Conheça mais!
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>

                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 rounded-xl shadow-lg">
                    <p className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-4">
                      BARONE ASSESSORIA E PROJETOS
                    </p>
                    <p className="text-white text-sm sm:text-lg md:text-xl font-light mb-6 max-w-3xl">
                      Sempre providenciando as melhores soluções para seu imóvel. Estamos aqui para transformar seu espaço com excelência e inovação.
                    </p>

                    <Link href="#about">
                      <button className="bg-white text-black px-8 py-3 rounded-full text-md font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                        Saiba Mais!
                      </button>
                    </Link>
                  </div>
                )}
              </div>
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}