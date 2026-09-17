"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Target,
  Boxes,
  ShoppingCart,
  ReceiptText,
  Factory,
  BarChart3,
  UsersRound,
  FolderKanban,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

export const headerModules = [
  { name: "CRM", desc: "Pipeline, leads & accounts", href: "/modules/crm", icon: Target, color: "text-violet-600 bg-violet-50" },
  { name: "Sales & Order Management", desc: "Quotations & order fulfillment", href: "/modules/sales", icon: ShoppingCart, color: "text-emerald-600 bg-emerald-50" },
  { name: "Purchase & Procurement", desc: "RFQs, PO approvals & vendors", href: "/modules/purchase", icon: ReceiptText, color: "text-blue-600 bg-blue-50" },
  { name: "Inventory Management", desc: "Warehouse & stock control", href: "/modules/inventory", icon: Boxes, color: "text-amber-600 bg-amber-50" },
  { name: "Production Management", desc: "Manufacturing, BOM & MRP", href: "/modules/production", icon: Factory, color: "text-purple-600 bg-purple-50" },
  { name: "Accounting & Finance", desc: "Ledger, GL & financial reports", href: "/modules/accounting", icon: BarChart3, color: "text-teal-600 bg-teal-50" },
  { name: "HRMS & Payroll", desc: "Workforce, attendance & payroll", href: "/modules/hrms", icon: UsersRound, color: "text-rose-600 bg-rose-50" },
  { name: "Project Management", desc: "Projects & billable timesheets", href: "/modules/project", icon: FolderKanban, color: "text-indigo-600 bg-indigo-50" },
];

export function LogoMark({ compact = false }: { compact?: boolean }) {
  return (
    <img
      src={compact ? "/images/logo/warrgyizmorsch-logo.png" : "/images/logo/WARR LOGO.webp"}
      alt="Warrgyizmorsch Logo"
      className={compact ? "h-6 w-auto object-contain" : "h-9 w-auto object-contain"}
    />
  );
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={scrolled ? "site-header site-header-scrolled" : "site-header"}>
      <div className="container nav-inner">
        <Link className="brand flex items-center py-1" href="/" onClick={closeMenu} aria-label="Warrgyizmorsch ERP home">
          <img
            src="/images/logo/WARR LOGO.webp"
            alt="Warrgyizmorsch ERP"
            className="h-9 w-auto object-contain max-w-[220px]"
          />
        </Link>
        <nav className={menuOpen ? "main-nav main-nav-open" : "main-nav"} aria-label="Primary navigation">
          <Link href="/#solutions" onClick={closeMenu}>
            Solutions
          </Link>

          {/* Modules Dropdown Menu */}
          <div className="relative group py-2">
            <Link
              href="/modules"
              onClick={closeMenu}
              className="inline-flex items-center gap-1.5 hover:text-slate-900 transition-colors cursor-pointer font-semibold text-slate-700"
            >
              <span>Modules</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
            </Link>

            {/* Mega Dropdown Panel */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-[340px] sm:min-w-[460px] pointer-events-none group-hover:pointer-events-auto">
              <div className="bg-white/98 backdrop-blur-xl rounded-[20px] border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.14)] p-4">
                <div className="px-2.5 py-1.5 mb-2 border-b border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                    Enterprise Modules
                  </span>
                  <Link
                    href="/modules"
                    onClick={closeMenu}
                    className="text-[11px] text-blue-600 font-bold bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-full border border-blue-100 transition-colors flex items-center gap-1"
                  >
                    <span>View All 8 Apps</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {headerModules.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeMenu}
                        className="flex items-start gap-3 p-2.5 rounded-[12px] hover:bg-slate-50 transition-all duration-150 group/item"
                      >
                        <div
                          className={`p-2 rounded-[10px] ${item.color} transition-transform group-hover/item:scale-105 shrink-0 shadow-2xs`}
                        >
                          <ItemIcon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[13px] font-bold text-slate-800 group-hover/item:text-blue-600 transition-colors line-clamp-1">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1 font-normal">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <Link href="/#industries" onClick={closeMenu}>
            Industries
          </Link>
          <Link href="/#features" onClick={closeMenu}>
            Features
          </Link>
          <Link href="/#pricing" onClick={closeMenu}>
            Pricing
          </Link>
        </nav>
        <div className="nav-actions">
          <Link className="button button-primary button-small" href="/#contact" onClick={closeMenu}>
            <span>Book a Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
