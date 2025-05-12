import React from 'react'
import image9 from '../assets/images/hcm 521.jpg'
import Logo from './Logo'


export default function Vultrix() {
  return (

    <div className="text-3xl text-yellow-200 px-5 bg-black ">
      <div>
        <img src={image9} alt="" />
      </div>
      <h1>NAME - HCM-521 (Human Contentment Monster-521)</h1>
      <br />
      <h1>ALTERNATE NAME - VULTRIX</h1>
      <br />
      <h1>E-TYPE - LNF (Living-Non-living Fusion)</h1>
      <br />
      <h1>N-TYPE - BTF (Biotic-Technology Fusion)</h1>
      <br />
      <h1>S-TYPE - Bird-AI</h1>
      <br />
      <h1>HP - 1000 HEARTS</h1>
      <br />
      <div >
        <h1>ATTACKS :</h1>
        <br />
        <h1>1) wind slash</h1>
        <h1>2) flying</h1>
        <h1>3) tornado </h1>
      </div>
      <br />
      <div>
        <h1>WEAKNESSES :</h1>
        <br />
        <h1>1) electricity</h1>
        <h1>2) icey water </h1>
        <h1>3) high pressure </h1>
      </div>

      <div>
        <Logo />

      </div>
    </div>
  )
}

