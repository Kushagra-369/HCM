import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink, Element } from "react-scroll";
import { FaBars } from "react-icons/fa6";
import { GiSplitCross, GiSwordsEmblem } from "react-icons/gi";
import { useAuth } from "./AuthContext";
import MovingComponent from "react-moving-text";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";
import ProfileD from "./Profile/ProfileD";

const navLinks = [
  { href: "/", title: "HOME" },
  { href: "/classification", title: "CLASSIFICATION" },
  { href: "/comparision", title: "COMPARISION" },
  { href: "/about", title: "MORE" },
  { href: "/fight", title: "FIGHT1" },
  { href: "/fight2", title: "FIGHT2" },
  { href: "/yourmonsters", title: "YOUR MONSTERS" },
  { href: "/getreviews", title: "SEE SUGGESTIONS AND REVIEWS OF USERS" },
  // { href: "/addmovie", title: " MOVIES" },
];


const scrollLinks = [
  { href: "phase1", title: "PHASE1" },
  { href: "phase2", title: "PHASE2" },
  { href: "phase3", title: "PHASE3" },
  { href: "phase4", title: "PHASE4" },
  { href: "footer", title: "FOOTER" },
];

const mainLinks = navLinks.slice(0, 4);
const fightLinks = navLinks.slice(4);

function MenuOverlay({ items, onClose, isScroll, position = "left", hoveredIndex, setHoveredIndex }) {
  const variants = {
    hidden: { x: position === "right" ? 300 : -300, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: position === "right" ? 300 : -300, opacity: 0 },
  };

  return (
    <motion.div
      key="menu-overlay"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
      className={`fixed top-0 ${position === "right" ? "right-0" : "left-0"}
    w-full md:w-80 h-full z-50 bg-black bg-opacity-95 backdrop-blur-md 
    flex flex-col shadow-lg overflow-y-auto max-h-screen`}
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

      <nav className="flex-1 flex flex-col justify-center items-center gap-6 px-4 pb-12">
        {items.map(({ href, title }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: position === "right" ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.3 }}
            className="animated-gradient-border w-full max-w-xs mx-auto my-2"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
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
                {/* Hover Border Animation */}
                <span className={`absolute bottom-0 left-0 w-1 bg-white transition-all duration-300 ${hoveredIndex === idx ? "h-full delay-[0ms]" : "h-0 delay-[400ms]"} rounded-bl-lg rounded-tl-lg`} />
                <span className={`absolute top-0 left-0 h-1 bg-white transition-all duration-300 ${hoveredIndex === idx ? "w-full delay-[100ms]" : "w-0 delay-[300ms]"} rounded-tl-lg rounded-tr-lg`} />
                <span className={`absolute top-0 right-0 w-1 bg-white transition-all duration-300 ${hoveredIndex === idx ? "h-full delay-[200ms]" : "h-0 delay-[200ms]"} rounded-tr-lg rounded-br-lg`} />
                <span className={`absolute bottom-0 right-0 h-1 bg-white transition-all duration-300 ${hoveredIndex === idx ? "w-full delay-[300ms]" : "w-0 delay-[100ms]"} rounded-bl-lg rounded-br-lg`} />
              </ScrollLink>
            ) : (
              <RouterLink
                to={href}
                onClick={onClose}
                className="animated-gradient-border-inner p-1 block text-center text-yellow-300 py-3 text-2xl font-semibold hover:text-black transition rounded-lg relative overflow-hidden"
              >
                {title}
                {/* Hover Border Animation */}
                <span className={`absolute bottom-0 left-0 w-1 bg-white transition-all duration-300 ${hoveredIndex === idx ? "h-full delay-[0ms]" : "h-0 delay-[400ms]"} rounded-bl-lg rounded-tl-lg`} />
                <span className={`absolute top-0 left-0 h-1 bg-white transition-all duration-300 ${hoveredIndex === idx ? "w-full delay-[100ms]" : "w-0 delay-[300ms]"} rounded-tl-lg rounded-tr-lg`} />
                <span className={`absolute top-0 right-0 w-1 bg-white transition-all duration-300 ${hoveredIndex === idx ? "h-full delay-[200ms]" : "h-0 delay-[200ms]"} rounded-tr-lg rounded-br-lg`} />
                <span className={`absolute bottom-0 right-0 h-1 bg-white transition-all duration-300 ${hoveredIndex === idx ? "w-full delay-[300ms]" : "w-0 delay-[100ms]"} rounded-bl-lg rounded-br-lg`} />
              </RouterLink>
            )}
          </motion.div>
        ))}
      </nav>
    </motion.div>
  );
}

