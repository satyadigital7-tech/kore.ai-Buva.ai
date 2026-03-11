import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Background3D from "@/components/ui/Background3D";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Buva.ai — Agentic AI Platform",
  description: "The premier agentic AI platform for business automation and intelligent advertising.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.variable} antialiased bg-white text-neutral-900 flex flex-col relative overflow-x-hidden selection:bg-blue-500/20`}>
        <div className="bg-noise"></div>
        <Background3D />
        <Navbar />
        <main className="flex-grow pt-24 min-h-screen z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
