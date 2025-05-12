import { useState } from "react";
import { HiBars3, HiOutlineEnvelope, HiXMark } from "react-icons/hi2";
// import { HiBars3, HiXMark } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  // sm:bg-amber-300 md:bg-green-400 lg:bg-red-400
  return (
    <nav>
      <div className="px-3 md:px-[30px] lg:px-[70px] sm:px-6 ">
        <div className="flex h-18 md:h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="logo" className="h-[42px] md:h-[46px]" />
          </div>

          {/* Desktop Menu */}
          {/* <div className="hidden md:flex md:items-center md:gap-4 lg:gap-11 text-primary text-[14px] mt-1">
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
              
              Contact
            </a>
            <a
              href="#"
              className="bg-primary text-slate-50 py-[6px] px-[22px] rounded-[5px] hover:bg-primary-hover -mt-1"
            >
              Inverster Login
            </a>
          </div> */}

          <div className="hidden md:flex md:items-center md:gap-[14px] lg:gap-11 text-primary text-[14px] mt-1">
            {[
              "Home",
              "About Us",
              "Careers",
              "Investment Strategies",
              "FAQ's",
              "Contact",
            ].map((label, i) => (
              <a
                key={label}
                href="#"
                className={`relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:bg-primary-hover after:scale-x-0 after:origin-left after:transition-transform after:duration-300  hover:text-primary-hover ${
                  i === 0 ? "font-semibold" : "hover:after:scale-x-100"
                } `}
              >
                {label}
              </a>
            ))}

            <a
              href="#"
              className="bg-primary text-white py-[6px] px-[22px] rounded-[5px] hover:bg-primary-hover -mt-1"
            >
              Investor Login
            </a>
          </div>

          {/* Mobile Menu Button */}

          <div className="md:hidden flex items-center justify-center gap-5">
            <a
              href="#"
              className="bg-primary text-slate-50 text-sm font-semibold py-[6px] px-[18px] rounded-[5px] hover:bg-primary-hover"
            >
              Inverster Login
            </a>
            <button
              onClick={toggleMenu}
              className="p-2 hover:text-primary-hover text-primary focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <HiXMark className="h-8 w-8" />
              ) : (
                <HiBars3 className="h-8 w-8" />
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
            className="hover:text-primary-hover transition-colors"
            onClick={toggleMenu}
          >
            Investment Strategies
          </a>
          <a
            href="#"
            className="hover:text-primary-hover transition-colors"
            onClick={toggleMenu}
          >
            FAQ's
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
