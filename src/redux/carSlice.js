import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

export const carSlice = createSlice({
  name: "Cars",
  initialState: {
    items: [],
    isLoading: false,
  },
  reducers: {
    clearCarsList(state) {
      state.items = [];
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = [...state.items, ...action.payload];
      })
      .addCase(fetchCars.rejected, (state) => {
        state.isLoading = false;
        state.items = [];
      }),
});

export const { clearCarsList } = carSlice.actions;
