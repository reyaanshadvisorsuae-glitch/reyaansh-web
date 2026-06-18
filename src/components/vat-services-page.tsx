import Image from "next/image";
import {
  MdArrowForward,
  MdCheckCircle,
  MdFactCheck,
  MdGavel,
  MdOutlineAccountBalanceWallet,
  MdOutlineAnalytics,
  MdOutlineFactCheck,
  MdOutlineReceiptLong,
  MdSecurity,
} from "react-icons/md";
import { FaqAccordion } from "@/components/faq-accordion";

const assurancePoints = [
  {
    description: "Authorized representation for all federal tax matters.",
    title: "FTA Registered Agents",
  },
  {
    description: "Rigorous multi-layer filing verification process.",
    title: "99.8% Accuracy Rate",
  },
  {
    description: "Strategic support during FTA tax inspections.",
    title: "FTA Audit Support",
  },
] as const;

const roadmapSteps = [
  {
    description:
      "We assess your current accounting structure and transactional flows against UAE VAT laws.",
    label: "Week 1",
    title: "Diagnostic Phase",
  },
  {
    description:
      "Training your finance team on tax invoices, credit notes, and record-keeping requirements.",
    label: "Week 2-3",
    title: "Implementation & Training",
  },
  {
    description:
      "Automated tracking of filing deadlines and regular reconciliation of VAT GL accounts.",
    label: "Quarterly",
    title: "Ongoing Compliance",
  },
] as const;

const benefitCards = [
  {
    description:
      "Optimization of VAT processes, documentation controls, and filing timelines to keep more liquidity in your business.",
    title: "Cash Flow Advantage",
  },
  {
    description:
      "Eliminate exposure to hefty FTA administrative penalties through rigorous internal control frameworks.",
    title: "Risk Mitigation",
  },
] as const;

const heroHighlights = [
  "VAT Registration",
  "VAT Compliance Review",
  "VAT Health Check",
  "FTA Audit Support",
  "Private Clarification Filing",
  "Representation Services",
  "VAT Training",
] as const;

const optimizationLevers = [
  "Recovery Timing",
  "Documentation Controls",
  "Transaction Reviews",
] as const;

const faqItems = [
  {
    answer:
      "In the UAE, a business must register for VAT if its taxable supplies and imports exceed AED 375,000 in the previous 12 months or are expected to exceed this in the next 30 days.",
    question: "What is the mandatory VAT registration threshold?",
  },
  {
    answer:
      "The FTA imposes a penalty of AED 1,000 for the first late filing and AED 2,000 for repeat offenses within 24 months. Additional late payment penalties can also apply.",
    question: "What are the penalties for late filing?",
  },
  {
    answer:
      "Yes. Most free zone companies can recover input tax on eligible business expenses, subject to standard FTA rules and any designated zone exceptions.",
    question: "Can free zone companies recover VAT?",
  },
] as const;

