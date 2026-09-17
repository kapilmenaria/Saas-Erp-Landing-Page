"use client";

import React from "react";
import {
  FolderKanban,
  CheckCircle2,
  BarChart3,
  Users,
  Clock,
} from "lucide-react";

export function ProjectGanttVisual() {
  return (
    <div className="w-full bg-[#111827] rounded-xl p-3.5 border border-slate-800 text-slate-100 text-xs select-none shadow-lg">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <FolderKanban className="w-4 h-4 text-indigo-400" />
          <span className="font-bold text-slate-200">Project Cost Center & Milestone Timeline</span>
        </div>
        <span className="text-[10px] text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 font-bold">
          Cost Center: PRJ-2026-HQ
        </span>
      </div>

      <div className="space-y-2 text-[10px]">
        <div>
          <div className="flex justify-between mb-1 text-slate-300">
            <span>Milestone 1: ERP Infrastructure Setup</span>
            <span className="text-emerald-400 font-bold">100% Completed</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
            <div className="w-[100%] h-full bg-emerald-500 rounded-full" />
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1 text-slate-300">
            <span>Milestone 2: Custom API Connectors & Testing</span>
            <span className="text-indigo-400 font-bold">75% In Progress</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
            <div className="w-[75%] h-full bg-indigo-500 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectUtilizationVisual() {
  return (
    <div className="w-full bg-[#111827] rounded-xl p-3.5 border border-slate-800 text-slate-100 text-xs select-none">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold text-slate-300">Team Resource Capacity & Utilization</span>
        <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">
          91% Billable Utilization
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-center text-[10px]">
        <div className="bg-[#1F2937] p-2 rounded border border-slate-800">
          <div className="text-slate-400">Billable Hours Logged</div>
          <div className="font-bold text-emerald-400 text-[11px] mt-0.5">1,420 Hrs</div>
        </div>
        <div className="bg-[#1F2937] p-2 rounded border border-slate-800">
          <div className="text-slate-400">Budget vs Actual</div>
          <div className="font-bold text-indigo-400 text-[11px] mt-0.5">On Budget (95%)</div>
        </div>
      </div>
    </div>
  );
}

