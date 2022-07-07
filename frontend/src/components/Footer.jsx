import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="App">
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-logo">
            <Link to={"/"} className="logo">
              FoodStreet
            </Link>
          </div>
        </div>
        <div className="footer-text">
          <h4>About Us</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, non?
          </p>
        </div>

        <div className="newsletter-container">
          <input type="text" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
