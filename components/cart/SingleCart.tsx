import { NextPage } from 'next';
import { HiOutlineMinusSmall } from 'react-icons/hi2';
import { BsPlus } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { addToCart, decreaseCart, removeFromCart } from '@/redux/features/cart/cartSlice';
import { useAppDispatch } from '@/redux/hooks/hooks';

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
    cartQuantity: number;
  };
}

const SingleCart: NextPage<Props> = ({ product }) => {
  const dispatch = useAppDispatch();

  return (
    <div className='bg-white flex items-center p-5 gap-5 shadow-sm rounded-md shrink-0'>
      <img className='h-20 w-20' src={`${product.photo}`} alt='product' />
      <div className='flex-grow'>
        <div className='flex justify-between items-center'>
          <h2 className='text-lg text-gray-800'>{product.title}</h2>
          <div className='h-10 w-10 bg-gray-50 rounded-full grid place-content-center cursor-pointer hover:bg-gray-100 duration-200'>
            <IoMdClose
              onClick={() => dispatch(removeFromCart(product))}
              className='text-2xl text-rose-500'
            />
          </div>
        </div>

        <div className='flex items-center justify-between mt-8'>
          <div className='flex items-center gap-5'>
            <span className='text-gray-500'>
              ${product.price} * {product.cartQuantity}
            </span>
            <span className='font-semibold text-rose-500'>
              ${product.price * product.cartQuantity}
            </span>
          </div>
          <div className='flex gap-3'>
            <div className='h-10 w-10 bg-gray-50 rounded-full grid place-content-center cursor-pointer hover:bg-gray-100 duration-200'>
              <BsPlus
                onClick={() => dispatch(addToCart(product))}
                className='text-2xl text-tomato'
              />
            </div>

            <div className='h-10 w-10 bg-gray-50 rounded-full grid place-content-center cursor-pointer hover:bg-gray-100 duration-200'>
              <HiOutlineMinusSmall
                onClick={() => dispatch(decreaseCart(product))}
                className='text-2xl text-tomato'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
