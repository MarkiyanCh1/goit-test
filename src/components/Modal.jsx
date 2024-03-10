import { GrClose } from "react-icons/gr";
import { formatedNumber } from "../helpers/formatedNumber";
import ReactModal from "react-modal";

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    maxWidth: "100vw",
    maxHeight: "95vh",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    border: "none",
    borderRadius: "35px",
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  overlay: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: " rgba(0, 0, 0, 0.8)",
    zIndex: "1200",
  },
};

ReactModal.setAppElement("#root");

export const Modal = ({ isOpen, handleClick, car }) => {
  const {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    functionalities,
    accessories,
    fuelConsumption,
    engineSize,
    description,
    rentalConditions,
    mileage,
    type,
    address,
  } = car;

  const updateaddress = address.split(", ").slice(-2).join(" | ");
  const rentalConditionsToArray = rentalConditions.split("\n");
  const userconditions = rentalConditionsToArray[0];
  const userConditionsDescr = userconditions.split(": ");
  const driverLicense = rentalConditionsToArray[1];
  const security = rentalConditionsToArray[2];

  return (
    <ReactModal
      isOpen={isOpen}
      style={modalStyles}
      onRequestClose={handleClick}
      onAfterOpen={() => (document.body.style.overflow = "hidden")}
      onAfterClose={() => (document.body.style.overflow = "unset")}
    >
      <div className="flex max-w-[541px] max-h-[752px] justify-center items-center border border-black bg-white rounded-[35px]">
        <button
          className="w-6 h-6 absolute top-[14px] right-[14px] border-none bg-transparent cursor-pointer"
          type="button"
          onClick={handleClick}
        >
          <GrClose siz={24} />
        </button>
        <div className="rounded-[35px] max-w-[541px] max-h-[752px] p-10 overflow-y-scroll overflow-x-hidden no-scrollbar gap-2.5 bg-white">
          <div className="h-[268px] rounded-[14px] overflow-hidden">
            <img
              className="h-[268px] object-cover object-center w-full"
              src={img}
              alt={model}
            />
          </div>
          <div className="flex justify-between px-2.5 pb-2">
            <h3 className="mt-5 text-[#121417] text-lg leading-6 font-medium">
              {make}
              <span className="text-[#3470ff] text-lg leading-6 font-medium">
                {" "}
                {model},{" "}
              </span>
              {year}
            </h3>
          </div>

          <div className="px-2.5 pb-6">
            <p className="text-[#12141780] text-xs pb-1 leading-[18px]">
              {updateaddress} | id: {id} | Year: {year} | Type: {type}
            </p>
            <p className="text-[#12141780] text-xs pb-3.5 leading-[18px]">
              Fuel Consumption: {fuelConsumption} | Engine Size: {engineSize}
            </p>
            <h5 className="text-[#121417] pb-6 text-sm font-normal">
              {description}
            </h5>
            <h4 className="text-[#121417] text-sm font-medium pb-2">
              Accessories and functionalities:
            </h4>
            <p className="text-[#12141780] pb-1 text-xs leading-[18px] font-medium">
              {accessories[0]} | {accessories[1]} | {accessories[2]}
            </p>
            <p className="text-[#12141780] pb-6 text-xs leading-[18px] font-medium">
              {functionalities[0]} | {functionalities[1]} | {functionalities[2]}
            </p>
            <h4 className="text-[#121417] pb-2 text-sm font-medium">
              Rental Conditions:
            </h4>
            <div className="flex gap-2">
              <p className="border-none py-2 px-4 rounded-[35px] bg-[#f9f9f9] text-[#363535] text-xs leading-[18px] font-normal">
                {userConditionsDescr[0]}:
                <span className="text-[#3470ff] text-xs leading-[18px] font-semibold tracking-[-0.24px]">
                  {" "}
                  {userConditionsDescr[1]}{" "}
                </span>
              </p>
              <p className="px-3.5 py-1.5 rounded-[35px] bg-[#f9f9f9] text-[#363535] text-xs leading-[18px] font-normal">
                {driverLicense}
              </p>
            </div>
            <div className="flex gap-2 text-[#363535] text-xs leading-[18px] font-normal">
              <p className="px-3.5 py-1.5 rounded-[35px] bg-[#f9f9f9] text-[#363535] text-xs leading-[18px] font-normal">
                {security}
              </p>
              <p className="px-3.5 py-1.5 rounded-[35px] bg-[#f9f9f9] text-[#363535] text-xs leading-[18px] font-normal">
                Mileage:{" "}
                <span className="text-[#3470ff] text-xs leading-[18px] font-semibold tracking-[-0.24px]">
                  {formatedNumber(mileage)}{" "}
                </span>
              </p>
              <p className="px-3.5 py-1.5 rounded-[35px] bg-[#f9f9f9] text-[#363535] text-xs leading-[18px] font-semibold">
                Price:{" "}
                <span className="text-[#3470ff] text-xs leading-[18px] font-semibold tracking-[-0.24px]">
                  {rentalPrice.slice(1) + "$"}
                </span>
              </p>
            </div>
          </div>

          <a
            className="flex items-center justify-center p-1.5 min-h-[20px] w-[140px] border text-white text-sm rounded-lg bg-[#3470FF] transition-all duration-300 hover:border-black hover:cursor-pointer hover:scale-110"
            href="tel:+380730000000"
          >
            {" "}
            Rental car
          </a>
        </div>
      </div>
    </ReactModal>
  );
};
