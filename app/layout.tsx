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
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata = {
  title: "Developer Portfolio - I will find a way",
  description:
    "Developer, problem-solver, and entrepreneur with a passion for building engaging products that people actually want.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable, fontHeading.variable)}>
        {children}
      </body>
    </html>
  );
}
