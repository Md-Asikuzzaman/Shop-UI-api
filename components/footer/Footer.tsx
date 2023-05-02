import { NextPage } from 'next';
import { FaGooglePlay } from 'react-icons/fa';
import { GrAppleAppStore } from 'react-icons/gr';

interface Props {}

const Footer: NextPage<Props> = ({}) => {
  return (
    <footer className='py-7 bg-footer'>
      <div className='container grid lg:grid-cols-4 md:grid-cols-2 gap-7'>
        <div>
          <h2 className='text-white text-2xl md:mb-5 mb-3'>Logo</h2>
          <p className='text-gray-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            nulla, consequuntur.
          </p>
          <div className='flex gap-2 mt-4 flex-wrap'>
            <div className='bg-slate-500 w-fit py-2 px-3 flex items-center gap-2 text-gray-200 rounded-md cursor-pointer'>
              <FaGooglePlay />
              <span>Google Play</span>
            </div>
            <div className='bg-slate-500 w-fit py-2 px-3 flex items-center gap-2 text-gray-200 rounded-md cursor-pointer'>
              <GrAppleAppStore />
              <span>App Store</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className='text-xl text-white font-semibold md:mb-5 mb-3'>
            About Us
          </h3>
          <ul className='text-gray-300 flex flex-col gap-3'>
            <li>Careers</li>
            <li>Our Store</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3 className='text-xl text-white font-semibold md:mb-5 mb-3'>
            Customer Care
          </h3>
          <ul className='text-gray-300 flex flex-col gap-3'>
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Track Your Order</li>
            <li>Returns & Refunds</li>
          </ul>
        </div>

        <div>
          <h3 className='text-xl text-white font-semibold md:mb-5 mb-3'>
            Contact Us
          </h3>
          <ul className='text-gray-300 flex flex-col gap-3'>
            <li>109 BIDC Road Dhaka, Bangladesh</li>
            <li>Email: example@gmail.com</li>
            <li>Phone: +880 1995-580669</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
