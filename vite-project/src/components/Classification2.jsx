import React from 'react'
import Logo from './Logo';

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
            <div className=' px-10 gap-7 flex justify-around text-cyan-400 py-10 text-2xl md:text-4xl'>
                {data.map((item, key) => (
                    <ul key={key} >
                        <br />
                        <li className='text-2xl md:text-4xl' >{item.title1}</li>

                    </ul>
                ))

                }

            </div>
            <div className=' py-5'>
                <div className=' text-white text-5xl md:text-6xl flex justify-center items-center text-center'>
                    <h1>N(Nature) TYPE OF HCM</h1>
                </div>
                <div className=' px-10 gap-7 flex justify-around text-cyan-400 py-10 text-2xl md:text-4xl'>
                    {data.map((item, key) => (
                        <ul key={key} >
                            <br />
                            <li className='text-2xl md:text-4xl' >{item.title1}</li>
                            <div className=' py-3'>
                                {
                                    item.title2.map((subitem, subkey) => (
                                        <div key={subkey} className='px-4 py-2 text-yellow-300 text-sm md:text-3xl '>
                                            {subitem}
                                        </div>
                                    ))
                                }
                            </div>

                        </ul>
                    ))
                    }


                </div>
            </div>

            <div className=' py-5'>
                <div className=' text-white text-5xl nd:text-6xl flex justify-center items-center text-center'>
                    <h1>S(Species) TYPE OF HCM</h1>
                </div>
                <div className=' px-7 gap-7  justify-around text-cyan-400 py-10 text-2xl md:text-4xl'>
                    {data.map((item, key) => (
                        <ul key={key} >
                            <br />
                            <li className='text-3xl md:text-5xl'>{item.title1}</li>
                            <div className=' flex justify-around py-5'>
                                {
                                    item.title2.map((subitem, subkey) => (
                                        <div key={subkey} className='px-2 py-2 text-yellow-300 text-xl md:text-4xl'>
                                            <li>{subitem}</li>
                                            <ul className='pl-2 py-5 text-red-500' >
                                                {
                                                    item.title3[subkey]?.map((fsubitem, fsubkey) => (
                                                        <li key={fsubkey} className='text-base md:text-xl'>
                                                            {fsubitem}
                                                        </li>
                                                    ))
                                                }
                                            </ul>

                                        </div>
                                    ))
                                }
                            </div>

                        </ul>
                    ))
                    }


                </div>

            </div>

            <div>
                <h1 className=' text-6xl md:text-8xl text-lime-400 text-center'>Some special fusions</h1>
                <div className=' flex justify-center py-10 gap-10 ' >

                    <div>
                        <h1 className='text-3xl md:text-6xl text-cyan-400 px-8 md:px-3'  >Living-Living-Living-Non-living</h1>
                        {
                            data9.map((items, key) => (
                                <h1 className=' text-2xl md:text-4xl text-yellow-300 py-5 px-10'>{items.title1}</h1>

                            ))
                        }
                    </div>

                    <div>
                        <h1 className='text-3xl md:text-6xl text-cyan-400 ' >Living-Non-living-Living-Non-living</h1>
                        {
                            data8.map((items, key) => (
                                <h1 className=' text-2xl md:text-4xl text-yellow-300 py-13 md:py-5 px-5'>{items.title1}</h1>

                            ))
                        }
                    </div>

                </div>

            </div>

            <div>
                <div className='text-6xl md:text-9xl text-red-600 text-center'>
                    <h1>THE GREATEST FUSION</h1>
                </div>
                <h1 className=' text-2xl text-cyan-300 text-center py-10'>soon to be uploaded</h1>

            </div>
            <div>
                <Logo />

            </div>
        </div>
    )
}
