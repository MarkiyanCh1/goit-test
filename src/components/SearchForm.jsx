import { pricePoints, sortedMakes } from "../utils/searchFormPoints";
import Select from "react-select";
import Notiflix from "notiflix";
import { useDispatch } from "react-redux";

import { setFilter } from "../redux/fiteredCars/filterSlice";
import { clearCarsList } from "../redux/carSlice";
import { fetchCars } from "../redux/operations";

export const SearchForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { make, mileageFrom, mileageTo, rentalPrice } = e.target.elements;

    if (
      !make.value &&
      !mileageFrom.value &&
      !mileageTo.value &&
      !rentalPrice.value
    ) {
      Notiflix.Notify.warning("Select any filter");
      return;
    }

    const mileageFromInNumber = Number(mileageFrom.value);
    const mileageToInNumber = Number(mileageTo.value);

    if (mileageFromInNumber < 0 || mileageToInNumber < 0) {
      Notiflix.Notify.warning("Select valid mileage");
      return;
    }

    if (mileageFromInNumber > mileageToInNumber && mileageToInNumber !== 0) {
      Notiflix.Notify.warning("Select mileage to more than mileage from");
      return;
    }

    const filters = {
      make: make.value,
      rentalPrice: Number(rentalPrice.value),
      mileageFrom: mileageFromInNumber,
      mileageTo: mileageToInNumber,
    };
    dispatch(clearCarsList());
    dispatch(fetchCars({ page: 1, limit: 46 }));
    dispatch(setFilter(filters));
  };

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <form
      className="w-full flex flex-col lg+:flex-row items-center justify-center rounded-b-lg row bg-smokygreen mx-5 sm:mx-32 p-5 gap-5"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col xs:flex-row justify-center items-center min-h-10	gap-5">
        <label>
          <p className=" text-sm font-medium"> Car brand </p>
          <Select
            name="make"
            className="min-w-40 bg-[#ffffff] text-[#12141780]"
            placeholder="Enter the text"
            options={sortedMakes}
          />
        </label>
        <label>
          <p className="text-sm font-medium">Price / 1 hour </p>
          <Select
            name="rentalPrice"
            className="min-w-40 xs:min-w-12 bg-[#ffffff] text-[#12141780]"
            placeholder="To $"
            options={pricePoints.map((price) => ({
              value: price,
              label: price === 0 ? "All" : `$${price}`,
            }))}
          />
        </label>
      </div>
      <div className="w-[160px] xs:w-[332px] h-[120px] xs:h-[60px]">
        <p className="text-sm font-medium w-[160px] text-center">
          {" "}
          Car mileage / km
        </p>
        <div className="flex flex-col xs:flex-row items-center gap-3 xs:min-w-80 h-10 border-none ">
          <label>
            <input
              className="flex w-40 outline-none rounded-l-lg h-[38px] px-3 border border-[#d3d3d3]"
              type="number"
              name="mileageFrom"
              placeholder="From"
            />
          </label>
          <label>
            <input
              className="flex w-40 outline-none rounded-r-lg h-[38px] px-3 border border-[#d3d3d3]"
              type="number"
              name="mileageTo"
              placeholder="To"
            />
          </label>
        </div>
      </div>
      <div className="flex gap-5">
        <button
          className="flex items-center justify-center p-2 w-[100px] border bg-searchbutton text-white rounded-lg relative bottom-[-9px]"
          type="submit"
        >
          Search
        </button>
        <button
          className="flex items-center justify-center p-2 w-[100px] border bg-deletebutton text-white rounded-lg relative bottom-[-9px]"
          type="reset"
          onClick={handleReset}
        >
          Clear
        </button>
      </div>
    </form>
  );
};
