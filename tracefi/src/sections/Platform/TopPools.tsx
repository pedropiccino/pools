"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import PoolsTable from "@/components/plataform/topPools/table/PoolsTable";
import LiquidityStepOne from "@/components/plataform/topPools/modal/StepOneModal";
import LiquidityStepTwo from "@/components/plataform/topPools/modal/StepTwoModal";
import LiquidityStepThree from "@/components/plataform/topPools/modal/StepThreeModal";
import TableSearch from "@/components/plataform/topPools/table/TableSearch";
import Toast from "@/components/ui/Toast";

export default function TopPools() {
  const [selectedFilter, setSelectedFilter] = useState("Personalized");
  const [selectedPool, setSelectedPool] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const [liquidityType, setLiquidityType] = useState("double");
  const [solAmount, setSolAmount] = useState("");
  const [tokenAmount, setTokenAmount] = useState("");

  const [strategy, setStrategy] = useState("Spot");
  const [priceRange, setPriceRange] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [slippage, setSlippage] = useState("1.0%");

  const [toastMessage, setToastMessage] = useState("");

  const filters = ["Personalized", "Meteora", "Orca"];

  const handleCreatePosition = () => {
    setIsModalOpen(false);
    setToastMessage("Pool criada com sucesso!");
  };

  const handleSelectPool = (pool: any) => {
    setSelectedPool(pool);
    setStep(1);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedPool(null);
    setIsModalOpen(false);
    setStep(1);
    setLiquidityType("double");
    setSolAmount("");
    setTokenAmount("");
    setStrategy("Spot");
    setPriceRange("");
    setMinPrice("");
    setSlippage("1.0%");
  };

  return (
    <section className="w-full bg-[var(--color-platform-hero-background)] py-12 px-6 md:px-12">
      <h1 className="text-white text-[40px] font-bold mb-10">Top Pools</h1>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
        <div className="flex gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2 rounded-full text-white text-[16px] font-semibold transition ${
                selectedFilter === filter
                  ? "bg-[var(--color-platform-tableElements-background)] border border-white/20"
                  : "bg-[var(--color-platform-tableElements-background)] opacity-60 hover:opacity-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <TableSearch value={searchTerm} onChange={setSearchTerm} />
      </div>

      <PoolsTable onSelectPool={handleSelectPool} search={searchTerm} />

      <Dialog open={isModalOpen} onOpenChange={handleCloseModal}>
        <DialogContent className="bg-[var(--color-platform-tableElements-background)] text-white p-6 rounded-xl w-full max-w-[480px]">
          {selectedPool && step === 1 && (
            <LiquidityStepOne
              pool={selectedPool}
              liquidityType={liquidityType}
              setLiquidityType={setLiquidityType}
              solAmount={solAmount}
              setSolAmount={setSolAmount}
              tokenAmount={tokenAmount}
              setTokenAmount={setTokenAmount}
              onNext={() => setStep(2)}
            />
          )}

          {selectedPool && step === 2 && (
            <LiquidityStepTwo
              poolName={selectedPool.poolName}
              strategy={strategy}
              setStrategy={setStrategy}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              slippage={slippage}
              setSlippage={setSlippage}
              onBack={() => setStep(1)}
              onNext={() => setStep(3)}
            />
          )}

          {selectedPool && step === 3 && (
            <LiquidityStepThree
              poolName={selectedPool.poolName}
              tokenAmount={tokenAmount}
              solAmount={solAmount}
              strategy={strategy}
              onBack={() => setStep(2)}
              onConfirm={handleCreatePosition}
            />
          )}
        </DialogContent>
      </Dialog>

      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage("")} />
      )}
    </section>
  );
}
