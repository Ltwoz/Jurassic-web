// components/Carousel.js or components/Carousel.tsx
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const Carousel = () => {
  return (
    <div className="">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
        style={{ height: '650px' }}
      >
        <SwiperSlide>
          <Image 
            src="/pic1.jpg" 
            alt="Slide 1" 
            layout="responsive" 
            width={300}
            height={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src="/pic2.jpg" 
            alt="Slide 2" 
            layout="responsive" 
            width={300}
            height={300}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
