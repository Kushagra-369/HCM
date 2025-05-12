import React from 'react'
import image4 from '../assets/images/HCM 270.jpg'
import Logo from './Logo'

export default function Cybrain() {
  return (
    <div className="text-3xl text-yellow-200 px-5 bg-black ">


      <div>
        <img src={image4} alt="" />
      </div>
      <h1>NAME - HCM-270 (Human Contentment Monster-270)</h1>
      <br />
      <h1>ALTERNATE NAME - CYBRAIN</h1>
      <br />
      <h1>E-TYPE - NNF (Non-Living-Non-living Fusion)</h1>
      <br />
      <h1>N-TYPE - TTF (Technology-Technology)</h1>
      <br />
      <h1>S-TYPE - Computer-AI</h1>
      <br />
      <h1>HP - 1500 HEARTS</h1>
      <br />
      <div >
        <h1>ATTACKS :</h1>
        <br />
        <h1>1) lazer beam</h1>
        <h1>2) flying</h1>
        <h1>3) can put it's consciousness in any object </h1>
      </div>
      <br />
      <div>
        <h1>WEAKNESSES :</h1>
        <br />
        <h1>1) water</h1>
        <h1>2) despite very difficult but possible to hack and control </h1>
        <h1>3) has a switch off button</h1>
      </div>


      <div>
        <Logo />

      </div>
    </div>
  )
}
