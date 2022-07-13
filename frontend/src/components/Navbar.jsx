import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <main>
      <div className="nav-bar-top">
        <Link to={"/"} className="logo">
          FoodStreet
        </Link>
        <div className="user-links">
          <a href="#">login</a>
          <span>|</span>
          <a href="#">signup</a>
        </div>
      </div>

      <div className="nav-bar-links">
        <ul className="left-links-container">
          <li>
            <Link to={"/"} className="url">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/blogs"}>New Blog</Link>
          </li>
        </ul>
        <ul className="right-links-container">
          <li>
            <Link to={"/all"}>All Blog</Link>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Navbar;
