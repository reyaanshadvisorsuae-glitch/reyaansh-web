import Image from "next/image";
import {
  MdOutlineAssuredWorkload,
  MdOutlineDomain,
  MdOutlineEditNote,
  MdOutlineFactCheck,
  MdVerifiedUser,
} from "react-icons/md";

const workflowSteps = [
  {
    description:
      "Detailed review of the business model, income streams, transactions, processes, reliefs, exemptions, and transitional adjustments.",
    number: "01",
    title: "Corporate Tax Impact Study",
  },
  {
    description:
      "Timely registration support, application preparation, submission to the FTA, and query coordination.",
    number: "02",
    title: "Corporate Tax Registration",
  },
  {
    description:
      "Accurate Corporate Tax return filing support focused on compliance, risk reduction, and a seamless filing process.",
    number: "03",
    title: "Return Filing Support",
  },
  {
    description:
      "Transfer pricing policy development, benchmarking, related-party transaction reviews, documentation, and compliance support.",
    number: "04",
    title: "Transfer Pricing Support",
  },
] as const;

export function CorporateTaxPage() {
  return (
    <div className="bg-surface text-on-surface font-body-md">
      <main>
        <section className="relative flex min-h-[620px] items-center overflow-hidden bg-primary-container text-on-primary-container md:min-h-[716px]">
          <div className="absolute inset-0 opacity-20">
            <Image
              alt="Dubai International Financial Centre at dusk"
              className="object-cover"
              fill
              priority
              sizes="100vw"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_Gn48CYSkRjVRQVep94fbqYXZU-T2f5SlS1TVVwByTkJLrokn8rKsmvomSTms3XDcEIEuZK41b7xrRvyR2TXK7DaMz51Eov4AIpfQ8KMI11-aViy267iGei-4on-Ooy02JNHbmjQYTceQr6mAtIKC8ZeaeAKtUf4lhIo5Boq5RV4g5p59Xweb1OYuVaoUinmbp00PQsj-OpIIykyeqj-gWQ46sLNABKqoGPcBf2THwcBVkX0CjnqN1rp4idBUXX2AD_uhGs8KFxpZ"
            />
          </div>

          <div className="relative z-10 mx-auto max-w-container-max px-gutter py-section-padding-desktop">
            <div className="max-w-3xl">
              <span className="mb-6 inline-block rounded-full bg-secondary-container px-3 py-1 font-label-md text-label-md text-on-secondary-container">
                Expertise: Taxation
              </span>
              <h1 className="mb-8 font-display-lg text-display-lg-mobile leading-tight text-white md:text-display-lg">
                Corporate Tax and Transfer Pricing Advisory
              </h1>
              <p className="mb-10 max-w-2xl font-body-lg text-body-lg text-on-primary-container/80">
                Navigate UAE Corporate Tax and transfer pricing obligations with
                precise registration, deregistration, impact assessment, return
                filing, advisory, and documentation support.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#workflow"
                  className="rounded border border-white/30 px-8 py-4 font-label-md text-label-md text-white transition-all hover:bg-white/10"
                >
                  Review Advisory Workflow
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-container-max px-gutter py-section-padding-desktop">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-headline-md text-headline-md text-primary">
              Comprehensive Tax Solutions
            </h2>
            <div className="mx-auto h-1 w-20 bg-secondary" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <article className="glass-card group flex flex-col justify-between p-10 md:col-span-8">
              <div>
                <MdOutlineFactCheck
                  aria-hidden="true"
                  className="mb-6 text-4xl text-secondary"
                />
                <h3 className="mb-4 font-headline-sm text-headline-sm text-primary">
                  Corporate Tax Registration
                </h3>
                <p className="max-w-xl font-body-md text-body-md text-on-surface-variant">
                  We provide end-to-end support for Corporate Tax registration,
                  ensuring timely and seamless compliance with UAE tax
                  regulations. Our team reviews documentation, prepares and
                  submits the FTA application, and coordinates with the FTA to
                  address queries.
                </p>
              </div>
            </article>

            <article className="flex flex-col justify-center bg-primary-container p-10 text-on-primary-container md:col-span-4">
              <MdOutlineEditNote
                aria-hidden="true"
                className="mb-6 text-4xl text-secondary-fixed"
              />
              <h3 className="mb-4 font-headline-sm text-headline-sm text-white">
                Corporate Tax De-registration
              </h3>
              <p className="font-body-md text-body-md opacity-80">
                End-to-end deregistration support, including document review,
                FTA application preparation, submission, and query management
                for a smooth process.
              </p>
            </article>

            <article className="glass-card gold-accent-top flex flex-col items-start p-10 md:col-span-4">
              <MdOutlineDomain
                aria-hidden="true"
                className="mb-6 text-4xl text-secondary"
              />
              <h3 className="mb-4 font-headline-sm text-headline-sm text-primary">
                Corporate Tax Impact Study
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Detailed assessment of operations, income streams, transactions,
                reliefs, exemptions, and transitional adjustments to identify
                Corporate Tax implications.
              </p>
            </article>

            <article className="glass-card flex flex-col items-center gap-10 p-10 md:col-span-8 md:flex-row">
              <div className="flex-1">
                <MdOutlineAssuredWorkload
                  aria-hidden="true"
                  className="mb-6 text-4xl text-secondary"
                />
                <h3 className="mb-4 font-headline-sm text-headline-sm text-primary">
                  Corporate Tax Return Filing Support Services
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Accurate and timely Corporate Tax return filing services that
                  help minimize tax risks, address compliance exposures, and
                  provide peace of mind through a seamless process.
                </p>
              </div>
              <div className="h-48 w-full overflow-hidden rounded-lg bg-surface-container md:w-64">
                <Image
                  alt="Financial ledger and fountain pen"
                  className="h-full w-full object-cover"
                  height={480}
                  sizes="(min-width: 768px) 16rem, 100vw"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX46RxQNiYQ7PPm91pqLNCKd7tXCGmxsaqumvzvIpTYvjXaacJW1iBLid5CCU6t10vqR-BiCzIolKdgjAqZZm5gqHJSv82Drpx2L9tnXOBjJydWoGzdSWI5cCqUbVAP3XAtwMadYqmrQealnwt7z7yb5CQdOvMtQJOJyUYlZU3o3Mx5K4JQpHrEOHpscpuZyvHUXySrVL0Rdjn4mlxxWei-xEYNmd8ra6vBo1hf4wPJLAZ2pFEElKM-IHfitYRI4loVfcibrD3augH"
                  width={640}
                />
              </div>
            </article>

            <article className="glass-card gold-accent-top flex flex-col items-start p-10 md:col-span-6">
              <MdOutlineEditNote
                aria-hidden="true"
                className="mb-6 text-4xl text-secondary"
              />
              <h3 className="mb-4 font-headline-sm text-headline-sm text-primary">
                Corporate Tax Advisory Services
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Strategic advisory to support tax-efficient structuring,
                financing, restructuring, and profit repatriation decisions while
                maintaining regulatory compliance.
              </p>
            </article>

            <article className="glass-card gold-accent-top flex flex-col items-start p-10 md:col-span-6">
              <MdOutlineAssuredWorkload
                aria-hidden="true"
                className="mb-6 text-4xl text-secondary"
              />
              <h3 className="mb-4 font-headline-sm text-headline-sm text-primary">
                Transfer Pricing Support Services
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Transfer pricing policy development, benchmarking studies,
                related-party transaction reviews, documentation preparation,
                and compliance support to ensure arm&apos;s length outcomes.
              </p>
            </article>
          </div>
        </section>

        <section
          id="workflow"
          className="bg-surface-container-low px-gutter py-section-padding-desktop"
        >
          <div className="mx-auto max-w-container-max">
            <div className="flex flex-col items-center gap-16 md:flex-row">
              <div className="flex-1">
                <h2 className="mb-6 font-headline-md text-headline-md text-primary">
                  Our 4-Stage Advisory Workflow
                </h2>
                <p className="mb-12 font-body-lg text-body-lg text-on-surface-variant">
                  A rigorous architectural approach to fiscal stability,
                  designed for the unique complexities of the UAE business
                  ecosystem.
                </p>
                <div className="space-y-8">
                  {workflowSteps.map((step, index) => (
                    <div key={step.number} className="flex gap-6">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-bold text-white ${
                          index === 1 ? "bg-secondary" : "bg-primary"
                        }`}
                      >
                        {step.number}
                      </div>
                      <div>
                        <h4 className="mb-2 font-headline-sm text-[20px]">
                          {step.title}
                        </h4>
                        <p className="text-on-surface-variant">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full flex-1">
                <div className="glass-card overflow-hidden rounded-xl border-secondary/20 p-4 shadow-xl">
                  <Image
                    alt="Financial analytics dashboard"
                    className="rounded-lg"
                    height={900}
                    sizes="(min-width: 768px) 40vw, 100vw"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8nMG0Tn-wPEAxHDkzWLVN3nqS0ag2-N-dOzrg-ISJ-4Ik_sEF9_esXP-NSefaoceQz6ZLKxOt3bzHYtL1clrEQ_neRpJrn7_RKPnRXcy7WbfiBSkYI0Imc5wHPAIA5uYKJB2t4KOVqgyfB59Gmr1UNck1Nr4f05MC40_7q2erT4a1VHYgxQlUuUdGXGFXBQ-8BSpyjkFMmJv7-dgl1zWqsBPg5Xdi4a-iXfbtaRhD-KwveoeXJY55KSYpzvmCJj4m3Gb5rGfzeCez"
                    width={1400}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-container-max px-gutter py-section-padding-desktop text-center">
          <div className="glass-card relative overflow-hidden rounded-[2rem] px-8 py-20">
            <div className="absolute top-0 right-0 -mt-32 -mr-32 h-64 w-64 rounded-full bg-secondary/5" />
            <div className="absolute bottom-0 left-0 -mb-24 -ml-24 h-48 w-48 rounded-full bg-primary/5" />
            <h2 className="relative z-10 mb-6 font-display-lg text-display-lg-mobile text-primary md:text-display-lg">
              Secure Your Fiscal Future Today
            </h2>
            <p className="relative z-10 mx-auto mb-10 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
              The complexity of UAE tax law requires more than just filing. It
              requires a partner in strategic excellence. Let our advisors craft
              your bespoke tax roadmap.
            </p>
            <div className="relative z-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded bg-secondary px-7 py-4 font-label-md text-label-md text-white shadow-lg transition-all hover:bg-secondary/90 sm:px-12 sm:py-5"
              >
                Request a Private Briefing
              </a>
              <p className="mt-6 flex items-center justify-center gap-2 font-label-md text-label-md text-on-surface-variant">
                <MdVerifiedUser aria-hidden="true" className="text-[18px]" />
                Confidential &amp; discretionary consultations
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
