import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  MdArrowForward,
  MdCheckCircle,
  MdDone,
  MdOutlineAccountBalanceWallet,
  MdOutlineAnalytics,
  MdOutlineAssuredWorkload,
  MdOutlineChat,
  MdOutlineDescription,
  MdOutlineDomain,
  MdOutlineEditNote,
  MdOutlineFactCheck,
  MdOutlineReceiptLong,
  MdOutlineRocketLaunch,
  MdOutlineSecurity,
} from "react-icons/md";
import { FaqAccordion } from "@/components/faq-accordion";
import { routes } from "@/lib/routes";

const trustMetrics = [
  { label: "Premium Clients", value: "110+" },
  { label: "Client Retention", value: "98%" },
  { label: "Regulatory Compliance", value: "100%" },
  { label: "Global Sectors", value: "12+" },
];

const heroHighlights = [
  "Mainland & Free Zone Advisory",
  "Corporate Tax Readiness",
  "Ongoing Compliance Support",
];

const serviceHighlights = [
  "Business Formation",
  "Tax Structuring",
  "Regulatory Assurance",
];

const processSteps: {
  description: string;
  eyebrow: string;
  icon: IconType;
  number: string;
  title: string;
}[] = [
  {
    description: "Defining your unique challenges and growth objectives.",
    eyebrow: "Discovery",
    icon: MdOutlineChat,
    number: "01",
    title: "Consultation",
  },
  {
    description: "Deep-dive technical review of your current fiscal landscape.",
    eyebrow: "Diagnostic",
    icon: MdOutlineAnalytics,
    number: "02",
    title: "Assessment",
  },
  {
    description: "Crafting a tailored compliance and growth strategy.",
    eyebrow: "Architecture",
    icon: MdOutlineEditNote,
    number: "03",
    title: "Planning",
  },
  {
    description: "Seamless implementation with ongoing advisory support.",
    eyebrow: "Delivery",
    icon: MdOutlineRocketLaunch,
    number: "04",
    title: "Execution",
  },
];

const caseStudies = [
  {
    badge: "FINTECH",
    imageAlt: "Fintech district skyline",
    imageDescription:
      "A clean, minimalist photograph of a modern glass skyscraper in a global financial hub. The image uses a soft, daylight lighting setup with high-key whites and cool blue tones. The focus is on the geometric patterns of the building's facade, conveying themes of precision, high-tech finance, and strategic corporate structure.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDEdsuZgmuUlXt46EOXUoZrEOou9W3Qbu78C63jTrmFq6MZrBC2L_J6LRqViC5kdFCbI4oq6n6ZGEMBeB2noTX56HabdYuWFDzic1qO4Ffykkm8L_TOX8a503PnZ9QCEAp-3oKQmK9jcCv-P_AkoY4PQaXecj0FZ2fhI3XxkMX_EX2MaSGb5_UiNQIOKIQ3cYpTITXSSZLJLFu4D9oI7TDgLCHCON46DbN18ZscVI074K3y1loPIa2FNe4YgOw1WXSq4cmSdzjMNgUo",
    metric: "14% Savings",
    metricLabel: "Annual Tax Exposure Reduction",
    summary:
      "Streamlined complex cross-border VAT filings for a digital asset exchange.",
    title: "Global Exchange VAT Optimization",
  },
  {
    badge: "REAL ESTATE",
    imageAlt: "Luxury real estate development",
    imageDescription:
      "An elegant, architectural photo of a contemporary luxury development project. The lighting is warm and inviting, using a sophisticated gold and porcelain color palette. The composition emphasizes architectural symmetry and premium materials, representing high-value investment and successful property development advisory.",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQO7LRWL77_AarJEGcIASCEFC_aliyiTC0EqFjQwcjQLOGtoV3EsaBWRnffdGdDxTcOXD8MjAiwcTsvphBx3KRn2bHYq6INHHkjBOv8eRwdb6yiueC_aQUSaStT5Y904Yn4Y3mCTEIqKWRk22cvxlL7aGnI2QzIxvtoO016hLj7imrmvZu5qgzsWB6mYMkcQKdMUduMfwbXJDwjTC4Hq8ZAhsSwHoBj8YDK9rycehP0hlFJAnNMj2MQsYVeSTzNWpu29GexU5t-LT7",
    metric: "Zero-Risk",
    metricLabel: "Compliance Transition Audit",
    summary:
      "Full-scale tax restructuring for a Tier-1 developer ahead of legislative changes.",
    title: "Corporate Tax Readiness",
  },
];

