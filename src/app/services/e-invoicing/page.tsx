import type { Metadata } from "next";
import { EInvoicingPage } from "@/components/e-invoicing-page";

export const metadata: Metadata = {
  description:
    "FTA-ready e-invoicing implementation, ERP integration, validation workflows, automated reporting, and digital compliance transformation.",
  title: "E-Invoicing Services | Reyaansh Advisors",
};

export default function Page() {
  return <EInvoicingPage />;
}
