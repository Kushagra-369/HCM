import React from 'react'
import Logo from './logo'

export default function Classification() {

    let data3 = [
        { title1: "Biotic-Biotic" },
        { title1: "Biotic-Abiotic" },
        { title1: "Abitic-Biotic" },
        { title1: "Abiotic-Abiotic" },
    
      ];

  return (
    <div>
       { 
        <h1 className=' text-6xl text-center'>4 MAJOR TYPPES OF HCM</h1>
        }
       <div className=' flex justify-around'>
       { data3.map((item,key)=>(
          <ul >
            <br />
          <li>{item.title1}</li>
      </ul>
       ))
      
        }
       </div>
       <div>
                       <Logo/>
       
                       </div>
    </div>
  )
}
