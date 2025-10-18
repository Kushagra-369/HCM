import React from 'react'
import image1 from '../assets/images/EMPTY SPACES logo.png'

export default function Logo() {
  return (
    <div className=' flex justify-between'>
        <div>

        </div>
        <div  >
            <img className='h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 2xl:h-44 justify-items-stretch ' src={image1} alt="" />
        </div>

    </div>
  )
}
