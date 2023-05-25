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
              backgroundImage: `url(https://www.senati.edu.pe/sites/default/files/2017/carrera/09/mecanica-automotriz-senati1800-x-1190_0.jpg)`
            }}
          >
            
          </SwiperSlide>
          <SwiperSlide
            tag='section'
            className='hero d-flex a-items-center min-h-500'
            style={{
              backgroundImage: "url(https://utan.edu.mx/blog/wp-content/uploads/2022/03/UTAN_logra-tus-metas-estudiando-ingenieria-automotriz.jpg)"
            }}
          >
          </SwiperSlide>
    </Swiper>
  );
};

export default HomeHero;