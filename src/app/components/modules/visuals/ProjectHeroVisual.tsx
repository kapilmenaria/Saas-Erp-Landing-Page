"use client";

import React, { useState } from "react";
import {
  FolderKanban,
  Clock,
  Briefcase,
  UsersRound,
  BarChart3,
  CheckSquare,
  Play,
} from "lucide-react";

interface ProjectItem {
  id: string;
  name: string;
  lead: string;
  progress: number;
  spentBudget: string;
  status: "On Schedule" | "In Review" | "Completed";
}

const initialProjects: ProjectItem[] = [
  { id: "PRJ-301", name: "Global ERP System Implementation", lead: "David Vance", progress: 84, spentBudget: "$142k / $180k", status: "On Schedule" },
  { id: "PRJ-302", name: "Warehouse Automation Integration", lead: "Sarah Jenkins", progress: 62, spentBudget: "$88k / $95k", status: "In Review" },
  { id: "PRJ-303", name: "E-Commerce Portal Redesign", lead: "Alex Rivera", progress: 100, spentBudget: "$45k / $45k", status: "Completed" },
];

export default function ProjectHeroVisual() {
  const [projects] = useState<ProjectItem[]>(initialProjects);

  return (
    <div className="bg-slate-900 text-white p-4 sm:p-6 rounded-2xl shadow-2xl border border-slate-800 font-sans space-y-5">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <FolderKanban className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-black text-white flex items-center gap-2">
              <span>Project Milestones & Resource Hub</span>
              <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-[10px] font-bold border border-indigo-400/30">
                86.4% Billable Utilization
              </span>
            </h3>
            <p className="text-xs text-slate-400">Gantt Schedules, Capacity Planning & Live Profitability Margin</p>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-300">
          <Clock className="w-4 h-4 text-indigo-400" />
          <span>Stopwatch Timesheet Synced</span>
        </div>
      </div>

      {/* Projects Table with Gantt Progress Bar */}
      <div className="overflow-x-auto rounded-xl border border-slate-800">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-850 text-slate-400 text-[11px] font-bold uppercase tracking-wider border-b border-slate-800">
              <th className="py-3 px-4">Project ID</th>
              <th className="py-3 px-4">Project Name</th>
              <th className="py-3 px-4">Lead PM</th>
              <th className="py-3 px-4 text-center">Gantt Completion</th>
              <th className="py-3 px-4 text-right">Spent vs Budget</th>
              <th className="py-3 px-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-xs text-slate-200">
            {projects.map((prj) => (
              <tr key={prj.id} className="hover:bg-slate-800/60 transition-colors">
                <td className="py-3 px-4 font-mono font-bold text-indigo-400">{prj.id}</td>
                <td className="py-3 px-4 font-semibold text-white">{prj.name}</td>
                <td className="py-3 px-4 text-slate-400">{prj.lead}</td>
                <td className="py-3 px-4 text-center min-w-[140px]">
                  <div className="space-y-1">
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-700">
                      <div
                        className="bg-indigo-500 h-full rounded-full transition-all duration-500"
                        style={{ width: `${prj.progress}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-indigo-300 font-bold">{prj.progress}% Complete</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-right font-extrabold text-white">{prj.spentBudget}</td>
                <td className="py-3 px-4 text-center">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                      prj.status === "Completed"
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        : prj.status === "On Schedule"
                        ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                        : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                    }`}
                  >
                    <CheckSquare className="w-3 h-3" />
                    {prj.status}
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
