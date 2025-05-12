"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  LineChart,
  Copy,
  Wallet,
  User,
  FileText,
  Settings,
} from "lucide-react";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import logoFull from "@/assets/navbar/logoName.png";
import logoIcon from "@/assets/navbar/logo.png";
import { PLATFORM_ROUTES } from "@/constants/route";

const navItems = [
  { name: "Top Pools", icon: Home, href: PLATFORM_ROUTES.TOP_POOLS },
  { name: "My Positions", icon: LineChart, href: PLATFORM_ROUTES.MY_POSITIONS },
  { name: "Copy Trading", icon: Copy, href: PLATFORM_ROUTES.COPY_TRADING },
  { name: "Find Wallets", icon: Wallet, href: PLATFORM_ROUTES.FIND_WALLETS },
  { name: "My Profile", icon: User, href: PLATFORM_ROUTES.MY_PROFILE },
  { name: "Settings", icon: Settings, href: PLATFORM_ROUTES.SETTINGS },
];

export default function VerticalNavbar() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <aside
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
      className={`h-screen ${
        collapsed ? "w-[80px]" : "w-[250px]"
      } bg-[var(--color-platform-navbar-background)] px-4 py-4 flex flex-col justify-between transition-all duration-300`}
    >
      <div>
        <div className={`flex ${collapsed ? "justify-center" : "justify-between"} items-center mb-4`}>
          <Image
            src={collapsed ? logoIcon : logoFull}
            alt="TraceFi logo"
            width={collapsed ? 40 : 180}
            height={60}
            className="transition-all duration-300"
          />
        </div>
        <hr className="border-t border-white/10 my-3" />
        <nav className="flex flex-col gap-5">
          {navItems.map(({ name, icon: Icon, href }) => (
            <Link
              key={name}
              href={href}
              className="flex items-center text-white/70 hover:text-white text-[16px] font-medium transition hover:bg-[var(color-platform-verticalNavbar-background)] px-3 py-2 rounded-md"
            >
              <div className="w-5 flex justify-center">
                <Icon className="w-[20px] h-[20px]" />
              </div>
              <span
                className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${
                  collapsed ? "opacity-0 max-w-0" : "opacity-100 max-w-[180px] ml-1"
                }`}
              >
                {name}
              </span>
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex flex-col gap-5">
        {[
          {
            name: "Discord",
            icon: <FaDiscord className="w-4 h-4" />,
            href: "#",
          },
          {
            name: "Twitter",
            icon: <FaTwitter className="w-4 h-4" />,
            href: "https://twitter.com",
          },
          {
            name: "Documentation",
            icon: <FileText className="w-4 h-4" />,
            href: "/docs",
          },
        ].map(({ name, icon, href }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            className="flex items-center gap-3 text-white/60 hover:text-white transition text-[15px] px-3"
          >
            <div className="w-5 flex justify-center">{icon}</div>
            <span
              className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${
                collapsed ? "opacity-0 max-w-0" : "opacity-100 max-w-[180px] ml-1"
              }`}
            >
              {name}
            </span>
          </a>
        ))}
        <hr className="border-t border-white/10 my-3" />
        <div className="flex items-center justify-between px-3 text-white/40 text-xs">
          <span
            className={`transition-all duration-300 ${
              collapsed ? "opacity-0 max-w-0" : "opacity-60 max-w-[180px]"
            }`}
          >
            v1.0.0
          </span>
        </div>
      </div>
    </aside>
  );
}
