import Layout from '@/components/Layout';
import SingleCart from '@/components/cart/SingleCart';
import { NextPage } from 'next';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { IoMdCart } from 'react-icons/io';
import {  useAppSelector } from '@/redux/hooks/hooks';

interface Props {}

const Cart: NextPage<Props> = ({}) => {
  const products = useAppSelector((state) => state.cart.cartItems);

  let subtotal = 0;
  products.length > 0 &&
    products?.forEach((item) => (subtotal += item.cartQuantity * item.price));

  return (
    <Layout>
      <section className='py-10 bg-gray-100'>
        <div className='container'>
          <h2 className='flex items-center gap-2 text-xl font-semibold mb-4'>
            <IoMdCart className='text-tomato text-2xl' /> Cart Details
          </h2>

          <div className='flex min-h-[50vh] gap-10'>
            <div className='flex-grow flex flex-col gap-3'>
              {products.length > 0
                ? products.map((product) => (
                    <SingleCart key={product._id} product={product} />
                  ))
                : 'No Product in Cart'}
            </div>
            <div className='bg-white shadow-sm p-5 rounded-md shrink-0 h-fit min-w-[22rem]'>
              <h2 className='flex items-center gap-2 text-xl font-semibold mb-4 text-rose-500 border-b border-gray-200 pb-2'>
                Cart Summary
              </h2>

              <div className='flex justify-between items-center'>
                <span>Total Price: </span>
                <h3 className='font-semibold text-rose-500'>
                  ${subtotal === 0 ? '0.00' : subtotal}
                </h3>
              </div>
              <button className='flex items-center justify-center gap-2 bg-rose-400 hover:bg-rose-500 py-2 px-5 rounded-md w-full text-white mt-5 duration-200'>
                <BsFillCartCheckFill /> Check out
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
