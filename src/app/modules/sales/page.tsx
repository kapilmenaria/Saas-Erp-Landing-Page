"use client";

import React from "react";
import ModuleDetailTemplate, {
  ModuleDetailData,
} from "@/app/components/ModuleDetailTemplate";
import {
  ShoppingCart,
  Receipt,
  TrendingUp,
  CreditCard,
  Truck,
  FileCheck2,
  LockKeyhole,
  Boxes,
} from "lucide-react";

const salesData: ModuleDetailData = {
  slug: "sales",
  badge: "Sales & Order Management Module",
  title: "Sales & Order Management",
  oneLinePromise: "Streamlined sales quotations, multi-channel order execution, and automated invoice fulfillment.",
  description:
    "Accelerate order-to-cash cycles. Nexa Sales & Order Management connects quotations, customer approvals, automated pricing rules, inventory reservations, and billing into one seamless workflow.",
  painPoints: [
    {
      title: "Delayed Quotations & Lost Prospects",
      description: "Manual quote creation in spreadsheets causes slow customer turnaround times, allowing competitors to win deals.",
    },
    {
      title: "Pricing Errors & Margin Erosion",
      description: "Unauthorized manual discounts and outdated pricelists erode product profit margins without executive visibility.",
    },
    {
      title: "Stock Misalignment at Dispatch",
      description: "Accepting orders for items out of stock causes delivery delays, cancelled orders, and unhappy customers.",
    },
  ],
  features: [
    {
      title: "Omnichannel Proposal & Quotation Builder",
      description: "Generate professional, multi-currency quotations with custom terms, product SKUs, and instant PDF delivery.",
      icon: Receipt,
    },
    {
      title: "Dynamic Tiered Pricing & Discount Matrix",
      description: "Enforce contract-specific pricing, volume discounts, and margin thresholds automatically during order creation.",
      icon: TrendingUp,
    },
    {
      title: "Automated Sales Order Approval Engine",
      description: "Route high-value quotes or custom credit terms to finance and sales leaders for instant digital sign-off.",
      icon: FileCheck2,
    },
    {
      title: "Real-Time Stock Allocation & Reservation",
      description: "Instantly reserve warehouse stock upon order confirmation to prevent overselling and guarantee delivery dates.",
      icon: ShoppingCart,
    },
    {
      title: "Customer Self-Service Order Portal",
      description: "Give B2B buyers a branded portal to view quotations, track live delivery status, and reorder past purchases.",
      icon: CreditCard,
    },
    {
      title: "Integrated Shipping & Dispatch Tracking",
      description: "Generate packing slips, shipping labels, and tracking numbers synchronized with logistics partners.",
      icon: Truck,
    },
    {
      title: "Automated Credit Limit & Exposure Checking",
      description: "Prevent order release automatically if a customer account exceeds their pre-approved financial credit line.",
      icon: LockKeyhole,
    },
    {
      title: "Backorder & Partial Shipment Allocation",
      description: "Fulfill partial orders seamlessly while keeping remaining items in priority warehouse fulfillment queues.",
      icon: Boxes,
    },
  ],
  workflowSteps: [
    {
      stepNumber: 1,
      title: "Quotation Generation",
      description: "Sales reps create branded quotes with automated item pricing, taxes, and customer-specific discounts.",
    },
    {
      stepNumber: 2,
      title: "Customer Approval & SO Conversion",
      description: "Prospect approves proposal digitally, automatically converting the quotation into a binding Sales Order.",
    },
    {
      stepNumber: 3,
      title: "Stock Allocation & Fulfillment",
      description: "Inventory items are reserved automatically, triggering warehouse pick-pack-ship tasks or production orders.",
    },
    {
      stepNumber: 4,
      title: "Invoicing & Revenue Posting",
      description: "Sales Order triggers invoice generation in Accounting, updating AR ledgers and revenue dashboards.",
    },
  ],
  integrationFlow: {
    description:
      "Sales & Order Management integrates directly with Inventory Management for stock reservation, Production Management for custom make-to-order items, and Accounting & Finance for automated invoice creation and payment reconciliation.",
    connectedModules: ["Inventory Management", "Production Management", "Accounting & Finance"],
  },
  reports: [
    {
      name: "Sales Pipeline & Order Velocity",
      description: "Tracks total order value, conversion rates per rep, and average time taken from quote to fulfillment.",
      category: "Sales Velocity",
    },
    {
      name: "Customer Profitability Matrix",
      description: "Analyzes gross margins per account, product category breakdown, and discount utilization.",
      category: "Profitability",
    },
    {
      name: "Order Fulfillment & Backlog Audit",
      description: "Monitors pending sales orders, partial shipments, and warehouse dispatch bottlenecks.",
      category: "Operations",
    },
    {
      name: "Sales Rep Commission & Target Tracker",
      description: "Calculates commission payouts automatically based on closed-won orders and collection status.",
      category: "Performance",
    },
  ],
  ctaPitch:
    "Accelerate your order-to-cash workflow, eliminate pricing errors, and give your customers a flawless fulfillment experience with Nexa Sales.",
};

export default function SalesModulePage() {
  return <ModuleDetailTemplate data={salesData} />;
}
