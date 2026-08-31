import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";

// Noto Sans TC (SIL OFL) is the only hosted webfont; Latin uses the system stack.
const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "2026 Portfolio — Design System Foundations",
  description:
    "Working foundations preview for the 2026 Product Designer portfolio. Tokens mirror docs/design-system.md.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${notoSansTC.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
