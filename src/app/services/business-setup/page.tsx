import type { Metadata } from "next";
import { BusinessSetupPage } from "@/components/business-setup-page";

export const metadata: Metadata = {
  description:
    "Premium UAE business setup advisory for mainland, free zone, and offshore company formation.",
  title: "Business Setup | Reyaansh Advisors",
};

export default function Page() {
  return <BusinessSetupPage />;
}
