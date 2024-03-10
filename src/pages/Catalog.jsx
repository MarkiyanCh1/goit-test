import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectAmountCars, selectLoading } from "../redux/selectors.js";
import { selectFilteredCars } from "../redux/fiteredCars/filteredCarsSelector.js";

import { fetchCars } from "../redux/operations.js";
import { clearCarsList } from "../redux/carSlice";
import { clearFilter } from "../redux/fiteredCars/filterSlice";

import { NotFound } from "../components/NotFound";
import { CarsList } from "../components/CarsList";
import { SearchForm } from "../components/SearchForm";
import { LoadMoreButton } from "../components/LoadMoreButton";
import Loader from "../components/Loader";

const Catalog = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [initialLoad, setInitialLoad] = useState(true);
  const amount = useSelector(selectAmountCars);

  const filteredCars = useSelector(selectFilteredCars);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    if (page === 1 && !initialLoad) {
      dispatch(clearCarsList());
      dispatch(clearFilter());
    }

    if (!initialLoad) {
      dispatch(fetchCars({ page, limit: 12 }));
    } else {
      setInitialLoad(false);
    }
  }, [dispatch, page, initialLoad]);

  const handleLoadMore = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <section className="mx-5 sm:mx-32 flex flex-col items-center">
      <SearchForm />
      {isLoading && <Loader />}
      {filteredCars.length > 0 && <CarsList cars={filteredCars} />}
      {filteredCars.length === 0 && !isLoading && <NotFound />}
      {amount < 46 && amount >= 12 && !isLoading && (
        <LoadMoreButton onClick={handleLoadMore} />
      )}
    </section>
  );
};

export default Catalog;
