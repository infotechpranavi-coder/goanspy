import { ourServices } from "@/lib/site-pages";
import { SERVICES_HUB_PATH, servicePagePath } from "@/lib/service-routes";

export const NAVY = "#334155";
export const NAVY_DARK = "#1e293b";
export const WINE_BERRY = "#2f80ed";
export const WINE_BERRY_DARK = "#1e5db0";
export const GOLD = "#ffd700";
export const GOLD_LIGHT = "#ffe780";
export const HEADER_BG = NAVY_DARK;

export const searchCategories = [
  "All Categories",
  "Living Room",
  "Bedroom",
  "Dining",
  "Office",
  "Outdoor",
  "Decor",
];

export const mainNavLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Blog", href: "/blog" },
  { label: "Publications", href: "/publications" },
  {
    label: "Services",
    href: SERVICES_HUB_PATH,
    hasDropdown: true,
    matchPrefix: SERVICES_HUB_PATH,
  },
];

export type DropdownItem = {
  label: string;
  href?: string;
  items?: { label: string; href: string }[];
};

export const dropdownItems: Record<string, DropdownItem[]> = {
  Services: [
    {
      label: "Personal Investigation",
      items: ourServices
        .filter(
          (s) =>
            ![
              "technical-surveillance-counter-measures-tscm",
              "due-diligence-investigations",
              "corporate-fraud-internal-misconduct-investigations",
              "intellectual-property-ip-anti-counterfeiting-operations",
              "pre-employment-employee-background-checks",
            ].includes(s.slug)
        )
        .map((s) => ({ label: s.label, href: servicePagePath(s.slug) })),
    },
    {
      label: "Corporate Investigation",
      items: ourServices
        .filter((s) =>
          [
            "technical-surveillance-counter-measures-tscm",
            "due-diligence-investigations",
            "corporate-fraud-internal-misconduct-investigations",
            "intellectual-property-ip-anti-counterfeiting-operations",
            "pre-employment-employee-background-checks",
          ].includes(s.slug)
        )
        .map((s) => ({ label: s.label, href: servicePagePath(s.slug) })),
    },
  ],
};

