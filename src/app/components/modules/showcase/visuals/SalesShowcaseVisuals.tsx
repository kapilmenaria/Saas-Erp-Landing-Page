"use client";

import React from "react";
import {
  Receipt,
  FileCheck2,
  CheckCircle2,
  Percent,
  Truck,
  ArrowRight,
  ShieldCheck,
  Building,
} from "lucide-react";

export function SalesQuoteVisual() {
  return (
    <div className="w-full bg-[#111827] rounded-xl p-3.5 border border-slate-800 text-slate-100 text-xs select-none shadow-lg">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Receipt className="w-4 h-4 text-emerald-400" />
          <span className="font-bold text-slate-200">Quotation #QT-2026-8812</span>
        </div>
        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
          Ready for PDF Dispatch
        </span>
      </div>

      <div className="space-y-2 text-[10px]">
        <div className="grid grid-cols-4 font-bold text-slate-400 border-b border-slate-800 pb-1">
          <span>ITEM SKU</span>
          <span className="text-right">QTY</span>
          <span className="text-right">RATE</span>
          <span className="text-right">TOTAL</span>
        </div>
        <div className="grid grid-cols-4 text-slate-300">
          <span>Heavy Duty Gear Box</span>
          <span className="text-right font-mono">10 Pcs</span>
          <span className="text-right font-mono">₹45,000</span>
          <span className="text-right font-mono font-bold text-slate-100">₹4,50,000</span>
        </div>
        <div className="grid grid-cols-4 text-slate-300">
          <span>Hydraulic Pump Assembly</span>
          <span className="text-right font-mono">5 Pcs</span>
          <span className="text-right font-mono">₹28,000</span>
          <span className="text-right font-mono font-bold text-slate-100">₹1,40,000</span>
        </div>
        <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-[11px]">
          <span className="text-slate-400">Total Quote Amount (Incl. 18% GST)</span>
          <span className="font-black text-emerald-400 text-[13px]">₹ 6,96,200.00</span>
        </div>
      </div>
    </div>
  );
}

export function SalesTaxVisual() {
  return (
    <div className="w-full bg-[#111827] rounded-xl p-3.5 border border-slate-800 text-slate-100 text-xs select-none">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold text-slate-300">GST & Discount Tax Breakdown</span>
        <span className="text-[9px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30 font-bold">
          Auto CGST / SGST / IGST
        </span>
      </div>

      <div className="space-y-1.5 text-[10px]">
        <div className="flex justify-between p-1.5 rounded bg-[#1F2937] text-slate-300">
          <span>Order Subtotal:</span>
          <span className="font-mono font-bold">₹ 5,90,000.00</span>
        </div>
        <div className="flex justify-between p-1.5 rounded bg-[#1F2937] text-amber-300">
          <span>Tiered Volume Discount (5%):</span>
          <span className="font-mono font-bold">- ₹ 29,500.00</span>
        </div>
        <div className="flex justify-between p-1.5 rounded bg-[#1F2937] text-slate-300">
          <span>CGST (9%) + SGST (9%):</span>
          <span className="font-mono font-bold">₹ 1,00,890.00</span>
        </div>
      </div>
    </div>
  );
}

export function SalesApprovalVisual() {
  return (
    <div className="w-full bg-[#111827] rounded-xl p-3.5 border border-slate-800 text-slate-100 text-xs select-none">
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-[11px] font-bold text-slate-300">Multi-Tier Approval Hierarchy</span>
        <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
          Approved (2/2)
        </span>
      </div>

      <div className="space-y-2 text-[10px]">
        <div className="flex items-center justify-between bg-[#1F2937] p-2 rounded border border-slate-800">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <div>
              <div className="font-bold text-slate-200">Level 1: Sales Director</div>
              <div className="text-slate-400 text-[9px]">Approved 8% Special Discount</div>
            </div>
          </div>
          <span className="text-emerald-400 font-bold">10:15 AM</span>
        </div>

        <div className="flex items-center justify-between bg-[#1F2937] p-2 rounded border border-slate-800">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <div>
              <div className="font-bold text-slate-200">Level 2: Finance Controller</div>
              <div className="text-slate-400 text-[9px]">Approved 60-Day Credit Term</div>
            </div>
          </div>
          <span className="text-emerald-400 font-bold">11:04 AM</span>
        </div>
      </div>
    </div>
  );
}

export function SalesDispatchVisual() {
  return (
    <div className="w-full bg-[#111827] rounded-xl p-3.5 border border-slate-800 text-slate-100 text-xs select-none">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4 text-blue-400" />
          <span className="font-bold text-slate-200">Dispatch & E-Way Bill Tracker</span>
        </div>
        <span className="text-[10px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20 font-bold">
          E-Way Bill #3810294812
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
        <div className="bg-[#1F2937] p-2 rounded border border-slate-800">
          <div className="text-slate-400">Sales Order</div>
          <div className="font-bold text-slate-200 mt-0.5">SO-9041</div>
        </div>
        <div className="bg-[#1F2937] p-2 rounded border border-slate-800">
          <div className="text-slate-400">Delivery Challan</div>
          <div className="font-bold text-blue-400 mt-0.5">DC-8812</div>
        </div>
        <div className="bg-[#1F2937] p-2 rounded border border-slate-800">
          <div className="text-slate-400">Transporter</div>
          <div className="font-bold text-slate-200 mt-0.5">VRL Logistics</div>
        </div>
        <div className="bg-[#1F2937] p-2 rounded border border-slate-800">
          <div className="text-slate-400">Status</div>
          <div className="font-bold text-emerald-400 mt-0.5">Dispatched</div>
        </div>
      </div>
    </div>
  );
}

