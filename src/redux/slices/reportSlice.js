import { createSlice } from "@reduxjs/toolkit";
import { fetchGetProductReport } from "../thunks/reporteThunk";

const initialState = {
  loading: false,
  error: {},
  data: []
};

export const reportSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchGetProductReport.pending, state => {
      state.loading = true;
    })
    builder.addCase(fetchGetProductReport.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.data = [];
    })
    builder.addCase(fetchGetProductReport.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.data = action.payload.data;
    })
  }
})

export default reportSlice.reducer;