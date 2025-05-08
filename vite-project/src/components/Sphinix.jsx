import React from 'react'
import image1 from '../assets/images/hcm 090.jpg'
import Logo from './logo'


export default function Sphinix() {
  return (
    
    <div className="text-3xl text-yellow-200 px-5 bg-black ">
        <div>
            <img src={image1} alt="" />
        </div>
         <h1>NAME - HCM-090 (Human Contentment Monster-090)</h1>
         <br />
    <h1>ALTERNATE NAME - SPHINX</h1>
    <br />
    <h1>TYPE - BBF (Biotic-Biotic Fusion)</h1>
    <br/>
    <h1>SUB-TYPE - Human-Animal</h1>
    <br/>
    <h1>HP - 700 HEARTS</h1>
    <br />
    <div >
        <h1>ATTACKS :</h1>
        <br/>
        <h1>1) Super Punch</h1>
        <h1>2) Super Roar</h1>
        <h1>3) Killing grasp</h1>
    </div>
    <br/>
    <div>
        <h1>WEAKNESSES :</h1>
        <br/>
        <h1>1) gold</h1>
        <h1>2) blindness in dark</h1>
        <h1>3) can't bear hair pulling</h1>
    </div>

    <div>
                    <Logo/>
    
                    </div>
    </div>
  )
}
