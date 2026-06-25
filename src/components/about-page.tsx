import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  MdArrowForward,
  MdCheckCircle,
  MdOutlineAnalytics,
  MdOutlineAssuredWorkload,
  MdOutlineDomain,
  MdOutlineRocketLaunch,
} from "react-icons/md";
import { routes } from "@/lib/routes";

type AboutCard = {
  description: string;
  icon: IconType;
  label: string;
  title: string;
};

const heroImage = "/hero-section.jpg";

const principles: readonly AboutCard[] = [
  {
    description:
      "We connect formation, finance, tax, audit, and compliance so clients are not forced to manage scattered advisory tracks.",
    icon: MdOutlineDomain,
    label: "Integrated",
    title: "One coordinated advisory desk",
  },
  {
    description:
      "Every recommendation is grounded in practical UAE execution, clear documentation, and responsible regulatory thinking.",
    icon: MdOutlineAssuredWorkload,
    label: "Reliable",
    title: "Compliance-led operating clarity",
  },
  {
    description:
      "Our work is structured to help founders, finance teams, and investors make decisions with sharper numbers and fewer surprises.",
    icon: MdOutlineAnalytics,
    label: "Strategic",
    title: "Commercial insight that travels",
  },
] as const;

const trustSignals = [
  "Business setup to recurring compliance",
  "Tax, VAT, audit, AML, and accounting alignment",
  "UAE market focus with global delivery standards",
  "Clear communication for high-stakes decisions",
] as const;

const milestones = [
  {
    description:
      "We map the company structure, regulatory exposure, reporting needs, and leadership priorities before recommending the route.",
    step: "01",
    title: "Understand the operating reality",
  },
  {
    description:
      "The advisory plan is shaped around licensing, tax, accounting, compliance, and the documents required to keep momentum clean.",
    step: "02",
    title: "Design the right control path",
  },
  {
    description:
      "Specialists coordinate delivery, keep communication visible, and refine the approach as the business grows.",
    step: "03",
    title: "Execute with accountable support",
  },
] as const;

