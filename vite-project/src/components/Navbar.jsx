import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import { FaBars } from 'react-icons/fa6';
import { GiSplitCross } from 'react-icons/gi';
import MovingComponent from 'react-moving-text';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navLinks = [
  { href: '/', title: 'HOME' },
  { href: '/classification', title: 'CLASSIFICATION' },
  { href: '/comparision', title: 'COMPARISION' },
  { href: '/about', title: 'MORE' },
  { href: '/fight', title: 'FIGHT' },
];

const scrollLinks = [
  { href: 'phase1', title: 'PHASE1' },
  { href: 'phase2', title: 'PHASE2' },
  { href: 'phase3', title: 'PHASE3' },
  { href: 'phase4', title: 'PHASE4' },
  { href: 'footer', title: 'FOOTER' },
];

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
                  className="animated-gradient-border-inner p-1 block text-center text-yellow-300 py-3 text-2xl font-semibold hover:text-black transition rounded-lg"
                >
                  {title}
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
  const [openNavMenu, setOpenNavMenu] = useState(false);

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
        <div className="flex justify-between px-5 text-white h-50 items-center py-4">

          {/* Left: In-page scroll menu (mobile) */}
          <div
            onClick={() => setOpenScrollMenu(true)}
            className="cursor-pointer text-3xl"
            aria-label="Open scroll menu"
          >
            <FaBars />
          </div>

          {/* Center: Logo/Title */}
          <div
            className="text-5xl font-black md:text-6xl text-center"
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

          {/* Right: Router menu (mobile) */}
          <button
            onClick={() => setOpenNavMenu(true)}
            className="md:hidden block cursor-pointer text-3xl"
            aria-label="Open nav menu"
          >
            <FaBars />
          </button>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex justify-center gap-10">
            {navLinks.map(({ href, title }, idx) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                key={idx}
                className="animated-gradient-border w-3/4 max-w-xs mx-auto my-2"
              >
                <RouterLink
                  to={href}
                  className="animated-gradient-border-inner p-1 block text-center text-yellow-300 py-3 text-2xl font-semibold hover:text-black transition rounded-lg"
                >
                  {title}
                </RouterLink>
              </motion.div>
            ))}
          </ul>
        </div>

        {/* Animated Overlays for Mobile Menus */}
        {openScrollMenu && (
          <MenuOverlay
            items={scrollLinks}
            onClose={() => setOpenScrollMenu(false)}
            isScroll={true}
          />
        )}
        {openNavMenu && (
          <MenuOverlay
            items={navLinks}
            onClose={() => setOpenNavMenu(false)}
            isScroll={false}
          />
        )}
      </div>
    </Element>
  );
}
