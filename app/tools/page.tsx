"use client";

import { useMemo, useState } from "react";

function n(v: string) { return Number(v || 0); }

export default function ToolsPage() {
  const [account, setAccount] = useState("10000");
  const [riskPct, setRiskPct] = useState("1");
  const [entry, setEntry] = useState("100");
  const [sl, setSl] = useState("95");
  const [tp, setTp] = useState("110");
  const [capital, setCapital] = useState("1000");
  const [profitPct, setProfitPct] = useState("5");
  const [periods, setPeriods] = useState("12");

  const calc = useMemo(() => {
    const riskAmount = n(account) * (n(riskPct) / 100);
    const stopDistance = Math.abs(n(entry) - n(sl));
    const positionSize = stopDistance > 0 ? riskAmount / stopDistance : 0;
    const rewardDistance = Math.abs(n(tp) - n(entry));
    const rr = stopDistance > 0 ? rewardDistance / stopDistance : 0;
    const pnlAtTp = positionSize * rewardDistance;
    const pnlAtSl = positionSize * stopDistance;
    const compound = n(capital) * Math.pow(1 + n(profitPct) / 100, n(periods));
    return { riskAmount, positionSize, rr, pnlAtTp, pnlAtSl, compound };
  }, [account, riskPct, entry, sl, tp, capital, profitPct, periods]);

  return <main className="mx-auto max-w-6xl px-4 py-14">
    <h1 className="text-4xl font-black">Trading Calculators</h1>
    <p className="mt-3 text-slate-300">Practice risk management before entering any trade. These tools are educational only.</p>

    <div className="mt-8 grid gap-6 lg:grid-cols-2">
      <section className="card">
        <h2 className="text-2xl font-bold">Position Size & Risk Reward</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <input className="input" value={account} onChange={(e)=>setAccount(e.target.value)} placeholder="Account balance" />
          <input className="input" value={riskPct} onChange={(e)=>setRiskPct(e.target.value)} placeholder="Risk %" />
          <input className="input" value={entry} onChange={(e)=>setEntry(e.target.value)} placeholder="Entry price" />
          <input className="input" value={sl} onChange={(e)=>setSl(e.target.value)} placeholder="Stop loss" />
          <input className="input" value={tp} onChange={(e)=>setTp(e.target.value)} placeholder="Take profit" />
        </div>
        <div className="mt-6 grid gap-3 rounded-xl border border-slate-800 bg-slate-950 p-4 text-slate-200">
          <p>Risk Amount: <b className="text-green-300">${calc.riskAmount.toFixed(2)}</b></p>
          <p>Suggested Position Size: <b className="text-green-300">{calc.positionSize.toFixed(4)}</b> units</p>
          <p>Risk Reward Ratio: <b className="text-green-300">1 : {calc.rr.toFixed(2)}</b></p>
          <p>Possible TP Profit: <b className="text-green-300">${calc.pnlAtTp.toFixed(2)}</b></p>
          <p>Possible SL Loss: <b className="text-red-300">${calc.pnlAtSl.toFixed(2)}</b></p>
        </div>
      </section>

      <section className="card">
        <h2 className="text-2xl font-bold">Compounding Calculator</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <input className="input" value={capital} onChange={(e)=>setCapital(e.target.value)} placeholder="Starting capital" />
          <input className="input" value={profitPct} onChange={(e)=>setProfitPct(e.target.value)} placeholder="Profit % per period" />
          <input className="input" value={periods} onChange={(e)=>setPeriods(e.target.value)} placeholder="Number of periods" />
        </div>
        <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-slate-300">Estimated final balance</p>
          <p className="mt-2 text-4xl font-black text-green-300">${calc.compound.toFixed(2)}</p>
        </div>
      </section>
    </div>

    <p className="mt-8 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-200">Trading involves high risk. Never risk money you cannot afford to lose. Use proper stop loss and risk management.</p>
  </main>;
}
