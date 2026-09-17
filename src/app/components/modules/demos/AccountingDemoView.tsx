"use client";

import React from "react";
import ProductDemo, { DemoActionStep } from "../shared/ProductDemo";
import AccountingHeroVisual from "../visuals/AccountingHeroVisual";

const accountingDemoSteps: DemoActionStep[] = [
  { stepIndex: 0, cursorX: 180, cursorY: 140, actionLabel: "Reviewing General Ledger Journal Streams...", isClicking: false, activeTabName: "GL Postings" },
  { stepIndex: 1, cursorX: 380, cursorY: 210, actionLabel: "Matching Live Bank Feed Receipt #GL-9012...", isClicking: true, activeTabName: "Bank Reconciliation" },
  { stepIndex: 2, cursorX: 560, cursorY: 280, actionLabel: "Calculating Local Tax & Statutory Deductions...", isClicking: false, activeTabName: "Tax Engine" },
  { stepIndex: 3, cursorX: 620, cursorY: 320, actionLabel: "Generating Audit-Ready P&L & Balance Sheet...", isClicking: true, activeTabName: "Financial Reports" },
];

export default function AccountingDemoView() {
  return (
    <ProductDemo
      title="Warrgyizmorsch Accounting — Double-Entry GL & Bank Reconciliation"
      badge="Simulated Interactive Demo"
      tabs={["GL Postings", "Bank Reconciliation", "Tax Engine", "Financial Reports"]}
      steps={accountingDemoSteps}
    >
      {() => <AccountingHeroVisual />}
    </ProductDemo>
  );
}
