import { useEffect } from 'react';
import { NextPage } from 'next';
import { AiFillShop } from 'react-icons/ai';
import SingleProduct from './SingleProduct';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { fetchProducts } from '@/redux/features/product/productSlice';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';

interface Props {}

const Product: NextPage<Props> = ({}) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts(''));
  }, []);

  return (
    <section className='py-5 bg-gray-100'>
      <div className='container'>
        <h2 className='flex items-center gap-2 text-xl font-semibold mb-4'>
          <AiFillShop className='text-tomato text-2xl' /> All Products
        </h2>

        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-7'>
          {products.loading ? (
            'Loading...'
          ) : products.products.length > 0 ? (
            products.products.map((product) => (
              <SingleProduct key={product._id} product={product} />
            ))
          ) : (
            <div className='flex flex-col items-center gap-3 py-5'>
              <MdOutlineProductionQuantityLimits className='text-3xl text-rose-500' />
              <h6 className='text-xl text-gray-600'>No Product!!!</h6>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Product;
