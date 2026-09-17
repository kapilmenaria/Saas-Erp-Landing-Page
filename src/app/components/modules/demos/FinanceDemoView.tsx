"use client";

import React from "react";
import ProductDemo, { DemoActionStep } from "../shared/ProductDemo";
import FinanceHeroVisual from "../visuals/FinanceHeroVisual";

const financeDemoSteps: DemoActionStep[] = [
  { stepIndex: 0, cursorX: 180, cursorY: 140, actionLabel: "Consolidate Multi-Bank Treasury Reserves...", isClicking: false, activeTabName: "Multi-Bank Balances" },
  { stepIndex: 1, cursorX: 380, cursorY: 220, actionLabel: "Computing 30-60-90 Day Liquidity Forecast...", isClicking: true, activeTabName: "Cash Forecast" },
  { stepIndex: 2, cursorX: 540, cursorY: 280, actionLabel: "Executing Corporate FX Hedging Contract...", isClicking: true, activeTabName: "FX Risk Hedging" },
];

export default function FinanceDemoView() {
  return (
    <ProductDemo
      title="Warrgyizmorsch Treasury — Multi-Bank Liquidity & FX Risk Control"
      badge="Simulated Interactive Demo"
      tabs={["Multi-Bank Balances", "Cash Forecast", "FX Risk Hedging"]}
      steps={financeDemoSteps}
    >
      {() => <FinanceHeroVisual />}
    </ProductDemo>
  );
}
