"use client";

import React from "react";
import ModuleDetailTemplate, {
  ModuleDetailData,
} from "@/app/components/ModuleDetailTemplate";
import {
  Boxes,
  PackageCheck,
  ShieldAlert,
  QrCode,
  Truck,
  RefreshCw,
  Layers,
  TrendingUp,
} from "lucide-react";

const inventoryData: ModuleDetailData = {
  slug: "inventory",
  badge: "Inventory & Stock Control",
  title: "Warehouse & Inventory Management",
  oneLinePromise: "Multi-location stock tracking, automated reordering, and barcode lot traceability.",
  description:
    "Maintain real-time visibility across all warehouses, prevent costly stockouts with automated reorder points, and streamline picking and dispatch operations.",
  painPoints: [
    {
      title: "Stockouts & Missed Customer Orders",
      description: "Inaccurate stock counts cause unexpected out-of-stock items, resulting in cancelled customer orders and lost revenue.",
    },
    {
      title: "Excess Holding Costs & Deadstock",
      description: "Tying up working capital in slow-moving or obsolete inventory reduces liquidity without executive visibility.",
    },
    {
      title: "Manual Picking & Shipping Errors",
      description: "Paper-based warehouse picking leads to mis-shipped items, expensive product returns, and customer dissatisfaction.",
    },
  ],
  features: [
    {
      title: "Multi-Location Warehouse Tracking",
      description: "Manage stock across central warehouses, regional hubs, transit containers, and retail storefronts in real-time.",
      icon: Boxes,
    },
    {
      title: "Mobile Barcode & QR Scanner Integration",
      description: "Accelerate stock receiving, bin-to-bin transfers, and order picking with handheld mobile barcode scanning.",
      icon: QrCode,
    },
    {
      title: "Automated Dynamic Reorder Points",
      description: "Automatically trigger purchase requisitions when stock drops below safety thresholds based on lead times.",
      icon: ShieldAlert,
    },
    {
      title: "Serial Number & Batch Lot Control",
      description: "Full traceability for batch lots, expiration dates, FIFO/LIFO rules, and regulatory recall safety management.",
      icon: PackageCheck,
    },
    {
      title: "Inter-Warehouse Stock Transfers",
      description: "Streamline stock transfers between facilities with in-transit tracking, transfer orders, and receipt validation.",
      icon: Truck,
    },
    {
      title: "Cycle Counting & Continuous Audits",
      description: "Conduct physical inventory audits and stock reconciliations without halting daily warehouse operations.",
      icon: RefreshCw,
    },
    {
      title: "Kitting & Assembly Stock Allocation",
      description: "Reserve raw materials and sub-assemblies for manufacturing jobs or bundled retail product kit offerings.",
      icon: Layers,
    },
    {
      title: "Stock Aging & Slow-Moving Analytics",
      description: "Identify slow-moving or obsolete inventory early to take proactive clearance and markdown liquidation actions.",
      icon: TrendingUp,
    },
  ],
  workflowSteps: [
    {
      stepNumber: 1,
      title: "Stock Receiving & Barcode Tagging",
      description: "Incoming shipments are scanned, verified against Purchase Orders, and assigned to designated storage bins.",
    },
    {
      stepNumber: 2,
      title: "Real-Time Stock Reservation",
      description: "As sales orders are approved, inventory is instantly reserved across the optimal warehouse fulfillment hubs.",
    },
    {
      stepNumber: 3,
      title: "Guided Pick, Pack & Ship",
      description: "Warehouse staff follow digital pick paths on handheld scanners, validating items before packing and shipping.",
    },
    {
      stepNumber: 4,
      title: "Automated Reorder Trigger",
      description: "When stock drops below safety thresholds, automated purchase requisitions replenish inventory with zero delay.",
    },
  ],
  integrationFlow: {
    description:
      "Inventory Management connects in real time with Sales & Order Management for stock reservations, Purchase & Procurement for automated replenishment, and Manufacturing & Production for raw material issuing.",
    connectedModules: ["Sales & Order Management", "Purchase & Procurement", "Manufacturing & MRP"],
  },
  reports: [
    {
      name: "Inventory Valuation Report",
      description: "Real-time balance sheet valuation of inventory across locations using FIFO, LIFO, or Weighted Average cost methods.",
      category: "Financial Audit",
    },
    {
      name: "Stock Turnover & Velocity Analysis",
      description: "Categorizes inventory into fast-moving, slow-moving, and non-moving items to optimize capital allocation.",
      category: "Operations",
    },
    {
      name: "Stockout & Reorder Risk Summary",
      description: "Identifies items approaching reorder thresholds alongside supplier lead times and pending PO status.",
      category: "Replenishment",
    },
    {
      name: "Warehouse Bin Utilization & Accuracy",
      description: "Tracks physical cycle count accuracy rates and storage capacity utilization across warehouse aisles and bins.",
      category: "Audit",
    },
  ],
  ctaPitch:
    "Eliminate stockouts, optimize warehouse space, and automate inventory replenishment with Warrgyizmorsch Inventory.",
};

export default function InventoryModulePage() {
  return <ModuleDetailTemplate data={inventoryData} />;
}
