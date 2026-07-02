"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type FocusEvent } from "react";
import {
  MdArrowForward,
  MdClose,
  MdKeyboardArrowDown,
  MdMenu,
} from "react-icons/md";
import { SiteLogo } from "@/components/site-logo";
import { routes, serviceMenuLinks } from "@/lib/routes";

type PrimaryNavLink = {
  href: string;
  label: string;
};

const leadingLinks: readonly PrimaryNavLink[] = [
  { href: routes.home, label: "Home" },
  { href: routes.about, label: "About" },
  { href: routes.sectors, label: "Sectors" },
];

const trailingLinks: readonly PrimaryNavLink[] = [
  { href: routes.careers, label: "Careers" },
  { href: routes.blogs, label: "Blogs" },
  { href: routes.contact, label: "Contact" },
];

const allServicesLink = serviceMenuLinks[0];
const individualServiceLinks = serviceMenuLinks.slice(1);

function getDesktopLinkClasses(isActive: boolean) {
  return isActive
    ? "rounded-full bg-[linear-gradient(135deg,#775a19_0%,#9c7420_100%)] px-3.5 py-2 font-body-md text-[13px] font-semibold text-white shadow-[0_10px_24px_rgba(119,90,25,0.22)]"
    : "rounded-full px-3.5 py-2 font-body-md text-[13px] font-medium text-primary/78 transition-all duration-300 hover:bg-primary/6 hover:text-primary";
}

function getDesktopButtonClasses(isActive: boolean) {
  return isActive
    ? "inline-flex items-center gap-1 rounded-full bg-[linear-gradient(135deg,#775a19_0%,#9c7420_100%)] px-3.5 py-2 font-body-md text-[13px] font-semibold text-white shadow-[0_10px_24px_rgba(119,90,25,0.22)]"
    : "inline-flex items-center gap-1 rounded-full px-3.5 py-2 font-body-md text-[13px] font-medium text-primary/78 transition-all duration-300 hover:bg-primary/6 hover:text-primary";
}

function getMobileLinkClasses(isActive: boolean) {
  return isActive
    ? "flex items-center justify-between rounded-[1.1rem] bg-[linear-gradient(135deg,#001A33_0%,#163d63_100%)] px-4 py-3 text-white shadow-[0_14px_30px_rgba(0,26,51,0.14)]"
    : "flex items-center justify-between rounded-[1.1rem] border border-primary/8 bg-white/70 px-4 py-3 text-primary transition-all duration-300 hover:border-secondary/30 hover:bg-white";
}

