import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

export const fetchReadContactData = createAsyncThunk(
  'contact/fetchReadContactData',
  async (_, { rejectWithValue }) => {
    try {
      const options = {
        method: 'POST',
        url: '/pedidos'
      };
      const { data } = await axiosInstance(options);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);