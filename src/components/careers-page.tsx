import Link from "next/link";
import type { IconType } from "react-icons";
import {
  MdArrowForward,
  MdCheckCircle,
  MdOutlineAnalytics,
  MdOutlineChat,
  MdOutlineFactCheck,
  MdOutlineRocketLaunch,
  MdOutlineSecurity,
} from "react-icons/md";
import { routes } from "@/lib/routes";

type CareerCard = {
  description: string;
  icon: IconType;
  label: string;
  title: string;
};

const talentTracks: readonly CareerCard[] = [
  {
    description:
      "For people excited by company formation, licensing, and helping founders make confident entry decisions.",
    icon: MdOutlineRocketLaunch,
    label: "Formation",
    title: "Business Setup Advisory",
  },
  {
    description:
      "For detail-driven minds who enjoy tax impact, VAT cycles, accounting discipline, and clean reporting.",
    icon: MdOutlineAnalytics,
    label: "Numbers",
    title: "Tax, VAT & Accounting",
  },
  {
    description:
      "For specialists who like controls, audit readiness, AML documentation, and regulatory calm under pressure.",
    icon: MdOutlineSecurity,
    label: "Controls",
    title: "Audit & Compliance",
  },
] as const;

const cultureNotes = [
  "Cross-functional exposure across UAE advisory workstreams",
  "Small-team ownership with visible client impact",
  "Mentorship, documentation discipline, and steady growth",
  "A premium brand environment built around clarity and trust",
] as const;

const hiringSteps = [
  {
    description:
      "Send your CV, portfolio, or short note explaining the advisory track that fits your strengths.",
    step: "01",
    title: "Join the talent pool",
  },
  {
    description:
      "We review profiles around upcoming business needs and keep promising candidates warm for the right opening.",
    step: "02",
    title: "Match with future roles",
  },
  {
    description:
      "When a role opens, shortlisted candidates move into a focused conversation with the leadership team.",
    step: "03",
    title: "Start the conversation",
  },
] as const;

