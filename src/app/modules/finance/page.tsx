"use client";

import React from "react";
import ModuleDetailTemplate, {
  ModuleDetailData,
} from "@/app/components/ModuleDetailTemplate";
import {
  TrendingUp,
  CreditCard,
  Building2,
  ShieldCheck,
  BarChart3,
  Globe2,
  ReceiptText,
  Calculator,
} from "lucide-react";

const financeData: ModuleDetailData = {
  slug: "finance",
  badge: "Finance & Treasury Module",
  title: "Finance & Corporate Treasury",
  oneLinePromise: "Corporate treasury management, real-time liquidity forecasting, and capital allocation control.",
  description:
    "Master corporate liquidity and financial risk. Nexa Finance & Treasury empowers CFOs with multi-bank treasury visibility, cash flow forecasting, foreign exchange risk hedging, intercompany debt settlements, and capital expenditure governance.",
  painPoints: [
    {
      title: "Unpredictable Cash Flow Liquidity",
      description: "Fragmented multi-bank accounts hide cash reserves, making it difficult to predict weekly working capital requirements.",
    },
    {
      title: "Unhedged Foreign Exchange Exposure",
      description: "Fluctuating FX rates reduce profit margins on cross-border sales and overseas vendor procurement without hedging control.",
    },
    {
      title: "Uncontrolled Capital Expenditure (CapEx)",
      description: "Managing corporate investments in spreadsheets causes budget overruns and delays ROI realization.",
    },
  ],
  features: [
    {
      title: "Real-Time Multi-Bank Treasury Consolidation",
      description: "Consolidate balances, cash positions, and credit lines across all corporate bank accounts in one central dashboard.",
      icon: CreditCard,
    },
    {
      title: "Predictive Cash Flow Forecasting Engine",
      description: "Forecast 30-60-90 day liquidity using real-time accounts receivable collections, AP commitments, and payroll data.",
      icon: TrendingUp,
    },
    {
      title: "Foreign Exchange (FX) & Hedging Risk Control",
      description: "Track multi-currency exposures, mark-to-market valuations, and execute corporate FX hedging contracts.",
      icon: Globe2,
    },
    {
      title: "CapEx & OpEx Capital Budget Allocation",
      description: "Enforce multi-level approval hierarchies for capital expenditure projects and track payback periods.",
      icon: Building2,
    },
    {
      title: "Intercompany Debt & Netting Settlement",
      description: "Automate intercompany loan tracking, interest accruals, and multilateral netting settlements across subsidiaries.",
      icon: ShieldCheck,
    },
    {
      title: "Corporate Debt & Credit Line Governance",
      description: "Monitor loan covenant compliance, interest rate amortization schedules, and credit facility utilization.",
      icon: BarChart3,
    },
    {
      title: "Automated Intercompany Dividend & Interest Accounting",
      description: "Schedule interest accruals and loan repayments across multi-national corporate entities automatically.",
      icon: ReceiptText,
    },
    {
      title: "Capital Expenditure (CapEx) ROI Analytics",
      description: "Monitor capital project deployment against projected internal rate of return (IRR) payback milestones.",
      icon: Calculator,
    },
  ],
  workflowSteps: [
    {
      stepNumber: 1,
      title: "Multi-Bank Feed Consolidation",
      description: "Treasury system automatically pulls daily closing balances and cash transactions from global banking partners.",
    },
    {
      stepNumber: 2,
      title: "Liquidity & FX Exposure Analysis",
      description: "System computes net cash position, projects upcoming AP/AR cash flows, and highlights unhedged FX risks.",
    },
    {
      stepNumber: 3,
      title: "Treasury & CapEx Allocation",
      description: "Finance committee approves short-term investments, debt service payments, and capital expenditure releases.",
    },
    {
      stepNumber: 4,
      title: "Executive Reporting & Audit Posting",
      description: "Generates executive treasury reports and posts automated interest and FX gain/loss journals to Accounting.",
    },
  ],
  integrationFlow: {
    description:
      "Finance & Treasury integrates directly with Accounting & Finance for General Ledger posting, Purchase & Procurement for CapEx order verification, and Sales & Order Management for Accounts Receivable collection forecasts.",
    connectedModules: ["Accounting & Finance", "Purchase & Procurement", "Sales & Order Management"],
  },
  reports: [
    {
      name: "Corporate Treasury Liquidity Summary",
      description: "Consolidated cash positions by bank, currency, entity, and short-term investment yield.",
      category: "Treasury",
    },
    {
      name: "Foreign Exchange Risk & Hedging Audit",
      description: "Measures open currency exposure by currency pair, unrealized FX gains/losses, and active hedge coverage.",
      category: "Risk Control",
    },
    {
      name: "CapEx vs OpEx Budget Variance Report",
      description: "Tracks capital project spend against authorized baseline budgets and payback milestones.",
      category: "Capital Planning",
    },
    {
      name: "Intercompany Settlement Matrix",
      description: "Multilateral netting schedule detailing subsidiary debt balances, interest charges, and netting transactions.",
      category: "Intercompany",
    },
  ],
  ctaPitch:
    "Gain total control over corporate cash reserves, mitigate currency risks, and optimize capital allocation with Nexa Finance.",
};

export default function FinanceModulePage() {
  return <ModuleDetailTemplate data={financeData} />;
}
