import React from 'react'
import Logo from './Logo'
import MovingComponent from 'react-moving-text';
import './Greatest.css';
import { Link as ScrollLink, Element } from 'react-scroll';
import { Link } from 'react-router-dom';


export default function Comparision() {

  let data = [
    { title1: "SPHINX", title2: " 800 ", href: '/sphinx' },
    { title1: "ROCKMAN", title2: " 500 ", href: '/rockman' },
    { title1: "TARDIHUMAN", title2: " 1200 ", href: '/tardihuman' },
    { title1: "CYBRAIN", title2: " 1500 ", href: '/cybrain' },
    { title1: "WEREWOLF", title2: " 600 ", href: '/werewolf' },
    { title1: "TERRAKA", title2: " 600 ", href: '/terraka' },
    { title1: "VULTRIX", title2: " 1000 ", href: '/vultrix' },
    { title1: "PETRABYTE", title2: " 1300 ", href: '/petrabyte' },
    { title1: "GORKON", title2: " 700 ", href: '/gorkon' },
    { title1: "SANDRAX", title2: " 700 ", href: '/sandrax' },
    { title1: "TARDION", title2: " 500 ", href: '/tardion' },
    { title1: "FLARON", title2: " 900 ", href: '/flaron' },
    { title1: "TIGRIS", title2: " 900 ", href: '/tigris' },
    { title1: "OCULUS", title2: " 2000 ", href: '/oculus' },
    { title1: "FLURTONE", title2: " 1000 ", href: '/flurtone' },
    { title1: "PETROVIS", title2: " 600 ", href: '/petrovis' }
  ];

  let data2 = [
    { title1: "HUMOTARDILIXIAN", title2: " 5000 ", href: '/humotardilixian' },
    { title1: "TERRAWOLFVULBYTE", title2: " 4500 ", href: '/terrawolfvulbyte' },
    { title1: "GORDRAXDIOZONE", title2: " 4200 ", href: '/gordraxdiozone' },
    { title1: "FLURTOTILUS", title2: " 5500 ", href: '/flurtotilus' },

  ];
  return (
    <div className='  bg-black'>
      <div className='text-white text-6xl md:text-8xl flex justify-center '>
        Comparision
      </div>
      <br />
      <h1 className=' text-yellow-300 text-center text-4xl md:text-6xl'>Simple fusions</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center py-10 text-cyan-300 text-2xl">
        {data.map((item, key) => (
          <div
            key={key}
            className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-yellow-300 border border-cyan-500 rounded-xl p-4 shadow-md hover:shadow-cyan-300"
          >
            <Link to = {item.href}
              className="block text-cyan-200 font-semibold hover:underline"
            >
              {item.title1}
            </Link>
            <div className="text-red-400 text-lg mt-2 font-medium">
              ❤️ {item.title2} hearts
            </div>
          </div>
        ))}
      </div>

      <br />
      <h1 className=' text-6xl text-center md:text-7xl text-lime-400'>Special fusions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 py-10 text-center text-cyan-300 text-3xl">
        {data2.map((item, key) => (
          <div
            key={key}
            className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-cyan-700 rounded-xl shadow-lg p-6 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <Link to={item.href}
              className="block text-cyan-200 font-semibold text-3xl md:text-4xl hover:underline tracking-wide"
            >
              {item.title1}
            </Link>
            <div className="text-green-500 text-xl md:text-2xl mt-3 font-medium tracking-tight animate-pulse">
              ❤️ {item.title2} hearts
            </div>
          </div>
        ))}
      </div>


      <div className=' items-center text-center'>
        <div className='text-6xl md:text-8xl text-orange-400 text-center'>
          <MovingComponent
            type="spin"
            duration="6000ms"
            delay="0s"
            direction="normal"
            timing="ease-in-out"
            iteration="infinite"
            fillMode="both"
          >


            THE GREATEST FUSION
          </MovingComponent>
        </div>

        <MovingComponent
          type="shakeMix"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease-out"
          iteration="infinite"
          fillMode="none">
          <div className='items-center flex justify-center py-40 '>
            <div className='devil-shadow-card  '>
              <a href="">
                <h1 className='text-3xl text-red-200 text-center py-10 font-horror '>SOON TO BE UPLOADED</h1>
              </a>
            </div>
          </div>
        </MovingComponent>



      </div>
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
      <div>
        <Logo />

      </div>
    </div>
  )
}
