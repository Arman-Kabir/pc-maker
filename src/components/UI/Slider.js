import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import SingleSlide from './SingleSlide';

const Slider = ({ products }) => {
    console.log(products);
    return (

        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={80}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                products?.map((product) => {

                    <SingleSlide key={product.id} product={product}>

                    </SingleSlide>
                })
            }




            {/* <SwiperSlide><Image src={'https://www.startech.com.bd/image/cache/catalog/ram/apacer/panther-golden-4gb-ddr4-2666mhz/panther-golden-4gb-ddr4-2666mhz-01-500x500.jpg'} width={500} height={500} alt='swiper image'></Image></SwiperSlide>

            <SwiperSlide><Image src={'https://www.startech.com.bd/image/cache/catalog/power-supply/revenger/vp-350/vp-350-01-500x500.webp'} width={500} height={500} alt='swiper image'></Image></SwiperSlide>

            <SwiperSlide><Image src={'https://www.startech.com.bd/image/cache/catalog/ssd/acer/fa100/fa100-01-500x500.jpg'} width={500} height={500} alt='swiper image'></Image></SwiperSlide>

            <SwiperSlide><Image src={'https://www.startech.com.bd/image/cache/catalog/monitor/samsung/c49g95tssw/c49g95tssw-1-500x500.jpg'} width={500} height={500} alt='swiper image'></Image></SwiperSlide>

            <SwiperSlide><Image src={'https://www.startech.com.bd/image/cache/catalog/graphics-card/colorful/geforce-gtx-1650-nb-4gd6-v3-v/geforce-gtx-1650-nb-4gd6-v3-v-01-500x500.webp'} width={500} height={500} alt='swiper image'></Image></SwiperSlide> */}
        </Swiper>

    )
};

export default Slider;