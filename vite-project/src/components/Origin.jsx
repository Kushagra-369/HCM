import React from 'react'
import { Link, Element } from 'react-scroll';
import Logo from './Logo';


export default function Origin() {
  return (
    <Element name="origin">
     <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex items-center justify-center px-6 py-20">
  <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-10 max-w-5xl w-full text-center shadow-lg">
    <h1 className="text-5xl md:text-6xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
      Origin of HCMs
    </h1>
    <p className="text-xl md:text-2xl leading-relaxed text-gray-200">
      In the beginning, everything was classified into two primary types: 
      <span className="text-white font-semibold"> living</span> and <span className="text-white font-semibold">non-living</span>.
      <br /><br />
      These were further divided into:
      <br />
      1) <span className="text-white font-semibold">Biotic</span> (from the living category)<br />
      2) <span className="text-white font-semibold">Abiotic</span> (from the non-living category)
      <br /><br />
      Various species were selected from both classifications, and their DNA was merged to create new lifeforms. However, a small trace of <span className="text-white font-semibold">human DNA</span> was always essential — no matter how minimal — to make the fusion stable and capable of thought.
    </p>
  </div>
</div>

    </Element>
  )
}
