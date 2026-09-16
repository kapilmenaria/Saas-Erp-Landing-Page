"use client";

import React, { useState } from "react";
import {
  Target,
  Mail,
  Zap,
  BarChart3,
  TrendingUp,
} from "lucide-react";

interface ShowcaseTab {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  metricLabel: string;
  metricVal: string;
  badge: string;
  cards: { title: string; client: string; amount: string; owner: string; status: string }[];
}

const tabs: ShowcaseTab[] = [
  {
    id: "pipeline",
    title: "Pipeline Management",
    subtitle: "Visual drag-and-drop deal tracking with automated probability scoring.",
    icon: Target,
    metricLabel: "Active Pipeline Value",
    metricVal: "$3,420,000",
    badge: "Kanban & Stage Automation",
    cards: [
      { title: "Enterprise Cloud License", client: "Acme Corp", amount: "$140,000", owner: "Sarah J.", status: "Proposal" },
      { title: "ERP Integration Add-on", client: "Global Freight", amount: "$85,000", owner: "Michael V.", status: "Negotiation" },
      { title: "AI Automation Retainer", client: "Meridian Bio", amount: "$210,000", owner: "Elena R.", status: "Contract Sent" },
      { title: "Security Audit Package", client: "Northwind", amount: "$65,000", owner: "David C.", status: "Qualified" },
    ],
  },
  {
    id: "omnichannel",
    title: "Omnichannel Communications",
    subtitle: "Consolidate emails, calls, WhatsApp & meetings into a single timeline.",
    icon: Mail,
    metricLabel: "Avg Response Time",
    metricVal: "4.2 Minutes",
    badge: "Unified Activity Stream",
    cards: [
      { title: "Inbound Lead Email", client: "Apex Tech", amount: "$95,000", owner: "Sarah J.", status: "Email Synced" },
      { title: "Demo Call Requested", client: "Vortex Labs", amount: "$120,000", owner: "Elena R.", status: "Call Scheduled" },
      { title: "WhatsApp Quote Query", client: "Starlight Corp", amount: "$45,000", owner: "Michael V.", status: "Chat Active" },
    ],
  },
  {
    id: "automation",
    title: "Sales Automation & AI",
    subtitle: "Let AI score incoming prospects, route deals, and generate proposals.",
    icon: Zap,
    metricLabel: "Hours Saved / Rep / Wk",
    metricVal: "14.5 Hours",
    badge: "AI Workflow Copilot",
    cards: [
      { title: "AI Score: 96/100 (High Intent)", client: "Titanium Tech", amount: "$310,000", owner: "Auto-Routed", status: "Priority 1" },
      { title: "Auto-Proposal Generated", client: "Cascade Logistics", amount: "$115,000", owner: "Auto-Generated", status: "Proposal Sent" },
    ],
  },
  {
    id: "analytics",
    title: "Revenue Forecasting",
    subtitle: "Real-time revenue prediction algorithm based on stage velocity.",
    icon: BarChart3,
    metricLabel: "Q4 Forecast Accuracy",
    metricVal: "98.4%",
    badge: "Predictive Analytics",
    cards: [
      { title: "Weighted Q4 Projection", client: "Aggregate Revenue", amount: "$2,850,000", owner: "System Forecast", status: "98.4% Confidence" },
      { title: "Upsell Expansion Target", client: "Existing Customers", amount: "$540,000", owner: "Account Managers", status: "In Progress" },
    ],
  },
];

export default function CrmTabShowcase() {
  const [activeTabId, setActiveTabId] = useState<string>("pipeline");

  const currentTab = tabs.find((t) => t.id === activeTabId) || tabs[0];
  const Icon = currentTab.icon;

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="px-3.5 py-1 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest">
          Integrated Workflows
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
          Teams that work together, win together.
        </h2>
        <p className="text-slate-600 text-base mt-2">
          Empower reps, sales leaders, and account managers with real-time pipeline visibility and zero manual overhead.
        </p>
      </div>

      {/* Tab Navigation Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {tabs.map((tab) => {
          const TabIcon = tab.icon;
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs font-bold transition-all duration-300 ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 border border-blue-600"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-blue-400 hover:text-blue-600 shadow-sm"
              }`}
            >
              <TabIcon className="w-4 h-4" />
              <span>{tab.title}</span>
            </button>
          );
        })}
      </div>

      {/* Showcase Card Display */}
      <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xl shadow-slate-200/50">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase mb-2">
              <Icon className="w-3.5 h-3.5" />
              {currentTab.badge}
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">{currentTab.title}</h3>
            <p className="text-sm text-slate-600 mt-1">{currentTab.subtitle}</p>
          </div>

          <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 px-5 py-3 rounded-2xl">
            <TrendingUp className="w-6 h-6 text-emerald-600" />
            <div>
              <div className="text-[11px] text-slate-500 font-medium">{currentTab.metricLabel}</div>
              <div className="text-xl font-black text-slate-900">{currentTab.metricVal}</div>
            </div>
          </div>
        </div>

        {/* Live Interactive UI Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentTab.cards.map((card, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-blue-400 transition-all group hover:bg-white hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700 border border-blue-200">
                  {card.status}
                </span>
                <span className="text-xs font-bold text-emerald-600">{card.amount}</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {card.title}
              </h4>
              <div className="mt-3 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                <span>{card.client}</span>
                <span className="font-semibold text-slate-700">{card.owner}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
