import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import About from './About';


export default function Footer() {

  let data = [
    { title2: "/season1", title1: "season-1" },
    { title2: "", title1: "season-2" },
    { title2: "", title1: "season-3" },
  ];

  let data2 = [
    { title1: "about empty spaces", title2: "/about", title3: "about_empty_spaces" },
    { title1: "about hcm ", title2: "/about", title3: "about_hcm" },
    { title1: "origin", title2: "/about", title3: "origin" },
  ];

  return (
    <Element name='footer'>
      <div>
      <footer style={{ backgroundImage: 'url(https://w0.peakpx.com/wallpaper/972/488/HD-wallpaper-bloody-background-blood-thumbnail.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <h1 className="items-center flex justify-center font-extrabold text-white text-2xl py-5">
          <Link to="/"><span>Back to top</span></Link>
        </h1>
        <div className="text-white font-bold md:flex justify-around py-20">
          <div className='text-center'>
            <h1 className="font-bold md:border-b-2 text-4xl border-cyan-300">Get to know</h1>
            <br />
            <div> 
              {
              data2.map((item, key) => (
                <Link key={key} to={item.title3}>
                 <h1 className='text-yellow-300 text-2xl'>{item.title1}</h1>
                </Link>
              ))
            }
            </div>
          </div>
          <br />
          <div className='text-center'>
            <h1 className="font-bold md:border-b-2 text-4xl border-cyan-300">connect with us</h1>
            <br />
            <h1 className='text-yellow-300 text-2xl'><a href="https://github.com/Kushagra-369">git hub</a></h1>
            <h1 className='text-yellow-300 text-2xl'><a href="https://www.linkedin.com/in/kushagra-chhabra-83b215355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ">linkedin</a></h1>
          </div>
          <br />
          <div className='text-center'>
            <h1 className="font-bold md:border-b-2 text-4xl border-cyan-300">read our novel</h1>
            <br />
            {
              data.map((item, key) => (
                <div key={key}>
                  <h1 className='text-yellow-300 text-2xl'><Link to={item.title2}>{item.title1}</Link></h1>
                </div>
              ))
            }
          </div>
          <br />
        </div>
        <div>
          <Logo />
        </div>
      </footer>
    </div>
    </Element>
  );
}
