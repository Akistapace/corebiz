import { useRef } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Arrow} from './style';
import {ReactComponent as ArrowPrev} from '../../assets/icons/arrow-prev.svg';
import {ReactComponent as ArrowNext} from '../../assets/icons/arrow-next.svg';
import { ProductCard } from '../ProductCard';
import { Skeleton } from '../ProductCard/Skeleton';

export const ProductSlide = (products) => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      pagination
      slidesPerView={4}
      onInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
      breakpoints={{
        320: {
          slidesPerView: 1.9,
        },
        600: {
          slidesPerView: 2.9,
        },
        991: {
          slidesPerView: 4,
        },
      }}
    >
      {
        products.loading ? (
          [1,2,3,4, 5].map(() => (
            <SwiperSlide key={Math.random()}>
              <Skeleton />
            </SwiperSlide>
          ))
        )
        :
        (
          products.products.map((product, key) => (
            <SwiperSlide key={key}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))
        )
      }
      <Arrow left ref={prevRef}><ArrowPrev/></Arrow>
      <Arrow ref={nextRef}><ArrowNext/></Arrow>
    </Swiper>
  );
};