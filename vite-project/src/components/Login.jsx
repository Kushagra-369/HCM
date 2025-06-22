import React from 'react';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center"  style={{
          backgroundImage:
            'url(https://t3.ftcdn.net/jpg/01/22/03/84/360_F_122038456_AEdKNITqNDwdPTVdPDy1Fk5YaD9Um1xm.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}>
            <div className="flex justify-end w-full p-6">
                <div className="flex items-center    ">
                    <Link to="/login2" className=" border-2  border-white p-2 rounded-l-2xl text-black bg-white  ">Light Theme</Link>

                    <Link to="/login" className='border-2  border-white p-2 rounded-r-2xl bg-black text-white'>Dark Theme</Link>
                </div>
            </div>

            <div className=" w-70 md:w-150 h-full bg-black text-white border-2 border-black rounded-2xl shadow-lg p-4 md:p-8">
                <h1 className="text-xl md:text-2xl text-center py-5">
                    Enter your email address to log in or create an account.
                </h1>
                <div className="mt-4">
                    <label className="block py-2" htmlFor="email">EMAIL ADDRESS</label>
                    <input
                        type="email"
                        id="email"
                        className="h-10 w-full border-2 text-white border-gray-300 rounded-2xl px-5 "
                        placeholder="you@example.com"
                    />
                    <div className="flex py-3 gap-2 items-center">
                        <input id="remember" type="checkbox" className="text-2xl" />
                        <label htmlFor="remember" className="text-xl">Remember me</label>
                    </div>
                    <button
                        className="hover:bg-red-700 bg-red-500 h-10 w-full text-white rounded-2xl font-semibold transition"
                        type="button"
                    >
                        CONTINUE
                    </button>
                    <div className="text-center py-3">or</div>
                    <div className="text-center px-2 text-xs text-gray-400 mb-4">
                        By continuing, you agree to the Terms of Sale, Terms of Service, and Privacy Policy.
                    </div>
                    <button className="hover:bg-gray-200 h-10 w-full border-2 border-gray-300 hover:text-black rounded-2xl flex justify-center items-center gap-2 mb-3 transition">
                        <FaGoogle /> Continue with Google
                    </button>
                    <button className="hover:bg-gray-200 h-10 w-full border-2 border-gray-300 hover:text-black rounded-2xl flex justify-center items-center gap-2 mb-3 transition">
                        <FaFacebook /> Continue with Facebook
                    </button>
                    <button className="hover:bg-gray-200 h-10 w-full border-2 border-gray-300 hover:text-black rounded-2xl flex justify-center items-center gap-2 transition">
                        <FaApple /> Continue with Apple
                    </button>
                </div>
            </div>
        </div>
    );
}
