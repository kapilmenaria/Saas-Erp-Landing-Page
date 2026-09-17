"use client";

import React from "react";
import ProductDemo, { DemoActionStep } from "../shared/ProductDemo";
import PurchaseHeroVisual from "../visuals/PurchaseHeroVisual";

const purchaseDemoSteps: DemoActionStep[] = [
  { stepIndex: 0, cursorX: 160, cursorY: 140, actionLabel: "Reviewing Open Purchase Requisitions...", isClicking: false, activeTabName: "Requisitions" },
  { stepIndex: 1, cursorX: 480, cursorY: 220, actionLabel: "Verifying 3-Way Invoice Match (PO/GRN/Bill)...", isClicking: true, activeTabName: "3-Way Match" },
  { stepIndex: 2, cursorX: 610, cursorY: 260, actionLabel: "Approving PO-4030 ($18,200)...", isClicking: true, activeTabName: "PO Approval" },
];

export default function PurchaseDemoView() {
  return (
    <ProductDemo
      title="Warrgyizmorsch Procurement — PO Approvals & 3-Way Invoice Match"
      badge="Simulated Interactive Demo"
      tabs={["Requisitions", "3-Way Match", "PO Approval"]}
      steps={purchaseDemoSteps}
    >
      {() => <PurchaseHeroVisual />}
    </ProductDemo>
  );
}
