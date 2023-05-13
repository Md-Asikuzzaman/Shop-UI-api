import { addToCart } from '@/redux/features/cart/cartSlice';
import { useAppDispatch } from '@/redux/hooks/hooks';
import { NextPage } from 'next';
import { BsPlus, BsStarFill } from 'react-icons/bs';

interface Props {
  product: {
    _id: string;
    title: string;
    description: string;
    price: number;
    photo: string;
    category: string; 
    color: string;
    createdAt: any;
    updatedAt: any;
  };
}

const SingleProduct: NextPage<Props> = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleCart = (product: any): void => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <div className='bg-white relative shadow-sm rounded-md'>
        <span className='absolute top-3 left-2 bg-rose-400 py-1 px-4 rounded-full text-sm text-white'>
          10% Off
        </span>
        <img
          className='h-64 mx-auto'
          src={`${product.photo}`}
          alt={`${product.title}`}
        />
        <div className='p-4'>
          <h3 className='text-md mb-1'>{product.title}</h3>
          <span className='flex gap-1 text-yellow-500'>
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
          </span>
          <div className='flex items-center justify-between mt-2'>
            <h4 className='text-tomato font-semibold'>$ {product.price}</h4>
            <div className='h-10 w-10 bg-gray-100 rounded-full grid place-content-center cursor-pointer hover:bg-gray-200 duration-200'>
              <BsPlus
                onClick={() => handleCart(product)}
                className='text-2xl text-tomato'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
