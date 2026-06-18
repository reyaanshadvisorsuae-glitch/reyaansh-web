import type { Metadata } from "next";
import { VatServicesPage } from "@/components/vat-services-page";

export const metadata: Metadata = {
  description:
    "UAE VAT advisory covering registration, filing, audit support, health checks, and strategic optimization for FTA-compliant businesses.",
  title: "VAT Services | Reyaansh Advisors",
};

export default function Page() {
  return <VatServicesPage />;
}
