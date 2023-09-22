import React from 'react'
import b1 from'@/assets/sliderTemp/b1.png'
import b2 from'@/assets/sliderTemp/b2.png'
import b3 from'@/assets/sliderTemp/b3.png'
import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';



function HomeSlider() {
   
const width = window.innerWidth;
const height = window.innerHeight;
  return (
    <>
       <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Image src={b1} 
            alt='banner1'
            width={width}
            height={height/2}
            style={{
                objectFit:"cover"
            }}/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={b2} 
            alt='banner1'
            width={width}
            height={height/2}
            style={{
                objectFit:"contain"
            }}/></SwiperSlide>

        <SwiperSlide>
            <Image src={b3} 
            alt='banner1'
            width={width}
            height={height/2}
            style={{
                objectFit:"cover"
            }}/>
            </SwiperSlide>
      
      </Swiper>
    </>
  )
}

export default HomeSlider
