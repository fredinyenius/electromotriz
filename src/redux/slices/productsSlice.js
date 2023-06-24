import { createSlice } from "@reduxjs/toolkit";
import { fetchReadProduct, fetchReadProducts, fetchReadProductId, fetchCreateProduct, fetchEditProduct, fetchDeleteProduct } from "../thunks/productsThunk";

const initialState = {
  loading: false,
  error: {},
  products: [],
  product: {},
  productId: {}
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    resetProducts: (state) => {
      state.loading = false;
      state.error = {};
      state.products = [];
      state.product = {};
      state.productId = {};
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchReadProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.products = action.payload.data;
    });
    builder.addCase(fetchReadProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.products = [];
    });
    builder.addCase(fetchReadProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.product = action.payload.data;
    });
    builder.addCase(fetchReadProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.product = {};
    });
    builder.addCase(fetchReadProductId.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchReadProductId.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.productId = action.payload.data;
    });
    builder.addCase(fetchReadProductId.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.productId = {};
    });
    builder.addCase(fetchCreateProduct.pending, (state) => {
      state.loading = true;
      state.error = {};
      state.products = state.products
    });
    builder.addCase(fetchCreateProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.products = state.products
    })
    builder.addCase(fetchCreateProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.products = state.products;
    })
    builder.addCase(fetchEditProduct.pending, (state) => {
      state.loading = true;
      state.error = {};
      state.products = state.products
    })
    builder.addCase(fetchEditProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.products = state.products;
    })
    builder.addCase(fetchEditProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.products = state.products
    })
    builder.addCase(fetchDeleteProduct.pending, (state) => {
      state.loading = true;
      state.error = {};
      state.products = state.products
    })
    builder.addCase(fetchDeleteProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.products = state.products;
    })
    builder.addCase(fetchDeleteProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.products = state.products
    })
  }
});

export const { resetProducts } = productsSlice.actions;

export default productsSlice.reducer;