import Image from "next/image";
import Link from "next/link";
import {
  MdAccountBalance,
  MdApartment,
  MdArrowForward,
  MdArrowOutward,
  MdDiamond,
  MdDirectionsCar,
  MdGavel,
  MdHotel,
  MdLocalGasStation,
  MdLocalShipping,
  MdMedicalServices,
  MdNorthEast,
  MdSchool,
  MdShoppingBag,
  MdTerminal,
  MdVerified,
} from "react-icons/md";
import type { IconType } from "react-icons";
import { routes } from "@/lib/routes";

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCJXKEw6BJKaSayBPc9GKuhml7R3XQH86BQjjpR6uoJeu6jr5xxspT2z9ps2v17GeD6KCTAXXq_r1_cFz_6iwJ_C0AiJTo2yP7JUOSSFsjQSS_yGr2a2dpwGPDpFwW0qp97s1mSlFCyr69Dn5DTlK9Paw_9I1yAIhjmzkRITSf_xHqVTM0uoJOKcIOvoFgLrA3TrODaA4oWqXLoNp5u2tdzHITEfmPJ2YSukg-Y4e5jn8Mf4PdFDo5_193d_N-R--RmA-2j499Zdpk_";

const realEstateImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ_a8-6-8Hhit5BIbCjy3l9VldxsVNjAfc8dt7s0Eyr2MFTgtY8R4LWHHZ6uTLhnafnJqr1H6XfwYz_qHvndcvRaz4Ewt7UxeMxofSt2ZAR4wrcEmMuE01DqLIukzqP9WZQTxgooy0L1dHCsW6Azs6O0Wp_g0DVEdAyTS1bd4GPGitETGXWzoqB3rYGZnTpWLDulLOFIjg4Ublkx7yGy5HLYSi9KgIhIyBVz3p2JUjbfoTRZukkg_sQc_4vQDBanRrNaD105OlVfqI";

const hospitalityImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuALdEfi6CbqmMbKlCGXJSmugax_xjImehQCiXqhLlJqX_N1diwteY3Iob4g5XTzSx37Ez7q3AwgUR3UX1_VvDmQJUFBAzEfzqFAspwkNvlpMzIbSKSYWpViBqTSdTA69gtDlmjSXZr0VvoeHosiktLe6K0blV_mazHcJbhBM-Hz2bvdPQYq1QOQRvBDE4rxXwIKfVc7ev9nuNmODoWHvCJW5ufp1DzfK1jrMUc9MMfnsMsylK9plz_4yQqSMwIAXFz8qYxvI_ILw1Gy";

type CompactSector = {
  description: string;
  icon: IconType;
  theme: "light" | "dark" | "glass";
  title: string;
};

const compactSectors: CompactSector[] = [
  {
    description: "Global brand VAT & distribution.",
    icon: MdShoppingBag,
    theme: "glass",
    title: "Retail",
  },
  {
    description: "Fintech & IP regulatory setups.",
    icon: MdTerminal,
    theme: "dark",
    title: "IT & Tech",
  },
  {
    description: "Pharma & clinical management.",
    icon: MdMedicalServices,
    theme: "light",
    title: "Healthcare",
  },
  {
    description: "Institutional campus finance.",
    icon: MdSchool,
    theme: "light",
    title: "Education",
  },
];

function compactSectorClasses(theme: CompactSector["theme"]) {
  if (theme === "dark") {
    return "bg-[#0f1d29] text-white";
  }

  if (theme === "glass") {
    return "border border-primary/10 bg-white/42 text-primary backdrop-blur-xl";
  }

  return "border border-outline-variant/30 bg-white text-primary shadow-sm hover:shadow-xl";
}

