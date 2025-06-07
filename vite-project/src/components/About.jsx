import React from 'react'
import Logo from './Logo'
import Empty_Spaces from './Empty_Spaces'
import Origin from './Origin'
import About_HCM from './About_HCM'
import { Link, Element } from 'react-scroll';

export default function About() {
  return (
    <div className='bg-black text-2xl text-white text-center'>
      <Element name="about_empty_spaces">

        <Empty_Spaces />
        
      </Element>
      <br />
      <Element name="about_hcm">
        <About_HCM /></Element>
      <br />
      <Element name="origin">
      <Origin /></Element>
      <br />
      <div>


        <Logo />

      </div>
    </div>
  )
}
