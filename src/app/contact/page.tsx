import type { Metadata } from "next";
import { ContactPage } from "@/components/contact-page";

export const metadata: Metadata = {
  description:
    "Contact Reyaansh Advisors for UAE business setup, tax, accounting, audit, and compliance advisory.",
  title: "Contact Us | Reyaansh Advisors",
};

export default function Page() {
  return <ContactPage />;
}
