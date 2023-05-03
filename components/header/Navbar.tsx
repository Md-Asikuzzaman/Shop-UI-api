import { useState } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { BsChevronDown } from 'react-icons/bs';
import { RxDashboard } from 'react-icons/rx';
import { GiClothes, GiRunningShoe } from 'react-icons/gi';
import { AiFillGift, AiOutlineLaptop } from 'react-icons/ai';
import { FaMobileAlt } from 'react-icons/fa';
import { BiHeadphone } from 'react-icons/bi';

interface Props {}

const Navbar: NextPage<Props> = ({}) => {
  const [category, setCategory] = useState(false);

  return (
    <header className='shadow-md py-3 relative'>
      <div className='container flex justify-between select-none'>
        {/* categories */}
        <div
          onClick={() => setCategory((prev) => !prev)}
          className='flex items-center gap-3 cursor-pointer bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-md'
        >
          <RxDashboard />
          <h4 className='flex items-center gap-2'>
            Categories
            <BsChevronDown />
          </h4>
        </div>

        {/* category lists */}
        {category ? (
          <div className='bg-white absolute top-20 w-60 shadow-lg z-10'>
            <ul>
              <li className='flex items-center gap-4 px-4 py-2 hover:bg-rose-50'>
                <AiOutlineLaptop className='text-xl text-gray-500' /> Laptop
              </li>

              <li className='flex items-center gap-4 px-4 py-2 hover:bg-rose-50'>
                <FaMobileAlt className='text-xl text-gray-500' /> Mobile
              </li>

              <li className='flex items-center gap-4 px-4 py-2 hover:bg-rose-50'>
                <BiHeadphone className='text-xl text-gray-500' /> Head Phone
              </li>

              <li className='flex items-center gap-4 px-4 py-2 hover:bg-rose-50'>
                <AiFillGift className='text-xl text-gray-500' /> Gift
              </li>

              <li className='flex items-center gap-4 px-4 py-2 hover:bg-rose-50'>
                <GiClothes className='text-xl text-gray-500' /> Fashion
              </li>

              <li className='flex items-center gap-4 px-4 py-2 hover:bg-rose-50'>
                <GiRunningShoe className='text-xl text-gray-500' /> Shoes
              </li>
            </ul>
          </div>
        ) : (
          ''
        )}

        {/* nav links */}
        <div>
          <ul className='flex gap-5'>
            <li className='capitalize'>
              <Link href={'/'}>home</Link>
            </li>

            <li className='capitalize'>
              <Link href={'/pages'}>pages</Link>
            </li>

            <li className='capitalize'>
              <Link href={'/user'}>user account</Link>
            </li>

            <li className='capitalize'>
              <Link href={'/vendor'}>vendor account</Link>
            </li>

            <li className='capitalize'>
              <Link href={'/track'}>track my order</Link>
            </li>

            <li className='capitalize'>
              <Link href={'/contact'}>contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
