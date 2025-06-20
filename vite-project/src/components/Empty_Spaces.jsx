import React from 'react'
import { Link, Element } from 'react-scroll';
import Logo from './Logo';


export default function Empty_Spaces() {
  return (
    <Element name='about_empty_spaces'>
     <div className="min-h-screen bg-gradient-to-b from-black via-gray-800 to-black flex items-center justify-center px-6 py-20">
  <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-10 max-w-5xl w-full text-white text-center shadow-lg">
    <h1 className="text-5xl md:text-6xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
      About EMPTY-SPACES
    </h1>
    <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto text-gray-200">
      Everything in our universe is made up of atoms. Whether it's solid, liquid, or gas—
      atoms are always present. But between these atoms, there exists something fascinating:
      <span className="font-semibold text-white"> empty spaces</span>.
      <br /><br />
      These seemingly empty gaps are more than just voids. Imagine a parallel universe
      where these spaces themselves are the atoms. While our universe may be made of
      circular atoms, this alternate universe consists of stellar-shaped atoms—stars:
      <br /><br />
      <span className="text-3xl tracking-wider animate-pulse block">
        ⭕⭕⭕⭕⭕<br />
        ⭕⭕⭕⭕⭕<br />
        ⭕⭕⭕⭕⭕<br />
        ⭕⭕⭕⭕⭕
      </span>
      <br /><br />
      This mysterious parallel realm is composed of <span className="italic text-blue-300">anti-matter</span>,
      and unlike our universe which flows from life to death, it moves from death to life.
    </p>
  </div>
</div>

    </Element>
  )
}
