"use client";

import React from "react";
import ModuleDetailTemplate, {
  ModuleDetailData,
} from "@/app/components/ModuleDetailTemplate";
import {
  FolderKanban,
  Clock,
  Briefcase,
  UsersRound,
  BarChart3,
  CheckSquare,
  ShieldCheck,
  Receipt,
} from "lucide-react";

const projectData: ModuleDetailData = {
  slug: "project",
  badge: "Project & Resource Hub",
  title: "Project Management & Professional Services",
  oneLinePromise: "Milestone tracking, timesheets, resource utilization, and live margin analysis.",
  description:
    "Deliver client projects on time and within budget using Gantt/Kanban milestones, integrated time logging, team capacity planning, and live profitability analytics.",
  painPoints: [
    {
      title: "Unbilled Hours & Revenue Leakage",
      description: "Manual timesheets mean billable client hours slip through the cracks without being properly invoiced.",
    },
    {
      title: "Project Budget Overruns & Scope Creep",
      description: "Lack of real-time project expense tracking leads to margin erosion and unprofitable client engagements.",
    },
    {
      title: "Resource Over-Allocation & Burnout",
      description: "Uneven work distribution across project teams causes delivery bottlenecks and high employee turnover.",
    },
  ],
  features: [
    {
      title: "Interactive Gantt & Kanban Task Boards",
      description: "Switch effortlessly between visual Kanban boards and interactive Gantt charts with milestone dependency tracking.",
      icon: FolderKanban,
    },
    {
      title: "Digital Timesheet & Stopwatch Logging",
      description: "Digital timesheet entry with mobile stopwatch logging linked directly to project tasks and billable invoicing.",
      icon: Clock,
    },
    {
      title: "Resource Capacity & Workload Planning",
      description: "Forecast team availability, prevent employee burnout, and assign tasks based on skill set and current workload.",
      icon: UsersRound,
    },
    {
      title: "Live Project Profitability & Margin Tracking",
      description: "Monitor project budget vs actual expenditure live with real-time labor, material, and expense margin alerts.",
      icon: BarChart3,
    },
    {
      title: "Branded Client Collaboration Portal",
      description: "Give external clients secure read-only access to project roadmaps, deliverables, and approval milestones.",
      icon: Briefcase,
    },
    {
      title: "Milestone Sign-Offs & Automated Billing",
      description: "Require manager or client sign-off on deliverables before triggering automated progress billing invoices.",
      icon: CheckSquare,
    },
    {
      title: "Scope Creep & Change Order Management",
      description: "Log client change requests, evaluate schedule impact, and route formal cost revisions for approval.",
      icon: ShieldCheck,
    },
    {
      title: "Expense Reimbursement & Pass-Through Costing",
      description: "Capture project travel and vendor expenses directly to client project accounts for accurate reimbursement.",
      icon: Receipt,
    },
  ],
  workflowSteps: [
    {
      stepNumber: 1,
      title: "Project Initiation & Resource Allocation",
      description: "Project managers create work breakdown structures, assign team roles, and set baseline budgets.",
    },
    {
      stepNumber: 2,
      title: "Task Execution & Time Tracking",
      description: "Team members update Kanban task statuses and log billable hours using digital stopwatch timesheets.",
    },
    {
      stepNumber: 3,
      title: "Milestone Approval & Deliverables",
      description: "Client approves milestone deliverables digitally in the dedicated external client portal.",
    },
    {
      stepNumber: 4,
      title: "Automated Billing & Profitability Analysis",
      description: "System generates progress invoices in Accounting while updating live project profit margin dashboards.",
    },
  ],
  integrationFlow: {
    description:
      "Project Management integrates with HRMS Payroll for labor cost calculation, Sales & Order Management for proposal conversion, and Accounting & Finance for client invoicing and WIP posting.",
    connectedModules: ["HRMS & Payroll", "Sales & Order Management", "Accounting & Finance"],
  },
  reports: [
    {
      name: "Project Profitability & Margin Summary",
      description: "Real-time comparison of project contract value, incurred labor costs, expenses, and net profit margin.",
      category: "Financials",
    },
    {
      name: "Resource Utilization & Billability Matrix",
      description: "Tracks billable vs non-billable hours per team member across department projects.",
      category: "Workforce",
    },
    {
      name: "Milestone Schedule & Burn-Down Chart",
      description: "Monitors project velocity, completed tasks, upcoming milestone deadlines, and schedule variances.",
      category: "Operations",
    },
    {
      name: "Client Invoicing & Unbilled WIP Audit",
      description: "Highlights logged time and expense entries pending client billing authorization.",
      category: "Finance",
    },
  ],
  ctaPitch:
    "Deliver projects on schedule, protect profit margins, and maximize billable team utilization with Warrgyizmorsch Project.",
};

export default function ProjectModulePage() {
  return <ModuleDetailTemplate data={projectData} />;
}
