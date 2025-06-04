import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa6";
import { GiSplitCross } from "react-icons/gi";

export default function Navbar() {
  const data2 = [
    { href: "/", title1: "HOME" },
    { href: "/classification", title1: "CLASSIFICATION" },
    { href: "/comparision", title1: "COMPARISION" },
    { href: "/about", title1: "MORE" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div
      style={{
        backgroundImage: 'url(https://t3.ftcdn.net/jpg/01/22/03/84/360_F_122038456_AEdKNITqNDwdPTVdPDy1Fk5YaD9Um1xm.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <div className='flex justify-between px-5 text-white h-50 items-center py-4'>
        <div className='text-5xl md:text-6xl items-center text-center'>
          EMPTY SPACES
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex justify-center gap-10'>
          {data2.map((item, key) => (
            <li key={key} className='hover:bg-yellow-300 text-2xl hover:text-black px-4 py-2 rounded transition'>
              <Link to={item.href}>{item.title1}</Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon (Mobile) */}
        <button
          onClick={openMenu}
          className='md:hidden block cursor-pointer text-3xl'
          aria-label="Open menu"
        >
          <FaBars />
        </button>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className='fixed inset-0 z-50 bg-black bg-opacity-70 flex flex-col'>
            {/* Close Icon */}
            <div className='flex justify-end p-4'>
              <button
                onClick={closeMenu}
                aria-label="Close menu"
                className='text-3xl py-15 text-white hover:text-yellow-300 transition'
              >
                <GiSplitCross />
              </button>
            </div>
            {/* Menu Items */}
            <nav className='flex-1 flex flex-col justify-center items-center gap-6'>
              {data2.map((item, key) => (
                <Link
                  key={key}
                  to={item.href}
                  onClick={closeMenu}
                  className='w-3/4 max-w-xs text-center bg-gray-700 text-yellow-300 py-3 rounded-lg text-2xl font-semibold hover:bg-yellow-300 hover:text-black transition'
                >
                  {item.title1}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
