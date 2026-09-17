"use client";

import React, { useState } from "react";
import {
  ReceiptText,
  Calculator,
  Globe2,
  FileCheck2,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface GLEntry {
  id: string;
  description: string;
  account: string;
  amount: string;
  type: "Debit" | "Credit";
  reconciled: boolean;
}

const initialEntries: GLEntry[] = [
  { id: "GL-9012", description: "Customer Sales Invoice Collection #SO-8801", account: "1100 - Accounts Receivable", amount: "$34,200", type: "Debit", reconciled: true },
  { id: "GL-9013", description: "Supplier Goods Receipt #PO-4029", account: "2100 - Accounts Payable", amount: "$64,500", type: "Credit", reconciled: true },
  { id: "GL-9014", description: "Monthly Biometric Payroll Disbursement", account: "5200 - Labor & Salary Exp", amount: "$84,200", type: "Debit", reconciled: true },
];

export default function AccountingHeroVisual() {
  const [entries] = useState<GLEntry[]>(initialEntries);

  return (
    <div className="bg-slate-900 text-white p-4 sm:p-6 rounded-2xl shadow-2xl border border-slate-800 font-sans space-y-5">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400">
            <ReceiptText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-black text-white flex items-center gap-2">
              <span>General Ledger & Bank Feed Reconciliation</span>
              <span className="px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 text-[10px] font-bold border border-teal-400/30">
                GL Balance: $412.8k
              </span>
            </h3>
            <p className="text-xs text-slate-400">Double-Entry Posting Engine, Tax Engine & Audit Trail Logs</p>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-300">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Audit Lock Active</span>
        </div>
      </div>

      {/* GL Journal Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-800">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-850 text-slate-400 text-[11px] font-bold uppercase tracking-wider border-b border-slate-800">
              <th className="py-3 px-4">Journal Ref</th>
              <th className="py-3 px-4">Transaction Description</th>
              <th className="py-3 px-4">GL Chart of Accounts</th>
              <th className="py-3 px-4 text-center">Entry Type</th>
              <th className="py-3 px-4 text-right">Amount</th>
              <th className="py-3 px-4 text-center">Bank Reconciliation</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-xs text-slate-200">
            {entries.map((entry) => (
              <tr key={entry.id} className="hover:bg-slate-800/60 transition-colors">
                <td className="py-3 px-4 font-mono font-bold text-teal-400">{entry.id}</td>
                <td className="py-3 px-4 font-semibold text-white">{entry.description}</td>
                <td className="py-3 px-4 text-slate-400">{entry.account}</td>
                <td className="py-3 px-4 text-center">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      entry.type === "Debit"
                        ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                        : "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                    }`}
                  >
                    {entry.type}
                  </span>
                </td>
                <td className="py-3 px-4 text-right font-extrabold text-white">{entry.amount}</td>
                <td className="py-3 px-4 text-center">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    <CheckCircle2 className="w-3 h-3" />
                    Auto-Matched
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
