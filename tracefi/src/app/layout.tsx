import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

export const metadata: Metadata = {
    title: "TraceFi",
    description: "Platform of Pools Copy Trade",
    icons: {
        icon: "/favicon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <body
                className={`${inter.variable} font-sans antialiased bg-neutral-950 text-white overflow-x-hidden`}
            >
                {children}
            </body>
        </html>
    );
}
