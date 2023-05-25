import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

export const fetchReadProducts = createAsyncThunk(
  'products/fetchReadProducts',
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

export const fetchReadProduct = createAsyncThunk(
  'products/fetchReadProduct',
  async (slug, { rejectWithValue }) => {
    try {
      const options = {
        method: 'GET',
        url: `/producto/slug/${slug}`
      };
      const { data } = await axiosInstance(options);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchReadProductId = createAsyncThunk(
  'products/fetchReadProductId',
  async (id, { rejectWithValue }) => {
    try {
      const options = {
        method: 'GET',
        url: `/producto/${id}`
      };
      const { data } = await axiosInstance(options);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);