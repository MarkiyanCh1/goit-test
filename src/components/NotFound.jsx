import errorImage from "../assets/error.png";

export const NotFound = () => {
  return (
    <div className="w-[700px] my-auto mx-0">
      <img src={errorImage} alt="Nothing found" />
      <h1 className="flex justify-center items-center mx-[40px] my-auto text-3xl font-bold">
        Cars not Found!
      </h1>
    </div>
  );
};
