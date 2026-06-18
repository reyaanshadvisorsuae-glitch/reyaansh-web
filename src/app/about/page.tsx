import type { Metadata } from "next";
import { AboutPage } from "@/components/about-page";

export const metadata: Metadata = {
  description:
    "Learn about Reyaansh Advisors, a UAE strategic advisory firm for business setup, tax, accounting, audit, and compliance support.",
  title: "About | Reyaansh Advisors",
};

export default function Page() {
  return <AboutPage />;
}
