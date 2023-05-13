import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

interface ProductType {
  _id: string;
  title: string;
  description: string;
  price: number;
  photo: string;
  category: string;
  color: string;
  createdAt: any;
  updatedAt: any;
  cartQuantity: any;
}

interface DataType {
  cartItems: ProductType[];
  cartTotalQuantity: number;
  cartTotalPrice: number;
}

// const getFromLocalStorage = (key: string) => {
//   if (!key || typeof window === 'undefined') {
//     return '';
//   }

//   return localStorage.getItem(key);
// };

const initialState: DataType = {
  cartItems:
    typeof window !== 'undefined' && localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems')!)
      : [],
  cartTotalQuantity: 0,
  cartTotalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        // toast message
        toast.success(`${action.payload.title} quantity is increased.`, {
          position: 'bottom-right',
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        // toast message
        toast.success(`${action.payload.title} is added to cart.`, {
          position: 'bottom-right',
        });
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },

    removeFromCart: (state, action: PayloadAction<ProductType>) => {
      const updatedCartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      state.cartItems = updatedCartItems;

      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

      // toast message
      toast.warning(`${action.payload.title} is removed from cart.`, {
        position: 'bottom-right',
      });
    },

    decreaseCart: (state, action: PayloadAction<ProductType>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        // toast message
        toast.warning(`${action.payload.title} quantity is decreased.`, {
          position: 'bottom-right',
        });
      } else if (state.cartItems[itemIndex].cartQuantity == 1) {
        const updatedCartItems = state.cartItems.filter(
          (item) => item._id !== action.payload._id
        );
        state.cartItems = updatedCartItems;

        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

        // toast message
        toast.warning(`${action.payload.title} is removed from cart.`, {
          position: 'bottom-right',
        });
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, decreaseCart } = cartSlice.actions;
