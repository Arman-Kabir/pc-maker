import { Col, Row } from 'antd';
import '../../styles/Hero.module.css';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div style={{ width: '100vw', backgroundColor: 'grey', minHeight: '50vh', margin: '0 0 0 -290px' }}>
      <Row>
        <Col span={12}>
          <Swiper
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            pagination={{ clickable: true }}

            scrollbar={{ draggable: true }}
            
          >
            <div className=''>
              <SwiperSlide>
                <Image src='https://www.cloud.ryanscomputers.com/cdn/sliders/Apple-MacBook-Pro-Late-2021-Apple-M1-Pro-142-Inch-M1-Slider_1693198369.webp' style={{ width: '100%', height: 'auto' }} width={300} height={300} alt='swiper image'>
                </Image>
              </SwiperSlide>

              <SwiperSlide>
                <Image src='https://www.startech.com.bd/image/cache/catalog/offer-page/gadget-fest-aug/live-now-gadget-fest-home-banner-982x500.webp' style={{ width: '100%', height: 'auto' }} width={300} height={300} alt='swiper image'>
                </Image>
              </SwiperSlide>

            </div>
          </Swiper>
        </Col>

        <Col span={12}>
          Man
        </Col>
      </Row>
    </div>
  )
}

export default HeroSection;