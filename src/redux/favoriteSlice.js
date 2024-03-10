import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteCars: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavoriteCar: (state, action) => {
      state.favoriteCars.push(action.payload);
    },
    deleteFavoritCar: (state, action) => {
      state.favoriteCars = state.favoriteCars.filter(
        (car) => car.id !== action.payload
      );
    },
    deleteAllFavoriteCars: (state) => {
      state.favoriteCars = [];
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const { addFavoriteCar, deleteAllFavoriteCars, deleteFavoritCar } =
  favoriteSlice.actions;
