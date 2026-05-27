import { ourServices } from "@/lib/site-pages";

export const NAVY = "#1a2744";
export const NAVY_DARK = "#141e33";
export const WINE_BERRY = "#5B1D36";
export const WINE_BERRY_DARK = "#451628";
export const GOLD = "#C4A574";
export const HEADER_BG = NAVY;

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
  { label: "Clients", href: "/clients" },
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
  {
    label: "Govt Regulation",
    href: "/government-regulation-legal-compliance",
  },
  {
    label: "Our Ethics",
    href: "/our-ethics-operational-principles",
  },
  {
    label: "Client Protocol",
    href: "/client-engagement-protocol",
  },
  {
    label: "Public Awareness",
    href: "/public-awareness-security-guide",
  },
] as const;

export const dropdownItems: Record<string, { label: string; href: string }[]> = {
  Services: ourServices.map((service) => ({
    label: service.label,
    href: `/our-services/${service.slug}`,
  })),
};
