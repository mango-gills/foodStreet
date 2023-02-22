import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-end justify-center nav-bar-top w-[1200px] mx-auto mb-8">
      <NavLink to={"/"} className="logo">
        FoodStreet
      </NavLink>

      <div className="flex justify-between w-full pb-2 ml-6 text-xl align-middle border-b-2 border-b-orange-500">
        <div>
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
        <div className="flex gap-6 text-[#284B7C] items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLineCap="round"
              strokeLineJoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <NavLink>Signup</NavLink>
          <NavLink>Login</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
