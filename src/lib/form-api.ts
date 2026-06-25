import { getApiBaseUrl } from "@/lib/blog-api";

type SubmitResult = {
  message: string;
  success: boolean;
};

export type HomeConsultationPayload = {
  company: string;
  email: string;
  industry: string;
  name: string;
  phone: string;
  service: string;
};

export type ContactInquiryPayload = {
  email: string;
  message?: string;
  name?: string;
  phone?: string;
};

async function submitForm<TPayload>(path: string, payload: TPayload): Promise<SubmitResult> {
  try {
    const response = await fetch(`${getApiBaseUrl()}/${path}`, {
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const data = (await response.json().catch(() => null)) as
      | { message?: string; success?: boolean }
      | null;

    if (!response.ok) {
      return {
        message: data?.message || "Unable to submit your request. Please try again.",
        success: false,
      };
    }

    return {
      message: data?.message || "Your request has been submitted successfully.",
      success: true,
    };
  } catch {
    return {
      message: "Unable to reach the server. Please try again shortly.",
      success: false,
    };
  }
}

export function submitHomeConsultation(payload: HomeConsultationPayload) {
  return submitForm("api/home-consultation", payload);
}

export function submitContactInquiry(payload: ContactInquiryPayload) {
  return submitForm("api/contact-inquiry", payload);
}
