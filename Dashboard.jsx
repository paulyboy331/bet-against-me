import React from 'react';
import { Trophy, Users, Zap, ShieldCheck, Wallet, ChevronRight } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-[#0a0c10] text-slate-100 font-sans antialiased pb-20">
      
      {/* 1. TOP NAV - "The Trust Layer" */}
      <nav className="flex justify-between items-center p-5 sticky top-0 bg-[#0a0c10]/80 backdrop-blur-md z-50 border-b border-slate-800/50">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 p-1.5 rounded-lg rotate-12 shadow-[0_0_15px_rgba(79,70,229,0.5)]">
            <Trophy size={22} className="text-white -rotate-12" />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase">Versus<span className="text-indigo-500">.</span></span>
        </div>
        <div className="flex items-center gap-3 bg-slate-900/80 border border-slate-700/50 pl-2 pr-4 py-1.5 rounded-2xl">
          <div className="bg-emerald-500/10 p-1 rounded-full"><Wallet size={16} className="text-emerald-400" /></div>
          <span className="font-bold text-sm">£1,240.50</span>
        </div>
      </nav>

      {/* 2. LIVE MATCH HERO - "The Engagement Hook" */}
      <section className="p-5">
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-indigo-950 rounded-[2.5rem] p-8 border border-white/5 shadow-2xl">
          <div className="absolute top-0 right-0 p-4">
            <span className="bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest animate-pulse">
              Live • 72'
            </span>
          </div>
          
          <div className="flex justify-between items-center mt-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/5 rounded-2xl mb-3 flex items-center justify-center border border-white/10 shadow-inner">
                <img src="https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg" className="w-10" alt="Arsenal" />
              </div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Arsenal</p>
              <p className="text-3xl font-black mt-1">2</p>
            </div>
            
            <div className="text-center">
               <div className="bg-white/5 px-4 py-1 rounded-full text-[10px] font-bold text-slate-500 mb-2">PREMIER LEAGUE</div>
               <div className="h-[1px] w-12 bg-slate-700 mx-auto"></div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/5 rounded-2xl mb-3 flex items-center justify-center border border-white/10 shadow-inner">
                <img src="https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg" className="w-10" alt="Man City" />
              </div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Man City</p>
              <p className="text-3xl font-black mt-1">1</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOCIAL FEED - "The Proof of Concept" */}
      <section className="px-5 mt-4">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-lg font-black uppercase tracking-tight">Active Challenges</h2>
          <span className="text-indigo-400 text-xs font-bold cursor-pointer hover:underline">View All</span>
        </div>

        <div className="space-y-3">
          {/* Challenge Item 1 */}
          <div className="group bg-slate-900/40 border border-slate-800/50 p-4 rounded-3xl flex items-center justify-between hover:bg-slate-800/40 transition-all cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img src="https://i.pravatar.cc/100?u=jack" className="w-12 h-12 rounded-2xl grayscale group-hover:grayscale-0 transition-all" alt="User" />
                <div className="absolute -bottom-1 -right-1 bg-indigo-600 border-2 border-[#0a0c10] w-5 h-5 rounded-full flex items-center justify-center">
                  <Zap size={10} className="text-white" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-sm">Jack wants to bet <span className="text-indigo-400">£20</span></h4>
                <p className="text-xs text-slate-500">Predicted: Arsenal to Win (Next Goal)</p>
              </div>
            </div>
            <button className="bg-white text-black h-10 px-5 rounded-xl font-black text-xs uppercase hover:bg-indigo-400 transition-colors">
              Accept
            </button>
          </div>

          {/* Challenge Item 2 */}
          <div className="bg-slate-900/40 border border-slate-800/50 p-4 rounded-3xl flex items-center justify-between opacity-70">
            <div className="flex items-center gap-4">
              <img src="https://i.pravatar.cc/100?u=sarah" className="w-12 h-12 rounded-2xl grayscale" alt="User" />
              <div>
                <h4 className="font-bold text-sm">Sarah wants to bet <span className="text-indigo-400">£10</span></h4>
                <p className="text-xs text-slate-500">Predicted: Draw (Full Time)</p>
              </div>
            </div>
            <div className="text-[10px] font-bold text-slate-600 uppercase">Matched</div>
          </div>
        </div>
      </section>

      {/* 4. COMPLIANCE FOOTER - "The Buyer's Safety Net" */}
      <section className="p-5 mt-6">
        <div className="bg-indigo-600/5 border border-indigo-500/20 rounded-3xl p-5 flex items-start gap-4">
          <ShieldCheck className="text-indigo-500 shrink-0" size={24} />
          <div>
            <h5 className="font-bold text-sm">Safe-Stake™ Protocol Active</h5>
            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
              All P2P stakes are held in high-security escrow. Result verification is automated via Tier-1 sports data providers. No house edge.
            </p>
          </div>
        </div>
      </section>

      {/* FIXED BOTTOM NAV */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-2 flex justify-around items-center shadow-2xl">
        <button className="p-3 bg-indigo-600 rounded-2xl text-white shadow-lg shadow-indigo-600/30">
          <Zap size={20} />
        </button>
        <button className="p-3 text-slate-400 hover:text-white transition-colors">
          <Users size={20} />
        </button>
        <button className="p-3 text-slate-400 hover:text-white transition-colors">
          <Trophy size={20} />
        </button>
      </div>

    </div>
  );
};

export default App;