export default function Navbar() {
  const [openScrollMenu, setOpenScrollMenu] = useState(false);
  const [openMainNavMenu, setOpenMainNavMenu] = useState(false);
  const [openFightMenu, setOpenFightMenu] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { isLog, userData } = useAuth();

  const closeAllMenus = () => {
    setOpenScrollMenu(false);
    setOpenMainNavMenu(false);
    setOpenFightMenu(false);
  };

  return (
    <Element name="navbar">
      <div
        style={{
          backgroundImage:
            "url(https://t3.ftcdn.net/jpg/01/22/03/84/360_F_122038456_AEdKNITqNDwdPTVdPDy1Fk5YaD9Um1xm.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-between  items-center px-6 py-8 md:py-12 text-white">
          <button
            onClick={() => {
              closeAllMenus();
              setOpenScrollMenu(true);
            }}
            className="cursor-pointer 2xl:pl-15 text-3xl sm:text-4xl md:text-4xl xl:text-6xl 2xl:text-8xl"
            aria-label="Open scroll menu"
          >
            <FaBars />
          </button>


          <div className="flex-1 flex justify-center flex-col md:flex-row md:items-center px-2 gap-10 text-center">
            <div
              className=" text-4xl sm:text-6xl lg:text-6xl md:text-4xl xl:text-7xl 2xl:text-9xl font-black select-none"
              style={{
                fontFamily: "'Creepster', cursive",
                textShadow: "2px 2px 8px black",
              }}
            >
              {
                isLog ? (
                  <ProfileD />
                ) : (
                  <MovingComponent
                    type="swing"
                    duration="4000ms"
                    direction="normal"
                    iteration="infinite"
                  >
                    EMPTY SPACES
                  </MovingComponent>
                )
              }


            </div>

            <ul className="hidden md:flex items-center gap-2 pl-1 2xl:gap-20  2xl:pl-4">
              {mainLinks.map(({ href, title }, idx) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  key={idx}
                  className="animated-gradient-border"
                >
                  <RouterLink
                    to={href}
                    className="group relative block  px-2 py-2 lg:px-4 lg:py-4 xl:px-6 xl:py-6 2xl:px-8 2xl:py-8 text-yellow-300 sm:text-sm lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold transition-colors duration-300 hover:text-black horror-container rounded-lg overflow-hidden overflow-y-auto max-h-screen"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {title}
                    {/* Hover Border Animation (restore this) */}
                    <span className={`absolute bottom-0 left-0 w-1  transition-all duration-100 ${hoveredIndex === idx ? "bg-white h-full delay-[0ms]" : "bg-black h-0 delay-[200ms]"} rounded-bl-lg rounded-tl-lg`} />
                    <span className={`absolute bottom-0 left-0 w-1 transition-all duration-100 ${hoveredIndex === idx ? "bg-white h-0 delay-[200ms]" : "bg-black h-full delay-[200ms]"} rounded-bl-lg rounded-tl-lg`} />

                    <span className={`absolute top-0 left-0 h-1 transition-all duration-100 ${hoveredIndex === idx ? "bg-white w-full delay-[600ms]" : "bg-black w-0 delay-[800ms]"} rounded-tl-lg rounded-tr-lg`} />
                    <span className={`absolute top-0 left-0 h-1 transition-all duration-100 ${hoveredIndex === idx ? "bg-white w-0 delay-[800ms]" : "bg-black w-full delay-[800ms]"} rounded-tl-lg rounded-tr-lg`} />

                    <span className={`absolute top-0 right-0 w-1 transition-all duration-100 ${hoveredIndex === idx ? "bg-white h-full delay-[400ms]" : "bg-black h-0 delay-[600ms]"} rounded-tr-lg rounded-br-lg`} />
                    <span className={`absolute top-0 right-0 w-1 transition-all duration-100 ${hoveredIndex === idx ? "bg-white h-0 delay-[600ms]" : "bg-black h-full delay-[600ms]"} rounded-tr-lg rounded-br-lg`} />

                    <span className={`absolute bottom-0 right-0 h-1 transition-all duration-100 ${hoveredIndex === idx ? "bg-white w-full delay-[200ms]" : "bg-black w-0 delay-[400ms]"} rounded-bl-lg rounded-br-lg`} />
                    <span className={`absolute bottom-0 right-0 h-1 transition-all duration-100 ${hoveredIndex === idx ? "bg-white w-0 delay-[400ms]" : "bg-black w-full delay-[400ms]"} rounded-bl-lg rounded-br-lg`} />
                  </RouterLink>
                </motion.div>
              ))}
            </ul>

          </div>

          <button
            onClick={() => {
              closeAllMenus();
              setOpenFightMenu(true);
            }}
            className="hidden md:block cursor-pointer px-5 text-red-600 hover:scale-110 duration-500 text-5xl"
            aria-label="Open fight menu"
          >
            <GiSwordsEmblem />
          </button>

          <button
            onClick={() => {
              closeAllMenus();
              setOpenMainNavMenu((prev) => !prev);
            }}
            className="md:hidden block text-red-600 cursor-pointer text-3xl"
            aria-label="Toggle main nav menu"
          >
            <GiSwordsEmblem />
          </button>
        </div>

        <AnimatePresence mode="wait">
          {openScrollMenu && (
            <MenuOverlay
              key="scroll-menu"
              items={scrollLinks}
              onClose={() => setOpenScrollMenu(false)}
              isScroll={true}
              position="left"
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          )}
          {openMainNavMenu && (
            <MenuOverlay
              key="main-menu"
              items={navLinks}
              onClose={() => setOpenMainNavMenu(false)}
              isScroll={false}
              position="left"
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          )}
          {openFightMenu && (
            <MenuOverlay
              key="fight-menu"
              items={fightLinks}
              onClose={() => setOpenFightMenu(false)}
              isScroll={false}
              position="right"
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          )}
        </AnimatePresence>
      </div>
    </Element>
  );
}
