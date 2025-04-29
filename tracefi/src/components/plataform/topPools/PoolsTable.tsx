"use client";

import Image from "next/image";

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
    poolName: "SOL ≡ USDt",
    poolSymbol: "USDt",
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
    volume: "$19,85M",
    tvl: "103,67M",
    apy: "13,05%",
    fees: "0,09%",
    platform: "Meteora",
    iconUrl: "/mock/sol_usdc.png",
  },
  {
    poolName: "SOL ≡ MNDE",
    poolSymbol: "SOLC",
    volume: "$15,29M",
    tvl: "89,41M",
    apy: "18,22%",
    fees: "0,12%",
    platform: "Meteora",
    iconUrl: "/mock/sol_mnde.png",
  },
  {
    poolName: "SOL ≡ RAY",
    poolSymbol: "RAY",
    volume: "$12,76M",
    tvl: "75,93M",
    apy: "24,76%",
    fees: "0,15%",
    platform: "Orca",
    iconUrl: "/mock/sol_ray.png",
  },
];

export default function PoolsTable() {
  return (
    <div className="w-full mt-12 overflow-x-auto">
      <table className="w-full min-w-[900px] text-left">
        <thead>
          <tr className="text-white/60 text-[14px]">
            <th className="py-4 px-6">Pool</th>
            <th className="py-4 px-6">Volume <span className="text-[10px]">24H</span></th>
            <th className="py-4 px-6">TVL</th>
            <th className="py-4 px-6">APY</th>
            <th className="py-4 px-6">Fees</th>
            <th className="py-4 px-6">Platform</th>
          </tr>
        </thead>
        <tbody>
          {pools.map((pool, index) => (
            <tr
              key={index}
              className="bg-[#0A222C] hover:bg-[#0F2C38] transition rounded-xl overflow-hidden border-b border-[#041923]/20"
            >
              <td className="flex items-center gap-4 py-4 px-6">
                <Image
                  src={pool.iconUrl}
                  alt={pool.poolName}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-[16px]">{pool.poolName}</span>
                  <span className="text-white/50 text-[14px]">{pool.poolSymbol}</span>
                </div>
              </td>
              <td className="text-white text-[14px] py-4 px-6">{pool.volume}</td>
              <td className="text-white text-[14px] py-4 px-6">{pool.tvl}</td>
              <td className="text-green-400 font-semibold text-[14px] py-4 px-6">{pool.apy}</td>
              <td className="text-white text-[14px] py-4 px-6">{pool.fees}</td>
              <td className="text-white text-[14px] py-4 px-6">{pool.platform}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}