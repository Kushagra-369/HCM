import React from 'react';
import image5 from '../assets/images/hcm 871.jpg';
import Logo from './Logo';
import { motion } from 'framer-motion';

export default function Humotardilixian() {
  return (
    <motion.div
      className="text-3xl text-yellow-200 px-5 bg-black"
      style={{
        backgroundImage: 'url(https://img.freepik.com/free-vector/bloody-handprint-background_23-2150756482.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Image with slide-in */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-10"
      >
        <img src={image5} alt="HCM-871" className="w-full max-w-4xl mx-auto rounded-xl shadow-2xl" />
      </motion.div>

      {/* Name + Classification */}
      <motion.div
        className="max-w-5xl mx-auto space-y-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {[
          "NAME - HCM-871 (Human Contentment Monster-871)",
          "ALTERNATE NAME - HUMOTARDILIXIAN",
          "E-TYPE - LLLNF (Living-Living-Living-Non-living Fusion)",
          "N-TYPE - BBBTF (Biotic-Biotic-Biotic-Technology fusion)",
          "S-TYPE - HUMAN-MICROBE-ANIMAL-AI",
          "HP - 5000 HEARTS",
        ].map((text, index) => (
          <motion.h1
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {text}
          </motion.h1>
        ))}
      </motion.div>

      {/* Attacks */}
      <motion.div
        className="mt-16 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        viewport={{ once: false }}
      >
        <h1 className="text-red-400 text-4xl font-bold">ATTACKS :</h1>
        <ul className="list-disc pl-10 mt-4 space-y-2">
          {[
            "1) Super roar",
            "2) Regenerate after breaking",
            "3) Poison tongue lick",
            "4) Laser beam",
            "5) Has metal body and can fly",
          ].map((attack, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 1 }}
              viewport={{ once: false }}
              className="text-yellow-200"
            >
              {attack}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Weaknesses */}
      <motion.div
        className="mt-16 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        viewport={{ once: false }}
      >
        <h1 className="text-red-400 text-4xl font-bold">WEAKNESSES :</h1>
        <p className="mt-4 text-yellow-100">
          Has energy ball, which is protected inside the metal body
        </p>
      </motion.div>

      {/* Logo */}
      <motion.div
        className="pt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        viewport={{ once: false }}
      >
        <Logo />
      </motion.div>
    </motion.div>
  );
}
