import React from 'react';
import { Link, Element } from 'react-scroll';
import './Origin.css';
import { motion } from 'framer-motion';
import Logo from './Logo';

export default function Empty_Spaces() {
  return (
    <Element name='about_empty_spaces'>
      <motion.div
        className="min-h-screen bg-gradient-to-b from-black via-gray-800 to-black flex items-center justify-center px-6 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="bg-white/5 border animated-gradient-borders border-white/10 backdrop-blur-md rounded-xl p-10 max-w-5xl w-full text-white text-center shadow-lg"
          initial={{ scale: 0.95, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            About EMPTY-SPACES
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Everything in our universe is made up of atoms. Whether it's solid, liquid, or gas—
            atoms are always present. But between these atoms, there exists something fascinating:
            <span className="font-semibold text-white"> empty spaces</span>.
            <br /><br />
            These seemingly empty gaps are more than just voids. Imagine a parallel universe
            where these spaces themselves are the atoms. While our universe may be made of
            circular atoms, this alternate universe consists of stellar-shaped atoms—stars:
            <br /><br />
            <motion.span
              className="text-3xl tracking-wider animate-pulse block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              ⭕⭕⭕⭕⭕<br />
              ⭕⭕⭕⭕⭕<br />
              ⭕⭕⭕⭕⭕<br />
              ⭕⭕⭕⭕⭕
            </motion.span>
            <br /><br />
            This mysterious parallel realm is composed of <span className="italic text-blue-300">anti-matter</span>,
            and unlike our universe which flows from life to death, it moves from death to life.
          </motion.p>
        </motion.div>
      </motion.div>
    </Element>
  );
}
