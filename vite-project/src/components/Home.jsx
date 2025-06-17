import React from 'react'
import image1 from '../assets/images/hcm 090.jpg'
import image2 from '../assets/images/HCM 570.jpg'
import image3 from '../assets/images/HCM 901.jpg'
import image4 from '../assets/images/HCM 270.jpg'
import image5 from '../assets/images/hcm 871.jpg'
import image6 from '../assets/images/hcm 701.jpg'
import image7 from '../assets/images/HCM - 170.jpg'
import image8 from '../assets/images/hcm 522.jpg'
import image9 from '../assets/images/hcm 521.jpg'
import image10 from '../assets/images/hcm 211.jpg'
import image11 from '../assets/images/hcm 080.jpg'
import image12 from '../assets/images/hcm 008.jpg'
import image13 from '../assets/images/hcm 660.jpg'
import image14 from '../assets/images/hcm 180.jpg'
import image15 from '../assets/images/hcm 561.jpg'
import image16 from '../assets/images/hcm 280.jpg'
import image17 from '../assets/images/hcm 421.jpg'
import image18 from '../assets/images/hcm 111.jpg'
import image19 from '../assets/images/hcm 190.jpg'
import image20 from '../assets/images/hcm 371.jpg'
import { TypeAnimation } from 'react-type-animation';
import { Element } from 'react-scroll';
import MovingComponent from 'react-moving-text';

import Footer from './Footer'

import { href, Link } from 'react-router-dom'




