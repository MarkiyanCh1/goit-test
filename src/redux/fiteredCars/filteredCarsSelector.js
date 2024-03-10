import { createSelector } from "@reduxjs/toolkit";
import { selectCars } from "../selectors";
export const selectFilter = (state) => state.filter;

export const selectFilteredCars = createSelector(
  [selectCars, selectFilter],
  (cars, { make, mileageFrom, mileageTo, rentalPrice }) => {
    let filteredCars = [];

    if (make !== " ") {
      filteredCars = cars.filter((car) =>
        car.make.toLowerCase().includes(make.toLowerCase())
      );
    } else {
      filteredCars = cars;
    }

    if (rentalPrice > 0) {
      filteredCars = filteredCars.filter((car) => {
        const rentalPriceToNumber = Number(car.rentalPrice.split("$")[1]);
        return rentalPriceToNumber === rentalPrice;
      });
    }
    if (mileageFrom > 0 && mileageTo === 0) {
      filteredCars = filteredCars.filter(
        ({ mileage }) => mileage >= mileageFrom
      );
    }
    if (mileageFrom > 0 && mileageTo > 0) {
      filteredCars = filteredCars.filter(
        ({ mileage }) => mileage >= mileageFrom && mileage <= mileageTo
      );
    }
    if (mileageFrom === 0 && mileageTo > 0) {
      filteredCars = filteredCars.filter(({ mileage }) => mileage <= mileageTo);
    }
    return filteredCars;
  }
);
