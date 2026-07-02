import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  MdAccountBalance,
  MdAdd,
  MdArrowForward,
  MdInsights,
  MdMemory,
  MdOutlineAccountBalanceWallet,
  MdPolicy,
  MdPrecisionManufacturing,
  MdPublic,
  MdRealEstateAgent,
  MdWorkspacePremium,
} from "react-icons/md";
import { HomeConsultationForm } from "@/components/home-consultation-form";
import { routes } from "@/lib/routes";

type EcosystemPillar = {
  bullets: readonly string[];
  cta: string;
  description: string;
  href: string;
  icon: string;
  isFeatured?: boolean;
  title: string;
};

const heroImage = "/hero-section.jpg";

const aboutImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBE15TUko7Vp_4f2UXXmgsRVJe7M1h6g3g_LKamD449Swz_W6gwIKewJGXwlwmDpF4acRc1_yK0Wl-xWMce2SU1OosppOm1Tq6AhDJ9ENqxyK9uD8iAkGfGBZFp4sYu8plMoLiTeLby2xJ1CMeR4_iRaXSWO9LA4e_2AZ57gCBB2u4ptOW7c6V2H081l5Sfig_I0NLUNmjzv-7g1yQ488Y_Cv0GuMuhHo9uFWIU1GZf700ugzxdaH34F1PP0upChTRBa7vY-4tuEF8M";

const textureImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB3vFSLx6pS9r8Q9-xjqxK8PfI0duE1eB3GWFcQgOgUJ4xT68y1H3_OaY9ndsOoECMuVNGaQCIHIj-sgASBYthDfBxDTlmtcdwzsqUIckXbHDg0YcSpTyXdhKZX24Q-jQKtBuQosZoM-pZVmcA3weUdEFnqObEG0IVEQQxCH6jOLBrbECBbfiy38-EfVlArWBZWmQY9OJqeEaLEVByUxolJ79afDVRJcX6xQ5aW5Bhdh-_NGhDSP5ukH1LDOQtHw7PATdIFv9xVPSNg";

const industryCards = [
  {
    href: routes.services,
    icon: "real_estate_agent",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQO7LRWL77_AarJEGcIASCEFC_aliyiTC0EqFjQwcjQLOGtoV3EsaBWRnffdGdDxTcOXD8MjAiwcTsvphBx3KRn2bHYq6INHHkjBOv8eRwdb6yiueC_aQUSaStT5Y904Yn4Y3mCTEIqKWRk22cvxlL7aGnI2QzIxvtoO016hLj7imrmvZu5qgzsWB6mYMkcQKdMUduMfwbXJDwjTC4Hq8ZAhsSwHoBj8YDK9rycehP0hlFJAnNMj2MQsYVeSTzNWpu29GexU5t-LT7",
    title: "Real Estate",
  },
  {
    href: routes.services,
    icon: "account_balance",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD5SZK3L9Vi2C9TSgPrL9YS_GUNFuWyhNhFTRGS654ngGMyDZMwp_JPEciwFMKGfngq7qkXiJQ_9rimZHbrd8lulj4m6nOujyIgvuVcSu1Cg2FHUjrEOaCyI1BV8hdbDCP7bPwFsaAz9tSFxqxHueHHOtJS1d1n2_LmtzgASB0KtCcUC3KajyXXiepW4uk3M_O8lwHEa9qs2owILweD0lQx7539YxCcSLSkE9ykHeZBnoWEtgCa6THMpOE-tglwPH3E5G_MoRiZ2TDr",
    title: "Finance",
  },
  {
    href: routes.services,
    icon: "memory",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDEdsuZgmuUlXt46EOXUoZrEOou9W3Qbu78C63jTrmFq6MZrBC2L_J6LRqViC5kdFCbI4oq6n6ZGEMBeB2noTX56HabdYuWFDzic1qO4Ffykkm8L_TOX8a503PnZ9QCEAp-3oKQmK9jcCv-P_AkoY4PQaXecj0FZ2fhI3XxkMX_EX2MaSGb5_UiNQIOKIQ3cYpTITXSSZLJLFu4D9oI7TDgLCHCON46DbN18ZscVI074K3y1loPIa2FNe4YgOw1WXSq4cmSdzjMNgUo",
    title: "IT & Tech",
  },
] as const;

const integratedServiceTags = [
  "Business Setup",
  "VAT Compliance",
  "Corporate Tax",
  "CFO Support",
] as const;

