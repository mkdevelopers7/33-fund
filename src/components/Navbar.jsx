import { useState } from "react";
import { HiBars3, HiOutlineEnvelope, HiXMark } from "react-icons/hi2";
// import { HiBars3, HiXMark } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  // sm:bg-amber-300 md:bg-green-400 lg:bg-red-400
  return (
    <nav className="text-white ">
      <div className="px-3 md:px-[30px] lg:px-[70px] sm:px-6">
        <div className="flex h-20 md:h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="logo" className="h-[40px] md:h-[46px]" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:gap-4 lg:gap-11 text-primary text-[14px] mt-1">
            <a
              href="#"
              className="hover:text-primary-hover transition-colors active-menu"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-primary-hover transition-colors border-b-1 border-b-white hover:border-b-1 hover:border-b-primary-hover"
            >
              About Us
            </a>
            <a
              href="#"
              className="border-b-1 border-b-white hover:border-b-1 hover:border-b-primary-hover hover:text-primary-hover transition-colors"
            >
              Careers
            </a>
            <a
              href="#"
              className="border-b-1 border-b-white hover:border-b-1 hover:border-b-primary-hover hover:text-primary-hover transition-colors"
            >
              Investment Strategies
            </a>
            <a
              href="#"
              className="border-b-1 border-b-white hover:border-b-1 hover:border-b-primary-hover hover:text-primary-hover transition-colors"
            >
              FAQ's
            </a>
            <a
              href="#"
              className="flex items-center gap-2 border-b-1 border-b-white hover:border-b-1 hover:border-b-primary-hover hover:text-primary-hover transition-colors"
            >
              {/* <HiOutlineEnvelope className="h-5 w-5" /> */}
              Contact
            </a>
            <a
              href="#"
              className="bg-primary text-slate-50 py-[6px] px-[22px] rounded-[5px] hover:bg-primary-hover -mt-1"
            >
              Inverster Login
            </a>
          </div>

          {/* Mobile Menu Button */}

          <div className="md:hidden flex items-center justify-center gap-5">
            <a
              href="#"
              className="bg-primary text-slate-50 text-sm font-semibold py-[6px] px-[17px] rounded-[5px] hover:bg-primary-hover"
            >
              Inverster Login
            </a>
            <button
              onClick={toggleMenu}
              className="p-2 hover:text-primary-hover text-primary focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <HiXMark className="h-6 w-6" />
              ) : (
                <HiBars3 className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col gap-4 px-4 pb-4 text-primary">
          <a
            href="#"
            className="hover:text-primary-hover transition-colors"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-primary-hover transition-colors"
            onClick={toggleMenu}
          >
            About Us
          </a>
          <a
            href="#"
            className="hover:text-primary-hover transition-colors"
            onClick={toggleMenu}
          >
            Careers
          </a>
          <a
            href="#"
            className="flex items-center gap-2 hover:text-primary-hover transition-colors"
            onClick={toggleMenu}
          >
            {/* <HiOutlineEnvelope className="h-5 w-5" /> */}
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
