import React from 'react';
import Logo from './Logo';
import MovingComponent from 'react-moving-text';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

export default function Classification2() {
    let data = [
        { title1: "Living-Living", title2: ["Biotic-Biotic", "Biotic-Abiotic"], title3: [["Human-Animal", "Human-Microbe", "Animal-Microbe"], ["Animal-Plant", "Tree-Decomposer", "Bird-Plant"]] },
        { title1: "Living-Non-living", title2: ["Biotic-Abiotic", "Biotic-Technology", "Abiotic-Technology", "Abiotic-Abiotic"], title3: [["Human-Stone", "Human-Plant", "Human-Sand"], ["Bird-AI", "Human-AI", "Animal-AI"], ["Plant-AI", "Plant-Computer", "Tree-AI"], ["Tree-Fire", "Tree-Stone", "Tree-Water"]] },
        { title1: "Non-living-Non-living", title2: ["Abiotic-Abiotic", "Technology-Technology", "Abiotic-Technology"], title3: [["Fire-Stone", "Water-Stone", "Fire-Water"], ["Computer-AI"], ["Plant-AI", "Stone-AI", "Water-AI"]] }
    ];

    let data8 = [{ title1: "Biotic-Abiotic-Biotic-Abiotic" }];
    let data9 = [{ title1: "Abiotic-Biotic-Biotic-Technology" }, { title1: "Biotic-Biotic-Biotic-Technology" }];

    return (
        <div className='bg-black py-20'>

            <motion.h1
                className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-center text-white'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                E(Entity) TYPE OF HCM
            </motion.h1>

            <div className="px-4 md:px-10 py-10 flex flex-wrap justify-center gap-7 text-blue-700">
                {data.map((item, key) => (
                    <motion.div
                        key={key}
                        className="bg-gradient-to-br from-[#f03608] to-[#ede903] border border-red-700 rounded-xl shadow-lg px-6 py-4 text-center transition transform hover:scale-105 hover:shadow-cyan-400/40"
                        whileHover={{ scale: 1.1 }}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: key * 0.2 }}
                    >
                        <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold tracking-wide">
                            {item.title1}
                        </h2>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className='py-5'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.h1
                    className='text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl flex justify-center text-center'
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    N(Nature) TYPE OF HCM
                </motion.h1>

                <div className="px-4 md:px-10 py-10 text-cyan-400 text-2xl md:text-4xl">
                    <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-center items-stretch">
                        {data.map((item, key) => (
                            <motion.ul
                                key={key}
                                className="bg-gradient-to-r from-blue-500 to-green-600 border-2 border-black rounded-lg shadow-lg p-6  w-full md:w-90 lg:w-110 xl:w-130 2xl:w-170 hover:shadow-yellow-400/40 transition transform"
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: key * 0.3 }}
                            >
                                <li className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-yellow-400 text-center mb-4">
                                    {item.title1}
                                </li>
                                <div className=" md:block justify-center">
                                    {item.title2.map((subitem, subkey) => (
                                        <div
                                            key={subkey}
                                            className="px-2 py-1 text-red-600 font-semibold text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl  rounded-md mb-2 mx-1 md:mx-0 cursor-pointer transition transform hover:scale-105"
                                        >
                                            {subitem}
                                        </div>
                                    ))}
                                </div>
                            </motion.ul>
                        ))}
                    </div>
                </div>
            </motion.div>

            <motion.div
                className='py-5'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.h1
                    className='text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl flex justify-center items-center text-center'
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    S(Species) TYPE OF HCM
                </motion.h1>

                <div className="px-6 md:px-16 py-12 bg-black min-h-screen">
                    {data.map((item, key) => (
                        <motion.section
                            key={key}
                            className="mb-12 border-l-8 border-cyan-500 bg-gray-800 p-8 hover:bg-gray-700 transition-colors duration-300"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-extrabold uppercase tracking-widest text-red-600 mb-8 select-none">
                                {item.title1}
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {item.title2.map((subitem, subkey) => (
                                    <motion.div
                                        key={subkey}
                                        className="group cursor-pointer"
                                        whileHover={{ scale: 1.02 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: subkey * 0.2 }}
                                    >
                                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-yellow-400 tracking-wide mb-4 border-b-4 border-cyan-500 pb-2 uppercase">
                                            {subitem}
                                        </h3>
                                        <ul className="list-none text-gray-300 space-y-3 pl-4">
                                            {item.title3[subkey]?.map((fsubitem, fsubkey) => (
                                                <li
                                                    key={fsubkey}
                                                    className="relative pl-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl before:absolute before:left-0 before:top-2 before:h-1 before:w-4 before:bg-cyan-500 before:rounded-sm before:opacity-75 before:transition-all before:group-hover:w-6"
                                                >
                                                    {fsubitem}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>
                    ))}
                </div>
            </motion.div>

            <div>
                <h1 className='text-6xl md:text-8xl xl:text-9xl text-lime-400 text-center'>Some special fusions</h1>
                <div className=" h-full   bg-black md:flex justify-center items-start py-20 px-6 md:px-24 gap-16 text-gray-300 font-sans relative overflow-hidden">
                    <div
                        className="absolute inset-0  pointer-events-none"
                        style={{
                            background:
                                "radial-gradient(circle at 20% 20%, rgba(120, 0, 120, 0.15), transparent 70%)," +
                                "radial-gradient(circle at 80% 80%, rgba(0, 0, 80, 0.15), transparent 70%)",
                            mixBlendMode: "screen",
                            zIndex: 0,
                        }}
                    />

                    {/* Left Fusion */}
                    <motion.section
                        className="relative bg-black/60 backdrop-blur-md  rounded-3xl shadow-[0_0_30px_rgba(170,1200,120,0.7)] p-12   w-full lg:w-100 xl:w-200 2xl:w-240 2xl:h-140 border border-green-500 z-10"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h1 className="text-2xl md:text-xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-extrabold bg-gradient-to-r from-red-600 to-green-500 bg-clip-text text-transparent mb-12 text-center tracking-widest animate-[flicker_3s_ease-in-out_infinite]">
                            Living-Living-Living-Non-living
                        </h1>
                        <div className="space-y-6">
                            {data9.map((items, key) => (
                                <h2
                                    key={key}
                                    className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium px-6 py-4 rounded-lg bg-black/30 border border-orange-400 hover:bg-black/50 transition-colors text-cyan-300"
                                >
                                    {items.title1}
                                </h2>
                            ))}
                        </div>
                    </motion.section>

                    {/* Right Fusion */}
                    <motion.section
                        className="relative bg-black/60 backdrop-blur-md rounded-3xl shadow-[0_0_30px_rgba(170,120,120,97)] p-12 w-full lg:w-100 xl:w-200 2xl:w-240 2xl:h-140 border border-blue-800 z-10"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h1 className="text-2xl md:text-xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-12 text-center tracking-widest animate-[flicker_3s_ease-in-out_infinite]">
                            Living-Non-living-Living-Non-living
                        </h1>
                        <div className="space-y-6">
                            {data8.map((items, key) => (
                                <h2
                                    key={key}
                                    className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium px-6 py-4 rounded-lg bg-black/30 border border-blue-700 hover:bg-black/50 text-blue-300"
                                >
                                    {items.title1}
                                </h2>
                            ))}
                        </div>
                    </motion.section>
                </div>
            </div>

            {/* Greatest Fusion Spin Text */}
            <motion.div
                className='text-6xl font-horror py-20 md:text-9xl text-red-600 text-center'
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2 }}
            >
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
            </motion.div>

            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl 2xl:text-8xl font-horror text-cyan-300 text-center py-10 tracking-wider mb-6 animate-pulse drop-shadow-lg">
                ☠ OMNOXAR ☠
            </h1>
            <motion.h1
                className="items-center flex justify-center font-extrabold text-white text-2xl py-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <ScrollLink to="navbar" smooth={true} duration={600} offset={-70} className="cursor-pointer">
                    <span>Back to top</span>
                </ScrollLink>
            </motion.h1>

            <Logo />
        </div>
    );
}
