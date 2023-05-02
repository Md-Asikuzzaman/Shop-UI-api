import { NextPage } from 'next';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper';

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
        <div className='h-80 bg-red-200'>1111</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-80 bg-red-200'>2222</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-80 bg-red-200'>3333</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-80 bg-red-200'>4444</div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
