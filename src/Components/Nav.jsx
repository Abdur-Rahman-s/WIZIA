import React, { useState } from 'react';
import Logo from '../../public/Logo.png';
import { Button } from "@nextui-org/react";
import { Link } from '@nextui-org/react';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const NavItem = ['About Us', 'Pricing', 'Customers', 'Solutions'];

  return (
    <nav className="container px-6 md:px-0 mx-auto flex justify-between items-center py-6 font-Work_Sans relative">
      {/* Logo */}
      <img
        src={Logo}
        alt="Logo"
        className="hover:scale-105 transition-transform duration-300 ease-in-out"
      />

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        <ul className="flex gap-6">
          {NavItem.map((item, key) => (
            <li key={key}>
              <Link className="text-[#FFFFFF] font-normal cursor-pointer hover:text-[#0FF1F6] transition-colors duration-300">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Icon */}
      <div
        className="text-white text-2xl block md:hidden cursor-pointer hover:text-[#0FF1F6] transition-colors duration-300"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <i className={isMenuOpen ? "ri-close-fill" : "ri-menu-3-fill"}></i>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="container mx-auto absolute top-full right-0 w-full bg-[#002228] p-4 md:hidden z-10 animate-slide-down">
          <ul className="flex flex-col gap-4">
            {NavItem.map((item, key) => (
              <li key={key}>
                <Link className="text-[#FFFFFF] font-normal cursor-pointer hover:text-[#0FF1F6] transition-colors duration-300 w-full">
                  {item}
                </Link>
              </li>
            ))}
            {/* Buttons for Mobile */}
            <div className="flex flex-col gap-4 mt-4">
              <Button
                radius="full"
                className="bg-[#0FF1F6] text-black font-bold text-sm w-full py-2 hover:bg-white transition-transform duration-300"
              >
                Book a Demo
              </Button>
              <Button
                radius="full"
                className="bg-white text-black font-bold text-sm w-full py-2 hover:bg-[#0FF1F6] hover:text-white transition-all duration-300"
              >
                Contact Us
              </Button>
            </div>
          </ul>
        </div>
      )}

      {/* Buttons for Desktop */}
      <div className="hidden md:flex gap-3">
        <Button
          radius="full"
          className="bg-[#0FF1F6] text-black font-bold text-sm px-6 py-2 hover:scale-105 transition-transform duration-300"
        >
          Book a Demo
        </Button>
        <Button
          radius="full"
          className="bg-white text-black font-bold text-sm px-6 py-2 hover:bg-[#0FF1F6] hover:text-white transition-all duration-300"
        >
          Contact Us
        </Button>
      </div>
    </nav>
  );
}

export default Nav;
