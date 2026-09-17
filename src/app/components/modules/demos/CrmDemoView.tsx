"use client";

import React from "react";
import ProductDemo, { DemoActionStep } from "../shared/ProductDemo";
import CrmHeroVisual from "../visuals/CrmHeroVisual";

const crmDemoSteps: DemoActionStep[] = [
  { stepIndex: 0, cursorX: 180, cursorY: 140, actionLabel: "Inspecting Qualified Pipeline Leads...", isClicking: false, activeTabName: "Live Pipeline" },
  { stepIndex: 1, cursorX: 320, cursorY: 220, actionLabel: "Selecting Lead: David Vance ($85,500)...", isClicking: true, activeTabName: "Live Pipeline" },
  { stepIndex: 2, cursorX: 580, cursorY: 280, actionLabel: "Verifying AI Lead Score: 92% Match...", isClicking: false, activeTabName: "AI Scoring" },
  { stepIndex: 3, cursorX: 640, cursorY: 340, actionLabel: "Bridging 1-Click Sales Order...", isClicking: true, activeTabName: "Order Bridge" },
];

export default function CrmDemoView() {
  return (
    <ProductDemo
      title="Warrgyizmorsch CRM — Deal Pipeline & AI Lead Scoring"
      badge="Simulated Interactive Demo"
      tabs={["Live Pipeline", "AI Scoring", "Order Bridge"]}
      steps={crmDemoSteps}
    >
      {() => <CrmHeroVisual />}
    </ProductDemo>
  );
}
