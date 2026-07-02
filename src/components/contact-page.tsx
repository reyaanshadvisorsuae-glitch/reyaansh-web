import Image from "next/image";
import {
  MdEmail,
  MdLocationOn,
  MdSchedule,
} from "react-icons/md";
import type { IconType } from "react-icons";
import { ContactInquiryForm } from "@/components/contact-inquiry-form";

const heroImage =
  "https://images.unsplash.com/flagged/photo-1559717201-fbb671ff56b7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

type ContactCard = {
  description: string;
  href?: string;
  icon: IconType;
  title: string;
};

const contactCards: readonly ContactCard[] = [
  {
    description: "Dubai, United Arab Emirates",
    icon: MdLocationOn,
    title: "Dubai Headquarters",
  },
  {
    description: "info@reyaanshadvisors.com",
    href: "mailto:info@reyaanshadvisors.com",
    icon: MdEmail,
    title: "Email Inquiry",
  },
  {
    description: "One of our advisors will respond within 24 hours.",
    icon: MdSchedule,
    title: "Response Window",
  },
] as const;

export function ContactPage() {
  return (
    <div className="overflow-x-hidden bg-background font-body-md text-on-surface">
      <main>
        <section className="relative isolate flex min-h-[60vh] items-center overflow-hidden pt-36">
          <div className="absolute inset-0 z-0">
            <Image
              alt="Executive boardroom interior"
              className="object-cover"
              fill
              priority
              sizes="100vw"
              src={heroImage}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,28,54,0.92)_0%,rgba(2,28,54,0.62)_48%,rgba(2,28,54,0.32)_100%)]" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-container-max px-gutter py-24 text-white md:py-32">
            <div className="max-w-2xl">
              <span className="mb-5 inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 font-label-md uppercase tracking-[0.18em] text-secondary-fixed shadow-sm backdrop-blur-xl">
                Contact Us
              </span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg">
                Connect with Excellence
              </h1>
              <p className="mt-4 font-body-lg text-white/82">
                Strategic advisory begins with a conversation.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-container-max px-gutter py-section-padding-desktop">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5 lg:py-6">
              <div className="mb-10">
                <span className="mb-4 block font-label-md uppercase tracking-[0.18em] text-secondary">
                  Our Presence
                </span>
                <h2 className="font-headline-md text-headline-md text-primary">
                  Sovereign Executive Hub
                </h2>
                <p className="mt-5 max-w-xl font-body-lg text-on-surface-variant">
                  Guided by strategic precision and commercial foresight, our
                  team supports businesses operating in the UAE and beyond.
                </p>
              </div>

              <div className="space-y-5">
                {contactCards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <div
                      key={card.title}
                      className="glass-card flex items-start gap-4 rounded-[1.8rem] p-5 shadow-[0_20px_44px_rgba(0,26,51,0.08)]"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
                        <Icon aria-hidden="true" className="text-2xl" />
                      </div>
                      <div>
                        <h3 className="font-headline-sm text-xl text-primary">
                          {card.title}
                        </h3>
                        {card.href ? (
                          <a
                            className="mt-1 inline-block font-body-md text-on-surface-variant transition-colors hover:text-secondary"
                            href={card.href}
                          >
                            {card.description}
                          </a>
                        ) : (
                          <p className="mt-1 font-body-md text-on-surface-variant">
                            {card.description}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="glass-card gold-rim relative overflow-hidden rounded-[2rem] p-8 shadow-[0_30px_70px_rgba(0,26,51,0.12)] md:p-12">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-secondary-container/12 blur-3xl" />

                <div className="relative z-10">
                  <h2 className="font-headline-md text-headline-md text-primary">
                    Contact Us
                  </h2>
                  <p className="mt-3 mb-10 max-w-2xl font-body-md text-on-surface-variant">
                    Drop us a line and one of our advisors will reach out within
                    24 hours.
                  </p>

                  <ContactInquiryForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
