'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Board() {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [diceRoll, setDiceRoll] = useState<number | null>(null);

  const rollDice = () => {
    const roll = Math.floor(Math.random() * 12) + 2;
    setDiceRoll(roll);
    setCurrentPosition((prev) => (prev + roll) % 20);
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative w-full max-w-[920px] mx-auto">
        <Image 
          src="/board-ledger-legends.png" 
          alt="Ledger Legends Board"
          width={920}
          height={920}
          className="rounded-3xl shadow-2xl border-4 border-cyan-500/30"
          priority
        />

        <div 
          className="absolute w-10 h-10 bg-yellow-400 rounded-full border-4 border-white shadow-2xl flex items-center justify-center text-2xl transition-all duration-500"
          style={{
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) rotate(${currentPosition * 18}deg) translate(340px)`,
          }}
        >
          👑
        </div>
      </div>

      <div className="bg-black/70 border border-cyan-500/50 rounded-3xl p-8 text-center max-w-md">
        <p className="text-gray-400 mb-2">Posizione attuale</p>
        <p className="text-5xl font-bold text-cyan-400 mb-6">{currentPosition}</p>

        {diceRoll && (
          <p className="text-2xl mb-6">Hai tirato: <span className="text-yellow-400 font-bold">{diceRoll}</span></p>
        )}

        <button
          onClick={rollDice}
          className="w-full py-5 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold text-xl rounded-2xl hover:scale-105 transition-all"
        >
          🎲 LANCIA I DADI
        </button>
      </div>
    </div>
  );
}