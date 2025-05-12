import React from 'react'
import image11 from '../assets/images/hcm 080.jpg'
import Logo from './Logo'

export default function Gorkon() {
  return (
    <div className="text-3xl text-yellow-200 px-5 bg-black ">


      <div>
        <img src={image11} alt="" />
      </div>
      <h1>NAME - HCM-080 (Human Contentment Monster-080)</h1>
      <br />
      <h1>ALTERNATE NAME - GORKON</h1>
      <br />
      <h1>E-TYPE - LLF (Living-Living Fusion)</h1>
      <br />
      <h1>N-TYPE - BBF (Biotic-Biotic fusion)</h1>
      <br />
      <h1>S-TYPE - Human-Animal</h1>
      <br/>
      <h1>HP - 700 HEARTS</h1>
      <br />
      <div >
        <h1>ATTACKS :</h1>
        <br />
        <h1>1) gorilla smash</h1>
        <h1>2) super clap </h1>
        <h1>3) shock wave on ground </h1>
      </div>
      <br />
      <div>
        <h1>WEAKNESSES :</h1>
        <br />
        <h1>1) weak on full moon</h1>
        <h1>2) fire </h1>
        <h1>3) lead </h1>
      </div>


      <div>
        <Logo />

      </div>
    </div>
  )
}
