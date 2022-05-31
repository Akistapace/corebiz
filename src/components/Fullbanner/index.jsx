import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Banner } from './Banner';

export const Fullbanner = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={0}
      autoplay
      pagination
      slidesPerView={1} >
        
      {
        [1, 2, 3, 4].map(item => (
          <SwiperSlide key={item}>
            <Banner />
          </SwiperSlide>
        ))
      }

    </Swiper>
  );
};