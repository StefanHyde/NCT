import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';


export default function swiperHome() {
    const pictures = ['NCT-swipe1.png', 'NCT-swipe2.png', 'NCT-swipe4.png', 'NCT-swipe5.png', 'NCT-swipe6.png', 'NCT-swipe7.png'];

    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={2}
            loop={true}

            breakpoints={{

                640: {
                    spaceBetween: 0,
                    slidesPerView: 3,
                },

                1024: {
                    spaceBetween: 0,
                    slidesPerView: 4,
                },
            }}
        >
            {pictures.map((picture, i) =>
                <SwiperSlide key={picture}><Image src={`/img/${picture.toString()}`} width={500}
                                                  height={500} alt={'images du salon de tattoo'}/></SwiperSlide>)}
        </Swiper>
    );
};