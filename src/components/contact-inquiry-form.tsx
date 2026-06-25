"use client";

import { FormEvent, useState } from "react";
import { MdArrowForward } from "react-icons/md";
import { submitContactInquiry } from "@/lib/form-api";

type ContactFormState = {
  email: string;
  message: string;
  name: string;
  phone: string;
};

const initialState: ContactFormState = {
  email: "",
  message: "",
  name: "",
  phone: "",
};

const inputClassName =
  "w-full rounded-t-xl border-0 border-b-2 border-outline-variant bg-surface-container-low px-4 py-3 text-on-background transition-all focus:border-secondary focus:outline-none";

const emailPattern = "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$";

const digitsOnly = (value: string) => value.replace(/\D/g, "");

export function ContactInquiryForm() {
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSucceeded, setSubmitSucceeded] = useState(false);

  const updateField = <T extends keyof ContactFormState>(
    field: T,
    value: ContactFormState[T]
  ) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormMessage("");

    const payload = {
      email: form.email.trim().toLowerCase(),
      message: form.message.trim(),
      name: form.name.trim(),
      phone: digitsOnly(form.phone),
    };

    const result = await submitContactInquiry(payload);

    setSubmitSucceeded(result.success);
    setFormMessage(result.message);
    setIsSubmitting(false);
    if (result.success) {
      setForm(initialState);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="ml-1 font-label-md text-on-surface-variant" htmlFor="contact-name">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Full Name"
            className={inputClassName}
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="ml-1 font-label-md text-on-surface-variant" htmlFor="contact-phone">
            Phone
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            placeholder="971000000000"
            inputMode="numeric"
            maxLength={15}
            pattern="[0-9]{7,15}"
            title="Please enter 7 to 15 digits only"
            className={inputClassName}
            value={form.phone}
            onChange={(event) => updateField("phone", digitsOnly(event.target.value))}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="ml-1 font-label-md text-on-surface-variant" htmlFor="contact-email">
          Email Address
          <span className="text-error"> *</span>
        </label>
        <input
          id="contact-email"
          name="email"
          required
          type="email"
          placeholder="name@company.com"
          pattern={emailPattern}
          title="Please enter a valid email address"
          className={inputClassName}
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label className="ml-1 font-label-md text-on-surface-variant" htmlFor="contact-message">
          How can we assist you?
        </label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Brief description of your strategic requirements..."
          rows={4}
          className={inputClassName}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
        />
      </div>

      {formMessage ? (
        <p
          className={`rounded-xl border px-4 py-3 text-sm ${
            submitSucceeded
              ? "border-secondary/20 bg-secondary-container/30 text-primary"
              : "border-error/20 bg-error/10 text-error"
          }`}
        >
          {formMessage}
        </p>
      ) : null}

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-secondary-container px-8 py-4 font-headline-sm text-primary shadow-[0_18px_40px_rgba(119,90,25,0.14)] transition-all hover:-translate-y-0.5 hover:bg-secondary-fixed disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
        >
          <span>{isSubmitting ? "Sending..." : "Send Inquiry"}</span>
          <MdArrowForward aria-hidden="true" className="text-xl" />
        </button>
      </div>
    </form>
  );
}
