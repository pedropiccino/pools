
"use client";

import { Search } from "lucide-react";

interface TableSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function TableSearch({ value, onChange }: TableSearchProps) {
  return (
    <div className="flex items-center gap-2 bg-[var(--color-platform-tableElements-background)] rounded-full px-4 py-3 w-full md:w-[300px]">
      <Search className="text-white/50 w-5 h-5" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search tokens"
        className="bg-transparent outline-none text-white placeholder-white/50 w-full text-[16px]"
      />
    </div>
  );
}
