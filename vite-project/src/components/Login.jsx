import React from 'react';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Login() {
    const SignData = [
        { name: 'name', placeholder: 'Enter your name', type: 'text' },
        { name: 'email', placeholder: 'Enter your email', type: 'email' },
        { name: 'password', placeholder: 'Enter your password', type: 'password' },
    ]
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center" style={{
            backgroundImage:
                'url(https://thumbs.dreamstime.com/b/grunge-red-forest-horror-background-red-color-grunge-background-horror-creepy-style-horror-background-dark-red-color-horror-326613608.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>
            <div className="flex justify-end w-full p-6">
                <div className="flex items-center    ">
                    <Link to="/login2" className=" border-2  border-white p-2 rounded-l-2xl text-black bg-white  ">Light Theme</Link>

                    <Link to="/login" className='border-2  border-white p-2 rounded-r-2xl bg-black text-white'>Dark Theme</Link>
                </div>
            </div>

          <div className="w-11/12 max-w-md md:max-w-2xl h-full bg-[#0a0a0a] text-white rounded-3xl shadow-[0_0_40px_rgba(255,0,0,0.7)] p-6 md:p-10 transition-all duration-300 ease-in-out font-['Creepster'] relative overflow-hidden">
  {/* Blood Drip SVG at the top */}
  <svg className="absolute top-0 left-0 w-full h-10 pointer-events-none opacity-40" viewBox="0 0 400 40" fill="none">
    <path d="M0 0 Q100 40 200 0 Q300 -40 400 0 V40 H0Z" fill="#b91c1c"/>
  </svg>

  <h1 className="text-3xl md:text-4xl text-center text-red-600 py-5 leading-snug drop-shadow-[2px_2px_8px_rgba(255,0,0,0.8)] animate-pulse">
    Join Us... <span className="animate-shake">Forever</span>
    <br />
    <span className="text-sm md:text-base font-normal text-gray-400 tracking-wide font-sans italic">
      Enter your <span className="text-red-400">cursed name</span>, <span className="text-red-500">haunted email</span>, and <span className="text-red-600">soul-bound password</span>.<br/>
      <span className="text-xs text-gray-500 block mt-2">(Your fate is sealed in darkness...)</span>
    </span>
  </h1>

  <div className="space-y-7">
    {SignData.map((item, key) => (
      <div key={key} className="flex flex-col relative">
        <label
          htmlFor={item.name}
          className="text-red-300 font-medium mb-2 capitalize tracking-wide"
        >
          {item.name}
        </label>
        <input
          name={item.name}
          type={item.type}
          id={item.name}
          placeholder={item.placeholder + '...if you dare'}
          required
          className="h-12 w-full px-4 bg-black text-white border border-red-800 rounded-xl placeholder-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition shadow-inner shadow-red-900 hover:shadow-[0_0_12px_2px_rgba(255,0,0,0.4)]"
          aria-required="true"
        />
      </div>
    ))}

    <div className="flex items-center gap-3">
      <input
        id="remember"
        type="checkbox"
        className="w-5 h-5 accent-red-600 rounded focus:ring-2 focus:ring-red-400 animate-pulse"
      />
      <label htmlFor="remember" className="text-red-300 text-base">
        Remember my soul <span className="text-xs text-gray-500">(forever...)</span>
      </label>
    </div>

    <button
      type="submit"
      className="h-12 w-full bg-gradient-to-r from-red-900 via-red-700 to-black hover:from-black hover:to-red-900 text-white rounded-xl font-bold tracking-widest shadow-[0_0_25px_rgba(255,0,0,0.7)] transition-all duration-300 ease-in-out animate-pulse hover:animate-none relative"
    >
      <span className="relative z-10">ENTER IF YOU DARE</span>
      {/* Optional: Add a dripping blood SVG or flicker effect */}
    </button>
  </div>

  {/* Faint ghost or skull SVG in the background */}
  <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none select-none">
    {/* <GhostSVG /> or <SkullSVG /> */}
  </div>
</div>



        </div>
    );
}
