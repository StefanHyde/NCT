import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';


export default function swiperHome() {
    const pictures = ['NCT-swipe1.png', 'NCT-swipe2.png', 'NCT-swipe4.png', 'NCT-swipe5.png', 'NCT-swipe6.png', 'NCT-swipe7.png'];

    return (
        <Swiper
            spaceBetween={1}
            slidesPerView={4}
            loop={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {pictures.map((picture, i) =>

                // eslint-disable-next-line react/jsx-key
                <SwiperSlide><Image src={`/img/${picture.toString()}`} width={500}
                                    height={500}/></SwiperSlide>)}
            ...
        </Swiper>
    );
};