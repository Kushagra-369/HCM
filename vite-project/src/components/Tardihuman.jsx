import React from 'react'
import image3 from '../assets/images/HCM 901.jpg'
import Logo from './logo'


export default function Tardihuman() {
  return (
    <div>
        
         <div className="text-3xl text-yellow-200 px-5 bg-black ">
                <div>
                    <img src={image3} alt="" />
                </div>
                 <h1>NAME - HCM-901 (Human Contentment Monster-901)</h1>
                 <br />
            <h1>ALTERNATE NAME - TARDIHUMAN</h1>
            <br />
            <h1>TYPE - BBF (Biotic-Biotic Fusion)</h1>
            <br/>
            <h1>SUB-TYPE - Human-MICROBE</h1>
            <br/>
            <h1>HP - 1200 HEARTS</h1>
            <br />
            <div >
                <h1>ATTACKS :</h1>
                <br/>
                <h1>1) iron tentacle attack</h1>
                <h1>2) poison tongue lick</h1>
                <h1>3) can change size </h1>
            </div>
            <br/>
            <div>
                <h1>WEAKNESSES :</h1>
                <br/>
                <h1>1) high temperature</h1>
                <h1>2) chlorine</h1>
                <h1>3) it's poison is in his tentacles</h1>
            </div>
            </div>
            <div>
                            <Logo/>
            
                            </div>
    </div>
  )
}