const commitmentMetrics = [
  { label: "Core Service Lines", value: "7" },
  { label: "Delivery Span", value: "End-to-End" },
  { label: "Market Focus", value: "UAE" },
] as const;

const commitmentCards = [
  {
    description:
      "Structures that support licensing, ownership, and scale.",
    eyebrow: "Structure",
    icon: "account_balance",
    title: "Bespoke Legal Structuring",
  },
  {
    description:
      "Integrated execution across tax, finance, and compliance.",
    eyebrow: "Control",
    icon: "policy",
    title: "Compliance by Design",
  },
] as const;

const sectorLabels = [
  "Real Estate",
  "Retail",
  "Automotive",
  "Metal & Precious Stones",
  "Oil & Gas",
  "Information Technology",
  "Healthcare",
  "Hospitality & Tourism",
  "Education",
  "Logistics",
] as const;

const advantagePillars = [
  {
    description:
      "Our teams operate across corporate tax, transfer pricing, VAT, bookkeeping, AML, and audit support instead of being boxed into a single narrow track.",
    eyebrow: "Breadth",
    title: "Cross-functional exposure that builds sharper judgment",
  },
  {
    description:
      "Clients receive hands-on thinking, accountable execution, and advisory support designed to create meaningful outcomes for ambitious businesses.",
    eyebrow: "Impact",
    title: "Real responsibility with commercially useful solutions",
  },
  {
    description:
      "The culture is built around curiosity, balance, and long-term development so growth feels sustainable for both the business and the people behind it.",
    eyebrow: "Growth",
    title: "A platform for long-range careers and trusted partnerships",
  },
] as const;

const insightArticles = [
  {
    href: routes.corporateTax,
    label: "Tax Strategy",
    summary:
      "Review penalties, refine filings, and reduce future exposure.",
    title: "Resolving UAE tax penalty issues",
  },
  {
    href: routes.businessSetup,
    label: "Business Setup",
    summary:
      "Compare routes early and avoid later licensing friction.",
    title: "Choosing the right setup route",
  },
  {
    href: routes.aml,
    label: "Compliance",
    summary:
      "Strengthen policies, workflows, and readiness before compliance pressure.",
    title: "Building stronger compliance control systems",
  },
] as const;

const ecosystemPillars: readonly EcosystemPillar[] = [
  {
    bullets: [
      "Mainland & Freezone Mastery",
      "DNFBP & AML Navigation",
      "Licensing Optimization",
    ],
    cta: "Explore Framework",
    description:
      "Deep-rooted relationships and profound understanding of UAE's evolving legal frameworks, ensuring your business is always ahead of the curve.",
    href: routes.businessSetup,
    icon: "policy",
    title: "Regulatory Insight",
  },
  {
    bullets: [
      "Corporate Tax Registration",
      "Quarterly Audit Cycles",
      "Treasury Management",
    ],
    cta: "View Systems",
    description:
      "Meticulous execution of tax, audit, and accounting functions that serve as the high-performance engine of your corporate structure.",
    href: routes.services,
    icon: "precision_manufacturing",
    isFeatured: true,
    title: "Operational Precision",
  },
  {
    bullets: [
      "Multi-Market Expansion Plans",
      "Estate & Succession Structuring",
      "Regulatory Impact Modeling",
    ],
    cta: "Analyze Future",
    description:
      "Predictive modeling and cross-jurisdictional strategy to future-proof your global footprint and maximize long-term capital efficiency.",
    href: routes.corporateTax,
    icon: "insights",
    title: "Strategic Foresight",
  },
] as const;

const faqItems = [
  {
    answer:
      "Every engagement is tailored to your sector, ownership structure, reporting needs, and stage of growth rather than forced into a rigid template.",
    question: "Do you offer customized solutions or standard packages?",
  },
  {
    answer:
      "Yes. Our support is structured to scale from formation and first registrations through recurring compliance, reporting, tax strategy, and finance operations.",
    question: "Can your services scale as our business grows?",
  },
  {
    answer:
      "We combine setup, compliance, finance, and advisory thinking so the work supports long-term efficiency and decision-making, not just one-off filings.",
    question: "What makes your advisory approach different?",
  },
  {
    answer:
      "Yes. We help review penalties, prepare reconsideration requests where appropriate, and tighten future compliance processes to reduce repeat exposure.",
    question: "Can you help with VAT or Corporate Tax penalties?",
  },
  {
    answer:
      "Businesses choose Reyaansh Advisors for end-to-end support, transparent execution, and practical guidance that helps growth stay compliant and financially clear.",
    question: "Why should I choose Reyaansh Advisors?",
  },
] as const;

