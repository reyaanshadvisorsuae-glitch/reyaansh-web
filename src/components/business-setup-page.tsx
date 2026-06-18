import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  MdArrowForward,
  MdBadge,
  MdBolt,
  MdCheckCircle,
  MdCreditCard,
  MdDomain,
  MdGavel,
  MdHub,
  MdPublic,
  MdSecurity,
  MdSupportAgent,
} from "react-icons/md";
import { routes } from "@/lib/routes";

type DetailCard = {
  description: string;
  features: string[];
  icon: IconType;
  title: string;
};

type ProcessStep = {
  description: string;
  eyebrow: string;
  number: string;
  title: string;
};

type SupportCard = {
  description: string;
  icon: IconType;
  title: string;
};

type WhyChooseItem = {
  description: string;
  icon: IconType;
  title: string;
};

const jurisdictions: DetailCard[] = [
  {
    description:
      "Trade directly with the UAE market and take on government contracts. Benefit from 100% foreign ownership in most commercial sectors with no geographic restrictions on office space.",
    features: [
      "Unlimited Visas",
      "Direct UAE Trade",
      "Government Tenders",
    ],
    icon: MdDomain,
    title: "Mainland Establishment",
  },
  {
    description:
      "Optimized for international trade, Free Zones offer 100% import/export tax exemptions and simplified customs procedures within specialized industry clusters.",
    features: [
      "0% Corporate Tax",
      "Industry Clusters",
      "Fast-track Setup",
    ],
    icon: MdHub,
    title: "Free Zone Operations",
  },
  {
    description:
      "Designed for asset protection and tax optimization. Offshore companies allow for international operations with maximum confidentiality and minimum compliance overhead.",
    features: [
      "Absolute Privacy",
      "Asset Protection",
    ],
    icon: MdPublic,
    title: "Offshore (International Business)",
  },
];

const setupProtocol: ProcessStep[] = [
  {
    description: "Activity selection and jurisdiction mapping.",
    eyebrow: "Strategy",
    number: "01",
    title: "Strategy",
  },
  {
    description: "Name reservation and initial authority approvals.",
    eyebrow: "Approval",
    number: "02",
    title: "Approval",
  },
  {
    description: "Legal documentation and coordination with authorities.",
    eyebrow: "Execution",
    number: "03",
    title: "Execution",
  },
  {
    description: "License issuance and visa processing.",
    eyebrow: "Finalization",
    number: "04",
    title: "Finalization",
  },
];

const specializedServices: SupportCard[] = [
  {
    description:
      "Coordinated introductions to premier UAE banks for corporate account opening.",
    icon: MdCreditCard,
    title: "Banking Assistance",
  },
  {
    description:
      "End-to-end residency processing for investors, employees, and families.",
    icon: MdBadge,
    title: "Visa Support",
  },
  {
    description:
      "Ongoing regulatory adherence and compliance support.",
    icon: MdGavel,
    title: "Legal Compliance",
  },
];

const whyChooseUs: WhyChooseItem[] = [
  {
    description: "Average license turnaround in 48 hours.",
    icon: MdBolt,
    title: "Accelerated Setup",
  },
  {
    description: "Fully licensed by UAE regulatory bodies.",
    icon: MdSecurity,
    title: "Regulated Experts",
  },
  {
    description: "Direct access to government relations officer.",
    icon: MdSupportAgent,
    title: "Dedicated PRO",
  },
];

