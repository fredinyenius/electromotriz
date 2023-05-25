//import { Link } from 'react-router-dom';
import { A11y, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
//import { peruvianCurrencyFormat } from '../../utils/utils';

const HomeHero = ({ heroProducts }) => {
  return (
    <Swiper
      tag='section'
      wrapperTag='div'
      className='min-h-500'
      modules={[A11y, Autoplay, Pagination]}
      loop
      speed={500}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      preloadImages={false}
    >
          <SwiperSlide
            tag='section'
            className='hero d-flex a-items-center min-h-500'
            style={{
              backgroundImage: "url(https://res.cloudinary.com/dqa9xrcf6/image/upload/v1683238989/calzadodep/banner-home-1_a7vhq3.jpg)"
            }}
          >
          </SwiperSlide>
          <SwiperSlide
            tag='section'
            className='hero d-flex a-items-center min-h-500'
            style={{
              backgroundImage: "url(https://res.cloudinary.com/dqa9xrcf6/image/upload/v1683238989/calzadodep/Banner-home-2_s9dxyt.jpg)"
            }}
          >
          </SwiperSlide>
    </Swiper>
  );
};

export default HomeHero;