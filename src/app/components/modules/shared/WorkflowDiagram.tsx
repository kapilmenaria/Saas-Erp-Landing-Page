"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";

export interface WorkflowStepNode {
  stepNumber: number;
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  contextHighlight?: string;
}

interface WorkflowDiagramProps {
  steps: WorkflowStepNode[];
  moduleTitle?: string;
}

export default function WorkflowDiagram({ steps, moduleTitle = "Workflow Engine" }: WorkflowDiagramProps) {
  const [activeStep, setActiveStep] = useState<number>(1);

  const currentStepData = steps.find((s) => s.stepNumber === activeStep) ?? steps[0];

  return (
    <div className="space-y-8">
      {/* Workflow Nodes Grid / Sequence */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        {steps.map((step, idx) => {
          const isActive = step.stepNumber === activeStep;
          const StepIcon = step.icon;

          return (
            <div key={step.stepNumber} className="relative flex flex-col">
              {/* Connector Arrow for Desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-7 z-20 text-slate-300">
                  <ChevronRight className={`w-5 h-5 transition-colors ${isActive ? "text-blue-600" : ""}`} />
                </div>
              )}

              {/* Step Interactive Card */}
              <button
                type="button"
                onClick={() => setActiveStep(step.stepNumber)}
                onMouseEnter={() => setActiveStep(step.stepNumber)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer relative overflow-hidden flex flex-col justify-between h-full ${
                  isActive
                    ? "bg-white border-blue-500 shadow-xl shadow-blue-500/10 ring-2 ring-blue-500/20"
                    : "bg-white/70 hover:bg-white border-slate-200/90 shadow-xs hover:border-slate-300"
                }`}
              >
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-8 h-8 rounded-xl font-bold text-xs flex items-center justify-center transition-colors ${
                      isActive ? "bg-blue-600 text-white shadow-sm" : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {step.stepNumber}
                  </div>
                  {StepIcon && (
                    <div className={`p-1.5 rounded-lg ${isActive ? "text-blue-600 bg-blue-50" : "text-slate-400"}`}>
                      <StepIcon className="w-4 h-4" />
                    </div>
                  )}
                </div>

                <div className="space-y-1.5">
                  <h3 className={`text-sm font-extrabold ${isActive ? "text-blue-600" : "text-slate-900"}`}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {step.description}
                  </p>
                </div>

                {/* Active Indicator Bar */}
                {isActive && (
                  <motion.div
                    layoutId="activeWorkflowIndicator"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600"
                  />
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* Contextual Active Step Preview Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[11px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Step {currentStepData.stepNumber} Active Output
            </div>
            <h4 className="text-lg font-bold text-white">
              {currentStepData.title} Automation
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {currentStepData.contextHighlight || currentStepData.description}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-bold text-blue-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <span>System Event Verified</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
