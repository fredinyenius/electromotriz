import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../configs/axiosInstance";

export const fetchReadProducts = createAsyncThunk(
  'products/fetchReadProducts',
  async (_, { rejectWithValue }) => {
    try {
      const options = {
        method: 'GET',
        url: 'https://backend-senaty-production.up.railway.app/productos'
      };
      const { data } = await axiosInstance(options);
      return data;

    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchCreateProduct = createAsyncThunk(
  'products/fetchSaveProduct',
  async (body, { rejectWithValue }) => {
    try {
      const options = {
        method: 'POST',
        url: 'https://backend-senaty-production.up.railway.app/productos',
        headers: {
          'Content-Type': 'application/json',
        },
        data: body
      };
      const { data } = await axiosInstance(options);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)

export const fetchEditProduct = createAsyncThunk(
  'products/fetchEditProduct',
  async (payload, { rejectWithValue }) => {
    try {
      const options = {
        method: 'PUT',
        url: `https://backend-senaty-production.up.railway.app/producto/${payload?.id ?? null}`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: payload.body
      };
      const { data } = await axiosInstance(options);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)

export const fetchDeleteProduct = createAsyncThunk(
  'products/fetchDeleteProduct',
  async (id, { rejectWithValue }) => {
    try {
      const options = {
        method: 'DELETE',
        url: `https://backend-senaty-production.up.railway.app/producto/${id}`,
        headers: {
          'Content-Type': 'application/json',
        }
      };
      const { data } = await axiosInstance(options);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)

export const fetchReadProduct = createAsyncThunk(
  'products/fetchReadProduct',
  async (slug, { rejectWithValue }) => {
    try {
      const options = {
        method: 'GET',
        url: `/productos/slug/${slug}`
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