export function SiteHeader() {
  const pathname = usePathname();
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const isDirectLinkActive = (href: string) => pathname === href;
  const isServicesActive = serviceMenuLinks.some(
    (link) => pathname === link.href,
  );

  const handleMenuBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setDesktopMenuOpen(false);
    }
  };

  const closeMenus = () => {
    setDesktopMenuOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-3 z-50 px-3 sm:px-gutter">
      <div className="mx-auto max-w-[1220px]">
        <div className="relative rounded-[1.25rem] border border-white/80 bg-white/82 px-3 py-2 shadow-[0_18px_48px_rgba(0,26,51,0.12)] backdrop-blur-2xl sm:px-4">
          <div className="pointer-events-none absolute inset-0 rounded-[1.25rem] bg-[radial-gradient(circle_at_top_right,rgba(233,193,118,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.28),transparent_72%)]" />

          <div className="relative flex items-center justify-between gap-2">
            <Link
              href={routes.home}
              className="flex shrink-0 items-center"
              onClick={closeMenus}
            >
              <SiteLogo priority size="header" />
            </Link>

            <div className="hidden min-w-0 flex-1 items-center justify-center lg:flex">
              <div className="flex items-center gap-0.5 rounded-full border border-primary/8 bg-white/66 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
                {leadingLinks.map((link) => {
                  const isActive = isDirectLinkActive(link.href);

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={getDesktopLinkClasses(isActive)}
                      onClick={closeMenus}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                <div
                  className="relative"
                  onBlur={handleMenuBlur}
                  onMouseEnter={() => setDesktopMenuOpen(true)}
                  onMouseLeave={() => setDesktopMenuOpen(false)}
                >
                  <button
                    type="button"
                    aria-expanded={desktopMenuOpen}
                    aria-haspopup="menu"
                    className={getDesktopButtonClasses(isServicesActive)}
                    onClick={() => setDesktopMenuOpen((open) => !open)}
                    onFocus={() => setDesktopMenuOpen(true)}
                  >
                    Services
                    <MdKeyboardArrowDown
                      aria-hidden="true"
                      className={`text-lg transition-transform duration-300 ${
                        desktopMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`absolute left-1/2 top-full w-[29rem] -translate-x-1/2 pt-2 transition-all duration-300 ${
                      desktopMenuOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-2 opacity-0"
                    }`}
                  >
                    <div className="relative overflow-hidden rounded-[1.45rem] border border-white/80 bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(248,245,238,0.96)_48%,rgba(238,246,255,0.92))] p-2.5 shadow-[0_22px_52px_rgba(0,26,51,0.15)] backdrop-blur-2xl">
                      <div className="pointer-events-none absolute inset-x-7 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(119,90,25,0.55),transparent)]" />
                      <div className="pointer-events-none absolute top-0 right-0 h-28 w-28 rounded-full bg-secondary-container/26 blur-3xl" />
                      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-24 rounded-full bg-primary-fixed/52 blur-3xl" />
                      <div
                        role="menu"
                        aria-label="Services"
                        className="relative space-y-2"
                      >
                        <div className="flex items-center justify-between px-1.5 pt-0.5">
                          <p className="font-label-md text-[10px] uppercase tracking-[0.2em] text-secondary/90">
                            Service Menu
                          </p>
                          <span className="rounded-full border border-primary/8 bg-white/68 px-2 py-1 font-label-md text-[10px] font-semibold uppercase tracking-[0.12em] text-primary/56">
                            {individualServiceLinks.length} Paths
                          </span>
                        </div>

                        {allServicesLink ? (
                          <Link
                            href={allServicesLink.href}
                            role="menuitem"
                            aria-current={
                              pathname === allServicesLink.href
                                ? "page"
                                : undefined
                            }
                            className={`group flex items-center justify-between rounded-[1.05rem] border px-3.5 py-2.5 transition-all duration-300 ${
                              pathname === allServicesLink.href
                                ? "border-secondary/32 bg-[linear-gradient(135deg,rgba(255,222,165,0.58),rgba(210,228,255,0.42))] text-primary shadow-[0_12px_24px_rgba(119,90,25,0.11)]"
                                : "border-secondary/16 bg-[linear-gradient(135deg,rgba(255,222,165,0.34),rgba(255,255,255,0.78))] text-primary hover:border-secondary/34 hover:bg-white"
                            }`}
                            onClick={closeMenus}
                          >
                            <div className="flex min-w-0 items-center gap-2.5">
                              <span className="h-8 w-1.5 rounded-full bg-[linear-gradient(180deg,#775a19,#001A33)] shadow-[0_0_18px_rgba(119,90,25,0.25)]" />
                              <div className="min-w-0">
                                <span className="block truncate font-body-md text-sm font-semibold">
                                  {allServicesLink.label}
                                </span>
                                <span className="mt-0.5 block truncate font-body-md text-[11px] text-primary/58">
                                  {allServicesLink.description}
                                </span>
                              </div>
                            </div>
                            <MdArrowForward
                              aria-hidden="true"
                              className="text-base text-primary/40 transition-transform duration-300 group-hover:translate-x-1"
                            />
                          </Link>
                        ) : null}

                        <div className="grid grid-cols-2 gap-1.5">
                          {individualServiceLinks.map((link) => {
                            const isActive = pathname === link.href;

                            return (
                              <Link
                                key={link.label}
                                href={link.href}
                                role="menuitem"
                                aria-current={isActive ? "page" : undefined}
                                className={`group flex min-h-[58px] items-center justify-between gap-2 rounded-[0.95rem] border px-3 py-2.5 font-body-md text-sm transition-all duration-300 ${
                                  isActive
                                    ? "border-secondary/32 bg-[linear-gradient(135deg,rgba(0,26,51,0.94),rgba(22,61,99,0.9))] font-semibold text-white shadow-[0_12px_24px_rgba(0,26,51,0.14)]"
                                    : "border-primary/8 bg-white/64 text-primary/84 hover:-translate-y-0.5 hover:border-secondary/24 hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(255,222,165,0.22))] hover:text-primary hover:shadow-[0_10px_22px_rgba(0,26,51,0.08)]"
                                }`}
                                onClick={closeMenus}
                              >
                                <span className="min-w-0">
                                  <span className="block truncate font-semibold">
                                    {link.label}
                                  </span>
                                  <span
                                    className={`mt-0.5 block truncate text-[11px] leading-4 ${
                                      isActive
                                        ? "text-white/68"
                                        : "text-primary/50"
                                    }`}
                                  >
                                    {link.description}
                                  </span>
                                </span>
                                <MdArrowForward
                                  aria-hidden="true"
                                  className={`shrink-0 text-[15px] transition-transform duration-300 group-hover:translate-x-1 ${
                                    isActive ? "text-secondary-fixed" : "text-primary/35"
                                  }`}
                                />
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <span className="mx-1 hidden h-7 w-px bg-primary/10 xl:block" />

                {trailingLinks.map((link) => {
                  const isActive = isDirectLinkActive(link.href);

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={getDesktopLinkClasses(isActive)}
                      onClick={closeMenus}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href={routes.contact}
                className="group hidden items-center gap-2 rounded-full bg-[linear-gradient(135deg,#001A33_0%,#163d63_100%)] px-4 py-2.5 font-label-md text-[12px] text-white shadow-[0_14px_30px_rgba(0,26,51,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(0,26,51,0.22)] xl:inline-flex"
                onClick={closeMenus}
              >
                Free Consultation
                <MdArrowForward
                  aria-hidden="true"
                  className="text-sm transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <button
                type="button"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/10 bg-white/72 text-primary shadow-[0_12px_28px_rgba(0,26,51,0.1)] transition-colors duration-300 hover:border-secondary/35 hover:text-secondary lg:hidden"
                onClick={() => setMobileMenuOpen((open) => !open)}
              >
                {mobileMenuOpen ? (
                  <MdClose aria-hidden="true" className="text-2xl" />
                ) : (
                  <MdMenu aria-hidden="true" className="text-2xl" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            mobileMenuOpen
              ? "pointer-events-auto mt-3 max-h-[80vh] opacity-100"
              : "pointer-events-none mt-0 max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-[1.7rem] border border-white/72 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(248,249,250,0.94))] p-3 shadow-[0_20px_60px_rgba(0,26,51,0.14)] backdrop-blur-2xl">
            <div className="space-y-2.5">
              {leadingLinks.map((link) => {
                const isActive = isDirectLinkActive(link.href);

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={getMobileLinkClasses(isActive)}
                    onClick={closeMenus}
                  >
                    <span>{link.label}</span>
                    <MdArrowForward aria-hidden="true" className="text-lg" />
                  </Link>
                );
              })}

              <div className="rounded-[1.3rem] border border-primary/8 bg-white/72 p-2">
                <button
                  type="button"
                  aria-expanded={mobileServicesOpen}
                  className={`flex w-full items-center justify-between rounded-[1rem] px-3 py-3 text-left text-sm transition-all duration-300 ${
                    isServicesActive
                      ? "bg-secondary-fixed/24 text-primary"
                      : "text-primary hover:bg-primary/4"
                  }`}
                  onClick={() => setMobileServicesOpen((open) => !open)}
                >
                  <span>Services</span>
                  <MdKeyboardArrowDown
                    aria-hidden="true"
                    className={`text-2xl transition-transform duration-300 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    mobileServicesOpen
                      ? "grid-rows-[1fr] pt-2 opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="space-y-2 px-1 pb-1">
                      {serviceMenuLinks.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                          <Link
                            key={link.label}
                            href={link.href}
                            aria-current={isActive ? "page" : undefined}
                            className={`flex items-center justify-between rounded-[1rem] px-4 py-3 text-sm transition-all duration-300 ${
                              isActive
                                ? "bg-[linear-gradient(135deg,#001A33_0%,#163d63_100%)] text-white shadow-[0_14px_30px_rgba(0,26,51,0.14)]"
                                : "bg-primary/4 text-primary hover:bg-primary/7"
                            }`}
                            onClick={closeMenus}
                          >
                            <span>{link.label}</span>
                            <MdArrowForward
                              aria-hidden="true"
                              className="text-base"
                            />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 pt-1 sm:grid-cols-3">
                {trailingLinks.map((link) => {
                  const isActive = isDirectLinkActive(link.href);

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={getMobileLinkClasses(isActive)}
                      onClick={closeMenus}
                    >
                      <span>{link.label}</span>
                      <MdArrowForward aria-hidden="true" className="text-lg" />
                    </Link>
                  );
                })}
              </div>

              <Link
                href={routes.contact}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#001A33_0%,#163d63_100%)] px-6 py-4 font-label-md text-label-md text-white shadow-[0_16px_34px_rgba(0,26,51,0.18)]"
                onClick={closeMenus}
              >
                Free Consultation
                <MdArrowForward aria-hidden="true" className="text-sm" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