const faqItems = [
  {
    answer:
      "The Corporate Tax applies to all businesses and commercial activities in the UAE. We provide a full impact assessment to determine your liabilities and identify exemptions that may apply to your specific structure.",
    question: "How does the new UAE Corporate Tax impact my business?",
  },
  {
    answer:
      "Free Zones offer 100% foreign ownership, full profit repatriation, and specific tax advantages depending on the jurisdiction. We help you choose the one that aligns with your operational needs.",
    question: "What are the benefits of setting up in a Free Zone?",
  },
  {
    answer:
      "Yes, we act as your compliance partner, assisting with goAML support, risk assessment frameworks, and internal staff training to ensure continuous adherence to Central Bank regulations.",
    question: "Do you provide ongoing AML support?",
  },
];

export function ServicesPage() {
  return (
    <div className="overflow-x-hidden bg-background font-body-md text-body-md text-on-surface">
      <main>
        <header className="relative overflow-hidden bg-surface-container-lowest px-gutter pt-44 pb-section-padding-desktop">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(254,212,136,0.28),transparent_28%),radial-gradient(circle_at_left_center,rgba(2,28,54,0.12),transparent_26%)]" />
            <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-bl from-secondary-container/60 to-transparent blur-3xl" />
            <div className="absolute bottom-0 left-0 h-full w-1/3 bg-gradient-to-tr from-primary-container/30 to-transparent blur-3xl" />
          </div>
          <div className="relative z-10 mx-auto flex max-w-container-max flex-col items-center gap-16 md:flex-row">
            <div className="md:w-1/2">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-xl">
                <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
                <span className="font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary">
                  Boutique UAE Tax, Audit & Compliance Advisory
                </span>
              </div>
              <h1 className="mb-6 font-display-lg text-display-lg-mobile leading-tight text-primary md:text-display-lg">
                Strategic Advisory Services Designed for{" "}
                <span className="text-secondary">Business Growth</span>
              </h1>
              <p className="mb-10 max-w-xl font-body-lg text-body-lg text-on-surface-variant">
                Navigating the complex regulatory landscape of the UAE with
                surgical precision. We empower international investors and local
                enterprises with world-class fiscal strategy.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#001A33_0%,#163d63_100%)] px-8 py-4 font-label-md text-label-md text-white shadow-[0_18px_40px_rgba(0,26,51,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_44px_rgba(0,26,51,0.22)]"
                >
                  Schedule Consultation
                  <MdArrowForward
                    aria-hidden="true"
                    className="text-sm transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
                <a
                  href="#services"
                  className="rounded-full border border-primary/15 bg-white/75 px-8 py-4 font-label-md text-label-md text-primary shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-white"
                >
                  Our Practice Areas
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {heroHighlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/72 px-4 py-2 text-on-surface shadow-sm backdrop-blur-xl"
                  >
                    <MdCheckCircle aria-hidden="true" className="text-secondary" />
                    <span className="font-label-md text-[12px] tracking-[0.04em]">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative md:w-1/2">
              <div className="absolute -top-8 -right-8 h-36 w-36 rounded-full bg-secondary/20 blur-3xl" />
              <div className="glass-card aspect-square overflow-hidden rounded-[2rem] p-4">
                <div className="relative h-full w-full overflow-hidden rounded-xl shadow-2xl">
                  <Image
                    alt="Modern architecture of Dubai business district"
                    className="object-cover"
                    data-alt="A professional, high-angle architectural shot of the Dubai International Financial Centre skyscrapers reflecting a soft golden sunset. The lighting is crisp and sophisticated with a corporate light-mode aesthetic. The composition features clean vertical lines and glass facades, symbolizing transparency, stability, and growth in a modern business environment."
                    fill
                    priority
                    sizes="(min-width: 768px) 50vw, 100vw"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5SZK3L9Vi2C9TSgPrL9YS_GUNFuWyhNhFTRGS654ngGMyDZMwp_JPEciwFMKGfngq7qkXiJQ_9rimZHbrd8lulj4m6nOujyIgvuVcSu1Cg2FHUjrEOaCyI1BV8hdbDCP7bPwFsaAz9tSFxqxHueHHOtJS1d1n2_LmtzgASB0KtCcUC3KajyXXiepW4uk3M_O8lwHEa9qs2owILweD0lQx7539YxCcSLSkE9ykHeZBnoWEtgCa6THMpOE-tglwPH3E5G_MoRiZ2TDr"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-secondary p-6 text-white shadow-xl md:block">
                <p className="font-bold text-display-lg">15+</p>
                <p className="font-label-md">Years of Excellence</p>
              </div>
            </div>
          </div>
        </header>

        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#001A33_0%,#07233f_56%,#12395c_100%)] py-16 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(233,193,118,0.18),transparent_35%)]" />
          <div className="relative mx-auto grid max-w-container-max grid-cols-2 gap-6 px-gutter text-center md:grid-cols-4">
            {trustMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/10 bg-white/4 px-6 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl"
              >
                <span className="font-display-lg text-display-lg-mobile text-secondary-fixed md:text-display-lg">
                  {metric.value}
                </span>
                <p className="mt-2 font-label-md text-white/70">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="services"
          className="relative overflow-hidden bg-surface px-gutter py-section-padding-desktop"
        >
          <div className="pointer-events-none absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-secondary-fixed/10 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-full w-1/4 bg-gradient-to-tr from-primary-container/5 to-transparent blur-3xl" />
          <div className="mx-auto max-w-container-max">
            <div className="mb-16 space-y-4 text-center">
              <span className="font-label-md uppercase tracking-widest text-secondary">
                Our Expertise
              </span>
              <h2 className="font-headline-md text-headline-md text-primary">
                Integrated Strategic Solutions
              </h2>
              <p className="mx-auto max-w-2xl font-body-md text-on-surface-variant">
                Structured like a premium advisory practice, every engagement is
                designed to look sharp, feel seamless, and create commercial
                clarity for founders, finance teams, and investors.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                {serviceHighlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/72 px-4 py-2 text-on-surface shadow-sm backdrop-blur-xl"
                  >
                    <MdCheckCircle
                      aria-hidden="true"
                      className="text-sm text-secondary"
                    />
                    <span className="font-label-md text-[12px] tracking-[0.08em]">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mx-auto h-1 w-24 rounded-full bg-secondary" />
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              <section className="glass-card gold-accent-top group relative overflow-hidden rounded-[2rem] border-white/20 p-8 lg:col-span-7">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,193,118,0.24),transparent_30%),linear-gradient(145deg,rgba(255,255,255,0.2),transparent_58%)]" />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <span className="rounded-full border border-secondary/20 bg-white/75 px-4 py-2 font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary shadow-sm">
                      Flagship Service
                    </span>
                    <span className="rounded-full border border-primary/10 bg-white/65 px-4 py-2 font-label-md text-[11px] tracking-[0.18em] text-primary/70">
                      01
                    </span>
                  </div>
                  <MdOutlineDomain
                    aria-hidden="true"
                    className="mb-6 block rounded-3xl bg-[linear-gradient(135deg,rgba(119,90,25,0.12),rgba(254,212,136,0.3))] p-3 text-[3.4rem] text-secondary transition-transform group-hover:scale-110"
                  />
                  <h3 className="mb-3 font-headline-md text-headline-md">
                    Business Setup
                  </h3>
                  <p className="mb-6 max-w-md font-body-md text-body-md text-on-surface-variant">
                    Mainland, Freezone, and Offshore company formations in the
                    UAE with full licensing support and strategic jurisdictional
                    guidance.
                  </p>
                  <div className="mb-6 flex-grow space-y-3">
                    <div className="flex items-center gap-3">
                      <MdCheckCircle
                        aria-hidden="true"
                        className="text-secondary"
                      />
                      <span className="font-body-md">
                        Mainland Company Formation with full flexibility.
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MdCheckCircle
                        aria-hidden="true"
                        className="text-secondary"
                      />
                      <span className="font-body-md">
                        Free Zone Setup with 100% foreign ownership.
                      </span>
                    </div>
                  </div>
                  <div className="mt-auto flex flex-wrap items-center gap-4">
                    <Link
                      className="flex w-fit items-center gap-2 rounded-full bg-[linear-gradient(135deg,#001A33_0%,#163d63_100%)] px-7 py-3.5 font-label-md text-label-md uppercase tracking-wider text-white shadow-[0_16px_34px_rgba(0,26,51,0.16)] transition-all group-hover:gap-4 hover:-translate-y-0.5"
                      href={routes.businessSetup}
                    >
                      Explore Service{" "}
                      <MdArrowForward aria-hidden="true" />
                    </Link>
                    <div className="rounded-2xl border border-white/60 bg-white/60 px-4 py-2.5 shadow-sm backdrop-blur-xl">
                      <p className="font-headline-sm text-base text-primary">48h</p>
                      <p className="font-label-md text-[11px] uppercase tracking-[0.14em] text-on-surface-variant">
                        Advisory Response
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/60 bg-white/60 px-4 py-2.5 shadow-sm backdrop-blur-xl">
                      <p className="font-headline-sm text-base text-primary">
                        End-to-End
                      </p>
                      <p className="font-label-md text-[11px] uppercase tracking-[0.14em] text-on-surface-variant">
                        Licensing Support
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 hidden h-full w-1/3 opacity-20 md:block">
                  <Image
                    alt="Corporate architecture"
                    className="object-cover"
                    fill
                    sizes="(min-width: 768px) 20vw, 0px"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4-rDeXiVmZy4s-9JYLWbmfuSbDMgCkzWPPxDumC28wHei3b2-AS-qQ6VJ8cmWJZdWDU2Q6NR1gEraVNnuu_wmDBKIuTZXsYg9ct6ThAkuWKgqcHWP32gFWOGk1heUiEia7b_5F2TUifw-pLqM1HpkLIk4TILHRpy0nsKKvPGQXhQXNPYQu4IXd-U7f0g4RuWbfa8p4Fi0qrSa5h6tXDcnRHkQ6lJxjb51h3nKbywq9c9f2vl4HX5zasdpmyV1a7z9hj1LTBEwjXBs"
                  />
                </div>
              </section>

              <section className="glass-card gold-rim relative flex flex-col overflow-hidden rounded-[2rem] bg-white/60 p-8 lg:col-span-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(233,193,118,0.16),transparent_34%)]" />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <span className="rounded-full border border-primary/10 bg-white/72 px-4 py-2 font-label-md text-[11px] uppercase tracking-[0.18em] text-primary/70">
                      Finance Operations
                    </span>
                    <span className="rounded-full border border-primary/10 bg-white/65 px-4 py-2 font-label-md text-[11px] tracking-[0.18em] text-primary/70">
                      02
                    </span>
                  </div>
                <MdOutlineAccountBalanceWallet
                  aria-hidden="true"
                  className="mb-5 block rounded-3xl bg-[linear-gradient(135deg,rgba(119,90,25,0.12),rgba(254,212,136,0.28))] p-3 text-[3.2rem] text-secondary"
                />
                <h3 className="mb-3 font-headline-md text-headline-md">
                  Financial Accounting
                </h3>
                <p className="mb-6 font-body-md text-on-surface-variant">
                  IFRS-aligned bookkeeping and financial reporting for
                  operational transparency.
                </p>
                <div className="mb-6 flex-grow space-y-5">
                  <div className="flex items-start gap-3">
                    <MdDone aria-hidden="true" className="mt-1 text-secondary" />
                    <div>
                      <p className="font-body-md font-bold">Bookkeeping</p>
                      <p className="font-label-md text-on-surface-variant">
                        Daily transaction tracking and ledger maintenance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MdDone aria-hidden="true" className="mt-1 text-secondary" />
                    <div>
                      <p className="font-body-md font-bold">MIS Reporting</p>
                      <p className="font-label-md text-on-surface-variant">
                        Custom dashboards for executive decision making.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/65 bg-white/65 px-4 py-3 shadow-sm">
                    <p className="font-headline-sm text-base text-primary">
                      IFRS Ready
                    </p>
                    <p className="mt-1 font-label-md text-[11px] uppercase tracking-[0.14em] text-on-surface-variant">
                      Reporting structure
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/65 bg-white/65 px-4 py-3 shadow-sm">
                    <p className="font-headline-sm text-base text-primary">
                      Monthly MIS
                    </p>
                    <p className="mt-1 font-label-md text-[11px] uppercase tracking-[0.14em] text-on-surface-variant">
                      Executive visibility
                    </p>
                  </div>
                </div>
                <Link
                  href={routes.financialAccounting}
                  className="group flex w-full items-center justify-center gap-2 rounded-full border border-primary/15 bg-white/70 px-8 py-3.5 font-label-md text-label-md text-primary shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-white"
                >
                  Explore{" "}
                  <MdArrowForward
                    aria-hidden="true"
                    className="text-sm transition-transform group-hover:translate-x-1"
                  />
                </Link>
                </div>
              </section>

              <div className="glass-card gold-accent-top group relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-white/60 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(0,26,51,0.14)] lg:col-span-4">
                <div className="absolute top-0 right-0 h-28 w-28 rounded-full bg-secondary/10 blur-2xl" />
                <div>
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <span className="font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary">
                      Compliance Core
                    </span>
                    <span className="rounded-full bg-white/70 px-3 py-1 font-label-md text-[11px] text-primary/70 shadow-sm">
                      03
                    </span>
                  </div>
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#001A33_0%,#163d63_100%)] text-on-primary shadow-[0_14px_28px_rgba(0,26,51,0.18)]">
                      <MdOutlineReceiptLong
                        aria-hidden="true"
                        className="text-lg text-on-primary"
                      />
                    </div>
                    <h4 className="font-headline-sm text-headline-sm">VAT</h4>
                  </div>
                  <p className="mb-5 font-body-md text-on-surface-variant">
                    Expert registration, filing, and advisory for FTA
                    compliance.
                  </p>
                  <div className="rounded-2xl border border-white/65 bg-white/65 px-4 py-3 shadow-sm">
                    <p className="font-label-md text-[11px] uppercase tracking-[0.16em] text-secondary">
                      Built For
                    </p>
                    <p className="mt-2 font-body-md text-on-surface">
                      Businesses needing accurate filing cycles and confident FTA handling.
                    </p>
                  </div>
                </div>
                <Link
                  className="mt-6 flex items-center gap-2 font-label-md text-secondary transition-all group-hover:gap-3"
                  href={routes.vat}
                >
                  Explore{" "}
                  <MdArrowForward aria-hidden="true" className="text-sm" />
                </Link>
              </div>

              <div className="glass-card gold-accent-top group relative flex flex-col items-start gap-6 overflow-hidden rounded-[2rem] border-l-4 border-secondary/30 bg-white/40 p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-primary-container/5 hover:shadow-[0_30px_70px_rgba(0,26,51,0.14)] md:flex-row lg:col-span-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(233,193,118,0.18),transparent_34%)]" />
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.4rem] bg-[linear-gradient(135deg,rgba(0,26,51,0.96),rgba(22,61,99,0.82))] shadow-[0_18px_34px_rgba(0,26,51,0.22)]">
                  <MdOutlineAssuredWorkload
                    aria-hidden="true"
                    className="text-4xl text-secondary-fixed"
                  />
                </div>
                <div className="flex-1">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-secondary/20 bg-white/72 px-4 py-2 font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary">
                      High-Priority Advisory
                    </span>
                    <span className="rounded-full border border-primary/10 bg-white/65 px-4 py-2 font-label-md text-[11px] tracking-[0.18em] text-primary/70">
                      04
                    </span>
                  </div>
                  <h4 className="mb-2 font-headline-sm text-headline-sm">
                    Corporate Tax
                  </h4>
                  <p className="font-body-md text-on-surface-variant">
                    Strategic impact assessment and planning for the new UAE tax
                    regime, optimizing group structures for the 9% regime.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <span className="rounded-full border border-white/65 bg-white/70 px-3 py-1.5 font-label-md text-[11px] uppercase tracking-[0.16em] text-primary/75">
                      Group Structure Review
                    </span>
                    <span className="rounded-full border border-white/65 bg-white/70 px-3 py-1.5 font-label-md text-[11px] uppercase tracking-[0.16em] text-primary/75">
                      Impact Modelling
                    </span>
                    <span className="rounded-full border border-white/65 bg-white/70 px-3 py-1.5 font-label-md text-[11px] uppercase tracking-[0.16em] text-primary/75">
                      Filing Readiness
                    </span>
                  </div>
                </div>
                <Link
                  className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-secondary/20 text-secondary transition-all group-hover:bg-secondary group-hover:text-white"
                  href={routes.corporateTax}
                >
                  <MdArrowForward aria-hidden="true" />
                </Link>
              </div>

              <div className="glass-card gold-accent-top group relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-white/60 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(0,26,51,0.14)] lg:col-span-4">
                <div className="absolute bottom-0 left-0 h-28 w-28 rounded-full bg-primary-container/8 blur-2xl" />
                <div>
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <span className="font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary">
                      Assurance
                    </span>
                    <span className="rounded-full bg-white/70 px-3 py-1 font-label-md text-[11px] text-primary/70 shadow-sm">
                      05
                    </span>
                  </div>
                  <MdOutlineFactCheck
                    aria-hidden="true"
                    className="mb-5 block rounded-3xl bg-[linear-gradient(135deg,rgba(119,90,25,0.12),rgba(254,212,136,0.28))] p-3 text-[3.2rem] text-secondary"
                  />
                  <h4 className="mb-3 font-headline-sm text-headline-sm">
                    Audit
                  </h4>
                  <p className="mb-5 font-body-md text-on-surface-variant">
                    Independent external and internal audit services for clean
                    opinions.
                  </p>
                  <div className="rounded-2xl border border-white/65 bg-white/65 px-4 py-3 shadow-sm">
                    <p className="font-label-md text-[11px] uppercase tracking-[0.16em] text-secondary">
                      Outcome
                    </p>
                    <p className="mt-2 font-body-md text-on-surface">
                      Clear financial credibility for investors, regulators, and boards.
                    </p>
                  </div>
                </div>
                <Link
                  className="mt-6 flex items-center gap-2 font-label-md text-secondary"
                  href={routes.auditSupport}
                >
                  Explore Service{" "}
                  <MdArrowForward aria-hidden="true" />
                </Link>
              </div>

              <div className="glass-card gold-accent-top group relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-white/60 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(0,26,51,0.14)] lg:col-span-4">
                <div className="absolute top-0 left-0 h-28 w-28 rounded-full bg-secondary/8 blur-2xl" />
                <div>
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <span className="font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary">
                      Digital Readiness
                    </span>
                    <span className="rounded-full bg-white/70 px-3 py-1 font-label-md text-[11px] text-primary/70 shadow-sm">
                      06
                    </span>
                  </div>
                  <MdOutlineDescription
                    aria-hidden="true"
                    className="mb-5 block rounded-3xl bg-[linear-gradient(135deg,rgba(119,90,25,0.12),rgba(254,212,136,0.28))] p-3 text-[3.2rem] text-secondary"
                  />
                  <h4 className="mb-3 font-headline-sm text-headline-sm">
                    E-Invoicing
                  </h4>
                  <p className="mb-5 font-body-md text-on-surface-variant">
                    Ensuring full compliance with FTA e-invoicing mandates
                    through digital transformation.
                  </p>
                  <div className="rounded-2xl border border-white/65 bg-white/65 px-4 py-3 shadow-sm">
                    <p className="font-label-md text-[11px] uppercase tracking-[0.16em] text-secondary">
                      Focus
                    </p>
                    <p className="mt-2 font-body-md text-on-surface">
                      Workflow alignment, invoice controls, and future-ready reporting.
                    </p>
                  </div>
                </div>
                <Link
                  className="mt-6 flex items-center gap-2 font-label-md text-secondary"
                  href={routes.eInvoicing}
                >
                  Explore Service{" "}
                  <MdArrowForward aria-hidden="true" />
                </Link>
              </div>

              <div className="group relative flex flex-row items-center gap-5 overflow-hidden rounded-[2rem] border border-[#0e3558] bg-[linear-gradient(135deg,#001A33_0%,#07233f_60%,#143e61_100%)] p-6 text-white shadow-[0_24px_60px_rgba(0,26,51,0.2)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(0,26,51,0.22)] lg:col-span-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,193,118,0.16),transparent_34%)]" />
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                  <MdOutlineSecurity
                    aria-hidden="true"
                    className="text-[1.65rem] text-secondary-fixed"
                  />
                </div>
                <div className="relative z-10 flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="rounded-full border border-white/12 bg-white/8 px-3 py-1 font-label-md text-[11px] uppercase tracking-[0.16em] text-secondary-fixed">
                      Risk Protection
                    </span>
                    <span className="font-label-md text-[11px] tracking-[0.16em] text-white/55">
                      07
                    </span>
                  </div>
                  <h4 className="mb-1 font-headline-sm text-headline-sm text-white">
                    AML
                  </h4>
                  <p className="font-label-md text-white/78">
                    Compliance for DNFBPs.
                  </p>
                  <p className="mt-2 max-w-xs font-body-md text-white/78">
                    Policy frameworks, risk controls, and reporting support for regulated entities.
                  </p>
                </div>
                <Link
                  className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/12 text-secondary-fixed transition-all group-hover:bg-secondary group-hover:text-white"
                  href={routes.aml}
                >
                  <MdArrowForward aria-hidden="true" className="text-sm" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-surface-container-high py-section-padding-desktop">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(233,193,118,0.08),transparent_42%)]" />
          <div className="relative z-10 mx-auto max-w-container-max px-gutter">
            <div className="mb-20 text-center">
              <span className="font-label-md uppercase tracking-widest text-secondary">
                Delivery Model
              </span>
              <h2 className="mt-3 font-headline-md text-headline-md text-primary">
                Our Strategic Engagement Model
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-body-md text-on-surface-variant">
                A refined process that keeps every step visible, structured, and
                commercially aligned from first consultation to execution.
              </p>
            </div>
            <div className="relative grid grid-cols-1 gap-0 md:grid-cols-4">
              <div className="absolute top-12 left-0 hidden h-0.5 w-full bg-outline-variant/30 md:block" />
              {processSteps.map((step) => (
                <div
                  key={step.title}
                  className="group relative mb-12 px-4 md:mb-0"
                >
                  <div className="glass-card relative z-10 flex min-h-[300px] flex-col rounded-[2rem] border border-white/70 px-6 py-8 text-center transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_30px_70px_rgba(0,26,51,0.14)]">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <span className="font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary">
                        {step.eyebrow}
                      </span>
                      <span className="rounded-full bg-[linear-gradient(135deg,#001A33_0%,#163d63_100%)] px-3 py-1 font-label-md text-[11px] text-white shadow-[0_12px_24px_rgba(0,26,51,0.18)]">
                        {step.number}
                      </span>
                    </div>
                    <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(0,26,51,0.96),rgba(22,61,99,0.84))] shadow-[0_18px_34px_rgba(0,26,51,0.2)] transition-transform group-hover:scale-110">
                      <step.icon
                        aria-hidden="true"
                        className="text-3xl text-secondary-fixed"
                      />
                    </div>
                    <h4 className="mb-3 font-headline-sm text-headline-sm">
                      {step.title}
                    </h4>
                    <p className="font-body-md text-on-surface-variant">
                      {step.description}
                    </p>
                    <div className="mt-auto pt-6">
                      <div className="mx-auto h-1.5 w-16 rounded-full bg-secondary/35 transition-all duration-300 group-hover:w-24 group-hover:bg-secondary" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface px-gutter py-section-padding-desktop">
          <div className="mx-auto max-w-container-max">
            <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
              <div>
                <span className="font-label-md uppercase tracking-widest text-secondary">
                  Impact Stories
                </span>
                <h2 className="mt-2 font-headline-md text-headline-md text-primary">
                  Success Benchmarks
                </h2>
                <p className="mt-4 max-w-2xl font-body-md text-on-surface-variant">
                  Selected engagements that demonstrate how a sharper advisory
                  interface can translate into cleaner compliance and stronger
                  financial outcomes.
                </p>
              </div>
              <button
                type="button"
                className="rounded-full border border-primary/10 bg-white/80 px-6 py-3 font-label-md text-primary shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/20 hover:text-secondary"
              >
                View All Success Stories
              </button>
            </div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {caseStudies.map((caseStudy) => (
                <div
                  key={caseStudy.title}
                  className="glass-card group flex h-full flex-col overflow-hidden rounded-[2rem] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(0,26,51,0.16)] md:flex-row"
                >
                  <div className="relative overflow-hidden md:w-1/2">
                    <div className="absolute left-5 top-5 z-10 rounded-full border border-white/20 bg-[rgba(0,26,51,0.72)] px-4 py-2 font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary-fixed backdrop-blur-xl">
                      {caseStudy.badge}
                    </div>
                    <Image
                      alt={caseStudy.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      data-alt={caseStudy.imageDescription}
                      height={720}
                      sizes="(min-width: 768px) 25vw, 100vw"
                      src={caseStudy.imageSrc}
                      width={720}
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[rgba(0,26,51,0.45)] to-transparent" />
                  </div>
                  <div className="space-y-3 p-6 md:w-1/2">
                    <span className="inline-flex rounded-full border border-secondary/20 bg-white/70 px-3 py-1 text-xs font-label-md text-secondary shadow-sm">
                      {caseStudy.badge}
                    </span>
                    <h3 className="font-headline-sm text-headline-sm">
                      {caseStudy.title}
                    </h3>
                    <p className="font-body-md text-on-surface-variant">
                      {caseStudy.summary}
                    </p>
                    <div className="rounded-2xl border border-white/65 bg-white/65 p-4 shadow-sm">
                      <p className="font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary">
                        Measured Impact
                      </p>
                      <div className="mt-2 border-t border-outline-variant/60 pt-3">
                        <p className="font-bold text-xl text-secondary">
                          {caseStudy.metric}
                        </p>
                        <p className="font-label-md">
                          {caseStudy.metricLabel}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-t border-outline-variant/60 pt-4">
                      <p className="font-label-md text-[11px] uppercase tracking-[0.16em] text-on-surface-variant">
                        Strategic Case Study
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-surface-container-low px-gutter py-section-padding-desktop">
          <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-secondary/10 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-56 w-56 rounded-full bg-primary-container/8 blur-3xl" />
          <div className="mx-auto max-w-3xl">
            <div className="mb-16 text-center">
              <span className="font-label-md uppercase tracking-widest text-secondary">
                Need Clarity?
              </span>
              <h2 className="mt-3 font-headline-md text-headline-md text-primary">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-body-md text-on-surface-variant">
                Quick answers to the questions most often asked by business
                owners entering or scaling within the UAE market.
              </p>
            </div>
            <div className="glass-card rounded-[2rem] border border-white/70 p-4 shadow-[0_28px_70px_rgba(0,26,51,0.1)] md:p-6">
              <FaqAccordion items={faqItems} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
