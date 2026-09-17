"use client";

import React from "react";
import ProductDemo, { DemoActionStep } from "../shared/ProductDemo";
import SalesHeroVisual from "../visuals/SalesHeroVisual";

const salesDemoSteps: DemoActionStep[] = [
  { stepIndex: 0, cursorX: 180, cursorY: 150, actionLabel: "Inspecting Quotation #SO-8803...", isClicking: false, activeTabName: "Quotations" },
  { stepIndex: 1, cursorX: 380, cursorY: 210, actionLabel: "Applying Contract Tier Discount Matrix...", isClicking: true, activeTabName: "Pricing Matrix" },
  { stepIndex: 2, cursorX: 520, cursorY: 260, actionLabel: "Reserving Warehouse Stock in Alpha Hub...", isClicking: true, activeTabName: "Stock Allocation" },
  { stepIndex: 3, cursorX: 620, cursorY: 310, actionLabel: "Converting Quotation to Binding Sales Order...", isClicking: true, activeTabName: "SO Conversion" },
];

export default function SalesDemoView() {
  return (
    <ProductDemo
      title="Warrgyizmorsch Sales — Quotations, Pricing & Order Fulfillment"
      badge="Simulated Interactive Demo"
      tabs={["Quotations", "Pricing Matrix", "Stock Allocation", "SO Conversion"]}
      steps={salesDemoSteps}
    >
      {() => <SalesHeroVisual />}
    </ProductDemo>
  );
}
