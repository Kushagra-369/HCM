import React from 'react';

export default function Signed_In1() {
  const SignData = [
    { name: 'email', placeholder: 'Enter your cursed email', type: 'email' },
    { name: 'password', placeholder: 'Whisper your secret password', type: 'password' },
  ];

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-black via-blue-900 to-black text-red-100 font-mono">
      <div className="border-2 border-red-700 shadow-2xl shadow-black px-8 py-10 w-[400px] bg-gradient-to-b from-gray-900 via-black to-red-900 rounded-xl">
        <h1 className="text-center text-5xl font-bold text-red-600 drop-shadow-lg tracking-widest">
          LOG-IN
        </h1>

        {SignData.map((item, key) => (
          <div key={key} className="py-4">
            <label htmlFor={item.name} className="block mb-2 text-lg uppercase tracking-wider text-red-300">
              {item.name}
            </label>
            <input
              id={item.name}
              name={item.name}
              type={item.type}
              placeholder={item.placeholder}
              required
              className="w-full p-3 rounded-md bg-black/80 text-white placeholder-red-400 border border-red-800 focus:outline-none focus:ring-2 focus:ring-red-700"
            />
          </div>
        ))}
        <div className=' flex justify-between px-5'>
          <h1></h1>
          <a href=""> <h1 className=' hover:text-blue-600'>Forger password ?</h1></a>
        </div>
        <div className="pt-6">
          <button
            type="submit"
            className="w-full h-12 bg-red-800 hover:bg-red-600 text-white font-bold tracking-wide rounded-lg transition shadow-md shadow-red-800 hover:shadow-red-500"
          >
            ENTER THE DARK
          </button>
        </div>
      </div>
    </div>
  );
}