export function AboutPage() {
  return (
    <div className="overflow-x-hidden bg-background font-body-md text-on-surface">
      <main>
        <section className="relative isolate flex min-h-[72vh] items-center overflow-hidden bg-primary pt-40">
          <div className="absolute inset-0 z-0">
            <Image
              alt="Dubai advisory boardroom at dusk"
              className="object-cover"
              fill
              priority
              sizes="100vw"
              src={heroImage}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,193,118,0.12),transparent_28%),linear-gradient(90deg,rgba(0,26,51,0.78),rgba(0,26,51,0.55),rgba(0,26,51,0.22))]" />
          </div>

          <div className="relative z-10 mx-auto grid w-full max-w-container-max items-end gap-12 px-gutter pb-24 text-white lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary-fixed shadow-sm backdrop-blur-xl">
                About Reyaansh Advisors
              </span>
              <h1 className="mt-7 max-w-4xl font-display-lg text-display-lg-mobile leading-tight md:text-display-lg">
                Built for businesses that need clarity before speed.
              </h1>
              <p className="mt-6 max-w-2xl font-body-lg text-white/78">
                Reyaansh Advisors brings UAE business setup, tax, accounting,
                audit, and compliance support into one calm, accountable
                advisory experience.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href={routes.services}
                  className="group inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-4 font-label-md text-[12px] uppercase tracking-[0.16em] text-white shadow-[0_18px_40px_rgba(119,90,25,0.3)] transition-all hover:-translate-y-0.5 hover:bg-secondary-fixed-dim hover:text-primary"
                >
                  Explore Services
                  <MdArrowForward
                    aria-hidden="true"
                    className="text-base transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  href={routes.contact}
                  className="inline-flex items-center rounded-full border border-white/18 bg-white/8 px-7 py-4 font-label-md text-[12px] uppercase tracking-[0.16em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-white/12"
                >
                  Start a Conversation
                </Link>
              </div>
            </div>

            <div className="glass-dark-card rounded-[2rem] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.18)] lg:col-span-5">
              <p className="font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary-fixed">
                Advisory Focus
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-[1.4rem] border border-white/10 bg-white/8 p-5">
                  <p className="font-headline-md text-4xl text-white">7</p>
                  <p className="mt-2 font-label-md text-[10px] uppercase tracking-[0.14em] text-white/58">
                    Core Services
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-white/8 p-5">
                  <p className="font-headline-md text-4xl text-secondary-fixed">
                    UAE
                  </p>
                  <p className="mt-2 font-label-md text-[10px] uppercase tracking-[0.14em] text-white/58">
                    Market Lens
                  </p>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                {trustSignals.map((signal) => (
                  <div
                    key={signal}
                    className="flex items-center gap-3 rounded-[1rem] border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/78"
                  >
                    <MdCheckCircle
                      aria-hidden="true"
                      className="shrink-0 text-secondary-fixed"
                    />
                    <span>{signal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-surface py-section-padding-desktop">
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-secondary-fixed/10 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-full w-1/4 bg-gradient-to-tr from-primary-container/8 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-container-max px-gutter">
            <div className="mb-14 max-w-3xl">
              <span className="font-label-md uppercase tracking-[0.2em] text-secondary">
                How We Think
              </span>
              <h2 className="mt-4 font-headline-md text-4xl leading-tight text-primary md:text-5xl">
                Practical advisory, designed like a control room.
              </h2>
              <p className="mt-5 max-w-2xl font-body-lg text-on-surface-variant">
                The firm is built around a simple idea: ambitious businesses
                move better when compliance, numbers, and setup decisions are
                coordinated from the start.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {principles.map((principle) => {
                const Icon = principle.icon;

                return (
                  <article
                    key={principle.title}
                    className="glass-card gold-accent-top group rounded-[2rem] p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(0,26,51,0.14)]"
                  >
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <span className="rounded-full border border-secondary/20 bg-white/70 px-3 py-1.5 font-label-md text-[11px] uppercase tracking-[0.16em] text-secondary">
                        {principle.label}
                      </span>
                      <Icon
                        aria-hidden="true"
                        className="rounded-2xl bg-secondary-fixed/24 p-2 text-5xl text-secondary transition-transform group-hover:scale-110"
                      />
                    </div>
                    <h3 className="font-headline-sm text-2xl text-primary">
                      {principle.title}
                    </h3>
                    <p className="mt-4 font-body-md leading-7 text-on-surface-variant">
                      {principle.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#001A33_0%,#07233f_58%,#12395c_100%)] py-section-padding-desktop text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(233,193,118,0.18),transparent_30%)]" />
          <div className="relative mx-auto max-w-container-max px-gutter">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <span className="inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary-fixed">
                  Our Operating Rhythm
                </span>
                <h2 className="mt-6 font-headline-md text-4xl leading-tight md:text-5xl">
                  Calm structure for complex business moments.
                </h2>
                <p className="mt-5 font-body-lg text-white/70">
                  Whether you are forming, scaling, cleaning up records, or
                  preparing for regulatory review, the engagement is organized
                  around visibility and ownership.
                </p>
                <Link
                  href={routes.contact}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-4 font-label-md text-[12px] uppercase tracking-[0.16em] text-white transition-all hover:-translate-y-0.5 hover:bg-secondary-fixed-dim hover:text-primary"
                >
                  Talk to an Advisor
                  <MdArrowForward aria-hidden="true" />
                </Link>
              </div>

              <div className="space-y-5 lg:col-span-7">
                {milestones.map((milestone) => (
                  <div
                    key={milestone.title}
                    className="glass-dark-card flex flex-col gap-5 rounded-[2rem] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.14)] md:flex-row md:items-start"
                  >
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.4rem] border border-secondary/20 bg-white/8 font-headline-sm text-xl text-secondary-fixed">
                      {milestone.step}
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-2xl text-white">
                        {milestone.title}
                      </h3>
                      <p className="mt-3 font-body-md leading-7 text-white/68">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-[0_24px_60px_rgba(0,0,0,0.14)] backdrop-blur-xl md:flex md:items-center md:justify-between md:gap-8">
              <div>
                <MdOutlineRocketLaunch
                  aria-hidden="true"
                  className="mb-4 text-4xl text-secondary-fixed"
                />
                <h3 className="font-headline-sm text-2xl text-white">
                  Ready for the next structured move?
                </h3>
                <p className="mt-3 max-w-2xl font-body-md text-white/68">
                  Review the full advisory platform or speak with the team
                  about the cleanest next step for your business.
                </p>
              </div>
              <Link
                href={routes.services}
                className="mt-6 inline-flex shrink-0 items-center justify-center rounded-full border border-white/12 bg-white px-6 py-3 font-label-md text-[12px] uppercase tracking-[0.14em] text-primary transition-all hover:-translate-y-0.5 hover:bg-secondary-fixed md:mt-0"
              >
                View Service Platform
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
