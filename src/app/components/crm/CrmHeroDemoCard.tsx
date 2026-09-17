"use client";

import React, { useState } from "react";
import { Sparkles, CheckCircle2, ArrowRight, Zap } from "lucide-react";

export default function CrmHeroDemoCard() {
  const [leadName, setLeadName] = useState("Acme Corp");
  const [dealValue, setDealValue] = useState("75000");
  const [dealStage, setDealStage] = useState("Proposal");
  const [submitted, setSubmitted] = useState(false);

  const calculateAiScore = () => {
    const val = parseInt(dealValue) || 0;
    if (val > 100000) return { score: 94, tier: "High Priority", color: "text-emerald-700 bg-emerald-50 border-emerald-200" };
    if (val > 50000) return { score: 86, tier: "Medium High", color: "text-blue-700 bg-blue-50 border-blue-200" };
    return { score: 72, tier: "Standard Lead", color: "text-indigo-700 bg-indigo-50 border-indigo-200" };
  };

  const aiScoreInfo = calculateAiScore();

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Decorative Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-300 rounded-3xl blur-xl opacity-40 animate-pulse" />

      <div className="relative rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-2xl shadow-slate-300/50 backdrop-blur-xl">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Live AI Lead Simulator</h3>
              <p className="text-xs text-slate-500">Test Warrgyizmorsch Lead Scoring & Pipeline Sync</p>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-blue-50 text-blue-600 border border-blue-200">
            Interactive
          </span>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Pipeline Record Created!</h4>
            <p className="text-xs text-slate-600 max-w-xs mx-auto">
              <strong>{leadName}</strong> added to <em>{dealStage}</em> with predicted AI Win Probability of {aiScoreInfo.score}%.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-2 text-xs font-semibold text-blue-600 hover:text-blue-800 underline"
            >
              Simulate Another Deal
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Lead / Account Name
              </label>
              <input
                type="text"
                value={leadName}
                onChange={(e) => setLeadName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                placeholder="e.g. Nexus Global Corp"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Est. Deal Value ($)
                </label>
                <input
                  type="number"
                  value={dealValue}
                  onChange={(e) => setDealValue(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Pipeline Stage
                </label>
                <select
                  value={dealStage}
                  onChange={(e) => setDealStage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                >
                  <option value="Discovery">Discovery</option>
                  <option value="Proposal">Proposal Sent</option>
                  <option value="Negotiation">Negotiation</option>
                  <option value="Contract">Contract Pending</option>
                </select>
              </div>
            </div>

            {/* AI Calculation Badge */}
            <div className={`p-3.5 rounded-xl border flex items-center justify-between ${aiScoreInfo.color}`}>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-semibold">AI Predictive Win Score:</span>
              </div>
              <span className="text-sm font-extrabold">{aiScoreInfo.score}/100</span>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 transition-all group"
            >
              <span>Add Deal & Test AI Automation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
