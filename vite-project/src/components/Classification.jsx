import React from 'react'
import Logo from './Logo';

export default function Classification() {

  let data3 = [
    { title1: "Living-Living" },
    { title1: "Living-Non-living" },
    { title1: "Non-living-Non-living" },
  ];

  let data4 = [
    { title1: "Biotic-Biotic", title2: "Biotic-Abiotic", title3: "Abiotic-Abiotic" },
    { title1: "Biotic-Abiotic", title2: "Biotic-Technology", title3: "Technology-Technology" },
    { title1: " ", title2: "Abiotic-Technology", title3: "Abiotic-Technology" },
    { title1: " ", title2: "Abiotic-Abiotic", title3: "" }
  ];

  let data5 = [
    { title1: "Human-Animal", title2: "Animal-Plant",  },
    { title1: "Human-Microbe", title2: "Tree-Decomposer",  },
    { title1: "Animal-Microbe", title2: "Bird-Plant", }
  ];
  let data6 = [
    { title1: "Human-Stone", title2: "Bird-AI", title3: "Plant-AI ",title4 :"Tree-Fire"},
    { title1: "Human-Plant", title2: "Human-AI", title3: "Plant-Computer ",title4 :"Tree-Stone"},
    { title1: "Bird-Stone", title2: "Animal-AI", title3: "Tree-AI ",title4:"Tree-Water" },
  ];

  let data7 = [
    { title1: "Fire-Stone", title2: "Computer-AI", title3: "Plant-AI" },
    { title1: "Water-Stone", title2: "", title3: "Stone-AI" },
    { title1: "Fire-Water", title2: "", title3: "Water" },
  ];
  return (
    <div className=' bg-black py-20'>
      {
        <h1 className=' text-6xl text-center text-white'>E(Entity) TYPE OF HCM</h1>
      }
      <div className=' flex justify-around text-cyan-400 py-10 text-4xl'>
        {data3.map((item, key) => (
          <ul >
            <br />
            <li>{item.title1}</li>

          </ul>
        ))

        }
      </div>
      <div className=' py-5'>
        <div className=' text-white text-6xl flex justify-center items-center text-center'>
          <h1>N(Nature) TYPE OF HCM</h1>
        </div>
        <div >
          <ul className=' flex justify-around py-5' >
            <br />
            <div>
              <li className=' text-cyan-300 text-4xl' >Living-Living</li>
              <div className=' py-5 text-2xl '>
                {data4.map((item, key) => (
                  <div className=' text-yellow-300 py-2'>
                    <li>{item.title1}</li>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <li className=' text-cyan-300 text-4xl' >Living-Non-living</li>
              <div className=' py-5 text-2xl'>
                {data4.map((item, key) => (
                  <div className=' text-yellow-300 py-2'>
                    <li>{item.title2}</li>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <li className=' text-cyan-300 text-4xl' >Non-living-Non-living</li>
              <div className=' py-5 text-2xl'>
                {data4.map((item, key) => (
                  <div className=' text-yellow-300 py-2'>
                    <li>{item.title3}</li>
                  </div>
                ))}
              </div>
            </div>
          </ul>
        </div>
      </div>

      <div className=' py-5'>
        <div className=' text-white text-6xl flex justify-center items-center text-center'>
          <h1>S(Species) TYPE OF HCM</h1>
        </div>
        <div>
          <ul className=' text-cyan-300 text-5xl py-10'>
            <li>Living-Living</li>
            <div>
              <ul className=' flex justify-around py-5 '>
                <div>
                  <li className=' text-yellow-300 text-4xl'>Biotic-Biotic</li>
                  <div className=' text-orange-500 text-2xl px-5 py-2'>
                    {data5.map((item, key) => (
                      <div>
                        <ul>
                          <li>{item.title1}</li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <li className=' text-yellow-300 text-4xl'>Biotic-Abiotic</li>
                  <div className=' text-orange-500 text-2xl px-5 py-2'>
                    {data5.map((item, key) => (
                      <div>
                        <ul>
                          <li>{item.title2}</li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
               

              </ul>

            </div>
            <li>Living-Non-living</li>
            <div>
              <ul className=' flex justify-around py-5 '>
                <div>
                  <li className=' text-yellow-300 text-4xl'>Biotic-Abiotic</li>
                  <div className=' text-orange-500 text-2xl px-5 py-2'>
                    {data6.map((item, key) => (
                      <div>
                        <ul>
                          <li>{item.title1}</li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <li className=' text-yellow-300 text-4xl'>Biotic-Technology</li>
                  <div className=' text-orange-500 text-2xl px-5 py-2'>
                    {data6.map((item, key) => (
                      <div>
                        <ul>
                          <li>{item.title2}</li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <li className=' text-yellow-300 text-4xl'>Abiotic-Technology</li>
                  <div className=' text-orange-500 text-2xl py-2 px-5'>
                    {data6.map((item, key) => (
                      <div>
                        <ul>
                          <li>{item.title3}</li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <li className=' text-yellow-300 text-4xl'>Abiotic-Aboitic</li>
                  <div className=' text-orange-500 text-2xl py-2 px-5'>
                    {data6.map((item, key) => (
                      <div>
                        <ul>
                          <li>{item.title4}</li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </ul>

            </div>
            <li>Non-living-Non-living</li>
            <div>
              <ul className=' flex justify-around py-5 '>
                <div>
                  <li className=' text-yellow-300 text-4xl'>Abiotic-Abiotic</li>
                  <div className=' text-orange-500 text-2xl px-5 py-2'>
                    {data7.map((item, key) => (
                      <div>
                        <ul>
                          <li>{item.title1}</li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <li className=' text-yellow-300 text-4xl'>Technology-Technology</li>
                  <div className=' text-orange-500 text-2xl px-5 py-2'>
                    {data7.map((item, key) => (
                      <div>
                        <ul>
                          <li>{item.title2}</li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <li className=' text-yellow-300 text-4xl'>Abiotic-Technology</li>
                  <div className=' text-orange-500 text-2xl py-2 px-5'>
                    {data7.map((item, key) => (
                      <div>
                        <ul>
                          <li>{item.title3}</li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

              </ul>

            </div>

          </ul>
        </div>

      </div>
      <div>
        <Logo />

      </div>
    </div>
  )
}