export function BusinessSetupPage() {
  return (
    <div className="overflow-x-hidden bg-background font-body-md text-body-md text-on-surface">
      <main>
        <section className="relative flex min-h-[620px] items-center overflow-hidden lg:min-h-[760px]">
          <div className="absolute inset-0">
            <Image
              alt="Business setup advisory hero"
              className="object-cover"
              fill
              priority
              sizes="100vw"
              src="https://plus.unsplash.com/premium_photo-1733317416241-d92ba6af4e51?q=80&w=1177&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,28,54,0.92)_0%,rgba(2,28,54,0.58)_55%,rgba(2,28,54,0.18)_100%)]" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-container-max px-gutter">
            <div className="max-w-2xl">
              <div className="mb-6 flex flex-wrap items-center gap-3 text-white/72">
                <Link
                  href={routes.home}
                  className="font-label-md text-[12px] uppercase tracking-[0.18em] transition-colors hover:text-secondary-fixed"
                >
                  Home
                </Link>
                <span>/</span>
                <Link
                  href={routes.services}
                  className="font-label-md text-[12px] uppercase tracking-[0.18em] transition-colors hover:text-secondary-fixed"
                >
                  Services
                </Link>
                <span>/</span>
                <span className="font-label-md text-[12px] uppercase tracking-[0.18em] text-secondary-fixed">
                  Business Setup
                </span>
              </div>

              <span className="mb-6 inline-block font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-container">
                Strategic Market Entry
              </span>
              <h1 className="mb-8 font-display-lg text-display-lg-mobile text-white md:text-display-lg">
                Launch Your UAE Business with Confidence
              </h1>
              <p className="mb-10 max-w-xl font-body-lg text-body-lg text-white/80">
                We provide white-glove corporate advisory for international
                investors and high-ticket enterprises looking to establish a
                dominant presence in the UAE.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#consultation-form"
                  className="inline-flex items-center rounded-full bg-secondary-container px-8 py-4 font-label-md text-label-md uppercase tracking-widest text-primary transition-colors hover:bg-secondary-fixed"
                >
                  Start Your Journey
                </a>
                <Link
                  href="#jurisdictions"
                  className="inline-flex items-center rounded-full border border-white/30 px-8 py-4 font-label-md text-label-md uppercase tracking-widest text-white transition-colors hover:bg-white/10"
                >
                  View Jurisdictions
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-container-max px-gutter py-section-padding-desktop">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
            <section id="jurisdictions">
              <h2 className="mb-4 font-headline-md text-headline-md">
                Strategic Jurisdictions
              </h2>
              <p className="mb-12 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
                Navigate the complexities of the UAE&apos;s regulatory landscape
                with our expert breakdown of setup structures.
              </p>

              <div className="grid grid-cols-1 gap-8">
                {jurisdictions.map((jurisdiction) => (
                  <article
                    key={jurisdiction.title}
                    className="glass-card group rounded-[2rem] border-primary/8 p-8 transition-colors hover:border-secondary/35"
                  >
                    <div className="flex flex-col gap-6 md:flex-row md:items-start">
                      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-primary-container shadow-[0_16px_34px_rgba(0,26,51,0.16)]">
                        <jurisdiction.icon
                          aria-hidden="true"
                          className="text-4xl text-secondary-fixed"
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="mb-4 font-headline-sm text-headline-sm">
                          {jurisdiction.title}
                        </h3>
                        <p className="mb-6 font-body-md text-body-md text-on-surface-variant">
                          {jurisdiction.description}
                        </p>
                        <ul className="grid grid-cols-1 gap-3 font-label-md text-label-md text-primary sm:grid-cols-2">
                          {jurisdiction.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2">
                              <MdCheckCircle
                                aria-hidden="true"
                                className="text-secondary"
                              />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-8">
                <section
                  id="consultation-form"
                  className="rounded-[2rem] bg-primary-container p-8 text-white shadow-[0_30px_70px_rgba(0,26,51,0.2)]"
                >
                  <h2 className="mb-6 font-headline-sm text-headline-sm text-secondary-fixed">
                    Start Your Business
                  </h2>
                  <p className="mb-8 font-body-md text-on-primary-container">
                    Book a confidential consultation with our Senior Partners to
                    discuss your UAE market entry.
                  </p>

                  <form className="space-y-4">
                    <div>
                      <label htmlFor="full-name" className="sr-only">
                        Full Name
                      </label>
                      <input
                        id="full-name"
                        name="fullName"
                        type="text"
                        required
                        placeholder="Full Name"
                        className="w-full border-b border-white/20 bg-white/5 p-3 text-white placeholder:text-white/40 focus:border-secondary-fixed focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="corporate-email" className="sr-only">
                        Corporate Email
                      </label>
                      <input
                        id="corporate-email"
                        name="corporateEmail"
                        type="email"
                        required
                        placeholder="Corporate Email"
                        className="w-full border-b border-white/20 bg-white/5 p-3 text-white placeholder:text-white/40 focus:border-secondary-fixed focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="jurisdiction" className="sr-only">
                        Select Jurisdiction
                      </label>
                      <select
                        id="jurisdiction"
                        name="jurisdiction"
                        defaultValue=""
                        className="w-full border-b border-white/20 bg-white/5 p-3 text-white focus:border-secondary-fixed focus:outline-none [&>option]:bg-primary-container [&>option]:text-white"
                      >
                        <option value="" disabled>
                          Select Jurisdiction
                        </option>
                        <option value="mainland">Mainland</option>
                        <option value="free-zone">Free Zone</option>
                        <option value="offshore">Offshore</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="mt-4 w-full rounded-full bg-secondary-container py-4 font-label-md text-label-md uppercase tracking-widest text-primary transition-colors hover:bg-secondary-fixed"
                    >
                      Request Callback
                    </button>
                  </form>
                </section>

                <section className="glass-card rounded-[2rem] border-primary/8 p-8">
                  <h2 className="mb-6 font-label-md text-label-md uppercase tracking-widest text-primary">
                    Why Reyaansh?
                  </h2>
                  <ul className="space-y-6">
                    {whyChooseUs.map((item) => (
                      <li key={item.title} className="flex gap-4">
                        <item.icon
                          aria-hidden="true"
                          className="mt-1 shrink-0 text-2xl text-secondary"
                        />
                        <div>
                          <p className="font-label-md text-label-md text-primary">
                            {item.title}
                          </p>
                          <p className="text-sm text-on-surface-variant">
                            {item.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </aside>
          </div>

          <div className="mt-24 space-y-16">
            <section>
              <h2 className="mb-12 font-headline-md text-headline-md">
                Setup Protocol
              </h2>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {setupProtocol.map((step) => (
                  <article
                    key={step.number}
                    className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 px-6 py-8 shadow-[0_24px_60px_rgba(0,26,51,0.08)] backdrop-blur-xl"
                  >
                    <span className="absolute top-5 right-6 font-display-lg text-[5rem] leading-none text-primary/5">
                      {step.number}
                    </span>
                    <div className="relative z-10 pt-6">
                      <p className="mb-2 font-label-md text-[12px] uppercase tracking-[0.18em] text-secondary">
                        {step.eyebrow}
                      </p>
                      <h3 className="mb-3 font-headline-sm text-headline-sm">
                        {step.title}
                      </h3>
                      <p className="font-body-md text-on-surface-variant">
                        {step.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {specializedServices.map((service) => (
                <article
                  key={service.title}
                  className="rounded-[2rem] bg-surface-container p-8 shadow-[0_16px_40px_rgba(0,26,51,0.06)]"
                >
                  <service.icon
                    aria-hidden="true"
                    className="mb-4 text-[2rem] text-primary"
                  />
                  <h3 className="mb-3 font-headline-sm text-headline-sm">
                    {service.title}
                  </h3>
                  <p className="font-body-md text-on-surface-variant">
                    {service.description}
                  </p>
                </article>
              ))}
            </section>
          </div>
        </section>

        <section className="bg-surface-container-highest py-section-padding-desktop">
          <div className="mx-auto max-w-container-max px-gutter text-center">
            <h2 className="mb-8 font-display-lg text-display-lg-mobile text-primary md:text-display-lg">
              Ready for Strategic Growth?
            </h2>
            <p className="mx-auto mb-12 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
              Join 100+ global enterprises that have scaled their operations
              through our advisory services in the Middle East.
            </p>
            <a
              href="#consultation-form"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#001A33_0%,#163d63_100%)] px-7 py-4 font-label-md text-label-md uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(0,26,51,0.18)] sm:px-12 sm:py-5 sm:tracking-[0.2em]"
            >
              Schedule a Strategic Meeting
              <MdArrowForward aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
