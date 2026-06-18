export const routes = {
  about: "/about",
  aml: "/services/aml",
  auditSupport: "/services/audit-support",
  blogs: "/blogs",
  businessSetup: "/services/business-setup",
  careers: "/careers",
  contact: "/contact",
  corporateTax: "/services/corporate-tax",
  eInvoicing: "/services/e-invoicing",
  financialAccounting: "/services/financial-accounting",
  home: "/",
  sectors: "/sectors",
  services: "/services",
  vat: "/services/vat",
} as const;

export const homeSectionLinks = {
  about: { hash: "about", pathname: routes.home },
  blogs: { hash: "insights", pathname: routes.home },
} as const;

export const serviceMenuLinks = [
  {
    description: "See the complete advisory platform.",
    href: routes.services,
    label: "All Services",
  },
  {
    description: "Mainland, Free Zone, and Offshore formation support.",
    href: routes.businessSetup,
    label: "Business Setup",
  },
  {
    description: "Financial reporting, bookkeeping, and control clarity.",
    href: routes.financialAccounting,
    label: "Financial Accounting",
  },
  {
    description: "VAT registration, filing, advisory, and penalty support.",
    href: routes.vat,
    label: "VAT Services",
  },
  {
    description: "UAE Corporate Tax registration, impact, and filing support.",
    href: routes.corporateTax,
    label: "Corporate Tax",
  },
  {
    description: "Internal and external audit readiness support.",
    href: routes.auditSupport,
    label: "Audit Support",
  },
  {
    description: "FTA e-invoicing readiness and digital workflow alignment.",
    href: routes.eInvoicing,
    label: "E-Invoicing",
  },
  {
    description: "AML policy, risk, and DNFBP compliance frameworks.",
    href: routes.aml,
    label: "AML Compliance",
  },
] as const;
