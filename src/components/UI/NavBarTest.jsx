import "../../../public/css/main.css";

const NavBarTest = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-3">
          <img src="src\img\logo.svg" alt="site logo" />
        </div>
        <div className="hidden md:flex space-x-6">
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
          href="#"
          className="hidden md:block text-white bg-brightRed p-3 px-6 pt-2 rounded-full hover:bg-brightRedLight"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default NavBarTest;
