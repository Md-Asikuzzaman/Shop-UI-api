import { useEffect } from 'react';
import { NextPage } from 'next';
import { HiUser } from 'react-icons/hi';
import { GiBeachBag } from 'react-icons/gi';
import { BsSearch } from 'react-icons/bs';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { useState } from 'react';
import { fetchProducts } from '@/redux/features/product/productSlice';

interface Props {}

const Search: NextPage<Props> = ({}) => {
  const [search, setSearch] = useState('');
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchProducts(search));
  }, [search]);

  return (
    <div className='bg-white sticky top-0 z-50'>
      <div className='container flex justify-between items-center  gap-28 py-5'>
        <Link href={'/'}>
          <img className='w-12' src='/logo.png' alt='logo' />
        </Link>
        {/* search bar */}
        <div className='flex border-2 border-gray-200 px-5 rounded-full flex-1 gap-3 items-center'>
          <BsSearch className='text-lg shrink-0' />
          <div className='w-full'>
            <input
              className='w-full py-3 outline-none'
              type='text'
              placeholder='Search by product title...'
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </div>
          <span className='shrink-0 border-l-2 border-gray-200 pl-3'>
            All Category
          </span>
        </div>

        {/* options */}
        <div className='flex gap-4'>
          <Link href={'/user'}>
            <div className='h-10 w-10 bg-gray-200 rounded-full grid place-content-center'>
              <HiUser className='text-lg' />
            </div>
          </Link>
          <Link
            href={'/cart'}
            className='h-10 w-10 bg-gray-200 rounded-full grid place-content-center relative'
          >
            <span className='absolute h-6 w-6 bg-rose-500 rounded-full text-white grid place-content-center -translate-y-1/2 top-0 right-0 text-xs'>
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
