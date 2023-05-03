import { NextPage } from 'next';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper';
import Image from 'next/image';

interface Props {}

const Slider: NextPage<Props> = ({}) => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      loop={true}
      mousewheel={true}
      keyboard={true}
      autoplay={{ delay: 2000 }}
      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
      className='mb-5'
    >
      <SwiperSlide>
        <div className='h-96 bg-red-200'>
          <Image src='/slider/slider1.webp' fill alt='slider1' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-96 bg-red-200'>
          <Image src='/slider/slider2.webp' fill alt='slider1' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-96 bg-red-200'>
          <Image src='/slider/slider3.webp' fill alt='slider1' />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
