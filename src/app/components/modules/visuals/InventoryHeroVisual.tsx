"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Boxes,
  QrCode,
  ShieldAlert,
  Search,
  RefreshCw,
  PackageCheck,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

interface SKUItem {
  sku: string;
  name: string;
  bin: string;
  onHand: number;
  reorderPoint: number;
  status: "Optimal" | "Low Stock" | "Reorder Triggered";
}

const initialSKUs: SKUItem[] = [
  { sku: "SKU-8042", name: "Precision Steel Bearing 24mm", bin: "Bin A-04", onHand: 2450, reorderPoint: 500, status: "Optimal" },
  { sku: "SKU-9108", name: "Hydraulic Control Valve V2", bin: "Bin B-12", onHand: 42, reorderPoint: 100, status: "Reorder Triggered" },
  { sku: "SKU-3321", name: "Industrial Copper Wiring Coil", bin: "Bin C-01", onHand: 820, reorderPoint: 200, status: "Optimal" },
  { sku: "SKU-5490", name: "Aluminum Casing Enclosure", bin: "Bin A-09", onHand: 65, reorderPoint: 150, status: "Low Stock" },
];

export default function InventoryHeroVisual() {
  const [activeWarehouse, setActiveWarehouse] = useState<string>("Warehouse Alpha");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [skus, setSkus] = useState<SKUItem[]>(initialSKUs);

  const filteredSKUs = skus.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-slate-900 text-white p-4 sm:p-6 rounded-2xl shadow-2xl border border-slate-800 font-sans space-y-5">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Boxes className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-black text-white flex items-center gap-2">
              <span>Multi-Location Warehouse Control</span>
              <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold border border-amber-400/30">
                Barcode Traceability
              </span>
            </h3>
            <p className="text-xs text-slate-400">Real-Time Serial, Batch Lot & Bin Allocation Engine</p>
          </div>
        </div>

        {/* Warehouse Tabs */}
        <div className="flex items-center gap-1.5 bg-slate-800 p-1 rounded-xl border border-slate-700">
          {(["Warehouse Alpha", "Regional Hub East", "Transit Logistics"] as const).map((wh) => (
            <button
              key={wh}
              type="button"
              onClick={() => setActiveWarehouse(wh)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeWarehouse === wh
                  ? "bg-amber-500 text-slate-950 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {wh}
            </button>
          ))}
        </div>
      </div>

      {/* Filter & Search Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search SKU or item name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
          />
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <QrCode className="w-4 h-4 text-amber-400" />
          <span>Mobile Barcode Sync Active</span>
        </div>
      </div>

      {/* SKU Data Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-800">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-850 text-slate-400 text-[11px] font-bold uppercase tracking-wider border-b border-slate-800">
              <th className="py-3 px-4">SKU Code</th>
              <th className="py-3 px-4">Item Name</th>
              <th className="py-3 px-4">Bin Location</th>
              <th className="py-3 px-4 text-right">On-Hand Stock</th>
              <th className="py-3 px-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-xs text-slate-200">
            {filteredSKUs.map((item) => (
              <tr key={item.sku} className="hover:bg-slate-800/60 transition-colors">
                <td className="py-3 px-4 font-mono font-bold text-amber-400">{item.sku}</td>
                <td className="py-3 px-4 font-semibold text-white">{item.name}</td>
                <td className="py-3 px-4 text-slate-400">{item.bin}</td>
                <td className="py-3 px-4 text-right font-bold text-white">{item.onHand.toLocaleString()} Units</td>
                <td className="py-3 px-4 text-center">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                      item.status === "Optimal"
                        ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                        : item.status === "Low Stock"
                        ? "bg-amber-500/20 text-amber-300 border-amber-500/30"
                        : "bg-rose-500/20 text-rose-300 border-rose-500/30 animate-pulse"
                    }`}
                  >
                    {item.status === "Optimal" ? (
                      <CheckCircle2 className="w-3 h-3" />
                    ) : (
                      <AlertTriangle className="w-3 h-3" />
                    )}
                    {item.status}
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
