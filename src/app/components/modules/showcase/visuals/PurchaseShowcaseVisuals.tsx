"use client";

import React from "react";
import {
  Receipt,
  CheckCircle2,
  AlertCircle,
  TrendingDown,
  Building2,
  Scale,
  ShieldCheck,
  FileSpreadsheet,
} from "lucide-react";

export function PurchasePrVisual() {
  return (
    <div className="w-full bg-[#111827] rounded-xl p-3.5 border border-slate-800 text-slate-100 text-xs select-none">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold text-slate-300">Internal Purchase Requisition (PR)</span>
        <span className="text-[9px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30">
          PR-2026-4401
        </span>
      </div>

      <div className="space-y-1.5 text-[10px]">
        <div className="flex justify-between p-2 rounded bg-[#1F2937] border border-slate-800">
          <div>
            <div className="font-bold text-slate-200">Production Plant 02 • High Grade Steel Alloy</div>
            <div className="text-slate-400 text-[9px]">Requested: 50 Tons • Needed by: 24-Mar-2026</div>
          </div>
          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
            PR Approved
          </span>
        </div>
      </div>
    </div>
  );
}

export function PurchaseRfqVisual() {
  return (
    <div className="w-full bg-[#111827] rounded-xl p-3.5 border border-slate-800 text-slate-100 text-xs select-none shadow-lg">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Scale className="w-4 h-4 text-sky-400" />
          <span className="font-bold text-slate-200">Side-by-Side Supplier RFQ Comparison</span>
        </div>
        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
          Winning Bid Selected
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 text-[10px]">
        <div className="bg-[#1F2937] p-2.5 rounded border border-slate-800">
          <div className="font-bold text-slate-300">Vendor A: Tata Steel</div>
          <div className="text-slate-400 mt-1">Rate: ₹58,000 / Ton</div>
          <div className="text-slate-400">Lead Time: 5 Days</div>
          <div className="text-slate-500 mt-1 text-[9px]">Rating: ★★★★☆ (4.8)</div>
        </div>

        <div className="bg-emerald-950/50 p-2.5 rounded border border-emerald-500/60 shadow-sm">
          <div className="flex justify-between items-center">
            <span className="font-bold text-emerald-300">Vendor B: JSW Steel</span>
            <span className="text-[8px] bg-emerald-500 text-slate-950 px-1.5 py-0.2 rounded font-black">WINNER</span>
          </div>
          <div className="text-emerald-200 mt-1 font-bold">Rate: ₹54,500 / Ton</div>
          <div className="text-emerald-300/80">Lead Time: 3 Days</div>
          <div className="text-emerald-400/70 mt-1 text-[9px]">Rating: ★★★★★ (5.0)</div>
        </div>

        <div className="bg-[#1F2937] p-2.5 rounded border border-slate-800">
          <div className="font-bold text-slate-300">Vendor C: Jindal Stainless</div>
          <div className="text-slate-400 mt-1">Rate: ₹56,200 / Ton</div>
          <div className="text-slate-400">Lead Time: 7 Days</div>
          <div className="text-slate-500 mt-1 text-[9px]">Rating: ★★★★☆ (4.2)</div>
        </div>
      </div>
    </div>
  );
}

export function PurchaseMatchVisual() {
  return (
    <div className="w-full bg-[#111827] rounded-xl p-3.5 border border-slate-800 text-slate-100 text-xs select-none">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span className="font-bold text-slate-200">3-Way Invoice Audit Matching</span>
        </div>
        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
          100% Match Verified
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
        <div className="bg-[#1F2937] p-2 rounded border border-slate-800">
          <div className="text-slate-400">1. Purchase Order</div>
          <div className="font-bold text-slate-200 mt-0.5">PO #4029 (50 Tons)</div>
        </div>
        <div className="bg-[#1F2937] p-2 rounded border border-slate-800">
          <div className="text-slate-400">2. Goods Receipt (GRN)</div>
          <div className="font-bold text-blue-400 mt-0.5">GRN #8812 (50 Tons)</div>
        </div>
        <div className="bg-[#1F2937] p-2 rounded border border-slate-800">
          <div className="text-slate-400">3. Vendor Invoice</div>
          <div className="font-bold text-emerald-400 mt-0.5">Bill #INV-9012 (₹27.25L)</div>
        </div>
      </div>
    </div>
  );
}

export function PurchaseSavingsVisual() {
  return (
    <div className="w-full bg-[#111827] rounded-xl p-3.5 border border-slate-800 text-slate-100 text-xs select-none">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold text-slate-300">Procurement Savings & Landed Cost</span>
        <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
          ₹ 3.75L Negotiated Savings
        </span>
      </div>

      <div className="space-y-1.5 text-[10px]">
        <div className="flex justify-between p-1.5 rounded bg-[#1F2937] text-slate-300">
          <span>Freight & Handling Allocation:</span>
          <span className="font-mono font-bold">₹ 45,000.00</span>
        </div>
        <div className="flex justify-between p-1.5 rounded bg-[#1F2937] text-slate-300">
          <span>Customs & Port Charges:</span>
          <span className="font-mono font-bold">₹ 28,500.00</span>
        </div>
      </div>
    </div>
  );
}

