export type VisualType =
  | "crm_kanban"
  | "crm_leads"
  | "crm_account"
  | "crm_activity"
  | "crm_conversion"
  | "sales_quote"
  | "sales_approval"
  | "sales_tax"
  | "sales_dispatch"
  | "purchase_pr"
  | "purchase_rfq"
  | "purchase_match"
  | "purchase_savings"
  | "inventory_stock"
  | "inventory_inspection"
  | "inventory_mrp"
  | "inventory_batch"
  | "production_bom"
  | "production_routing"
  | "production_cockpit"
  | "production_oee"
  | "accounting_ledger"
  | "accounting_voucher"
  | "accounting_reconcile"
  | "accounting_reports"
  | "hrms_profile"
  | "hrms_attendance"
  | "hrms_payroll"
  | "hrms_expense"
  | "project_gantt"
  | "project_utilization";

export interface ShowcaseFeatureItem {
  id: string;
  category: string;
  title: string;
  description: string;
  visualType: VisualType;
  spanClass: string;
  tags?: string[];
}

export const MODULE_SHOWCASE_DATA: Record<string, ShowcaseFeatureItem[]> = {
  crm: [
    {
      id: "crm-1",
      category: "DEAL & PIPELINE MANAGEMENT",
      title: "Visual Deal Pipeline & Drag-and-Drop Kanban",
      description: "Track deals across customizable stages with real-time win probability scoring, expected closing dates, and instant revenue velocity forecasting.",
      visualType: "crm_kanban",
      spanClass: "col-span-12 lg:col-span-8",
      tags: ["Stage Automation", "Win Probability", "Revenue Velocity"],
    },
    {
      id: "crm-2",
      category: "LEAD & PROSPECT INTAKE",
      title: "Omnichannel Lead Capture & Automated Scoring",
      description: "Capture leads from Website, Meta Ads, IndiaMART, and inbound calls with auto-enrichment, priority tagging, and SME vs Enterprise segmenting.",
      visualType: "crm_leads",
      spanClass: "col-span-12 lg:col-span-4",
      tags: ["IndiaMART Sync", "AI Lead Scoring", "Territory Routing"],
    },
    {
      id: "crm-3",
      category: "ACCOUNTS & CUSTOMER MASTER",
      title: "360° Account Intelligence & Credit Risk Control",
      description: "Consolidate contacts, GSTIN/PAN verifications, financial credit limits, past order histories, and payment track records in one profile.",
      visualType: "crm_account",
      spanClass: "col-span-12 lg:col-span-5",
      tags: ["GSTIN Verification", "Credit Limit Guard", "Multi-Contact Hub"],
    },
    {
      id: "crm-4",
      category: "ACTIVITY TRACKING & FOLLOW-UPS",
      title: "Automated Communication Timeline & Task Tracker",
      description: "Log call notes, sync bi-directional emails, schedule meeting reminders, and track rep task completion with SLA breach alerts.",
      visualType: "crm_activity",
      spanClass: "col-span-12 lg:col-span-7",
      tags: ["Email Sync", "Call Reminders", "SLA Alerts"],
    },
    {
      id: "crm-5",
      category: "LEAD CONVERSION WORKFLOW",
      title: "1-Click Lead to Proposal & Customer Conversion",
      description: "Seamlessly convert qualified leads directly into formal commercial proposals and registered Customer Masters without duplicate data entry.",
      visualType: "crm_conversion",
      spanClass: "col-span-12",
      tags: ["Quote Bridge", "Customer Master Auto-Creation", "Audit Trail"],
    },
  ],

  sales: [
    {
      id: "sales-1",
      category: "QUOTATION & COMMERCIAL ENGINE",
      title: "Multi-Item CPQ Proposal Engine",
      description: "Generate multi-currency quotations with dynamic item pricing, custom line discounts, tax rules, and version-controlled terms.",
      visualType: "sales_quote",
      spanClass: "col-span-12 lg:col-span-7",
      tags: ["Line-Item Discounts", "Version History", "Instant PDF"],
    },
    {
      id: "sales-2",
      category: "DISCOUNTS & TAX ENGINE",
      title: "Automated CGST, SGST, IGST & Discount Matrix",
      description: "Enforce contract-level discount caps, regional GST rules, and tax-exempt classifications automatically at order creation.",
      visualType: "sales_tax",
      spanClass: "col-span-12 lg:col-span-5",
      tags: ["Automated GST", "Margin Guard", "Multi-Region Tax"],
    },
    {
      id: "sales-3",
      category: "APPROVAL WORKFLOW",
      title: "Multi-Tier Commercial Approval Hierarchy",
      description: "Route high-discount quotes and custom credit terms to sales leaders and finance managers for 1-click digital sign-offs.",
      visualType: "sales_approval",
      spanClass: "col-span-12 lg:col-span-5",
      tags: ["Draft → Sent Flow", "Audit History", "Mobile Approvals"],
    },
    {
      id: "sales-4",
      category: "ORDER FULFILLMENT & DISPATCH",
      title: "Quotation to Sales Order & E-Way Bill Dispatch",
      description: "Convert accepted quotes to binding Sales Orders, reserve warehouse inventory, and generate Delivery Challans with E-Way Bill references.",
      visualType: "sales_dispatch",
      spanClass: "col-span-12 lg:col-span-7",
      tags: ["Stock Allocation", "E-Way Bill Ref", "Delivery Challan"],
    },
  ],

  purchase: [
    {
      id: "purchase-1",
      category: "PURCHASE REQUISITIONS",
      title: "Automated Material Demand & PR Workflow",
      description: "Consolidate plant material requisitions, track department-wise pending PR items, and enforce delivery target dates.",
      visualType: "purchase_pr",
      spanClass: "col-span-12 lg:col-span-5",
      tags: ["Material Demand", "PR Approvals", "Department Queue"],
    },
    {
      id: "purchase-2",
      category: "RFQ & VENDOR COMPARISON",
      title: "Side-by-Side Supplier Quotation Matrix",
      description: "Distribute RFQs to multiple vendors and evaluate side-by-side price, lead time, and supplier rating metrics to pick winning bids.",
      visualType: "purchase_rfq",
      spanClass: "col-span-12 lg:col-span-7",
      tags: ["Vendor Bidding", "Price Comparison", "Lead-Time Ranking"],
    },
    {
      id: "purchase-3",
      category: "3-WAY INVOICE MATCHING",
      title: "Strict 3-Way Audit Matching (PO, GRN & Bill)",
      description: "Prevent overpayments by auto-verifying Purchase Order quantities and GRN receipts against incoming vendor invoices before payout.",
      visualType: "purchase_match",
      spanClass: "col-span-12 lg:col-span-8",
      tags: ["PO Verification", "GRN Auto-Check", "Zero-Discrepancy"],
    },
    {
      id: "purchase-4",
      category: "LANDED COST ANALYTICS",
      title: "True Unit Cost Allocation & Savings Tracking",
      description: "Allocate freight, customs, handling, and insurance to unit inventory costs and track total negotiation savings over baseline prices.",
      visualType: "purchase_savings",
      spanClass: "col-span-12 lg:col-span-4",
      tags: ["Landed Cost Vouchers", "Negotiation Savings", "Freight Split"],
    },
  ],

  inventory: [
    {
      id: "inv-1",
      category: "STORE & SUPPLY CHAIN",
      title: "Real-Time Stock & Multi-Warehouse Visibility",
      description: "Monitor Bin locations, material movements, transit stock, and warehouse storage capacity across all company depots.",
      visualType: "inventory_stock",
      spanClass: "col-span-12 lg:col-span-7",
      tags: ["Multi-Bin Tracking", "Transit Stock", "Warehouse Capacity"],
    },
    {
      id: "inv-2",
      category: "QUALITY INSPECTION & QUARANTINE",
      title: "Gate Receipt, Inward Inspection & Quarantine Store",
      description: "Inspect incoming materials at the gate, release accepted stock to active bins, and isolate rejected lots in Quarantine Stores.",
      visualType: "inventory_inspection",
      spanClass: "col-span-12 lg:col-span-5",
      tags: ["Quality Gate Pass", "Quarantine Store", "Accepted vs Rejected"],
    },
    {
      id: "inv-3",
      category: "MRP & SHORTAGE ANALYSIS",
      title: "Automated MRP & Stock Shortage Engine",
      description: "Calculate material demand from Sales Orders & Production Plans, evaluate safety stock, and trigger auto Purchase Requisitions.",
      visualType: "inventory_mrp",
      spanClass: "col-span-12 lg:col-span-6",
      tags: ["Auto PR Trigger", "Safety Stock Guard", "Demand Calculation"],
    },
    {
      id: "inv-4",
      category: "BATCH & SERIAL NUMBER CONTROL",
      title: "FEFO/FIFO Lot Traceability & Expiry Guard",
      description: "Track manufacturing lots, expiry dates, and serial numbers to enforce FEFO picking rules and eliminate stock obsolescence.",
      visualType: "inventory_batch",
      spanClass: "col-span-12 lg:col-span-6",
      tags: ["FEFO Picking", "Expiry Warning", "Serial Number Audit"],
    },
  ],

  production: [
    {
      id: "prod-1",
      category: "BOM & ENGINEERING",
      title: "Multi-Level Bill of Materials (BOM) & Revision Control",
      description: "Structure complex assemblies, sub-components, scrap percentages, and track Engineering Change Orders (ECO) version history.",
      visualType: "production_bom",
      spanClass: "col-span-12 lg:col-span-8",
      tags: ["Multi-Level Assembly", "Scrap Factor", "ECO Version 2.4"],
    },
    {
      id: "prod-2",
      category: "ROUTING & WORK CENTERS",
      title: "Multi-Step Routing & Machine Work Center Assignment",
      description: "Define operation sequences, machine setup/run times, buffer intervals, and predecessor/successor work dependencies.",
      visualType: "production_routing",
      spanClass: "col-span-12 lg:col-span-4",
      tags: ["Work Centers", "Setup vs Run Time", "Sequence Guard"],
    },
    {
      id: "prod-3",
      category: "SHOPFLOOR MES & COCKPIT",
      title: "Operator Cockpit & Real-Time Job Tracking",
      description: "Empower operators to start, pause, and record job progress, WIP movement, and component consumption directly on the shop floor.",
      visualType: "production_cockpit",
      spanClass: "col-span-12 lg:col-span-5",
      tags: ["Operator Cockpit", "WIP Movement", "Real-Time Job Log"],
    },
    {
      id: "prod-4",
      category: "OEE & PLANT ANALYTICS",
      title: "Overall Equipment Effectiveness (OEE) & Cost Variance",
      description: "Monitor machine availability, performance, downtime reasons, and compare planned vs actual production costing.",
      visualType: "production_oee",
      spanClass: "col-span-12 lg:col-span-7",
      tags: ["OEE Metrics", "Downtime Analytics", "Cost Variance"],
    },
  ],

  accounting: [
    {
      id: "acc-1",
      category: "CORE LEDGER & BOOKKEEPING",
      title: "Chart of Accounts & Double-Entry General Ledger",
      description: "Hierarchical Chart of Accounts with automated double-entry postings, cost-center allocation, and period closing controls.",
      visualType: "accounting_ledger",
      spanClass: "col-span-12 lg:col-span-7",
      tags: ["Double-Entry GL", "Cost Centers", "Period Lock"],
    },
    {
      id: "acc-2",
      category: "BANK RECONCILIATION",
      title: "Smart Bank Feed Auto-Matching Engine",
      description: "Import electronic bank feeds and auto-match daily transactions against open AR/AP invoices with instant exception resolution.",
      visualType: "accounting_reconcile",
      spanClass: "col-span-12 lg:col-span-5",
      tags: ["99.4% Match Rate", "Exception Resolution", "Bank Feed Sync"],
    },
    {
      id: "acc-3",
      category: "VOUCHER MANAGEMENT",
      title: "Voucher Series, Debit/Credit Notes & Approval Audit",
      description: "Manage Payment, Receipt, and Contra Vouchers with strict sequential numbering, multi-tier approvals, and reversal audit logs.",
      visualType: "accounting_voucher",
      spanClass: "col-span-12 lg:col-span-5",
      tags: ["Sequential Vouchers", "No Silent Deletions", "Approval Audit"],
    },
    {
      id: "acc-4",
      category: "FINANCIAL REPORTING & GST",
      title: "Executive Financial Statements & GSTR Filings",
      description: "Generate audit-ready Balance Sheets, P&L statements, Cash Flow reports, Trial Balances, and pre-formatted GSTR-1/3B filings.",
      visualType: "accounting_reports",
      spanClass: "col-span-12 lg:col-span-7",
      tags: ["P&L & Balance Sheet", "GSTR-1 & 3B Ready", "Drill-Down Audit"],
    },
  ],

  hrms: [
    {
      id: "hr-1",
      category: "EMPLOYEE DIRECTORY & ORG STRUCTURE",
      title: "360° Employee Master & Digital Document Vault",
      description: "Manage employee profiles, employment history, bank details, tax declarations, compliance credentials, and reporting structures.",
      visualType: "hrms_profile",
      spanClass: "col-span-12 lg:col-span-5",
      tags: ["Compliance Vault", "Org Hierarchy", "Bank & Tax Master"],
    },
    {
      id: "hr-2",
      category: "ATTENDANCE & SHIFT ROSTER",
      title: "Biometric Device Sync & Smart Shift Roster",
      description: "Sync biometric punches in real-time, enforce shift rotation rules, calculate overtime, and manage leave approval calendars.",
      visualType: "hrms_attendance",
      spanClass: "col-span-12 lg:col-span-7",
      tags: ["Biometric Sync", "Shift Rotations", "Overtime Engine"],
    },
    {
      id: "hr-3",
      category: "AUTOMATED PAYROLL & TAXES",
      title: "1-Click Monthly Payroll & Statutory Tax Deductions",
      description: "Compute gross pay, HRA, PF, ESI, Professional Tax, and TDS withholdings automatically with encrypted PDF payslip generation.",
      visualType: "hrms_payroll",
      spanClass: "col-span-12 lg:col-span-7",
      tags: ["Statutory Compliance", "Encrypted Payslips", "1-Click Run"],
    },
    {
      id: "hr-4",
      category: "EXPENSES & ASSETS",
      title: "Employee Expense Reimbursements & Company Asset Tracking",
      description: "Process travel expense claims with OCR receipt parsing, manager approvals, and track company laptop/mobile allocations.",
      visualType: "hrms_expense",
      spanClass: "col-span-12 lg:col-span-5",
      tags: ["OCR Expense Claims", "Asset Handover", "Approval Chain"],
    },
  ],

  project: [
    {
      id: "proj-1",
      category: "PROJECT COST CENTERS & MILESTONES",
      title: "Connected Project Cost Centers & Milestone Tracking",
      description: "Align project execution with General Ledger cost centers, track delivery milestone completions, and monitor billing schedules.",
      visualType: "project_gantt",
      spanClass: "col-span-12 lg:col-span-7",
      tags: ["Cost Center Sync", "Milestone Billing", "Margin Guard"],
    },
    {
      id: "proj-2",
      category: "RESOURCE UTILIZATION & CAPACITY",
      title: "Team Capacity Planning & Billable Utilization",
      description: "Balance workload allocation across team members, monitor billable vs non-billable hours, and prevent resource burnout.",
      visualType: "project_utilization",
      spanClass: "col-span-12 lg:col-span-5",
      tags: ["Capacity Planning", "Billable Utilization", "Workload Balance"],
    },
  ],
};

