"use client";

import React from "react";
import ProductDemo, { DemoActionStep } from "../shared/ProductDemo";
import ProductionHeroVisual from "../visuals/ProductionHeroVisual";

const productionDemoSteps: DemoActionStep[] = [
  { stepIndex: 0, cursorX: 180, cursorY: 140, actionLabel: "Inspecting Work Order #WO-7022...", isClicking: false, activeTabName: "Work Orders" },
  { stepIndex: 1, cursorX: 360, cursorY: 210, actionLabel: "Verifying Multi-Level BOM Component Stock...", isClicking: true, activeTabName: "BOM Tree" },
  { stepIndex: 2, cursorX: 540, cursorY: 270, actionLabel: "Checking Line B Machine Telemetry & OEE (94.6%)...", isClicking: false, activeTabName: "Line Uptime" },
  { stepIndex: 3, cursorX: 620, cursorY: 310, actionLabel: "Dispatching Job to CNC Machining Center...", isClicking: true, activeTabName: "Shop Dispatch" },
];

export default function ProductionDemoView() {
  return (
    <ProductDemo
      title="Warrgyizmorsch Manufacturing — Work Orders & Multi-Level BOM"
      badge="Simulated Interactive Demo"
      tabs={["Work Orders", "BOM Tree", "Line Uptime", "Shop Dispatch"]}
      steps={productionDemoSteps}
    >
      {() => <ProductionHeroVisual />}
    </ProductDemo>
  );
}
