import Image from 'next/image';
import React from 'react'
import { SwiperSlide } from 'swiper/react';

const SingleSlide = ({ product }) => {
  console.log(product);
  return (
    <SwiperSlide key={product.id}><Image src={product.image} width={500} height={500} alt='swiper image'></Image></SwiperSlide>
  )
}

export default SingleSlide;