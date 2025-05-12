import React from 'react'
import image6 from '../assets/images/hcm 701.jpg'
import Logo from './Logo'


export default function Werewolf() {
  return (
    
    <div className="text-3xl text-yellow-200 px-5 bg-black ">
        <div>
            <img src={image6} alt="" />
        </div>
         <h1>NAME - HCM-701 (Human Contentment Monster-701)</h1>
         <br />
    <h1>ALTERNATE NAME - WEREWOLF</h1>
    <br />
    <h1>E-TYPE - LLF (Living-Living Fusion)</h1>
    <br/>
    <h1>N-TYPE - BBF (Biotic-Biotic fusion)</h1>
    <br/>
    <h1>S-TYPE - Human-Animal</h1>
    <br/>
    <h1>HP - 600 HEARTS</h1>
    <br />
     <div >
        <h1>ATTACKS :</h1>
        <br/>
        <h1>1) big beast transformation</h1>
        <h1>2) shadow attack(attack with speed , not letting know it's prey)</h1>
        <h1>3) can change anyone into a wolf with a bite </h1>
    </div>
    <br/>
    <div>
        <h1>WEAKNESSES :</h1>
        <br/>
        <h1>1) silver</h1>
        <h1>2) mercury</h1>
        <h1>3) weakest on no-moon night</h1>
    </div>

    <div>
                    <Logo/>
    
                    </div>
    </div>
  )
}
