"use client";
import React from "react";

interface SortableHeaderProps {
  label: string;
  sortKey: string;
  currentSortKey: string | null;
  sortOrder: "desc" | "asc" | null;
  onClick: () => void;
  right?: boolean;
}

export default function SortableHeader({
  label,
  sortKey,
  currentSortKey,
  sortOrder,
  onClick,
  right = false,
}: SortableHeaderProps) {
  const isActive = currentSortKey === sortKey;

  const icon = isActive
    ? sortOrder === "asc"
      ? "↓"
      : sortOrder === "desc"
      ? "↑"
      : ""
    : "";

  return (
    <button
      onClick={onClick}
      className={`text-white/60 text-[14px] transition hover:text-white select-none flex items-center gap-1 ${
        right ? "justify-end w-full text-right" : ""
      }`}
    >
      {label}
      {icon && <span className="text-white">{icon}</span>}
    </button>
  );
}