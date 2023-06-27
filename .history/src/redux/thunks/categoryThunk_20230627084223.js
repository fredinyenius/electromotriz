import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const options = {
        method: 'GET',
        url: `https://backend-senaty-production.up.railway.app/categorias`
      };
      const { data } = await axiosInstance(options);
      return data ?? [];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);