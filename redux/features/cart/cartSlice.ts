import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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
//   } else {
//     return localStorage.getItem(key);
//   }
// };

// const setFromLocalStorage = (key: string, val: any) => {
//   if (!key || typeof window === 'undefined') {
//     return '';
//   } else {
//     return localStorage.setItem(key, val);
//   }
// };

const initialState: DataType = {
  cartItems: /* getFromLocalStorage('cartItems')
    ? JSON.parse(getFromLocalStorage('cartItems') || '{}')
    : */ [],
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
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }

      // setFromLocalStorage('cartItems', JSON.stringify(state.cartItems));
    },

    removeFromCart: (state, action: PayloadAction<ProductType>) => {
      const updatedCartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      state.cartItems = updatedCartItems;
    },

    decreaseCart: (state, action: PayloadAction<ProductType>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity == 1) {
        const updatedCartItems = state.cartItems.filter(
          (item) => item._id !== action.payload._id
        );
        state.cartItems = updatedCartItems;
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, decreaseCart } = cartSlice.actions;
