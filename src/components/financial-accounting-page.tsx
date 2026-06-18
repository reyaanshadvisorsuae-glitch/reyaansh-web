import Image from "next/image";
import Link from "next/link";
import {
  MdCheckCircle,
  MdOutlineAccountBalanceWallet,
  MdOutlineAnalytics,
  MdOutlineQueryStats,
  MdOutlineReceiptLong,
  MdTrendingUp,
} from "react-icons/md";
import { routes } from "@/lib/routes";

const methodologySteps = [
  {
    description:
      "Secure aggregation of banking and ERP data through encrypted pipelines.",
    number: "01",
    title: "Data Ingestion",
  },
  {
    description:
      "Validation and categorization against global IFRS standards by expert controllers.",
    number: "02",
    title: "Rigorous Audit",
  },
  {
    description:
      "Synthesizing trends to uncover hidden growth levers and operational risks.",
    number: "03",
    title: "Strategic Analysis",
  },
  {
    description:
      "Delivery of real-time insights for informed executive decision-making.",
    number: "04",
    title: "Boardroom Action",
  },
] as const;

const cashFlowCapabilities = [
  {
    description:
      "Advanced 12-month rolling forecasts to anticipate capital needs before they arise.",
    title: "Predictive Forecasting",
  },
  {
    description:
      "Fine-tuning inventory, accounts receivable, and payables for maximum efficiency.",
    title: "Working Capital Optimization",
  },
] as const;

const liquidityMetrics = [
  { colorClassName: "bg-secondary", label: "Operating Cash Flow", value: 82 },
  {
    colorClassName: "bg-primary-container",
    label: "Capital Reserve",
    value: 64,
  },
] as const;

const financialKpis = [
  { label: "Inflow", value: "$1.4M" },
  { label: "Outflow", value: "$0.9M" },
  { label: "Net", value: "$0.5M" },
] as const;

const advisoryAvatars = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDpqN0mCTyZm0g3w2No2WTvsv0cQW5ozB2b8thLpWJw9Q2QxPcPI_XQ0rIDhtQGRScD3nusskBQOF7kror1iRJhhwIaQ3_kHR0aph5l2DYO6EbQhK9hcsgp2KN-OkO4tJTKj_-8yVKHfjJ8AzA4T_C0vXyew1-OdlcXs4y-BeB4MOSA7QH25fiAG5_pM6fY02TkFs1WwDCixWE869pP1KpXAOvSnVq9NyVV5kWNruThFJPVFXRDT5OzKavAr7jZMBxZd6yXOwWMkEt0",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC7Bp79gUV6nOOHYTXfrMueOBNEVFFPpUnab2PzsfVcEh4TiZVepc4wIujxOtdVIosJ_A62X5OS0n-_qa3cXMzE2yf3bsis943qRivauR6_iQG6JTFNRUlVWxfpNkaPxw9J6fK3woUx9YeGECmmpJAIe3lV0lmUAVW1pZdQdOIh72bPi3Qj40N1M9AbS34INzcHAp7VGqBttQSgurNTTEpB3TncZRddNVG0s58rBY2cLH7NoWE9kJyQHdJEVEuUvEQTGZXwaOhjvAb2",
] as const;

const heroHighlights = [
  "MIS Dashboards",
  "IFRS Reporting",
  "Fractional CFO Support",
] as const;

const cashFlowSignals = [
  "12-Month Forecasting",
  "Working Capital Control",
  "Decision-Ready KPIs",
] as const;

