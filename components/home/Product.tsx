import { NextPage } from 'next';
import { AiFillShop } from 'react-icons/ai';
import SingleProduct from './SingleProduct';

interface Props {}

const Product: NextPage<Props> = ({}) => {
  return (
    <section className='py-5 bg-gray-100'>
      <div className='container'>
        <h2 className='flex items-center gap-2 text-xl font-semibold mb-4'>
          <AiFillShop className='text-tomato text-2xl' /> All Products
        </h2>

        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-7'>
          <SingleProduct />
        </div>
      </div>
    </section>
  );
};

export default Product;
