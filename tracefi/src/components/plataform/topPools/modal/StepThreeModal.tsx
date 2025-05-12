"use client";

import { ArrowLeft } from "lucide-react";

interface LiquidityStepThreeProps {
  poolName: string;
  tokenAmount: string;
  solAmount: string;
  strategy: string;
  onBack: () => void;
  onConfirm: () => void;
}

export default function LiquidityStepThree({
  poolName,
  tokenAmount,
  solAmount,
  strategy,
  onBack,
  onConfirm,
}: LiquidityStepThreeProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold uppercase">{poolName}</h2>
      <p className="text-teal-400 text-sm">Step 3 of 3</p>

      <div className="bg-white/5 p-4 rounded-md text-sm flex flex-col gap-2">
        <div className="flex justify-between">
          <span className="text-white/50">Pool</span>
          <span>{poolName}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/50">Token X Amount</span>
          <span>{tokenAmount || "—"}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/50">Token Y Amount</span>
          <span>{solAmount || "—"}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/50">Strategy</span>
          <span className="text-white font-medium">{strategy}</span>
        </div>
      </div>

      <p className="text-center text-sm text-white/60">
        Review your position details before creating
      </p>

      <div className="flex justify-between items-center">
        <button
          onClick={onBack}
          className="text-white text-sm flex items-center gap-1 hover:underline"
        >
          <ArrowLeft size={16} /> Back
        </button>

        <button
          onClick={onConfirm}
          className="py-2 px-6 rounded-md bg-teal-500 hover:bg-teal-600 transition font-medium"
        >
          Create Position
        </button>
      </div>
    </div>
  );
}