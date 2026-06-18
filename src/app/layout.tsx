import type { Metadata } from "next";
import { LayoutShell } from "@/components/layout-shell";
import { siteLogoSrc } from "@/lib/brand";
import "./globals.css";

export const metadata: Metadata = {
  description:
    "Strategic advisory, tax, audit, and compliance services for UAE business growth.",
  icons: {
    apple: siteLogoSrc,
    icon: siteLogoSrc,
  },
  title: "Reyaansh Advisors | Strategic Business Excellence UAE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light h-full scroll-smooth">
      <body className="min-h-full bg-background font-body-md text-on-background">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
