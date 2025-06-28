import React from 'react';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Login2() {
    const SignData = [
        { name: 'name', placeholder: 'Enter your name', type: 'text' },
        { name: 'email', placeholder: 'Enter your email', type: 'email' },
        { name: 'password', placeholder: 'Enter your password', type: 'password' },
    ]
    return (
        <div className="min-h-screen bg-black flex flex-col justify-center items-center" style={{
            backgroundImage:
                'url(https://thumbs.dreamstime.com/b/path-dark-woods-spooky-tunnel-blue-light-haunted-forest-night-theme-horror-fantasy-scary-movie-mystic-background-323179329.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>
            <div className="flex justify-end w-full p-6">
                <div className="flex items-center    ">
                    <Link to="/login2" className=" border-2  border-white  text-white bg-black p-2 rounded-l-2xl ">Light Theme</Link>

                    <Link to="/login" className='border-2  border-white  bg-white p-2 rounded-r-2xl'>Dark Theme</Link>
                </div>
            </div>

            <div className="w-11/12 max-w-md md:max-w-2xl h-full bg-[#fff7f7] text-black border-2 border-red-700 rounded-3xl shadow-[0_0_25px_rgba(255,0,0,0.25)] p-6 md:p-10 transition-all duration-300 ease-in-out font-['Creepster'] relative overflow-hidden">
                {/* Decorative blood drip SVG */}
                <svg className="absolute top-0 left-0 w-full h-10 pointer-events-none" viewBox="0 0 400 40" fill="none">
                    <path d="M0 0 Q100 40 200 0 Q300 -40 400 0 V40 H0Z" fill="#f87171" fillOpacity="0.25" />
                </svg>

                <h1 className="text-3xl md:text-4xl text-center text-red-700 py-5 leading-snug drop-shadow-[2px_2px_8px_rgba(255,0,0,0.7)] animate-pulse">
                    Join Us... <span className="animate-shake">Forever</span>
                    <br />
                    <span className="text-sm md:text-base font-normal text-gray-700 tracking-wide font-sans italic">
                        Enter your <span className="text-red-400">cursed name</span>, <span className="text-red-500">haunted email</span>, and <span className="text-red-600">soul-bound password</span>
                        <br />
                        <span className="text-xs text-gray-500 block mt-2">(Your soul will be trapped in the light...)</span>
                    </span>
                </h1>

                <div className="space-y-6">
                    {SignData.map((item, key) => (
                        <div key={key} className="flex flex-col relative">
                            <label
                                htmlFor={item.name}
                                className="text-red-600 font-medium mb-2 capitalize tracking-wide"
                            >
                                {item.name}
                            </label>
                            <input
                                name={item.name}
                                type={item.type}
                                id={item.name}
                                placeholder={item.placeholder + '...if you dare'}
                                required
                                className="h-12 w-full px-4 bg-[#fffafa] text-black border-2 border-red-600 rounded-xl placeholder-red-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition shadow-[inset_0_0_8px_rgba(255,0,0,0.2)] hover:shadow-[0_0_8px_2px_rgba(255,0,0,0.3)]"
                            />
                            {/* Optional: Add a faint ghost SVG as background */}
                        </div>
                    ))}

                    <div className="flex items-center gap-3">
                        <input
                            id="remember"
                            type="checkbox"
                            className="w-5 h-5 accent-red-600 rounded focus:ring-2 focus:ring-red-400 animate-pulse"
                        />
                        <label htmlFor="remember" className="text-red-700 text-base">
                            Remember my soul <span className="text-xs text-gray-500">(forever...)</span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="h-12 w-full bg-gradient-to-r from-red-600 via-red-400 to-red-600 hover:from-red-700 hover:to-red-800 text-white rounded-xl font-bold tracking-widest shadow-[0_0_20px_rgba(255,0,0,0.4)] transition-all duration-300 ease-in-out animate-pulse hover:animate-none relative"
                    >
                        ENTER IF YOU DARE
                    </button>
                </div>
            </div>




        </div>
    );
}
