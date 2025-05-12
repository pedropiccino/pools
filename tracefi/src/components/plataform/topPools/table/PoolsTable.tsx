"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import solIcon from "@/assets/hero/solanaLogo.png"
import { usePagination } from "@/hooks/usePagination"
import { useSortableData } from "@/hooks/useSortableData";
import SortableHeader from "@/components/plataform/topPools/table/SortableHeader"


const pools = [
  {
    poolName: "SOL ≡ USDC",
    poolSymbol: "USDC",
    volume: "$32,58M",
    tvl: "150,21M",
    apy: "14,82%",
    fees: "0,10%",
    platform: "Meteora",
    iconUrl: "/mock/sol_usdc.png",
  },
  {
    poolName: "SOL ≡ USDT",
    poolSymbol: "USDT",
    volume: "$24,03M",
    tvl: "122,84M",
    apy: "9,47%",
    fees: "0,04%",
    platform: "Orca",
    iconUrl: "/mock/sol_usdt.png",
  },
  {
    poolName: "SOL ≡ USDC",
    poolSymbol: "SOLC",
    volume: "$17,15M",
    tvl: "98,64M",
    apy: "11,73%",
    fees: "0,11%",
    platform: "Meteora",
    iconUrl: "/mock/sol_usdc.png",
  },
  {
    poolName: "SOL ≡ MNDE",
    poolSymbol: "SOLC",
    volume: "$21,88M",
    tvl: "110,37M",
    apy: "16,92%",
    fees: "0,07%",
    platform: "Meteora",
    iconUrl: "/mock/sol_mnde.png",
  },
  {
    poolName: "SOL ≡ USDC",
    poolSymbol: "USDC",
    volume: "$19,42M",
    tvl: "85,29M",
    apy: "22,15%",
    fees: "0,12%",
    platform: "Orca",
    iconUrl: "/mock/sol_ray.png",
  },
  {
    poolName: "SOL ≡ USDT",
    poolSymbol: "USDT",
    volume: "$11,33M",
    tvl: "72,58M",
    apy: "20,49%",
    fees: "0,09%",
    platform: "Orca",
    iconUrl: "/mock/sol_ray.png",
  },
  {
    poolName: "SOL ≡ MELANIA",
    poolSymbol: "MELANIA",
    volume: "$13,67M",
    tvl: "80,91M",
    apy: "18,03%",
    fees: "0,13%",
    platform: "Orca",
    iconUrl: "/mock/sol_ray.png",
  },
  {
    poolName: "SOL ≡ TROLL",
    poolSymbol: "TROLL",
    volume: "$16,22M",
    tvl: "91,46M",
    apy: "23,11%",
    fees: "0,06%",
    platform: "Orca",
    iconUrl: "/mock/sol_ray.png",
  },
  {
    poolName: "SOL ≡ Bonk",
    poolSymbol: "Bonk",
    volume: "$10,95M",
    tvl: "70,30M",
    apy: "19,99%",
    fees: "0,08%",
    platform: "Orca",
    iconUrl: "/mock/sol_ray.png",
  },
  {
    poolName: "SOL ≡ RAY",
    poolSymbol: "RAY",
    volume: "$14,87M",
    tvl: "84,71M",
    apy: "17,65%",
    fees: "0,14%",
    platform: "Orca",
    iconUrl: "/mock/sol_ray.png",
  },
  {
    poolName: "SOL ≡ JUP",
    poolSymbol: "JUP",
    volume: "$18,51M",
    tvl: "95,82M",
    apy: "21,22%",
    fees: "0,05%",
    platform: "Orca",
    iconUrl: "/mock/sol_ray.png",
  },
  {
    poolName: "SOL ≡ WBTC",
    poolSymbol: "WBTC",
    volume: "$20,76M",
    tvl: "101,34M",
    apy: "23,87%",
    fees: "0,16%",
    platform: "Orca",
    iconUrl: "/mock/sol_ray.png",
  },
  {
    poolName: "SOL ≡ JLP",
    poolSymbol: "JLP",
    volume: "$22,43M",
    tvl: "108,59M",
    apy: "24,61%",
    fees: "0,17%",
    platform: "Orca",
    iconUrl: "/mock/sol_ray.png",
  },
  {
    poolName: "SOL ≡ TRUMP",
    poolSymbol: "TRUMP",
    volume: "$15,36M",
    tvl: "87,47M",
    apy: "20,33%",
    fees: "0,10%",
    platform: "Orca",
    iconUrl: "/mock/sol_trump.png",
  },
];

interface PoolsTableProps {
  onSelectPool: (pool: typeof pools[0]) => void;
  search: string;
}

export default function PoolsTable({ onSelectPool, search }: PoolsTableProps) {
  const filteredPools = pools.filter((pool) =>
    pool.poolName.toLowerCase().includes(search.toLowerCase())
  );

  const { sortedData, requestSort, sortKey, sortOrder } = useSortableData(filteredPools);
  const { currentItems, currentPage, totalPages, nextPage, prevPage } = usePagination(sortedData, 6);

  return (
    <div className="w-full mt-12 overflow-x-auto">
      <div className="hidden md:grid grid-cols-6 text-[14px] px-6 mb-4 min-w-[900px]">
        <span className="text-white/60">Pool</span>

        <SortableHeader label="Volume 24H" sortKey="volume" currentSortKey={sortKey} sortOrder={sortOrder} onClick={() => requestSort("volume")} right />
        <SortableHeader label="TVL" sortKey="tvl" currentSortKey={sortKey} sortOrder={sortOrder} onClick={() => requestSort("tvl")} right />
        <SortableHeader label="APY" sortKey="apy" currentSortKey={sortKey} sortOrder={sortOrder} onClick={() => requestSort("apy")} right />
        <SortableHeader label="Fees" sortKey="fees" currentSortKey={sortKey} sortOrder={sortOrder} onClick={() => requestSort("fees")} right />
        <SortableHeader label="Platform" sortKey="platform" currentSortKey={sortKey} sortOrder={sortOrder} onClick={() => requestSort("platform")} right />
      </div>

      <div className="flex flex-col gap-3 min-w-[900px]">
        {currentItems.map((pool, index) => (
          <div
            key={index}
            onClick={() => onSelectPool(pool)}
            className="grid grid-cols-6 items-center bg-[var(--color-platform-tableElements-background)] hover:bg-[#0F2C38] transition rounded-xl px-6 py-4 text-white cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <Image src={solIcon} alt={pool.poolName} width={40} height={40} className="rounded-full" />
              <div className="flex flex-col">
                <span className="font-semibold text-[16px]">{pool.poolName}</span>
                <span className="text-white/50 text-[14px]">{pool.poolSymbol}</span>
              </div>
            </div>

            <span className="text-right">{pool.volume}</span>
            <span className="text-right">{pool.tvl}</span>
            <span className="text-right text-green-400 font-semibold">{pool.apy}</span>
            <span className="text-right">{pool.fees}</span>
            <span className="text-right">{pool.platform}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-end gap-4 mt-6 px-6 text-white text-sm">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--color-platform-tableElements-background)] hover:bg-[var(--color-platform-hover)] transition disabled:opacity-30"
        >
          <ChevronLeft size={18} />
        </button>

        <span>
          Page {currentPage} / {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--color-platform-tableElements-background)] hover:bg-[var(--color-platform-hover)] transition disabled:opacity-30"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}