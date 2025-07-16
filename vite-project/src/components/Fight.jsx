import React, { useState } from 'react';

import image1 from '../assets/images/hcm 090.jpg';
import image2 from '../assets/images/HCM 570.jpg';
import image3 from '../assets/images/hcm 901.jpg';
import image4 from '../assets/images/hcm 270.jpg';
import image6 from '../assets/images/hcm 701.jpg';
import image7 from '../assets/images/HCM - 170.jpg';
import image9 from '../assets/images/hcm 521.jpg';
import image10 from '../assets/images/hcm 211.jpg';
import image11 from '../assets/images/hcm 080.jpg';
import image12 from '../assets/images/hcm 008.jpg';
import image13 from '../assets/images/hcm 660.jpg';
import image14 from '../assets/images/hcm 180.jpg';
import image16 from '../assets/images/hcm 280.jpg';
import image17 from '../assets/images/hcm 421.jpg';
import image18 from '../assets/images/hcm 111.jpg';
import image19 from '../assets/images/hcm 190.jpg';

export default function Fight() {
  const [selectedList, setSelectedList] = useState([]);
  const [fightStarted, setFightStarted] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // current monster in modal
  const MAX = 2;

  const monsterData = {
    SPHINX: { img: image1, hp: 800, attacks: ['Super Punch', 'Super Roar', 'Killing grasp'], weaknesses: ['gold', 'blindness in dark', "can't bear hair pulling"] },
    ROCKMAN: { img: image2, hp: 500, attacks: ['regenerate after breaking', 'shape moulding', 'super bite'], weaknesses: ['water', 'very slow', 'thunder'] },
    TARDIHUMAN: { img: image3, hp: 1200, attacks: ['iron tentacle attack', 'poison tongue lick', 'can change size'], weaknesses: ['high temperature', 'chlorine', "its poison is in its tentacles"] },
    CYBRAIN: { img: image4, hp: 1500, attacks: ['laser beam', 'flying', 'can transfer consciousness'], weaknesses: ['water', 'hackable', 'has a switch off button'] },
    WEREWOLF: { img: image6, hp: 600, attacks: ['beast transformation', 'shadow attack', 'can turn others'], weaknesses: ['silver', 'mercury', 'weak on no-moon night'] },
    TERRAKA: { img: image7, hp: 600, attacks: ['vine whip', 'poisonous seed', 'earthquake'], weaknesses: ['fire', 'cannot see in day', 'eats grass weeds'] },
    VULTRIX: { img: image9, hp: 1000, attacks: ['wind slash', 'flying', 'tornado'], weaknesses: ['electricity', 'icy water', 'high pressure'] },
    PETRABYTE: { img: image10, hp: 1300, attacks: ['vine whip', 'immune to water & fire & fly', 'laser beam'], weaknesses: ['hackable', 'has switch off', "can't see at night"] },
    GORKON: { img: image11, hp: 700, attacks: ['gorilla smash', 'super clap', 'ground shock wave'], weaknesses: ['weak on full moon', 'fire', 'lead'] },
    SANDRAX: { img: image12, hp: 700, attacks: ['unbreakable', 'shape moulding', 'sand storm'], weaknesses: ['water', 'high winds', 'magnetic fields'] },
    TARDION: { img: image14, hp: 500, attacks: ['hug crush', 'spine shots', 'regenerate health'], weaknesses: ['extreme temperature', 'toxic chemicals', 'high frequency sound'] },
    FLARON: { img: image13, hp: 900, attacks: ['hide underground', 'poison gas', 'fireball'], weaknesses: ['small tail exposed', 'sand', 'immobile'] },
    TIGRIS: { img: image16, hp: 900, attacks: ['wind whip', 'earthquake', 'super smash'], weaknesses: ['fire', 'low stamina', 'ultrasound'] },
    OCULUS: { img: image19, hp: 2000, attacks: ['electric shock', 'super wave', 'indestructible'], weaknesses: ['extreme heat', 'limited land range', 'no brain – only anger'] },
    FLURTONE: { img: image18, hp: 1000, attacks: ['fireball', 'ranged attack', 'disguise as stone'], weaknesses: ['water', 'almost immobile', 'ego'] },
    PETROVIS: { img: image17, hp: 600, attacks: ['wind slash', 'super bite', 'tackle'], weaknesses: ['water', 'gold', 'thunder'] },
  };

  const allNames = Object.keys(monsterData);

  const toggleSelect = (name) => {
    if (selectedList.includes(name)) {
      setSelectedList(selectedList.filter((n) => n !== name));
      setFightStarted(false);
    } else if (selectedList.length < MAX) {
      setSelectedList([...selectedList, name]);
    }
    setActiveModal(null); // close modal
  };

  return (
    <div className="bg-black min-h-screen text-white p-8">
      <h1 className="text-5xl text-center mb-6">Choose your monsters</h1>
      <p className="text-center mb-6">{selectedList.length}/{MAX} selected</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {allNames.map((name) => {
          const isDisabled = !selectedList.includes(name) && selectedList.length === MAX;
          return (
            <button
              key={name}
              disabled={isDisabled}
              onClick={() => setActiveModal(name)}
              className={`py-3 px-4 rounded shadow ${
                selectedList.includes(name)
                  ? 'bg-gray-600'
                  : isDisabled
                  ? 'bg-gray-800'
                  : 'bg-yellow-800 hover:bg-yellow-700'
              }`}
            >
              {name}
            </button>
          );
        })}
      </div>

      {/* Modal */}
      {activeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-sm w-full text-center relative">
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setActiveModal(null)}
            >
              &times;
            </button>
            <img
              src={monsterData[activeModal].img}
              alt={activeModal}
              className="w-full h-auto mb-4 border-4 border-yellow-500 rounded"
            />
            <button
              onClick={() => toggleSelect(activeModal)}
              className={`px-4 py-2 rounded text-white ${
                selectedList.includes(activeModal)
                  ? 'bg-red-600 hover:bg-red-700'
                  : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              {selectedList.includes(activeModal) ? 'Deselect' : 'Select'}
            </button>
          </div>
        </div>
      )}

      {selectedList.length === MAX && (
        <div className="text-center mb-8">
          <p className="text-green-400 mb-4">{selectedList.join(' and ')} are selected.</p>
          <button
            onClick={() => setFightStarted(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded"
          >
            Ready to Fight
          </button>
        </div>
      )}

      {fightStarted && (
        <div className="mt-12 space-y-12">
          <h2 className="text-4xl text-center mb-8">Battle Preview</h2>
          <div className="flex  flex-col md:flex-row justify-center items-start gap-12">
            {selectedList.map((name) => {
              const m = monsterData[name];
              return (
                <div key={name} className="bg-gray-900 text-center p-6 rounded-lg shadow-lg w-full md:w-1/2">
                  <img src={m.img} alt={name} className="w-full h-auto rounded mb-4 border-4 border-yellow-500" />
                  <h3 className="text-3xl font-bold text-center mb-2">{name}</h3>
                  <p className="mb-4 text-xl text-red-500">HP: {m.hp} HEARTS</p>
                  <div className="mb-4">
                    <h4 className="text-2xl underline">ATTACKS:</h4>
                    <ul className="list-disc list-inside">
                      {m.attacks.map((a) => <li key={a}>{a}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-2xl underline">WEAKNESSES:</h4>
                    <ul className="list-disc list-inside">
                      {m.weaknesses.map((w) => <li key={w}>{w}</li>)}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
