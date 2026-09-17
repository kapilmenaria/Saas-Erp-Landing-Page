"use client";

import React from "react";
import ProductDemo, { DemoActionStep } from "../shared/ProductDemo";
import ProjectHeroVisual from "../visuals/ProjectHeroVisual";

const projectDemoSteps: DemoActionStep[] = [
  { stepIndex: 0, cursorX: 180, cursorY: 150, actionLabel: "Reviewing Project PRJ-301 Timeline...", isClicking: false, activeTabName: "Gantt Schedule" },
  { stepIndex: 1, cursorX: 380, cursorY: 220, actionLabel: "Verifying Team Billable Utilization (86.4%)...", isClicking: true, activeTabName: "Resource Capacity" },
  { stepIndex: 2, cursorX: 540, cursorY: 280, actionLabel: "Logging Stopwatch Timesheet Hours...", isClicking: true, activeTabName: "Time Logging" },
  { stepIndex: 3, cursorX: 620, cursorY: 320, actionLabel: "Approving Milestone Progress Billing Invoice...", isClicking: true, activeTabName: "Milestone Billing" },
];

export default function ProjectDemoView() {
  return (
    <ProductDemo
      title="Warrgyizmorsch Project — Gantt Milestones & Resource Utilization"
      badge="Simulated Interactive Demo"
      tabs={["Gantt Schedule", "Resource Capacity", "Time Logging", "Milestone Billing"]}
      steps={projectDemoSteps}
    >
      {() => <ProjectHeroVisual />}
    </ProductDemo>
  );
}
