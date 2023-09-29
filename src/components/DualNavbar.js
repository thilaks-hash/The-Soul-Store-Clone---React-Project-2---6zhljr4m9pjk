import React, { useState } from "react";
import {
  FaBars,
  FaClipboardList,
  FaHeart,
  FaSearch,
  FaShoppingBag,
  FaShoppingBasket,
  FaShoppingCart,
  FaTimes,
  FaUsb,
  FaUser,
  FaUserAlt,
  FaUserAltSlash,
  FaUserFriends,
  FaUserTag,
  FaUsersCog,
} from "react-icons/fa";

const DualNavbar = () => {
  const [activeCategory, setActiveCategory] = useState("men");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTopNavCategoryClick = (category) => {
    setActiveCategory(category);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeSidebar = () => {
    setIsMenuOpen(false);
  };

  const renderBottomNavLinks = () => {
    switch (activeCategory) {
      case "men":
        return (
          <>
            <li>Topwear</li>
            <li>Shirts</li>
            <li>Jeans</li>
          </>
        );
      case "women":
        return (
          <>
            <li>Kurta</li>
            <li>Leggings</li>
            <li>Dresses</li>
          </>
        );
      case "kids":
        return (
          <>
            <li>T-shirts</li>
            <li>Shorts</li>
            <li>Skirts</li>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="">
      <div
        className={`fixed top-0 left-0 h-full w-3/5 bg-white z-20 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close icon to close the sidebar */}
        <div className="text-right p-8">
          <FaTimes
            size={24}
            onClick={closeSidebar}
            className="cursor-pointer"
          />
        </div>
        {isMenuOpen && (
          <>
            <ul className="p-3 m-3 flex flex-wrap">
              <li
                className={`cursor-pointer p-4 ${
                  activeCategory === "men" ? "font-bold  text-black" : ""
                }`}
                onClick={() => handleTopNavCategoryClick("men")}
              >
                Men
              </li>
              <li
                className={`cursor-pointer p-4 ${
                  activeCategory === "women" ? "font-bold text-black" : ""
                }`}
                onClick={() => handleTopNavCategoryClick("women")}
              >
                Women
              </li>
              <li
                className={`cursor-pointer p-4 ${
                  activeCategory === "kids" ? "font-bold text-black" : ""
                }`}
                onClick={() => handleTopNavCategoryClick("kids")}
              >
                Kids
              </li>
            </ul>
            <div className="p-5 m-5">
              <ul className="flex-col">
                {renderBottomNavLinks()}
                <li className="cursor-pointer p-5">
                  <FaSearch />
                </li>
                <li className="cursor-pointer p-5">
                  <FaHeart />
                </li>
                <li className="cursor-pointer p-5">
                  <FaShoppingCart />
                </li>
                <li className="cursor-pointer p-5">
                  <FaUser />
                </li>
              </ul>
            </div>
          </>
        )}
      </div>

      <nav className="bg-red-600 p-6 sm:p-6 md:p-6 lg:p-2 text-white ">
        <div className=" flex justify-between m-2 container mx-auto">
          <div
            className={`lg:hidden ${isMenuOpen ? "hidden" : "block"}`}
            onClick={toggleMenu}
          >
            <FaBars size={24} className="cursor-pointer" />
          </div>
          <ul className="hidden space-x-4 px-44  sm:hidden md:hidden lg:flex">
            <li
              className={`cursor-pointer ${
                activeCategory === "men" ? "font-bold  text-black" : ""
              }`}
              onClick={() => handleTopNavCategoryClick("men")}
            >
              Men
            </li>
            <li
              className={`cursor-pointer ${
                activeCategory === "women" ? "font-bold text-black" : ""
              }`}
              onClick={() => handleTopNavCategoryClick("women")}
            >
              Women
            </li>
            <li
              className={`cursor-pointer ${
                activeCategory === "kids" ? "font-bold text-black" : ""
              }`}
              onClick={() => handleTopNavCategoryClick("kids")}
            >
              Kids
            </li>
          </ul>
          <ul className="hidden space-x-4 px-14 font-normal sm:hidden md:hidden lg:flex">
            <li className="hover">TRACK ORDER</li>
            <li className="hover">CONTACT US</li>
            <li className="hover">DOWNLOAD APP</li>
          </ul>
        </div>
      </nav>
      <div className="relative hidden sm:hidden md:hidden lg:block">
        <img
          src="https://www.thesouledstore.com/static/img/300x157-twitter.png"
          alt="logo"
          className="w-32 h-20 m-5 absolute top-1/2  transform -translate-x-0 -translate-y-16 z-10"
        />
      </div>
      <nav className="shadow-md p-6 sm:p-6 md:p-6 lg:p-2 text-black ">
        <div className=" flex justify-between container mx-auto m-2 ">
          <ul className="hidden space-x-4 px-44 sm:hidden md:hidden lg:flex">
            {renderBottomNavLinks()}
          </ul>
          <ul className="hidden space-x-4 px-14 sm:hidden md:hidden lg:flex">
            <li className="cursor-pointer">
              <FaSearch />
            </li>
            <li className="cursor-pointer">
              <FaHeart />
            </li>
            <li className="cursor-pointer">
              <FaShoppingCart />
            </li>
            <li className="cursor-pointer">
              <FaUser />
            </li>
          </ul>
        </div>
      </nav>
      {/* responsive navbar */}
      <div className="relative  sm:block md:block lg:hidden">
        <img
          src="https://www.thesouledstore.com/static/img/300x157-twitter.png"
          alt="logo"
          className="w-32 h-20 m-5 absolute  left-1/2 transform -translate-x-1/2 -translate-y-32 z-10"
        />
      </div>
    </div>
  );
};
export default DualNavbar;
