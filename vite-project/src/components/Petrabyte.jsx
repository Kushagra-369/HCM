import React from 'react'
import image10 from '../assets/images/hcm 211.jpg'
import Logo from './Logo'


export default function Petrabyte() {
  return (

    <div className="text-3xl text-yellow-200 px-5 bg-black ">
      <div>
        <img src={image10} alt="" />
      </div>
      <h1>NAME - HCM-211 (Human Contentment Monster-211)</h1>
      <br />
      <h1>ALTERNATE NAME - PETRABYTE</h1>
      <br />
      <h1>E-TYPE - LNF (Living-Non-living Fusion)</h1>
      <br />
      <h1>N-TYPE - ATF (Abiotic-Technology)</h1>
      <br />
      <h1>S-TYPE - Plant-AI</h1>
      <br />
      <h1>HP - 1300 HEARTS</h1>
      <br />
      <div >
        <h1>ATTACKS :</h1>
        <br />
        <h1>1) wine whip</h1>
        <h1>2) immune to water and fire and also can fly</h1>
        <h1>3) lazer beam </h1>
      </div>
      <br />
      <div>
        <h1>WEAKNESSES :</h1>
        <br />
        <h1>1) despite very difficult but possible to hack and control</h1>
        <h1>2) has a switch off button </h1>
        <h1>3) can't see in night </h1>
      </div>

      <div>
        <Logo />

      </div>
    </div>
  )
}
