import Image from "next/image";
import {
  MdCheckCircle,
  MdGavel,
  MdOutlineFactCheck,
  MdOutlineMonitorHeart,
  MdOutlineSecurity,
  MdSchool,
} from "react-icons/md";

export function AmlPage() {
  return (
    <div className="overflow-x-hidden bg-background text-on-background font-body-md">
      <main>
        <section className="relative flex min-h-[620px] items-center overflow-hidden md:min-h-[716px]">
          <div className="absolute inset-0 z-0">
            <Image
              alt="AML compliance advisory hero"
              className="h-full w-full object-cover brightness-75 grayscale-[0.1]"
              fill
              priority
              sizes="100vw"
              src="https://plus.unsplash.com/premium_photo-1697729914552-368899dc4757?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-container/75 via-primary-container/25 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-container-max px-gutter">
            <div className="max-w-2xl">
              <span className="mb-6 inline-block rounded-full bg-secondary-container px-3 py-1 font-label-md text-label-md text-on-secondary-container">
                Regulatory Excellence
              </span>
              <h1 className="mb-6 font-display-lg text-display-lg-mobile text-white md:text-display-lg">
                Advanced AML Compliance &amp; Risk Management
              </h1>
              <p className="mb-8 font-body-lg text-body-lg leading-relaxed text-white/80">
                Fortify your institution with the UAE&apos;s leading Anti-Money
                Laundering framework. We deliver end-to-end strategic oversight
                to ensure absolute regulatory alignment and operational
                integrity.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="flex items-center gap-2 rounded-lg bg-secondary px-8 py-4 font-label-md text-label-md text-on-secondary transition-colors hover:bg-secondary-fixed"
                >
                  Strengthen Compliance
                  <MdOutlineSecurity aria-hidden="true" />
                </a>
                <a
                  href="#aml-overview"
                  className="rounded-lg border border-white/30 px-8 py-4 font-label-md text-label-md text-white transition-colors hover:bg-white/10"
                >
                  Review Framework
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="aml-overview"
          className="mx-auto max-w-container-max px-gutter py-section-padding-desktop"
        >
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-headline-md text-headline-md text-primary">
              Core Compliance Solutions
            </h2>
            <p className="mx-auto max-w-2xl font-body-md text-body-md text-on-surface-variant">
              Our AML support covers risk assessment, framework development,
              implementation, reporting, monitoring, and advisory for sustained
              regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 lg:min-h-[600px]">
            <article className="glass-card flex flex-col justify-between rounded-xl border-t-4 border-secondary p-8 transition-shadow hover:shadow-xl md:col-span-8">
              <div>
                <MdGavel
                  aria-hidden="true"
                  className="mb-4 text-4xl text-secondary"
                />
                <h3 className="mb-4 font-headline-sm text-headline-sm text-primary">
                  AML Risk Assessment &amp; Gap Analysis
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Conduct a comprehensive assessment of your AML compliance
                  framework to identify regulatory gaps, evaluate inherent
                  risks, and assess exposure across customers, transactions,
                  jurisdictions, and business activities.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-outline-variant pt-6">
                <div className="text-center">
                  <p className="font-label-md text-label-md text-primary">
                    KYC/KYB
                  </p>
                </div>
                <div className="border-x border-outline-variant text-center">
                  <p className="font-label-md text-label-md text-primary">
                    CDD Protocols
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-label-md text-label-md text-primary">
                    Sanctions Policy
                  </p>
                </div>
              </div>
            </article>

            <article className="flex flex-col justify-center rounded-xl bg-primary-container p-8 text-center text-white md:col-span-4">
              <MdSchool
                aria-hidden="true"
                className="mb-6 text-5xl text-secondary-fixed"
              />
              <h3 className="mb-4 font-headline-sm text-headline-sm">
                AML Policy &amp; Framework Development
              </h3>
              <p className="mb-6 font-body-md text-body-md text-on-primary-container">
                Design and implement customized AML policies, procedures, and
                governance frameworks aligned with UAE AML regulations, industry
                best practices, and organizational requirements.
              </p>
              <a
                href="#contact"
                className="rounded-full border border-secondary-fixed/30 py-2 font-label-md text-label-md text-secondary-fixed transition-all hover:bg-secondary-fixed hover:text-primary"
              >
                Schedule Workshop
              </a>
            </article>

            <article className="glass-card flex flex-col items-start gap-4 rounded-xl p-8 md:col-span-4">
              <MdOutlineFactCheck
                aria-hidden="true"
                className="text-4xl text-secondary"
              />
              <h3 className="font-headline-sm text-headline-sm text-primary">
                Compliance Process Implementation
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Establish and enhance Customer Due Diligence, Know Your
                Customer procedures, transaction monitoring, sanctions
                screening, and internal controls.
              </p>
            </article>

            <article className="glass-card flex flex-col overflow-hidden rounded-xl border-l-4 border-secondary p-0 md:col-span-8 md:flex-row">
              <div className="flex-1 p-8">
                <MdOutlineMonitorHeart
                  aria-hidden="true"
                  className="mb-4 text-4xl text-secondary"
                />
                <h3 className="mb-2 font-headline-sm text-headline-sm text-primary">
                  Regulatory Registration &amp; Reporting Support
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Provide end-to-end assistance with regulatory registrations,
                  goAML onboarding, suspicious transaction reporting, and
                  compliance with applicable reporting obligations.
                </p>
              </div>
              <div className="relative h-48 w-full bg-surface-container-high md:h-auto md:w-1/3">
                <Image
                  alt="Financial monitoring dashboard"
                  className="h-full w-full object-cover"
                  fill
                  sizes="(min-width: 768px) 24vw, 100vw"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUb-K-JMvPSmMAXwhdB8sro2J0XFEPWm5tz-OfatrYTcEBPlgEXRpV6p9TN5dyYKdlSg0GG2geQEWB1jM4q5XdsMFFpn9j3Ez_PxRS06OLGcMAPfcbMldhw0CGGsmVm9XI8rYeMRvptNFRiDa5KK-ktC8afbRG0E2WboQF5Jo9E8Uv1-o_SW26dbQPYYYq-XiWsziNaH03SDagEwSkHGnaldZbrzGSioEg2YzbTANduOf7BbA8w6vMLhjC-vGNLw8d60WcLLraVf4_"
                />
              </div>
            </article>
          </div>
        </section>

        <section className="bg-surface-container-low py-section-padding-desktop">
          <div className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-16 px-gutter md:grid-cols-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 h-32 w-32 rounded-full bg-secondary/10 blur-3xl" />
              <div className="glass-card relative overflow-hidden rounded-[2rem] border border-primary/5 shadow-2xl">
                <div className="flex items-center gap-2 bg-primary-container p-4">
                  <div className="flex gap-1">
                    <div className="h-2 w-2 rounded-full bg-error" />
                    <div className="h-2 w-2 rounded-full bg-secondary" />
                    <div className="h-2 w-2 rounded-full bg-on-primary-container" />
                  </div>
                  <span className="ml-4 font-label-md text-[10px] uppercase tracking-widest text-white/60">
                    Reyaansh Risk-Alpha v4.2
                  </span>
                </div>
                <Image
                  alt="Command center risk screen"
                  className="h-auto w-full"
                  height={900}
                  sizes="(min-width: 768px) 45vw, 100vw"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVBz2r4DHG6oXobzFq9bKb6GexdVDpDK0_vcB8vNK1qR9Fos2M1abEgGk5Q2ItF8w41HYg2V48Dy6xKHhEX5LmwJeHW3vnaWimqKot0Hlr8IUgbb2ULJq9K_CbO75_O76RZN4zIFrxvYQ3CTMoommpM-n3EJEoxAxAD36_QUyTJCY86b9d9N5FyOK8ndIBQtIKNiiEdiX17mY1zXX_TVuJ0tGm0c01IoeHQsbceUekeUV7SyRTiKZ43xAGNQClLYBBqNLBfrjZYMAH"
                  width={1400}
                />
              </div>
            </div>

            <div>
              <h2 className="mb-6 font-headline-md text-headline-md text-primary">
                Ongoing Compliance Monitoring &amp; Advisory
              </h2>
              <p className="mb-8 font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
                Establish robust monitoring and review mechanisms, deliver AML
                awareness training, and support periodic compliance assessments
                to ensure continuous regulatory compliance and audit readiness.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MdCheckCircle
                    aria-hidden="true"
                    className="mt-1 text-secondary"
                  />
                  <div>
                    <p className="font-headline-sm text-[18px] text-primary">
                      Automated SAR Filing
                    </p>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Streamlined Suspicious Activity Reporting to goAML portals.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MdCheckCircle
                    aria-hidden="true"
                    className="mt-1 text-secondary"
                  />
                  <div>
                    <p className="font-headline-sm text-[18px] text-primary">
                      Ultimate Beneficial Owner Verification
                    </p>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Exposing complex ownership structures to satisfy regulatory
                      scrutiny.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-section-padding-desktop">
          <div className="mx-auto max-w-container-max px-gutter">
            <div className="relative overflow-hidden rounded-[2rem] bg-primary-container p-12 text-center md:p-24">
              <div className="absolute inset-0 z-0 opacity-20">
                <Image
                  alt="Luxury corporate boardroom"
                  className="h-full w-full object-cover"
                  fill
                  sizes="100vw"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvs3wEm5uNTKRzkpByBZhZBb-dufjzrqgrvSb5sLjWJA_RwyeBXtn47mRTGcKidikGy7meSayQg0heBqu8sufGrpE7rN6cN3uaeKZ23RuNsuCEMRGtRMFmJtqBu69tWPp2A3Sxg1rwX_In5ycbuWe-k5HO5bstKj3QyWDxd9tv1hp1hfQv15_wTvY-q7h_mZc-OQclcQ8LqO9kDl-NXNab1kiRVR0QyxIBJEzQrVjkfLIvWPy_9AEyI2A4VEc8h4vIB6iDxWJUhNXK"
                />
              </div>
              <div className="relative z-10 mx-auto max-w-3xl">
                <h2 className="mb-6 font-display-lg text-display-lg-mobile text-white md:text-display-lg">
                  Secure Your Operations Today
                </h2>
                <p className="mb-10 font-body-lg text-body-lg text-on-primary-container">
                  Don&apos;t wait for an audit to discover vulnerabilities.
                  Partner with Reyaansh Advisors to build a culture of
                  compliance that protects your brand and your assets.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <a
                    href="#contact"
                    className="rounded-lg bg-secondary px-6 py-4 font-headline-sm text-base text-on-secondary transition-transform hover:scale-105 sm:px-10 sm:py-5 sm:text-[20px]"
                  >
                    Strengthen Compliance
                  </a>
                  <a
                    href="#contact"
                    className="rounded-lg border border-white/20 bg-white/10 px-6 py-4 font-headline-sm text-base text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:px-10 sm:py-5 sm:text-[20px]"
                  >
                    Talk to an Expert
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
