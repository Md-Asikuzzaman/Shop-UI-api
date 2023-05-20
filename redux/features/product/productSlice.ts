import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

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
}

interface DataType {
  loading: boolean;
  products: ProductType[];
  error: string;
}

const initialState: DataType = {
  loading: false,
  products: [],
  error: '',
};

// FETCH PRODUCTS
export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async (data: any) => {
    try {
      const res = await axios.get('/api/product');

      if (data) {
        const filteredProducts = res.data.products.filter(
          (product: ProductType) =>
            product.title.toLowerCase().includes(data.toLowerCase())
        );

        return filteredProducts;
      } else {
        return res.data.products;
      }
    } catch (error: any) {
      throw new Error(error);
    }
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // FETCH PRODUCTS
    /* pending */
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
      state.products = [];
      state.error = '';
    });
    /* fulfilled */
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = '';
    });
    /* rejected */
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message || 'Something went wrong!';
    });
  },
});

export default productSlice.reducer;
