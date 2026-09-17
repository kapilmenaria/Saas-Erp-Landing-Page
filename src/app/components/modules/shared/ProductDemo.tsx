"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";
import ProductWindow from "./ProductWindow";
import ProductCursor from "./ProductCursor";

export interface DemoActionStep {
  stepIndex: number;
  cursorX: number;
  cursorY: number;
  actionLabel: string;
  isClicking?: boolean;
  activeTabName?: string;
  activeStatusText?: string;
  description?: string;
}

interface ProductDemoProps {
  title: string;
  badge?: string;
  tabs?: string[];
  steps: DemoActionStep[];
  children: (props: {
    currentStep: DemoActionStep;
    activeTab: string;
  }) => React.ReactNode;
}

export default function ProductDemo({
  title,
  badge = "Interactive Simulation",
  tabs = ["Overview", "Live Data", "Audit Log"],
  steps,
  children,
}: ProductDemoProps) {
  const [currentStepIdx, setCurrentStepIdx] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>(
    tabs[0] || "Overview"
  );

  const currentStep = steps[currentStepIdx] || steps[0];

  useEffect(() => {
    if (!isPlaying || steps.length === 0) return;

    const timer = setTimeout(() => {
      setCurrentStepIdx((prev) => {
        const next = (prev + 1) % steps.length;
        if (steps[next]?.activeTabName) {
          setActiveTab(steps[next].activeTabName);
        }
        return next;
      });
    }, 3200);

    return () => clearTimeout(timer);
  }, [isPlaying, currentStepIdx, steps]);

  return (
    <div className="space-y-4 font-sans">
      {/* Demo Controls Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 rounded-xl bg-slate-900 text-white border border-slate-800 shadow-md">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-8 h-8 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold flex items-center justify-center transition-colors cursor-pointer"
            aria-label={isPlaying ? "Pause Demo" : "Play Demo"}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={() => {
              setCurrentStepIdx(0);
              if (steps[0]?.activeTabName) setActiveTab(steps[0].activeTabName);
            }}
            className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Restart Demo"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          <span className="h-4 w-px bg-slate-700 hidden sm:inline-block" />

          <div className="flex items-center gap-2 text-xs">
            <span className="font-mono text-blue-400 font-bold">
              Step {currentStepIdx + 1} of {steps.length}:
            </span>
            <span className="text-slate-200 font-medium truncate max-w-[240px] sm:max-w-md">
              {currentStep.actionLabel}
            </span>
          </div>
        </div>

        {/* Step Progress Dots */}
        <div className="flex items-center gap-1.5">
          {steps.map((s, idx) => (
            <button
              key={s.stepIndex}
              type="button"
              onClick={() => {
                setCurrentStepIdx(idx);
                if (s.activeTabName) setActiveTab(s.activeTabName);
              }}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                idx === currentStepIdx
                  ? "w-6 bg-blue-500"
                  : "w-2 bg-slate-700 hover:bg-slate-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Software Window Container with Simulated Cursor */}
      <ProductWindow
        title={title}
        badge={badge}
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={(t) => setActiveTab(t)}
        className="relative shadow-2xl"
      >
        {/* Animated Interactive Cursor */}
        <ProductCursor
          x={currentStep.cursorX}
          y={currentStep.cursorY}
          actionText={currentStep.actionLabel}
          isClicking={currentStep.isClicking}
        />

        {/* Dynamic Simulated UI Render */}
        <div className="p-4 sm:p-6 min-h-[380px] relative z-10">
          {children({ currentStep, activeTab })}
        </div>
      </ProductWindow>
    </div>
  );
}
