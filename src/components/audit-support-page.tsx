import Image from "next/image";
import {
  MdCheckCircle,
  MdOutlineAnalytics,
  MdOutlineDescription,
  MdOutlineSecurity,
  MdSupportAgent,
} from "react-icons/md";

const checklistItems = [
  {
    description:
      "Alignment of FTA returns with annual financial statements.",
    title: "VAT & Tax Reconciliation",
  },
  {
    description:
      "Physical verification and depreciation schedule accuracy.",
    title: "Fixed Asset Verification",
  },
  {
    description:
      "Verification of all statutory filings and corporate governance logs.",
    title: "Legal & Board Minutes Review",
  },
  {
    description:
      "Proper documentation for transfer pricing and related party dealings.",
    title: "Inter-company Transactions",
  },
  {
    description:
      "Develop the necessary documentation for audits. We assist businesses in preparing and organizing the documentation required for statutory audits. Our team develops audit-ready schedules, reconciliations, and supporting working papers.",
    title: "Document Forensic Review",
  },
  {
    description:
      "We assist financial institutions and businesses in meeting their obligations under the Foreign Account Tax Compliance Act (FATCA) and Common Reporting Standard (CRS). Our services include classification assessments, due diligence reviews, reporting support, and compliance framework implementation to ensure adherence to local regulatory requirements and international reporting standards.",
    title: "FATCA and CRS Compliance",
  },
] as const;

