"use client";

import React, { useState } from "react";
import {
  ShoppingCart,
  Receipt,
  TrendingUp,
  CreditCard,
  Truck,
  CheckCircle2,
  LockKeyhole,
} from "lucide-react";

interface SalesOrder {
  id: string;
  customer: string;
  items: string;
  total: string;
  stockReserved: boolean;
  status: "Quotation" | "SO Confirmed" | "Dispatched";
}

const initialSalesOrders: SalesOrder[] = [
  { id: "SO-8801", customer: "Northwind Solutions", items: "12x Hydraulic Valves", total: "$34,200", stockReserved: true, status: "SO Confirmed" },
  { id: "SO-8802", customer: "Bluepeak Enterprises", items: "50x Steel Bearing Units", total: "$18,400", stockReserved: true, status: "Dispatched" },
  { id: "SO-8803", customer: "Cascade Operations", items: "5x CNC Aluminum Enclosures", total: "$9,800", stockReserved: false, status: "Quotation" },
];

export default function SalesHeroVisual() {
  const [orders, setOrders] = useState<SalesOrder[]>(initialSalesOrders);

  const confirmSO = (id: string) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status: "SO Confirmed", stockReserved: true } : o))
    );
  };

  return (
    <div className="bg-slate-900 text-white p-4 sm:p-6 rounded-2xl shadow-2xl border border-slate-800 font-sans space-y-5">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <ShoppingCart className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-black text-white flex items-center gap-2">
              <span>Sales & Order Fulfillment Hub</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-400/30">
                Live Stock Reserved
              </span>
            </h3>
            <p className="text-xs text-slate-400">Quotations, Discount Matrix & Order-to-Cash Automation</p>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-300">
          <Truck className="w-4 h-4 text-emerald-400" />
          <span>Fulfillment Queue Active</span>
        </div>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-800">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-850 text-slate-400 text-[11px] font-bold uppercase tracking-wider border-b border-slate-800">
              <th className="py-3 px-4">SO Number</th>
              <th className="py-3 px-4">Customer Account</th>
              <th className="py-3 px-4">Line Items</th>
              <th className="py-3 px-4 text-right">Order Total</th>
              <th className="py-3 px-4 text-center">Stock Allocation</th>
              <th className="py-3 px-4 text-center">Status Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-xs text-slate-200">
            {orders.map((ord) => (
              <tr key={ord.id} className="hover:bg-slate-800/60 transition-colors">
                <td className="py-3 px-4 font-mono font-bold text-emerald-400">{ord.id}</td>
                <td className="py-3 px-4 font-semibold text-white">{ord.customer}</td>
                <td className="py-3 px-4 text-slate-400">{ord.items}</td>
                <td className="py-3 px-4 text-right font-extrabold text-white">{ord.total}</td>
                <td className="py-3 px-4 text-center">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                      ord.stockReserved
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                    }`}
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    {ord.stockReserved ? "Reserved in Alpha" : "Pending Reservation"}
                  </span>
                </td>
                <td className="py-3 px-4 text-center">
                  {ord.status === "Quotation" ? (
                    <button
                      type="button"
                      onClick={() => confirmSO(ord.id)}
                      className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] transition-colors cursor-pointer"
                    >
                      Convert to SO
                    </button>
                  ) : (
                    <span className="text-emerald-400 font-bold flex items-center justify-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {ord.status}
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
