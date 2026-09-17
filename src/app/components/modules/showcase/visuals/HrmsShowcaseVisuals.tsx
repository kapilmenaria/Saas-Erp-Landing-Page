"use client";

import React from "react";
import {
  UsersRound,
  Clock,
  Receipt,
  FileCheck2,
  CheckCircle2,
  LockKeyhole,
} from "lucide-react";

export function HrmsProfileVisual() {
  return (
    <div className="w-full bg-[#111827] rounded-xl p-3.5 border border-slate-800 text-slate-100 text-xs select-none">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <UsersRound className="w-4 h-4 text-rose-400" />
          <span className="font-bold text-slate-200">Employee 360° Profile & Compliance Vault</span>
        </div>
        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
          Active Employee
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
        <div className="bg-[#1F2937] p-2 rounded border border-slate-800">
          <div className="text-slate-400">Employee ID</div>
          <div className="font-bold text-slate-200 mt-0.5">EMP-8812</div>
        </div>
        <div className="bg-[#1F2937] p-2 rounded border border-slate-800">
          <div className="text-slate-400">Designation</div>
          <div className="font-bold text-rose-400 mt-0.5">Sr. Plant Engineer</div>
        </div>
        <div className="bg-[#1F2937] p-2 rounded border border-slate-800">
          <div className="text-slate-400">Compliance Vault</div>
          <div className="font-bold text-emerald-400 mt-0.5">PAN/PF Verified</div>
        </div>
      </div>
    </div>
  );
}

export function HrmsAttendanceVisual() {
  return (
    <div className="w-full bg-[#111827] rounded-xl p-3.5 border border-slate-800 text-slate-100 text-xs select-none shadow-lg">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-blue-400" />
          <span className="font-bold text-slate-200">Biometric Device Attendance & Shift Roster</span>
        </div>
        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
          Daily Punch Rate: 98.2%
        </span>
      </div>

      <div className="space-y-1.5 text-[10px]">
        <div className="flex justify-between p-2 rounded bg-[#1F2937] border border-slate-800">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Shift A (09:00 - 18:00) • 334 Punches Verified</span>
          </div>
          <span className="text-emerald-400 font-bold">Punches In Sync</span>
        </div>
        <div className="flex justify-between p-2 rounded bg-[#1F2937] border border-slate-800 text-slate-400">
          <span>6 Employees On Approved Annual Leave</span>
          <span className="text-blue-400">Leave Balance Deducted</span>
        </div>
      </div>
    </div>
  );
}

export function HrmsPayrollVisual() {
  return (
    <div className="w-full bg-[#111827] rounded-xl p-3.5 border border-slate-800 text-slate-100 text-xs select-none">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold text-slate-300">Automated Monthly Payroll Run</span>
        <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">
          100% Tax Compliant
        </span>
      </div>

      <div className="space-y-1.5 text-[10px]">
        <div className="flex justify-between p-1.5 rounded bg-[#1F2937] text-slate-300">
          <span>Gross Salary Disbursement:</span>
          <span className="font-mono font-bold">₹ 52,40,000.00</span>
        </div>
        <div className="flex justify-between p-1.5 rounded bg-[#1F2937] text-rose-300">
          <span>PF + ESI + TDS Withholdings:</span>
          <span className="font-mono font-bold">- ₹ 9,90,000.00</span>
        </div>
        <div className="flex justify-between p-1.5 rounded bg-emerald-950/40 border border-emerald-500/40 text-emerald-300">
          <span>Net Direct Bank Disbursement:</span>
          <span className="font-mono font-bold">₹ 42,50,000.00</span>
        </div>
      </div>
    </div>
  );
}

export function HrmsExpenseVisual() {
  return (
    <div className="w-full bg-[#111827] rounded-xl p-3.5 border border-slate-800 text-slate-100 text-xs select-none">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold text-slate-300">Expense Claims & Company Assets</span>
        <span className="text-[9px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30">
          OCR Receipt Verified
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-center text-[10px]">
        <div className="bg-[#1F2937] p-2 rounded border border-slate-800">
          <div className="text-slate-400">Travel Claim #EX-901</div>
          <div className="font-bold text-emerald-400 mt-0.5">₹ 12,450 (Approved)</div>
        </div>
        <div className="bg-[#1F2937] p-2 rounded border border-slate-800">
          <div className="text-slate-400">Asset Allocation</div>
          <div className="font-bold text-slate-200 mt-0.5">MacBook M3 (SN-4412)</div>
        </div>
      </div>
    </div>
  );
}

