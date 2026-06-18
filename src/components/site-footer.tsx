import Link from "next/link";
import { SiteLogo } from "@/components/site-logo";
import { routes, serviceMenuLinks } from "@/lib/routes";

const footerSections = [
  {
    links: [
      { href: routes.home, label: "Home" },
      { href: routes.about, label: "About" },
      { href: routes.services, label: "Services" },
      { href: routes.sectors, label: "Sectors" },
      { href: routes.careers, label: "Careers" },
      { href: routes.blogs, label: "Blogs" },
      { href: routes.contact, label: "Contact" },
    ],
    title: "Navigation",
  },
  {
    links: serviceMenuLinks.slice(1),
    title: "Core Services",
  },
] as const;

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-[#001A33] text-white"
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(233,193,118,0.16),transparent_52%)]" />
      <div className="relative mx-auto grid max-w-container-max gap-10 px-gutter py-20 md:grid-cols-[1.15fr_0.8fr_0.9fr_1.05fr] md:items-start">
        <div className="space-y-5">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3.5 py-2 font-label-md text-[10px] uppercase tracking-[0.14em] text-secondary-fixed">
            Premium Advisory Interface
          </div>
          <SiteLogo size="footer" />
          <p className="max-w-sm font-body-md text-[13px] leading-6 text-white/70">
            Strategic advisory for business setup, tax, accounting, and
            compliance in the UAE. Global standards with practical local
            execution.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              className="inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-2 font-body-md text-[13px] text-white/82 transition-colors hover:text-white"
              href="mailto:info@reyaanshadvisors.com"
            >
              info@reyaanshadvisors.com
            </a>
            <span className="font-label-md text-[10px] uppercase tracking-[0.12em] text-white/45">
              Available during business hours
            </span>
          </div>
        </div>

        {footerSections.map((section) => (
          <div key={section.title} className="space-y-4">
            <h5 className="font-label-md text-[10px] uppercase tracking-[0.14em] text-secondary-fixed">
              {section.title}
            </h5>
            <ul className="space-y-2.5">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link
                    className="font-body-md text-[13px] text-white/68 transition-colors hover:text-secondary-fixed"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="space-y-4">
          <h5 className="font-label-md text-[10px] uppercase tracking-[0.14em] text-secondary-fixed">
            Next Step
          </h5>
          <div className="rounded-[1.4rem] border border-white/10 bg-white/6 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <p className="font-body-md text-[13px] leading-6 text-white/70">
              Need support with setup, tax, VAT, audit, or compliance?
            </p>
            <a
              className="mt-4 inline-flex rounded-full bg-secondary px-4 py-2.5 font-label-md text-[10px] uppercase tracking-[0.12em] text-white transition-all hover:-translate-y-0.5 hover:bg-secondary-fixed-dim hover:text-primary"
              href="mailto:info@reyaanshadvisors.com?subject=Consultation%20Request"
            >
              Drop Us a Line
            </a>
          </div>
        </div>
      </div>

      <div className="relative mx-auto flex max-w-container-max flex-col items-center justify-between gap-4 border-t border-white/10 px-gutter py-6 text-center md:flex-row md:text-left">
        <p className="font-label-md text-[10px] opacity-75">
          &copy; {new Date().getFullYear()} Reyaansh Advisors. All rights
          reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <Link
            className="font-label-md text-[10px] uppercase tracking-[0.12em] text-white/42 transition-colors hover:text-white"
            href={routes.blogs}
          >
            Blogs
          </Link>
          <Link
            className="font-label-md text-[10px] uppercase tracking-[0.12em] text-white/42 transition-colors hover:text-white"
            href={routes.contact}
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
