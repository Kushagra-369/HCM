import React from 'react'
import image19 from '../assets/images/hcm 190.jpg'
import Logo from './Logo'


export default function Oculus() {
  return (
    <div className="text-3xl text-amber-900 px-5 bg-black">
        <div>
          <img src={image19} alt="" />
        </div>
  <br/>
<br/>
<div >
    <h1>NAME - HCM-190 (Human Contentment Monster-190)</h1>
    <br/>
    <h1>ALTERNATE NAME - OCULUS</h1>
    <br/>
    <h1>E-TYPE - NNF (Non-living-Non-living Fusion)</h1>
    <br/>
    <h1>N-TYPE - ATF (Biotic-Technology fusion)</h1>
    <br/>
    <h1>S-TYPE - Water-AI</h1>
    <br/>
    <h1>HP - 2000 HEARTS</h1>
    <br/>
    <div >
        <h1>ATTACKS :</h1>
        <br/>
        <h1>1) electric shock </h1>
        <h1>2) super wave </h1>
        <h1>3) can not break/cut</h1>
    </div>
    <br/>
    <div>
        <h1>WEAKNESSES :</h1>
        <br/>
        <h1>1) extreme heat,equivalent to sun </h1>
        <h1>2) can come to land till a fixed point</h1>
        <h1>3) no brain only anger </h1>
    </div>
</div>
        <div>
                        <Logo/>
        
                        </div>
    </div>
  )
}
