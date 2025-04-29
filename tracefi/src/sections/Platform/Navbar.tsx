"use client";

import Image from "next/image";
import Link from "next/link";
import { PLATFORM_ROUTES } from "@/constants/route";
import logo from "@/assets/navbar/logoName.png"

export default function Navbar() {
  return (
    <header className="w-full bg-[#041923] px-6 md:px-12 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image src={logo} alt="TraceFi logo" width={200} height={80} />
      </div>
      <nav className="hidden md:flex gap-14 text-white/60 text-[28px] font-semibold">
        <Link href={PLATFORM_ROUTES.TOP_POOLS} className="hover:text-primary transition">
          Top Pools
        </Link>
        <Link href={PLATFORM_ROUTES.MY_POSITIONS} className="hover:text-primary transition">
          My Positions
        </Link>
        <Link href={PLATFORM_ROUTES.COPY_TRADING} className="hover:text-primary transition">
          Copy Trading
        </Link>
        <Link href={PLATFORM_ROUTES.FIND_WALLETS} className="hover:text-primary transition">
          Find Wallets
        </Link>
        <Link href={PLATFORM_ROUTES.MY_PROFILE} className="hover:text-primary transition">
          My Profile
        </Link>
      </nav>
        <button
          className="bg-primary hover:brightness-110 text-[#041923] rounded-full px-6 py-2 text-[24px] font-semibold transition"
        >
          Connect Wallet
        </button>
    </header>
  );
}