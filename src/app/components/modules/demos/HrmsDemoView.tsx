"use client";

import React from "react";
import ProductDemo, { DemoActionStep } from "../shared/ProductDemo";
import HrmsHeroVisual from "../visuals/HrmsHeroVisual";

const hrmsDemoSteps: DemoActionStep[] = [
  { stepIndex: 0, cursorX: 180, cursorY: 150, actionLabel: "Checking Employee Attendance Punches...", isClicking: false, activeTabName: "Biometric Punch" },
  { stepIndex: 1, cursorX: 360, cursorY: 220, actionLabel: "Verifying Approved Leave Request for EMP-312...", isClicking: true, activeTabName: "Leave Queue" },
  { stepIndex: 2, cursorX: 520, cursorY: 280, actionLabel: "Calculating Gross Salary & Statutory Tax...", isClicking: false, activeTabName: "Tax Calculation" },
  { stepIndex: 3, cursorX: 620, cursorY: 320, actionLabel: "Executing 1-Click Direct Bank Payroll Payout...", isClicking: true, activeTabName: "Payroll Run" },
];

export default function HrmsDemoView() {
  return (
    <ProductDemo
      title="Warrgyizmorsch HRMS — Biometric Attendance & 1-Click Payroll"
      badge="Simulated Interactive Demo"
      tabs={["Biometric Punch", "Leave Queue", "Tax Calculation", "Payroll Run"]}
      steps={hrmsDemoSteps}
    >
      {() => <HrmsHeroVisual />}
    </ProductDemo>
  );
}