export function SectorsPage() {
  return (
    <main className="overflow-hidden bg-background text-on-surface">
      <section className="relative flex min-h-[76vh] items-center overflow-hidden bg-primary-container pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Executive skyscraper perspective"
            className="object-cover opacity-55"
            fill
            priority
            sizes="100vw"
            src={heroImage}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container/85 via-primary-container/40 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-container-max px-gutter py-20">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-4">
              <div className="h-0.5 w-16 bg-secondary" />
              <span className="font-label-md text-[12px] uppercase tracking-[0.18em] text-secondary-fixed sm:text-label-md sm:tracking-[0.3em]">
                Sector Intelligence
              </span>
            </div>
            <h1 className="mb-8 font-display-lg text-display-lg-mobile leading-tight text-white md:text-[80px] md:leading-none">
              Elite Domain <br />
              <span className="text-gradient-gold">Specialization</span>
            </h1>
            <p className="max-w-xl border-l-2 border-secondary/30 pl-8 font-body-lg text-body-lg leading-relaxed text-white/86">
              Delivering high-precision advisory across the UAE&apos;s primary
              economic engines. Our domain experts merge local jurisdictional
              nuance with international regulatory standards.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-surface py-section-padding-desktop">
        <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent" />
        <div className="mx-auto max-w-container-max px-gutter">
          <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="mb-6 font-display-lg text-headline-md text-primary md:text-5xl">
                Market-Leading Domains
              </h2>
              <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
                Dedicated sector teams providing nuanced advisory services
                across the most critical verticals of the Gulf economy.
              </p>
            </div>
            <div className="flex items-center gap-3 pb-2 font-label-md uppercase tracking-widest text-secondary">
              <span>Corporate Tier 1</span>
              <MdVerified aria-hidden="true" className="text-sm" />
            </div>
          </div>

          <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12">
            <article className="group relative min-h-[380px] overflow-hidden rounded-xl sm:min-h-[440px] lg:col-span-8 lg:row-span-2 lg:min-h-[500px]">
              <Image
                alt="Luxury Real Estate"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                src={realEstateImage}
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[rgba(2,28,54,0.88)] to-[rgba(2,28,54,0.2)] p-8 text-white transition-colors duration-500 group-hover:from-[rgba(2,28,54,0.96)] md:p-12">
                <div className="mb-auto">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 backdrop-blur-md">
                    <MdApartment aria-hidden="true" className="text-2xl text-secondary-fixed" />
                  </div>
                </div>
                <div className="max-w-lg">
                  <h3 className="mb-4 font-headline-md text-4xl">
                    Real Estate & Construction
                  </h3>
                  <p className="mb-8 font-body-md leading-relaxed text-white/80">
                    Strategic tax structuring and cross-border regulatory
                    compliance for the region&apos;s most ambitious
                    architectural developments and investment vehicles.
                  </p>
                  <Link
                    className="inline-flex items-center gap-3 rounded bg-white px-8 py-3 font-label-md uppercase tracking-widest text-primary transition-colors hover:bg-secondary hover:text-white"
                    href={routes.contact}
                  >
                    Explore Domain <MdArrowOutward aria-hidden="true" className="text-sm" />
                  </Link>
                </div>
              </div>
            </article>

            <article className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-primary-container p-8 text-white lg:col-span-4">
              <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(135deg,rgba(255,255,255,0.16)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.16)_50%,rgba(255,255,255,0.16)_75%,transparent_75%,transparent)] [background-size:24px_24px]" />
              <div className="relative z-10">
                <MdLocalGasStation aria-hidden="true" className="mb-6 text-4xl text-secondary-fixed" />
                <h3 className="mb-3 font-headline-sm text-headline-sm">
                  Oil & Gas
                </h3>
                <p className="font-body-md text-white/78">
                  Energy transition advisory and complex concession compliance.
                </p>
              </div>
              <Link
                className="relative z-10 flex items-center gap-2 pt-4 font-label-md text-secondary-fixed transition-colors hover:text-white"
                href={routes.contact}
              >
                SECTOR BRIEF <MdArrowForward aria-hidden="true" className="text-sm" />
              </Link>
            </article>

            <article className="group flex flex-col justify-between rounded-xl border border-outline-variant/30 bg-surface-container-highest p-8 lg:col-span-4">
              <div>
                <MdLocalShipping aria-hidden="true" className="mb-6 text-4xl text-primary" />
                <h3 className="mb-3 font-headline-sm text-headline-sm text-primary">
                  Logistics & Trade
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  Supply chain optimization for the UAE&apos;s global maritime
                  and aviation hubs.
                </p>
              </div>
              <Link
                className="flex items-center gap-2 pt-4 font-label-md uppercase tracking-wider text-primary transition-colors hover:text-secondary"
                href={routes.contact}
              >
                Logistics Hubs <MdNorthEast aria-hidden="true" className="text-sm" />
              </Link>
            </article>

            {compactSectors.slice(0, 2).map((sector) => (
              <article
                key={sector.title}
                className={`group relative flex flex-col justify-end overflow-hidden rounded-xl p-8 transition-all duration-500 hover:-translate-y-1 lg:col-span-3 ${compactSectorClasses(sector.theme)}`}
              >
                <sector.icon
                  aria-hidden="true"
                  className={`absolute top-8 right-8 text-5xl ${
                    sector.theme === "dark" ? "text-secondary-fixed" : "text-secondary/40"
                  }`}
                />
                <h3 className="mb-2 font-headline-sm text-headline-sm">
                  {sector.title}
                </h3>
                <p
                  className={`font-label-md ${
                    sector.theme === "dark"
                      ? "text-tertiary-fixed-dim"
                      : "text-on-surface-variant"
                  }`}
                >
                  {sector.description}
                </p>
              </article>
            ))}

            <article className="group relative min-h-[360px] overflow-hidden rounded-xl lg:col-span-6 lg:row-span-2 lg:min-h-[400px]">
              <Image
                alt="Hospitality"
                className="object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                src={hospitalityImage}
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[rgba(2,28,54,0.88)] to-[rgba(2,28,54,0.2)] p-8 text-white md:p-10">
                <MdHotel aria-hidden="true" className="mb-6 text-5xl text-secondary-fixed" />
                <h3 className="mb-4 font-headline-md text-3xl">
                  Hospitality & Luxury Tourism
                </h3>
                <p className="mb-6 max-w-md font-body-md text-white/80">
                  Comprehensive financial audits for elite hotel chains and
                  leisure destinations across the GCC.
                </p>
                <Link
                  className="w-fit border-b border-white/30 pb-1 font-label-md uppercase tracking-widest text-white transition-colors hover:border-white"
                  href={routes.contact}
                >
                  Service Catalog
                </Link>
              </div>
            </article>

            {compactSectors.slice(2).map((sector) => (
              <article
                key={sector.title}
                className={`group flex flex-col justify-between rounded-xl p-8 transition-all duration-500 hover:-translate-y-1 lg:col-span-3 ${compactSectorClasses(sector.theme)}`}
              >
                <sector.icon aria-hidden="true" className="text-3xl text-secondary" />
                <div>
                  <h3 className="mb-1 font-headline-sm text-headline-sm">
                    {sector.title}
                  </h3>
                  <p className="font-label-md text-on-surface-variant">
                    {sector.description}
                  </p>
                </div>
              </article>
            ))}

            <article className="group relative flex items-center justify-between overflow-hidden rounded-xl border border-secondary/20 bg-gradient-to-br from-white to-secondary-container/10 p-8 lg:col-span-6">
              <div className="max-w-xs">
                <h3 className="mb-3 font-headline-md text-headline-md text-primary">
                  Metals & Gems
                </h3>
                <p className="mb-4 font-body-md text-on-surface-variant">
                  Specialized AML and trade advisory for global commodity
                  traders in DMCC.
                </p>
                <Link
                  className="border-b border-secondary/20 pb-0.5 font-label-md uppercase text-secondary"
                  href={routes.contact}
                >
                  Trade Expertise
                </Link>
              </div>
              <MdDiamond
                aria-hidden="true"
                className="absolute -right-4 -bottom-4 text-[100px] text-secondary/20 transition-transform duration-700 group-hover:scale-110"
              />
            </article>

            <article className="group relative flex flex-col justify-center overflow-hidden rounded-xl bg-primary-container p-8 text-center text-white lg:col-span-6">
              <div className="absolute inset-0 opacity-5 [background-image:radial-gradient(circle,#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />
              <MdDirectionsCar
                aria-hidden="true"
                className="relative z-10 mx-auto mb-4 text-4xl text-secondary-fixed"
              />
              <h3 className="relative z-10 mb-2 font-headline-md text-headline-md">
                Automotive Excellence
              </h3>
              <p className="relative z-10 mx-auto max-w-sm font-body-md text-white/80">
                Tax optimization and franchise advisory for regional Tier 1
                automotive groups.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0f1d29] py-section-padding-desktop text-tertiary-fixed">
        <div className="absolute inset-0 opacity-5 [background-image:radial-gradient(circle,#fed488_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="relative z-10 mx-auto max-w-container-max px-gutter">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="group relative">
              <div className="absolute -inset-4 bg-secondary/20 opacity-0 blur-3xl transition-opacity duration-1000 group-hover:opacity-100" />
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-inverse-surface p-4 shadow-2xl">
                <Image
                  alt="Mechanical Precision"
                  className="rounded-xl object-cover transition-transform duration-[3000ms] group-hover:scale-95"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  src={hospitalityImage}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <span className="font-label-md text-[10px] uppercase tracking-[0.18em] text-secondary-fixed sm:text-xs sm:tracking-[0.3em] lg:tracking-[0.4em]">
                    UAE Business Advisory
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-10">
              <div className="inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-5 py-2">
                <span className="h-2 w-2 rounded-full bg-secondary-fixed" />
                <span className="font-label-md text-xs uppercase tracking-widest text-secondary-fixed">
                  UAE Advisory Coverage
                </span>
              </div>
              <h2 className="font-display-lg text-4xl leading-tight text-white md:text-6xl">
                Practical Advisory for{" "}
                <span className="text-gradient-gold italic">UAE Sectors</span>
              </h2>
              <p className="font-body-lg text-xl leading-relaxed text-tertiary-fixed-dim">
                Each sector brings its own licensing, tax, VAT, accounting,
                audit, and compliance requirements. We help businesses align
                their structure, reporting, and regulatory obligations with the
                way they actually operate in the UAE market.
              </p>
              <div className="grid gap-12 pt-4 sm:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                    <MdGavel aria-hidden="true" className="text-2xl text-secondary-fixed" />
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-white">
                    Regulatory Compliance
                  </h4>
                  <p className="font-body-md leading-relaxed text-tertiary-fixed-dim/70">
                    Support for corporate tax, VAT, AML, UBO, ESR, and other
                    compliance requirements across relevant UAE authorities.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                    <MdAccountBalance
                      aria-hidden="true"
                      className="text-2xl text-secondary-fixed"
                    />
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-white">
                    Business Structure Advisory
                  </h4>
                  <p className="font-body-md leading-relaxed text-tertiary-fixed-dim/70">
                    Guidance on Mainland, Free Zone, and Offshore structures so
                    your sector, license activity, and growth plans stay aligned.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface py-section-padding-desktop">
        <div className="relative z-10 mx-auto max-w-container-max px-gutter">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-primary-container p-10 text-center md:p-24">
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-secondary/10 blur-[120px]" />
            <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
            <div className="relative z-10">
              <h2 className="mx-auto mb-8 max-w-3xl font-display-lg text-headline-md text-white md:text-5xl">
                Elevate Your Sector Strategy with Elite Intelligence
              </h2>
              <p className="mx-auto mb-12 max-w-2xl font-body-lg text-white/80">
                Partner with domain-specific experts who understand the
                complexity of your industry. Schedule a confidential executive
                assessment today.
              </p>
              <div className="flex flex-col justify-center gap-6 sm:flex-row">
                <Link
                  className="rounded-lg bg-secondary px-7 py-4 font-label-md text-label-md uppercase tracking-[0.14em] text-white shadow-2xl transition-all duration-500 hover:bg-white hover:text-primary sm:px-12 sm:py-5 sm:tracking-[0.2em]"
                  href={routes.contact}
                >
                  Book Consultation
                </Link>
                <Link
                  className="rounded-lg border border-white/20 px-7 py-4 font-label-md text-label-md uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-all hover:bg-white/10 sm:px-12 sm:py-5 sm:tracking-[0.2em]"
                  href={routes.services}
                >
                  Download Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
