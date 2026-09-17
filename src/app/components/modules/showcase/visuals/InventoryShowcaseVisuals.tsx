"use client";

import React from "react";
import {
  Boxes,
  ShieldCheck,
  AlertTriangle,
  RotateCw,
  Layers,
  ArrowRight,
} from "lucide-react";

export function InventoryStockVisual() {
  return (
    <div className="w-full bg-[#111827] rounded-xl p-3.5 border border-slate-800 text-slate-100 text-xs select-none shadow-lg">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Boxes className="w-4 h-4 text-amber-400" />
          <span className="font-bold text-slate-200">Multi-Warehouse Bin & Stock Capacity</span>
        </div>
        <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-bold">
          4,890 Active SKUs
        </span>
      </div>

      <div className="space-y-2 text-[10px]">
        <div>
          <div className="flex justify-between mb-1 text-slate-300">
            <span>Main Central Warehouse (Bin A1-A8)</span>
            <span className="font-bold text-emerald-400">84% Capacity (2,400 Units)</span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden flex">
            <div className="w-[84%] bg-emerald-500 rounded-full" />
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1 text-slate-300">
            <span>North Depot Bin B2 (Transit Stock)</span>
            <span className="font-bold text-blue-400">62% Capacity (1,150 Units)</span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden flex">
            <div className="w-[62%] bg-blue-500 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function InventoryInspectionVisual() {
  return (
    <div className="w-full bg-[#111827] rounded-xl p-3.5 border border-slate-800 text-slate-100 text-xs select-none">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold text-slate-300">Inward Inspection & Quarantine Store</span>
        <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">
          GRN Gate Verified
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
        <div className="bg-emerald-950/40 p-2 rounded border border-emerald-500/40">
          <div className="text-emerald-300 font-bold">Accepted Stock</div>
          <div className="font-bold text-emerald-400 text-[11px] mt-0.5">480 Units</div>
        </div>
        <div className="bg-rose-950/40 p-2 rounded border border-rose-500/40">
          <div className="text-rose-300 font-bold">Rejected Stock</div>
          <div className="font-bold text-rose-400 text-[11px] mt-0.5">20 Units</div>
        </div>
        <div className="bg-amber-950/40 p-2 rounded border border-amber-500/40">
          <div className="text-amber-300 font-bold">Quarantine Store</div>
          <div className="font-bold text-amber-400 text-[11px] mt-0.5">Isolated</div>
        </div>
      </div>
    </div>
  );
}

export function InventoryMrpVisual() {
  return (
    <div className="w-full bg-[#111827] rounded-xl p-3.5 border border-slate-800 text-slate-100 text-xs select-none">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold text-slate-300">MRP Material Shortage Matrix</span>
        <span className="text-[9px] bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded border border-rose-500/30 font-bold">
          Auto PR Triggered
        </span>
      </div>

      <div className="space-y-1.5 text-[10px]">
        <div className="flex justify-between p-2 rounded bg-[#1F2937] border border-slate-800">
          <div>
            <div className="font-bold text-slate-200">IC Micro-controllers (SKU-8821)</div>
            <div className="text-slate-400 text-[9px]">Required: 200 | On Hand: 12 | Shortage: 188</div>
          </div>
          <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold border border-rose-500/30">
            PR-4402 Auto-Created
          </span>
        </div>
      </div>
    </div>
  );
}

export function InventoryBatchVisual() {
  return (
    <div className="w-full bg-[#111827] rounded-xl p-3.5 border border-slate-800 text-slate-100 text-xs select-none">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold text-slate-300">Batch, Lot & FEFO Picking Rule</span>
        <span className="text-[9px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30">
          First Expiry, First Out
        </span>
      </div>

      <div className="space-y-1 text-[10px]">
        <div className="flex justify-between p-1.5 rounded bg-[#1F2937] text-slate-300 border border-slate-800">
          <span>Batch #LOT-2026-04 • Exp: 15-Nov-2026</span>
          <span className="font-bold text-emerald-400">Priority 1 (FEFO Pick)</span>
        </div>
        <div className="flex justify-between p-1.5 rounded bg-[#1F2937] text-slate-400">
          <span>Batch #LOT-2026-08 • Exp: 30-Mar-2027</span>
          <span>Priority 2 (Reserve)</span>
        </div>
      </div>
    </div>
  );
}

