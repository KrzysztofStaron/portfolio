import type React from "react";
import "@/app/globals.css";
import { Mona_Sans as FontSans } from "next/font/google";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../assets/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata = {
  title: "Portfolio - Relentless. Visionary. Charismatic. Resilient.",
  description: "A showcase of projects by a developer who pushes boundaries and turns visions into reality.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("font-sans antialiased", fontSans.variable, fontHeading.variable)}>{children}</body>
    </html>
  );
}