export default function Home() {

    let data = [
        { title1: "SPHINIX", title2: "HCM 090", title3: image1, href: '/sphinx' },
        { title1: "ROCKMAN", title2: "HCM 570", title3: image2, href: '/rockman' },
    ];

    let data2 = [
        { title1: "HUMOTARDILIXIAN", title2: "HCM 871", title3: image5, href: '/humotardilixian' }

    ];
    let data3 = [
        { title1: "TARDIHUMAN", title2: "HCM 901", title3: image3, href: '/tardihuman' },
        { title1: "CYBRAIN", title2: "HCM 270", title3: image4, href: '/cybrain' }
    ];
    let data4 = [
        { title1: "WEREWOLF", title2: "HCM 701", title3: image6, href: '/werewolf' },
        { title1: "TERRAKA", title2: "HCM 170", title3: image7, href: '/terraka' },
    ];

    let data5 = [
        { title1: "TERRAWOLFVULBYTE", title2: "HCM 522", title3: image8, href: '/terrawolfvulbyte' }

    ];
    let data6 = [
        { title1: "VULTRIX", title2: "HCM 521", title3: image9, href: '/vultrix' },
        { title1: "PETRABYTE", title2: "HCM 211", title3: image10, href: '/petrabyte' }
    ];

    let data7 = [
        { title1: "GORKON", title2: "HCM 080", title3: image11, href: '/gorkon' },
        { title1: "SANDRAX", title2: "HCM 008", title3: image12, href: '/sandrax' },
    ];
    let data8 = [
        { title1: "GORDRAXDIOZONE", title2: "HCM 561", title3: image15, href: '/gordraxdiozone' }

    ];
    let data9 = [
        { title1: "TARDION", title2: "HCM 180", title3: image14, href: '/tardion' },
        { title1: "FLARON", title2: "HCM 660", title3: image13, href: '/flaron' }
    ];
    let data10 = [
        { title1: "TIGRIS", title2: "HCM 280", title3: image16, href: '/tigris' },
        { title1: "OCULUS", title2: "HCM 190", title3: image19, href: '/oculus' },
    ];
    let data11 = [
        { title1: "FLURTOTILUS", title2: "HCM 371", title3: image20, href: '/flurtotilus' }

    ];
    let data12 = [
        { title1: "FLURTONE", title2: "HCM 111", title3: image18, href: '/flurtone' },
        { title1: "PETROVIS", title2: "HCM 421", title3: image17, href: '/petrovis' }
    ];

    return (
        <div style={{ backgroundImage: 'url(https://t3.ftcdn.net/jpg/01/22/03/84/360_F_122038456_AEdKNITqNDwdPTVdPDy1Fk5YaD9Um1xm.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
            <div class="text-center justify-center text-2xl md:text-7xl text-yellow-200 py-10 underline">
                <TypeAnimation
                    sequence={[
                        1000,
                        'HCM ',
                        1000,
                        'Human Contentment Monsters',
                        1000
                    ]}
                    wrapper="span"
                    speed={100}
                    style={{ display: 'inline-block' }}
                    repeat={Infinity}
                />
            </div>
            <br />
            <br />
            <div className=' text-center border-2 font-black text-2xl text-yellow-400 border-red-800  rounded-bl-2xl rounded-br-2xl ' style={{ boxShadow: '4px 4px 50px rgb(239, 252, 8)' }}>
                <MovingComponent
                    type="fadeInFromLeft"
                    duration="6000ms"
                    delay="0s"
                    direction="normal"
                    timing="linear"
                    iteration="infinite"
                    fillMode="none">
                    <MovingComponent
                        type="swing"
                        duration="6000ms"
                        delay="0s"
                        direction="normal"
                        timing="linear"
                        iteration="infinite"
                        fillMode="none">
                        PHASE-1
                    </MovingComponent>
                </MovingComponent>
            </div>
            <br />
            <br />
            <Element name="phase1">

                <div className='  grid grid-cols-2 '  >
                    {
                        data.map((item, key) => (
                            <div className=' flex justify-center  py-5' key={key}>
                                <MovingComponent
                                    type="swing"
                                    duration="6000ms"
                                    delay="0s"
                                    direction="normal"
                                    timing="linear"
                                    iteration="infinite"
                                    fillMode="none">
                                    <div className=' flex justify-around hover:scale-105 transition-all duration-300 border-red-700 border-4 bg-black rounded-2xl ' style={{ boxShadow: '4px 4px 50px rgba(62, 242, 7, 0.943)' }}>

                                        <Link to={item.href}>
                                            <h1 className="text-center text-2xl text-cyan-300">{item.title1}</h1>
                                            <br />
                                            <img className="h-50 w-50  " src={item.title3} alt=""></img>
                                            <br />
                                            <h1 className="text-center text-2xl text-yellow-200">{item.title2}</h1>
                                        </Link>
                                    </div>
                                </MovingComponent>


                            </div>
                        ))
                    }

                </div>
                <div>
                    {
                        data2.map((item, key) => (
                            <div className=' flex justify-center  py-5' key={key}>
                                <MovingComponent
                                    type="swing"
                                    duration="6000ms"
                                    delay="0s"
                                    direction="normal"
                                    timing="linear"
                                    iteration="infinite"
                                    fillMode="none">
                                    <div className=' flex justify-around border-4 hover:scale-120 transition-all duration-300 bg-black rounded-2xl ' style={{ boxShadow: '0px 0px 500px rgba(85, 7, 242, 0.988)' }} >
                                        <Link to={item.href} >
                                            <h1 className="text-center text-2xl text-cyan-300">{item.title1}</h1>
                                            <br />
                                            <img className="h-60 w-60  " src={item.title3} alt=""></img>
                                            <br />
                                            <h1 className="text-center text-2xl text-yellow-200">{item.title2}</h1>
                                        </Link>
                                    </div>
                                </MovingComponent>

                            </div>
                        ))
                    }
                </div>
                <div className='  grid grid-cols-2 ' >
                    {
                        data3.map((item, key) => (
                            <div className=' flex justify-center  py-5 ' key={key}>
                                <MovingComponent
                                    type="swing"
                                    duration="6000ms"
                                    delay="0s"
                                    direction="normal"
                                    timing="linear"
                                    iteration="infinite"
                                    fillMode="none">
                                    <div className=' flex justify-around hover:scale-105 transition-all duration-300 border-red-700 border-4 bg-black rounded-2xl ' style={{ boxShadow: '4px 4px 50px rgba(62, 242, 7, 0.943)' }}>
                                        <Link to={item.href} >
                                            <h1 className="text-center text-2xl text-cyan-300">{item.title1}</h1>
                                            <br />
                                            <img className="h-50 w-50  " src={item.title3} alt=""></img>
                                            <br />
                                            <h1 className="text-center text-2xl text-yellow-200">{item.title2}</h1>
                                        </Link>
                                    </div>
                                </MovingComponent>

                            </div>
                        ))
                    }
                </div>
            </Element>
            <br />
            <br />
            <div className=' text-center border-2 font-black text-2xl text-yellow-400 border-red-800  rounded-bl-2xl rounded-br-2xl ' style={{ boxShadow: '4px 4px 50px rgb(239, 252, 8)' }}>
                <MovingComponent
                    type="fadeInFromLeft"
                    duration="6000ms"
                    delay="0s"
                    direction="normal"
                    timing="linear"
                    iteration="infinite"
                    fillMode="none">
                    <MovingComponent
                        type="swing"
                        duration="6000ms"
                        delay="0s"
                        direction="normal"
                        timing="linear"
                        iteration="infinite"
                        fillMode="none">
                        PHASE-2
                    </MovingComponent>
                </MovingComponent>            </div>
            <br />
            <br />

            <Element name='phase2'>
                <div className='  grid grid-cols-2 '  >
                    {
                        data4.map((item, key) => (
                            <div className=' flex justify-center  py-5' key={key}>
                                <MovingComponent
                                    type="swing"
                                    duration="6000ms"
                                    delay="0s"
                                    direction="normal"
                                    timing="linear"
                                    iteration="infinite"
                                    fillMode="none">
                                    <div className=' flex justify-around hover:scale-105 transition-all duration-300 border-red-700 border-4 bg-black rounded-2xl ' style={{ boxShadow: '4px 4px 50px rgba(62, 242, 7, 0.943)' }}>
                                        <Link to={item.href}>
                                            <h1 className="text-center text-2xl text-cyan-300">{item.title1}</h1>
                                            <br />
                                            <img className="h-50 w-50  " src={item.title3} alt=""></img>
                                            <br />
                                            <h1 className="text-center text-2xl text-yellow-200">{item.title2}</h1>
                                        </Link>
                                    </div>
                                </MovingComponent>

                            </div>
                        ))
                    }

                </div>
                <div>
                    {
                        data5.map((item, key) => (
                            <div className=' flex justify-center  py-5' key={key}>
                                <MovingComponent
                                    type="swing"
                                    duration="6000ms"
                                    delay="0s"
                                    direction="normal"
                                    timing="linear"
                                    iteration="infinite"
                                    fillMode="none">
                                    <div className=' flex justify-around border-4 hover:scale-120 transition-all duration-300 bg-black rounded-2xl ' style={{ boxShadow: '0px 0px 500px rgba(85, 7, 242, 0.988)' }} >
                                        <Link to={item.href} >
                                            <h1 className="text-center text-2xl text-cyan-300">{item.title1}</h1>
                                            <br />
                                            <img className="h-60 w-60  " src={item.title3} alt=""></img>
                                            <br />
                                            <h1 className="text-center text-2xl text-yellow-200">{item.title2}</h1>
                                        </Link>
                                    </div>
                                </MovingComponent>

                            </div>
                        ))
                    }
                </div>
                <div className='  grid grid-cols-2 ' >
                    {
                        data6.map((item, key) => (
                            <div className=' flex justify-center  py-5 ' key={key}>
                                <MovingComponent
                                    type="swing"
                                    duration="6000ms"
                                    delay="0s"
                                    direction="normal"
                                    timing="linear"
                                    iteration="infinite"
                                    fillMode="none">
                                    <div className=' flex justify-around hover:scale-105 transition-all duration-300 border-red-700 border-4 bg-black rounded-2xl ' style={{ boxShadow: '4px 4px 50px rgba(62, 242, 7, 0.943)' }}>
                                        <Link to={item.href} >
                                            <h1 className="text-center text-2xl text-cyan-300">{item.title1}</h1>
                                            <br />
                                            <img className="h-50 w-50  " src={item.title3} alt=""></img>
                                            <br />
                                            <h1 className="text-center text-2xl text-yellow-200">{item.title2}</h1>
                                        </Link>
                                    </div>
                                </MovingComponent>

                            </div>
                        ))
                    }
                </div>

            </Element>
            <br />
            <br />
            <div className=' text-center border-2 font-black text-2xl text-yellow-400 border-red-800  rounded-bl-2xl rounded-br-2xl ' style={{ boxShadow: '4px 4px 50px rgb(239, 252, 8)' }}>
                <MovingComponent
                    type="fadeInFromLeft"
                    duration="6000ms"
                    delay="0s"
                    direction="normal"
                    timing="linear"
                    iteration="infinite"
                    fillMode="none">
                    <MovingComponent
                        type="swing"
                        duration="6000ms"
                        delay="0s"
                        direction="normal"
                        timing="linear"
                        iteration="infinite"
                        fillMode="none">
                        PHASE-3
                    </MovingComponent>
                </MovingComponent>
            </div>
            <br />
            <br />

            <Element name='phase3'>
                <div className='  grid grid-cols-2 '  >
                    {
                        data7.map((item, key) => (
                            <div className=' flex justify-center  py-5' key={key}>
                                <MovingComponent
                                    type="swing"
                                    duration="6000ms"
                                    delay="0s"
                                    direction="normal"
                                    timing="linear"
                                    iteration="infinite"
                                    fillMode="none">
                                    <div className=' flex justify-around hover:scale-105 transition-all duration-300 border-red-700 border-4 bg-black rounded-2xl ' style={{ boxShadow: '4px 4px 50px rgba(62, 242, 7, 0.943)' }}>
                                        <Link to={item.href}>
                                            <h1 className="text-center text-2xl text-cyan-300">{item.title1}</h1>
                                            <br />
                                            <img className="h-50 w-50  " src={item.title3} alt=""></img>
                                            <br />
                                            <h1 className="text-center text-2xl text-yellow-200">{item.title2}</h1>
                                        </Link>
                                    </div>
                                </MovingComponent>

                            </div>
                        ))
                    }

                </div>
                <div>
                    {
                        data8.map((item, key) => (
                            <div className=' flex justify-center  py-5' key={key}>
                                <MovingComponent
                                    type="swing"
                                    duration="6000ms"
                                    delay="0s"
                                    direction="normal"
                                    timing="linear"
                                    iteration="infinite"
                                    fillMode="none">
                                    <div className=' flex justify-around border-4 hover:scale-120 transition-all duration-300 bg-black rounded-2xl ' style={{ boxShadow: '0px 0px 500px rgba(85, 7, 242, 0.988)' }} >
                                        <Link to={item.href} >
                                            <h1 className="text-center text-2xl text-cyan-300">{item.title1}</h1>
                                            <br />
                                            <img className="h-60 w-60  " src={item.title3} alt=""></img>
                                            <br />
                                            <h1 className="text-center text-2xl text-yellow-200">{item.title2}</h1>
                                        </Link>
                                    </div>
                                </MovingComponent>

                            </div>
                        ))
                    }
                </div>
                <div className='  grid grid-cols-2 ' >
                    {
                        data9.map((item, key) => (
                            <div className=' flex justify-center  py-5 ' key={key}>
                                <MovingComponent
                                    type="swing"
                                    duration="6000ms"
                                    delay="0s"
                                    direction="normal"
                                    timing="linear"
                                    iteration="infinite"
                                    fillMode="none">
                                    <div className=' flex justify-around hover:scale-105 transition-all duration-300 border-red-700 border-4 bg-black rounded-2xl ' style={{ boxShadow: '4px 4px 50px rgba(62, 242, 7, 0.943)' }}>
                                        <Link to={item.href} >
                                            <h1 className="text-center text-2xl text-cyan-300">{item.title1}</h1>
                                            <br />
                                            <img className="h-50 w-50  " src={item.title3} alt=""></img>
                                            <br />
                                            <h1 className="text-center text-2xl text-yellow-200">{item.title2}</h1>
                                        </Link>
                                    </div>
                                </MovingComponent>

                            </div>
                        ))
                    }
                </div>
            </Element>
            <br />
            <br />
            <div className=' text-center border-2 font-black text-2xl text-yellow-400 border-red-800  rounded-bl-2xl rounded-br-2xl ' style={{ boxShadow: '4px 4px 50px rgb(239, 252, 8)' }}>
                <MovingComponent
                    type="fadeInFromLeft"
                    duration="6000ms"
                    delay="0s"
                    direction="normal"
                    timing="linear"
                    iteration="infinite"
                    fillMode="none">
                    <MovingComponent
                        type="swing"
                        duration="6000ms"
                        delay="0s"
                        direction="normal"
                        timing="linear"
                        iteration="infinite"
                        fillMode="none">
                        PHASE-4
                    </MovingComponent>
                </MovingComponent>            </div>
            <br />
            <br />
            <Element name='phase4'>
                <div className='  grid grid-cols-2 '  >
                    {
                        data10.map((item, key) => (
                            <div className=' flex justify-center  py-5' key={key}>
                                <MovingComponent
                                    type="swing"
                                    duration="6000ms"
                                    delay="0s"
                                    direction="normal"
                                    timing="linear"
                                    iteration="infinite"
                                    fillMode="none">
                                    <div className=' flex justify-around hover:scale-105 transition-all duration-300 border-red-700 border-4 bg-black rounded-2xl ' style={{ boxShadow: '4px 4px 50px rgba(62, 242, 7, 0.943)' }}>
                                        <Link to={item.href}>
                                            <h1 className="text-center text-2xl text-cyan-300">{item.title1}</h1>
                                            <br />
                                            <img className="h-50 w-50  " src={item.title3} alt=""></img>
                                            <br />
                                            <h1 className="text-center text-2xl text-yellow-200">{item.title2}</h1>
                                        </Link>
                                    </div>
                                </MovingComponent>

                            </div>
                        ))
                    }

                </div>
                <div>
                    {
                        data11.map((item, key) => (
                            <div className=' flex justify-center  py-5' key={key}>
                                <MovingComponent
                                    type="swing"
                                    duration="6000ms"
                                    delay="0s"
                                    direction="normal"
                                    timing="linear"
                                    iteration="infinite"
                                    fillMode="none">
                                    <div className=' flex justify-around border-4 hover:scale-120 transition-all duration-300 bg-black rounded-2xl ' style={{ boxShadow: '0px 0px 500px rgba(85, 7, 242, 0.988)' }} >
                                        <Link to={item.href} >
                                            <h1 className="text-center text-2xl text-cyan-300">{item.title1}</h1>
                                            <br />
                                            <img className="h-60 w-60  " src={item.title3} alt=""></img>
                                            <br />
                                            <h1 className="text-center text-2xl text-yellow-200">{item.title2}</h1>
                                        </Link>
                                    </div>
                                </MovingComponent>

                            </div>
                        ))
                    }
                </div>
                <div className='  grid grid-cols-2 ' >
                    {
                        data12.map((item, key) => (
                            <div className=' flex justify-center  py-5 ' key={key}>
                                <MovingComponent
                                    type="swing"
                                    duration="6000ms"
                                    delay="0s"
                                    direction="normal"
                                    timing="linear"
                                    iteration="infinite"
                                    fillMode="none">
                                    <div className=' flex justify-around hover:scale-105 transition-all duration-300 border-red-700 border-4 bg-black rounded-2xl ' style={{ boxShadow: '4px 4px 50px rgba(62, 242, 7, 0.943)' }}>
                                        <Link to={item.href} >
                                            <h1 className="text-center text-2xl text-cyan-300">{item.title1}</h1>
                                            <br />
                                            <img className="h-50 w-50  " src={item.title3} alt=""></img>
                                            <br />
                                            <h1 className="text-center text-2xl text-yellow-200">{item.title2}</h1>
                                        </Link>
                                    </div>
                                </MovingComponent>

                            </div>
                        ))
                    }
                </div>
            </Element>
            <div>

                <Footer />
            </div>


        </div>
    )
}
