"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import PoolsTable from "@/components/plataform/topPools/PoolsTable";

export default function TopPools() {
  const [selectedFilter, setSelectedFilter] = useState("Personalized");

  const filters = ["Personalized", "Meteora", "Orca"];

  return (
    <section className="w-full bg-[#020F17] py-12 px-6 md:px-12">
      <h1 className="text-white text-[40px] font-bold mb-10">All Pools</h1>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
        <div className="flex gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2 rounded-full text-white text-[16px] font-semibold transition
                ${selectedFilter === filter 
                  ? "bg-[#0A222C] border border-white/20"
                  : "bg-[#0A222C] opacity-60 hover:opacity-100"}
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 bg-[#0A222C] rounded-full px-4 py-2 w-full md:w-[300px]">
          <Search className="text-white/50 w-5 h-5" />
          <input
            type="text"
            placeholder="Search tokens"
            className="bg-transparent outline-none text-white placeholder-white/50 w-full text-[16px]"
          />
        </div>
      </div>

      <PoolsTable />
    </section>
  );
}