export function CareersPage() {
  return (
    <div className="overflow-x-hidden bg-background font-body-md text-on-surface">
      <main>
        <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#001A33_0%,#07233f_56%,#12395c_100%)] pt-44 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(233,193,118,0.2),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.1),transparent_26%)]" />
          <div className="absolute -right-24 top-24 h-80 w-80 rounded-full border border-secondary/20 bg-secondary/10 blur-3xl" />
          <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-white/8 blur-3xl" />

          <div className="relative mx-auto grid max-w-container-max gap-12 px-gutter pb-24 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary-fixed shadow-sm backdrop-blur-xl">
                Careers at Reyaansh Advisors
              </span>
              <h1 className="mt-7 max-w-4xl font-display-lg text-display-lg-mobile leading-tight md:text-display-lg">
                Help build a sharper UAE advisory practice from the inside.
              </h1>
              <p className="mt-6 max-w-2xl font-body-lg text-white/76">
                Our careers page is in its early phase, but the talent door is
                open. We are building a network of curious, careful, ambitious
                people who want real advisory responsibility.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="mailto:info@reyaanshadvisors.com?subject=Career%20Application"
                  className="group inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-4 font-label-md text-[12px] uppercase tracking-[0.16em] text-white shadow-[0_18px_40px_rgba(119,90,25,0.3)] transition-all hover:-translate-y-0.5 hover:bg-secondary-fixed-dim hover:text-primary"
                >
                  Submit Your CV
                  <MdArrowForward
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
                <Link
                  href={routes.about}
                  className="inline-flex items-center rounded-full border border-white/18 bg-white/8 px-7 py-4 font-label-md text-[12px] uppercase tracking-[0.16em] text-white backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-white/12"
                >
                  Learn About Us
                </Link>
              </div>
            </div>

            <div className="glass-dark-card rounded-[2.2rem] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.18)] lg:col-span-5">
              <div className="rounded-[1.6rem] border border-white/10 bg-white/8 p-5">
                <p className="font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary-fixed">
                  Current Hiring Status
                </p>
                <h2 className="mt-4 font-headline-sm text-3xl text-white">
                  Talent pool open
                </h2>
                <p className="mt-3 font-body-md leading-7 text-white/68">
                  Formal job listings are being shaped. Strong profiles can
                  still introduce themselves now and be considered as roles
                  become active.
                </p>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-[1.3rem] border border-white/10 bg-white/6 p-4">
                  <p className="font-headline-md text-3xl text-secondary-fixed">
                    3
                  </p>
                  <p className="mt-1 font-label-md text-[10px] uppercase tracking-[0.14em] text-white/58">
                    Focus Tracks
                  </p>
                </div>
                <div className="rounded-[1.3rem] border border-white/10 bg-white/6 p-4">
                  <p className="font-headline-md text-3xl text-white">Open</p>
                  <p className="mt-1 font-label-md text-[10px] uppercase tracking-[0.14em] text-white/58">
                    Introductions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-surface py-section-padding-desktop">
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-secondary-fixed/10 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-container-max px-gutter">
            <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-3xl">
                <span className="font-label-md uppercase tracking-[0.2em] text-secondary">
                  Future Teams
                </span>
                <h2 className="mt-4 font-headline-md text-4xl leading-tight text-primary md:text-5xl">
                  Tracks we are preparing to grow.
                </h2>
              </div>
              <p className="max-w-sm font-body-md leading-7 text-on-surface-variant">
                If one of these areas feels like your lane, this is a good time
                to make yourself visible before the listings go live.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {talentTracks.map((track) => {
                const Icon = track.icon;

                return (
                  <article
                    key={track.title}
                    className="glass-card gold-accent-top group rounded-[2rem] p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(0,26,51,0.14)]"
                  >
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <span className="rounded-full border border-secondary/20 bg-white/70 px-3 py-1.5 font-label-md text-[11px] uppercase tracking-[0.16em] text-secondary">
                        {track.label}
                      </span>
                      <Icon
                        aria-hidden="true"
                        className="rounded-2xl bg-secondary-fixed/24 p-2 text-5xl text-secondary transition-transform group-hover:scale-110"
                      />
                    </div>
                    <h3 className="font-headline-sm text-2xl text-primary">
                      {track.title}
                    </h3>
                    <p className="mt-4 font-body-md leading-7 text-on-surface-variant">
                      {track.description}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mt-10 rounded-[2rem] border border-white/70 bg-white/78 p-8 shadow-[0_24px_60px_rgba(0,26,51,0.08)] backdrop-blur-xl">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-5">
                  <MdOutlineChat
                    aria-hidden="true"
                    className="mb-4 text-4xl text-secondary"
                  />
                  <h3 className="font-headline-sm text-3xl text-primary">
                    What we value in early team members.
                  </h3>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
                  {cultureNotes.map((note) => (
                    <div
                      key={note}
                      className="flex items-start gap-3 rounded-[1.2rem] border border-primary/8 bg-surface-container-low px-4 py-3"
                    >
                      <MdCheckCircle
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-secondary"
                      />
                      <span className="font-body-md text-sm leading-6 text-on-surface-variant">
                        {note}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-surface-container-high py-section-padding-desktop">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(233,193,118,0.08),transparent_42%)]" />
          <div className="relative mx-auto max-w-container-max px-gutter">
            <div className="mb-14 text-center">
              <span className="font-label-md uppercase tracking-[0.2em] text-secondary">
                Application Flow
              </span>
              <h2 className="mt-4 font-headline-md text-4xl text-primary md:text-5xl">
                Simple now, structured as we scale.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {hiringSteps.map((item) => (
                <div
                  key={item.title}
                  className="glass-card rounded-[2rem] p-7 shadow-[0_24px_60px_rgba(0,26,51,0.08)]"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-[linear-gradient(135deg,#001A33_0%,#163d63_100%)] font-headline-sm text-lg text-secondary-fixed">
                      {item.step}
                    </span>
                    <MdOutlineFactCheck
                      aria-hidden="true"
                      className="text-3xl text-secondary/70"
                    />
                  </div>
                  <h3 className="font-headline-sm text-2xl text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-4 font-body-md leading-7 text-on-surface-variant">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 overflow-hidden rounded-[2.4rem] border border-[#0e3558] bg-[linear-gradient(135deg,#001A33_0%,#07233f_60%,#143e61_100%)] p-8 text-white shadow-[0_28px_80px_rgba(0,26,51,0.24)] md:p-12">
              <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="font-label-md text-[11px] uppercase tracking-[0.2em] text-secondary-fixed">
                    Early Talent Introductions
                  </p>
                  <h3 className="mt-4 font-headline-md text-3xl">
                    Send us the strongest version of your story.
                  </h3>
                  <p className="mt-4 max-w-2xl font-body-md leading-7 text-white/70">
                    Include your CV, preferred advisory track, and anything that
                    shows how you think. A short, clear note beats a giant wall
                    of text. Tiny mercy for every inbox involved.
                  </p>
                </div>
                <a
                  href="mailto:info@reyaanshadvisors.com?subject=Career%20Application"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-7 py-4 font-label-md text-[12px] uppercase tracking-[0.16em] text-white transition-all hover:-translate-y-0.5 hover:bg-secondary-fixed-dim hover:text-primary"
                >
                  Email Your CV
                  <MdArrowForward aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
