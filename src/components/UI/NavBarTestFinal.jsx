import React from "react";

const NavBarTestFinal = () => {
  return (
    <nav className="container relative mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-3">
          <img src="src\img\logo.svg" alt="logo" />
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-darkGrayishBlue">
            Pricing
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Products
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
          href="#"
          className="hidden md:block bg-brightRed hover:bg-brightRedLight rounded-full p-3 px-6 pt-2 text-white"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default NavBarTestFinal;
