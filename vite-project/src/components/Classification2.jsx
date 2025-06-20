import React from 'react'
import Logo from './Logo';
import MovingComponent from 'react-moving-text';

export default function Classification2() {

    let data = [
        { title1: "Living-Living", title2: ["Biotic-Biotic", "Biotic-Abiotic"], title3: [["Human-Animal", "Human-Microbe", "Animal-Microbe"], ["Animal-Plant", "Tree-Decomposer", "Bird-Plant"]] },
        { title1: "Living-Non-living", title2: ["Biotic-Abiotic", "Biotic-Technology", "Abiotic-Technology", "Abiotic-Abiotic"], title3: [["Human-Stone", "Human-Plant", "Human-Sand"], ["Bird-AI", "Human-AI", "Animal-AI"], ["Plant-AI", "Plant-Computer", "Tree-AI"], ["Tree-Fire", "Tree-Stone", "Tree-Water"]] },
        { title1: "Non-living-Non-living", title2: ["Abiotic-Abiotic", "Technology-Technology", "Abiotic-Technology"], title3: [["Fire-Stone", "Water-Stone", "Fire-Water"], ["Computer-AI"], ["Plant-AI", "Stone-AI", "Water-AI"]] }
    ];
    let data8 = [
        { title1: "Biotic-Abiotic-Biotic-Abiotic" },
    ];

    let data9 = [
        { title1: "Abiotic-Biotic-Biotic-Technology" },
        { title1: "Biotic-Biotic-Biotic-Technology" },
    ]
    return (
        <div className=' bg-black py-20'>
            {
                <h1 className='text-5xl md:text-6xl text-center text-white'>E(Entity) TYPE OF HCM</h1>
            }
            <div className="px-4 md:px-10 py-10 flex flex-wrap justify-center gap-7 text-blue-700">
                {data.map((item, key) => (
                    <div
                        key={key}
                        className="bg-gradient-to-br from-[#f03608] to-[#ede903] border border-red-700 rounded-xl shadow-lg px-6 py-4 text-center transition transform hover:scale-105 hover:shadow-cyan-400/40"
                    >
                        <h2 className="text-2xl md:text-4xl  font-semibold tracking-wide  transition-colors duration-300">
                            {item.title1}
                        </h2>
                    </div>
                ))}
            </div>

            <div className=' py-5'>
                <div className=' text-white text-5xl md:text-6xl  flex justify-center items-center text-center'>
                    <h1>N(Nature) TYPE OF HCM</h1>
                </div>
                <div className="px-4 md:px-10 py-10 text-cyan-400 text-2xl md:text-4xl">
                    <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-center items-stretch">
                        {data.map((item, key) => (
                            <ul
                                key={key}
                                className="bg-gradient-to-r from-blue-500 to-green-600 border-2 border-black rounded-lg shadow-lg p-6 w-full md:w-90 transition-transform transform hover:scale-105"
                            >
                                <li className="text-2xl md:text-3xl font-bold text-yellow-400 text-center mb-4">
                                    {item.title1}
                                </li>
                                <div className="flex   md:block justify-center">
                                    {item.title2.map((subitem, subkey) => (
                                        <div
                                            key={subkey}
                                            className="px-2 py-1  text-red-600 font-semibold text-xl  md:text-xl transition-colors duration-300"
                                        >
                                            {subitem}
                                        </div>
                                    ))}
                                </div>
                            </ul>
                        ))}
                    </div>
                </div>


            </div>

            <div className=' py-5'>
                <div className=' text-white text-5xl md:text-6xl flex justify-center items-center text-center'>
                    <h1>S(Species) TYPE OF HCM</h1>
                </div>
                <div className="px-6 md:px-16 py-12 bg-black min-h-screen">
                    {data.map((item, key) => (
                        <section
                            key={key}
                            className="mb-12 border-l-8 border-cyan-500 bg-gray-800 p-8 hover:bg-gray-700 transition-colors duration-300"
                        >
                            {/* Main Title */}
                            <h2 className="text-5xl md:text-6xl font-extrabold uppercase tracking-widest text-red-600 mb-8 select-none">
                                {item.title1}
                            </h2>

                            {/* Sub Items */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {item.title2.map((subitem, subkey) => (
                                    <div key={subkey} className="group cursor-pointer">
                                        <h3 className="text-3xl font-bold text-yellow-400 tracking-wide mb-4 border-b-4 border-cyan-500 pb-2 uppercase  transition-colors">
                                            {subitem}
                                        </h3>

                                        {/* Sub-Sub Items */}
                                        <ul className="list-none text-gray-300 space-y-3 pl-4">
                                            {item.title3[subkey]?.map((fsubitem, fsubkey) => (
                                                <li
                                                    key={fsubkey}
                                                    className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-1 before:w-4 before:bg-cyan-500 before:rounded-sm before:opacity-75 before:transition-all before:group-hover:w-6"
                                                >
                                                    {fsubitem}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>


            </div>

            <div>
                <h1 className=' text-6xl md:text-8xl text-lime-400 text-center'>Some special fusions</h1>
                <div className="min-h-screen bg-black md:flex justify-center items-start py-20 px-6 md:px-24 gap-16 text-gray-300 font-sans relative overflow-hidden">

                    {/* Optional subtle smoky overlay (you can replace with a subtle animated SVG or CSS noise) */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background:
                                "radial-gradient(circle at 20% 20%, rgba(120, 0, 120, 0.15), transparent 70%)," +
                                "radial-gradient(circle at 80% 80%, rgba(0, 0, 80, 0.15), transparent 70%)",
                            mixBlendMode: "screen",
                            zIndex: 0,
                        }}
                    />

                    {/* Left Section */}
                    <section className="relative bg-black/60 backdrop-blur-md rounded-3xl shadow-[0_0_30px_rgba(170,1200,120,0.7)] p-12 max-w-md w-full border border-green-500 z-10">
                        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-600 to-green-500 bg-clip-text text-transparent mb-12 text-center select-none tracking-widest
      animate-[flicker_3s_ease-in-out_infinite]"
                        >
                            Living-Living-Living-Non-living
                        </h1>

                        <div className="space-y-6">
                            {data9.map((items, key) => (
                                <h2
                                    key={key}
                                    className="text-xl md:text-2xl font-medium px-6 py-4 rounded-lg bg-black/30 border border-orange-400 hover:bg-black/50 transition-colors cursor-default shadow-[0_0_10px_rgba(160,160,0.7)] text-cyan-300"
                                >
                                    {items.title1}
                                </h2>
                            ))}
                        </div>
                    </section>

                    {/* Right Section */}
                    <section className="relative bg-black/60 backdrop-blur-md rounded-3xl shadow-[0_0_30px_rgba(170,120,120,97)] p-12 max-w-md w-full border border-blue-800 z-10">
                        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-12 text-center select-none tracking-widest
      animate-[flicker_3s_ease-in-out_infinite]"
                        >
                            Living-Non-living-Living-Non-living
                        </h1>

                        <div className="space-y-6">
                            {data8.map((items, key) => (
                                <h2
                                    key={key}
                                    className="text-xl md:text-2xl font-medium px-6 py-4 rounded-lg bg-black/30 border border-blue-700 hover:bg-black/50 transition-colors cursor-default shadow-[0_0_10px_rgba(0,0,160,0.7)] text-blue-300"
                                >
                                    {items.title1}
                                </h2>
                            ))}
                        </div>
                    </section>

                    {/* Flicker animation (add in your global CSS or Tailwind config) */}
                    <style>{`
    @keyframes flicker {
      0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
        opacity: 1;
      }
      20%, 22%, 24%, 55% {
        opacity: 0.6;
      }
    }
  `}</style>
                </div>


            </div>

            <div>
                <div className='text-6xl md:text-9xl text-red-600 text-center'>
                    <MovingComponent
                        type="spin"
                        duration="6000ms"
                        delay="0s"
                        direction="normal"
                        timing="ease-in-out"
                        iteration="infinite"
                        fillMode="both"
                    >


                        THE GREATEST FUSION
                    </MovingComponent>
                </div>
                <h1 className=' text-2xl text-cyan-300 text-center py-10'>soon to be uploaded</h1>

            </div>
            <div>
                <Logo />

            </div>
        </div>
    )
}
