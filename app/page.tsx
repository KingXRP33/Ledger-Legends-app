'use client';

import { useState } from 'react';
import Board from '@/components/Board';

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 text-white">
      <header className="border-b border-cyan-500/30 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-4xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              LEDGER LEGENDS
            </div>
            <span className="text-cyan-400 font-mono text-sm">XRPARMY EDITION</span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {!gameStarted ? (
          <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
            <h1 className="text-7xl font-black tracking-tighter mb-6 bg-gradient-to-br from-white to-cyan-300 bg-clip-text text-transparent">
              LEDGER LEGENDS
            </h1>
            <p className="text-2xl text-cyan-300 mb-12">XRPARMY Edition</p>

            <button
              onClick={() => setGameStarted(true)}
              className="px-16 py-6 text-2xl font-bold rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all"
            >
              INIZIA LA PARTITA
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-4xl font-bold text-center mb-10">Il tuo Board di Ledger Legends</h2>
            <Board />
          </div>
        )}
      </div>
    </main>
  );
}