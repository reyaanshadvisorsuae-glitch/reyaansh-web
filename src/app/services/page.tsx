import type { Metadata } from "next";
import { ServicesPage } from "@/components/services-page";

export const metadata: Metadata = {
  description:
    "Explore Reyaansh Advisors' strategic UAE service lines across business setup, tax, audit, compliance, and financial advisory.",
  title: "Services | Reyaansh Advisors",
};

export default function Page() {
  return <ServicesPage />;
}
