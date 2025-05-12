import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className="py-[10px] px-1 md:px-[70px] flex justify-between items-center ">
      <img src="/logo.png" alt="logo" className="h-[46px]" />
      <nav className="hidden md:flex gap-3 items-center  md:gap-11 text-[14px] text-[#131313] font-[400]">
        <a href="#" className="font-[700] border-b-1">
          Home
        </a>
        <a href="#" className="hover:border-b-1  ">
          About Us
        </a>
        <a href="#" className="hover:border-b-1  ">
          Careers
        </a>
        <a href="#" className="hover:border-b-1  ">
          Investment Strategies
        </a>
        <a href="#" className="hover:border-b-1  ">
          FAQ's
        </a>
        <a href="#" className="hover:border-b-1  ">
          Contact Us
        </a>
        <a
          href="#"
          className="bg-primary text-slate-50 py-[8px] px-[24px] rounded-[5px] hover:bg-primary-hover"
        >
          Inverster Login
        </a>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-300 hover:text-white focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <HiXMark className="h-6 w-6" />
            ) : (
              <HiBars3 className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
