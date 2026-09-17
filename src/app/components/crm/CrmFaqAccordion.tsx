"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How long does it take to migrate our existing CRM data into Warrgyizmorsch?",
    answer:
      "Most sales teams complete migration in under 48 hours. Warrgyizmorsch includes built-in CSV/Excel importers and direct 1-click connectors for Salesforce, HubSpot, Zoho, and Pipedrive with automatic field mapping.",
  },
  {
    question: "How does Warrgyizmorsch AI Lead Scoring calculate deal probability?",
    answer:
      "Warrgyizmorsch AI analyzes historical deal velocity, lead engagement signals (email opens, link clicks, meeting frequency), deal size, and firmographic fit to assign a real-time win score between 1 and 100.",
  },
  {
    question: "Does Warrgyizmorsch CRM sync automatically with Inventory and Accounting?",
    answer:
      "Yes! When a opportunity moves to 'Won' or a proposal is accepted, Warrgyizmorsch can automatically trigger a binding Sales Order, reserve inventory stock, and generate an Invoice in the Accounting module.",
  },
  {
    question: "Can we customize sales pipelines and deal stages?",
    answer:
      "Absolutely. You can define custom pipeline stages, set required fields per stage, configure automated email triggers, and assign custom territory routing rules to fit your exact sales process.",
  },
  {
    question: "Is bi-directional email and calendar sync supported?",
    answer:
      "Yes, Warrgyizmorsch seamlessly integrates with Google Workspace and Microsoft 365. All sent emails, meeting invites, and call logs are synchronized automatically to the contact's timeline.",
  },
];

export default function CrmFaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <span className="px-3.5 py-1 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest">
          Got Questions?
        </span>
        <h2 className="text-3xl font-extrabold text-slate-900 mt-3">Frequently Asked Questions</h2>
        <p className="text-slate-600 text-sm mt-1">Everything you need to know about Warrgyizmorsch CRM.</p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "bg-white border-blue-400 shadow-md shadow-blue-100"
                  : "bg-white border-slate-200 hover:border-slate-300"
              }`}
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-sm font-bold text-slate-900 flex items-center gap-3">
                  <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
