"use client";

import React from "react";
import {
  Factory,
  Layers,
  Cpu,
  Activity,
  CheckCircle2,
  Clock,
  Wrench,
} from "lucide-react";

export function ProductionBomVisual() {
  return (
    <div className="w-full bg-[#111827] rounded-xl p-3.5 border border-slate-800 text-slate-100 text-xs select-none shadow-lg">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Factory className="w-4 h-4 text-purple-400" />
          <span className="font-bold text-slate-200">Multi-Level Bill of Materials (BOM Structure)</span>
        </div>
        <span className="text-[10px] text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20 font-bold">
          ECO Version v2.4 (Approved)
        </span>
      </div>

      <div className="space-y-1.5 text-[10px]">
        <div className="bg-[#1F2937] p-2 rounded border border-slate-800">
          <div className="font-bold text-purple-300">Level 0: Electric Servo Motor Assembly</div>
          <div className="pl-3 mt-1 space-y-1 border-l border-purple-500/30">
            <div className="flex justify-between text-slate-300">
              <span>↳ Level 1: Armature Core Assembly (1 Pc)</span>
              <span className="text-slate-400 font-mono">Scrap: 0.5%</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>↳ Level 1: Copper Winding Coil (400m)</span>
              <span className="text-slate-400 font-mono">Scrap: 1.0%</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>↳ Level 2: Sealed Ball Bearings #6204 (2 Pcs)</span>
              <span className="text-emerald-400 font-mono">In Stock</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductionRoutingVisual() {
  return (
    <div className="w-full bg-[#111827] rounded-xl p-3.5 border border-slate-800 text-slate-100 text-xs select-none">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold text-slate-300">Multi-Step Manufacturing Routing</span>
        <span className="text-[9px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30">
          Sequential Operation
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
        <div className="bg-[#1F2937] p-2 rounded border border-slate-800">
          <div className="text-slate-400">Op 10: CNC Milling</div>
          <div className="font-bold text-slate-200 mt-0.5">Setup: 15m | Run: 45m</div>
        </div>
        <div className="bg-[#1F2937] p-2 rounded border border-slate-800">
          <div className="text-slate-400">Op 20: Heat Treatment</div>
          <div className="font-bold text-purple-400 mt-0.5">Setup: 30m | Run: 120m</div>
        </div>
        <div className="bg-[#1F2937] p-2 rounded border border-slate-800">
          <div className="text-slate-400">Op 30: Final Quality</div>
          <div className="font-bold text-emerald-400 mt-0.5">Setup: 5m | Run: 10m</div>
        </div>
      </div>
    </div>
  );
}

export function ProductionCockpitVisual() {
  return (
    <div className="w-full bg-[#111827] rounded-xl p-3.5 border border-slate-800 text-slate-100 text-xs select-none">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold text-slate-300">Shopfloor Operator Cockpit</span>
        <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">
          WO-7801 Active
        </span>
      </div>

      <div className="bg-[#1F2937] p-2 rounded border border-slate-800 text-[10px] space-y-1.5">
        <div className="flex justify-between items-center">
          <span className="font-bold text-slate-200">CNC Machine Work Center #01</span>
          <span className="text-emerald-400 font-bold">85% Completed</span>
        </div>
        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <div className="w-[85%] h-full bg-emerald-500 rounded-full" />
        </div>
        <div className="flex justify-between text-slate-400 text-[9px]">
          <span>Produced: 170 / 200 Pcs</span>
          <span>Rejects: 2 Pcs</span>
        </div>
      </div>
    </div>
  );
}

export function ProductionOeeVisual() {
  return (
    <div className="w-full bg-[#111827] rounded-xl p-3.5 border border-slate-800 text-slate-100 text-xs select-none">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold text-slate-300">Overall Equipment Effectiveness (OEE)</span>
        <span className="text-[9px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded border border-purple-500/30 font-bold">
          Plant OEE: 89.2%
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
        <div className="bg-[#1F2937] p-2 rounded border border-slate-800">
          <div className="text-slate-400">Availability</div>
          <div className="font-bold text-emerald-400 text-[11px] mt-0.5">94.5%</div>
        </div>
        <div className="bg-[#1F2937] p-2 rounded border border-slate-800">
          <div className="text-slate-400">Performance</div>
          <div className="font-bold text-blue-400 text-[11px] mt-0.5">91.8%</div>
        </div>
        <div className="bg-[#1F2937] p-2 rounded border border-slate-800">
          <div className="text-slate-400">Quality Rate</div>
          <div className="font-bold text-purple-400 text-[11px] mt-0.5">98.9%</div>
        </div>
      </div>
    </div>
  );
}

