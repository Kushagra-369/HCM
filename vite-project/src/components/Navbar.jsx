import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import { FaBars } from 'react-icons/fa6';
import { GiSplitCross } from 'react-icons/gi';
import { GiSwordsEmblem } from "react-icons/gi";
import MovingComponent from 'react-moving-text';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navLinks = [
  { href: '/', title: 'HOME' },
  { href: '/classification', title: 'CLASSIFICATION' },
  { href: '/comparision', title: 'COMPARISION' },
  { href: '/about', title: 'MORE' },
  { href: '/fight', title: 'FIGHT1' },
  {href:'/fight2',title:"FIGHT2"}
];

const scrollLinks = [
  { href: 'phase1', title: 'PHASE1' },
  { href: 'phase2', title: 'PHASE2' },
  { href: 'phase3', title: 'PHASE3' },
  { href: 'phase4', title: 'PHASE4' },
  { href: 'footer', title: 'FOOTER' },
];

const mainLinks = navLinks.slice(0, 4); // HOME - MORE
const fightLink = navLinks.slice(4); // includes both FIGHT and FIGHT2

function MenuOverlay({ items, onClose, isScroll }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-50 bg-black bg-opacity-70 flex flex-col overflow-y-auto"
      >
        <div className="flex justify-end p-4">
          <motion.button
            whileHover={{ rotate: 90, scale: 1.1 }}
            onClick={onClose}
            aria-label="Close menu"
            className="text-3xl text-white hover:text-yellow-300 transition"
          >
            <GiSplitCross />
          </motion.button>
        </div>

        <nav className="flex-1 flex flex-col justify-center items-center gap-6">
          {items.map(({ href, title }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="animated-gradient-border w-3/4 max-w-xs mx-auto my-2"
            >
              {isScroll ? (
                <ScrollLink
                  to={href}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  onClick={onClose}
                  className="group relative block p-3 text-center text-yellow-300 py-3 text-2xl font-semibold transition-colors duration-300 hover:text-black rounded-lg overflow-hidden"
                >
                  {title}
                  {/* Borders */}
                  <span className="absolute top-0 left-0 h-1 w-0 bg-white transition-all duration-300 group-hover:w-full delay-[100ms] rounded-tl-lg rounded-tr-lg"></span>
                  <span className="absolute top-0 right-0 w-1 h-0 bg-white transition-all duration-300 group-hover:h-full delay-[200ms] rounded-tr-lg rounded-br-lg"></span>
                  <span className="absolute bottom-0 right-0 h-1 w-0 bg-white transition-all duration-300 group-hover:w-full delay-[300ms] rounded-bl-lg rounded-br-lg"></span>
                  <span className="absolute bottom-0 left-0 w-1 h-0 bg-white transition-all duration-300 group-hover:h-full rounded-bl-lg rounded-tl-lg"></span>
                </ScrollLink>
              ) : (
                <RouterLink
                  to={href}
                  onClick={onClose}
                  className="animated-gradient-border-inner p-1 block text-center text-yellow-300 py-3 text-2xl font-semibold hover:text-black transition rounded-lg"
                >
                  {title}
                </RouterLink>
              )}
            </motion.div>
          ))}
        </nav>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [openScrollMenu, setOpenScrollMenu] = useState(false);
  const [openMainNavMenu, setOpenMainNavMenu] = useState(false);
  const [openFightMenu, setOpenFightMenu] = useState(false);

  return (
    <Element name="navbar">
      <div
        style={{
          backgroundImage:
            'url(https://t3.ftcdn.net/jpg/01/22/03/84/360_F_122038456_AEdKNITqNDwdPTVdPDy1Fk5YaD9Um1xm.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="flex justify-between items-center px-5 py-15 text-white">

          {/* Left bar - scroll menu (all screens) */}
          <div
            onClick={() => setOpenScrollMenu(true)}
            className="cursor-pointer text-3xl"
            aria-label="Open scroll menu"
          >
            <FaBars />
          </div>

          {/* Center + right section */}
          <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-center gap-4 text-center">

            {/* Title */}
            <div
              className="text-4xl md:text-6xl font-black"
              style={{
                fontFamily: "'Creepster', cursive",
                textShadow: '2px 2px 8px black',
              }}
            >
              <MovingComponent
                type="swing"
                duration="4000ms"
                delay="0s"
                direction="normal"
                timing="ease-in-out"
                iteration="infinite"
                fillMode="both"
              >
                EMPTY SPACES
              </MovingComponent>
            </div>

            {/* Inline nav (desktop only) */}
            <ul className="hidden md:flex items-center gap-6 pl-6">
              {mainLinks.map(({ href, title }, idx) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  key={idx}
                  className="animated-gradient-border"
                >
                  <RouterLink
                    to={href}
                    className="group relative block px-4 py-2 text-yellow-300 text-xl font-semibold transition-colors duration-300 hover:text-black rounded-lg overflow-hidden"
                  >
                    {title}
                    {/* Border animation */}
                    <span className="absolute top-0 left-0 h-1 w-0 bg-white transition-all duration-300 group-hover:w-full delay-[100ms] rounded-tl-lg rounded-tr-lg"></span>
                    <span className="absolute top-0 right-0 w-1 h-0 bg-white transition-all duration-300 group-hover:h-full delay-[200ms] rounded-tr-lg rounded-br-lg"></span>
                    <span className="absolute bottom-0 right-0 h-1 w-0 bg-white transition-all duration-300 group-hover:w-full delay-[300ms] rounded-bl-lg rounded-br-lg"></span>
                    <span className="absolute bottom-0 left-0 w-1 h-0 bg-white transition-all duration-300 group-hover:h-full rounded-bl-lg rounded-tl-lg"></span>
                  </RouterLink>
                </motion.div>
              ))}
            </ul>
          </div>

          {/* Fight Menu Toggle - Desktop Only */}
          <div
            onClick={() => setOpenFightMenu(true)}
            className="hidden md:block cursor-pointer px-5 text-red-600 hover:scale-110 duration-500 text-5xl"
            aria-label="Open fight menu"
          >
            <GiSwordsEmblem />

          </div>

          {/* All Nav - Mobile Only */}
          <button
            onClick={() => setOpenMainNavMenu(true)}
            className="md:hidden block cursor-pointer text-3xl"
            aria-label="Open full nav menu"
          >
            <FaBars />
          </button>
        </div>

        {/* Overlays */}
        {openScrollMenu && (
          <MenuOverlay
            items={scrollLinks}
            onClose={() => setOpenScrollMenu(false)}
            isScroll={true}
          />
        )}
        {openMainNavMenu && (
          <MenuOverlay
            items={navLinks}
            onClose={() => setOpenMainNavMenu(false)}
            isScroll={false}
          />
        )}
        {openFightMenu && (
          <MenuOverlay
            items={fightLink}
            onClose={() => setOpenFightMenu(false)}
            isScroll={false}
          />
        )}
      </div>
    </Element>
  );
}
