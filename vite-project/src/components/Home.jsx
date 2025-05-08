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
import Footer from './Footer'

import { href, Link } from 'react-router-dom'




export default function Home() {

    let data = [
        { title1: "SPHINIX", title2: "HCM 090", title3: image1, href: '/sphinx' },
        { title1: "ROCKMAN", title2: "HCM 570", title3: image2, href: '/rockman' },      
    ];

    let data2 = [
        { title1: "HUMOTARDILIXIAN", title2: "HCM 871", title3: image5, href: '/' }

    ];
    let data3 = [
        { title1: "TARDIHUMAN", title2: "HCM 901", title3: image3, href: '/tardihuman' },
        { title1: "CYBRAIN", title2: "HCM 270", title3: image4, href: '/cybrain' }
    ];
    let data4 = [
        { title1: "WEREWOLF", title2: "HCM 701", title3: image6, href: '/' },
        { title1: "TERRAKA", title2: "HCM 170", title3: image7, href: '/' },      
    ];

    let data5 = [
        { title1: "TERRAWOLFBYTE", title2: "HCM 522", title3: image8, href: '/' }

    ];
    let data6 = [
        { title1: "VULTRIX", title2: "HCM 521", title3: image9, href: '/' },
        { title1: "PARABYTE", title2: "HCM 211", title3: image10, href: '/' }
    ];
    
    return (
        <div style={{backgroundImage:'url(https://t3.ftcdn.net/jpg/01/22/03/84/360_F_122038456_AEdKNITqNDwdPTVdPDy1Fk5YaD9Um1xm.jpg)', backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}} >
            <div class="text-center justify-center  text-yellow-200 py-10 underline">
            <h1 class="text-8xl">HCM </h1>
            <br/>
            <h2 class="text-6xl"> Human Containment Monsters</h2>
        </div>
            <div className='  grid grid-cols-2 '  >           
                {
                    data.map((item, key) => (
                        <div className=' flex justify-center  py-5' key={key}>
                            <div className=' flex justify-around hover:scale-105 transition-all duration-300 border-red-700 border-4 bg-black rounded-2xl ' style={{boxShadow:'4px 4px 50px rgba(62, 242, 7, 0.943)'}}>
                                <Link to={item.href}>
                                    <h1 className="text-center text-2xl text-cyan-300">{item.title1}</h1>
                                    <br />
                                    <img className="h-50 w-50  " src={item.title3} alt=""></img>
                                    <br />
                                    <h1 className="text-center text-2xl text-yellow-200">{item.title2}</h1>
                                </Link>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div>
            {
                    data2.map((item, key) => (
                        <div className=' flex justify-center  py-5' key={key}>
                            <div className=' flex justify-around border-4 hover:scale-120 transition-all duration-300 bg-black rounded-2xl ' style={{boxShadow:'0px 0px 500px rgba(85, 7, 242, 0.988)'}} >
                                <Link to={item.href} >
                                    <h1 className="text-center text-2xl text-cyan-300">{item.title1}</h1>
                                    <br />
                                    <img className="h-60 w-60  " src={item.title3} alt=""></img>
                                    <br />
                                    <h1 className="text-center text-2xl text-yellow-200">{item.title2}</h1>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='  grid grid-cols-2 ' >
            {
                    data3.map((item, key) => (
                        <div className=' flex justify-center  py-5 ' key={key}>
                            <div className=' flex justify-around hover:scale-105 transition-all duration-300 border-red-700 border-4 bg-black rounded-2xl ' style={{boxShadow:'4px 4px 50px rgba(62, 242, 7, 0.943)'}}>
                                <Link to={item.href} >
                                    <h1 className="text-center text-2xl text-cyan-300">{item.title1}</h1>
                                    <br />
                                    <img className="h-50 w-50  " src={item.title3} alt=""></img>
                                    <br />
                                    <h1 className="text-center text-2xl text-yellow-200">{item.title2}</h1>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
<br />
<br />
<br />

            <div className='  grid grid-cols-2 '  >           
                {
                    data4.map((item, key) => (
                        <div className=' flex justify-center  py-5' key={key}>
                            <div className=' flex justify-around hover:scale-105 transition-all duration-300 border-red-700 border-4 bg-black rounded-2xl ' style={{boxShadow:'4px 4px 50px rgba(62, 242, 7, 0.943)'}}>
                                <Link to={item.href}>
                                    <h1 className="text-center text-2xl text-cyan-300">{item.title1}</h1>
                                    <br />
                                    <img className="h-50 w-50  " src={item.title3} alt=""></img>
                                    <br />
                                    <h1 className="text-center text-2xl text-yellow-200">{item.title2}</h1>
                                </Link>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div>
            {
                    data5.map((item, key) => (
                        <div className=' flex justify-center  py-5' key={key}>
                            <div className=' flex justify-around border-4 hover:scale-120 transition-all duration-300 bg-black rounded-2xl ' style={{boxShadow:'0px 0px 500px rgba(85, 7, 242, 0.988)'}} >
                                <Link to={item.href} >
                                    <h1 className="text-center text-2xl text-cyan-300">{item.title1}</h1>
                                    <br />
                                    <img className="h-60 w-60  " src={item.title3} alt=""></img>
                                    <br />
                                    <h1 className="text-center text-2xl text-yellow-200">{item.title2}</h1>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='  grid grid-cols-2 ' >
            {
                    data6.map((item, key) => (
                        <div className=' flex justify-center  py-5 ' key={key}>
                            <div className=' flex justify-around hover:scale-105 transition-all duration-300 border-red-700 border-4 bg-black rounded-2xl ' style={{boxShadow:'4px 4px 50px rgba(62, 242, 7, 0.943)'}}>
                                <Link to={item.href} >
                                    <h1 className="text-center text-2xl text-cyan-300">{item.title1}</h1>
                                    <br />
                                    <img className="h-50 w-50  " src={item.title3} alt=""></img>
                                    <br />
                                    <h1 className="text-center text-2xl text-yellow-200">{item.title2}</h1>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div>
       
                <Footer/>
            </div>

           
        </div>
    )
}
