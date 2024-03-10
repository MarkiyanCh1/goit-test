export const selectCars = (state) => state.cars.items;
export const selectAmountCars = (state) => state.cars.items.length;
export const selectLoading = (state) => state.cars.isLoading;

export const selectFavoritesCars = (state) => state.favorite.favoriteCars;


