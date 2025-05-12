import React from 'react'
import image5 from '../assets/images/hcm 871.jpg'
import Logo from './Logo'


export default function Humotardilixian() {
  return (
    <div  className="text-3xl text-yellow-200 px-5 bg-black "style={{backgroundImage:'url(https://img.freepik.com/free-vector/bloody-handprint-background_23-2150756482.jpg)', backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}} >
        
                <div>
                    <img src={image5} alt="" />
                </div>
                <h1>NAME - HCM-871 (Human Contentment Monster-871)</h1>
    <br/>
    <h1>ALTERNATE NAME - HUMOTARDILIXIAN</h1>
    <br/>
    <h1>E-TYPE - LLLNF (Living-Living-Living-Non-living Fusion)</h1>
    <br/>
    <h1>N-TYPE - BBBTF (Biotic-Biotic-Biotic-Technology fusion)</h1>
    <br/>
    <h1>S-TYPE - HUMAN-MICROBE-ANIMAL-AI </h1>
    <br/>
    <h1>HP - 5000 HEARTS</h1>
    <br/>
    <div >
        <h1>ATTACKS :</h1>
        <br/>
        <h1>1) super roar</h1>
        <h1>2) regenerate after breaking</h1>
        <h1>3) poison tongue lick </h1>
        <h1>4) lazer beam </h1>
        <h1>5) have metal body and can fly </h1>
    </div>
    <br/>
    <div>
        <h1>WEAKNESSES :</h1>
        <br/>
        <h1> Has energy ball , which is protected inside the metal body</h1>
        
    </div>
            
            <div>
                            <Logo/>
            
                            </div>
    </div>
  )
}
