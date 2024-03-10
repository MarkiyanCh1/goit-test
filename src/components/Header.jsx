import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import MenuSvg from "./MenuSvg";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const pathname = useLocation();

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleNavigation();
    }
  };

  return (
    <div
      className={`${
        openNavigation
          ? "fixed top-0 left-0 w-screen h-screen bg-[#000000cc] z-50"
          : "mx-5 sm:mx-32"
      }`}
      onClick={handleOverlayClick}
    >
      <nav
        className={`bg-regal-blue rounded-t-lg min-w-[280px] flex items-center justify-end pr-10 sm:pr-0 sm:justify-center h-[80px] ${
          openNavigation ? "mt-0" : "mt-5"
        }`}
      >
        <div className="p-5 sm:flex hidden gap-7">
          <Link
            className={`flex items-center justify-center p-2 min-w-24	rounded-lg font-bold ${
              pathname.pathname === "/"
                ? "text-rose-950 bg-green-400"
                : "text-black bg-white"
            }`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`flex items-center justify-center p-2 min-w-24	rounded-lg font-bold ${
              pathname.pathname === "/catalog"
                ? "text-rose-950 bg-green-400"
                : "text-black bg-white"
            }`}
            to="/catalog"
          >
            Catalog
          </Link>
          <Link
            className={`flex items-center justify-center p-2 min-w-24	rounded-lg font-bold ${
              pathname.pathname === "/favorites"
                ? "text-rose-950 bg-green-400"
                : "text-black bg-white"
            }`}
            to="/favorites"
          >
            Favorites
          </Link>
        </div>

        <button className=" sm:hidden" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </button>
      </nav>
      <div
        className={`${
          openNavigation
            ? "relative w-[162px] mx-auto z-2 flex flex-col items-center justify-center pt-10 gap-10"
            : "hidden"
        }`}
      >
        <Link
          className={`block relative border border-white rounded-[35px] p-5 text-2xl uppercase  transition-colors hover:text-pink-800 w-full text-center ${
            pathname.pathname === "/"
              ? "text-red-500 bg-green-400 scale-110"
              : "text-black bg-white"
          }`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`block relative border border-white rounded-[35px] p-5 text-2xl uppercase  transition-colors hover:text-pink-800 w-full text-center ${
            pathname.pathname === "/catalog"
              ? "text-red-500 bg-green-400 scale-110"
              : "text-black bg-white"
          }`}
          to="/catalog"
        >
          Catalog
        </Link>
        <Link
          className={`block relative border border-white rounded-[35px] p-5 text-2xl uppercase transition-colors hover:text-pink-800 w-full text-center ${
            pathname.pathname === "/favorites"
              ? "text-red-500 bg-green-400 scale-110"
              : "text-black bg-white"
          }`}
          to="/favorites"
        >
          Favorites
        </Link>
      </div>
    </div>
  );
};

export default Header;
