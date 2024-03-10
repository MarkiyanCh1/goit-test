import { selectFavoritesCars } from "../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import errorImage from "../assets/error.png";
import { CarsList } from "../components/CarsList";
import { deleteAllFavoriteCars } from "../redux/favoriteSlice";
import { Link } from "react-router-dom";

const Favorites = () => {
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavoritesCars);

  const handleDeleteAll = () => {
    dispatch(deleteAllFavoriteCars());
  };

  return (
    <div className="mx-5 sm:mx-32">
      {favoriteCars.length > 0 ? (
        <div className="flex flex-col items-center">
          <CarsList cars={favoriteCars} />
          <button
            className="mt-[100px] mb-[150px] p-2 w-[300px] border text-[#ffffff] text-xl rounded-lg bg-[#3470FF] transition-all duration-200 hover:bg-[#0B44CD] hover:cursor-pointer hover:scale-110"
            onClick={handleDeleteAll}
          >
            Remove all favorites cars
          </button>
        </div>
      ) : (
        <div className="flex flex-col min-w-[280px] max-h-[100vh] items-center text-center">
          <div className=" my-auto mx-0">
            <h2 className="text-xl font-bold">
              No favorite cars yet. You can add them from our catalog.
            </h2>
            <img className="w-[850px] " src={errorImage} alt="oops" />
          </div>
          <Link
            className="border-2 border-fuchsia-800 p-5 rounded-3xl bg-lime-800 text-amber-200 hover:border-l-indigo-800 hover:bg-amber-200 hover:text-lime-800 hover:scale-110 "
            to="/catalog"
          >
            Go to Catalog
          </Link>
        </div>
      )}
    </div>
  );
};

export default Favorites;
