"use client";

import React from "react";
import ModuleDetailTemplate, {
  ModuleDetailData,
} from "@/app/components/ModuleDetailTemplate";
import {
  UsersRound,
  CalendarCheck,
  Receipt,
  FileCheck2,
  LockKeyhole,
  Clock,
  TrendingUp,
  Building2,
} from "lucide-react";

const hrmsData: ModuleDetailData = {
  slug: "hrms",
  badge: "HRMS & Payroll Module",
  title: "HRMS & Automated Payroll",
  oneLinePromise: "Automated workforce management, biometric attendance, and zero-error payroll processing.",
  description:
    "Streamline your human resources from hire to retire. Warrgyizmorsch HRMS combines biometric attendance sync, automated tax deductions, employee self-service, and 1-click payroll processing into one unified platform.",
  painPoints: [
    {
      title: "Manual Attendance & Overtime Disputes",
      description: "Scattered punch logs lead to payroll discrepancies, delayed salary disbursements, and employee friction.",
    },
    {
      title: "Complex Tax & Statutory Deductions",
      description: "Calculating local tax brackets, provident fund, insurance, and compliance manually risks heavy statutory penalties.",
    },
    {
      title: "Disconnected Expense & Leave Tracking",
      description: "Paper leave applications and manual expense reimbursements slow down approvals and create accounting backlogs.",
    },
  ],
  features: [
    {
      title: "Biometric & Mobile Attendance Sync",
      description: "Automatically pull punch data from biometric scanners, geo-fenced mobile apps, and remote check-ins.",
      icon: Clock,
    },
    {
      title: "1-Click Automated Monthly Payroll Run",
      description: "Compute gross pay, overtime, bonuses, tax withholdings, and net salary automatically in minutes.",
      icon: Receipt,
    },
    {
      title: "Employee Self-Service (ESS) Portal",
      description: "Empower staff to view digital payslips, apply for leave, submit expense claims, and update tax declarations.",
      icon: UsersRound,
    },
    {
      title: "Multi-Tier Leave & Shift Management",
      description: "Define custom leave policies, holiday calendars, rotational shift rosters, and automated approval chains.",
      icon: CalendarCheck,
    },
    {
      title: "Statutory Tax & Compliance Engine",
      description: "Generate ready-to-file statutory reports for income tax, provident fund, insurance, and labor audits.",
      icon: FileCheck2,
    },
    {
      title: "Secure Document Vault & Onboarding",
      description: "Store employee contracts, ID verifications, performance reviews, and certifications in encrypted vaults.",
      icon: LockKeyhole,
    },
    {
      title: "Performance Appraisal & Goal Tracking",
      description: "Conduct 360-degree performance evaluations, continuous feedback rounds, and OKR progress management.",
      icon: TrendingUp,
    },
    {
      title: "Corporate Travel & Expense Management",
      description: "Automate employee expense claim submissions, receipt OCR parsing, and multi-tier manager approvals.",
      icon: Building2,
    },
  ],
  workflowSteps: [
    {
      stepNumber: 1,
      title: "Attendance & Shift Capture",
      description: "Biometric devices and mobile check-ins log daily punches and calculate total working hours.",
    },
    {
      stepNumber: 2,
      title: "Leave & Overtime Verification",
      description: "Managers review and approve leave requests, attendance regularizations, and overtime hours.",
    },
    {
      stepNumber: 3,
      title: "Automated Tax & Payroll Run",
      description: "The engine applies tax brackets, deductions, and variable pay to compute exact net salaries.",
    },
    {
      stepNumber: 4,
      title: "Payslip Dispatch & Direct Bank Payout",
      description: "Encrypted payslips are dispatched to ESS portals while bank payout files are generated for direct credit.",
    },
  ],
  integrationFlow: {
    description:
      "HRMS & Payroll connects directly to Accounting & Finance by automatically posting salary expenses, tax liabilities, and statutory payables into the General Ledger. Project timesheets sync directly into payroll for billable labor costing.",
    connectedModules: ["Accounting & Finance", "Project Management", "Executive Dashboards"],
  },
  reports: [
    {
      name: "Monthly Payroll Register",
      description: "Complete itemized breakdown of gross salaries, deductions, taxes, and net disbursements.",
      category: "Payroll Audit",
    },
    {
      name: "Attendance & Absenteeism Audit",
      description: "Departmental breakdown of late arrivals, early exits, approved leaves, and unauthorized absences.",
      category: "Workforce",
    },
    {
      name: "Tax & Statutory Liability Report",
      description: "Pre-formatted filings for monthly income tax deductions, provident fund, and labor welfare.",
      category: "Compliance",
    },
    {
      name: "Labor Cost & Overtime Variance",
      description: "Tracks total human capital expenditure against budgeted labor costs per department.",
      category: "Finance",
    },
  ],
  ctaPitch:
    "Eliminate payroll stress, ensure 100% statutory compliance, and give your staff a modern self-service experience with Warrgyizmorsch HRMS.",
};

export default function HrmsModulePage() {
  return <ModuleDetailTemplate data={hrmsData} />;
}
