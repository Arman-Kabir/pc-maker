import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';


const Slider = ({ products }) => {
    // console.log(products);
    return (

        <Swiper
            modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            autoplay={{
                delay: 1000,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                800: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1600: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <div className=''>
                {
                    products?.map((product) => (
                        <SwiperSlide key={product.id}><Image src={product.image} style={{ width: '100%', height: 'auto' }} width={300} height={300} alt='swiper image'></Image></SwiperSlide>

                    ))
                }
            </div>
        </Swiper>

    )
};

export default Slider;