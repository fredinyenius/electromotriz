import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

export const fetchGetProductReport = createAsyncThunk(
  'reports/fetchGetProductReport',
  async ({ startDate, endDate }, { rejectWithValue }) => {
    try {
      const options = {
        method: 'GET',
        url: `http://localhost:3000/reporte-productos?startDate=${startDate}&endDate=${endDate}`
      };
      const { data } = await axiosInstance(options);
      return data;

    } catch (error) {
      return rejectWithValue(error);
    }
  }
);