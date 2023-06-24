import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from '../thunks/categoryThunk';

const initialState = {
  isLoading: false,
  error: null,
  items: [],
}

const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, state => {
      state.isLoading = true
    })
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.isLoading = false
      state.items = action.payload
    })
  }
});

export default categoriesSlice.reducer;