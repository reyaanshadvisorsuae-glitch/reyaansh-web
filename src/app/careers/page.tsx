import type { Metadata } from "next";
import { CareersPage } from "@/components/careers-page";

export const metadata: Metadata = {
  description:
    "Explore early career opportunities and talent introductions at Reyaansh Advisors across UAE advisory, tax, accounting, audit, and compliance.",
  title: "Careers | Reyaansh Advisors",
};

export default function Page() {
  return <CareersPage />;
}
