import { ourServices } from "@/lib/site-pages";

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
  { label: "Case Studies", href: "/case-studies" },
  {
    label: "Locations",
    href: "/locations",
    matchPrefix: "/locations",
  },
  {
    label: "Services",
    href: "/our-services",
    hasDropdown: true,
    matchPrefix: "/our-services",
  },
];

export const dropdownItems: Record<string, { label: string; href: string }[]> = {
  Services: [
    {
      label: "All Services",
      href: "/our-services",
    },
    ...ourServices.map((service) => ({
      label: service.label,
      href: `/our-services/${service.slug}`,
    })),
  ],
};

