"use client";

import React from "react";

interface ProductWindowProps {
  title?: string;
  badge?: string;
  activeTab?: string;
  tabs?: string[];
  onTabChange?: (tab: string) => void;
  children: React.ReactNode;
  className?: string;
  headerAction?: React.ReactNode;
}

export default function ProductWindow({
  title = "Warrgyizmorsch ERP Workspace",
  badge,
  activeTab,
  tabs,
  onTabChange,
  children,
  className = "",
  headerAction,
}: ProductWindowProps) {
  return (
    <div
      className={`rounded-2xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden font-sans text-slate-800 ${className}`}
    >
      {/* Top Application Window Bar */}
      <div className="px-4 py-3 bg-slate-900 text-slate-200 flex items-center justify-between border-b border-slate-800 select-none">
        <div className="flex items-center gap-3 min-w-0">
          {/* Mac-style Window Controls */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-3 h-3 rounded-full bg-rose-500 inline-block opacity-90" />
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block opacity-90" />
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block opacity-90" />
          </div>

          <span className="h-4 w-px bg-slate-700/80 mx-1 hidden sm:inline-block" />

          {/* App Title & Badge */}
          <div className="flex items-center gap-2 min-w-0 truncate">
            <span className="text-xs font-bold tracking-tight text-white truncate">
              {title}
            </span>
            {badge && (
              <span className="px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 border border-blue-400/30 text-[10px] font-bold uppercase tracking-wider shrink-0">
                {badge}
              </span>
            )}
          </div>
        </div>

        {/* Optional Action or Status Pill */}
        <div className="flex items-center gap-3 shrink-0">
          {headerAction ? (
            headerAction
          ) : (
            <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-[11px] text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Live Production Sync</span>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Sub-Tabs (If Provided) */}
      {tabs && tabs.length > 0 && (
        <div className="px-4 py-2 bg-slate-100/90 border-b border-slate-200 flex items-center gap-1 overflow-x-auto scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => onTabChange?.(tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-white text-blue-600 shadow-xs border border-slate-200"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      )}

      {/* Inner Application Body */}
      <div className="relative bg-slate-50/50 min-h-[320px]">{children}</div>
    </div>
  );
}
