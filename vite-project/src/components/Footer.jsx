import React from 'react'
import Logo from './Logo'
import Season1 from './Season1'
export default function Footer() {
  return (
    <div>
           <footer style={{backgroundImage:'url(https://w0.peakpx.com/wallpaper/972/488/HD-wallpaper-bloody-background-blood-thumbnail.jpg)', backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
            <h1 className="items-center flex justify-center font-extrabold text-white text-2xl py-5"><a href="">Back to top</a></h1>
            <div className="text-white font-bold   md:flex justify-around py-20">
                <div className=' text-center ' >
                <h1 className="font-bold md:border-b-2 text-4xl border-cyan-300">Get to know</h1>
                <br/>
                <h1 className='text-yellow-300  text-2xl '><a href="">about empty spaces</a></h1>
                <h1 className='text-yellow-300  text-2xl'><a href="">about hcm </a></h1>
                <h1 className='text-yellow-300  text-2xl'><a href="">origin </a></h1>
            </div>
            <br />
            <div className=' text-center '>
                <h1 className="font-bold md:border-b-2 text-4xl border-cyan-300">connect with us</h1>
                <br/>
                <h1 className='text-yellow-300  text-2xl'><a href="">git hub</a></h1>
                <h1 className='text-yellow-300  text-2xl'><a href="">linkedin</a></h1>
            </div>
            <br />
            <div className=' text-center '>
                <h1 className="font-bold md:border-b-2 text-4xl border-cyan-300">read our novel </h1>
                <br/>
                <h1 className='text-yellow-300 text-2xl'><a  href="/season1" > season 1</a></h1>
                <h1 className='text-yellow-300  text-2xl'><a href=""> season 2</a></h1>
                <h1 className='text-yellow-300  text-2xl'><a href=""> season 3</a></h1>
            </div>
            <br />
           
            </div>
                <div>
                <Logo/>

                </div>
        </footer>

    </div>
  )
}
