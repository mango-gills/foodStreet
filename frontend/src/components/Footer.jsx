import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container max-w-[1250px] mx-auto p-5 flex flex-col md:flex-row justify-between md:justify-around items-start md:items-center md:p-0 h-[200px] md:h-[150px]">
      <div className="footer-links">
        <div className="footer-logo">
          <Link to={"/"} className="logo">
            FoodStreet
          </Link>
        </div>
      </div>

      <div className="newsletter-container">
        <input type="text" />
        <button>Subscribe</button>
      </div>

      <div className="footer-text">
        <h4>About Us</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, non?
        </p>
      </div>
    </div>
  );
};

export default Footer;
