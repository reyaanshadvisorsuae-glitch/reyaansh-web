import type { Metadata } from "next";
import { AmlPage } from "@/components/aml-page";

export const metadata: Metadata = {
  description:
    "Advanced AML compliance, transaction monitoring, policy design, staff training, and risk management support for UAE-regulated businesses.",
  title: "AML Compliance | Reyaansh Advisors",
};

export default function Page() {
  return <AmlPage />;
}
