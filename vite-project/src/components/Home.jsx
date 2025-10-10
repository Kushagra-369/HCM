import React from 'react'

import { TypeAnimation } from 'react-type-animation';
import { Element } from 'react-scroll';
import MovingComponent from 'react-moving-text';
import YourMonsters from './YourMonsters';
import Footer from './Footer'

import { href, Link } from 'react-router-dom'

export default function Home() {

    let data = [
        { title1: "SPHINIX", title2: "HCM 090", title3: 'https://res.cloudinary.com/dynodadq0/image/upload/v1757504724/hcm_090_ph8uom.jpg', href: '/sphinx' },
        { title1: "ROCKMAN", title2: "HCM 570", title3: 'https://res.cloudinary.com/dynodadq0/image/upload/v1757504762/HCM_570_op828i.jpg', href: '/rockman' },
    ];

    let data2 = [
        { title1: "HUMOTARDILIXIAN", title2: "HCM 871", title3: 'https://res.cloudinary.com/dynodadq0/image/upload/v1757503069/hcm_871_vvdccd.jpg', href: '/humotardilixian' }

    ];
    let data3 = [
        { title1: "TARDIHUMAN", title2: "HCM 901", title3: 'https://res.cloudinary.com/dynodadq0/image/upload/v1757505383/HCM_901_ccptqk.jpg', href: '/tardihuman' },
        { title1: "CYBRAIN", title2: "HCM 270", title3: 'https://res.cloudinary.com/dynodadq0/image/upload/v1757505397/HCM_270_xiihmy.jpg', href: '/cybrain' }
    ];
    let data4 = [
        { title1: "WEREWOLF", title2: "HCM 701", title3: 'https://res.cloudinary.com/dynodadq0/image/upload/v1757505413/hcm_701_qtpbgq.jpg', href: '/werewolf' },
        { title1: "TERRAKA", title2: "HCM 170", title3: 'https://res.cloudinary.com/dynodadq0/image/upload/v1757505425/HCM_-_170_px94br.jpg', href: '/terraka' },
    ];

    let data5 = [
        { title1: "TERRAWOLFVULBYTE", title2: "HCM 522", title3: 'https://res.cloudinary.com/dynodadq0/image/upload/v1757503606/hcm_522_i66yvn.jpg', href: '/terrawolfvulbyte' }

    ];
    let data6 = [
        { title1: "VULTRIX", title2: "HCM 521", title3: 'https://res.cloudinary.com/dynodadq0/image/upload/v1757506646/hcm_521_xkxw3u.jpg', href: '/vultrix' },
        { title1: "PETRABYTE", title2: "HCM 211", title3: 'https://res.cloudinary.com/dynodadq0/image/upload/v1757506670/hcm_211_rinzgv.jpg', href: '/petrabyte' }
    ];

    let data7 = [
        { title1: "GORKON", title2: "HCM 080", title3: 'https://res.cloudinary.com/dynodadq0/image/upload/v1757506692/hcm_080_mdm61b.jpg', href: '/gorkon' },
        { title1: "SANDRAX", title2: "HCM 008", title3: 'https://res.cloudinary.com/dynodadq0/image/upload/v1757506724/hcm_008_p88g9j.jpg', href: '/sandrax' },
    ];
    let data8 = [
        { title1: "GORDRAXDIOZONE", title2: "HCM 561", title3: 'https://res.cloudinary.com/dynodadq0/image/upload/v1757503629/hcm_561_xefz7o.jpg', href: '/gordraxdiozone' }

    ];
    let data9 = [
        { title1: "TARDION", title2: "HCM 180", title3: 'https://res.cloudinary.com/dynodadq0/image/upload/v1757507010/hcm_180_yrrem6.jpg', href: '/tardion' },
        { title1: "FLARON", title2: "HCM 660", title3: 'https://res.cloudinary.com/dynodadq0/image/upload/v1757507048/hcm_660_vs8jj5.jpg', href: '/flaron' }
    ];
    let data10 = [
        { title1: "TIGRIS", title2: "HCM 280", title3: 'https://res.cloudinary.com/dynodadq0/image/upload/v1757508193/hcm_280_i0erm9.jpg', href: '/tigris' },
        { title1: "OCULUS", title2: "HCM 190", title3: 'https://res.cloudinary.com/dynodadq0/image/upload/v1757507457/hcm_190_o8xgrs.jpg', href: '/oculus' },
    ];
    let data11 = [
        { title1: "FLURTOTILUS", title2: "HCM 371", title3: 'https://res.cloudinary.com/dynodadq0/image/upload/v1757503677/hcm_371_iw4ptd.jpg', href: '/flurtotilus' }

    ];
    let data12 = [
        { title1: "FLURTONE", title2: "HCM 111", title3: 'https://res.cloudinary.com/dynodadq0/image/upload/v1757507371/hcm_111_bsnq9y.jpg', href: '/flurtone' },
        { title1: "PETROVIS", title2: "HCM 421", title3: 'https://res.cloudinary.com/dynodadq0/image/upload/v1757508208/hcm_421_grcgq9.jpg', href: '/petrovis' }
    ];

    return (
        <div style={{ backgroundImage: 'url(https://t3.ftcdn.net/jpg/01/22/03/84/360_F_122038456_AEdKNITqNDwdPTVdPDy1Fk5YaD9Um1xm.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
            <YourMonsters/>
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
                                            <h1 className="text-center md:text-2xl text-cyan-300">{item.title1}</h1>
                                            <br />
                                            <img className="h-30 w-25 md:h-50 md:w-50 " src={item.title3} alt=""></img>
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
                                    <div className=' flex justify-around border-4  hover:scale-120 transition-all duration-300 bg-black rounded-2xl ' style={{ boxShadow: '0px 0px 500px rgba(85, 7, 242, 0.988)' }} >
                                        <Link to={item.href} >
                                            <h1 className="text-center  md:text-2xl text-cyan-300">{item.title1}</h1>
                                            <br />
                                            <img className="h-40 w-40 md:h-60 md:w-60 " src={item.title3} alt=""></img>
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
                                            <h1 className="text-center  md:text-2xl text-cyan-300">{item.title1}</h1>
                                            <br />
                                            <img className="h-30 w-25 md:h-50 md:w-50 " src={item.title3} alt=""></img>
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
                                    type="spin"
                                    duration="10000ms"
                                    delay="0s"
                                    direction="normal"
                                    timing="linear"
                                    iteration="infinite"
                                    fillMode="none">
                                    <div className=' flex justify-around hover:scale-105 transition-all duration-300 border-red-700 border-4 bg-black rounded-2xl ' style={{ boxShadow: '4px 4px 50px rgba(62, 242, 7, 0.943)' }}>
                                        <Link to={item.href}>
                                            <h1 className="text-center text-2xl text-cyan-300">{item.title1}</h1>
                                            <br />
                                            <img className="h-30 w-30 md:h-50 md:w-50  " src={item.title3} alt=""></img>
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
                                    type="spin"
                                    duration="10000ms"
                                    delay="0s"
                                    direction="normal"
                                    timing="linear"
                                    iteration="infinite"
                                    fillMode="none">
                                    <div className=' flex justify-around border-4 hover:scale-120 transition-all duration-300 bg-black rounded-2xl ' style={{ boxShadow: '0px 0px 500px rgba(85, 7, 242, 0.988)' }} >
                                        <Link to={item.href} >
                                            <h1 className="text-center md:text-2xl text-cyan-300">{item.title1}</h1>
                                            <br />
                                            <img className="h-40 w-40 md:h-60 md:w-60  " src={item.title3} alt=""></img>
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
                                    type="spin"
                                    duration="10000ms"
                                    delay="0s"
                                    direction="normal"
                                    timing="linear"
                                    iteration="infinite"
                                    fillMode="none">
                                    <div className=' flex justify-around hover:scale-105 transition-all duration-300 border-red-700 border-4 bg-black rounded-2xl ' style={{ boxShadow: '4px 4px 50px rgba(62, 242, 7, 0.943)' }}>
                                        <Link to={item.href} >
                                            <h1 className="text-center text-2xl text-cyan-300">{item.title1}</h1>
                                            <br />
                                            <img className="h-30 w-30 md:h-50 md:w-50  " src={item.title3} alt=""></img>
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
                                    type="shakeHorizontal"
                                    duration="2000ms"
                                    delay="0s"
                                    direction="normal"
                                    timing="linear"
                                    iteration="infinite"
                                    fillMode="none">
                                    <div className=' flex justify-around hover:scale-105 transition-all duration-300 border-red-700 border-4 bg-black rounded-2xl ' style={{ boxShadow: '4px 4px 50px rgba(62, 242, 7, 0.943)' }}>
                                        <Link to={item.href}>
                                            <h1 className="text-center text-2xl text-cyan-300">{item.title1}</h1>
                                            <br />
                                            <img className="h-30 w-30 md:h-50 md:w-50  " src={item.title3} alt=""></img>
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
                                    type="shakeVertical"
                                    duration="2000ms"
                                    delay="0s"
                                    direction="normal"
                                    timing="linear"
                                    iteration="infinite"
                                    fillMode="none">
                                    <div className=' flex justify-around border-4 hover:scale-120 transition-all duration-300 bg-black rounded-2xl ' style={{ boxShadow: '0px 0px 500px rgba(85, 7, 242, 0.988)' }} >
                                        <Link to={item.href} >
                                            <h1 className="text-center md:text-2xl text-cyan-300">{item.title1}</h1>
                                            <br />
                                            <img className="h-40 w-40 md:h-60 md:w-60   " src={item.title3} alt=""></img>
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
                                    type="shakeHorizontal"
                                    duration="2000ms"
                                    delay="0s"
                                    direction="normal"
                                    timing="linear"
                                    iteration="infinite"
                                    fillMode="none">
                                    <div className=' flex justify-around hover:scale-105 transition-all duration-300 border-red-700 border-4 bg-black rounded-2xl ' style={{ boxShadow: '4px 4px 50px rgba(62, 242, 7, 0.943)' }}>
                                        <Link to={item.href} >
                                            <h1 className="text-center text-2xl text-cyan-300">{item.title1}</h1>
                                            <br />
                                            <img className="h-30 w-30 md:h-50 md:w-50  " src={item.title3} alt=""></img>
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
                                    type="jelly"
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
                                            <img className="h-30 w-30 md:h-50 md:w-50  " src={item.title3} alt=""></img>
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
                                    type="jelly"
                                    duration="6000ms"
                                    delay="0s"
                                    direction="normal"
                                    timing="linear"
                                    iteration="infinite"
                                    fillMode="none">
                                    <div className=' flex justify-around border-4 hover:scale-120 transition-all duration-300 bg-black rounded-2xl ' style={{ boxShadow: '0px 0px 500px rgba(85, 7, 242, 0.988)' }} >
                                        <Link to={item.href} >
                                            <h1 className="text-center  md:text-2xl text-cyan-300">{item.title1}</h1>
                                            <br />
                                            <img className="h-40 w-40 md:h-60 md:w-60 " src={item.title3} alt=""></img>
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
                                    type="jelly"
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
                                            <img className="h-30 w-30 md:h-50 md:w-50  " src={item.title3} alt=""></img>
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
