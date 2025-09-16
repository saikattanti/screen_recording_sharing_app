import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import { satoshi } from "../fonts/font";
import { cn } from "@/lib/utils";

const geistKarla = Karla({
  variable: "--font-geist-karla",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SnapCast",
  description: "A Screen Sharing App",
  icons: {
    icon: "/assets/icons/logo.svg",
  },
};

// ...existing code...
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(
        geistKarla.variable,
        satoshi.variable,
        // Remove any dynamic classes that change between server/client
        // typeof window !== 'undefined' && 'hydrated' // ❌ Don't do this
      )}>
        {children}
      </body>
    </html>
  )
}
