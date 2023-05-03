import { NextPage } from 'next';
import { HiOutlineMinusSmall } from 'react-icons/hi2';
import { BsPlus } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';

interface Props {}

const SingleCart: NextPage<Props> = ({}) => {
  return (
    <div className='bg-white flex items-center p-5 gap-5 shadow-sm rounded-md shrink-0'>
      <img className='h-20 w-20' src='/products/img2.jpeg' alt='product' />
      <div className='flex-grow'>
        <div className='flex justify-between items-center'>
          <h2 className='text-lg text-gray-800'>Head Phone</h2>
          <div className='h-10 w-10 bg-gray-50 rounded-full grid place-content-center cursor-pointer hover:bg-gray-100 duration-200'>
            <IoMdClose className='text-2xl text-rose-500' />
          </div>
        </div>

        <div className='flex items-center justify-between mt-8'>
          <div className='flex items-center gap-5'>
            <span className='text-gray-500'>100.00 * 5</span>
            <span className='font-semibold text-rose-500'>$500.00</span>
          </div>
          <div className='flex gap-3'>
            <div className='h-10 w-10 bg-gray-50 rounded-full grid place-content-center cursor-pointer hover:bg-gray-100 duration-200'>
              <BsPlus className='text-2xl text-tomato' />
            </div>

            <div className='h-10 w-10 bg-gray-50 rounded-full grid place-content-center cursor-pointer hover:bg-gray-100 duration-200'>
              <HiOutlineMinusSmall className='text-2xl text-tomato' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