export function FinancialAccountingPage() {
  return (
    <div className="overflow-x-hidden bg-background font-body-md text-on-surface">
      <main>
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f6f8f9_100%)] px-gutter pt-40 pb-section-padding-desktop">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(254,212,136,0.2),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(2,28,54,0.08),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.65),rgba(255,255,255,0.25))]" />
          <div className="relative mx-auto grid max-w-container-max grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="z-10">
              <span className="mb-6 inline-flex items-center rounded-full border border-white/70 bg-white/78 px-4 py-2 font-label-md text-[12px] uppercase tracking-[0.18em] text-secondary shadow-sm backdrop-blur-xl">
                Strategic Financial Services
              </span>
              <h1 className="mb-8 font-display-lg text-display-lg-mobile leading-tight text-primary md:text-display-lg">
                Financial Clarity for{" "}
                <span className="bg-[linear-gradient(135deg,#001A33_0%,#775a19_100%)] bg-clip-text text-transparent">
                  Sustainable Growth
                </span>
              </h1>
              <p className="mb-10 max-w-xl font-body-lg text-body-lg text-on-surface-variant">
                Empowering UAE enterprises with rigorous accounting standards,
                real-time MIS reporting, and strategic CFO advisory for
                navigating complex global markets.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#methodology"
                  className="inline-flex items-center rounded-full bg-[linear-gradient(135deg,#001A33_0%,#163d63_100%)] px-8 py-4 font-label-md text-label-md uppercase tracking-[0.14em] text-on-primary shadow-[0_18px_40px_rgba(0,26,51,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_44px_rgba(0,26,51,0.22)]"
                >
                  Our Methodology
                </a>
                <Link
                  href={routes.services}
                  className="inline-flex items-center rounded-full border border-primary/12 bg-white/76 px-8 py-4 font-label-md text-label-md uppercase tracking-[0.14em] text-primary shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-white"
                >
                  View All Services
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {heroHighlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/72 px-4 py-2 text-on-surface shadow-sm backdrop-blur-xl"
                  >
                    <MdCheckCircle
                      aria-hidden="true"
                      className="text-secondary"
                    />
                    <span className="font-label-md text-[12px] tracking-[0.08em]">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="glass-card relative z-10 overflow-hidden rounded-[2.3rem] border border-white/75 p-5 shadow-[0_30px_80px_rgba(0,26,51,0.12)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,193,118,0.16),transparent_28%),linear-gradient(145deg,rgba(255,255,255,0.2),transparent_60%)]" />
                <div className="relative z-10">
                  <div className="mb-4 flex items-center justify-between gap-4 px-1">
                    <div>
                      <p className="font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary">
                        Executive Finance Desk
                      </p>
                      <p className="mt-2 text-sm text-on-surface-variant">
                        Real-time visibility across reporting, forecasting, and
                        advisory.
                      </p>
                    </div>
                    <div className="rounded-full border border-white/70 bg-white/76 px-4 py-2 font-label-md text-[11px] uppercase tracking-[0.16em] text-primary/72">
                      Live Reporting
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-[1.6rem] border border-white/70 shadow-[0_20px_44px_rgba(0,26,51,0.1)]">
                    <Image
                      alt="Financial Dashboard Visual"
                      className="h-auto w-full object-cover"
                      data-alt="A sophisticated digital financial dashboard displayed on a high-resolution screen within a modern, minimalist executive office in Dubai. The interface features elegant data visualizations, including sleek bar charts in navy and gold, and real-time market trends."
                      height={900}
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpXYsafxFwIXqZPJMkq17sjwC1KS-ffwkmql1PPM1tGLKYSZOQuMKCSPHp5xedSHBDhoxWl-FjYd0gVUX-q2NlJmFRkQUU1eOnPpdxzJwi6dK-ezhU_vyTRc7aHva7BxC4yuQuHtBwJLM-64yjOKadpyCjWCVhm6vFxYIjFkApasTM33CuvaNhsh0UNKsViSbgXF_E47a9B3ioy0kKZJf9f2uhrgd95U6CkJ4hbCivuQzQBT1Fkl6_OOj4TuLQhj6-HauefiuVLPO9"
                      width={1200}
                    />
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-4 rounded-[1.4rem] border border-white/70 bg-white/72 px-4 py-4 shadow-sm backdrop-blur-xl">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-fixed">
                        <MdTrendingUp
                          aria-hidden="true"
                          className="text-2xl text-on-secondary-fixed"
                        />
                      </div>
                      <div>
                        <div className="font-label-md text-label-md text-on-surface-variant">
                          Growth Index
                        </div>
                        <div className="font-headline-sm text-headline-sm text-primary">
                          +24.8%
                        </div>
                      </div>
                    </div>
                    <div className="flex h-10 items-center justify-center rounded-full bg-primary/6 px-4">
                      <span className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">
                        Live Feed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 -z-10 h-64 w-64 rounded-full bg-secondary-fixed-dim/20 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 -z-10 h-64 w-64 rounded-full bg-primary-fixed/20 blur-3xl" />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f5f7f8_100%)] px-gutter py-section-padding-desktop">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,193,118,0.14),transparent_30%),radial-gradient(circle_at_left_center,rgba(2,28,54,0.06),transparent_26%)]" />
          <div className="mx-auto max-w-container-max">
            <div className="relative mb-16 text-center">
              <span className="font-label-md uppercase tracking-[0.18em] text-secondary">
                Core Modules
              </span>
              <h2 className="mb-4 font-headline-md text-headline-md text-primary">
                Comprehensive Accounting Ecosystem
              </h2>
              <p className="mx-auto max-w-2xl font-body-md text-body-md text-on-surface-variant">
                From daily bookkeeping to strategic boardroom advisory, we
                provide the architectural stability your financial operations
                require.
              </p>
              <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-secondary" />
            </div>

            <div className="relative grid grid-cols-1 gap-6 md:grid-cols-12 md:auto-rows-[295px]">
              <article className="glass-card gold-accent-top group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border-white/70 p-8 shadow-[0_24px_60px_rgba(0,26,51,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-[0_30px_70px_rgba(0,26,51,0.12)] md:col-span-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(233,193,118,0.12),transparent_36%)]" />
                <div className="relative z-10">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-[linear-gradient(135deg,rgba(119,90,25,0.12),rgba(254,212,136,0.3))] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
                    <MdOutlineAccountBalanceWallet
                      aria-hidden="true"
                      className="text-3xl text-secondary"
                    />
                  </div>
                  <MdOutlineAccountBalanceWallet
                    aria-hidden="true"
                    className="hidden"
                  />
                  <h3 className="mb-2 font-headline-sm text-headline-sm text-primary">
                    Bookkeeping
                  </h3>
                  <p className="text-sm text-on-surface-variant">
                    Pristine ledger maintenance and transaction categorization
                    with AI-enhanced precision.
                  </p>
                </div>
              </article>

              <article className="group relative overflow-hidden rounded-[2rem] border border-[#0e3558] bg-[linear-gradient(135deg,#001A33_0%,#07233f_60%,#143e61_100%)] p-8 text-on-primary-container shadow-[0_28px_70px_rgba(0,26,51,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_34px_80px_rgba(0,26,51,0.24)] md:col-span-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,193,118,0.16),transparent_34%)]" />
                <div className="relative z-10 flex h-full flex-col gap-8 md:flex-row md:items-center">
                  <div className="flex-1">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                      <MdOutlineAnalytics
                        aria-hidden="true"
                        className="text-3xl text-secondary-fixed"
                      />
                    </div>
                    <h3 className="mb-2 font-headline-sm text-headline-sm text-white">
                      MIS Reporting
                    </h3>
                    <p className="mb-6 text-sm text-on-primary-container/80">
                      Management Information Systems designed to convert raw
                      data into actionable boardroom intelligence. Custom
                      dashboards for CEO visibility.
                    </p>
                    <ul className="grid grid-cols-2 gap-2 text-xs font-semibold uppercase tracking-wider text-white/85">
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                        Budget Variance
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                        KPI Tracking
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                        Profitability Analysis
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                        Risk Metrics
                      </li>
                    </ul>
                  </div>
                  <div className="hidden w-1/3 rounded-[1.4rem] border border-white/10 bg-white/6 p-4 backdrop-blur-md lg:block">
                    <div className="flex h-32 items-end gap-1">
                      <div className="h-1/2 w-full rounded-t-sm bg-secondary-fixed" />
                      <div className="h-2/3 w-full rounded-t-sm bg-secondary-fixed" />
                      <div className="h-full w-full rounded-t-sm bg-secondary-fixed" />
                      <div className="h-4/5 w-full rounded-t-sm bg-secondary-fixed" />
                      <div className="h-3/4 w-full rounded-t-sm bg-secondary-fixed" />
                    </div>
                  </div>
                </div>
              </article>

              <article className="glass-card gold-accent-top group relative flex items-center gap-8 overflow-hidden rounded-[2rem] border-white/70 p-8 shadow-[0_24px_60px_rgba(0,26,51,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-[0_30px_70px_rgba(0,26,51,0.12)] md:col-span-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(233,193,118,0.12),transparent_36%)]" />
                <div className="hidden w-1/4 md:block">
                  <Image
                    alt="Financial Statements Document"
                    className="relative z-10 h-48 w-full rounded-[1.3rem] object-cover shadow-[0_18px_34px_rgba(0,26,51,0.12)]"
                    data-alt="Close-up of a professionally printed financial statement resting on a dark wood table in a sunlit corporate boardroom."
                    height={640}
                    sizes="(min-width: 768px) 16vw, 0px"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYarXHu5fxgL3aI6NXWCrL1W9TFOHRshO42nDXkEJhPfp08GGrex_7rtzxW4XP3zWB9RhxSVfEK4JEnpGAp2VefFHE63VmyOcBNJtynayvVj-vC-9axLQALejwCn-ZZnerrl5Bji3rPpNYFlsSRnf0qG6y2z9errX3xmiuITQe6b3HHTI0aBGZKDEDuYnmCFIPgBpnyFVZRQv7FFXTjSZIQUhfez19ePH5c7vbIDHbtwIu18X4bAciCHslWNA1Q8GiotYFheNSm7u7"
                    width={480}
                  />
                </div>
                <div className="relative z-10 flex-1">
                  <h3 className="mb-2 font-headline-sm text-headline-sm text-primary">
                    Financial Statements
                  </h3>
                  <p className="mb-4 text-sm text-on-surface-variant">
                    IFRS-compliant financial reporting, balance sheets, and
                    income statements prepared for auditing and investor
                    presentations.
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-full bg-[linear-gradient(135deg,#775a19_0%,#9d751f_100%)] px-5 py-2.5 font-label-md text-sm uppercase tracking-[0.12em] text-white shadow-[0_14px_28px_rgba(119,90,25,0.2)]"
                  >
                    Request Sample Report
                  </a>
                </div>
              </article>

              <article className="glass-card gold-accent-top group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border-white/70 p-8 shadow-[0_24px_60px_rgba(0,26,51,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-[0_30px_70px_rgba(0,26,51,0.12)] md:col-span-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(233,193,118,0.12),transparent_36%)]" />
                <div className="relative z-10">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-[linear-gradient(135deg,rgba(119,90,25,0.12),rgba(254,212,136,0.3))] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
                    <MdOutlineQueryStats
                      aria-hidden="true"
                      className="text-3xl text-secondary"
                    />
                  </div>
                  <h3 className="mb-2 font-headline-sm text-headline-sm text-primary">
                    CFO Advisory
                  </h3>
                  <p className="text-sm text-on-surface-variant">
                    Strategic financial leadership on a fractional basis for
                    capital allocation and M&amp;A support.
                  </p>
                </div>
                <div className="relative z-10 flex -space-x-3 overflow-hidden">
                  {advisoryAvatars.map((avatarSrc, index) => (
                    <Image
                      key={avatarSrc}
                      alt={`Advisor ${index + 1}`}
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      height={32}
                      sizes="32px"
                      src={avatarSrc}
                      width={32}
                    />
                  ))}
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary-fixed text-[10px] font-bold text-on-secondary-fixed ring-2 ring-white">
                    +12
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7f8f9_100%)] px-gutter py-section-padding-desktop">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(233,193,118,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(2,28,54,0.06),transparent_22%)]" />
          <div className="mx-auto flex max-w-container-max flex-col items-center gap-16 lg:flex-row">
            <div className="lg:w-1/2">
              <span className="mb-5 inline-flex rounded-full border border-white/70 bg-white/78 px-4 py-2 font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary shadow-sm backdrop-blur-xl">
                Treasury Visibility
              </span>
              <h2 className="mb-6 font-headline-md text-headline-md text-primary">
                Cash Flow Management: The Lifeblood of Your Enterprise
              </h2>
              <p className="mb-8 font-body-lg text-body-lg text-on-surface-variant">
                We don&apos;t just track your numbers; we predict your
                liquidity. Our predictive modeling helps UAE businesses manage
                working capital, optimize payables, and ensure steady growth
                through any market cycle.
              </p>
              <div className="space-y-4">
                {cashFlowCapabilities.map((capability, index) => (
                  <div
                    key={capability.title}
                    className="group flex items-start gap-4 rounded-[1.6rem] border border-white/70 bg-white/76 p-5 shadow-[0_18px_40px_rgba(0,26,51,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-[0_24px_52px_rgba(0,26,51,0.1)]"
                  >
                    <div
                      className={
                        index === 0
                          ? "rounded-[1rem] bg-secondary-container p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.24)]"
                          : "rounded-[1rem] bg-primary-container p-3 shadow-[0_14px_28px_rgba(0,26,51,0.12)]"
                      }
                    >
                      {index === 0 ? (
                        <MdTrendingUp
                          aria-hidden="true"
                          className="text-2xl text-on-secondary-container"
                        />
                      ) : (
                        <MdOutlineReceiptLong
                          aria-hidden="true"
                          className="text-2xl text-white"
                        />
                      )}
                    </div>
                    <div>
                      <h4 className="mb-1 font-headline-sm text-sm font-bold text-primary">
                        {capability.title}
                      </h4>
                      <p className="text-sm text-on-surface-variant">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {cashFlowSignals.map((signal) => (
                  <span
                    key={signal}
                    className="rounded-full border border-primary/10 bg-white/78 px-4 py-2 font-label-md text-[11px] uppercase tracking-[0.12em] text-primary/76 shadow-sm"
                  >
                    {signal}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-[2.2rem] border border-[#0e3558] bg-[linear-gradient(135deg,#001A33_0%,#07233f_60%,#143e61_100%)] p-8 text-white shadow-[0_28px_70px_rgba(0,26,51,0.2)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,193,118,0.16),transparent_34%)]" />
                <div className="relative z-10">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-white">Liquidity Index 2024</h5>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/56">
                      Rolling performance view
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-secondary" />
                    <span className="h-3 w-3 rounded-full bg-primary-container" />
                  </div>
                </div>

                <div className="space-y-6">
                  {liquidityMetrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="mb-2 flex justify-between">
                        <span className="text-xs font-bold uppercase text-white/64">
                          {metric.label}
                        </span>
                        <span className="text-xs font-bold text-white">
                          {metric.value}%
                        </span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                        <div
                          className={`h-full ${metric.colorClassName}`}
                          style={{ width: `${metric.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 grid grid-cols-3 gap-4 text-center">
                  {financialKpis.map((kpi, index) => (
                    <div
                      key={kpi.label}
                      className={
                        index === 2
                          ? "rounded-[1.2rem] bg-secondary-fixed p-4"
                          : "rounded-[1.2rem] border border-white/10 bg-white/8 p-4"
                      }
                    >
                      <div
                        className={
                          index === 2
                            ? "mb-1 text-[10px] uppercase tracking-widest text-on-secondary-fixed"
                            : "mb-1 text-[10px] uppercase tracking-widest text-white/56"
                        }
                      >
                        {kpi.label}
                      </div>
                      <div
                        className={
                          index === 2
                            ? "text-lg font-bold text-on-secondary-fixed"
                            : "text-lg font-bold text-primary"
                        }
                      >
                        {kpi.value}
                      </div>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="methodology"
          className="relative overflow-hidden bg-primary-container px-gutter py-section-padding-desktop text-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(233,193,118,0.18),transparent_34%)]" />
          <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] [background-size:40px_40px]" />
          <div className="relative z-10 mx-auto max-w-container-max text-center">
            <span className="mb-5 inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary-fixed backdrop-blur-xl">
              Delivery Framework
            </span>
            <h2 className="mb-4 font-headline-md text-headline-md">
              The Reyaansh Methodology
            </h2>
            <p className="mx-auto mb-12 max-w-2xl font-body-md text-body-md text-on-primary-container/78">
              A finance operating model that moves from disciplined transaction
              control to decision-ready reporting and executive action.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              {methodologySteps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-[1.8rem] border border-white/10 bg-white/6 p-6 text-left shadow-[0_22px_54px_rgba(0,0,0,0.12)] backdrop-blur-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-secondary/40 bg-white/6 text-lg font-bold text-secondary-fixed shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    {step.number}
                  </div>
                  <h4 className="mb-3 font-headline-sm text-sm text-white">
                    {step.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-on-primary-container/76">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-20">
              <div className="glass-card relative overflow-hidden rounded-[2.2rem] border border-white/14 p-4 shadow-[0_28px_80px_rgba(0,0,0,0.18)]">
                <Image
                  alt="Financial Operations Center"
                  className="h-80 w-full rounded-[1.6rem] border border-white/10 object-cover grayscale opacity-60 transition-all duration-700 hover:grayscale-0 hover:opacity-100"
                  data-alt="A cinematic, wide-angle shot of a high-tech financial monitoring center at night with wall-to-wall screens displaying global financial data and analysts silhouetted against the glow."
                  height={900}
                  sizes="100vw"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhTjSIUEMo4S3O6WtMBbrEQmXMfqcwEw831cpVexOMZOvGVxf3CVGizitCpZxuzlPJjsuRu3bFM859g-L2fahV5UcVmQeBOIIoOh-byxRhgEPTpMJmOsseXmes_yZWPmsz-k7nVJDw5vNciUOHKEYPVOkz8yInGXBs0FWAVt5rb3qiO9ZY25aXxr_dfJBeMb5-s1WDjXLYRcOi4VrUZqLh46DkBwZuxMxLhOcN-aWgbxomqho8ZKMWgPTAjppo9EuxktVDpjmNzJUw"
                  width={1600}
                />
                <div className="absolute inset-x-10 bottom-10 rounded-[1.6rem] border border-white/10 bg-[linear-gradient(135deg,rgba(0,26,51,0.92),rgba(18,57,92,0.82))] p-5 text-left text-white shadow-[0_24px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl">
                  <p className="font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary-fixed">
                    Integrated Oversight
                  </p>
                  <p className="mt-2 max-w-xl text-sm text-white/78">
                    Reporting, review, and cash visibility aligned into one
                    executive finance workflow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-gutter py-section-padding-desktop">
          <div className="group relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-[#0e3558] bg-[linear-gradient(135deg,#001A33_0%,#07233f_60%,#143e61_100%)] p-7 text-center text-white shadow-[0_28px_80px_rgba(0,26,51,0.24)] sm:p-12 md:rounded-[3rem] md:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(233,193,118,0.18),transparent_36%)]" />
            <div className="relative z-10">
            <span className="mb-5 inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary-fixed backdrop-blur-xl">
              Finance Transformation
            </span>
            <h2 className="mb-6 font-display-lg text-display-lg-mobile text-white md:text-display-lg">
              Optimize Your Financial Operations
            </h2>
            <p className="mb-10 font-body-lg text-body-lg text-white/76">
              Join elite UAE firms who have transformed their accounting from a
              compliance cost into a strategic asset.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#775a19_0%,#9d751f_100%)] px-7 py-4 font-label-md text-label-md uppercase tracking-[0.12em] text-white shadow-[0_18px_40px_rgba(119,90,25,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_rgba(119,90,25,0.34)] sm:px-10 sm:py-5 sm:tracking-[0.14em]"
              >
                Schedule an Audit Review
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/16 bg-white/8 px-7 py-4 font-label-md text-label-md uppercase tracking-[0.12em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/12 sm:px-10 sm:py-5 sm:tracking-[0.14em]"
              >
                Request a Proposal
              </a>
            </div>
            <p className="mt-8 text-xs font-medium uppercase tracking-widest text-white/52">
              Zero upfront commitment for initial consultation
            </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
