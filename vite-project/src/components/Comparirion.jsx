import React from 'react'
import Logo from './Logo'

export default function Comparision() {

  let data =[
    {title1 : "SPHINX" ,title2 : " 800 "},
    {title1 : "ROCKMAN" ,title2 : " 500 "},
    {title1 : "TARDIHUMAN" ,title2 : " 1200 "},
    {title1 : "CYBRAIN" ,title2 : " 1500 "},
    {title1 : "WEREWOLF" ,title2 : " 600 "},
    {title1 : "TERRAKA" ,title2 : " 600 "},
    {title1 : "VULTRIX" ,title2 : " 1000 "},
    {title1 : "PETRABYTE" ,title2 : " 1300 "},
    {title1 : "GORKON" ,title2 : " 700 "},
    {title1 : "SANDRAX" ,title2 : " 700 "},
    {title1 : "TARDION" ,title2 : " 500 "},
    {title1 : "FLARON" ,title2 : " 900 "},
    {title1 : "TIGRIS" ,title2 : " 900 "},
    {title1 : "OCUULUS" ,title2 : " 2000 "},
    {title1 : "FLURTONE" ,title2 : " 1000 "},
    {title1 : "PETROVIS" ,title2 : " 600 "}
  ];
  return (
    <div className='  bg-black'>
        <div className='text-white text-6xl md:text-8xl flex justify-center '>
        Comparision
        </div>
        <br />
        <div className=' text-2xl py-10 text-center grid grid-cols-2 md:grid md:grid-cols-4 text-cyan-300 '>
            {
              data.map((item,key) =>(
                <h1 className=' py-5'><a href="">{item.title1}</a>   <h1 className=' text-red-500'>{item.title2}hearts</h1></h1>
              ))
            }
        </div>
      <div>
                      <Logo/>
      
                      </div>
    </div>
  )
}