export function VatServicesPage() {
  return (
    <div className="overflow-x-hidden bg-background text-on-background">
      <main>
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#001A33_0%,#082540_58%,#143e61_100%)] pt-40 pb-section-padding-desktop text-white">
          <div className="absolute inset-0 z-0">
            <Image
              alt="Dubai financial district skyline at dusk"
              className="object-cover opacity-18"
              fill
              priority
              sizes="100vw"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5hjPQqzUdmkIlAzFTrVfyz_JEyeREP-Q1EEiOBM8PZl47cCodGxlUrsOxeiVW2YscqD0kGdl-XJ-fz5RrZpX3pOgtVYWSIzmECGmmjp19y4E-4vFonLIsPaOEg_2cr32OYa-ulqx1agfWY7KvU5w6dog2bKZxsg10mXoN2mHfFfJzpK1JZbtvQaGUFc_EB1dYgggKzbP88KHtgwZz1Ek0UXYXVxrzZLahX-MbhzKx2fGUJV6Ksw_u1T6wn_dyBm0yi2i1MdSmKQhR"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(233,193,118,0.24),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_22%),linear-gradient(90deg,rgba(0,26,51,0.96),rgba(0,26,51,0.82),rgba(0,26,51,0.54))]" />
          </div>

          <div className="relative z-10 mx-auto grid max-w-container-max grid-cols-1 items-center gap-16 px-gutter lg:grid-cols-2">
            <div>
              <span className="mb-6 inline-flex items-center rounded-full border border-white/12 bg-white/8 px-4 py-2 font-label-md text-[12px] uppercase tracking-[0.18em] text-secondary-fixed shadow-[0_18px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl">
                STRATEGIC TAX ADVISORY
              </span>
              <h1 className="mb-8 font-display-lg text-display-lg-mobile leading-tight text-white md:text-display-lg">
                UAE VAT Solutions Built for{" "}
                <span className="bg-[linear-gradient(135deg,#775a19_0%,#e9c176_100%)] bg-clip-text text-transparent">
                  Compliance
                </span>
              </h1>
              <p className="mb-10 max-w-xl font-body-lg text-body-lg text-white/78">
                Navigate the complexities of UAE Value Added Tax with
                precision. Our expert advisors ensure your business remains
                audit-ready while optimizing your fiscal position within the
                legal framework of the Federal Tax Authority.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#775a19_0%,#9d751f_100%)] px-8 py-4 font-label-md text-label-md uppercase tracking-[0.14em] text-white shadow-[0_18px_40px_rgba(119,90,25,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_rgba(119,90,25,0.34)]"
                >
                  Speak with VAT Experts
                  <MdArrowForward aria-hidden="true" />
                </a>
                <a
                  href="#vat-lifecycle"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/24 bg-white/8 px-8 py-4 font-label-md text-label-md uppercase tracking-[0.14em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/12"
                >
                  View Service Scope
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {heroHighlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-4 py-2 text-white/84 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl"
                  >
                    <MdCheckCircle
                      aria-hidden="true"
                      className="text-secondary-fixed"
                    />
                    <span className="font-label-md text-[12px] tracking-[0.08em]">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.24)] backdrop-blur-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_24%),radial-gradient(circle_at_left,rgba(233,193,118,0.14),transparent_28%),linear-gradient(145deg,rgba(255,255,255,0.04),transparent_58%)]" />
                <div className="relative z-10 mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-label-md text-[11px] uppercase tracking-[0.2em] text-secondary-fixed">
                      Compliance Shield
                    </p>
                    <h3 className="mt-2 font-headline-sm text-headline-sm text-white">
                      Built for FTA-ready operations
                    </h3>
                  </div>
                  <div className="rounded-full border border-white/12 bg-white/8 px-4 py-2 font-label-md text-[11px] uppercase tracking-[0.16em] text-white/75">
                    Elite VAT Desk
                  </div>
                </div>

                <div className="relative z-10 space-y-4">
                  {assurancePoints.map((item, index) => (
                    <div
                      key={item.title}
                      className="group flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/7 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:bg-white/10"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] bg-[linear-gradient(135deg,rgba(119,90,25,0.24),rgba(254,212,136,0.18))] shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]">
                        {index === 0 ? (
                          <MdCheckCircle
                            aria-hidden="true"
                            className="text-2xl text-secondary-fixed"
                          />
                        ) : index === 1 ? (
                          <MdOutlineFactCheck
                            aria-hidden="true"
                            className="text-2xl text-secondary-fixed"
                          />
                        ) : (
                          <MdSecurity
                            aria-hidden="true"
                            className="text-2xl text-secondary-fixed"
                          />
                        )}
                      </div>
                      <div>
                        <h3 className="font-label-md text-label-md text-white">
                          {item.title}
                        </h3>
                        <p className="text-sm text-white/68">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="vat-lifecycle"
          className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f5f7f8_100%)] py-section-padding-desktop"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,193,118,0.16),transparent_30%),radial-gradient(circle_at_left_center,rgba(2,28,54,0.06),transparent_24%)]" />
          <div className="mx-auto max-w-container-max px-gutter">
            <div className="relative mb-16 text-center">
              <span className="font-label-md uppercase tracking-[0.18em] text-secondary">
                VAT Service Scope
              </span>
              <h2 className="mb-4 font-headline-md text-headline-md">
                Comprehensive VAT Lifecycle Management
              </h2>
              <p className="mx-auto max-w-2xl font-body-md text-body-md text-on-surface-variant">
                From registration to audit defense, we handle the entire tax
                scope so you can focus on growth.
              </p>
              <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-secondary" />
            </div>

            <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
              <article className="glass-card gold-accent-top group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border-white/70 p-8 shadow-[0_24px_60px_rgba(0,26,51,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-[0_30px_70px_rgba(0,26,51,0.12)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(233,193,118,0.12),transparent_36%)]" />
                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-[linear-gradient(135deg,rgba(119,90,25,0.12),rgba(254,212,136,0.32))] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
                    <MdOutlineReceiptLong
                      aria-hidden="true"
                      className="text-3xl text-secondary"
                    />
                  </div>
                  <MdOutlineReceiptLong
                    aria-hidden="true"
                    className="hidden"
                  />
                  <h3 className="mb-4 font-headline-sm text-headline-sm">
                    VAT Registration & Structuring
                  </h3>
                  <p className="max-w-md font-body-md text-body-md text-on-surface-variant">
                    Streamlined mandatory and voluntary VAT registration
                    process. We analyze your corporate structure to identify the
                    most appropriate registration approach under UAE VAT law.
                  </p>
                </div>
              </article>

              <article className="glass-card gold-accent-top group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border-white/70 p-8 shadow-[0_24px_60px_rgba(0,26,51,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-[0_30px_70px_rgba(0,26,51,0.12)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(233,193,118,0.12),transparent_36%)]" />
                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-[linear-gradient(135deg,rgba(119,90,25,0.12),rgba(254,212,136,0.32))] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
                    <MdFactCheck
                      aria-hidden="true"
                      className="text-3xl text-secondary"
                    />
                  </div>
                  <h3 className="mb-4 font-headline-sm text-headline-sm">
                    VAT Periodic Filing
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    End-to-end filing of VAT returns on a quarterly or monthly
                    basis in full compliance with UAE VAT law.
                  </p>
                </div>
                <ul className="relative z-10 mt-6 space-y-2 font-label-md text-label-md text-on-surface">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    Data Reconciliation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    Filing Review
                  </li>
                </ul>
              </article>

              <article className="glass-card gold-accent-top group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border-white/70 p-8 shadow-[0_24px_60px_rgba(0,26,51,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-[0_30px_70px_rgba(0,26,51,0.12)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(233,193,118,0.12),transparent_36%)]" />
                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-[linear-gradient(135deg,rgba(119,90,25,0.12),rgba(254,212,136,0.32))] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
                    <MdOutlineAnalytics
                      aria-hidden="true"
                      className="text-3xl text-secondary"
                    />
                  </div>
                  <h3 className="mb-4 font-headline-sm text-headline-sm">
                    VAT Advisory / Impact Assessment
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Strategic VAT advisory for new business models, analysis of
                    cross-border transactions including input tax optimization,
                    and regulatory guidance to ensure compliance and minimize
                    risk.
                  </p>
                </div>
              </article>

              <article className="glass-card gold-accent-top group relative flex flex-col gap-8 overflow-hidden rounded-[2rem] border-white/70 p-8 shadow-[0_24px_60px_rgba(0,26,51,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-[0_30px_70px_rgba(0,26,51,0.12)] md:col-span-3 md:flex-row">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,193,118,0.14),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.18),transparent_58%)]" />
                <div className="relative z-10 flex-1">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-[linear-gradient(135deg,rgba(119,90,25,0.12),rgba(254,212,136,0.32))] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
                    <MdOutlineFactCheck
                      aria-hidden="true"
                      className="text-3xl text-secondary"
                    />
                  </div>
                  <h3 className="mb-4 font-headline-sm text-headline-sm">
                    VAT Health Checks
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    We undertake an in-depth review of VAT returns,
                    transactional data, accounting records, tax processes,
                    systems, and supporting documentation to identify compliance
                    deficiencies, reporting inaccuracies, operational
                    inefficiencies, and potential tax exposures. Through
                    targeted remediation support, we help businesses mitigate
                    potential liabilities, optimize VAT processes, and enhance
                    audit preparedness.
                  </p>
                </div>
                <div className="relative z-10 flex-1 border-t border-outline-variant/30 pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-8">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-[linear-gradient(135deg,rgba(119,90,25,0.12),rgba(254,212,136,0.32))] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
                    <MdGavel
                      aria-hidden="true"
                      className="text-3xl text-secondary"
                    />
                  </div>
                  <h3 className="mb-4 font-headline-sm text-headline-sm">
                    FTA Audit Support
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Complete support during FTA VAT audits, including pre-audit
                    reviews, documentation assessment, response preparation, and
                    liaison with authorities to mitigate penalties.
                  </p>
                </div>
              </article>

              <article className="glass-card gold-accent-top group relative flex flex-col gap-8 overflow-hidden rounded-[2rem] border-white/70 p-8 shadow-[0_24px_60px_rgba(0,26,51,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-[0_30px_70px_rgba(0,26,51,0.12)] md:col-span-3 md:flex-row">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,193,118,0.14),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.18),transparent_58%)]" />
                <div className="relative z-10 flex-1">
                  <h3 className="mb-4 font-headline-sm text-headline-sm">
                    VAT De-registration
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Filing of de-registration applications, filing all pending
                    VAT returns, settling tax liabilities, and liaising with FTA
                    authorities as required.
                  </p>
                </div>
                <div className="relative z-10 flex-1 border-t border-outline-variant/30 pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-8">
                  <h3 className="mb-4 font-headline-sm text-headline-sm">
                    VAT Private Clarification
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    We prepare and submit technically robust clarification
                    requests to the FTA on complex VAT matters, supported by
                    documentation, legislative references, and tax analysis.
                  </p>
                </div>
                <div className="relative z-10 flex-1 border-t border-outline-variant/30 pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-8">
                  <h3 className="mb-4 font-headline-sm text-headline-sm">
                    VAT Refund Assistance Services
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    End-to-end support for recovering eligible input VAT,
                    including eligibility assessment, documentation review,
                    application preparation, and liaison with the FTA.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-section-padding-desktop">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(233,193,118,0.08),transparent_28%)]" />
          <div className="mx-auto max-w-container-max px-gutter">
            <div className="mb-14 text-center">
              <span className="font-label-md uppercase tracking-[0.18em] text-secondary">
                Execution Flow
              </span>
              <h2 className="mb-4 font-headline-md text-headline-md">
                Your Compliance Roadmap
              </h2>
              <p className="mx-auto max-w-2xl font-body-md text-body-md text-on-surface-variant">
                A structured advisory cadence that keeps every stage of your VAT
                obligations aligned, documented, and review-ready.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {roadmapSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="glass-card gold-accent-top group relative overflow-hidden rounded-[2rem] border-white/70 p-8 shadow-[0_24px_60px_rgba(0,26,51,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-[0_30px_70px_rgba(0,26,51,0.12)]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,193,118,0.12),transparent_34%)]" />
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <span className="rounded-full border border-primary/10 bg-white/72 px-4 py-2 font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary">
                        {step.label}
                      </span>
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#001A33_0%,#163d63_100%)] font-label-md text-[12px] text-white shadow-[0_14px_28px_rgba(0,26,51,0.18)]">
                        {`0${index + 1}`}
                      </span>
                    </div>
                    <h3 className="mb-3 font-headline-sm text-headline-sm text-primary">
                      {step.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#001A33_0%,#07233f_60%,#12395c_100%)] py-section-padding-desktop text-on-primary-container">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(233,193,118,0.18),transparent_30%)]" />
          <div className="absolute top-0 right-0 h-full w-1/3 opacity-12">
            <Image
              alt="Dubai glass building facade"
              className="object-cover"
              fill
              sizes="33vw"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxD5LGMrHWLv6pZPnGb-7svc2SHdmWfvp_-0dAj3jHU-szUwMQDYmytr1x7T5SdRjSkWCvdLUxHGY1LA-OuGeko9-yDUL6D2BAuI5TL4Hq2YQp7kxObLPUucFX_xKT40jRJVZu_WK85mrvidgMqbFKnxPQ2s39RJRwphtPjF2R1FPvPxpyQuWLvmANXed_Z_Q82qBSULEC6goNgBeXBkuXV2lP9z_048z4doGcMUgwSt3qwqmOTJXfTOjTKL6OKbrAKNkfS0jvKb_L"
            />
          </div>
          <div className="relative z-10 mx-auto max-w-container-max px-gutter">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-7">
                <span className="mb-5 inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary-fixed backdrop-blur-xl">
                  Beyond Compliance
                </span>
                <h2 className="mb-6 font-display-lg text-display-lg-mobile text-white md:text-display-lg">
                  Tax Optimization with Better Control Design
                </h2>
                <p className="max-w-2xl font-body-lg text-body-lg text-on-primary-container/80">
                  Our VAT advisory is designed to improve cash efficiency while
                  strengthening your filing environment, review processes, and
                  transaction-level confidence.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 lg:col-span-5">
                {benefitCards.map((benefit, index) => (
                  <article
                    key={benefit.title}
                    className="rounded-[1.8rem] border border-white/10 bg-white/6 p-6 shadow-[0_22px_54px_rgba(0,0,0,0.12)] backdrop-blur-xl"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[1rem] bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                      {index === 0 ? (
                        <MdOutlineAccountBalanceWallet
                          aria-hidden="true"
                          className="text-2xl text-secondary-fixed"
                        />
                      ) : (
                        <MdSecurity
                          aria-hidden="true"
                          className="text-2xl text-secondary-fixed"
                        />
                      )}
                    </div>
                    <h4 className="mb-2 font-headline-sm text-headline-sm text-white">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-on-primary-container/72">
                      {benefit.description}
                    </p>
                  </article>
                ))}

                <div className="rounded-[1.8rem] border border-white/10 bg-white/6 p-6 shadow-[0_22px_54px_rgba(0,0,0,0.12)] backdrop-blur-xl">
                  <p className="font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary-fixed">
                    Value Levers
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {optimizationLevers.map((lever) => (
                      <span
                        key={lever}
                        className="rounded-full border border-white/12 bg-white/8 px-4 py-2 font-label-md text-[11px] uppercase tracking-[0.12em] text-white/84"
                      >
                        {lever}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7f8f9_100%)] py-section-padding-desktop">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(233,193,118,0.08),transparent_42%)]" />
          <div className="mx-auto max-w-4xl px-gutter">
            <div className="mb-12 text-center">
              <span className="font-label-md uppercase tracking-[0.18em] text-secondary">
                Common Questions
              </span>
              <h2 className="mb-4 font-headline-md text-headline-md">
                VAT Frequently Asked Questions
              </h2>
              <p className="mx-auto max-w-2xl font-body-md text-body-md text-on-surface-variant">
                Clear answers to the most common compliance questions we handle
                for UAE businesses and foreign-owned structures.
              </p>
            </div>
            <div className="glass-card relative overflow-hidden rounded-[2rem] border border-white/75 p-6 shadow-[0_24px_60px_rgba(0,26,51,0.08)] md:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(233,193,118,0.12),transparent_36%)]" />
              <div className="relative z-10">
                <FaqAccordion items={[...faqItems]} />
              </div>
            </div>
          </div>
        </section>

        <section className="pb-section-padding-desktop">
          <div className="mx-auto max-w-container-max px-gutter">
            <div className="group relative overflow-hidden rounded-[2rem] border border-[#0e3558] bg-[linear-gradient(135deg,#001A33_0%,#07233f_60%,#143e61_100%)] p-7 text-center text-white shadow-[0_28px_80px_rgba(0,26,51,0.24)] sm:p-12 md:rounded-[3rem] md:p-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(233,193,118,0.18),transparent_36%)]" />
              <div className="absolute top-0 left-0 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/14 blur-3xl" />
              <div className="relative z-10">
                <span className="mb-5 inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary-fixed backdrop-blur-xl">
                  Private VAT Consultation
                </span>
                <h2 className="mb-6 font-display-lg text-display-lg-mobile text-white md:text-display-lg">
                  Ready for an Audit-Proof Business?
                </h2>
                <p className="mx-auto mb-10 max-w-2xl font-body-lg text-body-lg text-white/76">
                  Schedule a private session with our senior tax consultants to
                  review your current VAT position and identify potential risks.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#775a19_0%,#9d751f_100%)] px-7 py-4 font-label-md text-label-md uppercase tracking-[0.12em] text-white shadow-[0_18px_40px_rgba(119,90,25,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_rgba(119,90,25,0.34)] sm:px-10 sm:py-5 sm:tracking-[0.14em]"
                >
                  Speak with VAT Experts
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
