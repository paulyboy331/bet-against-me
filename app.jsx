import React, { useState, useEffect } from 'react';
import { Trophy, Share2, Wallet } from 'lucide-react';

export default function BettingApp() {
  const [challenges, setChallenges] = useState([]);
  
  // Simulate fetching real-time match data
  const match = { id: "ars-mci", home: "Arsenal", away: "Man City", time: "LIVE 65'" };

  return (
    <div className="min-h-screen bg-black text-white p-4 font-sans">
      {/* Header */}
      <nav className="flex justify-between items-center mb-8 bg-slate-900 p-4 rounded-2xl">
        <div className="flex items-center gap-2">
          <Trophy className="text-yellow-500" />
          <span className="font-bold text-xl tracking-tight">P2P BET</span>
        </div>
        <div className="bg-slate-800 px-4 py-1 rounded-full flex items-center gap-2">
          <Wallet size={16} className="text-emerald-400" />
          <span className="font-mono">£140.00</span>
        </div>
      </nav>

      {/* Live Match Hero */}
      <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-3xl p-6 mb-6 border border-indigo-500/30">
        <div className="flex justify-between items-center mb-4">
          <span className="bg-red-600 px-2 py-0.5 rounded text-xs font-bold animate-pulse">LIVE</span>
          <span className="text-slate-400 text-sm">Premier League</span>
        </div>
        <div className="flex justify-around items-center text-center">
          <div>
            <div className="w-16 h-16 bg-slate-800 rounded-full mb-2 mx-auto"></div>
            <p className="font-bold">{match.home}</p>
          </div>
          <div className="text-3xl font-black italic">VS</div>
          <div>
            <div className="w-16 h-16 bg-slate-800 rounded-full mb-2 mx-auto"></div>
            <p className="font-bold">{match.away}</p>
          </div>
        </div>
      </div>

      {/* Active Challenges */}
      <h2 className="text-lg font-bold mb-4 px-2">Open Challenges</h2>
      <div className="space-y-4">
        {challenges.length === 0 ? (
          <div className="text-center py-10 border-2 border-dashed border-slate-800 rounded-3xl">
            <p className="text-slate-500">No active challenges. Start one!</p>
            <button className="mt-4 bg-indigo-600 px-6 py-2 rounded-xl font-bold">Create Bet</button>
          </div>
        ) : (
          challenges.map(bet => (
            <div key={bet.id} className="bg-slate-900 p-4 rounded-2xl flex justify-between items-center">
              <div>
                <p className="text-sm text-slate-400">{bet.challenger} wants to bet</p>
                <p className="font-bold">£{bet.amount} on {match.home}</p>
              </div>
              <button className="bg-emerald-500 px-4 py-2 rounded-xl font-bold text-sm">Accept</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}