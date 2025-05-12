"use client";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import StrategyIcons from "@/components/plataform/topPools/modal/StrategyIcons";

interface LiquidityStepTwoProps {
  poolName: string;
  onBack: () => void;
  onNext: () => void;
  strategy: string;
  setStrategy: (value: string) => void;
  priceRange: string;
  setPriceRange: (value: string) => void;
  minPrice: string;
  setMinPrice: (value: string) => void;
  slippage: string;
  setSlippage: (value: string) => void;
}

export default function LiquidityStepTwo({
  poolName,
  onBack,
  onNext,
  strategy,
  setStrategy,
  priceRange,
  setPriceRange,
  minPrice,
  setMinPrice,
  slippage,
  setSlippage,
}: LiquidityStepTwoProps) {
  const [error, setError] = useState("");
  const [isCustomSlippage, setIsCustomSlippage] = useState(slippage === "%");

  const slippageOptions = ["0.5%", "1.0%", "1.5%", "%"];
  const isValid = priceRange.trim() !== "" && minPrice.trim() !== "";

  const handleSlippageClick = (value: string) => {
    if (value === "%") {
      setIsCustomSlippage(true);
      setSlippage("");
    } else {
      setIsCustomSlippage(false);
      setSlippage(value);
    }
  };

  const handleNumericChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: (value: string) => void
  ) => {
    const value = e.target.value;
    if (/^[0-9]*[.,]?[0-9]*$/.test(value)) {
      setter(value);
    }
  };

  const handleNext = () => {
    if (!isValid) {
      setError("All fields must be filled.");
      return;
    }
    setError("");
    onNext();
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold uppercase">{poolName}</h2>
      <p className="text-teal-400 text-sm">Step 2 of 3</p>

      <div className="flex justify-between text-sm text-white">
        <span>Market Cap</span>
        <span>
          Token Price <span className="text-white font-semibold">$0.042</span>
        </span>
      </div>

      <StrategyIcons selected={strategy} onSelect={setStrategy} />

      <input
        type="text"
        inputMode="decimal"
        pattern="[0-9]*[.,]?[0-9]*"
        value={priceRange}
        onChange={(e) => handleNumericChange(e, setPriceRange)}
        placeholder="Enter price range"
        className="w-full rounded-md px-4 py-2 border border-white/20 bg-transparent placeholder-white/50"
      />

      <input
        type="text"
        inputMode="decimal"
        pattern="[0-9]*[.,]?[0-9]*"
        value={minPrice}
        onChange={(e) => handleNumericChange(e, setMinPrice)}
        placeholder="Enter min price"
        className="w-full rounded-md px-4 py-2 border border-white/20 bg-transparent placeholder-white/50"
      />

      <label className="text-sm">Slippage Tolerance</label>
      <div className="flex gap-2">
        {slippageOptions.map((option) => (
          <button
            key={option}
            onClick={() => handleSlippageClick(option)}
            className={`flex-1 border py-1 rounded-md text-sm transition ${
              slippage === option || (option === "%" && isCustomSlippage)
                ? "border-teal-400 text-teal-400"
                : "border-white/20 text-white hover:border-white/40"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {isCustomSlippage && (
        <input
          type="text"
          inputMode="decimal"
          pattern="[0-9]*[.,]?[0-9]*"
          value={slippage}
          onChange={(e) => handleNumericChange(e, setSlippage)}
          placeholder="Enter custom %"
          className="mt-2 w-full rounded-md px-4 py-2 border border-white/20 bg-transparent placeholder-white/50"
        />
      )}

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <div className="flex justify-between items-center mt-2">
        <button
          onClick={onBack}
          className="text-white text-sm flex items-center gap-1 hover:underline"
        >
          <ArrowLeft size={16} /> Back
        </button>

        <button
          onClick={handleNext}
          disabled={!isValid}
          className={`py-2 px-6 rounded-md font-medium transition ${
            isValid ? "bg-teal-500 hover:bg-teal-600" : "bg-white/20 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}