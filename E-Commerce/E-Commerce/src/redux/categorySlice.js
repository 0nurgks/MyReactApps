// src/redux/categorySlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: []
};

// Asenkron eylem (action) oluşturma
export const getCategories = createAsyncThunk("category/getCategories", async () => {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  const data = await response.json();
  return data;
});

const categorySlice = createSlice({
  name: 'category', // name alanı eklenmesi önerilir
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  }
});

export default categorySlice.reducer;
