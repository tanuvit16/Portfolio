"use client";

import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(0)';
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(100%)';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScrollTo = (id) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? 'bg-white bg-opacity-80 backdrop-blur-lg shadow-md dark:bg-[#0e061e] dark:shadow-white/20'
            : ''
        }`}
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            closeMenu();
          }}
        >
        <Image
  src={isDarkMode ? assets.logo_dark : assets.logo}
  alt="Logo"
  width={112}
  height={40}
  priority
  className="cursor-pointer mr-14"
/>

        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3 rounded-full transition-all duration-300 ${
            isScroll
              ? ''
              : 'bg-white shadow-md bg-opacity-50 dark:border dark:border-white/50 dark:bg-[#13052a]'
          } font-Ovo text-lg font-semibold ${isDarkMode ? 'text-purple-100' : 'text-purple-700'} select-none`}
        >
          {['home', 'about', 'services', 'work', 'contact'].map((id) => (
            <li key={id}>
              <button
                onClick={() => smoothScrollTo(id)}
                className="hover:text-purple-300 transition-colors duration-300"
              >
                {id === 'about' ? 'About me' : id === 'work' ? 'My Work' : id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="transition-transform duration-300 hover:scale-110"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Theme Toggle"
              className="w-6"
            />
          </button>

         <button
  onClick={() => smoothScrollTo('contact')}
  className="hidden lg:flex group relative items-center gap-3 px-8 py-3 rounded-full 
  font-Ovo text-lg font-semibold text-white
  bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600
  shadow-[0_8px_30px_rgba(168,85,247,0.45)]
  transition-all duration-500 ease-out
  hover:shadow-[0_12px_40px_rgba(236,72,153,0.7)]
  hover:scale-110 overflow-hidden"
>
  {/* Animated glow overlay */}
  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
    opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

  {/* Button text */}
  <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-[1px]">
    Contact Me
  </span>

  {/* Arrow with slide animation */}
  <Image
    src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
    alt="Arrow"
    className="relative z-10 w-4 transition-transform duration-300 
    group-hover:translate-x-2"
  />
</button>


          <button
            className="block md:hidden ml-3 transition-transform duration-300 hover:scale-110"
            onClick={openMenu}
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Menu"
              className="w-6"
            />
          </button>
        </div>

        <ul
          ref={sideMenuRef}
          className="fixed top-0 right-0 h-screen w-64 bg-white dark:bg-[#0e061e] text-purple-100 shadow-md transform translate-x-full transition-transform duration-500 flex flex-col gap-6 py-20 px-10 z-50 font-Ovo text-xl font-semibold select-none"
        >
          <div
            className="absolute right-6 top-6 cursor-pointer transition-transform duration-300 hover:scale-110 text-purple-100"
            onClick={closeMenu}
          >
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Close"
              className="w-5"
            />
          </div>

          {['home', 'about', 'services', 'work', 'contact'].map((id) => (
            <li key={id}>
              <button
                onClick={() => smoothScrollTo(id)}
                className="hover:text-purple-300 transition-colors duration-300 text-left w-full"
              >
                {id === 'about' ? 'About me' : id === 'work' ? 'My Work' : id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
