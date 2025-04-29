"use client";

import Image from "next/image";
import astronaut from "@/assets/hero/astronaut.png";
import moon from "@/assets/hero/moon.png";

export default function Hero() {
    return (
        <section className="text-white overflow-hidden h-[89vh] relative">
            <div className="w-full xl:py-40 xl:px-16 2xl:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="xl:text-[78px] 2xl:text-[110px] leading-tight font-bold mb-8">
                        Automate.
                        <br />
                        Copy. Grow
                        <br />
                        with TraceFi.
                    </h1>
                    <p className="text-[40px] text-white/80 mb-10">
                        The first copytrade platform for liquidity pools.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4"></div>
                </div>
                <div className="flex justify-center md:justify-end">
                    <Image
                        src={moon}
                        alt="Lua"
                        className="absolute xl:left-[150px] xl:top-[180px] 2xl:left-[600px] 2xl:top-[180px] w-[2000px] max-w-none z-0"
                    />
                    <Image
                        src={astronaut}
                        alt="Astronauta TraceFi"
                        className="absolute xl:left-[450px] xl:top-[-40px] 2xl:top-[-40px] 2xl:left-[900px] w-[1300px] max-w-none"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
