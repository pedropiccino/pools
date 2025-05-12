"use client";
import React from "react";

interface StrategySelectorProps {
  selected: string;
  onSelect: (value: string) => void;
}

export default function StrategySelector({
  selected,
  onSelect,
}: StrategySelectorProps) {
  const strategies = [
    { name: "Spot", bars: [8, 10, 13.6, 18.3, 24] },
    { name: "Curve", bars: [24, 18.3, 13.6, 10, 8] },
    { name: "Bid/ak", bars: [8, 13, 24, 13, 8] },
  ];

  return (
    <div className="grid grid-cols-3 border border-white/20 rounded-md">
      {strategies.map((strategyItem) => (
        <button
          key={strategyItem.name}
          onClick={() => onSelect(strategyItem.name)}
          className={`flex flex-col items-center gap-3 py-2 rounded-md text-sm transition w-full ${
            selected === strategyItem.name
            ? "bg-teal-500/20 border border-teal-400 text-teal-400"
            : "text-white hover:bg-white/10"
          }`}
        >
          <div className="flex gap-0.5 h-4 mb-1">
            {strategyItem.bars.map((height, idx) => (
              <div
                key={idx}
                style={{ height: `${height}px` }}
                className="w-0.5 bg-teal-400"
              />
            ))}
          </div>
          {strategyItem.name}
        </button>
      ))}
    </div>
  );
}