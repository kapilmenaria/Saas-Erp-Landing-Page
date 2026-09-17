"use client";

import React from "react";
import {
  TrendingUp,
  UserCheck,
  CheckCircle2,
  PhoneCall,
  Mail,
  Calendar,
  Building2,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

export function CrmKanbanVisual() {
  return (
    <div className="w-full bg-[#111827] rounded-xl p-3 sm:p-4 border border-slate-800 text-slate-100 text-xs select-none shadow-lg">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-bold text-slate-200">Live Sales Pipeline</span>
        </div>
        <span className="text-[10px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20 font-mono font-semibold">
          Total Value: ₹1.42 Cr
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {/* Stage 1: Lead */}
        <div className="bg-[#1F2937]/70 p-2 rounded-lg border border-slate-800 space-y-2">
          <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase">
            <span>New Lead (14)</span>
            <span className="text-slate-500">₹24.5L</span>
          </div>
          <div className="bg-[#111827] p-2 rounded border border-slate-700/80 space-y-1">
            <div className="font-bold text-slate-200 text-[11px]">Acme Corp</div>
            <div className="text-[10px] text-slate-400">ERP Migration • ₹12.5L</div>
            <div className="flex items-center justify-between text-[9px] pt-1 border-t border-slate-800">
              <span className="text-amber-400 font-medium">Warm • 65%</span>
              <span className="text-slate-500">IndiaMART</span>
            </div>
          </div>
        </div>

        {/* Stage 2: Qualified */}
        <div className="bg-[#1F2937]/70 p-2 rounded-lg border border-slate-800 space-y-2">
          <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase">
            <span>Qualified (12)</span>
            <span className="text-slate-500">₹38.0L</span>
          </div>
          <div className="bg-[#111827] p-2 rounded border border-slate-700/80 space-y-1">
            <div className="font-bold text-slate-200 text-[11px]">Global Logistics</div>
            <div className="text-[10px] text-slate-400">WMS & Finance • ₹24.0L</div>
            <div className="flex items-center justify-between text-[9px] pt-1 border-t border-slate-800">
              <span className="text-emerald-400 font-medium">Hot • 85%</span>
              <span className="text-slate-500">Website</span>
            </div>
          </div>
        </div>

        {/* Stage 3: Proposal */}
        <div className="bg-[#1F2937]/70 p-2 rounded-lg border border-slate-800 space-y-2">
          <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase">
            <span>Proposal (10)</span>
            <span className="text-slate-500">₹45.0L</span>
          </div>
          <div className="bg-[#111827] p-2 rounded border border-blue-500/40 space-y-1 shadow-sm">
            <div className="font-bold text-blue-300 text-[11px]">Apex Manufacturing</div>
            <div className="text-[10px] text-slate-300">MRP + Accounting • ₹35.0L</div>
            <div className="flex items-center justify-between text-[9px] pt-1 border-t border-slate-800">
              <span className="text-blue-400 font-bold">Sent • 90%</span>
              <span className="text-slate-500">Referral</span>
            </div>
          </div>
        </div>

        {/* Stage 4: Closed Won */}
        <div className="bg-[#1F2937]/70 p-2 rounded-lg border border-slate-800 space-y-2">
          <div className="flex justify-between text-[10px] text-emerald-400 font-bold uppercase">
            <span>Won (6)</span>
            <span className="text-emerald-400">₹34.5L</span>
          </div>
          <div className="bg-emerald-950/40 p-2 rounded border border-emerald-600/50 space-y-1">
            <div className="font-bold text-emerald-200 text-[11px]">Nexus Systems</div>
            <div className="text-[10px] text-emerald-300/80">Full Suite • ₹18.0L</div>
            <div className="flex items-center justify-between text-[9px] pt-1 border-t border-emerald-900/50">
              <span className="text-emerald-400 font-bold">Contract Signed</span>
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CrmLeadsVisual() {
  return (
    <div className="w-full bg-[#111827] rounded-xl p-3 sm:p-4 border border-slate-800 text-slate-100 text-xs select-none">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold text-slate-300">Intake & Scoring Queue</span>
        <span className="text-[9px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded border border-purple-500/30">
          AI Score & Auto-Assign
        </span>
      </div>

      <div className="space-y-1.5 text-[10px]">
        <div className="flex items-center justify-between p-2 rounded bg-[#1F2937] border border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
              94
            </div>
            <div>
              <div className="font-bold text-slate-200">Rohan Mehta • TechSol</div>
              <div className="text-slate-400 text-[9px]">Source: Meta Ads • Enterprise</div>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
            Assigned: North
          </span>
        </div>

        <div className="flex items-center justify-between p-2 rounded bg-[#1F2937] border border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              82
            </div>
            <div>
              <div className="font-bold text-slate-200">Priya Sharma • AutoParts</div>
              <div className="text-slate-400 text-[9px]">Source: IndiaMART • Mid-Market</div>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold border border-blue-500/30">
            Assigned: West
          </span>
        </div>
      </div>
    </div>
  );
}

export function CrmAccountVisual() {
  return (
    <div className="w-full bg-[#111827] rounded-xl p-3.5 border border-slate-800 text-slate-100 text-xs select-none">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 text-blue-400" />
          <div>
            <div className="font-bold text-slate-200 text-[12px]">Bharat Heavy Engineering Ltd</div>
            <div className="text-[9.5px] text-slate-400">GSTIN: 27AAACB1234F1Z9 • Corporate</div>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
          Verified
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
        <div className="bg-[#1F2937] p-2 rounded border border-slate-800">
          <div className="text-slate-400">Approved Credit</div>
          <div className="font-bold text-emerald-400 text-[11px] mt-0.5">₹ 50,00,000</div>
        </div>
        <div className="bg-[#1F2937] p-2 rounded border border-slate-800">
          <div className="text-slate-400">Lifetime Revenue</div>
          <div className="font-bold text-blue-400 text-[11px] mt-0.5">₹ 1.84 Cr</div>
        </div>
        <div className="bg-[#1F2937] p-2 rounded border border-slate-800">
          <div className="text-slate-400">Payment Health</div>
          <div className="font-bold text-sky-400 text-[11px] mt-0.5">On-Time (99%)</div>
        </div>
      </div>
    </div>
  );
}

export function CrmActivityVisual() {
  return (
    <div className="w-full bg-[#111827] rounded-xl p-3.5 border border-slate-800 text-slate-100 text-xs select-none">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold text-slate-300">Interaction Timeline & Tasks</span>
        <span className="text-[9px] text-slate-400 font-mono">Synced to Timeline</span>
      </div>

      <div className="space-y-2 text-[10px]">
        <div className="flex items-start gap-2 bg-[#1F2937] p-2 rounded border border-slate-800">
          <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
          <div className="flex-1">
            <div className="flex justify-between">
              <span className="font-bold text-slate-200">Proposal Email Sent</span>
              <span className="text-slate-500">10:30 AM</span>
            </div>
            <div className="text-slate-400 text-[9px]">Commercial proposal v2 sent to VP of Procurement</div>
          </div>
        </div>

        <div className="flex items-start gap-2 bg-[#1F2937] p-2 rounded border border-slate-800">
          <PhoneCall className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="flex-1">
            <div className="flex justify-between">
              <span className="font-bold text-slate-200">Follow-up Call Scheduled</span>
              <span className="text-slate-500">Today 4:00 PM</span>
            </div>
            <div className="text-slate-400 text-[9px]">Review implementation timeline and milestone sign-off</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CrmConversionVisual() {
  return (
    <div className="w-full bg-[#111827] rounded-xl p-3.5 border border-slate-800 text-slate-100 text-xs select-none flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 text-[10px] font-bold border border-blue-500/30">
          1. Lead Intake
        </div>
        <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
        <div className="px-2.5 py-1 rounded bg-purple-500/20 text-purple-300 text-[10px] font-bold border border-purple-500/30">
          2. Qualified Deal
        </div>
        <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
        <div className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold border border-amber-500/30">
          3. Commercial Quotation
        </div>
        <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
        <div className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
          4. Registered Customer
        </div>
      </div>
      <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[10px] bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/20">
        <ShieldCheck className="w-3.5 h-3.5" /> Zero Data Duplication
      </div>
    </div>
  );
}

