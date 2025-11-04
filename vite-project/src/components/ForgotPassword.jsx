import React from "react";
import { motion } from "framer-motion";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-red-600 relative overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-[url('https://i.ibb.co/b6wRbW5/horror-bg.jpg')] bg-cover bg-center opacity-20 animate-pulse"></div>

      {/* Red Flicker Overlay */}
      <div className="absolute inset-0 bg-red-900 opacity-5 mix-blend-overlay animate-[pulse_3s_infinite]"></div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-widest text-center text-red-600 drop-shadow-[0_0_15px_#ff0000]"
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          FORGOT PASSWORD?
        </motion.h1>

        {/* Subtext */}
        <p className="text-gray-400 mt-4 text-center italic">
          “Even lost souls can return... if they dare.”
        </p>

        {/* Input & Button */}
        <div className="mt-10 flex flex-col gap-5 w-80">
          <input
            type="email"
            placeholder="Enter your cursed email..."
            className="bg-black/70 border border-red-800 text-red-200 px-4 py-2 rounded-md placeholder-red-600 focus:outline-none focus:border-red-500 shadow-[0_0_10px_#ff000033]"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-800 hover:bg-red-700 text-white py-2 rounded-md font-semibold shadow-[0_0_20px_#ff0000]"
          >
            Summon Reset Link
          </motion.button>
        </div>

        {/* Creepy Bottom Text */}
        <p className="absolute bottom-10 text-xs text-gray-700 tracking-wide animate-pulse">
          You can’t escape your forgotten fate...
        </p>
      </div>

      {/* Horror Pulse Animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.15; }
        }
      `}</style>
    </div>
  );
}
