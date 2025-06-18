import React, { useState } from 'react';
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaBars } from "react-icons/fa6";
import { GiSplitCross } from "react-icons/gi";
import { Element } from 'react-scroll';
import './Navbar.css';
import MovingComponent from 'react-moving-text';

export default function Navbar() {
  const data2 = [
    { href: "/", title1: "HOME" },
    { href: "/classification", title1: "CLASSIFICATION" },
    { href: "/comparision", title1: "COMPARISION" },
    { href: "/about", title1: "MORE" },
  ];

  const data3 = [
    { href: "phase1", title1: "PHASE1" },
    { href: "phase2", title1: "PHASE2" },
    { href: "phase3", title1: "PHASE3" },
    { href: "phase4", title1: "PHASE4" },
    { href: "footer", title1: "FOOTER" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpen2, setMenuOpen2] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  const openMenu2 = () => setMenuOpen2(true);
  const closeMenu2 = () => setMenuOpen2(false);

  return (
    <Element name='navbar'>
      <div
        style={{
          backgroundImage:
            'url(https://t3.ftcdn.net/jpg/01/22/03/84/360_F_122038456_AEdKNITqNDwdPTVdPDy1Fk5YaD9Um1xm.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="flex justify-between px-5 text-white h-50 items-center py-4">
          {/* Left Mobile Menu Icon */}
          <div
            onClick={openMenu2}
            className=" cursor-pointer text-3xl"
            aria-label="Open menu"
          >
            <FaBars />
          </div>

          {/* Mobile Menu 2 (In-page scroll links) */}
          {menuOpen2 && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex flex-col overflow-y-auto">
              <div className="flex justify-end p-4">
                <button
                  onClick={closeMenu2}
                  aria-label="Close menu 2"
                  className="text-3xl text-white hover:text-yellow-300 transition"
                >
                  <GiSplitCross />
                </button>
              </div>
              <nav className="flex-1 flex flex-col justify-center items-center gap-6">
                {data3.map((item, key) => (
                  <div key={key} className="animated-gradient-border  w-3/4 max-w-xs mx-auto my-2">
                    <ScrollLink
                   
                    to={item.href}
                    smooth={true}
                    duration={600}
                    offset={-70}
                    onClick={closeMenu2}
                    className="animated-gradient-border-inner p-1 block text-center text-yellow-300 py-3 text-2xl font-semibold  hover:text-black transition rounded-lg"
                  >
                    {item.title1}
                  </ScrollLink>
                  </div>
              
                ))}
              </nav>
            </div>
          )}

          {/* Center Title */}
          <div className="text-5xl font-black md:text-6xl text-center">
            <MovingComponent
              type="swing"
              duration="4000ms"
              delay="0s"
              direction="normal"
              timing="ease-in-out"
              iteration="infinite"
              fillMode="both">
              EMPTY SPACES
            </MovingComponent>

          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex  justify-center gap-10">
            {data2.map((item, key) => (
              <div key={key} className="animated-gradient-border  w-3/4 max-w-xs mx-auto my-2">
                <RouterLink
                  to={item.href}
                  onClick={closeMenu}
                  className="animated-gradient-border-inner p-1 block text-center text-yellow-300 py-3 text-2xl font-semibold  hover:text-black transition rounded-lg"
                >
                  {item.title1}
                </RouterLink>
              </div>
            ))}
          </ul>

          {/* Right Mobile Menu Icon */}
          <button
            onClick={openMenu}
            className="md:hidden block cursor-pointer text-3xl"
            aria-label="Open menu"
          >
            <FaBars />
          </button>

          {/* Mobile Menu 1 (Router navigation) */}
          {menuOpen && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex flex-col overflow-y-auto">
              <div className="flex justify-end p-4">
                <button
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="text-3xl text-white hover:text-yellow-300 transition"
                >
                  <GiSplitCross />
                </button>
              </div>
              <nav className="flex-1 flex flex-col justify-center items-center gap-6">
                {data2.map((item, key) => (
                  <div key={key} className="animated-gradient-border w-3/4 max-w-xs mx-auto my-2">
                    <RouterLink
                      to={item.href}
                      onClick={closeMenu}
                      className="animated-gradient-border-inner p-1  block text-center text-yellow-300 py-3 text-2xl font-semibold  hover:text-black transition rounded-lg"
                    >
                      {item.title1}
                    </RouterLink>
                  </div>
                ))}


              </nav>
            </div>
          )}
        </div>
      </div>
    </Element>
  );
}
