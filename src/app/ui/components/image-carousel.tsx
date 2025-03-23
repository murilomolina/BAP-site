'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

const images = [
  '/assets/images/artes/imagem-1.jpg',
  '/assets/images/artes/imagem-5.jpg',
  '/assets/images/artes/imagem-6.jpg',
];

export default function ImageCarousel() {
  return (
    <div className="w-full h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 z-10">
                <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    Transforme Seu Espaço com Estilo
                  </h1>
                  <p className="text-lg md:text-xl mb-6">
                    Descubra nossos projetos e inspire-se para sua próxima reforma.
                  </p>
                  <Link href="/projetos">
                    <button className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-300 transition">
                      Veja Nossos Projetos
                    </button>
                  </Link>
                </div>
              </div>
              <Image src={src} alt={`Slide ${index + 1}`} fill className="object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}