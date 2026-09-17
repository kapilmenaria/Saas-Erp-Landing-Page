"use client";

import React from "react";
import ProductDemo, { DemoActionStep } from "../shared/ProductDemo";
import InventoryHeroVisual from "../visuals/InventoryHeroVisual";

const inventoryDemoSteps: DemoActionStep[] = [
  { stepIndex: 0, cursorX: 140, cursorY: 100, actionLabel: "Selecting Warehouse Alpha Hub...", isClicking: true, activeTabName: "Warehouse Stock" },
  { stepIndex: 1, cursorX: 240, cursorY: 160, actionLabel: "Filtering Low-Stock Reorder Triggers...", isClicking: false, activeTabName: "Warehouse Stock" },
  { stepIndex: 2, cursorX: 520, cursorY: 260, actionLabel: "Inspecting Serial & Batch Lot Traceability...", isClicking: true, activeTabName: "Serial & Batch Lot" },
  { stepIndex: 3, cursorX: 620, cursorY: 310, actionLabel: "Auto-Generating Supplier Requisition PO...", isClicking: true, activeTabName: "Reorder Trigger" },
];

export default function InventoryDemoView() {
  return (
    <ProductDemo
      title="Warrgyizmorsch Inventory — Warehouse Control & Reorder Triggers"
      badge="Simulated Interactive Demo"
      tabs={["Warehouse Stock", "Serial & Batch Lot", "Reorder Trigger"]}
      steps={inventoryDemoSteps}
    >
      {() => <InventoryHeroVisual />}
    </ProductDemo>
  );
}
