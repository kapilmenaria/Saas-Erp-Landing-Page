"use client";

import React, { useState } from "react";
import {
  Factory,
  Layers,
  Cpu,
  Activity,
  ClipboardCheck,
  CheckCircle2,
  Zap,
} from "lucide-react";

interface WorkOrder {
  id: string;
  product: string;
  line: string;
  targetQty: number;
  bomStatus: string;
  status: "In Production" | "Scheduled" | "Quality Check";
}

const initialWorkOrders: WorkOrder[] = [
  { id: "WO-7021", product: "Hydraulic Assembly Unit H4", line: "Line A (CNC Bay)", targetQty: 500, bomStatus: "BOM v3.2 Verified", status: "In Production" },
  { id: "WO-7022", product: "Aluminum Enclosure Case B", line: "Line B (Machining)", targetQty: 1200, bomStatus: "Raw Component Stock Ready", status: "Scheduled" },
  { id: "WO-7023", product: "Precision Circuit Module V3", line: "Line C (SMT Mount)", targetQty: 2500, bomStatus: "Quality Tolerance Test", status: "Quality Check" },
];

export default function ProductionHeroVisual() {
  const [wos, setWos] = useState<WorkOrder[]>(initialWorkOrders);

  return (
    <div className="bg-slate-900 text-white p-4 sm:p-6 rounded-2xl shadow-2xl border border-slate-800 font-sans space-y-5">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <Factory className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-black text-white flex items-center gap-2">
              <span>Manufacturing & MRP Dispatch Station</span>
              <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[10px] font-bold border border-purple-400/30">
                OEE Uptime: 94.6%
              </span>
            </h3>
            <p className="text-xs text-slate-400">Multi-Level BOMs, Shop Floor Work Orders & Material Requirements</p>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-300">
          <Activity className="w-4 h-4 text-purple-400 animate-pulse" />
          <span>Line Telemetry Live</span>
        </div>
      </div>

      {/* Work Orders Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-800">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-850 text-slate-400 text-[11px] font-bold uppercase tracking-wider border-b border-slate-800">
              <th className="py-3 px-4">WO Number</th>
              <th className="py-3 px-4">Manufactured Product</th>
              <th className="py-3 px-4">Work Center Line</th>
              <th className="py-3 px-4 text-right">Target Quantity</th>
              <th className="py-3 px-4 text-center">BOM MRP Status</th>
              <th className="py-3 px-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-xs text-slate-200">
            {wos.map((wo) => (
              <tr key={wo.id} className="hover:bg-slate-800/60 transition-colors">
                <td className="py-3 px-4 font-mono font-bold text-purple-400">{wo.id}</td>
                <td className="py-3 px-4 font-semibold text-white">{wo.product}</td>
                <td className="py-3 px-4 text-slate-400">{wo.line}</td>
                <td className="py-3 px-4 text-right font-extrabold text-white">{wo.targetQty.toLocaleString()} Units</td>
                <td className="py-3 px-4 text-center">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-[10px] font-bold text-purple-300">
                    {wo.bomStatus}
                  </span>
                </td>
                <td className="py-3 px-4 text-center">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                      wo.status === "In Production"
                        ? "bg-blue-500/20 text-blue-300 border border-blue-500/30 animate-pulse"
                        : wo.status === "Quality Check"
                        ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                        : "bg-slate-800 text-slate-300 border border-slate-700"
                    }`}
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    {wo.status}
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
