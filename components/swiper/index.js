import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';


export default function swiperHome() {
    const pictures = ['NCT_homeswip1.jpg', 'NCT_homeswip3.jpg', 'NCT_homeswip2.jpg', 'NCT_homeswip4.jpg', 'NCT_homeswip5.jpg', 'NCT_homeswip6.jpg', 'NCT_homeswip7.jpg', ];

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

                1700: {
                    spaceBetween: 0,
                    slidesPerView: 6,
                },
            }}
        >
            {pictures.map((picture, i) =>
                <SwiperSlide key={picture}><Image src={`/img/${picture.toString()}`} width={500}
                                                  height={500} alt={'images du salon de tattoo'}/></SwiperSlide>)}
        </Swiper>
    );
};