import type { Metadata } from "next";
import { FinancialAccountingPage } from "@/components/financial-accounting-page";

export const metadata: Metadata = {
  description:
    "Detailed financial accounting advisory covering bookkeeping, MIS reporting, financial statements, cash flow management, and CFO support for UAE businesses.",
  title: "Financial Accounting | Reyaansh Advisors",
};

export default function Page() {
  return <FinancialAccountingPage />;
}
