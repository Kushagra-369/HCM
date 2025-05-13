import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Logo from './Logo'
import { FaBars } from "react-icons/fa6";
import { GiSplitCross } from "react-icons/gi";

export default function Navbar() {

  let data2 = [
    { href: "/", title1: "HOME" },
    { href: "/classification", title1: "CLASSIFICATION" },
    { href: "/comparision", title1: "COMPARISION" },
    { href: "/about", title1: "MORE" },

  ];

  const[text,settext]= useState(false)

  const cross=()=>{
    settext(!text)
  }


  return (

    <div style={{ backgroundImage: 'url(https://t3.ftcdn.net/jpg/01/22/03/84/360_F_122038456_AEdKNITqNDwdPTVdPDy1Fk5YaD9Um1xm.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className='flex justify-between px-5 gap-25 text-white items-center py-10'>
        <div>
          {
            <div className='text-5xl md:text-6xl items-center text-center  '>
              EMPTY SPACES
            </div>
          }
        </div>

        <ul className=' hidden md:flex justify-center gap-15' >
          {
            data2.map((item, key) => (
              <div  className=' hover:bg-yellow-300 hover:text-black'> 

                <Link to={item.href}><li key={key}>{item.title1}</li></Link>

              </div>

            ))
          }
        </ul>

          
          <div onClick={cross} className=' md:hidden block'>
            {text ? <GiSplitCross/> : <FaBars/>}
          </div>
            {
                text && (
                    <ul className=' bg-gray-500 text-2xl text-yellow-300 absolute top-20   right-10'>
                        {data2.map((item,key)=>(
                            <li><a href={item.href}>{item.title1}</a></li>
                        ))}
                    </ul>
                )
            }

      </div>


    </div>

  )
}
