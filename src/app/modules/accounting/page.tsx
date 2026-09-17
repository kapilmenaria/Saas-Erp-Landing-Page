"use client";

import React from "react";
import ModuleDetailTemplate, {
  ModuleDetailData,
} from "@/app/components/ModuleDetailTemplate";
import {
  ReceiptText,
  Calculator,
  Globe2,
  FileCheck2,
  BarChart3,
  ShieldCheck,
  CreditCard,
  TrendingUp,
} from "lucide-react";

const accountingData: ModuleDetailData = {
  slug: "accounting",
  badge: "General Ledger & Financial Accounting",
  title: "Financial Accounting & General Ledger",
  oneLinePromise: "Automated GL postings, instant bank reconciliations, multi-currency ledger, and audit compliance.",
  description:
    "Close financial books with confidence using automated double-entry General Ledger postings, live bank feed reconciliations, multi-entity consolidation, and compliant financial statements.",
  painPoints: [
    {
      title: "Slow Month-End Financial Close",
      description: "Manual journal entries and reconciliation spreadsheets delay financial reporting by weeks after month-end.",
    },
    {
      title: "Unreconciled Bank & Cash Discrepancies",
      description: "Disconnected bank statements make it difficult to catch missing customer payments or duplicate vendor payouts.",
    },
    {
      title: "Audit Failures & Compliance Penalties",
      description: "Lack of an immutable audit trail leaves the organization vulnerable to tax penalties and statutory audit findings.",
    },
  ],
  features: [
    {
      title: "Automated Double-Entry General Ledger",
      description: "Automated GL journal entries synchronized instantly across sales, purchasing, payroll, and inventory movements.",
      icon: ReceiptText,
    },
    {
      title: "Smart Bank Feed Reconciliation",
      description: "Connect live bank statement feeds and match transactions automatically using smart pattern rules and threshold limits.",
      icon: Calculator,
    },
    {
      title: "Multi-Currency & Entity Consolidation",
      description: "Manage international subsidiaries with automated currency revaluations, inter-company eliminations, and consolidation.",
      icon: Globe2,
    },
    {
      title: "Real-Time Financial Statement Generator",
      description: "Generate Income Statements (P&L), Balance Sheets, Trial Balances, and Cash Flow reports in seconds.",
      icon: BarChart3,
    },
    {
      title: "Localized Tax & Statutory Engine",
      description: "Support localized GST/VAT rules, tax withholding, electronic filing formats, and audit compliance logs.",
      icon: FileCheck2,
    },
    {
      title: "Cryptographic Immutable Audit Trail",
      description: "Track every transaction edit, approval, and adjustment with cryptographic user timestamps and security logs.",
      icon: ShieldCheck,
    },
    {
      title: "Accounts Receivable & Payable Automation",
      description: "Automate customer aging statements, payment reminders, and supplier payment scheduling.",
      icon: CreditCard,
    },
    {
      title: "Asset Management & Depreciation Schedules",
      description: "Track fixed assets automatically with linear or declining balance depreciation journal postings.",
      icon: TrendingUp,
    },
  ],
  workflowSteps: [
    {
      stepNumber: 1,
      title: "Operational Event Sync",
      description: "Sales invoices, purchase bills, and payroll runs automatically post double-entry journal entries into the GL.",
    },
    {
      stepNumber: 2,
      title: "Bank Feed Reconciliation",
      description: "Bank transactions feed into Warrgyizmorsch daily and auto-match against open receivable and payable ledgers.",
    },
    {
      stepNumber: 3,
      title: "Period-End Adjustments & Tax Calculation",
      description: "System calculates asset depreciation, currency revaluations, and statutory tax withholdings automatically.",
    },
    {
      stepNumber: 4,
      title: "Financial Statement Generation",
      description: "Leadership reviews audit-ready Balance Sheets, P&L statements, and Cash Flow reports with 1-click drill-down.",
    },
  ],
  integrationFlow: {
    description:
      "Financial Accounting serves as the core ledger, receiving automated financial journal postings from Sales & Order Management, Purchase & Procurement, Inventory Control, HRMS Payroll, and Finance Treasury.",
    connectedModules: ["Sales & Order Management", "Purchase & Procurement", "HRMS & Payroll"],
  },
  reports: [
    {
      name: "Consolidated Balance Sheet",
      description: "Complete overview of assets, liabilities, and equity across single or multi-entity business units.",
      category: "Financial Reporting",
    },
    {
      name: "Profit & Loss (P&L) Statement",
      description: "Itemized revenue, cost of goods sold (COGS), operating expenses, and net profit performance.",
      category: "Executive Analytics",
    },
    {
      name: "Accounts Receivable & Payable Aging",
      description: "Detailed breakdown of outstanding customer invoices and upcoming vendor bill due dates.",
      category: "Cash Management",
    },
    {
      name: "Trial Balance & General Ledger Audit Log",
      description: "Audit-ready breakdown of debits and credits for every GL account with transaction drill-down.",
      category: "Compliance",
    },
  ],
  ctaPitch:
    "Close your financial books in days instead of weeks and guarantee audit readiness with Warrgyizmorsch Accounting.",
};

export default function AccountingModulePage() {
  return <ModuleDetailTemplate data={accountingData} />;
}
