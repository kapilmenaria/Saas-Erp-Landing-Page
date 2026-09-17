"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  CreditCard,
  Building2,
  ShieldCheck,
  Globe2,
  CheckCircle2,
  BarChart3,
} from "lucide-react";

interface BankBalance {
  bank: string;
  currency: string;
  balance: string;
  hedgingCoverage: string;
  liquidityStatus: "Optimal Reserves" | "Capital Allocated";
}

const initialBalances: BankBalance[] = [
  { bank: "JPMorgan Treasury", currency: "USD", balance: "$1,420,500", hedgingCoverage: "100% Fully Hedged", liquidityStatus: "Optimal Reserves" },
  { bank: "Barclays Corporate", currency: "GBP", balance: "£680,200", hedgingCoverage: "85% FX Covered", liquidityStatus: "Capital Allocated" },
  { bank: "Deutsche Bank AG", currency: "EUR", balance: "€940,000", hedgingCoverage: "92% FX Covered", liquidityStatus: "Optimal Reserves" },
];

export default function FinanceHeroVisual() {
  const [balances] = useState<BankBalance[]>(initialBalances);

  return (
    <div className="bg-slate-900 text-white p-4 sm:p-6 rounded-2xl shadow-2xl border border-slate-800 font-sans space-y-5">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-black text-white flex items-center gap-2">
              <span>Corporate Treasury & Multi-Bank Liquidity</span>
              <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-bold border border-cyan-400/30">
                FX Risk Hedged
              </span>
            </h3>
            <p className="text-xs text-slate-400">Predictive Cash Flow Forecasting & CapEx Capital Allocation</p>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-300">
          <Globe2 className="w-4 h-4 text-cyan-400" />
          <span>Multi-Currency Netting</span>
        </div>
      </div>

      {/* Bank Balances Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-800">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-850 text-slate-400 text-[11px] font-bold uppercase tracking-wider border-b border-slate-800">
              <th className="py-3 px-4">Banking Partner</th>
              <th className="py-3 px-4">Currency</th>
              <th className="py-3 px-4 text-right">Consolidated Balance</th>
              <th className="py-3 px-4 text-center">FX Hedging Coverage</th>
              <th className="py-3 px-4 text-center">Liquidity Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-xs text-slate-200">
            {balances.map((b) => (
              <tr key={b.bank} className="hover:bg-slate-800/60 transition-colors">
                <td className="py-3 px-4 font-mono font-bold text-cyan-400">{b.bank}</td>
                <td className="py-3 px-4 font-bold text-slate-300">{b.currency}</td>
                <td className="py-3 px-4 text-right font-extrabold text-white">{b.balance}</td>
                <td className="py-3 px-4 text-center">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-[10px] font-bold text-cyan-300">
                    {b.hedgingCoverage}
                  </span>
                </td>
                <td className="py-3 px-4 text-center">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    <CheckCircle2 className="w-3 h-3" />
                    {b.liquidityStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
