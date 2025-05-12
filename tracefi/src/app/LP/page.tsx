import Navbar from "@/sections/LP/Navbar";
import Hero from "@/sections/LP/Hero";
import background from "@/assets/navbar/background4.png";

export default function TraceFi() {
    return (
        <div className="relative overflow-x-hidden w-full">
            <div
                className="min-h-screen bg-cover bg-center text-white"
                style={{ backgroundImage: `url(${background.src})` }}
            >
                <Navbar />
                <Hero />
            </div>
        </div>
    );
}
