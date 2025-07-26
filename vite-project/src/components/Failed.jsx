import React, { useState } from 'react';
import failedImages from './FailedStack';
import MovingComponent from 'react-moving-text';
import image5 from '../assets/Failed_images/eyes.jpg';
import './Spin.css';

export default function Failed() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showTopDetail, setShowTopDetail] = useState(false); // 👈 new state for top image toggle

  const toggleCard = (index) => {
    setSelectedIndex(prev => (prev === index ? null : index));
  };

  const toggleTop = () => {
    setShowTopDetail(prev => !prev);
  };

  return (
    <div
      style={{
        backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/045/782/517/small/mysterious-forest-with-foggy-trees-at-night-a-haunting-natural-landscape-photo.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="text-center text-yellow-200 py-10 underline text-2xl md:text-7xl">
        {/* ✅ Top Image with Toggle */}
        <div className="flex justify-center">
          <div
            onClick={toggleTop}
            className="cursor-pointer hover:scale-110 transition-all duration-300 border-red-700 border-4 bg-black rounded-2xl h-55 w-45 md:h-100 md:w-80 spin-flip"
            style={{ boxShadow: '4px 4px 50px rgba(62, 242, 7, 0.943)' }}
          >
            {showTopDetail ? (
              <div className="text-sm md:text-3xl text-white p-6 animate-spin-slow">
                1 - He is the first person who got trapped. We were trying to fuse his DNA with a cheetah to make him fast and give him good vision.
              </div>
            ) : (
              <img className="h-55 w-45 md:h-90 md:w-80 py-10" src={image5} alt="eye" />
            )}
          </div>
        </div>

        {/* ✅ Image Grid */}
        <div className="grid grid-cols-2 py-10">
          {failedImages.map((item, index) => (
            <div className="flex justify-center py-5" key={index}>
              <MovingComponent
                type="swing"
                duration="6000ms"
                iteration="infinite"
                fillMode="none"
              >
                <div
                  onClick={() => toggleCard(index)}
                  className={`cursor-pointer flex justify-center items-center w-40 h-40 md:w-60 md:h-80 border-red-700 border-4 bg-black rounded-2xl text-white p-2 transition-all duration-500 hover:scale-105 spin-flip`}
                  style={{
                    boxShadow: '4px 4px 50px rgba(62, 242, 7, 0.943)',
                    overflow: 'hidden',
                  }}
                >
                  {selectedIndex === index ? (
                    <div className="text-sm md:text-lg text-center animate-spin-slow">
                      {item.detail}
                    </div>
                  ) : (
                    <img
                      className="w-full h-full object-cover rounded-2xl"
                      src={item.image}
                      alt={`failed-${index}`}
                    />
                  )}
                </div>
              </MovingComponent>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
