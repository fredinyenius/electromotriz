import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

export const fetchReadHeroProducts = createAsyncThunk(
  'home/fetchReadHeroProducts',
  async (_, { rejectWithValue }) => {
    try {
      const options = {
        method: 'GET',
        url: `/banners?populate=image`
      };
      const { data } = await axiosInstance(options);
      return data.data ?? [];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchReadBestSellersProducts = createAsyncThunk(
  'home/fetchReadBestSellersProducts',
  async (_, { rejectWithValue }) => {
    try {
      const options = {
        method: 'GET',
        url: '/productos'
      };
      const { data } = await axiosInstance(options);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);