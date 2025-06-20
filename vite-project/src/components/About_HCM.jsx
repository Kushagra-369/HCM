import React from 'react'
import { Link, Element } from 'react-scroll';
import './Origin.css';

import Logo from './Logo';


export default function About_HCM() {
  return (
    <Element name='about_hcm' >
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex items-center justify-center px-6 py-20">
        <div className="bg-white/5 border animated-gradient-borders border-white/10 backdrop-blur-md rounded-xl p-10 max-w-5xl w-full text-center shadow-lg">
          <h1 className="text-5xl md:text-6xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
            About HCM
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed text-gray-200">
            HCMs — short for <span className="italic text-white">Human Contentment Monsters</span> — exist in the multiverse of <span className="italic text-white">Empty Spaces</span>, the novel written by me.
            <br /><br />
            Each HCM is a unique fusion of two different species. What connects them all is a trace of human DNA. In some types, the human DNA is dominant, making them appear and behave more like humans — their classification reflects this.
            <br /><br />
            Others possess only a small fragment of human DNA. This allows them to think just slightly like humans, but not enough to be considered part-human. As a result, these types do not include “human” in their identity.
          </p>
        </div>
      </div>

    </Element>
  )
}
