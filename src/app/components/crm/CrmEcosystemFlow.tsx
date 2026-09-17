"use client";

import React, { useState } from "react";
import {
  Users,
  Target,
  Mail,
  MessageSquare,
  Sparkles,
  RefreshCw,
  Receipt,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

interface NodeItem {
  id: string;
  label: string;
  sub: string;
  icon: React.ComponentType<{ className?: string }>;
  x: number; // percentage from center
  y: number; // percentage from center
  color: string;
}

const nodes: NodeItem[] = [
  { id: "leads", label: "Leads & Contacts", sub: "360° Profile", icon: Users, x: 0, y: -160, color: "#2563eb" },
  { id: "pipeline", label: "Deal Pipeline", sub: "Stage Automation", icon: Target, x: 170, y: -90, color: "#4f46e5" },
  { id: "omnichannel", label: "Email & Telephony", sub: "Bi-directional Sync", icon: Mail, x: 210, y: 50, color: "#7c3aed" },
  { id: "whatsapp", label: "WhatsApp & Chat", sub: "Instant Messaging", icon: MessageSquare, x: 120, y: 170, color: "#059669" },
  { id: "analytics", label: "Revenue Analytics", sub: "Live Forecasts", icon: BarChart3, x: -120, y: 170, color: "#db2777" },
  { id: "billing", label: "Invoicing & Billing", sub: "Instant Conversion", icon: Receipt, x: -210, y: 50, color: "#d97706" },
  { id: "erp", label: "ERP & Inventory", sub: "Real-time Stock", icon: RefreshCw, x: -170, y: -90, color: "#0284c7" },
  { id: "ai", label: "AI Lead Scoring", sub: "Predictive Analytics", icon: Sparkles, x: 0, y: 190, color: "#9333ea" },
];

export default function CrmEcosystemFlow() {
  const [activeNode, setActiveNode] = useState<NodeItem>(nodes[0]);

  return (
    <div className="relative py-12 px-4 bg-slate-50/80 rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/50 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-200/30 via-indigo-200/30 to-purple-200/30 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
        <span className="px-3.5 py-1 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest">
          360° Connected Architecture
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
          Everything connected with a complete 360° view.
        </h3>
        <p className="text-sm text-slate-600 mt-2">
          Click any ecosystem node below to inspect real-time sync capabilities across your revenue engine.
        </p>
      </div>

      {/* Diagram Canvas */}
      <div className="relative w-full max-w-4xl h-[460px] mx-auto flex items-center justify-center">
        {/* SVG Connecting Rays */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
          {nodes.map((n) => {
            const isSelected = activeNode.id === n.id;
            return (
              <line
                key={n.id}
                x1="50%"
                y1="50%"
                x2={`calc(50% + ${n.x}px)`}
                y2={`calc(50% + ${n.y}px)`}
                stroke={isSelected ? n.color : "rgba(203, 213, 225, 0.8)"}
                strokeWidth={isSelected ? "2.5" : "1.5"}
                strokeDasharray={isSelected ? "6 6" : "none"}
                className={isSelected ? "animate-[dashStream_1s_linear_infinite]" : ""}
              />
            );
          })}
        </svg>

        {/* Orbit Ring Background */}
        <div className="absolute w-[360px] h-[360px] rounded-full border border-slate-200/90 pointer-events-none" />
        <div className="absolute w-[440px] h-[440px] rounded-full border border-slate-200/50 pointer-events-none" />

        {/* Central Core Hub */}
        <div className="relative z-20 w-32 h-32 rounded-3xl bg-white border-2 border-blue-600 shadow-[0_0_40px_rgba(37,99,235,0.2)] flex flex-col items-center justify-center text-center p-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white mb-1 shadow-md">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="text-xs font-black text-slate-900 tracking-wider">NEXA CRM</span>
          <span className="text-[10px] text-blue-600 font-semibold">Core Engine</span>
        </div>

        {/* Orbiting Nodes */}
        {nodes.map((n) => {
          const NodeIcon = n.icon;
          const isSelected = activeNode.id === n.id;
          return (
            <button
              key={n.id}
              onClick={() => setActiveNode(n)}
              className={`absolute z-30 px-3.5 py-2 rounded-2xl flex items-center gap-2.5 transition-all duration-300 cursor-pointer ${
                isSelected
                  ? "bg-white border-2 shadow-xl scale-110"
                  : "bg-white/90 border border-slate-200/90 hover:border-slate-400 hover:scale-105 shadow-md"
              }`}
              style={{
                left: `calc(50% + ${n.x}px - 70px)`,
                top: `calc(50% + ${n.y}px - 20px)`,
                borderColor: isSelected ? n.color : undefined,
                boxShadow: isSelected ? `0 0 20px ${n.color}35` : undefined,
              }}
            >
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${n.color}15`, color: n.color }}
              >
                <NodeIcon className="w-4 h-4" />
              </div>
              <div className="text-left hidden sm:block">
                <div className="text-xs font-bold text-slate-900 leading-tight">{n.label}</div>
                <div className="text-[10px] text-slate-500">{n.sub}</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Node Status Footer Banner */}
      <div className="mt-6 max-w-xl mx-auto p-4 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-between text-xs text-slate-700 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          <span>
            Active Link: <strong className="text-slate-900">{activeNode.label}</strong> ({activeNode.sub})
          </span>
        </div>
        <span className="text-blue-600 font-semibold flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5" /> Bi-directional Sync
        </span>
      </div>
    </div>
  );
}

