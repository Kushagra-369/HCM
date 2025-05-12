import React from 'react'
import Logo from './Logo'

export default function Footer() {
  return (
    <div>
           <footer style={{backgroundImage:'url(https://w0.peakpx.com/wallpaper/972/488/HD-wallpaper-bloody-background-blood-thumbnail.jpg)', backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
            <h1 className="items-center flex justify-center font-extrabold text-white text-2xl py-5"><a href="">Back to top</a></h1>
            <div className="text-white font-bold flex justify-around py-20">
                <div >
                <h1 className="font-bold border-b-2 border-cyan-300">Get to know</h1>
                <br/>
                <h1 className='text-yellow-300'><a href="">about empty spaces</a></h1>
                <h1 className='text-yellow-300'><a href="">about hcm </a></h1>
                <h1 className='text-yellow-300'><a href="">origin </a></h1>
            </div>
            <div>
                <h1 className="font-bold border-b-2 border-cyan-300">connect with us</h1>
                <br/>
                <h1 className='text-yellow-300'><a href="">twitter</a></h1>
                <h1 className='text-yellow-300'><a href="">facebook</a></h1>
                <h1 className='text-yellow-300'><a href="">instagram</a></h1>
            </div>
            <div>
                <h1 className="font-bold border-b-2 border-cyan-300">make money with us</h1>
                <br/>
                <h1 className='text-yellow-300'><a href="">sell on amazon</a></h1>
                <h1 className='text-yellow-300'><a href="">suply to amazon</a></h1>
                <h1 className='text-yellow-300'><a href="">become an affiliate</a></h1>
            </div>
            <div>
                <h1 className="font-bold border-b-2 border-cyan-300">let us help you</h1>
                <br/>
                <h1 className='text-yellow-300'><a href="">your account</a></h1>
                <h1 className='text-yellow-300'><a href="">returns centre</a></h1>
                <h1 className='text-yellow-300'><a href="">help</a></h1>
            </div>
            </div>
                <div>
                <Logo/>

                </div>
        </footer>

    </div>
  )
}
