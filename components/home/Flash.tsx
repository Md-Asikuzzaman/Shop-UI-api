import { NextPage } from 'next';
import { BsFillLightningChargeFill, BsStarFill, BsPlus } from 'react-icons/bs';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { Pagination, Autoplay } from 'swiper';

interface Props {}

const Flash: NextPage<Props> = ({}) => {
  return (
    <section className='py-5 bg-gray-100'>
      <div className='container'>
        <h2 className='flex items-center gap-2 text-xl font-semibold mb-4'>
          <BsFillLightningChargeFill className='text-tomato text-2xl' /> New
          Arrivals
        </h2>

        <Swiper
          slidesPerView={4}
          spaceBetween={25}
          loop={true}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          autoplay={{ delay: 100 }}
          modules={[Pagination, Autoplay]}
        >
          <SwiperSlide className='bg-white relative'>
            <span className='absolute top-3 left-2 bg-rose-500 py-1 px-4 rounded-full text-sm text-white'>
              50% Off
            </span>
            <img className='h-64 mx-auto' src='/products/img2.jpeg' alt='' />
            <div className='p-4'>
              <h3 className='text-md mb-1'>Head Phone</h3>
              <span className='flex gap-1 text-yellow-500'>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </span>
              <div className='flex items-center justify-between mt-2'>
                <h4 className='text-tomato font-semibold'>$ 100.00</h4>
                <div className='h-10 w-10 bg-gray-100 rounded-full grid place-content-center cursor-pointer hover:bg-gray-200 duration-200'>
                  <BsPlus className='text-2xl text-tomato' />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='bg-white relative'>
            <span className='absolute top-3 left-2 bg-rose-500 py-1 px-4 rounded-full text-sm text-white'>
              50% Off
            </span>
            <img className='h-64 mx-auto' src='/products/img2.jpeg' alt='' />
            <div className='p-4'>
              <h3 className='text-md mb-1'>Head Phone</h3>
              <span className='flex gap-1 text-yellow-500'>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </span>
              <div className='flex items-center justify-between mt-2'>
                <h4 className='text-tomato font-semibold'>$ 100.00</h4>
                <div className='h-10 w-10 bg-gray-100 rounded-full grid place-content-center cursor-pointer hover:bg-gray-200 duration-200'>
                  <BsPlus className='text-2xl text-tomato' />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='bg-white relative'>
            <span className='absolute top-3 left-2 bg-rose-500 py-1 px-4 rounded-full text-sm text-white'>
              50% Off
            </span>
            <img className='h-64 mx-auto' src='/products/img2.jpeg' alt='' />
            <div className='p-4'>
              <h3 className='text-md mb-1'>Head Phone</h3>
              <span className='flex gap-1 text-yellow-500'>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </span>
              <div className='flex items-center justify-between mt-2'>
                <h4 className='text-tomato font-semibold'>$ 100.00</h4>
                <div className='h-10 w-10 bg-gray-100 rounded-full grid place-content-center cursor-pointer hover:bg-gray-200 duration-200'>
                  <BsPlus className='text-2xl text-tomato' />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='bg-white relative'>
            <span className='absolute top-3 left-2 bg-rose-500 py-1 px-4 rounded-full text-sm text-white'>
              50% Off
            </span>
            <img className='h-64 mx-auto' src='/products/img2.jpeg' alt='' />
            <div className='p-4'>
              <h3 className='text-md mb-1'>Head Phone</h3>
              <span className='flex gap-1 text-yellow-500'>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </span>
              <div className='flex items-center justify-between mt-2'>
                <h4 className='text-tomato font-semibold'>$ 100.00</h4>
                <div className='h-10 w-10 bg-gray-100 rounded-full grid place-content-center cursor-pointer hover:bg-gray-200 duration-200'>
                  <BsPlus className='text-2xl text-tomato' />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='bg-white relative'>
            <span className='absolute top-3 left-2 bg-rose-500 py-1 px-4 rounded-full text-sm text-white'>
              50% Off
            </span>
            <img className='h-64 mx-auto' src='/products/img2.jpeg' alt='' />
            <div className='p-4'>
              <h3 className='text-md mb-1'>Head Phone</h3>
              <span className='flex gap-1 text-yellow-500'>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </span>
              <div className='flex items-center justify-between mt-2'>
                <h4 className='text-tomato font-semibold'>$ 100.00</h4>
                <div className='h-10 w-10 bg-gray-100 rounded-full grid place-content-center cursor-pointer hover:bg-gray-200 duration-200'>
                  <BsPlus className='text-2xl text-tomato' />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Flash;
