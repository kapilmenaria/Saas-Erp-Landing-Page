"use client";

import React from "react";
import ModuleDetailTemplate, {
  ModuleDetailData,
} from "@/app/components/ModuleDetailTemplate";
import {
  ShoppingCart,
  FileCheck2,
  UsersRound,
  Calculator,
  ClipboardList,
  ShieldCheck,
  Building2,
  Receipt,
} from "lucide-react";

const purchaseData: ModuleDetailData = {
  slug: "purchase",
  badge: "Purchase & Vendor Control",
  title: "Purchase & Procurement Management",
  oneLinePromise: "Automated vendor requisitions, multi-level approvals, and 3-way invoice matching.",
  description:
    "Take control of corporate spending with structured approval hierarchies, supplier price comparisons, automated PO issuance, and automated 3-way invoice matching.",
  painPoints: [
    {
      title: "Rogue Spending & Unauthorized Purchases",
      description: "Employees placing orders directly with suppliers without prior budget verification leads to unexpected corporate cost overruns.",
    },
    {
      title: "Invoice Discrepancies & Overbilling",
      description: "Manual bill verification results in paying for unreceived items or settling invoices above agreed quotation prices.",
    },
    {
      title: "Supplier Delivery Delays & Quality Issues",
      description: "Lack of centralized vendor scorecarding makes it difficult to track unreliable suppliers causing production bottlenecks.",
    },
  ],
  features: [
    {
      title: "Digital Purchase Requisition Workflow",
      description: "Empower department managers to submit electronic purchase requests with real-time budget checking prior to PO creation.",
      icon: ClipboardList,
    },
    {
      title: "Multi-Level Approval Hierarchies",
      description: "Configurable authorization rules that automatically route spend requests based on monetary thresholds and executive roles.",
      icon: FileCheck2,
    },
    {
      title: "Automated 3-Way Invoice Matching",
      description: "Automatically reconcile Purchase Orders, Goods Receipt Notes (GRN), and Vendor Invoices before releasing payment.",
      icon: Calculator,
    },
    {
      title: "Vendor Performance Scorecards",
      description: "Evaluate suppliers objectively on pricing compliance, delivery timeliness, quality pass rates, and credit terms.",
      icon: UsersRound,
    },
    {
      title: "RFQ & Bidding Management Hub",
      description: "Broadcast Requests for Quotation to multiple suppliers simultaneously and evaluate competitive bids side-by-side.",
      icon: ShoppingCart,
    },
    {
      title: "Automated Spend Audit Controls",
      description: "Enforce corporate procurement policies, track unbudgeted expenses, and eliminate unapproved rogue spending.",
      icon: ShieldCheck,
    },
    {
      title: "Contract & Blanket PO Management",
      description: "Manage long-term vendor agreements with automated quantity drawdown tracking and negotiated volume pricing.",
      icon: Building2,
    },
    {
      title: "Supplier Self-Service Portal",
      description: "Provide vendors with a dedicated portal to view PO status, submit digital invoices, and update delivery timelines.",
      icon: Receipt,
    },
  ],
  workflowSteps: [
    {
      stepNumber: 1,
      title: "Requisition & Budget Approval",
      description: "Department submits a digital purchase request, triggering automated approval workflows based on monetary threshold limits.",
    },
    {
      stepNumber: 2,
      title: "RFQ & Purchase Order Issuance",
      description: "Approved requisitions generate competitive RFQs or instant Purchase Orders dispatched directly to target suppliers.",
    },
    {
      stepNumber: 3,
      title: "Goods Receipt & Quality Inspection",
      description: "Warehouse logs incoming shipments against the PO, recording received quantities and quality inspection pass/fail results.",
    },
    {
      stepNumber: 4,
      title: "3-Way Invoice Matching & Payout",
      description: "System verifies GRN, PO, and Vendor Invoice alignment before automatically posting the bill to Accounting for payment.",
    },
  ],
  integrationFlow: {
    description:
      "Purchase & Procurement connects seamlessly with Inventory for automatic reorder requisitions, Production for raw component sourcing, and Accounting & Finance for Accounts Payable ledger posting.",
    connectedModules: ["Inventory Control", "Manufacturing & MRP", "Accounting & Finance"],
  },
  reports: [
    {
      name: "Vendor Performance & Rating Matrix",
      description: "Tracks supplier on-time delivery rates, order fulfillment accuracy, and component quality pass percentages.",
      category: "Procurement Audit",
    },
    {
      name: "Purchase Order Commitment Summary",
      description: "Detailed summary of active financial commitments grouped by department, supplier, and expected delivery date.",
      category: "Spend Control",
    },
    {
      name: "3-Way Invoice Variance Report",
      description: "Highlights price and quantity discrepancies detected between POs, receiving logs, and vendor bills.",
      category: "Finance & Audit",
    },
    {
      name: "Category Spend & Savings Analytics",
      description: "Monitors corporate expenditure by procurement category and calculates negotiated savings over baseline prices.",
      category: "Executive",
    },
  ],
  ctaPitch:
    "Streamline vendor procurement, enforce 100% spend compliance, and eliminate invoice errors with Nexa Purchase.",
};

export default function PurchaseModulePage() {
  return <ModuleDetailTemplate data={purchaseData} />;
}
