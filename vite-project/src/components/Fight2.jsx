import React, { useState, useRef } from 'react';


import './Fight2.css'

export default function Fight2() {
  const monsterData = {
    HUMOTARDILIXIAN: { img: 'https://res.cloudinary.com/dynodadq0/image/upload/v1757503069/hcm_871_vvdccd.jpg', hp: 5000, attacks: ['Super Roar', 'Regenerate after breaking', 'Poison tongue lick', 'Laser beam', 'Has metal body and can fly'], weaknesses: ['Has energy ball, which is protected inside the metal body'] },
    TERRAWOLFBYTE: { img: 'https://res.cloudinary.com/dynodadq0/image/upload/v1757503606/hcm_522_i66yvn.jpg', hp: 4500, attacks: ['big beast transformation', 'earthquake', 'tornado', 'lazer beam', 'have metal body and can fly'], weaknesses: ['Weakens from water'] },
    GORDRAXDIOZONE: { img: 'https://res.cloudinary.com/dynodadq0/image/upload/v1757503629/hcm_561_xefz7o.jpg', hp: 4200, attacks: ['Poison gas', 'Sand storm', 'Super clap', 'Spine shots', 'Regenerate health'], weaknesses: ['High radiation magnetic field'] },
    FLURTOTILUS: { img: 'https://res.cloudinary.com/dynodadq0/image/upload/v1757503677/hcm_371_iw4ptd.jpg', hp: 5500, attacks: ['fire gas', 'water punch', 'super roar', 'can fly', 'very hard rock attacks'], weaknesses: ['can not bear very high pressure'] },
  };

  const allNames = Object.keys(monsterData);
  const [selectedMonsters, setSelectedMonsters] = useState([]);
  const [fight1Winner, setFight1Winner] = useState(null);
  const [fight2Winner, setFight2Winner] = useState(null);
  const [currentFightMonsters, setCurrentFightMonsters] = useState([]);
  const [hpStatus, setHpStatus] = useState({});
  const [turn, setTurn] = useState(0);
  const [log, setLog] = useState([]);
  const [inFight, setInFight] =useState(false);
  const [stage, setStage] = useState(1);

  const [punching, setPunching] = useState(false);
  const [impactTarget, setImpactTarget] = useState(null);

  const fightRef = useRef(null);

  const toggleSelect = (name) => {
    if (stage !== 1) return;
    setSelectedMonsters(prev =>
      prev.includes(name) ? prev.filter(m=>m!==name)
                         : prev.length<2 ? [...prev, name] : prev
    );
  };

  const startFightWithMonsters = (monsters) => {
    setCurrentFightMonsters(monsters);
    setHpStatus({ [monsters[0]]: monsterData[monsters[0]].hp, [monsters[1]]: monsterData[monsters[1]].hp });
    setTurn(0); setLog([]); setInFight(true);
    setTimeout(()=>fightRef.current?.scrollIntoView({behavior:'smooth'}),100);
  };

  const startFight = () => { if (selectedMonsters.length===2) startFightWithMonsters(selectedMonsters); };

  const onFightEnd = (winner) => {
    setInFight(false);
    if (stage===1) {
      setFight1Winner(winner);
      const rem = allNames.filter(n=>!currentFightMonsters.includes(n));
      setTimeout(()=>{ setStage(2); startFightWithMonsters(rem); },1500);
    } else if (stage===2) {
      setFight2Winner(winner);
      setTimeout(()=>{ setStage(3); startFightWithMonsters([fight1Winner, winner]); },1500);
    } else {
      setLog(prev=>[...prev, `🏆 ${winner} wins the TOURNAMENT! 🏆`]);
    }
    setCurrentFightMonsters([]); setHpStatus({}); setTurn(0);
  };

  const handleAttack = (attacker, defender, attack) => {
    if (!inFight) return;
    setPunching({ attacker, defender });
    setTimeout(()=>{
      const damage = Math.floor(Math.random()*250)+250;
      const newHp = Math.max(hpStatus[defender]-damage, 0);
      setHpStatus(prev=>({...prev, [defender]: newHp}));
      setLog(prev=>[...prev, `${attacker} used ${attack} on ${defender} — ${damage} damage!`]);
      setImpactTarget(defender);
      setTimeout(()=>setImpactTarget(null),300);
      if (newHp<=0) {
        setLog(prev=>[...prev, `${defender} has been defeated!`]);
        setTimeout(()=>onFightEnd(attacker),1500);
      } else {
        setTurn(prev=>prev===0?1:0);
      }
      setPunching(false);
    },500);
  };

  const reselect = () => { if(stage===1) setSelectedMonsters([]); };
  const restart = () => {
    setSelectedMonsters([]); setFight1Winner(null); setFight2Winner(null);
    setCurrentFightMonsters([]); setHpStatus({}); setTurn(0); setLog([]);
    setInFight(false); setStage(1);
  };

  return (
    <div className="bg-black min-h-screen p-8 text-white relative">
      <h1 className="text-center text-5xl mb-8">4-Monster Tournament</h1>
      <div className="mb-8 text-center">
        {fight1Winner && <p>Fight 1 Winner: {fight1Winner}</p>}
        {fight2Winner && <p>Fight 2 Winner: {fight2Winner}</p>}
      </div>

      {!inFight && stage===1 && (
        <>
          <h2 className="text-3xl mb-6 text-center">Select 2 Monsters for Fight 1</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {allNames.map(name => {
              const m = monsterData[name];
              const selected = selectedMonsters.includes(name);
              return (
                <div key={name} className="flex flex-col items-center text-center">
                  <img src={m.img} alt={name}
                    className={`w-auto h-auto rounded-lg cursor-pointer border-4 ${selected?'border-red-600':'border-transparent'}`}
                    onClick={()=>toggleSelect(name)}
                    style={{ filter: stage!==1?'grayscale(1)':'none' }} />
                  <p className="mt-2 text-lg font-semibold">{name}</p>
                </div>
              );
            })}
          </div>
          {selectedMonsters.length===2 && (
            <div className="mb-6 md:max-w-4xl mx-auto bg-gray-900 p-4 md:p-6 rounded-lg">
              <h3 className="text-lg md:text-2xl mb-4 text-center">Selected Monsters Details</h3>
              <div className="flex justify-center md:gap-30 gap-4">
                {selectedMonsters.map(name=>{
                  const m=monsterData[name];
                  return (
                    <div key={name} className="bg-black text-white p-2 md:p-4 rounded shadow-lg w-1/2 md:w-auto flex flex-col items-center text-center">
                      <img src={m.img} alt={name} className="w-auto h-auto rounded mb-2" />
                      <h4 className="text-xs md:text-3xl font-bold mb-1">{name}</h4>
                      <p className="text-[10px] md:text-2xl"><strong>HP:</strong> {m.hp}</p>
                      <p className="mt-1 font-semibold text-[10px] md:text-2xl">Attacks:</p>
                      <ul className="list-disc list-inside mb-1 text-[10px] md:text-sm">
                        {m.attacks.map((a,i)=><li key={i}>{a}</li>)}
                      </ul>
                      <p className="mt-1 font-semibold text-[10px] md:text-2xl">Weaknesses:</p>
                      <ul className="list-disc list-inside text-[10px] md:text-sm">
                        {m.weaknesses.map((w,i)=><li key={i}>{w}</li>)}
                      </ul>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-4">
                <button onClick={reselect} className="bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded font-semibold">Reselect</button>
                <button onClick={startFight} disabled={selectedMonsters.length!==2}
                  className={`px-4 py-2 rounded font-semibold ${selectedMonsters.length===2?'bg-red-600 hover:bg-red-700':'bg-gray-600 cursor-not-allowed'}`}>
                  Start Fight
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {inFight && currentFightMonsters.length===2 && (
        <div ref={fightRef} className="max-w-5xl mx-auto bg-red-600 p-6 rounded-lg shadow-lg relative">
          <h2 className="text-center text-3xl mb-6">{stage===3?'Final Fight':stage===2?'Fight 2':'Fight 1'}</h2>
          <div className="flex justify-center gap-6 relative">
            {currentFightMonsters.map((name, idx) => {
              const m = monsterData[name];
              const hp = hpStatus[name];
              const attacker = turn===idx;
              const defender = currentFightMonsters[1-idx];
              const defenderHp = hpStatus[defender];
              return (
                <div key={name}
                  className={`bg-black text-white p-4 rounded-lg shadow-xl w-1/2 flex flex-col items-center ${impactTarget===name?'impact':''}`}>
                  <img src={m.img} alt={name} className="  md:w-70 md:h-70 rounded mb-3 border-4 border-red-700" />
                  <h3 className="md:text-xl font-bold mb-1">{name}</h3>
                  <p className="mb-2">HP: {hp}</p>
                  <div className="flex flex-col gap-2 w-full">
                    {m.attacks.map((attack,i)=>(
                      <button key={i} disabled={!attacker||defenderHp<=0}
                        onClick={()=>handleAttack(name, defender, attack)}
                        className={`px-3 py-2 rounded font-semibold w-full text-sm ${attacker?'bg-blue-600 hover:bg-blue-800':'bg-gray-600 text-gray-300'}`}>
                        {attack}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Punch animation */}
            {punching && (
              <div className="absolute top-20 left-0 right-0 mx-auto h-0 z-50">
                <div className="punch-effect"
                  style={{
                    left: punching.attacker===currentFightMonsters[0]?'35%':'65%',
                    '--dx': punching.attacker===currentFightMonsters[0]?'200px':'-200px',
                    '--dy':'40px',
                  }} />
              </div>
            )}
          </div>

          <div className="max-h-48 overflow-auto bg-black mt-6 p-4 rounded border border-red-700 text-sm">
            {log.map((e,i)=><p key={i}>{e}</p>)}
          </div>
        </div>
      )}

      {!inFight && stage===3 && log.some(l=>l.includes('wins the TOURNAMENT')) && (
        <div className="text-center mt-12">
          <h2 className="text-5xl text-center mb-6 text-green-500">
            🏆 Tournament Champion: {log.find(l=>l.includes('wins the TOURNAMENT')).split(' ')[1]} 🏆
          </h2>
          <button onClick={restart} className="bg-yellow-600 hover:bg-yellow-700 px-8 py-4 rounded text-xl font-bold">
            Restart Tournament
          </button>
        </div>
      )}
    </div>
  );
}
