import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LG Event-Target — Conference Diligence & Forensic Capital Screener",
  description: "Institutional screening engine for 417 presenting and screened companies across the LG Event and OTC volume screener cohort. Forensic liquidity, negative working capital, 2-year financing flows, S-3/ATM shelves, and C-suite CRM outreach.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased selection:bg-amber-500/30 selection:text-amber-200">
        {children}
      </body>
    </html>
  );
}
