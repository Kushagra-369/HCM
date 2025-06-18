import React from 'react'
import Logo from './Logo'
import MovingComponent from 'react-moving-text';
import './Greatest.css';


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
      <div className=' text-2xl py-10 text-center grid grid-cols-2 md:grid md:grid-cols-4 text-cyan-300 '>
        {
          data.map((item, key) => (
            <h1 className=' py-5'><a href={item.href}>{item.title1}</a>   <h1 className=' text-red-500'>{item.title2}hearts</h1></h1>
          ))
        }
      </div>
      <br />
      <h1 className=' text-6xl text-center md:text-7xl text-lime-400'>Special fusions</h1>
      <div className=' text-3xl py-10 text-center grid grid-cols-1 md:grid md:grid-cols-2 text-cyan-300 px-5'>
        {
          data2.map((item, key) => (
            <h1 className=' py-5'><a href={item.href}>{item.title1}</a>   <h1 className=' text-red-500'>{item.title2}hearts</h1></h1>
          ))
        }
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
      <div>
        <Logo />

      </div>
    </div>
  )
}
