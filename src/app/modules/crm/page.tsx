"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "../modules-shared.css";
import CrmHeroDemoCard from "@/app/components/crm/CrmHeroDemoCard";
import CrmEcosystemFlow from "@/app/components/crm/CrmEcosystemFlow";
import CrmTabShowcase from "@/app/components/crm/CrmTabShowcase";
import CrmFaqAccordion from "@/app/components/crm/CrmFaqAccordion";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Star,
  Bot,
} from "lucide-react";

function LogoMark() {
  return (
    <span className="logo-mark" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

const homepageClients = [
  { name: "Northwind", glyph: "n", style: "rounded-md" },
  { name: "Bluepeak", glyph: "b", style: "rounded-full" },
  { name: "Cascade Co.", glyph: "c", style: "rounded-md" },
  { name: "Meridian", glyph: "m", style: "rounded-none" },
  { name: "Hartwell", glyph: "h", style: "rounded-md" },
  { name: "Ferroline", glyph: "f", style: "rounded-full" },
];

const customerReviews = [
  {
    quote:
      "Nexa CRM transformed our sales team. The AI lead scoring pinpoints hot accounts instantly, boosting our conversion rate by 310% in just two quarters.",
    metric: "+310% Lead Conversion",
    author: "Sarah Jenkins",
    role: "VP of Global Sales",
    company: "Apex Tech Corp",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "The quote-to-order bridge eliminated manual entry completely. What used to take our account executives hours now happens automatically in one click.",
    metric: "2.4x Deal Closure Speed",
    author: "Michael Vance",
    role: "Head of Revenue Operations",
    company: "Global Freight Systems",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "Having our deal pipeline synced directly with inventory and invoicing gives our executives 100% confidence in quarterly revenue forecasts.",
    metric: "98.4% Forecast Accuracy",
    author: "Elena Rostova",
    role: "Chief Commercial Officer",
    company: "Meridian BioLabs",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "WhatsApp & email bi-directional sync means no lost conversation history. Our reps respond to leads within 4 minutes on average.",
    metric: "4.2 Min Avg Response",
    author: "David Chen",
    role: "Sales Operations Director",
    company: "Northwind Solutions",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
  },
];

export default function CrmModulePage() {
  const [stayInformedTab, setStayInformedTab] = useState<"velocity" | "forecast">("velocity");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Header / Top Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="brand flex items-center gap-2 text-xl font-bold text-slate-900">
              <LogoMark />
              <span>
                Nexa<span className="text-blue-600">.</span>
              </span>
            </Link>
            <span className="hidden sm:inline-block h-4 w-px bg-slate-200" />
            <span className="hidden sm:inline-block text-xs font-semibold text-blue-600 uppercase tracking-widest">
              CRM & Sales Pipeline Module
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-sm shadow-blue-600/20"
            >
              <span>Book Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-blue-50/80 via-indigo-50/30 to-slate-50">
        {/* Background ambient glowing shapes */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-400/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-400/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs font-extrabold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                AI-Powered Customer Relationship Management
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                The easiest <span className="module-gradient-text">AI CRM</span> for growth.
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                Bring your sales pipeline, AI lead scoring, deal forecasting, and 360° customer history into one connected workspace that empowers your team to close deals faster.
              </p>

              {/* Rating Badge */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-700">
                  <strong>4.9 / 5 Rating</strong> across 500+ Enterprises
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/#contact"
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm shadow-xl shadow-blue-600/25 hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center gap-2"
                >
                  <span>Start Free CRM Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#ecosystem"
                  className="px-7 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 font-bold text-sm transition-all shadow-xs"
                >
                  Explore 360° View
                </a>
              </div>
            </div>

            {/* Right Interactive Hero Component */}
            <div className="lg:col-span-5">
              <CrmHeroDemoCard />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Static Section */}
      <section className="py-8 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
            Trusted by growing businesses
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-slate-700 font-bold text-sm">
            {homepageClients.map((client, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs hover:bg-slate-100 transition-colors"
              >
                <span
                  className={`w-6 h-6 ${client.style} bg-blue-600 text-white flex items-center justify-center text-xs font-black uppercase shadow-xs`}
                >
                  {client.glyph}
                </span>
                <span className="text-slate-800 font-semibold">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Supercharge Feature Spotlight */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/25">
            <Bot className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Supercharge your sales team with AI Agents
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Automate routine lead qualification, sentiment analysis, meeting prep notes, and draft follow-up emails in seconds.
          </p>
        </div>

        {/* AI Agent Live Mockup Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xl shadow-slate-200/60">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Nexa Sales Copilot Agent</h3>
                <p className="text-xs text-slate-500">Automated Account Analysis & Next Best Action</p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200">
              ● Active Listening & Scoring
            </span>
          </div>

          <div className="mt-6 space-y-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-800">Target Account: Apex Technologies</span>
                <span className="text-blue-700 font-bold">Deal Value: $145,000</span>
              </div>
              <p className="text-slate-600">
                &ldquo;AI detected high buyer intent: Prospect reviewed proposal twice today and downloaded technical security specs.&rdquo;
              </p>
              <div className="pt-2 flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-blue-100 text-blue-800 font-bold text-[10px]">
                  Recommended Step: Send Custom Discount & Schedule Executive Briefing
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tabbed Feature Showcase */}
      <section className="py-20 bg-white border-t border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <CrmTabShowcase />
        </div>
      </section>

      {/* Testimonials & Reviews Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="px-3.5 py-1 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest">
            Proven Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Our customers speak for us.
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            See how revenue leaders accelerate deal velocity with Nexa CRM.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {customerReviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 transition-all flex flex-col justify-between shadow-md hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-blue-50 text-blue-700 border border-blue-200">
                    {rev.metric}
                  </span>
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <Image
                  src={rev.avatar}
                  alt={rev.author}
                  width={40}
                  height={40}
                  unoptimized
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{rev.author}</h4>
                  <p className="text-[11px] text-slate-500">
                    {rev.role}, <strong className="text-slate-700">{rev.company}</strong>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stay Informed / Interactive Spotlight Section */}
      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-md space-y-4">
              <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200 text-xs font-bold uppercase">
                Real-Time Insights
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Stay informed with automated pipeline velocity intelligence.
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Spot bottlenecked deal stages before they impact quarterly targets. Automatic alerts notify managers when high-value opportunities stall.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setStayInformedTab("velocity")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    stayInformedTab === "velocity"
                      ? "bg-blue-600 text-white shadow-xs"
                      : "bg-white text-slate-600 border border-slate-200 hover:text-slate-900"
                  }`}
                >
                  Stage Velocity
                </button>
                <button
                  onClick={() => setStayInformedTab("forecast")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    stayInformedTab === "forecast"
                      ? "bg-blue-600 text-white shadow-xs"
                      : "bg-white text-slate-600 border border-slate-200 hover:text-slate-900"
                  }`}
                >
                  Weighted Forecast
                </button>
              </div>
            </div>

            <div className="w-full lg:w-1/2 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              {stayInformedTab === "velocity" ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span>Discovery → Proposal</span>
                    <span className="text-emerald-700 font-bold">3.2 Days (Fast)</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[85%]" />
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-600 pt-2">
                    <span>Proposal → Negotiation</span>
                    <span className="text-blue-700 font-bold">5.8 Days (Optimal)</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-blue-600 w-[65%]" />
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600">Committed Revenue:</span>
                    <span className="font-extrabold text-slate-900">$1,850,000</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600">Best Case Scenario:</span>
                    <span className="font-extrabold text-emerald-700">$2,420,000</span>
                  </div>
                  <div className="pt-2 text-[11px] text-blue-700 font-semibold">
                    ★ Algorithm Confidence Level: 98.4%
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 360° Connected Ecosystem Flow Visualization */}
      <section id="ecosystem" className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <CrmEcosystemFlow />
      </section>

      {/* Impact Arch Metrics Section */}
      <section className="py-20 bg-white border-t border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12">
            Accelerate your sales impact from day one.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="metric-arch-card p-8 bg-gradient-to-b from-blue-50/90 to-white border border-blue-200 text-center space-y-3 shadow-md">
              <div className="text-5xl font-black text-blue-600">27%</div>
              <h3 className="text-base font-bold text-slate-900">Higher Win Rate</h3>
              <p className="text-xs text-slate-600">
                Identify high-intent leads automatically using AI predictive scoring.
              </p>
            </div>

            <div className="metric-arch-card p-8 bg-gradient-to-b from-indigo-50/90 to-white border border-indigo-200 text-center space-y-3 shadow-md">
              <div className="text-5xl font-black text-indigo-600">50%</div>
              <h3 className="text-base font-bold text-slate-900">Faster Sales Cycle</h3>
              <p className="text-xs text-slate-600">
                Automated proposal generation and instant lead territory routing.
              </p>
            </div>

            <div className="metric-arch-card p-8 bg-gradient-to-b from-cyan-50/90 to-white border border-cyan-200 text-center space-y-3 shadow-md">
              <div className="text-5xl font-black text-cyan-600">71%</div>
              <h3 className="text-base font-bold text-slate-900">Team Productivity</h3>
              <p className="text-xs text-slate-600">
                Eliminate manual email logging with zero-touch bi-directional sync.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive CTA Banner ("Take us for a spin!") */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white p-10 lg:p-16 text-center overflow-hidden shadow-2xl shadow-blue-600/20">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="px-3.5 py-1 rounded-full bg-white/20 text-white border border-white/30 text-xs font-bold uppercase">
              Ready to Accelerate Revenue?
            </span>

            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              Take Nexa CRM for a spin!
            </h2>

            <p className="text-base text-blue-100 leading-relaxed">
              Join hundreds of high-growth sales teams running their deal pipeline on Nexa. Start your 14-day free trial with zero setup fees.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/#contact"
                className="px-8 py-4 rounded-xl bg-white text-blue-700 font-extrabold text-sm shadow-xl hover:bg-slate-100 transition-all flex items-center gap-2"
              >
                <span>Start Free Trial Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <CrmFaqAccordion />
        </div>
      </section>

      {/* Shared Footer */}
      <footer className="py-12 bg-white border-t border-slate-200 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <LogoMark />
            <span className="font-bold text-slate-900 text-sm">
              Nexa<span className="text-blue-600">.</span>
            </span>
            <span className="ml-2 text-slate-500">© 2026 Nexa Platform Inc. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Platform
            </Link>
            <Link href="/modules/crm" className="text-blue-600 font-semibold">
              CRM Module
            </Link>
            <Link href="/#contact" className="hover:text-slate-900 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