const heroStats = [
  { icon: "workspace_premium", label: "Years Expertise", value: "5+" },
  { icon: "public", label: "Global Clients", value: "15+" },
  { icon: "account_balance_wallet", label: "Assets Advised", value: "$2M+" },
] as const;

const iconMap: Record<string, IconType> = {
  account_balance: MdAccountBalance,
  account_balance_wallet: MdOutlineAccountBalanceWallet,
  add: MdAdd,
  arrow_forward: MdArrowForward,
  insights: MdInsights,
  memory: MdMemory,
  policy: MdPolicy,
  precision_manufacturing: MdPrecisionManufacturing,
  public: MdPublic,
  real_estate_agent: MdRealEstateAgent,
  workspace_premium: MdWorkspacePremium,
};

function MaterialIcon({
  className = "",
  icon,
}: {
  className?: string;
  icon: string;
}) {
  const Icon = iconMap[icon];

  if (Icon) {
    return <Icon aria-hidden="true" className={className} />;
  }

  return (
    <span
      aria-hidden="true"
      className={`material-symbols-outlined ${className}`.trim()}
    >
      {icon}
    </span>
  );
}

export function HomePage() {
  return (
    <div className="topo-bg overflow-x-hidden bg-background font-body-md text-on-background">
      <main>
        <header className="relative isolate flex min-h-screen items-center overflow-hidden bg-primary pt-[9.5rem] md:pt-[8.5rem]">
          <div className="absolute inset-0 z-0">
            <Image
              alt="Ultra-modern corporate boardroom overlooking Dubai skyline at dusk"
              className="scale-105 object-cover"
              fill
              priority
              sizes="100vw"
              src={heroImage}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,193,118,0.18),transparent_24%),radial-gradient(circle_at_left_bottom,rgba(7,35,63,0.52),transparent_32%),linear-gradient(90deg,rgba(0,26,51,0.96),rgba(0,26,51,0.78),rgba(0,26,51,0.42))]" />
            <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-bl from-secondary/18 to-transparent blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-container-max px-gutter pb-[28rem] md:pb-[22rem] lg:pb-72">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.72fr)] lg:gap-12">
              <div className="max-w-4xl">
              <div className="mb-8 inline-flex max-w-full items-center gap-3 rounded-full border border-white/12 bg-white/8 px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl sm:gap-4 sm:px-5">
                <span className="hidden h-px w-16 bg-secondary sm:block" />
                <span className="font-label-md text-[10px] uppercase tracking-[0.18em] text-secondary sm:text-xs sm:tracking-[0.28em] lg:tracking-[0.4em]">
                  Sovereign Strategic Advisory
                </span>
              </div>

              <h1 className="mb-10 font-display-lg leading-[1.1] text-white">
                <span className="mb-2 block text-display-lg-mobile font-extrabold md:text-display-lg">
                  Building Businesses.
                </span>
                <span className="text-gradient-gold mb-4 block text-4xl font-semibold italic md:text-6xl">
                  Managing Numbers.
                </span>
                <span className="block text-3xl font-light opacity-90 md:text-5xl">
                  Ensuring Compliance.
                </span>
              </h1>

              <p className="mb-12 max-w-2xl font-body-lg text-white/80">
                Strategic advisory for business setup, tax, accounting, and
                compliance in the UAE. We help founders and growth-focused
                enterprises move from formation to financial clarity with
                precision and confidence.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                <Link
                  href={routes.services}
                  className="inline-flex items-center justify-center rounded-lg bg-[linear-gradient(135deg,#775a19_0%,#9d751f_100%)] px-7 py-4 font-label-md text-sm uppercase tracking-[0.14em] text-white shadow-[0_18px_40px_rgba(119,90,25,0.32)] transition-all hover:-translate-y-[2px] hover:shadow-[0_24px_50px_rgba(119,90,25,0.38)] sm:px-12 sm:py-5 sm:text-lg sm:tracking-widest"
                >
                  Initialize Strategy
                </Link>
                <Link
                  href="#specializations"
                  className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/6 px-7 py-4 font-label-md text-sm uppercase tracking-[0.14em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md transition-all hover:-translate-y-[2px] hover:bg-white/10 sm:px-12 sm:py-5 sm:text-lg sm:tracking-widest"
                >
                  Global Portfolio
                </Link>
              </div>
              </div>

              <div className="w-full lg:justify-self-end">
                <HomeConsultationForm />
              </div>
            </div>
          </div>

          
          <div className="absolute bottom-0 left-0 z-10 w-full px-gutter pb-12">
            <div className="mx-auto max-w-container-max">
              <div className="glass-dark-card relative overflow-hidden rounded-[2rem] border border-white/10 p-8 shadow-[0_28px_80px_rgba(0,0,0,0.24)] md:p-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_20%),radial-gradient(circle_at_left,rgba(233,193,118,0.12),transparent_26%),linear-gradient(135deg,rgba(255,255,255,0.03),transparent_58%)]" />
                <div className="relative z-10 flex flex-col items-start gap-10 md:flex-row md:items-center md:gap-0">
                {heroStats.map((stat, index) => (
                  <div key={stat.label} className="flex items-center gap-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-secondary/30 bg-white/4 text-secondary shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                      <MaterialIcon className="text-3xl" icon={stat.icon} />
                    </div>
                    <div>
                      <p className="text-3xl leading-tight font-bold text-white">
                        {stat.value}
                      </p>
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">
                        {stat.label}
                      </p>
                    </div>
                    {index < heroStats.length - 1 ? (
                      <div className="ml-auto hidden h-12 w-px bg-white/10 md:block" />
                    ) : null}
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="about"
          className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f5f7f8_100%)] py-section-padding-desktop"
        >
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-secondary-fixed/10 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-full w-1/4 bg-gradient-to-tr from-primary-container/8 to-transparent blur-3xl" />
          <div className="mx-auto flex max-w-container-max flex-col items-center gap-16 px-gutter lg:flex-row lg:gap-20">
            <div className="group relative w-full lg:w-[46%]">
              <div className="absolute -left-8 top-10 h-56 w-56 rounded-full bg-secondary/16 blur-3xl" />
              <div className="absolute right-0 top-6 hidden h-24 w-24 rounded-full border border-white/70 bg-white/70 shadow-[0_18px_40px_rgba(0,26,51,0.1)] backdrop-blur-xl lg:block" />
              <div className="glass-card relative z-10 rounded-[2.3rem] border border-white/75 p-4 shadow-[0_30px_70px_rgba(0,26,51,0.12)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem]">
                  <Image
                    alt="A professional interior of a high-end corporate office in Dubai"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    src={aboutImage}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,26,51,0.04),transparent_40%,rgba(0,26,51,0.58))]" />
                  <div className="absolute inset-x-5 bottom-5 rounded-[1.8rem] border border-white/12 bg-[linear-gradient(135deg,rgba(0,26,51,0.92),rgba(18,57,92,0.82))] p-5 text-white shadow-[0_24px_50px_rgba(0,26,51,0.24)] backdrop-blur-xl">
                    <span className="inline-flex rounded-full border border-white/10 bg-white/8 px-3 py-1.5 font-label-md text-[10px] uppercase tracking-[0.18em] text-secondary-fixed">
                      Integrated Advisory Desk
                    </span>
                    <h3 className="mt-3 font-headline-sm text-2xl leading-tight text-white">
                      From incorporation to reporting discipline.
                    </h3>
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-[1.2rem] border border-white/10 bg-white/8 p-4">
                        <p className="font-headline-md text-3xl text-secondary-fixed">
                          7
                        </p>
                        <p className="mt-1 font-label-md text-[10px] uppercase tracking-[0.16em] text-white/64">
                          Core Service Lines
                        </p>
                      </div>
                      <div className="rounded-[1.2rem] border border-white/10 bg-white/8 p-4">
                        <p className="font-headline-sm text-lg text-secondary-fixed">
                          One
                        </p>
                        <p className="mt-1 font-label-md text-[10px] uppercase tracking-[0.16em] text-white/64">
                          Coordinated Partner
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full space-y-6 lg:w-[54%]">
              <div className="space-y-4">
                <span className="inline-flex rounded-full border border-secondary/20 bg-white/80 px-4 py-2 font-label-md uppercase tracking-[0.18em] text-secondary shadow-sm backdrop-blur-xl">
                  Our Commitment
                </span>
                <h2 className="font-headline-md text-3xl leading-tight text-primary md:text-[2.6rem]">
                  Advisory designed to feel
                  {" "}
                  <span className="text-gradient-gold italic">coordinated</span>
                  , clear, and calm.
                </h2>
                <p className="max-w-2xl font-body-md leading-7 text-on-surface-variant">
                  Reyaansh Advisors brings business setup, tax, finance, and
                  compliance support together for growth-focused businesses in
                  the UAE.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {commitmentMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-[1.4rem] border border-white/70 bg-white/76 p-4 shadow-[0_20px_40px_rgba(0,26,51,0.06)]"
                  >
                    <p className="font-headline-sm text-xl text-primary">
                      {metric.value}
                    </p>
                    <p className="mt-1 font-label-md text-[10px] uppercase tracking-[0.16em] text-on-surface-variant">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {commitmentCards.map((card) => (
                  <div
                    key={card.title}
                    className="glass-card gold-accent-top group flex items-start gap-4 rounded-[1.7rem] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-[0_24px_52px_rgba(0,26,51,0.1)]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] bg-[linear-gradient(135deg,rgba(119,90,25,0.12),rgba(254,212,136,0.28))] text-secondary shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] transition-transform group-hover:scale-105">
                      <MaterialIcon className="text-[1.65rem]" icon={card.icon} />
                    </div>
                    <div>
                      <span className="font-label-md text-[10px] uppercase tracking-[0.18em] text-secondary">
                        {card.eyebrow}
                      </span>
                      <h4 className="mt-2 font-headline-sm text-lg text-primary">
                        {card.title}
                      </h4>
                      <p className="mt-1.5 text-sm leading-6 text-on-surface-variant">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2.5">
                {integratedServiceTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-secondary/20 bg-secondary-fixed/18 px-3.5 py-1.5 font-label-md text-[10px] uppercase tracking-[0.12em] text-primary shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#001A33_0%,#07233f_58%,#12395c_100%)] py-section-padding-desktop">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(233,193,118,0.18),transparent_35%)]" />
          <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-br from-white/4 to-transparent blur-3xl" />
          <div
            className="absolute inset-0 bg-cover opacity-5"
            style={{ backgroundImage: `url("${textureImage}")` }}
          />

          <div className="relative z-10 mx-auto max-w-container-max px-gutter">
            <div className="mb-14 text-center">
              <span className="mb-3 block font-label-md uppercase tracking-[0.32em] text-secondary">
                Unified Methodology
              </span>
              <h2 className="font-display-lg text-4xl text-white md:text-5xl">
                Strategic Advisory Ecosystem
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-body-lg text-white/60">
                An integrated platform of intelligence, execution, and
                foresight designed for the modern enterprise.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {ecosystemPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className={`glass-dark-card group relative flex flex-col overflow-hidden rounded-[2.3rem] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-2 hover:border-secondary/50 hover:shadow-[0_30px_80px_rgba(0,0,0,0.22)] ${
                    pillar.isFeatured
                      ? "z-20 scale-105 border-secondary/30 bg-primary/60 shadow-2xl"
                      : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,193,118,0.14),transparent_32%),linear-gradient(145deg,rgba(255,255,255,0.04),transparent_58%)]" />
                  <div className="relative z-10 flex h-full flex-col">
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${
                      pillar.isFeatured
                        ? "bg-secondary shadow-lg shadow-secondary/20"
                        : "border border-secondary/30 bg-primary/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-transform group-hover:scale-110"
                    }`}
                  >
                    <MaterialIcon
                      className={`text-4xl ${
                        pillar.isFeatured ? "text-white" : "text-secondary"
                      }`}
                      icon={pillar.icon}
                    />
                  </div>

                  <h3 className="mb-4 font-headline-sm text-[1.45rem] text-white">
                    {pillar.title}
                  </h3>
                  <p className="mb-6 flex-grow font-body-md text-white/70">
                    {pillar.description}
                  </p>
                  <ul className="mb-7 space-y-3 text-sm text-white/50">
                    {pillar.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-3">
                        <span className="h-1 w-1 rounded-full bg-secondary" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={pillar.href}
                    className="flex items-center gap-2 font-label-md text-xs uppercase tracking-widest text-secondary transition-transform group-hover:translate-x-2"
                  >
                    {pillar.cta}
                    <MaterialIcon className="text-sm" icon="arrow_forward" />
                  </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 flex flex-col items-center">
              <div className="mb-6 h-10 w-px bg-gradient-to-b from-secondary/50 to-transparent" />
              <Link
                href={routes.contact}
                className="rounded-full border border-white/20 bg-white/6 px-10 py-4 font-label-md uppercase tracking-widest text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all hover:-translate-y-0.5 hover:border-secondary"
              >
                Access the Intelligence Portal
              </Link>
            </div>
          </div>
        </section>

        <section
          id="specializations"
          className="relative overflow-hidden bg-surface py-section-padding-desktop"
        >
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-secondary-fixed/10 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-full w-1/4 bg-gradient-to-tr from-primary-container/6 to-transparent blur-3xl" />
          <div className="mx-auto max-w-container-max px-gutter">
            <div className="mb-20 flex flex-col justify-between gap-12 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <span className="mb-4 inline-flex rounded-full border border-secondary/20 bg-white/80 px-4 py-2 font-label-md uppercase tracking-[0.18em] text-secondary shadow-sm backdrop-blur-xl">
                  Sectors We Serve
                </span>
                <h2 className="font-headline-md text-4xl leading-tight text-primary md:text-5xl">
                  Elite Industry Specializations
                </h2>
              </div>
              <p className="max-w-xs font-body-md italic text-on-surface-variant">
                Industry-shaped tax, regulatory, and financial support for
                operators managing complexity across the UAE market.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {industryCards.map((industry) => (
                <Link
                  key={industry.title}
                  href={industry.href}
                  className="group relative h-[300px] overflow-hidden rounded-[2rem] border border-white/70 shadow-[0_24px_60px_rgba(0,26,51,0.12)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(0,26,51,0.16)]"
                >
                  <Image
                    alt={industry.title}
                    className="absolute inset-0 h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    src={industry.image}
                  />
                  <div className="absolute inset-0 bg-primary/60 transition-all duration-500 group-hover:bg-primary/20" />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[rgba(0,26,51,0.5)] to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-start justify-between p-8 text-white">
                    <MaterialIcon className="text-3xl text-secondary" icon={industry.icon} />
                    <div>
                      <h4 className="font-headline-sm text-2xl transition-colors group-hover:text-secondary-fixed">
                        {industry.title}
                      </h4>
                      <div className="mt-2 h-0.5 w-0 bg-secondary transition-all duration-500 group-hover:w-full" />
                    </div>
                  </div>
                </Link>
              ))}

              <Link
                href={routes.services}
                className="group relative h-[300px] overflow-hidden rounded-[2rem] border border-[#0e3558] shadow-[0_24px_60px_rgba(0,26,51,0.18)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(0,26,51,0.22)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,193,118,0.16),transparent_34%)]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[linear-gradient(135deg,#001A33_0%,#07233f_60%,#143e61_100%)] p-8 text-center">
                  <p className="mb-4 font-label-md uppercase tracking-[0.18em] text-secondary sm:tracking-[0.3em]">
                    View All
                  </p>
                  <h4 className="mb-6 font-headline-md text-2xl text-white">
                    Explore 12+ Specializations
                  </h4>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-secondary text-secondary transition-all group-hover:bg-secondary group-hover:text-white">
                    <MaterialIcon icon="arrow_forward" />
                  </div>
                </div>
              </Link>
            </div>

            <div className="mt-10 rounded-[2rem] border border-white/70 bg-white/78 p-8 shadow-[0_24px_60px_rgba(0,26,51,0.08)] backdrop-blur-xl">
              <p className="mb-5 max-w-3xl font-body-md leading-relaxed text-on-surface-variant">
                Our advisory model extends across the wider commercial sectors
                Reyaansh Advisors serves, ensuring the website reflects the full
                range of industries supported by the practice.
              </p>
              <div className="flex flex-wrap gap-3">
                {sectorLabels.map((sector) => (
                  <span
                    key={sector}
                    className="rounded-full border border-primary/10 bg-surface-container-low px-4 py-2 font-label-md text-[11px] uppercase tracking-[0.15em] text-primary/75"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#001A33_0%,#07233f_58%,#12395c_100%)] py-section-padding-desktop text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(233,193,118,0.18),transparent_28%)]" />
          <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-white/6 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-container-max px-gutter">
            <div className="mb-14 max-w-3xl">
              <span className="inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 font-label-md uppercase tracking-[0.2em] text-secondary-fixed">
                Our Unique Advantage
              </span>
              <h2 className="mt-5 font-headline-md text-4xl leading-tight text-white md:text-5xl">
                A more complete advisory platform for clients and future team
                members.
              </h2>
              <p className="mt-5 max-w-2xl font-body-lg text-white/70">
                Reyaansh Advisors is built to create broader technical depth,
                sharper ownership, and long-term growth across tax, finance,
                regulatory, and compliance workstreams.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {advantagePillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="glass-dark-card rounded-[2rem] border border-white/10 p-8 shadow-[0_24px_60px_rgba(0,0,0,0.16)]"
                >
                  <span className="inline-flex rounded-full border border-secondary/20 bg-white/8 px-3 py-1.5 font-label-md text-[11px] uppercase tracking-[0.16em] text-secondary-fixed">
                    {pillar.eyebrow}
                  </span>
                  <h3 className="mt-5 font-headline-sm text-2xl text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 font-body-md leading-relaxed text-white/68">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-[0_24px_60px_rgba(0,0,0,0.12)] md:flex-row md:items-center">
              <div className="max-w-2xl">
                <p className="font-headline-sm text-2xl text-white">
                  Interested in working with or joining Reyaansh Advisors?
                </p>
                <p className="mt-3 font-body-md text-white/70">
                  Send your enquiry or CV to
                  {" "}
                  <a
                    className="text-secondary-fixed underline decoration-white/20 underline-offset-4"
                    href="mailto:info@reyaanshadvisors.com"
                  >
                    info@reyaanshadvisors.com
                  </a>
                  {" "}
                  and our team will guide the next step.
                </p>
              </div>
              <a
                className="inline-flex items-center justify-center rounded-full bg-secondary px-5 py-3 font-label-md uppercase tracking-[0.16em] text-white shadow-[0_18px_40px_rgba(119,90,25,0.28)] transition-all hover:-translate-y-0.5 hover:bg-secondary-fixed-dim hover:text-primary"
                href="mailto:info@reyaanshadvisors.com?subject=Career%20Application"
              >
                Submit Your CV
              </a>
            </div>
          </div>
        </section>

        <section
          id="insights"
          className="relative overflow-hidden topo-bg bg-surface-container-highest py-20 md:py-24"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(233,193,118,0.08),transparent_42%)]" />
          <div className="mx-auto max-w-container-max px-gutter">
            <div className="grid items-start gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <span className="mb-4 inline-flex rounded-full border border-secondary/20 bg-white/80 px-3 py-1.5 font-label-md text-[10px] uppercase tracking-[0.16em] text-secondary shadow-sm backdrop-blur-xl">
                  Voices of Success
                </span>
                <h2 className="mb-6 font-headline-md text-3xl text-primary md:text-[2.3rem]">
                  The Sovereign Experience
                </h2>

                <div className="space-y-4">
                  <div className="glass-card relative overflow-hidden rounded-[1.5rem] border-white/70 p-5 shadow-[0_20px_44px_rgba(0,26,51,0.08)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(233,193,118,0.12),transparent_36%)]" />
                    <div className="relative border-l-2 border-secondary/30 pl-6">
                    <span className="absolute left-[-10px] top-0 font-serif text-4xl leading-none text-secondary/20">
                      &ldquo;
                    </span>
                    <p className="mb-4 font-body-md text-base italic leading-7 text-primary">
                      &quot;Reyaansh Advisors navigated our complex
                      multi-jurisdictional setup with absolute precision. Their
                      discretion and strategic foresight are unparalleled in the
                      UAE market.&quot;
                    </p>
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                        MT
                      </div>
                      <div>
                        <p className="text-[13px] font-bold text-primary">Marcus Thorne</p>
                        <p className="text-[10px] uppercase tracking-[0.16em] text-on-surface-variant">
                          CEO, Global Tech Hub
                        </p>
                      </div>
                    </div>
                    </div>
                  </div>

                  <div className="glass-card relative overflow-hidden rounded-[1.5rem] border-white/70 p-5 shadow-[0_20px_44px_rgba(0,26,51,0.08)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(233,193,118,0.12),transparent_36%)]" />
                    <div className="relative border-l-2 border-secondary/30 pl-6">
                    <span className="absolute left-[-10px] top-0 font-serif text-4xl leading-none text-secondary/20">
                      &ldquo;
                    </span>
                    <p className="mb-4 font-body-md text-base italic leading-7 text-primary">
                      &quot;The transition to UAE Corporate Tax was seamless
                      thanks to their proactive auditing and planning. They are
                      strategic partners.&quot;
                    </p>
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                        SAM
                      </div>
                      <div>
                        <p className="text-[13px] font-bold text-primary">
                          Sarah Al-Maktoum
                        </p>
                        <p className="text-[10px] uppercase tracking-[0.16em] text-on-surface-variant">
                          Director, Orient Retail Group
                        </p>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/70 bg-white p-6 shadow-[0_24px_54px_rgba(0,26,51,0.1)] lg:col-span-7 md:p-7">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,193,118,0.12),transparent_34%)]" />
                <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="font-headline-md text-xl text-primary md:text-[1.65rem]">
                    Insights, Blogs & FAQs
                  </h3>
                  <Link
                    className="border-b border-secondary font-label-md text-[10px] uppercase tracking-[0.16em] text-secondary"
                    href={routes.services}
                  >
                    Explore Services
                  </Link>
                </div>

                <div className="mb-6 grid gap-2.5 md:grid-cols-3">
                  {insightArticles.map((article) => (
                    <Link
                      key={article.title}
                      href={article.href}
                      className="group flex h-full flex-col rounded-[1.1rem] border border-primary/8 bg-surface-container-low px-3.5 py-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:bg-white hover:shadow-[0_16px_36px_rgba(0,26,51,0.08)]"
                    >
                      <span className="font-label-md text-[10px] uppercase tracking-[0.16em] text-secondary">
                        {article.label}
                      </span>
                      <h4 className="mt-2 min-h-[3rem] font-headline-sm text-[15px] leading-6 text-primary transition-colors group-hover:text-secondary">
                        {article.title}
                      </h4>
                      <p className="mt-2 min-h-[2.5rem] font-body-md text-[12px] leading-5 text-on-surface-variant">
                        {article.summary}
                      </p>
                      <div className="mt-auto pt-3 inline-flex items-center gap-1.5 font-label-md text-[10px] uppercase tracking-[0.12em] text-primary/60 transition-all group-hover:gap-2 group-hover:text-secondary">
                        Read More
                        <MaterialIcon className="text-sm" icon="arrow_forward" />
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mb-4 rounded-[1.1rem] border border-secondary/15 bg-secondary-fixed/12 px-3.5 py-3">
                  <p className="font-body-md text-[12px] leading-5 text-on-surface-variant">
                    Need a different answer? Reach our team directly at
                    {" "}
                    <a
                      className="font-semibold text-primary underline decoration-secondary/40 underline-offset-4"
                      href="mailto:info@reyaanshadvisors.com"
                    >
                      info@reyaanshadvisors.com
                    </a>
                    .
                  </p>
                </div>

                <div className="divide-y divide-outline-variant">
                  {faqItems.map((item, index) => (
                    <details
                      key={item.question}
                      className="group rounded-2xl px-2.5 py-4 transition-colors hover:bg-surface-container-low"
                      open={index === 0}
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                        <h4 className="font-headline-sm text-base text-primary transition-colors group-hover:text-secondary">
                          {item.question}
                        </h4>
                        <MaterialIcon
                          className="shrink-0 text-secondary transition-transform duration-300 group-open:rotate-180"
                          icon="add"
                        />
                      </summary>
                      <div className="pt-3 font-body-md text-[13px] leading-6 text-on-surface-variant">
                        {item.answer}
                      </div>
                    </details>
                  ))}
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface py-24">
          <div className="mx-auto max-w-container-max px-gutter">
            <div className="group relative overflow-hidden rounded-[2rem] border border-[#0e3558] bg-[linear-gradient(135deg,#001A33_0%,#07233f_60%,#143e61_100%)] p-7 text-center text-white shadow-[0_28px_80px_rgba(0,26,51,0.24)] sm:p-12 md:rounded-[3rem] md:p-24">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{ backgroundImage: `url("${textureImage}")` }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(233,193,118,0.18),transparent_36%)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />

              <div className="relative z-10">
                <span className="mb-8 block font-label-md uppercase tracking-[0.5em] text-secondary">
                  Final Step to Excellence
                </span>
                <h2 className="mb-8 font-display-lg text-display-lg-mobile md:text-5xl">
                  Ready to Expand Your Business in the UAE?
                </h2>
                <p className="mx-auto mb-12 max-w-2xl font-body-lg text-white/70">
                  Join the ranks of successful international enterprises. Our
                  strategic experts are ready to guide your journey from day
                  zero.
                </p>
                <Link
                  href={routes.contact}
                  className="inline-flex items-center justify-center rounded-full bg-secondary px-7 py-4 font-headline-sm text-sm uppercase tracking-[0.14em] text-white shadow-2xl transition-all hover:scale-105 hover:bg-secondary-fixed-dim hover:text-primary sm:px-10 sm:tracking-widest"
                >
                  Schedule Strategic Audit
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
