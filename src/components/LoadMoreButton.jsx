import { useState } from "react";
import Loader from "../components/Loader";

export const LoadMoreButton = ({ onClick = null }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    await onClick();
    setIsLoading(false);
  };

  return (
    <div className="mt-[90px] mb-[150px]">
      {isLoading && <Loader />}
      {!isLoading && (
        <button
          type="button"
          className=" flex items-center justify-center  p-2 w-[120px] border text-[#ffffff] text-xl rounded-lg bg-[#3470FF] transition-all duration-200 hover:bg-[#0B44CD] hover:cursor-pointer hover:scale-110"
          onClick={handleClick}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Load more"}
        </button>
      )}
    </div>
  );
};
