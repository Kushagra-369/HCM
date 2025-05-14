import React from 'react'
import image20 from '../assets/images/hcm 371.jpg'
import Logo from './Logo'


export default function Flurtotilus() {
  return (
    <div  className="text-3xl text-yellow-200 px-5 bg-black "style={{backgroundImage:'url(https://img.freepik.com/free-vector/bloody-handprint-background_23-2150756482.jpg)', backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}} >
        
                <div>
                    <img src={image20} alt="" />
                </div>
                <h1>NAME - HCM-371 (Human Contentment Monster-371)</h1>
    <br/>
    <h1>ALTERNATE NAME - FLURTOTILUS</h1>
    <br/>
    <h1>E-TYPE - LNLNF (Living-Non-living-Living-Non-living Fusion)</h1>
    <br/>
    <h1>N-TYPE - BABAF (Biotic-Abiotic-Biotic-Abiotic fusion)</h1>
    <br/>
    <h1>S-TYPE - Animal-Fire-Bird-Water </h1>
    <br/>
    <h1>HP - 5500 HEARTS</h1>
    <br/>
    <div >
        <h1>ATTACKS :</h1>
        <br/>
        <h1>1) fire gas</h1>
        <h1>2) water punch</h1>
        <h1>3) super roar</h1>
        <h1>4) can fly </h1>
        <h1>5) ver hard rock attacks </h1>
    </div>
    <br/>
    <div>
        <h1>WEAKNESSES :</h1>
        <br/>
        <h1> can not bear very high pressure </h1>
        
    </div>
            
            <div>
                            <Logo/>
            
                            </div>
    </div>
  )
}
