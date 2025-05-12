import React from 'react'
import image14 from '../assets/images/hcm 180.jpg'
import Logo from './Logo'


export default function Tardion() {
  return (
    
    <div className="text-3xl text-yellow-200 px-5 bg-black ">
        <div>
            <img src={image14} alt="" />
        </div>
         <h1>NAME - HCM-180 (Human Contentment Monster-180)</h1>
         <br />
    <h1>ALTERNATE NAME - TARDION</h1>
    <br />
    <h1>E-TYPE - LLF (Living-Living Fusion)</h1>
    <br/>
    <h1>N-TYPE - BBF (Biotic-Biotic fusion)</h1>
    <br/>
    <h1>S-TYPE - Microbe-Animal</h1>
    <br/>
    <h1>HP - 500 HEARTS</h1>
    <br />
    <div >
        <h1>ATTACKS :</h1>
        <br/>
        <h1>1) hug crush </h1>
        <h1>2) spine shots</h1>
        <h1>3) regenerate health</h1>
    </div>
    <br/>
    <div>
        <h1>WEAKNESSES :</h1>
        <br/>
        <h1>1) extreme temperature</h1>
        <h1>2) toxix chemicals </h1>
        <h1>3) high frequency sound waves </h1>
    </div>

    <div>
                    <Logo/>
    
                    </div>
    </div>
  )
}

