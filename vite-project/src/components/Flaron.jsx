import React from 'react'
import image13 from '../assets/images/hcm 660.jpg'
import Logo from './Logo'


export default function Toxizon() {
  return (
    <div className="text-3xl text-yellow-200 px-5 bg-black ">


      <div>
        <img src={image13} alt="" />
      </div>
      <h1>NAME - HCM-660 (Human Contentment Monster-660)</h1>
      <br />
      <h1>ALTERNATE NAME - Flaron</h1>
      <br />
      <h1>E-TYPE - LNF (Living-Non-iving Fusion)</h1>
      <br />
      <h1>N-TYPE - AAF (Abiotic-Abiotic fusion)</h1>
      <br />
      <h1>S-TYPE - Tree-Fire</h1>
      <br />
      <h1>HP - 900 HEARTS</h1>
      <br />
      <div >
        <h1>ATTACKS :</h1>
        <br />
        <h1>1) hide underground and attack suddenly</h1>
        <h1>2) poison gas</h1>
        <h1>3) fire ball</h1>
      </div>
      <br />
      <div>
        <h1>WEAKNESSES :</h1>
        <br />
        <h1>1) a small tail remains outside while underground</h1>
        <h1>2) sand</h1>
        <h1>3) can not move</h1>
      </div>

      <div>
        <Logo />

      </div>
    </div>
  )
}
