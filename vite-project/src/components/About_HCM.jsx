import React from 'react';
import { Element } from 'react-scroll';
import './Origin.css';
import { motion } from 'framer-motion';
import Logo from './Logo';

export default function About_HCM() {
  return (
    <Element name='about_hcm'>
      <motion.div
        className=" h-full bg-gradient-to-b w-full  from-black via-gray-900 to-black text-white flex items-center justify-center px-6 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="bg-white/5 w-100 border xl:w-300 2xl:w-500 animated-gradient-borders border-white/10 backdrop-blur-md rounded-xl p-10 w-full text-center shadow-lg"
          initial={{ scale: 0.95, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-3xl md:text-6xl 2xl:text-8xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            About HCM
          </motion.h1>

          <motion.p
            className=" text-sm md:text-2xl 2xl:text-5xl leading-relaxed text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
          >
            HCMs — short for <span className="italic text-white">Human Contentment Monsters</span> — exist in the multiverse of <span className="italic text-white">Empty Spaces</span>, the novel written by me.
            <br /><br />
            Each HCM is a unique fusion of two different species. What connects them all is a trace of human DNA. In some types, the human DNA is dominant, making them appear and behave more like humans — their classification reflects this.
            <br /><br />
            Others possess only a small fragment of human DNA. This allows them to think just slightly like humans, but not enough to be considered part-human. As a result, these types do not include “human” in their identity.
          </motion.p>
        </motion.div>
      </motion.div>
    </Element>
  );
}
