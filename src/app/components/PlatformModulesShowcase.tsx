"use client";

import React, { useRef } from "react";
import Link from "next/link";
import {
  CircleDollarSign,
  UsersRound,
  Target,
  ClipboardCheck,
  Boxes,
  Settings2,
  KanbanSquare,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

interface PlatformModule {
  id: string;
  title: string;
  watermark: string;
  description: string;
  features: string[];
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  link: string;
}

const PLATFORM_MODULES: PlatformModule[] = [
  {
    id: "crm",
    title: "CRM",
    watermark: "SALES PIPELINE",
    description: "Turn leads into lasting customer relationships with a shared pipeline.",
    features: ["Leads", "Opportunities", "Sales orders"],
    image: "/images/modules/crm_sales.jpg",
    icon: Target,
    link: "/modules/crm",
  },
  {
    id: "sales",
    title: "Sales & Order Management",
    watermark: "ORDER FULFILLMENT",
    description: "Multi-channel quotations, sales orders, pricing rules, and invoicing.",
    features: ["Quotations", "Sales orders", "Fulfillment"],
    image: "/images/modules/crm_sales.jpg",
    icon: Target,
    link: "/modules/sales",
  },
  {
    id: "purchase",
    title: "Purchase & Procurement",
    watermark: "PROCUREMENT & VENDORS",
    description: "Manage vendors, purchase requests, orders and approvals with ease.",
    features: ["Vendors", "Purchase orders", "Approvals"],
    image: "/images/modules/purchase.jpg",
    icon: ClipboardCheck,
    link: "/modules/purchase",
  },
  {
    id: "inventory",
    title: "Inventory Management",
    watermark: "WAREHOUSE & ASSETS",
    description: "See products, stock levels, warehouses and transfers as they happen.",
    features: ["Stock levels", "Warehouses", "Transfers"],
    image: "/images/modules/inventory.jpg",
    icon: Boxes,
    link: "/modules/inventory",
  },
  {
    id: "production",
    title: "Production Management",
    watermark: "PRODUCTION & BOMS",
    description: "Plan production, manage BOMs and coordinate work orders from one view.",
    features: ["Production plans", "BOMs", "Work orders"],
    image: "/images/modules/manufacturing.jpg",
    icon: Settings2,
    link: "/modules/production",
  },
  {
    id: "accounting",
    title: "Accounting & Finance",
    watermark: "FINANCIAL OPERATIONS",
    description: "Accounting, invoices, expenses, taxation and reporting in one unified ledger.",
    features: ["General ledger", "Invoices", "Expenses"],
    image: "/images/modules/finance.jpg",
    icon: CircleDollarSign,
    link: "/modules/accounting",
  },
  {
    id: "hrms",
    title: "HRMS & Payroll",
    watermark: "PEOPLE OPERATIONS",
    description: "Keep employee records, attendance, leave and payroll in seamless sync.",
    features: ["Employee hub", "Attendance", "Payroll"],
    image: "/images/modules/hr_payroll.jpg",
    icon: UsersRound,
    link: "/modules/hrms",
  },
  {
    id: "projects",
    title: "Project Management",
    watermark: "COLLABORATION & MILESTONES",
    description: "Bring milestones, timesheets and team collaboration into the same flow.",
    features: ["Milestones", "Timesheets", "Collaboration"],
    image: "/images/modules/projects.jpg",
    icon: KanbanSquare,
    link: "/modules/project",
  },
];

export default function PlatformModulesShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -330 : 330;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-8 bg-white overflow-hidden" id="modules">
      {/* Ambient Backlight */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] pointer-events-none blur-[140px] opacity-40 bg-gradient-to-b from-blue-100 to-indigo-100"
      />
      <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="relative mb-6 sm:mb-8">
          <div className="text-center max-w-3xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              Our Platform Services
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed">
              Manage every core business function from one connected platform built for speed, governance, and scale.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex justify-end items-center gap-2.5 mt-4 md:mt-0 md:absolute md:right-0 md:bottom-1">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous module"
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xs"
            >
              <ChevronLeft className="w-4 h-4 text-slate-700" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next module"
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xs"
            >
              <ChevronRight className="w-4 h-4 text-slate-700" />
            </button>
          </div>
        </div>

        {/* 8-Card 3D Center-Axis Rotation Flip Deck */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-5 sm:gap-6 overflow-x-auto py-4 px-2 sm:px-4 scrollbar-none snap-x snap-mandatory select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {PLATFORM_MODULES.map((mod) => {
            const Icon = mod.icon;

            return (
              <div
                key={mod.id}
                className="group shrink-0 snap-start w-[285px] sm:w-[305px] h-[460px] [perspective:1000px] cursor-pointer"
              >
                {/* 3D Rotatable Card Inner Wrapper */}
                <div className="relative w-full h-full duration-700 transition-transform [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  
                  {/* ======================================================== */}
                  {/* FRONT SIDE (Photography Cover Card)                      */}
                  {/* ======================================================== */}
                  <div className="absolute inset-0 w-full h-full rounded-[22px] overflow-hidden border border-slate-200/80 shadow-md flex flex-col justify-between [backface-visibility:hidden] bg-slate-900">
                    {/* Background Real Photography */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={mod.image}
                      alt={mod.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                    />

                    {/* Dark gradient overlay protecting text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06080E] via-[#06080E]/60 to-black/35" />

                    {/* Top Watermark Typography (faint outline uppercase) */}
                    <div className="relative z-10 p-5 pt-6 text-center select-none pointer-events-none">
                      <span className="text-[10px] font-bold tracking-[0.22em] text-white/40 uppercase font-sans">
                        {mod.watermark}
                      </span>
                    </div>

                    {/* Bottom Info Area */}
                    <div className="relative z-10 p-5 pb-6">
                      {/* Glowing Translucent Icon */}
                      <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white mb-3.5 shadow-xs">
                        <Icon className="w-5 h-5 text-white" />
                      </div>

                      {/* Card Title */}
                      <h3 className="text-[19px] font-extrabold text-white tracking-tight leading-snug mb-1.5">
                        {mod.title}
                      </h3>

                      {/* Brief Description */}
                      <p className="text-[12.5px] text-slate-300 line-clamp-2 leading-relaxed font-normal mb-3">
                        {mod.description}
                      </p>

                      <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-300 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                        <Sparkles className="w-3 h-3 text-blue-400" />
                        <span>Hover to flip card</span>
                      </div>
                    </div>
                  </div>

                  {/* ======================================================== */}
                  {/* BACK SIDE (White Details Card Revealed on 3D Center Flip) */}
                  {/* ======================================================== */}
                  <div className="absolute inset-0 w-full h-full rounded-[22px] bg-white border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between shadow-[0_16px_40px_-8px_rgba(15,23,42,0.16)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div>
                      {/* Black Rounded Square Terminal Icon */}
                      <div className="w-10 h-10 rounded-[10px] bg-slate-900 text-white flex items-center justify-center mb-4 shadow-xs">
                        <Icon className="w-5 h-5 text-white stroke-[2]" />
                      </div>

                      {/* Black Title */}
                      <h3 className="text-[20px] font-extrabold text-slate-950 tracking-tight leading-snug mb-3">
                        {mod.title}
                      </h3>

                      {/* Full Description */}
                      <p className="text-[13.5px] text-slate-600 leading-relaxed mb-5 font-normal">
                        {mod.description}
                      </p>

                      {/* Feature Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {mod.features.map((feature) => (
                          <span
                            key={feature}
                            className="text-[11px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/70"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Pill Button */}
                    <div className="pt-2">
                      <Link
                        href={mod.link}
                        className="relative group/btn inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-slate-950 text-white text-[12.5px] font-bold shadow-[0_4px_18px_rgba(37,99,235,0.35)] hover:bg-blue-600 hover:shadow-[0_6px_22px_rgba(37,99,235,0.55)] transition-all duration-200 hover:scale-[1.03]"
                      >
                        <span>Explore Details</span>
                        <ChevronRight className="w-3.5 h-3.5 text-white/90 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500 pt-6 border-t border-slate-100 mt-4">
          <Link
            href="/#showcase"
            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            Explore all 8 modules <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
