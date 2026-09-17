"use client";

import React, { useState } from "react";
import {
  ShoppingCart,
  FileCheck2,
  UsersRound,
  Calculator,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
} from "lucide-react";

interface POItem {
  id: string;
  vendor: string;
  department: string;
  amount: string;
  threeWayMatch: boolean;
  status: "Approved" | "Pending Approval" | "GRN Received";
}

const initialPOs: POItem[] = [
  { id: "PO-4029", vendor: "Steel Processing Corp", department: "Production & Ops", amount: "$64,500", threeWayMatch: true, status: "Approved" },
  { id: "PO-4030", vendor: "Apex Components Ltd", department: "Research & Dev", amount: "$18,200", threeWayMatch: false, status: "Pending Approval" },
  { id: "PO-4031", vendor: "Global Chemical Supplies", department: "Manufacturing", amount: "$112,000", threeWayMatch: true, status: "GRN Received" },
];

export default function PurchaseHeroVisual() {
  const [pos, setPos] = useState<POItem[]>(initialPOs);

  const approvePO = (id: string) => {
    setPos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: "Approved", threeWayMatch: true } : p))
    );
  };

  return (
    <div className="bg-slate-900 text-white p-4 sm:p-6 rounded-2xl shadow-2xl border border-slate-800 font-sans space-y-5">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <ShoppingCart className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-black text-white flex items-center gap-2">
              <span>Procurement & Vendor PO Approval Hub</span>
              <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-bold border border-blue-400/30">
                3-Way Match Verified
              </span>
            </h3>
            <p className="text-xs text-slate-400">Automated Purchase Requisitions, Approvals & Invoice Audit</p>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-300">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Spend Governance Active</span>
        </div>
      </div>

      {/* PO Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-800">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-850 text-slate-400 text-[11px] font-bold uppercase tracking-wider border-b border-slate-800">
              <th className="py-3 px-4">PO Number</th>
              <th className="py-3 px-4">Supplier Vendor</th>
              <th className="py-3 px-4">Cost Center</th>
              <th className="py-3 px-4 text-right">PO Amount</th>
              <th className="py-3 px-4 text-center">3-Way Match</th>
              <th className="py-3 px-4 text-center">Approval Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-xs text-slate-200">
            {pos.map((po) => (
              <tr key={po.id} className="hover:bg-slate-800/60 transition-colors">
                <td className="py-3 px-4 font-mono font-bold text-blue-400">{po.id}</td>
                <td className="py-3 px-4 font-semibold text-white">{po.vendor}</td>
                <td className="py-3 px-4 text-slate-400">{po.department}</td>
                <td className="py-3 px-4 text-right font-extrabold text-white">{po.amount}</td>
                <td className="py-3 px-4 text-center">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                      po.threeWayMatch
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                    }`}
                  >
                    {po.threeWayMatch ? <CheckCircle2 className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                    {po.threeWayMatch ? "Matched (PO/GRN/Bill)" : "Verification Pending"}
                  </span>
                </td>
                <td className="py-3 px-4 text-center">
                  {po.status === "Pending Approval" ? (
                    <button
                      type="button"
                      onClick={() => approvePO(po.id)}
                      className="px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-[11px] transition-colors cursor-pointer inline-flex items-center gap-1"
                    >
                      <span>Approve</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  ) : (
                    <span className="text-emerald-400 font-bold flex items-center justify-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {po.status}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
