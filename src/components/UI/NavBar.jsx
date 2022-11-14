import React from "react";
import "../../../public/css/main.css";

const NavBar = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="pt-3">
          <img src="src\img\logo.svg" alt="website-logo" />
        </div>
        {/* Menu Items */}
        <div className="hidden space-x-6 md:flex">
          <a href="#" className="hover:text-darkGrayishBlue">
            Pricing
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Product
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            About Us
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Careers
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Community
          </a>
        </div>
        <a
          href=""
          // what is baseline?
          className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
