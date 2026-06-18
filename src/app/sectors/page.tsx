import type { Metadata } from "next";
import { SectorsPage } from "@/components/sectors-page";

export const metadata: Metadata = {
  description:
    "Sector-specific advisory for real estate, energy, logistics, retail, technology, hospitality, healthcare, education, commodities, and automotive businesses in the UAE.",
  title: "Sectors | Reyaansh Advisors",
};

export default function Page() {
  return <SectorsPage />;
}
