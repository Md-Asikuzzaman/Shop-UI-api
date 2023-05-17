import { NextPage } from 'next';
import { HiUser } from 'react-icons/hi';
import { GiBeachBag } from 'react-icons/gi';
import { BsSearch } from 'react-icons/bs';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { signIn } from 'next-auth/react';

interface Props {}

const Search: NextPage<Props> = ({}) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.cart);

  const handleLogin = () => {
    signIn();
  };

  return (
    <div className='bg-white sticky top-0 z-50'>
      <div className='container flex justify-between items-center  gap-28 py-5'>
        <Link href={'/'}>
          <img className='w-12' src='/logo.png' alt='logo' />
        </Link>
        {/* search bar */}
        <div className='flex border-2 border-gray-200 px-5 rounded-full flex-1 gap-3 items-center'>
          <BsSearch className='text-lg shrink-0' />
          <form className='w-full'>
            <input
              className='w-full py-3 outline-none'
              type='text'
              placeholder='Search and hit enter...'
            />
          </form>
          <span className='shrink-0 border-l-2 border-gray-200 pl-3'>
            All Category
          </span>
        </div>

        {/* options */}
        <div className='flex gap-4'>
          <div className='h-10 w-10 bg-gray-200 rounded-full grid place-content-center'>
            <HiUser onClick={handleLogin} className='text-lg' />
          </div>
          <Link
            href={'/cart'}
            className='h-10 w-10 bg-gray-200 rounded-full grid place-content-center relative'
          >
            <span className='absolute p-2 h-6 bg-rose-500 rounded-full text-white grid place-content-center -translate-y-1/2 top-0 right-0 text-xs'>
              {data.cartItems.length}
            </span>
            <GiBeachBag className='text-lg' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Search;
