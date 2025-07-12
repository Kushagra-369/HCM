import React from 'react';
import { Element } from 'react-scroll';
import './Origin.css';
import { motion } from 'framer-motion';
import Logo from './Logo';

export default function Origin() {
  return (
    <Element name="origin">
      <motion.div
        className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex items-center justify-center px-6 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="bg-white/5 border animated-gradient-borders border-white/10 backdrop-blur-md rounded-xl p-10 max-w-5xl w-full text-center shadow-lg"
          initial={{ scale: 0.95, y: 40 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Origin of HCMs
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl leading-relaxed text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            In the beginning, everything was classified into two primary types: 
            <span className="text-white font-semibold"> living</span> and <span className="text-white font-semibold">non-living</span>.
            <br /><br />
            These were further divided into:
            <br />
            1) <span className="text-white font-semibold">Biotic</span> (from the living category)<br />
            2) <span className="text-white font-semibold">Abiotic</span> (from the non-living category)
            <br /><br />
            Various species were selected from both classifications, and their DNA was merged to create new lifeforms. However, a small trace of <span className="text-white font-semibold">human DNA</span> was always essential — no matter how minimal — to make the fusion stable and capable of thought.
          </motion.p>
        </motion.div>
      </motion.div>
    </Element>
  );
}
