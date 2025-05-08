import React from 'react'
import image2 from '../assets/images/HCM 570.jpg'
import Logo from './logo'


export default function Rockman() {
  return (
    <div className="text-3xl text-amber-900 px-5 bg-black">
        <div>
          <img src={image2} alt="" />
        </div>
  <br/>
<br/>
<div >
    <h1>NAME - HCM-570 (Human Contentment Monster-570)</h1>
    <br/>
    <h1>ALTERNATE NAME - ROCKMAN</h1>
    <br/>
    <h1>TYPE - BAF (Biotic-Abiotic Fusion)</h1>
    <br/>
    <h1>SUB-TYPE - human-Stone </h1>
    <br/>
    <h1>HP - 500 HEARTS</h1>
    <br/>
    <div >
        <h1>ATTACKS :</h1>
        <br/>
        <h1>1) regenrate after breaking </h1>
        <h1>2) shape moulding</h1>
        <h1>3) super bite</h1>
    </div>
    <br/>
    <div>
        <h1>WEAKNESSES :</h1>
        <br/>
        <h1>1) water </h1>
        <h1>2) very slow </h1>
        <h1>3) thunder </h1>
    </div>
</div>
        <div>
                        <Logo/>
        
                        </div>
    </div>
  )
}
