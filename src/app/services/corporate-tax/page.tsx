import type { Metadata } from "next";
import { CorporateTaxPage } from "@/components/corporate-tax-page";

export const metadata: Metadata = {
  description:
    "Strategic UAE corporate tax advisory for registration, planning, international structuring, transfer pricing, and continuous compliance.",
  title: "Corporate Tax | Reyaansh Advisors",
};

export default function Page() {
  return <CorporateTaxPage />;
}
