import React from 'react'
import { Link } from "react-router-dom"
import Logo from './Logo'


export default function Navbar() {

  let data2 = [
    { href: "/", title1: "HOME" },
    { href: "/classification", title1: "CLASSIFICATION" },
    { href: "/comparision", title1: "COMPARISION" },
    { href: "/about", title1: "MORE" },

  ];
  return (

    <div  style={{ backgroundImage: 'url(https://t3.ftcdn.net/jpg/01/22/03/84/360_F_122038456_AEdKNITqNDwdPTVdPDy1Fk5YaD9Um1xm.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className='flex justify-center gap-20 text-white px-2 items-center py-10'>
        {
          <div className='text-4xl md:text-6xl items-center text-center px-27 md:px-2 '>
            EMPTY SPACES
          </div>
        }
        {
          data2.map((item, key) => (
            <div className='hidden md:flex justify-between '>
              <nav className=' items-center'>

                <div className=' items-center flex justify-center '>
                  <ul  >
                    <Link to={item.href}><li key={key} className='hover:border-b-4 hover:border-blue-500 '>{item.title1}</li></Link>
                  </ul>
                </div>
              </nav>
            </div>
          ))
        }
      </div>


    </div>

  )
}
