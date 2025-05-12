import Navbar from "@/sections/Platform/Navbar";
import Profile from "@/sections/Platform/Profile";

export default function TraceFi() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1 bg-[var(--color-platform-hero-background)] text-white overflow-y-auto">
        <Profile />
      </main>
    </div>
  );
}
