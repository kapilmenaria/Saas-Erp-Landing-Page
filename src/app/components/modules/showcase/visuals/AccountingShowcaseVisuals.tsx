"use client";

import React from "react";
import {
  BarChart3,
  CheckCircle2,
  LockKeyhole,
  Scale,
  RefreshCw,
  FileCheck2,
} from "lucide-react";

export function AccountingLedgerVisual() {
  return (
    <div className="w-full bg-[#111827] rounded-xl p-3.5 border border-slate-800 text-slate-100 text-xs select-none shadow-lg">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-teal-400" />
          <span className="font-bold text-slate-200">Double-Entry General Ledger (GL Posting)</span>
        </div>
        <span className="text-[10px] text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20 font-bold">
          GL Posting #GL-5541
        </span>
      </div>

      <div className="space-y-2 text-[10px]">
        <div className="grid grid-cols-4 font-bold text-slate-400 border-b border-slate-800 pb-1">
          <span>ACCOUNT NAME</span>
          <span>COST CENTER</span>
          <span className="text-right">DEBIT</span>
          <span className="text-right">CREDIT</span>
        </div>
        <div className="grid grid-cols-4 text-slate-300">
          <span>HDFC Bank Operating Account</span>
          <span className="text-slate-500">HO-Treasury</span>
          <span className="text-right font-mono font-bold text-emerald-400">₹ 2,50,000.00</span>
          <span className="text-right font-mono text-slate-600">-</span>
        </div>
        <div className="grid grid-cols-4 text-slate-300">
          <span>Accounts Receivable (Customer AR)</span>
          <span className="text-slate-500">Sales-West</span>
          <span className="text-right font-mono text-slate-600">-</span>
          <span className="text-right font-mono font-bold text-blue-400">₹ 2,50,000.00</span>
        </div>
      </div>
    </div>
  );
}

export function AccountingReconcileVisual() {
  return (
    <div className="w-full bg-[#111827] rounded-xl p-3.5 border border-slate-800 text-slate-100 text-xs select-none">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold text-slate-300">Smart Bank Feed Auto-Matching</span>
        <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">
          99.4% Match Rate
        </span>
      </div>

      <div className="space-y-1.5 text-[10px]">
        <div className="flex items-center justify-between p-2 rounded bg-[#1F2937] border border-slate-800">
          <div>
            <div className="font-bold text-slate-200">Bank Feed Txn #8821 • ₹ 2,50,000.00</div>
            <div className="text-slate-400 text-[9px]">Matched to Customer Invoice #INV-1024</div>
          </div>
          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Auto-Matched
          </span>
        </div>
      </div>
    </div>
  );
}

export function AccountingVoucherVisual() {
  return (
    <div className="w-full bg-[#111827] rounded-xl p-3.5 border border-slate-800 text-slate-100 text-xs select-none">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold text-slate-300">Sequential Voucher Entry & Audit Log</span>
        <span className="text-[9px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30">
          Voucher #PV-2026-091
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
        <div className="bg-[#1F2937] p-2 rounded border border-slate-800">
          <div className="text-slate-400">Voucher Type</div>
          <div className="font-bold text-slate-200 mt-0.5">Payment Voucher</div>
        </div>
        <div className="bg-[#1F2937] p-2 rounded border border-slate-800">
          <div className="text-slate-400">Approval Trail</div>
          <div className="font-bold text-emerald-400 mt-0.5">Audited & Posted</div>
        </div>
        <div className="bg-[#1F2937] p-2 rounded border border-slate-800">
          <div className="text-slate-400">Reversal Policy</div>
          <div className="font-bold text-teal-400 mt-0.5">No Silent Deletion</div>
        </div>
      </div>
    </div>
  );
}

export function AccountingReportsVisual() {
  return (
    <div className="w-full bg-[#111827] rounded-xl p-3.5 border border-slate-800 text-slate-100 text-xs select-none">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold text-slate-300">Financial Reports & GSTR Filings</span>
        <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">
          Audit-Ready
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
        <div className="bg-[#1F2937] p-2 rounded border border-slate-800">
          <div className="text-slate-400">Net Profit</div>
          <div className="font-bold text-emerald-400 text-[11px] mt-0.5">₹ 60.12L</div>
        </div>
        <div className="bg-[#1F2937] p-2 rounded border border-slate-800">
          <div className="text-slate-400">GSTR-1 & 3B</div>
          <div className="font-bold text-blue-400 text-[11px] mt-0.5">Pre-Formatted</div>
        </div>
        <div className="bg-[#1F2937] p-2 rounded border border-slate-800">
          <div className="text-slate-400">Trial Balance</div>
          <div className="font-bold text-teal-400 text-[11px] mt-0.5">Balanced</div>
        </div>
      </div>
    </div>
  );
}

