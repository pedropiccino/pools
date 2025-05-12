"use client";

import Image from "next/image";
import { PLATFORM_ROUTES } from "@/constants/route";
import logo from "@/assets/navbar/logoName.png";

export default function Navbar() {
    return (
        <nav className="w-full">
            <div className="xl:px-14 2xl:px-20 flex">
                <div className="py-4 mr-auto">
                    <Image src={logo} alt="TraceFi logo" width={200} height={80} />
                </div>

                <div className="hidden md:flex items-center gap-10">
                    <ul className="flex gap-10 text-[24px] font-medium text-white">
                        <li>
                            <a href="#features" className="hover:text-[var(--color-primary)] transition">
                                Features
                            </a>
                        </li>
                        <li>
                            <a href="#docs" className="hover:text-[var(--color-primary)] transition">
                                Docs
                            </a>
                        </li>
                        <li>
                            <a href="#ecosystem" className="hover:text-[var(--color-primary)] transition">
                                Ecosystem
                            </a>
                        </li>
                        <li>
                            <a href="#discord" className="hover:text-[var(--color-primary)] transition">
                                Discord
                            </a>
                        </li>
                    </ul>
                    <a 
                        href={PLATFORM_ROUTES.TOP_POOLS}
                        className="bg-[var(--color-primary)] hover:brightness-110 transition px-8 py-2 rounded-full font-medium text-white text-[24px]">
                        Go To App
                    </a>
                </div>
            </div>
        </nav>
    );
}
