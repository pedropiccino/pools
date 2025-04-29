import Navbar from "@/sections/Platform/Navbar";
import TopPools from "@/sections/Platform/TopPools";

export default function Parabuilders() {
    return (
        <div className="relative overflow-x-hidden w-full">
            <div className="min-h-screen bg-cover bg-center text-white">
                <Navbar />
                <TopPools />
            </div>
        </div>
    );
}
