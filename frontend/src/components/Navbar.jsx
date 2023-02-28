import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [navIcon, setNavIcon] = useState(false);

  const handleMenuClick = () => {
    setNavIcon(!navIcon);
  };

  return (
    <div className="flex w-full px-5 items-center justify-between md:items-end md:justify-center nav-bar-top max-w-[1400px] mx-auto mb-8">
      <NavLink to={"/"} className="logo">
        FoodStreet
      </NavLink>

      <div className="flex justify-between pb-2 ml-6 text-xl align-middle border-b-2 md:w-full border-b-orange-500">
        <div className="hidden md:block">
          <ul className="flex gap-8 text-[#686767]">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/all"}>Featured</NavLink>
            </li>
            <li>
              <NavLink>Categories</NavLink>
            </li>
            <li>
              <NavLink>About</NavLink>
            </li>
          </ul>
        </div>
        <div className="md:flex gap-6 text-[#284B7C] items-center hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <NavLink>Signup</NavLink>
          <NavLink>Login</NavLink>
        </div>
      </div>

      {/* mobile menu icons */}
      <div className="z-50 md:hidden" onClick={handleMenuClick}>
        {navIcon ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="text-[#284B7C] w-10 h-10 cursor-pointer hover:text-orange-500 ease-in duration-150"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="text-[#284B7C] w-10 h-10 cursor-pointer hover:text-orange-500 ease-in duration-150"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </div>

      <div
        className={`${
          navIcon ? "translate-x-0" : "translate-x-80"
        } fixed top-0 right-0 bg-white shadow-2xl w-[300px] h-screen z-10 md:hidden p-10 text-lg duration-200 ease-in`}
      >
        <ul className="space-y-3">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Featured</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
