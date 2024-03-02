import React, { useState } from "react";
import logo from '../assets/logo.svg'
import burger from '../assets/icon-hamburger.svg'
import close from '../assets/icon-close.svg'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };


  return (
    <>
      <div className="lg:w-full flex lg:justify-around justify-between px-3 items-center lg:px-20 py-5">
        <img src={logo} alt="" />

        <div className="lg:hidden">

          {nav ? (
            
              <img onClick={handleNav}  className="cursor-pointer" src={close} alt="" />
            
          )

          :
        (
             <img
          onClick={handleNav}
            className="cursor-pointer"
            src={burger}
            alt=""
          />
          )}
         

         
        </div>

        <ul
          className={
            nav
              ? "lg:hidden absolute top-20 left-14  w-96 h-fit z-50 flex flex-col gap-7 items-center shadow-xl py-5 rounded-xl bg-white"
              : "lg:flex  gap-10 hidden"
        }
        >
          <li className="hover:text-gray-400 cursor-pointer transition ease-in duration-100">
            Pricing
          </li>
          <li className="hover:text-gray-400 cursor-pointer transition ease-in duration-100">
            Product
          </li>
          <li className="hover:text-gray-400 cursor-pointer transition ease-in duration-100">
            About Us
          </li>
          <li className="hover:text-gray-400 cursor-pointer transition ease-in duration-100">
            Careers
          </li>
          <li className="hover:text-gray-400 cursor-pointer transition ease-in duration-100">
            Community
          </li>
        </ul>

        <button className="hidden lg:flex border bg-orange-600 text-white p-2 rounded-3xl">
          Get Started
        </button>
      </div>
    </>
  );
};

export default Navbar;
