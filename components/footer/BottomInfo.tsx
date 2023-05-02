import { NextPage } from 'next';
import { FaShippingFast } from 'react-icons/fa';
import { MdPayment, MdSupport } from 'react-icons/md';
import { BsShieldShaded } from 'react-icons/bs';
import { RiCustomerService2Fill } from 'react-icons/ri';

interface Props {}

const BottomInfo: NextPage<Props> = ({}) => {
  return (
    <section className='py-5 mb-4 bg-gray-100'>
      <div className='container'>
        <h2 className='flex items-center gap-2 text-xl font-semibold mb-4'>
          <MdSupport className='text-tomato text-2xl' /> Our Speciality
        </h2>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-7'>
          <div className='bg-white text-center p-7'>
            <div className='h-20 w-20 bg-slate-200 rounded-full grid place-content-center mx-auto'>
              <FaShippingFast className='text-3xl' />
            </div>
            <h3 className='text-lg font-semibold my-3'>World Wide Delivery</h3>
            <p className='text-gray-400'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              adipisci.
            </p>
          </div>
          <div className='bg-white text-center p-7'>
            <div className='h-20 w-20 bg-slate-200 rounded-full grid place-content-center mx-auto'>
              <MdPayment className='text-3xl' />
            </div>
            <h3 className='text-lg font-semibold my-3'>Safe Payment</h3>
            <p className='text-gray-400'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              adipisci.
            </p>
          </div>

          <div className='bg-white text-center p-7'>
            <div className='h-20 w-20 bg-slate-200 rounded-full grid place-content-center mx-auto'>
              <BsShieldShaded className='text-3xl' />
            </div>
            <h3 className='text-lg font-semibold my-3'>Shop With Confidence</h3>
            <p className='text-gray-400'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              adipisci.
            </p>
          </div>

          <div className='bg-white text-center p-7'>
            <div className='h-20 w-20 bg-slate-200 rounded-full grid place-content-center mx-auto'>
              <RiCustomerService2Fill className='text-3xl' />
            </div>
            <h3 className='text-lg font-semibold my-3'>24/7 Support</h3>
            <p className='text-gray-400'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              adipisci.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomInfo;
