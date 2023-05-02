import { useState } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { BsChevronDown } from 'react-icons/bs';
import { RxDashboard } from 'react-icons/rx';

interface Props {}

const Navbar: NextPage<Props> = ({}) => {
  const [category, setCategory] = useState(false);

  return (
    <header className='shadow-md py-3 relative'>
      <div className='container flex justify-between select-none'>
        {/* categories */}
        <div
          onClick={() => setCategory((prev) => !prev)}
          className='flex items-center gap-2 cursor-pointer bg-slate-100 py-2 px-4 rounded-md'
        >
          <RxDashboard />
          <h4 className='flex items-center gap-1'>
            Categories
            <BsChevronDown />
          </h4>
        </div>

        {/* category lists */}

        {category ? (
          <div className='bg-white absolute top-20 w-60 shadow-lg z-10'>
            <ul>
              <li className='px-3 py-2 hover:bg-slate-50'>fashion</li>
              <li className='px-3 py-2 hover:bg-slate-50'>mobile</li>
              <li className='px-3 py-2 hover:bg-slate-50'>cars</li>
              <li className='px-3 py-2 hover:bg-slate-50'>cars</li>
              <li className='px-3 py-2 hover:bg-slate-50'>cars</li>
              <li className='px-3 py-2 hover:bg-slate-50'>cars</li>
              <li className='px-3 py-2 hover:bg-slate-50'>cars</li>
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
