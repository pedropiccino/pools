import Navbar from "@/sections/Platform/Navbar";
import CopyTrading from "@/sections/Platform/CopyTrading";

export default function TraceFi() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1 bg-[var(--color-platform-hero-background)] text-white overflow-y-auto">
        <CopyTrading />
      </main>
    </div>
  );
}
