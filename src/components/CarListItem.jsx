import { useState } from "react";

import { Modal } from "../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoritesCars } from "../redux/selectors.js";
import { addFavoriteCar, deleteFavoritCar } from "../redux/favoriteSlice.js";
import Notiflix from "notiflix";
import HeartIcon from "./HeartIcon.jsx";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

export const CarsListItem = ({ car }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavoritesCars);

  const handleClick = () => {
    if (toggleModal) {
      setToggleModal(false);
      enablePageScroll();
    } else {
      setToggleModal(true);
      disablePageScroll();
    }
  };

  const handleToggleFavorites = (carId) => {
    const persistedCar = favoriteCars.find(({ id }) => carId === id);

    if (!persistedCar) {
      dispatch(addFavoriteCar(car));
      Notiflix.Notify.success("Added to your favorites");
    } else {
      dispatch(deleteFavoritCar(carId));
      Notiflix.Notify.success("Removed from your favorites");
    }
  };

  const {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    functionalities,
    accessories,
    rentalCompany,
    type,
    address,
  } = car;

  const updateaddress = address.split(", ").slice(-2).join(" | ");
  const isInFavorites = favoriteCars.some((i) => i.id === id);

  return (
    <div className="w-[274px] hover:scale-110 hover:z-10">
      <li className="relative rounded-2xl w-[274px] h-[426px] overflow-hidden	gap-3 bg-cardbg shadow-xl shadow-[#691a9880]">
        <div className="h-[269px] rounded-[14px] overflow-hidden">
          <img
            className="h-[269px] object-cover object-center w-full"
            width={274}
            height={269}
            src={img}
            alt={model}
          />
        </div>
        <div className="flex justify-between px-[10px] mt-[14px] mb-[8px]">
          <p className="h-6 text-base font-semibold text-left">
            {make}{" "}
            <span className="text-[#3470ff] text-base text-left h-[24px]">
              {" "}
              {model},{" "}
            </span>{" "}
            {year}
          </p>
          <p className="h-6 text-base font-semibold text-left">
            {" "}
            {rentalPrice}
          </p>
        </div>
        <p className="mb-7 px-[10px] h-[40px] text-[#12141780] text-xs leading-[18px]">
          {updateaddress} | {rentalCompany} | {type} | {make} | {id} |{" "}
          {accessories[0]} | {functionalities[0]}
        </p>
        <button
          className="flex items-center justify-center p-2  min-w-[150px] mx-auto h-[44px] w-[274px] border text-[#ffffff] text-xl rounded-xl bg-[#3470FF] transition-all duration-200 hover:bg-[#0B44CD] hover:cursor-pointer hover:scale-110"
          id={id}
          onClick={handleClick}
        >
          Learn more
        </button>
        <div
          className="absolute w-[18px] h-[18px] top-[14px] right-[14px] cursor-pointer "
          id={id}
          onClick={() => handleToggleFavorites(id)}
        >
          <HeartIcon isClicked={isInFavorites} />
        </div>
      </li>
      <Modal isOpen={toggleModal} handleClick={handleClick} car={car}></Modal>
    </div>
  );
};
