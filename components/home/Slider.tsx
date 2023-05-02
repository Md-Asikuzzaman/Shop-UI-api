import { NextPage } from 'next';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

interface Props {}

const Slider: NextPage<Props> = ({}) => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className='mb-5'
    >
      <SwiperSlide>
        <div className='h-80 bg-red-200'></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-80 bg-red-200'></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-80 bg-red-200'></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-80 bg-red-200'></div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
