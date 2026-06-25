import Image from "next/image";
import {
  MdArrowForward,
  MdCheckCircle,
  MdGavel,
  MdHandshake,
  MdHub,
  MdOutlineAnalytics,
  MdOutlineFactCheck,
  MdOutlinePsychology,
  MdVerifiedUser,
} from "react-icons/md";

export function EInvoicingPage() {
  return (
    <div className="bg-background text-on-background font-body-md selection:bg-secondary-container selection:text-on-secondary-container">
      <main>
        <section className="relative flex min-h-[620px] items-center overflow-hidden bg-primary-container md:min-h-[716px]">
          <div className="absolute inset-0 opacity-60">
            <Image
              alt="Modern Dubai skyscraper at sunset"
              className="h-full w-full object-cover"
              fill
              priority
              sizes="100vw"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCldF5HCVw5N5n4l7Fo_TlWFZIiTgzt6IBvOKZo_R05dpybyR4k5Mf0Hy1QKJcoRz94jfiot3hPvMEKarWSfbxSPUZ1FeBkxN-mW-weu0AF4l5tCx0Y-ugBkl5zwSXlaXMPibXtxHm0ya-iTt7BWKHBn_cZZYfzjZ0ohUqMVIA-rJi2W-wwp8Ti_BD-VkhQ8UQLIXfe8UuX2jx8khlW1rbiaN5Oy7DQ1t4Wo_ILDiXOd_FtASO0yrmzg0je_DWqBLwLqgp5Kwl_xdcQ"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-container/80 via-primary-container/45 to-transparent" />

          <div className="relative mx-auto w-full max-w-container-max px-gutter py-section-padding-mobile md:py-section-padding-desktop">
            <div className="max-w-3xl">
              <span className="mb-6 inline-block bg-secondary px-4 py-1 font-label-md text-label-md text-on-primary">
                Strategic Compliance
              </span>
              <h1 className="mb-6 font-display-lg text-display-lg-mobile text-on-primary md:text-display-lg">
                E-Invoicing Compliance &amp; Digital Transformation
              </h1>
              <p className="mb-10 font-body-lg text-body-lg leading-relaxed text-on-primary-container/80">
                Navigate the new FTA e-invoicing mandate with surgical
                precision. Reyaansh Advisors provides the technical and
                regulatory architecture required for UAE businesses to
                transition seamlessly into a digitized tax ecosystem.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="bg-secondary px-8 py-4 font-label-md text-label-md text-primary-container transition-all hover:brightness-110"
                >
                  Request a Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-container-max px-gutter py-section-padding-desktop">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="font-headline-md text-headline-md text-primary">
                Regulatory Imperative meets Operational Excellence
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                The UAE&apos;s transition to E-Invoicing is more than a
                mandate. It is a fundamental shift toward a real-time tax
                reporting environment. E-Invoicing involves the exchange of
                invoice documents between a supplier and a buyer in an
                integrated electronic format.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                At Reyaansh Advisors, we don&apos;t just solve for compliance.
                We leverage this transition to streamline your financial
                operations, reducing manual intervention and creating a
                bulletproof digital audit trail that stands up to the highest
                levels of scrutiny.
              </p>
              <div className="border-l-4 border-secondary pl-6 pt-4 font-body-lg text-body-lg italic text-primary">
                &quot;E-invoicing is the cornerstone of the UAE&apos;s digital
                economy strategy, ensuring transparency and efficiency in every
                transaction.&quot;
              </div>
            </div>

            <div className="relative">
              <div className="glass-card rounded-xl p-2">
                <Image
                  alt="Tablet with financial data visualizations"
                  className="w-full rounded-lg shadow-lg"
                  height={900}
                  sizes="(min-width: 768px) 45vw, 100vw"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_SXr4KDODaFdzwt97JGGfy-l5eY5BjPMZTdtnHtrerw-POKA8mnbrOqV2bWqDmQH85GgsTbG52Gc9DsNC-ifB905_I8urbQ9W7WI3BhjPf0MZFgoZwxIQMTHEGZYGgVKuwtUN3Cy2vbSHAvq6igFrLISK-IhwS5YqKOUet4VZsVmvN4L1TlPFzvFkrJnAyxTfE4-PbzXI89JxCSOuyeoZNbkZZr_vgCYSEsiW72qae3hT1YBcP0Lwc7Arnun4bfpJ_HsNQ868dYgk"
                  width={1400}
                />
              </div>
              <div className="glass-card absolute -bottom-8 -left-8 hidden max-w-[280px] border-secondary/20 p-8 lg:block">
                <div className="mb-2 text-[40px] font-display-lg text-secondary">
                  100%
                </div>
                <div className="font-label-md text-label-md text-on-surface">
                  FTA Compliance Guarantee on Implementation
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container px-gutter py-section-padding-desktop">
          <div className="mx-auto max-w-container-max">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-headline-md text-headline-md text-primary">
                Core Implementation Pillars
              </h2>
              <p className="mx-auto max-w-2xl font-body-md text-body-md text-on-surface-variant">
                Our solution architecture is built on four critical technical
                domains designed for enterprise-grade stability.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <article className="glass-card flex flex-col justify-between border-t-4 border-t-secondary p-10 transition-shadow hover:shadow-xl md:col-span-2">
                <div>
                  <MdHub
                    aria-hidden="true"
                    className="mb-6 text-4xl text-secondary"
                  />
                  <h3 className="mb-4 font-headline-sm text-headline-sm text-primary">
                    E-Invoicing Readiness &amp; Compliance Assessment
                  </h3>
                  <p className="max-w-lg font-body-md text-body-md text-on-surface-variant">
                    Evaluate existing systems, processes, and documentation to
                    identify gaps and ensure alignment with UAE e-invoicing
                    requirements.
                  </p>
                </div>
              </article>

              <article className="glass-card p-10 transition-shadow hover:shadow-xl">
                <MdVerifiedUser
                  aria-hidden="true"
                  className="mb-6 text-4xl text-secondary"
                />
                <h3 className="mb-4 font-headline-sm text-headline-sm text-primary">
                  System Integration &amp; Implementation Support
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Assist with ERP/accounting system integration, invoice
                  structuring, and secure data transmission in accordance with
                  prescribed technical standards.
                </p>
              </article>

              <article className="glass-card p-10 transition-shadow hover:shadow-xl">
                <MdGavel
                  aria-hidden="true"
                  className="mb-6 text-4xl text-secondary"
                />
                <h3 className="mb-4 font-headline-sm text-headline-sm text-primary">
                  Governance, Training &amp; Compliance Support
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Establish audit trails and record retention frameworks while
                  providing training and change management support for a smooth
                  transition to e-invoicing.
                </p>
              </article>

              <article className="glass-card flex flex-col items-center gap-10 p-10 transition-shadow hover:shadow-xl md:col-span-2 md:flex-row">
                <div className="flex-1">
                  <MdOutlineAnalytics
                    aria-hidden="true"
                    className="mb-6 text-4xl text-secondary"
                  />
                  <h3 className="mb-4 font-headline-sm text-headline-sm text-primary">
                    Automated Reporting
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Generate comprehensive tax summaries and audit reports at
                    the touch of a button, drastically reducing the time
                    required for VAT returns and internal audits.
                  </p>
                </div>
                <div className="flex h-32 w-full items-center justify-center rounded-lg border border-outline-variant/30 bg-primary-container/5 md:w-1/3">
                  <MdOutlineAnalytics
                    aria-hidden="true"
                    className="text-6xl text-secondary/40"
                  />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-container-max px-gutter py-section-padding-desktop">
          <div className="flex flex-col gap-16 md:flex-row">
            <div className="md:w-1/3">
              <h2 className="mb-6 font-headline-md text-headline-md text-primary">
                The Strategic Advantage
              </h2>
              <p className="mb-8 font-body-md text-body-md text-on-surface-variant">
                E-Invoicing isn&apos;t just a hurdle. It&apos;s an opportunity
                to modernize your entire commercial flow.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <MdCheckCircle aria-hidden="true" className="text-secondary" />
                  <span className="font-label-md text-label-md">
                    Global Data Standards
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <MdCheckCircle aria-hidden="true" className="text-secondary" />
                  <span className="font-label-md text-label-md">
                    Reduced Disputes
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <MdCheckCircle aria-hidden="true" className="text-secondary" />
                  <span className="font-label-md text-label-md">
                    Instant Liquidity
                  </span>
                </li>
              </ul>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 md:w-2/3">
              <div className="border border-outline-variant/30 bg-surface p-8 transition-colors hover:border-secondary">
                <h4 className="mb-3 font-headline-sm text-headline-sm text-primary">
                  Reduced Errors
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Eliminate human entry errors and manual reconciliation
                  discrepancies through automated data mapping and validation.
                </p>
              </div>
              <div className="border border-outline-variant/30 bg-surface p-8 transition-colors hover:border-secondary">
                <h4 className="mb-3 font-headline-sm text-headline-sm text-primary">
                  Faster Processing
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Accelerate your order-to-cash cycle. Invoices are delivered
                  and validated in seconds, speeding up payment terms.
                </p>
              </div>
              <div className="border border-outline-variant/30 bg-surface p-8 transition-colors hover:border-secondary">
                <h4 className="mb-3 font-headline-sm text-headline-sm text-primary">
                  Complete Audit Trails
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Every transaction is digitally signed and timestamped,
                  creating an immutable history for peace of mind during FTA
                  audits.
                </p>
              </div>
              <div className="border border-outline-variant/30 bg-surface p-8 transition-colors hover:border-secondary">
                <h4 className="mb-3 font-headline-sm text-headline-sm text-primary">
                  Tax Readiness
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Future-proof your business against upcoming changes in GCC tax
                  laws with a scalable digital foundation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-primary-container px-gutter py-section-padding-desktop text-on-primary">
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-10">
            <svg
              className="h-full w-full fill-secondary"
              viewBox="0 0 400 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="400" cy="0" r="400" />
            </svg>
          </div>
          <div className="relative z-10 mx-auto max-w-container-max">
            <div className="grid items-center gap-16 md:grid-cols-2">
              <div>
                <h2 className="mb-8 font-headline-md text-headline-md">
                  Why Reyaansh Advisors?
                </h2>
                <div className="space-y-10">
                  <div className="flex gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-secondary/20">
                      <MdOutlinePsychology
                        aria-hidden="true"
                        className="text-secondary"
                      />
                    </div>
                    <div>
                      <h5 className="mb-2 font-headline-sm text-headline-sm">
                        Technical Mastery
                      </h5>
                      <p className="font-body-md text-body-md text-on-primary-container/70">
                        Our team consists of both tax experts and software
                        architects, ensuring the technical solution matches the
                        legal requirement.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-secondary/20">
                      <MdOutlineFactCheck
                        aria-hidden="true"
                        className="text-secondary"
                      />
                    </div>
                    <div>
                      <h5 className="mb-2 font-headline-sm text-headline-sm">
                        Regulatory Insight
                      </h5>
                      <p className="font-body-md text-body-md text-on-primary-container/70">
                        Deep awareness of UAE regulatory updates keeps us ahead
                        of policy shifts before they affect your operation.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-secondary/20">
                      <MdHandshake
                        aria-hidden="true"
                        className="text-secondary"
                      />
                    </div>
                    <div>
                      <h5 className="mb-2 font-headline-sm text-headline-sm">
                        Hands-on Support
                      </h5>
                      <p className="font-body-md text-body-md text-on-primary-container/70">
                        We don&apos;t just advise. We implement. From ERP
                        configuration to staff training, we are with you at
                        every step.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
                <Image
                  alt="Senior professionals in a strategy meeting"
                  className="h-[600px] w-full object-cover"
                  height={1200}
                  sizes="(min-width: 768px) 45vw, 100vw"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmSVtpdORV3Rn5PHkntgsS1c3mYU5a69vRuRl_FX5X3TGo4wXhmGSFaR5POcmjH9KPTnV9PNrsSgQRnlbnO4mBLsgSgDdSFblnnHOXDKeOWdq_qCFPPMrDDwwat0acG_F-fqh7OPYC2A9xH3NoRZaQdCcnCoNusKnFxkBrNZ_yGwPGlP3c7HDK52KiK_g4dAXszZ9qhGPjzIGvRJF2dsU7WYJn4Cx85FJEhPab19JdNRwDreTZ0vjT0EN3UH-H_mZWN07S1PI116HU"
                  width={1000}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-gutter py-section-padding-desktop">
          <div className="glass-card relative mx-auto max-w-4xl p-12 text-center md:p-20">
            <div className="absolute left-1/2 top-0 h-1 w-24 -translate-x-1/2 bg-secondary" />
            <h2 className="mb-6 font-display-lg-mobile text-display-lg-mobile text-primary md:font-display-lg md:text-display-lg">
              Secure Your Digital Future Today
            </h2>
            <p className="mb-12 font-body-lg text-body-lg text-on-surface-variant">
              Don&apos;t wait for the deadline. Contact our advisory team for a
              technical audit and implementation roadmap.
            </p>
            <div className="flex flex-col justify-center gap-6 sm:flex-row">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-primary px-7 py-4 font-label-md text-label-md text-on-primary transition-all hover:bg-primary/90 sm:px-12 sm:py-5"
              >
                Request a Demo <MdArrowForward aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="border border-primary px-7 py-4 font-label-md text-label-md text-primary transition-all hover:bg-surface-container sm:px-12 sm:py-5"
              >
                  Request Compliance Support
                </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
