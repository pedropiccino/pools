"use client";
import React, { useState } from "react";

interface LiquidityStepOneProps {
  pool: {
    poolName: string;
    poolSymbol: string;
    platform: string;
  };
  liquidityType: string;
  setLiquidityType: (value: string) => void;
  solAmount: string;
  setSolAmount: (value: string) => void;
  tokenAmount: string;
  setTokenAmount: (value: string) => void;
  onNext: () => void;
}

export default function LiquidityStepOne({
  pool,
  liquidityType,
  setLiquidityType,
  solAmount,
  setSolAmount,
  tokenAmount,
  setTokenAmount,
  onNext,
}: LiquidityStepOneProps) {
  const [error, setError] = useState("");

  const isSolOnly = liquidityType === "sol";
  const isTokenOnly = liquidityType === "token";

  const isSolValid = solAmount.trim() !== "";
  const isTokenValid = tokenAmount.trim() !== "";
  const isValid =
    (liquidityType === "sol" && isSolValid) ||
    (liquidityType === "token" && isTokenValid) ||
    (liquidityType === "double" && isSolValid && isTokenValid);

  const handleNext = () => {
    if (!isValid) {
      setError("Please fill in the required fields before proceeding.");
      return;
    }

    setError("");
    onNext();
  };

  const handleNumericChange = (e: React.ChangeEvent<HTMLInputElement>, setter: (value: string) => void) => {
    const value = e.target.value;
    if (/^[0-9]*[.,]?[0-9]*$/.test(value)) {
      setter(value);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-xl font-semibold">{pool.poolName}</h2>
        <p className="text-teal-400 text-sm">Step 1 of 3</p>
      </div>

      <div>
        <label className="block mb-1 text-sm">Liquidity Type</label>
        <select
          value={liquidityType}
          onChange={(e) => setLiquidityType(e.target.value)}
          className="w-full rounded-md px-4 py-2 bg-transparent border border-white/20 focus:outline-none"
        >
          <option value="double" className="bg-[var(--color-platform-hover)]">
            Double Sided (SOL + {pool.poolSymbol})
          </option>
          <option value="sol" className="bg-[var(--color-platform-hover)]">SOL Sided</option>
          <option value="token" className="bg-[var(--color-platform-hover)]">{pool.poolSymbol} Sided</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          inputMode="decimal"
          pattern="[0-9]*[.,]?[0-9]*"
          placeholder={`Enter ${pool.poolSymbol} amount`}
          disabled={isSolOnly}
          value={tokenAmount}
          onChange={(e) => handleNumericChange(e, setTokenAmount)}
          className={`w-full rounded-md px-4 py-2 border placeholder-white/50 focus:outline-none ${
            isSolOnly ? "bg-white/10 opacity-40 cursor-not-allowed" : "bg-transparent border-white/20"
          }`}
        />
        <input
          type="text"
          inputMode="decimal"
          pattern="[0-9]*[.,]?[0-9]*"
          placeholder="Enter SOL amount"
          disabled={isTokenOnly}
          value={solAmount}
          onChange={(e) => handleNumericChange(e, setSolAmount)}
          className={`w-full rounded-md px-4 py-2 border placeholder-white/50 focus:outline-none ${
            isTokenOnly ? "bg-white/10 opacity-40 cursor-not-allowed" : "bg-transparent border-white/20"
          }`}
        />
      </div>

      <p className="text-sm text-white/50">Balance: 0.82356984 SOL</p>

      <div className="flex gap-2">
        {["25%", "50%", "75%", "MAX"].map((label) => (
          <button
            key={label}
            onClick={() => {
              if (!isSolOnly) setTokenAmount("100");
              if (!isTokenOnly) setSolAmount("0.5");
            }}
            className="flex-1 rounded-md border border-white/20 py-1 text-sm hover:border-white/40 transition"
          >
            {label}
          </button>
        ))}
      </div>

      <p className="text-center text-sm text-white/60">
        Enter the amount of SOL you want to deposit
      </p>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <button
        onClick={handleNext}
        disabled={!isValid}
        className={`w-full py-2 rounded-md font-medium transition ${
          isValid ? "bg-teal-500 hover:bg-teal-600" : "bg-white/20 cursor-not-allowed"
        }`}
      >
        Next
      </button>
    </div>
  );
}
