import React from 'react'
import image16 from '../assets/images/hcm 280.jpg'
import Logo from './Logo'


export default function Tigris() {
  return (
    <div className="text-3xl text-amber-900 px-5 bg-black">
        <div>
          <img src={image16} alt="" />
        </div>
  <br/>
<br/>
<div >
    <h1>NAME - HCM-280 (Human Contentment Monster-280)</h1>
    <br/>
    <h1>ALTERNATE NAME - TIGRIS</h1>
    <br/>
    <h1>E-TYPE - LLF (Living-Living Fusion)</h1>
    <br/>
    <h1>N-TYPE - BAF (Biotic-Abiotic fusion)</h1>
    <br/>
    <h1>S-TYPE - Animal-Tree</h1>
    <br/>
    <h1>HP - 900 HEARTS</h1>
    <br/>
    <div >
        <h1>ATTACKS :</h1>
        <br/>
        <h1>1) winde whip </h1>
        <h1>2) earthquake </h1>
        <h1>3) super smash</h1>
    </div>
    <br/>
    <div>
        <h1>WEAKNESSES :</h1>
        <br/>
        <h1>1) fire </h1>
        <h1>2) low stamina </h1>
        <h1>3) ultra sound </h1>
    </div>
</div>
        <div>
                        <Logo/>
        
                        </div>
    </div>
  )
}
