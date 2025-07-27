import React, { useState, useRef } from 'react';

import image1 from '../assets/images/hcm 090.jpg'
import image2 from '../assets/images/HCM 570.jpg'
import image3 from '../assets/images/HCM 901.jpg'
import image4 from '../assets/images/HCM 270.jpg'
import image5 from '../assets/images/hcm 871.jpg'
import image6 from '../assets/images/hcm 701.jpg'
import image7 from '../assets/images/HCM - 170.jpg'
import image8 from '../assets/images/hcm 522.jpg'
import image9 from '../assets/images/hcm 521.jpg'
import image10 from '../assets/images/hcm 211.jpg'
import image11 from '../assets/images/hcm 080.jpg'
import image12 from '../assets/images/hcm 008.jpg'
import image13 from '../assets/images/hcm 660.jpg'
import image14 from '../assets/images/hcm 180.jpg'
import image15 from '../assets/images/hcm 561.jpg'
import image16 from '../assets/images/hcm 280.jpg'
import image17 from '../assets/images/hcm 421.jpg'
import image18 from '../assets/images/hcm 111.jpg'
import image19 from '../assets/images/hcm 190.jpg'
import image20 from '../assets/images/hcm 371.jpg'

export default function Fight() {
  const [selectedList, setSelectedList] = useState([]);
  const [fightStarted, setFightStarted] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [inFight, setInFight] = useState(false);
  const [turn, setTurn] = useState(0);
  const [hpStatus, setHpStatus] = useState({});
  const [log, setLog] = useState([]);
  const MAX = 2;

  const previewRef = useRef(null);
  const fightRef = useRef(null);

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
    TARDION: { img: image14, hp: 500, attacks: ['hug crush', 'spine shots', 'ground attack'], weaknesses: ['extreme temperature', 'toxic chemicals', 'high frequency sound'] },
    FLARON: { img: image13, hp: 900, attacks: ['hide underground', 'poison gas', 'fireball'], weaknesses: ['small tail exposed', 'sand', 'immobile'] },
    TIGRIS: { img: image16, hp: 900, attacks: ['wind whip', 'earthquake', 'super smash'], weaknesses: ['fire', 'low stamina', 'ultrasound'] },
    OCULUS: { img: image19, hp: 1700, attacks: ['electric shock', 'super wave', 'indestructible'], weaknesses: ['extreme heat', 'limited land range', 'no brain – only anger'] },
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
    setActiveModal(null);
  };

  const startBattle = () => {
    const initialHp = {
      [selectedList[0]]: monsterData[selectedList[0]].hp,
      [selectedList[1]]: monsterData[selectedList[1]].hp,
    };
    setHpStatus(initialHp);
    setInFight(true);
    setFightStarted(false);
    setLog([]);
    setTurn(0);

    setTimeout(() => {
      fightRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleAttack = (attacker, defender, attack) => {
    const damage = Math.floor(Math.random() * 200) + 50;
    const newHp = Math.max(hpStatus[defender] - damage, 0);

    setHpStatus((prev) => ({
      ...prev,
      [defender]: newHp,
    }));

    setLog((prev) => [
      ...prev,
      `${attacker} used ${attack} on ${defender} — ${damage} damage!`,
    ]);

    if (newHp <= 0) {
      setLog((prev) => [...prev, `${defender} has been defeated!`]);
    } else {
      setTurn((prev) => (prev === 0 ? 1 : 0));
    }
  };

  const restartGame = () => {
    setSelectedList([]);
    setFightStarted(false);
    setActiveModal(null);
    setInFight(false);
    setTurn(0);
    setHpStatus({});
    setLog([]);
  };

  return (
    <div className="bg-black min-h-screen text-white p-8">
      <h1 className="text-5xl text-center mb-6">Choose your monsters</h1>
      <p className="text-center mb-6 ">{selectedList.length}/{MAX} selected</p>

      <div className="grid grid-cols-2  text-black md:grid-cols-4 gap-4 mb-6">
        {allNames.map((name) => {
          const isDisabled = !selectedList.includes(name) && selectedList.length === MAX;
          return (
            <button
              key={name}
              disabled={isDisabled}
              onClick={() => setActiveModal(name)}
              className={`py-3 px-4 hover:scale-105 rounded shadow  ${selectedList.includes(name)
                ? 'bg-cyan-300'
                : isDisabled
                  ? 'bg-red-500'
                  : 'bg-green-400 hover:bg-green-500'
                }`}
            >
              {name}
            </button>
          );
        })}
      </div>

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
              className={`px-4 py-2 rounded text-white ${selectedList.includes(activeModal)
                ? 'bg-red-600 hover:bg-red-700'
                : 'bg-green-600 hover:bg-green-700'
                }`}
            >
              {selectedList.includes(activeModal) ? 'Deselect' : 'Select'}
            </button>
          </div>
        </div>
      )}

      {selectedList.length === MAX && !inFight && (
        <div className="text-center mb-8">
          <p className="text-green-400 mb-4">{selectedList.join(' and ')} are selected.</p>
          <div className=' flex justify-center gap-2'>
            <button
              onClick={() => {
                setFightStarted(true);
                setTimeout(() => {
                  previewRef.current?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="bg-red-600  hover:bg-red-700 text-white px-6 py-3 rounded"
            >
              Ready to Fight
            </button>
            <button
              onClick={restartGame}
              className="bg-yellow-600  hover:bg-yellow-700 text-white px-6 py-3 rounded"
            >
              Select again
            </button>
          </div>
        </div>
      )}

{fightStarted && !inFight && (
  <div ref={previewRef} className="mt-12 space-y-12 px-4">
    <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-8">Battle Preview</h2>

    <div className="flex flex-row flex-wrap justify-center items-start gap-4">
      {selectedList.map((name) => {
        const m = monsterData[name];
        return (
          <div
            key={name}
            className="w-[45%] sm:w-[40%] md:w-1/2 lg:w-1/3 
                       bg-gradient-to-r from-green-400 via-black to-blue-600 
                       hover:from-blue-600 hover:via-black hover:to-green-400 
                       text-center p-4 rounded-lg shadow-lg break-words"
          >
            <div className="flex justify-center">
              <img
                src={m.img}
                alt={name}
                className="w-full h-auto max-w-[100px] sm:max-w-[120px] rounded mb-4 border-4 border-yellow-500"
              />
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-2 break-words">
              {name}
            </h3>

            <p className="mb-3 text-sm sm:text-base md:text-lg text-red-500 break-words">
              HP: {m.hp} HEARTS
            </p>

            <div className="mb-3 text-left">
              <h4 className="text-base sm:text-lg underline">ATTACKS:</h4>
              <ul className="list-disc list-inside text-sm sm:text-base break-words">
                {m.attacks.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>

            <div className="text-left">
              <h4 className="text-base sm:text-lg underline">WEAKNESSES:</h4>
              <ul className="list-disc list-inside text-sm sm:text-base break-words">
                {m.weaknesses.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>

    <div className="text-center flex flex-col sm:flex-row justify-center gap-4">
      <button
        onClick={startBattle}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 mt-6 rounded text-sm sm:text-base"
      >
        Start Fight
      </button>
      <button
        onClick={restartGame}
        className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 mt-6 rounded text-sm sm:text-base"
      >
        Select again
      </button>
    </div>
  </div>
)}


   {inFight && (
  <div ref={fightRef} className="mt-12 text-center px-4">
    <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6">Turn-Based Fight</h2>

    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {selectedList.map((name) => {
        const m = monsterData[name];
        const opponent = selectedList[turn === 0 ? 1 : 0];
        return (
          <div
            key={name}
            className="w-[45%] sm:w-[40%] md:w-1/2 lg:w-1/3
                       bg-gradient-to-r from-green-400 via-black to-red-600 
                       hover:from-red-600 hover:via-black hover:to-green-400 
                       p-4 rounded-lg break-words"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 break-words">
              {name}
            </h3>
            <p className="text-sm sm:text-base text-red-400 mb-2 break-words">
              HP: {hpStatus[name]} / {m.hp}
            </p>
            <img
              src={m.img}
              alt={name}
              className="w-full h-auto max-w-[120px] mx-auto rounded mb-4 border-4 border-yellow-500"
            />

            {/* Only show attack buttons for the current fighter */}
            {turn === selectedList.indexOf(name) &&
              hpStatus[selectedList[0]] > 0 &&
              hpStatus[selectedList[1]] > 0 && (
                <div>
                  <p className="text-sm sm:text-base mb-2">Choose an attack:</p>
                  <div className="space-y-2">
                    {m.attacks.map((attack) => (
                      <button
                        key={attack}
                        onClick={() => handleAttack(name, opponent, attack)}
                        className="text-sm sm:text-base bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded block w-full break-words"
                      >
                        {attack}
                      </button>
                    ))}
                  </div>
                </div>
              )}
          </div>
        );
      })}
    </div>

    {/* Action buttons */}
    <div className="flex flex-col sm:flex-row justify-center gap-4 py-4">
      <button
        onClick={startBattle}
        className="bg-cyan-400 hover:bg-cyan-600 text-white px-6 py-3 rounded text-sm sm:text-base"
      >
        Start battle again
      </button>
      <button
        onClick={restartGame}
        className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded text-sm sm:text-base"
      >
        Select again
      </button>
    </div>

    {/* Battle Log */}
    <div className="bg-gradient-to-r from-blue-600 via-black to-red-600 hover:from-red-600 hover:via-white hover:text-black hover:to-blue-600 p-4 rounded-lg max-w-xl mx-auto text-left text-sm sm:text-base break-words">
      <h4 className="text-base sm:text-lg text-center mb-2 underline">Battle Log</h4>
      <ul className="list-disc list-inside space-y-1">
        {log.map((entry, i) => (
          <li key={i}>{entry}</li>
        ))}
      </ul>
    </div>

    {/* Winner announcement */}
    {(hpStatus[selectedList[0]] === 0 || hpStatus[selectedList[1]] === 0) && (
      <div className="mt-6">
        <h2 className="text-2xl sm:text-3xl text-green-400 mb-4">
          {hpStatus[selectedList[0]] === 0
            ? `${selectedList[1]} wins!`
            : `${selectedList[0]} wins!`}
        </h2>
        <button
          onClick={restartGame}
          className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded text-sm sm:text-base"
        >
          Restart
        </button>
      </div>
    )}
  </div>
)}

    </div>
  );
}
