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
                    <Link to="/login2" className=" border-2  border-white text-white text-black bg-black p-2 rounded-l-2xl ">Light Theme</Link>

                    <Link to="/login" className='border-2  border-white  bg-white p-2 rounded-r-2xl'>Dark Theme</Link>
                </div>
            </div>

            <div className=" w-70 md:w-150 h-full bg-white  text-black border-2 border-black rounded-2xl shadow-lg p-4 md:p-8">
                <h1 className=" text-xl md:text-2xl text-center py-5">
                    Enter your name , email address , password to join us and be part of our novel
                </h1>
                <div>
                    {SignData.map((item, key) => (
                        <div key={key}>
                            <label className="block py-2" htmlFor={item.name}>{item.name}</label>
                            <input
                                name={item.name}
                                type={item.type}
                                id={item.name}
                                className="h-10 w-full border-2 border-gray-300 rounded-2xl px-5"
                                placeholder={item.placeholder}
                                required
                            />
                        </div>
                    ))}
                     <div className="flex py-3 gap-2 items-center">
                        <input id="remember" type="checkbox" className="text-2xl" />
                        <label htmlFor="remember" className="text-xl">Remember me</label>
                    </div>
                    <button
                        className="hover:bg-red-700 bg-red-500 h-10 w-full text-white rounded-2xl font-semibold transition"
                        type="submit"
                    >
                        CONTINUE
                    </button>
                </div>
            </div>
        </div>
    );
}
