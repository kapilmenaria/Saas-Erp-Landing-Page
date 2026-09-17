"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target,
  Sparkles,
  Zap,
  TrendingUp,
  UserCheck,
  PhoneCall,
  Mail,
  CheckCircle2,
  DollarSign,
  ChevronRight,
  Plus,
} from "lucide-react";

interface LeadCard {
  id: string;
  name: string;
  company: string;
  value: string;
  aiScore: number;
  stage: "New" | "Qualified" | "Proposal" | "Won";
  lastActivity: string;
}

const initialLeads: LeadCard[] = [
  { id: "L-101", name: "Sarah Jenkins", company: "Apex Tech Corp", value: "$124,000", aiScore: 96, stage: "Qualified", lastActivity: "Demo Call Scheduled" },
  { id: "L-102", name: "David Vance", company: "Global Logistics Ltd", value: "$85,500", aiScore: 92, stage: "Proposal", lastActivity: "Quote Sent (1-Click)" },
  { id: "L-103", name: "Elena Rostova", company: "Meridian Labs", value: "$210,000", aiScore: 98, stage: "Won", lastActivity: "Sales Order Bridges Created" },
  { id: "L-104", name: "Alex Rivera", company: "Cascade Dynamics", value: "$64,000", aiScore: 84, stage: "New", lastActivity: "Inbound Web Inquiry" },
];

export default function CrmHeroVisual() {
  const [leads, setLeads] = useState<LeadCard[]>(initialLeads);
  const [selectedLeadId, setSelectedLeadId] = useState<string>("L-102");

  const selectedLead = leads.find((l) => l.id === selectedLeadId) ?? leads[0];

  const moveStage = (id: string, newStage: LeadCard["stage"]) => {
    setLeads((prev) =>
      prev.map((l) => (l.id === id ? { ...l, stage: newStage } : l))
    );
  };

  return (
    <div className="bg-slate-900 text-white p-4 sm:p-6 rounded-2xl shadow-2xl border border-slate-800 font-sans space-y-6">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-black text-white flex items-center gap-2">
              <span>Deal Pipeline Command Center</span>
              <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-bold border border-blue-400/30">
                AI Predictive Enabled
              </span>
            </h3>
            <p className="text-xs text-slate-400">Q3 Deal Pipeline Velocity & Opportunity Scoring</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-bold text-emerald-400 flex items-center gap-1.5">
            <DollarSign className="w-3.5 h-3.5" />
            <span>Pipeline: $483,500</span>
          </div>
        </div>
      </div>

      {/* Main Kanban & Lead Inspector Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Kanban Stages (2 Cols) */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {(["New", "Qualified", "Proposal"] as const).map((stage) => {
            const stageLeads = leads.filter((l) => l.stage === stage);
            return (
              <div key={stage} className="p-3 rounded-xl bg-slate-850 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${stage === "New" ? "bg-amber-400" : stage === "Qualified" ? "bg-blue-400" : "bg-purple-400"}`} />
                    {stage} ({stageLeads.length})
                  </span>
                </div>

                <div className="space-y-2.5">
                  {stageLeads.map((lead) => {
                    const isSelected = lead.id === selectedLeadId;
                    return (
                      <motion.div
                        key={lead.id}
                        onClick={() => setSelectedLeadId(lead.id)}
                        whileHover={{ scale: 1.02 }}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer space-y-2 ${
                          isSelected
                            ? "bg-slate-800 border-blue-500 ring-2 ring-blue-500/30 shadow-lg"
                            : "bg-slate-900/90 border-slate-750 hover:border-slate-700"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-white truncate max-w-[120px]">{lead.company}</span>
                          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">
                            Score: {lead.aiScore}
                          </span>
                        </div>

                        <div className="text-sm font-extrabold text-blue-400">{lead.value}</div>

                        <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                          <span className="truncate">{lead.name}</span>
                          {stage !== "Proposal" && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                moveStage(lead.id, stage === "New" ? "Qualified" : "Proposal");
                              }}
                              className="text-blue-400 hover:text-blue-300 font-bold flex items-center gap-0.5 text-[10px] cursor-pointer"
                            >
                              <span>Advance</span>
                              <ChevronRight className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Lead Inspector Drawer (1 Col) */}
        <div className="p-4 rounded-xl bg-slate-850 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Opportunity Profile</span>
            <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-bold">
              {selectedLead.id}
            </span>
          </div>

          <div className="space-y-3">
            <div>
              <h4 className="text-base font-black text-white">{selectedLead.company}</h4>
              <p className="text-xs text-slate-400">{selectedLead.name} (Decision Maker)</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Deal Value:</span>
                <span className="font-extrabold text-blue-400">{selectedLead.value}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">AI Win Probability:</span>
                <span className="font-bold text-emerald-400">{selectedLead.aiScore}% Match</span>
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Activity Log</span>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2 text-xs text-slate-300">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="truncate">{selectedLead.lastActivity}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => moveStage(selectedLead.id, "Won")}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Bridge 1-Click Sales Order</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
