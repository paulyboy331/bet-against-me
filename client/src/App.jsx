import React, { useState, useEffect } from 'react';
import { Trophy, Wallet, ShieldCheck, CheckCircle2, Loader2, Zap } from 'lucide-react';

export default function App() {
  const [bets, setBets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState(null);
  const [acceptedBets, setAcceptedBets] = useState([]);

  // Fetch from your live Render URL
  useEffect(() => {
    fetch('https://bet-against-me.onrender.com/api/bets')
      .then(res => res.json())
      .then(data => {
        setBets(data);
        setLoading(false);
      })
      .catch(err => console.error("Error loading bets:", err));
  }, []);

  const handleAccept = (id) => {
    setProcessingId(id);
    
    // Simulate a 1.5-second secure "Escrow" transaction
    setTimeout(() => {
      setProcessingId(null);
      setAcceptedBets([...acceptedBets, id]);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0a0c10] text-slate-100 font-sans p-4 md:p-8">
      {/* Header */}
      <header className="max-w-4xl mx-auto flex justify-between items-center mb-10">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Trophy className="text-white w-6 h-6" />
          </div>
          <h1 className="text-xl font-black tracking-tighter uppercase italic">Bet Against Me</h1>
        </div>
        <div className="flex items-center gap-4 bg-slate-900/50 p-2 px-4 rounded-full border border-slate-800">
          <Wallet className="w-4 h-4 text-blue-400" />
          <span className="font-mono font-bold text-blue-400">£250.00</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto space-y-6">
        {/* Live Match Hero */}
        <section className="bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-500/30 rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Live Now</span>
          </div>
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">Premier League</p>
          <div className="flex justify-between items-center">
            <div className="text-center">
              <p className="text-2xl font-bold">ARS</p>
              <p className="text-xs text-slate-400">Arsenal</p>
            </div>
            <div className="text-4xl font-black tracking-tighter px-6 bg-slate-950/50 rounded-xl border border-slate-800">
              2 - 1
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">MCI</p>
              <p className="text-xs text-slate-400">Man City</p>
            </div>
          </div>
        </section>

        {/* Challenges List */}
        <section>
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-500" /> Open Challenges
          </h2>
          
          <div className="grid gap-4">
            {loading ? (
              <div className="text-center py-10 text-slate-500">Connecting to secure pool...</div>
            ) : (
              bets.map(bet => (
                <div key={bet.id} className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex justify-between items-center hover:border-slate-700 transition-all">
                  <div>
                    <p className="text-xs text-blue-400 font-bold uppercase mb-1">Peer-to-Peer Bet</p>
                    <h3 className="text-lg font-bold">{bet.userName} <span className="text-slate-500 font-medium">bets</span> £{bet.amount}</h3>
                    <p className="text-slate-400 text-sm italic">"{bet.description}"</p>
                  </div>
                  
                  <div>
                    {acceptedBets.includes(bet.id) ? (
                      <div className="flex items-center gap-2 text-green-400 font-bold bg-green-400/10 px-4 py-2 rounded-xl border border-green-400/20">
                        <CheckCircle2 className="w-5 h-5" />
                        Confirmed
                      </div>
                    ) : (
                      <button
                        onClick={() => handleAccept(bet.id)}
                        disabled={processingId === bet.id}
                        className="bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-lg shadow-blue-900/20 flex items-center gap-2"
                      >
                        {processingId === bet.id ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Securing...
                          </>
                        ) : (
                          "Accept"
                        )}
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Footer / Trust Badge */}
        <footer className="pt-8 opacity-40 hover:opacity-100 transition-opacity">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-tighter">
            <ShieldCheck className="w-4 h-4 text-blue-500" />
            <span>Secure Peer-to-Peer Protocol 1.0 (Safe-Stake™)</span>
          </div>
        </footer>
      </main>
    </div>
  );
}