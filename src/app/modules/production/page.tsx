"use client";

import React from "react";
import ModuleDetailTemplate, {
  ModuleDetailData,
} from "@/app/components/ModuleDetailTemplate";
import {
  Factory,
  Layers,
  Cpu,
  Activity,
  ClipboardCheck,
  Zap,
  Settings,
  ShieldCheck,
} from "lucide-react";

const productionData: ModuleDetailData = {
  slug: "production",
  badge: "Manufacturing & MRP Engine",
  title: "Manufacturing & Production Planning",
  oneLinePromise: "Multi-level BOMs, Work Order dispatch, shop floor routing, and MRP material forecasting.",
  description:
    "Optimize plant capacity, dispatch Work Orders to shop floor work centers, maintain multi-level BOMs, and calculate Material Requirements Planning (MRP) with zero component bottlenecks.",
  painPoints: [
    {
      title: "Material Shortages Halting Production",
      description: "Running out of critical raw components mid-assembly causes factory downtime and missed customer delivery commitments.",
    },
    {
      title: "Unplanned Machine Downtime & Bottlenecks",
      description: "Poor work center scheduling leads to machine overload on Line A while Line B remains underutilized.",
    },
    {
      title: "Inaccurate Product Costing & Scrap Rates",
      description: "Failing to track raw material scrap, machine hours, and labor costs distorts true manufactured product profit margins.",
    },
  ],
  features: [
    {
      title: "Multi-Level Bill of Materials (BOM)",
      description: "Manage complex assembly structures, sub-assemblies, raw component lists, and precise cost roll-ups.",
      icon: Layers,
    },
    {
      title: "Shop Floor Work Order Dispatch",
      description: "Schedule and dispatch Work Orders to work centers based on machine capacity, tooling, and operator skills.",
      icon: Factory,
    },
    {
      title: "Automated MRP Material Forecasting",
      description: "Run Material Requirements Planning calculations to project component shortages and auto-generate purchase requisitions.",
      icon: Cpu,
    },
    {
      title: "Quality Inspection Gates",
      description: "Enforce mandatory quality checks and tolerance testing at key production milestones before advancing work.",
      icon: ClipboardCheck,
    },
    {
      title: "Real-Time Machine & IoT Uptime Tracking",
      description: "Monitor machine uptime, cycle times, operator logs, and plant throughput with live telemetry data.",
      icon: Activity,
    },
    {
      title: "Shop Floor Operator Touch Kiosk",
      description: "Simplified touch-screen interface for shop floor operators to start jobs, log scrap, and record completed batches.",
      icon: Zap,
    },
    {
      title: "Work Center Routing & Operations Setup",
      description: "Define multi-stage production routings, machine setup times, labor rates, and queue times per work center.",
      icon: Settings,
    },
    {
      title: "ECO & Version Control Management",
      description: "Manage Engineering Change Orders (ECO) with version-controlled BOM revisions and historical audit logs.",
      icon: ShieldCheck,
    },
  ],
  workflowSteps: [
    {
      stepNumber: 1,
      title: "BOM Setup & MRP Run",
      description: "Engineers define multi-level BOMs, and the MRP engine computes component demand against current inventory.",
    },
    {
      stepNumber: 2,
      title: "Work Order Scheduling",
      description: "Production planners dispatch Work Orders to specific work centers based on machine availability and shift schedules.",
    },
    {
      stepNumber: 3,
      title: "Shop Floor Execution & Quality Gates",
      description: "Operators log job progress and scrap via touch kiosks while quality inspectors validate tolerance gates.",
    },
    {
      stepNumber: 4,
      title: "Finished Goods & WIP Cost Posting",
      description: "Completed goods pass into Inventory, while actual material, machine, and labor costs post automatically to Accounting.",
    },
  ],
  integrationFlow: {
    description:
      "Manufacturing & Production integrates with Sales & Order Management for demand planning, Inventory Control for raw material issuing and finished goods receipt, and Accounting & Finance for Work-in-Progress (WIP) and COGS postings.",
    connectedModules: ["Sales & Order Management", "Inventory Control", "Accounting & Finance"],
  },
  reports: [
    {
      name: "Overall Equipment Effectiveness (OEE) Dashboard",
      description: "Measures machine availability, operational performance rate, and quality yield across factory lines.",
      category: "Plant Operations",
    },
    {
      name: "Material Requirements Planning (MRP) Action Report",
      description: "Highlights projected component shortages and recommended PO issuance dates based on lead times.",
      category: "Procurement",
    },
    {
      name: "Work Order Variance & Costing Report",
      description: "Compares standard estimated BOM costs against actual raw material usage, scrap, and labor expenses.",
      category: "Cost Accounting",
    },
    {
      name: "Shop Floor Capacity & Loading Schedule",
      description: "Visual Gantt and load chart showing work center capacity utilization and active production queues.",
      category: "Scheduling",
    },
  ],
  ctaPitch:
    "Maximize plant throughput, eliminate material shortages, and control manufacturing costs with Nexa Production.",
};

export default function ProductionModulePage() {
  return <ModuleDetailTemplate data={productionData} />;
}
