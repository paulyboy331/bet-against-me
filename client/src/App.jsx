import React, { useState, useEffect } from 'react';
// We use Lucide icons for the "Logo" look
import { Trophy, Wallet, ShieldCheck } from 'lucide-react';

export default function App() {
  const [bets, setBets] = useState([]);

  // Fetch bets from the backend
  useEffect(() => {
    fetch('https://bet-against-me.onrender.com/api/bets')
      .then(res => res.json())
      .then(data => setBets(data));
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0c10] text-slate-100 font-sans pb-20">
      {/* NAV */}
      <nav className="flex justify-between items-center p-5 sticky top-0 bg-[#0a0c10]/80 backdrop-blur-md z-50 border-b border-slate-800/50">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 p-1.5 rounded-lg shadow-[0_0_15px_rgba(79,70,229,0.5)]">
            <Trophy size={22} className="text-white" />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase underline decoration-indigo-500">Bet Against Me</span>
        </div>
        <div className="bg-slate-900 border border-slate-700 pl-2 pr-4 py-1.5 rounded-2xl flex items-center gap-2">
          <Wallet size={16} className="text-emerald-400" />
          <span className="font-bold text-sm">£1,240.50</span>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="p-5">
        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-[2.5rem] p-8 border border-white/5 shadow-2xl">
          <div className="flex justify-between items-center">
            <div className="text-center">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Arsenal</p>
              <p className="text-3xl font-black mt-1">2</p>
            </div>
            <div className="text-center">
               <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-[10px] font-black animate-pulse">LIVE 72'</span>
            </div>
            <div className="text-center">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Man City</p>
              <p className="text-3xl font-black mt-1">1</p>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="px-5 mt-4">
        <h2 className="text-lg font-black uppercase mb-4">Live Challenges</h2>
        <div className="space-y-3">
          {bets.map(bet => (
            <div key={bet.id} className="bg-slate-900/40 border border-slate-800 p-4 rounded-3xl flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm">{bet.challenger} bets <span className="text-indigo-400">£{bet.amount}</span></h4>
                <p className="text-xs text-slate-500">Pick: {bet.prediction}</p>
              </div>
              <button className="bg-white text-black px-5 py-2 rounded-xl font-black text-xs uppercase hover:bg-indigo-400">
                Accept
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="p-5 mt-6">
        <div className="bg-indigo-600/5 border border-indigo-500/20 rounded-3xl p-5 flex items-start gap-4">
          <ShieldCheck className="text-indigo-500" size={24} />
          <div>
            <h5 className="font-bold text-sm italic">Safe-Stake™ Protocol</h5>
            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
              18+ Only. P2P stakes are held in secure escrow. Fully compliant with 2026 UKGC Standards.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}