import React from 'react';
import Logo from './Logo';
import MovingComponent from 'react-moving-text';
import './Greatest.css';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
export default function Comparision() {
  const data = [
    { title1: "SPHINX", title2: "800", href: '/sphinx' },
    { title1: "ROCKMAN", title2: "500", href: '/rockman' },
    { title1: "TARDIHUMAN", title2: "1200", href: '/tardihuman' },
    { title1: "CYBRAIN", title2: "1500", href: '/cybrain' },
    { title1: "WEREWOLF", title2: "600", href: '/werewolf' },
    { title1: "TERRAKA", title2: "600", href: '/terraka' },
    { title1: "VULTRIX", title2: "1000", href: '/vultrix' },
    { title1: "PETRABYTE", title2: "1300", href: '/petrabyte' },
    { title1: "GORKON", title2: "700", href: '/gorkon' },
    { title1: "SANDRAX", title2: "700", href: '/sandrax' },
    { title1: "TARDION", title2: "500", href: '/tardion' },
    { title1: "FLARON", title2: "900", href: '/flaron' },
    { title1: "TIGRIS", title2: "900", href: '/tigris' },
    { title1: "OCULUS", title2: "2000", href: '/oculus' },
    { title1: "FLURTONE", title2: "1000", href: '/flurtone' },
    { title1: "PETROVIS", title2: "600", href: '/petrovis' },
  ];

  const data2 = [
    { title1: "HUMOTARDILIXIAN", title2: "5000", href: '/humotardilixian' },
    { title1: "TERRAWOLFVULBYTE", title2: "4500", href: '/terrawolfvulbyte' },
    { title1: "GORDRAXDIOZONE", title2: "4200", href: '/gordraxdiozone' },
    { title1: "FLURTOTILUS", title2: "5500", href: '/flurtotilus' },
  ];

  return (
    <motion.div
      className='bg-black'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className='text-white text-6xl md:text-8xl 2xl:text-9xl flex justify-center py-8'
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        Comparison
      </motion.h1>

      <motion.h2
        className='text-yellow-300 text-center text-4xl md:text-6xl 2xl:text-7xl'
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        Simple Fusions
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 px-6 text-center text-cyan-300 text-2xl"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {data.map((item, idx) => (
          <motion.div
            key={idx}
            className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-yellow-300 border border-cyan-500 rounded-xl p-4 shadow-md hover:shadow-cyan-300"
            whileHover={{ scale: 1.05 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <Link to={item.href} className="block text-cyan-200 2xl:text-4xl font-semibold hover:underline">
              {item.title1}
            </Link>
            <div className="text-red-400 text-lg 2xl:text-2xl mt-2 font-medium">
              ❤️ {item.title2} hearts
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.h2
        className='text-lime-400 text-center text-6xl md:text-7xl 2xl:text-8xl'
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.7 }}
      >
        Special Fusions
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 py-10 text-center text-cyan-300 text-3xl"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {data2.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-cyan-700 rounded-xl shadow-lg p-6 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 ease-in-out"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link to={item.href} className="block text-cyan-200 font-semibold text-3xl md:text-4xl 2xl:text-5xl hover:underline">
              {item.title1}
            </Link>
            <motion.div
              className="text-green-500 text-xl md:text-2xl 2xl:text-4xl mt-3 font-medium animate-pulse"
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            >
              ❤️ {item.title2} hearts
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className='text-center py-20'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className='text-orange-400 text-6xl md:text-8xl 2xl:text-9xl font-extrabold mb-8'
          initial={{ scale: 0.8, rotate: -5 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.5 }}
        >
          <MovingComponent
            type="spin"
            duration="6000ms"
            direction="normal"
            timing="ease-in-out"
            iteration="infinite"
            fillMode="both"
          >
            THE GREATEST FUSION
          </MovingComponent>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <MovingComponent
            type="shakeMix"
            duration="1000ms"
            direction="normal"
            timing="ease-out"
            iteration="infinite"
            fillMode="none"
          >
<div className="flex justify-center items-center h-full py-20 bg-black bg-opacity-95">
  <div className="p-8 w-[420px] 2xl:w-[600px] 2xl:h-[700px] bg-black/70 border border-red-900 rounded-xl shadow-[0_0_30px_red] text-center text-white font-horror">

    <h1 className="text-4xl 2xl:text-6xl text-red-600 tracking-wider mb-6 animate-pulse drop-shadow-lg">
      ☠ OMNOXAR ☠
    </h1>

    <img
      className="w-72 h-72 2xl:w-100 2xl:h-120 object-cover mx-auto mb-6 rounded-lg grayscale hover:grayscale-0 transition duration-500 shadow-[0_0_20px_#ff0000aa]"
      src= 'https://res.cloudinary.com/dynodadq0/image/upload/v1757502746/HCM-001_yjegni.jpg'
      alt="Omnoxar"
    />

    <h2 className="text-2xl 2xl:text-4xl text-yellow-100 font-bold tracking-wide">
      HCM-001
    </h2>
  </div>
</div>


          </MovingComponent>
        </motion.div>
      </motion.div>

      <motion.h1
        className="items-center flex justify-center font-extrabold text-white text-2xl py-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <ScrollLink to="navbar" smooth={true} duration={600} offset={-70} className="cursor-pointer 2xl:text-3xl hover:text-yellow-400">
          <span>Back to top</span>
        </ScrollLink>
      </motion.h1>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Logo />
      </motion.div>
    </motion.div>
  );
}
