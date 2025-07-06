import React from 'react';
import './OTP1.css'; // optional if you separate styles

export default function OTP1() {
  
  return (
    <div className="min-h-screen flex justify-center items-center scary-bg">

      <div className='border-2 p-10 w-[350px] text-center rounded-3xl bg-black bg-opacity-80 text-red-400 shadow-2xl shadow-red-700'>
        <h1 className='py-5 text-xl font-bold animate-pulse'>OTP sent on ...@gmail.com</h1>

        <div>
          <h2 className="mb-2 text-lg">Enter OTP</h2>
        </div>

        <div className='flex gap-4 justify-center py-5'>
          <input type="Number" maxLength={1} className="otp-input" />
          <input type="Number" maxLength={1} className="otp-input" />
          <input type="Number" maxLength={1} className="otp-input" />
          <input type="Number" maxLength={1} className="otp-input" />
        </div>

        <div>
          <button className="mt-4 px-6 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition duration-300">
            Verify OTP
          </button>
        </div>
      </div>
    </div>
  );
}
