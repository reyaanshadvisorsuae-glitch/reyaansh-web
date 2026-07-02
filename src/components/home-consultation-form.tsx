"use client";

import { FormEvent, useState } from "react";
import { MdArrowForward, MdCheckCircle, MdKeyboardArrowDown } from "react-icons/md";
import { submitHomeConsultation } from "@/lib/form-api";

const industryOptions = [
  "Aviation",
  "Capital Equipment",
  "Construction",
  "Consulting",
  "E-Commerce",
  "Education",
  "Entertainment",
  "FMCG",
  "Fintech",
  "Government",
  "Healthcare",
  "Hospitality",
  "Information Technology",
  "Insurance",
  "Iron & Steel",
  "Manufacturing",
  "Media",
  "Oil and Gas",
  "Petroleum",
  "Power",
  "Professional Services",
  "Retail",
  "Shipping",
  "Technology",
  "Trading",
  "Transportation",
  "Travel & Tourism",
  "Utilities",
  "Others",
] as const;

const serviceOptions = [
  "Business Setup",
  "VAT Services",
  "Corporate Tax and Transfer Pricing",
  "Financial Accounting",
  "Audit Support Services",
  "AML Compliance",
  "E-Invoicing",
  "Other Advisory Support",
] as const;

type FormState = {
  company: string;
  email: string;
  industry: string;
  name: string;
  phone: string;
  service: string;
};

const initialState: FormState = {
  company: "",
  email: "",
  industry: "",
  name: "",
  phone: "",
  service: "",
};

const fieldClassName =
  "w-full rounded-[1rem] border border-white/10 bg-[rgba(2,28,54,0.42)] px-4 py-3.5 text-sm text-white outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all placeholder:text-white/90 focus:border-secondary/70 focus:bg-[rgba(2,28,54,0.58)] focus:ring-4 focus:ring-secondary/12";

const selectClassName =
  "w-full appearance-none rounded-[1rem] border border-secondary/18 bg-[linear-gradient(145deg,rgba(2,28,54,0.62),rgba(2,28,54,0.42))] px-4 py-3.5 pr-11 text-sm text-white outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_28px_rgba(0,0,0,0.08)] transition-all focus:border-secondary/75 focus:bg-[rgba(2,28,54,0.66)] focus:ring-4 focus:ring-secondary/12";

const emailPattern = "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$";

const digitsOnly = (value: string) => value.replace(/\D/g, "");

export function HomeConsultationForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSucceeded, setSubmitSucceeded] = useState(false);

  const updateField = <T extends keyof FormState>(field: T, value: FormState[T]) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormMessage("");

    const payload = {
      ...form,
      company: form.company.trim(),
      email: form.email.trim().toLowerCase(),
      industry: form.industry.trim(),
      name: form.name.trim(),
      phone: digitsOnly(form.phone),
      service: form.service.trim(),
    };

    const result = await submitHomeConsultation(payload);

    setSubmitSucceeded(result.success);
    setFormMessage(result.message);
    setIsSubmitting(false);
    if (result.success) {
      setForm(initialState);
    }
  };

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(2,28,54,0.74),rgba(2,28,54,0.52))] p-5 text-white shadow-[0_28px_80px_rgba(0,0,0,0.3)] backdrop-blur-2xl sm:p-6 lg:p-7">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,193,118,0.14),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_62%)]" />

      <div className="relative z-10">
        <div className="mb-5 flex items-start justify-between gap-5">
          <div>
            <span className="mb-3 inline-flex rounded-full border border-secondary/20 bg-secondary/12 px-3 py-1.5 font-label-md text-[10px] uppercase tracking-[0.16em] text-secondary-fixed">
              Private Advisory Desk
            </span>
            <h2 className="font-headline-sm text-2xl leading-tight text-white">
              Get a Free Consultation
            </h2>
          </div>
          <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-secondary/30 bg-secondary/12 text-secondary-fixed shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] sm:flex">
            <MdCheckCircle aria-hidden="true" className="text-2xl" />
          </div>
        </div>

        <form className="space-y-3.5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <label className="sr-only" htmlFor="hero-consultation-name">
              Name
            </label>
            <input
              id="hero-consultation-name"
              className={fieldClassName}
              name="name"
              placeholder="Name *"
              required
              type="text"
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
            />

            <label className="sr-only" htmlFor="hero-consultation-email">
              Email
            </label>
            <input
              id="hero-consultation-email"
              className={fieldClassName}
              name="email"
              placeholder="Email *"
              pattern={emailPattern}
              required
              title="Please enter a valid email address"
              type="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
            />
          </div>

          <label className="sr-only" htmlFor="hero-consultation-phone">
            Mobile Number
          </label>
          <input
            id="hero-consultation-phone"
            className={fieldClassName}
            name="phone"
            placeholder="Mobile Number *"
            inputMode="numeric"
            maxLength={15}
            minLength={7}
            pattern="[0-9]{7,15}"
            required
            type="tel"
            title="Please enter 7 to 15 digits only"
            value={form.phone}
            onChange={(event) => updateField("phone", digitsOnly(event.target.value))}
          />

          <label className="sr-only" htmlFor="hero-consultation-company">
            Company Name
          </label>
          <input
            id="hero-consultation-company"
            className={fieldClassName}
            name="company"
            placeholder="Company Name *"
            required
            type="text"
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
          />

          <div className="relative">
            <label className="sr-only" htmlFor="hero-consultation-industry">
              Industry
            </label>
            <select
              id="hero-consultation-industry"
              className={selectClassName}
              name="industry"
              required
              value={form.industry}
              onChange={(event) => updateField("industry", event.target.value)}
            >
              <option className="bg-primary text-white" value="">
                Industry *
              </option>
              {industryOptions.map((industry) => (
                <option className="bg-primary text-white" key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
            <MdKeyboardArrowDown
              aria-hidden="true"
              className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-2xl text-secondary-fixed"
            />
          </div>

          <div className="relative">
            <label className="sr-only" htmlFor="hero-consultation-service">
              What service do you require?
            </label>
            <select
              id="hero-consultation-service"
              className={selectClassName}
              name="service"
              required
              value={form.service}
              onChange={(event) => updateField("service", event.target.value)}
            >
              <option className="bg-primary text-white" value="">
                What service do you require? *
              </option>
              {serviceOptions.map((service) => (
                <option className="bg-primary text-white" key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            <MdKeyboardArrowDown
              aria-hidden="true"
              className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-2xl text-secondary-fixed"
            />
          </div>

          <button
            className="group inline-flex w-full items-center justify-center gap-2 rounded-[1rem] bg-[linear-gradient(135deg,#775a19_0%,#e9c176_100%)] px-6 py-4 font-label-md text-sm uppercase tracking-[0.16em] text-primary shadow-[0_18px_40px_rgba(119,90,25,0.28)] transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_50px_rgba(119,90,25,0.34)]"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
            <MdArrowForward
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </form>

        {formMessage ? (
          <p
            className={`mt-4 rounded-[1rem] border px-4 py-3 text-sm ${
              submitSucceeded
                ? "border-secondary/20 bg-secondary/10 text-secondary-fixed"
                : "border-error/20 bg-error/10 text-white"
            }`}
          >
            {formMessage}
          </p>
        ) : null}
      </div>
    </section>
  );
}