export function AuditSupportPage() {
  return (
    <div className="bg-background text-on-surface font-body-md">
      <main>
        <header className="relative overflow-hidden px-gutter pt-36 pb-section-padding-desktop">
          <div className="mx-auto grid max-w-container-max items-center gap-12 md:grid-cols-2">
            <div className="relative z-10">
              <span className="mb-6 inline-block rounded-full bg-secondary-container px-3 py-1 font-label-md text-label-md text-on-secondary-container">
                Strategic Audit Support
              </span>
              <h1 className="mb-6 font-display-lg text-display-lg-mobile text-primary md:text-display-lg">
                Prepare for Audits with Confidence
              </h1>
              <p className="mb-8 max-w-xl font-body-lg text-body-lg text-on-surface-variant">
                Navigate the complexities of UAE financial regulations with
                Reyaansh Advisors. We provide comprehensive audit readiness,
                bridging the gap between your internal records and external
                scrutiny.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded bg-secondary-fixed-dim px-8 py-4 font-label-md text-label-md text-on-secondary-fixed transition-all hover:brightness-95"
                >
                  Get Audit Ready
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="glass-card relative z-10 aspect-square overflow-hidden rounded-[2rem] shadow-2xl">
                <Image
                  alt="Modern glass-walled boardroom"
                  className="h-full w-full object-cover grayscale-[20%] opacity-90"
                  fill
                  priority
                  sizes="(min-width: 768px) 45vw, 100vw"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA19HPnwgqFNOJn8Wa2pvyo2Lh2x5kc_6pOIe2NJiLe6bV2yS5OsRP6UGSHgwmmWVxXXxvGeT3NhaaT-u6UVqBZiQpmhY5Ek65egL-fQmFjGOUZ71_VYnBGeJpYip7479HVEioZTmFucIy0Bqw_b2mvdEu-l4OAkHviRDuU6yD-8yBPm781UxsNcq_mf4YI5gC3yZCc3VYtz1GKRcEm0dEVwrVvzMEKsL4zOHtNSraFRNPIR-WDAntVb_LUsWvuw3S4Mq3H6XmWT1c8"
                />
              </div>
              <div className="glass-card absolute -bottom-8 -left-8 z-20 max-w-xs rounded-xl p-8 shadow-xl">
                <p className="mb-2 font-headline-sm text-headline-sm text-secondary">
                  98%
                </p>
                <p className="font-label-md text-label-md text-on-surface">
                  First-time compliance success rate for our regional clients.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 -z-10 h-full w-1/3 translate-x-1/2 rounded-full bg-surface-container-low opacity-50 blur-[120px]" />
        </header>

        <section className="bg-surface-container-lowest px-gutter py-section-padding-desktop">
          <div className="mx-auto max-w-container-max">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-headline-md text-headline-md text-primary">
                Core Pillars of Audit Readiness
              </h2>
              <p className="mx-auto max-w-2xl font-body-md text-body-md text-on-surface-variant">
                Our four-point methodology ensures no detail is overlooked,
                transforming the audit process from a stressor into a strategic
                health check.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-12 lg:min-h-[600px]">
              <article className="glass-card group relative overflow-hidden rounded-[2rem] p-10 md:col-span-8">
                <div className="absolute inset-0 -z-10">
                  <Image
                    alt="Professional accountant reviewing digital spreadsheets"
                    className="h-full w-full object-cover opacity-10 transition-transform duration-700 group-hover:scale-105"
                    fill
                    sizes="(min-width: 768px) 55vw, 100vw"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVqcrilRR7OTf_6QVTowEA1lq0Rc_O52gNyMcdSi_8Cwf14iObL-7k-4PMPj7grtv0-AW06uZaXakb-nQKbzKrKSYR0A_NwcIZquJH7iF_B5BdbFAud1lCA42M3-OKAa9HbOXqV0-5z93OlcUyIfPO1e_l6UtzzlWQNW_Lv5yXCWWdSfiJ0RR4kUI_8192C_hDRIoVPXj7ZigmBXBhli5cH6ISvbu7qwlvDxX66t65E40wOCYKhViOdwITHCVTIkgDFNFZJQkcMqKv"
                  />
                </div>
                <div className="flex h-full flex-col justify-end">
                  <MdOutlineAnalytics
                    aria-hidden="true"
                    className="mb-6 text-5xl text-secondary"
                  />
                  <h3 className="mb-4 font-headline-md text-headline-md text-primary">
                    Audit Prep &amp; Pre-Screening
                  </h3>
                  <p className="max-w-md font-body-md text-body-md text-on-surface-variant">
                    We assist businesses in preparing and organizing the
                    documentation required for statutory audits, including
                    audit-ready schedules, reconciliations, and supporting
                    working papers.
                  </p>
                </div>
              </article>

              <article className="flex flex-col justify-between rounded-[2rem] bg-primary-container p-10 text-on-primary-container md:col-span-4">
                <div>
                  <MdOutlineDescription
                    aria-hidden="true"
                    className="mb-6 text-4xl text-secondary-fixed"
                  />
                  <h3 className="mb-4 font-headline-sm text-headline-sm text-white">
                    Document Forensic Review
                  </h3>
                </div>
                <p className="font-label-md text-label-md text-on-primary-container/80">
                  Develop the necessary documentation for audits. We assist businesses in preparing and organizing the documentation required for statutory audits.
                </p>
              </article>

              <article className="rounded-[2rem] border border-outline-variant/30 p-10 md:col-span-5">
                <MdSupportAgent
                  aria-hidden="true"
                  className="mb-4 text-4xl text-primary"
                />
                <h3 className="mb-3 font-headline-sm text-headline-sm text-primary">
                  Liaison &amp; Coordination
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  We act as the primary point of contact for external auditors,
                  managing requests and clarifying complex technical queries on
                  your behalf.
                </p>
              </article>

              <article className="glass-card gold-rim flex items-center gap-8 rounded-[2rem] p-10 md:col-span-7">
                <div className="hidden shrink-0 sm:block">
                  <MdOutlineSecurity
                    aria-hidden="true"
                    className="text-6xl text-secondary"
                  />
                </div>
                <div>
                  <h3 className="mb-3 font-headline-sm text-headline-sm text-primary">
                    Internal Control Optimization
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Beyond the audit, we strengthen your internal workflows to
                    prevent future errors and enhance operational transparency.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-surface px-gutter py-section-padding-desktop">
          <div className="mx-auto flex max-w-container-max flex-col items-center gap-16 md:flex-row">
            <div className="md:w-1/2">
              <h2 className="mb-8 font-headline-md text-headline-md text-primary">
                Compliance Readiness Checklist
              </h2>
              <div className="space-y-6">
                {checklistItems.map((item, index) => (
                  <div
                    key={item.title}
                    className={`flex items-start gap-4 rounded-lg p-4 ${
                      index === 0
                        ? "border-l-4 border-secondary bg-surface-container-high"
                        : "border-l-4 border-primary/20 bg-white"
                    }`}
                  >
                    <MdCheckCircle
                      aria-hidden="true"
                      className={
                        index === 0
                          ? "text-secondary"
                          : "text-on-surface-variant"
                      }
                    />
                    <div>
                      <p className="font-body-md text-body-md font-semibold text-primary">
                        {item.title}
                      </p>
                      <p className="font-label-md text-label-md text-on-surface-variant">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative md:w-1/2">
              <div className="relative aspect-video overflow-hidden rounded-[2rem] bg-primary-container shadow-2xl">
                <Image
                  alt="Audit documentation review in a professional office"
                  className="h-full w-full object-cover"
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiGDLlc6oACsq8g_IMZ0khbgVXvNz1VXbmeK6NhdpEn9KyxBrKY7qDhjeJ4FnvQa87vrtMjF_jHm65Nr6S8Dx_B8UDHr9BRDKSK27pTvYJyTT6sdpRn81KrVD60nTVyIiRfun7zdXY5oB38kskL_ar6FDejtiU8nfO_KOJt5Fw3WbWDi_PtKHMlM8yo5AQVpEp2eaq2soFlYn8p9hZUEnFpPVwlSvSuw1sOyKGIBKeI5Xd1xaWGjpE4x10MyB90n8624GEg-3I2CQL"
                />
              </div>
              <p className="mt-6 text-center font-label-md text-label-md italic text-on-surface-variant">
                Audit-ready documentation, reconciliations, and working papers
                prepared for statutory review.
              </p>
            </div>
          </div>
        </section>

        <section className="px-gutter py-section-padding-desktop">
          <div className="relative mx-auto max-w-container-max overflow-hidden rounded-[2rem] bg-primary p-12 text-center text-on-primary md:p-20">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-container opacity-50" />
            <div className="relative z-10">
              <h2 className="mb-6 font-display-lg text-display-lg-mobile md:text-display-lg">
                Ready for your next audit?
              </h2>
              <p className="mx-auto mb-10 max-w-2xl font-body-lg text-body-lg text-on-primary-container">
                Don&apos;t leave compliance to chance. Partner with UAE&apos;s
                most meticulous advisors for a seamless, zero-finding audit
                experience.
              </p>
              <div className="flex flex-col justify-center gap-6 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-lg bg-secondary px-6 py-4 font-headline-sm text-base text-on-secondary transition-colors hover:bg-secondary-fixed sm:px-10 sm:py-5 sm:text-headline-sm"
                >
                  Book a Free Consultation
                </a>
              </div>
            </div>
            <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full border border-secondary/20" />
            <div className="absolute -top-12 -left-12 h-48 w-48 rounded-full border border-secondary/10" />
          </div>
        </section>
      </main>
    </div>
  );
}

