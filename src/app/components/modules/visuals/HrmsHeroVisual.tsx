"use client";

import React, { useState } from "react";
import {
  UsersRound,
  CalendarCheck,
  Receipt,
  FileCheck2,
  LockKeyhole,
  Clock,
  CheckCircle2,
  Play,
} from "lucide-react";

interface Employee {
  id: string;
  name: string;
  dept: string;
  shift: string;
  attendance: "On Time" | "Approved Leave" | "Overtime (+2.5h)";
  payrollStatus: "Calculated" | "Approved" | "Dispatched";
}

const initialEmployees: Employee[] = [
  { id: "EMP-108", name: "Sarah Jenkins", dept: "Global Sales", shift: "Morning (09:00 - 18:00)", attendance: "On Time", payrollStatus: "Dispatched" },
  { id: "EMP-204", name: "David Vance", dept: "Operations & Logistics", shift: "Rotational B", attendance: "Overtime (+2.5h)", payrollStatus: "Calculated" },
  { id: "EMP-312", name: "Elena Rostova", dept: "Finance & Legal", shift: "Standard Shift", attendance: "Approved Leave", payrollStatus: "Approved" },
];

export default function HrmsHeroVisual() {
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);

  const runPayroll = (id: string) => {
    setEmployees((prev) =>
      prev.map((e) => (e.id === id ? { ...e, payrollStatus: "Dispatched" } : e))
    );
  };

  return (
    <div className="bg-slate-900 text-white p-4 sm:p-6 rounded-2xl shadow-2xl border border-slate-800 font-sans space-y-5">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400">
            <UsersRound className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-black text-white flex items-center gap-2">
              <span>Biometric Attendance & 1-Click Payroll Run</span>
              <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[10px] font-bold border border-rose-400/30">
                100% Tax Compliant
              </span>
            </h3>
            <p className="text-xs text-slate-400">Employee Self-Service, Attendance Punch Sync & Salary Disbursement</p>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-300">
          <Clock className="w-4 h-4 text-rose-400" />
          <span>Biometric Scanner Live</span>
        </div>
      </div>

      {/* Employee Roster Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-800">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-850 text-slate-400 text-[11px] font-bold uppercase tracking-wider border-b border-slate-800">
              <th className="py-3 px-4">EMP Code</th>
              <th className="py-3 px-4">Employee Name</th>
              <th className="py-3 px-4">Department</th>
              <th className="py-3 px-4 text-center">Attendance Punch Log</th>
              <th className="py-3 px-4 text-center">Monthly Payroll Status</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-xs text-slate-200">
            {employees.map((emp) => (
              <tr key={emp.id} className="hover:bg-slate-800/60 transition-colors">
                <td className="py-3 px-4 font-mono font-bold text-rose-400">{emp.id}</td>
                <td className="py-3 px-4 font-semibold text-white">{emp.name}</td>
                <td className="py-3 px-4 text-slate-400">{emp.dept}</td>
                <td className="py-3 px-4 text-center">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                      emp.attendance === "On Time"
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        : emp.attendance.includes("Overtime")
                        ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                        : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                    }`}
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    {emp.attendance}
                  </span>
                </td>
                <td className="py-3 px-4 text-center font-bold text-rose-300">{emp.payrollStatus}</td>
                <td className="py-3 px-4 text-center">
                  {emp.payrollStatus !== "Dispatched" ? (
                    <button
                      type="button"
                      onClick={() => runPayroll(emp.id)}
                      className="px-3 py-1 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-[11px] transition-colors cursor-pointer inline-flex items-center gap-1"
                    >
                      <Play className="w-3 h-3" />
                      <span>Run Pay</span>
                    </button>
                  ) : (
                    <span className="text-emerald-400 font-bold flex items-center justify-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Direct Bank Credit
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
