import type { Metadata } from "next";
import { AuditSupportPage } from "@/components/audit-support-page";

export const metadata: Metadata = {
  description:
    "UAE audit support covering pre-screening, document review, auditor coordination, internal control optimization, and compliance readiness.",
  title: "Audit Support | Reyaansh Advisors",
};

export default function Page() {
  return <AuditSupportPage />;
}
