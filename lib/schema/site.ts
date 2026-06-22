import { CONTACT_EMAIL, LOGO_SRC, PHONE_PRIMARY } from "@/lib/brand";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.goanspy.com";

export const AGENCY_ID = `${SITE_URL}/#agency`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const agencyAddress = {
  "@type": "PostalAddress" as const,
  streetAddress:
    "Office No. A-514, Edcon Centre, Mapusa Bus Stand, Near Aldona, Angod",
  addressLocality: "Mapusa",
  addressRegion: "Goa",
  postalCode: "403507",
  addressCountry: "IN",
};

export const agencyGeo = {
  "@type": "GeoCoordinates" as const,
  latitude: "15.5925",
  longitude: "73.8119",
};

export const agencyProvider = {
  "@type": "ProfessionalService" as const,
  name: "Goan Spy",
  url: `${SITE_URL}/`,
};

export const agencyPublisher = {
  "@type": "ProfessionalService" as const,
  name: "Goan Spy",
  url: `${SITE_URL}/`,
};

export const agencyCore = {
  "@type": "ProfessionalService" as const,
  "@id": AGENCY_ID,
  name: "Goan Spy",
  legalName: "Goan Spy Private Detective Agency",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}${LOGO_SRC}`,
  image: `${SITE_URL}${LOGO_SRC}`,
  telephone: `+91-${PHONE_PRIMARY}`,
  email: CONTACT_EMAIL,
  priceRange: "₹₹₹",
  foundingDate: "2013",
  address: agencyAddress,
  geo: agencyGeo,
};

export function absoluteUrl(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}
