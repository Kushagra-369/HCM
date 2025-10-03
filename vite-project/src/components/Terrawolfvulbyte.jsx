import React from 'react';
import Logo from './Logo';
import { motion } from 'framer-motion';

export default function Terrawolfvulbyte() {
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
      {/* Image */}
      <motion.div
        className="py-10"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src='https://res.cloudinary.com/dynodadq0/image/upload/v1757503606/hcm_522_i66yvn.jpg' alt="HCM-522" className="w-full max-w-4xl mx-auto rounded-xl shadow-2xl" />
      </motion.div>

      {/* Info */}
      <motion.div
        className="max-w-5xl mx-auto space-y-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.25,
            },
          },
        }}
      >
        {[
          'NAME - HCM-522 (Human Contentment Monster-522)',
          'ALTERNATE NAME - TERRAWOLFBYTE',
          'E-TYPE - LLLNF (Living-Living-Living-Non-living Fusion)',
          'N-TYPE - ABBTF (Abiotic-Biotic-Biotic-Technology fusion)',
          'S-TYPE - PLANT-ANIMAL-BIRD-AI',
          'HP - 4500 HEARTS',
        ].map((text, idx) => (
          <motion.h1
            key={idx}
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
            '1) big beast transformation',
            '2) earthquake',
            '3) tornado',
            '4) lazer beam',
            '5) have metal body and can fly',
          ].map((attack, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 30 }}
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
        <p className="mt-4 text-yellow-100">Weakens from water</p>
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
