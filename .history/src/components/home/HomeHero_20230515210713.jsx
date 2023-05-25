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
              backgroundImage: `url(https://elceo.com/wp-content/uploads/2023/02/automotriz-2.jpg)`
            }}
          >
          </SwiperSlide>
          <SwiperSlide
            tag='section'
            className='hero d-flex a-items-center min-h-500'
            style={{
              backgroundImage: `url(https://www.google.com/search?q=electronica+automotriz&tbm=isch&ved=2ahUKEwjeqqOF4Pj-AhVar5UCHQbABpwQ2-cCegQIABAA&oq=ELECTR+automotriz&gs_lcp=CgNpbWcQARgBMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB46BAgjECc6BwgAEIoFEEM6BQgAEIAEUIEKWNIRYPAraABwAHgAgAFdiAHaBJIBATeYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=3ORiZN7MK9re1sQPhoCb4Ak&bih=977&biw=1920&safe=strict#imgrc=ykmJvAwdtuz4BM)`
            }}
          >
          </SwiperSlide>
          <SwiperSlide
            tag='section'
            className='hero d-flex a-items-center min-h-500'
            style={{
              backgroundImage: `url(https://www.google.com/search?q=electronica+automotriz&tbm=isch&ved=2ahUKEwjeqqOF4Pj-AhVar5UCHQbABpwQ2-cCegQIABAA&oq=ELECTR+automotriz&gs_lcp=CgNpbWcQARgBMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB46BAgjECc6BwgAEIoFEEM6BQgAEIAEUIEKWNIRYPAraABwAHgAgAFdiAHaBJIBATeYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=3ORiZN7MK9re1sQPhoCb4Ak&bih=977&biw=1920&safe=strict#imgrc=ykmJvAwdtuz4BM&imgdii=UFDiDAQ9XsTppM)`
            }}
          >
          </SwiperSlide>
    </Swiper>
  );
};

export default HomeHero;