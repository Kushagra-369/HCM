import React from 'react'
import image13 from '../assets/images/hcm 221.jpg'
import Logo from './Logo'


export default function Toxizon() {
  return (
    <div className="text-3xl text-yellow-200 px-5 bg-black ">


      <div>
        <img src={image13} alt="" />
      </div>
      <h1>NAME - HCM-221 (Human Contentment Monster-221)</h1>
      <br />
      <h1>ALTERNATE NAME - TOXIZON</h1>
      <br />
      <h1>E-TYPE - LLF (Living-Living Fusion)</h1>
      <br />
      <h1>N-TYPE - BAF (Biotic-Abiotic fusion)</h1>
      <br />
      <h1>S-TYPE - Tree-Decomposer</h1>
      <br />
      <h1>HP - 900 HEARTS</h1>
      <br />
      <div >
        <h1>ATTACKS :</h1>
        <br />
        <h1>1) hide underground and attack suddenly</h1>
        <h1>2) poison gas</h1>
        <h1>3)  very fast while underground</h1>
      </div>
      <br />
      <div>
        <h1>WEAKNESSES :</h1>
        <br />
        <h1>1) a small tail remains outside while underground</h1>
        <h1>2) fire</h1>
        <h1>3) very slow if not underground</h1>
      </div>

      <div>
        <Logo />

      </div>
    </div>
  )
}
