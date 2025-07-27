import React, { useState, useRef, useEffect } from 'react';

import image5 from '../assets/images/hcm 871.jpg';
import image8 from '../assets/images/hcm 522.jpg';
import image15 from '../assets/images/hcm 561.jpg';
import image20 from '../assets/images/hcm 371.jpg';

export default function Fight2() {
  const monsterData = {
    HUMOTARDILIXIAN: {
      img: image5,
      hp: 5000,
      attacks: [
        'Super Roar',
        'Regenerate after breaking',
        'Poison tongue lick',
        'Laser beam',
        'Has metal body and can fly',
      ],
      weaknesses: ['Has energy ball, which is protected inside the metal body'],
    },
    TERRAWOLFBYTE: {
      img: image8,
      hp: 4500,
      attacks: [
        'big beast transformation',
        'earthquake',
        'tornado',
        'lazer beam',
        'have metal body and can fly',
      ],
      weaknesses: ['Weakens from water'],
    },
    GORDRAXDIOZONE: {
      img: image15,
      hp: 4200,
      attacks: ['Poison gas', 'Sand storm', 'Super clap', 'Spine shots', 'Regenerate health'],
      weaknesses: ['High radiation magnetic field'],
    },
    FLURTOTILUS: {
      img: image20,
      hp: 5500,
      attacks: ['fire gas', 'water punch', 'super roar', 'can fly', 'very hard rock attacks'],
      weaknesses: ['can not bear very high pressure'],
    },
  };

  const allNames = Object.keys(monsterData);

  // Selection states:
  const [selectedMonsters, setSelectedMonsters] = useState([]);
  // Fights results
  const [fight1Winner, setFight1Winner] = useState(null);
  const [fight2Winner, setFight2Winner] = useState(null);

  // Current fight state
  const [currentFightMonsters, setCurrentFightMonsters] = useState([]);
  const [hpStatus, setHpStatus] = useState({});
  const [turn, setTurn] = useState(0);
  const [log, setLog] = useState([]);
  const [inFight, setInFight] = useState(false);

  // Stage state: 1=select fight 1, 2=fight 1 done & fight 2 auto start, 3=final fight auto start
  const [stage, setStage] = useState(1);

  const fightRef = useRef(null);

  // Toggle selection for fight 1 only (max 2)
  const toggleSelect = (name) => {
    if (stage !== 1) return; // only selectable in stage 1
    if (selectedMonsters.includes(name)) {
      setSelectedMonsters(selectedMonsters.filter((m) => m !== name));
    } else if (selectedMonsters.length < 2) {
      setSelectedMonsters([...selectedMonsters, name]);
    }
  };

  // Start a fight with given monsters
  const startFightWithMonsters = (monsters) => {
    setCurrentFightMonsters(monsters);
    setHpStatus({
      [monsters[0]]: monsterData[monsters[0]].hp,
      [monsters[1]]: monsterData[monsters[1]].hp,
    });
    setTurn(0);
    setLog([]);
    setInFight(true);
    setTimeout(() => {
      fightRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Start fight 1 after user selects 2 monsters
  const startFight = () => {
    if (selectedMonsters.length !== 2) return;
    startFightWithMonsters(selectedMonsters);
  };

  // After fight ends, automatically move to next stage/fight
  const onFightEnd = (winner) => {
    setInFight(false);

    if (stage === 1) {
      setFight1Winner(winner);

      // Auto-select remaining 2 monsters for fight 2 and start fight 2
      const fight1Set = new Set(currentFightMonsters);
      const remaining = allNames.filter((name) => !fight1Set.has(name));
      setTimeout(() => {
        setStage(2);
        startFightWithMonsters(remaining);
      }, 1500);
    } else if (stage === 2) {
      setFight2Winner(winner);

      // After fight 2 ends, start final fight with winners
      setTimeout(() => {
        setStage(3);
        startFightWithMonsters([fight1Winner, winner]);
      }, 1500);
    } else if (stage === 3) {
      // Tournament finished
      setLog((prev) => [...prev, `🏆 ${winner} wins the TOURNAMENT! 🏆`]);
    }

    setCurrentFightMonsters([]);
    setHpStatus({});
    setTurn(0);
  };

  // Handle attacks during fight
  const handleAttack = (attacker, defender, attack) => {
    if (!inFight) return;

    const damage = Math.floor(Math.random() * 250) + 250;
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

      setTimeout(() => {
        onFightEnd(attacker);
      }, 1500);
    } else {
      setTurn((prev) => (prev === 0 ? 1 : 0));
    }
  };

  // Reselect monsters before starting fight 1
  const reselect = () => {
    if (stage !== 1) return;
    setSelectedMonsters([]);
  };

  // Restart the whole tournament
  const restart = () => {
    setSelectedMonsters([]);
    setFight1Winner(null);
    setFight2Winner(null);
    setCurrentFightMonsters([]);
    setHpStatus({});
    setTurn(0);
    setLog([]);
    setInFight(false);
    setStage(1);
  };

  // UI disabled monsters for selection: only allow in stage 1
  const disabledForSelection = (name) => stage !== 1;

  return (
    <div className="bg-black min-h-screen p-8 text-white">
      <h1 className="text-center text-5xl mb-8">4-Monster Tournament</h1>

      {/* Show winners */}
      <div className="mb-8 text-center">
        {fight1Winner && <p className="mb-1">Fight 1 Winner: {fight1Winner}</p>}
        {fight2Winner && <p>Fight 2 Winner: {fight2Winner}</p>}
      </div>

      {/* Selection Stage */}
      {!inFight && stage === 1 && (
        <>
          <h2 className="text-3xl mb-6 text-center">
            Select 2 Monsters for Fight 1
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {allNames.map((name) => {
              const m = monsterData[name];
              const selected = selectedMonsters.includes(name);
              return (
                <div key={name} className="flex flex-col items-center text-center">
                  <img
                    src={m.img}
                    alt={name}
                    className={`w-48 h-auto rounded-lg cursor-pointer border-4 ${selected ? 'border-red-600' : 'border-transparent'
                      }`}
                    onClick={() => toggleSelect(name)}
                    style={{ filter: disabledForSelection(name) ? 'grayscale(1)' : 'none' }}
                  />
                  <p className="mt-2 text-lg font-semibold">{name}</p>
                </div>
              );
            })}
          </div>


          {/* Show selected monsters details */}
          {selectedMonsters.length === 2 && (
            <div className="mb-6 md:max-w-4xl mx-auto bg-gray-900 p-4 md:p-6 rounded-lg">
              <h3 className="text-lg md:text-2xl mb-4 text-center text-white">
                Selected Monsters Details
              </h3>

              {/* Side-by-side layout that fits mobile without scrolling */}
              <div className="flex justify-center md:gap-30 gap-4">
                {selectedMonsters.map((name) => {
                  const m = monsterData[name];
                  return (
                    <div
                      key={name}
                      className="bg-black text-white p-2 md:p-4 rounded shadow-lg w-1/2 md:w-100  flex flex-col items-center text-center"
                    >
                      <img
                        src={m.img}
                        alt={name}
                        className="w-16 md:w-50 md:h-50 h-auto rounded mb-2"
                      />
                      <h4 className="text-xs md:text-3xl font-bold mb-1 px-2">{name}</h4>
                      <p className="text-[10px] md:text-2xl">
                        <strong>HP:</strong> {m.hp}
                      </p>
                      <p className="mt-1 font-semibold text-[10px] md:text-2xl">Attacks:</p>
                      <ul className="list-disc list-inside mb-1 text-[10px] md:text-sm">
                        {m.attacks.map((a, i) => (
                          <li key={i} className="break-words">{a}</li>
                        ))}
                      </ul>
                      <p className="mt-1 font-semibold text-[10px] md:text-2xl">Weaknesses:</p>
                      <ul className="list-disc list-inside text-[10px] md:text-sm">
                        {m.weaknesses.map((w, i) => (
                          <li key={i} className="break-words">{w}</li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              {/* Buttons */}
              <div className="mt-4 md:mt-6 flex flex-wrap justify-center gap-3 md:gap-6">
                <button
                  onClick={reselect}
                  className="bg-yellow-600 hover:bg-yellow-700 px-3 py-2 md:px-6 md:py-3 rounded font-semibold text-white text-xs md:text-base"
                >
                  Reselect Monsters
                </button>
                <button
                  onClick={startFight}
                  disabled={selectedMonsters.length !== 2}
                  className={`px-3 py-2 md:px-6 md:py-3 rounded font-semibold text-white text-xs md:text-base ${selectedMonsters.length === 2
                      ? 'bg-red-600 hover:bg-red-700'
                      : 'bg-gray-600 cursor-not-allowed'
                    }`}
                >
                  Start Fight
                </button>
              </div>
            </div>
          )}

        </>
      )}

      {/* Fight Stage */}
      {inFight && currentFightMonsters.length === 2 && (
        <div
          ref={fightRef}
          className="max-w-5xl mx-auto bg-red-600 p-4 md:p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-center text-2xl md:text-4xl mb-6 text-white">
            {stage === 3
              ? 'Final Fight'
              : stage === 2
                ? 'Fight 2'
                : 'Fight 1'}
          </h2>

          <div className="flex justify-center gap-4 md:gap-12">
            {currentFightMonsters.map((name, idx) => {
              const m = monsterData[name];
              const hp = hpStatus[name];
              const attacker = turn === idx;
              const defender = currentFightMonsters[1 - idx];
              const defenderHp = hpStatus[defender];

              return (
                <div
                  key={name}
                  className="bg-black text-white p-3 md:p-6 rounded-lg shadow-xl w-1/2 max-w-[160px] md:max-w-sm flex flex-col items-center"
                >
                  <img
                    src={m.img}
                    alt={name}
                    className="w-20 md:w-40 h-auto rounded mb-2 md:mb-4 border-4 border-red-700"
                  />
                  <h3 className=" text-sm md:text-2xl font-bold mb-1 md:mb-2 text-center">
                    {name}
                  </h3>
                  <p className="mb-2 text-sm md:text-lg">HP: {hp}</p>
                  <div className="flex flex-col gap-1 md:gap-2 w-full">
                    {m.attacks.map((attack, i) => (
                      <button
                        key={i}
                        disabled={!attacker || defenderHp <= 0}
                        onClick={() => handleAttack(name, defender, attack)}
                        className={`px-2 py-1 md:px-4 md:py-2 text-xs md:text-base rounded font-semibold transition w-full ${attacker
                          ? 'bg-blue-600 hover:bg-blue-900 text-white cursor-pointer'
                          : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                          }`}
                      >
                        {attack}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className="max-h-48 overflow-auto bg-black mt-6 md:mt-8 p-3 md:p-4 rounded border border-red-700 text-left text-white text-sm md:text-base"
            aria-live="polite"
          >
            {log.map((entry, idx) => (
              <p key={idx}>{entry}</p>
            ))}
          </div>
        </div>
      )}


      {/* Tournament winner and restart */}
      {!inFight &&
        stage === 3 &&
        log.some((line) => line.includes('wins the TOURNAMENT')) && (
          <div className="max-w-4xl mx-auto text-center mt-12">
            <h2 className="text-5xl mb-6 text-green-500">
              🏆 Tournament Champion:{' '}
              {log.find((line) => line.includes('wins the TOURNAMENT')).split(' ')[1]} 🏆
            </h2>
            <button
              onClick={restart}
              className="bg-yellow-600 hover:bg-yellow-700 px-8 py-4 rounded text-xl text-black font-bold"
            >
              Restart Tournament
            </button>
          </div>
        )}
    </div>
  );
}
