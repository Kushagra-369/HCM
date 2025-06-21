import React from 'react'
import Logo from './Logo'
import Empty_Spaces from './Empty_Spaces'
import Origin from './Origin'
import About_HCM from './About_HCM'
import { Link as ScrollLink, Element } from 'react-scroll';


export default function About() {
  return (
    <div className='bg-black text-2xl text-white text-center'>
      <Element name="about_empty_spaces">

        <Empty_Spaces />

      </Element>
      <Element name="about_hcm">
        <About_HCM /></Element>
      <Element name="origin">
        <Origin /></Element>
      <br />
      <div>
        <h1 className="items-center flex justify-center font-extrabold text-white text-2xl py-5">
          <ScrollLink
            to="navbar"
            smooth={true}
            duration={600}
            offset={-70}
            className="cursor-pointer"
          >
            <span>Back to top</span>
          </ScrollLink>
        </h1>

        <Logo />

      </div>
    </div>
  )
}
