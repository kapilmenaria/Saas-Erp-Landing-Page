"use client";

import React, { useState, useEffect } from "react";
import {
  MousePointer2,
  Sparkles,
  Target,
  CheckCircle2,
  Zap,
} from "lucide-react";

interface StepConfig {
  id: number;
  label: string;
  cursorX: number; // percentage
  cursorY: number; // percentage
  badge: string;
  activeCardId: string;
  actionText: string;
}

const steps: StepConfig[] = [
  {
    id: 0,
    label: "AI Lead Scoring",
    cursorX: 28,
    cursorY: 38,
    badge: "AI Score: 94/100 (High Intent)",
    activeCardId: "deal-1",
    actionText: "AI identified hot prospect with 94% win probability",
  },
  {
    id: 1,
    label: "1-Click Proposal",
    cursorX: 74,
    cursorY: 42,
    badge: "Proposal Auto-Generated",
    activeCardId: "deal-1",
    actionText: "Generated & sent customized quote in 3 seconds",
  },
  {
    id: 2,
    label: "Stage Automation",
    cursorX: 52,
    cursorY: 72,
    badge: "Moved to Negotiation",
    activeCardId: "deal-2",
    actionText: "Automated pipeline stage update & rep task alert",
  },
  {
    id: 3,
    label: "Revenue Sync",
    cursorX: 82,
    cursorY: 78,
    badge: "Synced to Invoicing",
    activeCardId: "deal-3",
    actionText: "Converted deal to binding sales order & invoice",
  },
];

export default function CrmHeroInteractiveDashboard() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const currentStep = steps[activeStep];

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Background Ambient Glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-cyan-400/20 rounded-3xl blur-2xl opacity-75" />

      {/* Main Dashboard Window Container */}
      <div
        className="relative rounded-2xl bg-white border border-slate-200/90 shadow-2xl shadow-slate-300/60 overflow-hidden text-slate-900"
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        {/* Window Topbar */}
        <div className="px-4 py-3 bg-slate-100/90 border-b border-slate-200 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="ml-2 font-mono text-[11px] text-slate-500">nexa-crm/pipeline-live</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-700 text-[10px] font-extrabold flex items-center gap-1 border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              Live Demo
            </span>
          </div>
        </div>

        {/* Dashboard Subheader Stat Strip */}
        <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold shadow-xs">
              <Target className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Active Pipeline</div>
              <div className="font-extrabold text-slate-900 text-sm">$1,450,000</div>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>AI Predictive Win Rate: 92%</span>
          </div>
        </div>

        {/* Live Interactive Board Panel */}
        <div className="relative p-5 bg-slate-50/50 min-h-[310px]">
          {/* Animated Moving Cursor Element */}
          <div
            className="absolute z-40 transition-all duration-700 ease-out pointer-events-none"
            style={{
              left: `${currentStep.cursorX}%`,
              top: `${currentStep.cursorY}%`,
            }}
          >
            <div className="relative">
              <MousePointer2 className="w-6 h-6 text-blue-600 fill-blue-600 drop-shadow-[0_4px_8px_rgba(37,99,235,0.4)] animate-bounce" />
              <div className="absolute left-5 top-4 px-2.5 py-1 rounded-lg bg-blue-600 text-white text-[10px] font-bold whitespace-nowrap shadow-lg shadow-blue-600/30">
                {currentStep.label}
              </div>
            </div>
          </div>

          {/* Kanban Deal Columns Mockup */}
          <div className="grid grid-cols-3 gap-3">
            {/* Column 1: Discovery */}
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                <span>Discovery</span>
                <span className="px-1.5 py-0.2 rounded bg-slate-200 text-slate-700 text-[10px]">2</span>
              </div>

              <div
                className={`p-3 rounded-xl bg-white border transition-all duration-300 ${
                  currentStep.activeCardId === "deal-1"
                    ? "border-blue-500 ring-2 ring-blue-100 shadow-md scale-[1.02]"
                    : "border-slate-200 shadow-xs"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-slate-900">Apex Tech</span>
                  <span className="text-[10px] font-extrabold text-blue-600">$145k</span>
                </div>
                <div className="text-[10px] text-slate-500 mb-2">Cloud Infrastructure</div>

                <div className="flex items-center justify-between pt-1.5 border-t border-slate-100 text-[9px]">
                  <span className="px-1.5 py-0.5 rounded bg-purple-100 text-purple-700 font-bold flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5" /> 94 Score
                  </span>
                  <span className="text-slate-400 font-medium">Sarah J.</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs opacity-80">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-slate-800">Vortex Labs</span>
                  <span className="text-[10px] font-bold text-slate-600">$82k</span>
                </div>
                <div className="text-[10px] text-slate-400">Security Audit</div>
              </div>
            </div>

            {/* Column 2: Proposal */}
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                <span>Proposal</span>
                <span className="px-1.5 py-0.2 rounded bg-slate-200 text-slate-700 text-[10px]">1</span>
              </div>

              <div
                className={`p-3 rounded-xl bg-white border transition-all duration-300 ${
                  currentStep.activeCardId === "deal-2"
                    ? "border-indigo-500 ring-2 ring-indigo-100 shadow-md scale-[1.02]"
                    : "border-slate-200 shadow-xs"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-slate-900">Global Freight</span>
                  <span className="text-[10px] font-extrabold text-indigo-600">$210k</span>
                </div>
                <div className="text-[10px] text-slate-500 mb-2">ERP Integration</div>

                <div className="flex items-center justify-between pt-1.5 border-t border-slate-100 text-[9px]">
                  <span className="px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 font-bold">
                    Quote Sent
                  </span>
                  <span className="text-slate-400 font-medium">Michael V.</span>
                </div>
              </div>
            </div>

            {/* Column 3: Won / Closed */}
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                <span>Won & Synced</span>
                <span className="px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">3</span>
              </div>

              <div
                className={`p-3 rounded-xl bg-white border transition-all duration-300 ${
                  currentStep.activeCardId === "deal-3"
                    ? "border-emerald-500 ring-2 ring-emerald-100 shadow-md scale-[1.02]"
                    : "border-slate-200 shadow-xs"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-slate-900">Meridian Bio</span>
                  <span className="text-[10px] font-extrabold text-emerald-600">$310k</span>
                </div>
                <div className="text-[10px] text-slate-500 mb-2">Enterprise Plan</div>

                <div className="flex items-center justify-between pt-1.5 border-t border-slate-100 text-[9px]">
                  <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-2.5 h-2.5" /> Order Issued
                  </span>
                  <span className="text-slate-400 font-medium">Elena R.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Action Banner Notification */}
          <div className="mt-4 p-3 rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 flex items-center justify-between text-xs transition-all">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-300 shrink-0" />
              <span className="font-semibold text-[11px]">{currentStep.actionText}</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-white/20 text-white text-[10px] font-bold shrink-0">
              {currentStep.badge}
            </span>
          </div>
        </div>

        {/* Step Selector Controls Footer */}
        <div className="px-4 py-3 bg-slate-100/90 border-t border-slate-200 flex items-center justify-between gap-2">
          <div className="text-[11px] font-semibold text-slate-600">Feature Walkthrough:</div>
          <div className="flex items-center gap-1.5">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => {
                  setActiveStep(step.id);
                  setIsAutoPlay(false);
                }}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${
                  activeStep === step.id
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {step.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
