import { CarsListItem } from "../components/CarListItem";

export const CarsList = ({ cars }) => {
  return (
    <ul className="w-full grid grid-cols-carlist justify-items-center	gap-4 pt-4 mb-10 list-none">
      {cars.map((car) => (
        <CarsListItem key={car.id} car={car} />
      ))}
    </ul>
  );
};
