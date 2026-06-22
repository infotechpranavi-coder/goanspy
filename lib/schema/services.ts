import { absoluteUrl, agencyProvider } from "@/lib/schema/site";

type ServiceSchema = {
  "@context": "https://schema.org";
  "@type": "Service";
  name: string;
  serviceType: string;
  provider: typeof agencyProvider;
  areaServed:
    | { "@type": "AdministrativeArea"; name: string }
    | { "@type": "AdministrativeArea"; name: string }[];
  description: string;
  url: string;
};

/** Service slug → schema (#5–#10). Keys match live routes under /services/[slug]. */
export const serviceSchemas: Record<string, ServiceSchema> = {
  "infidelity-extramarital-affairs-investigations": {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Infidelity and Extramarital Surveillance",
    serviceType: "Private Matrimonial Surveillance",
    provider: agencyProvider,
    url: absoluteUrl("/services/infidelity-extramarital-affairs-investigations"),
    areaServed: [
      { "@type": "AdministrativeArea", name: "Calangute" },
      { "@type": "AdministrativeArea", name: "Baga" },
      { "@type": "AdministrativeArea", name: "Candolim" },
    ],
    description:
      "Discreet, high-definition field tracking of partners traveling across coastal North and South Goa resort belts, ensuring clear visual proof from public spaces.",
  },
  "pre-matrimonial-background-verification": {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pre-Matrimonial Background Vetting",
    serviceType: "Background Verification",
    provider: agencyProvider,
    url: absoluteUrl("/services/pre-matrimonial-background-verification"),
    areaServed: [
      { "@type": "AdministrativeArea", name: "Porvorim" },
      { "@type": "AdministrativeArea", name: "Panaji" },
      { "@type": "AdministrativeArea", name: "Margao" },
    ],
    description:
      "Exhaustive lifestyle, alliance history, identity validation, civil litigation checks, and true financial health audits for prospective marriage candidates in Goa.",
  },
  "child-custody-teenager-lifestyle-monitoring": {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Child Custody and Lifestyle Monitoring",
    serviceType: "Legal Case Evidence Gathering",
    provider: agencyProvider,
    url: absoluteUrl("/services/child-custody-teenager-lifestyle-monitoring"),
    areaServed: { "@type": "AdministrativeArea", name: "Goa" },
    description:
      "Sensitive collection of unmanipulated, legally admissible visual documentation regarding environment safety and lifestyle patterns during visitation windows.",
  },
  "missing-persons-investigations": {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Missing Persons Location Tracing",
    serviceType: "Location Services",
    provider: agencyProvider,
    url: absoluteUrl("/services/missing-persons-investigations"),
    areaServed: [
      { "@type": "AdministrativeArea", name: "Anjuna" },
      { "@type": "AdministrativeArea", name: "Vagator" },
      { "@type": "AdministrativeArea", name: "Vasco da Gama" },
    ],
    description:
      "Rapid digital OSINT analysis paired with real-time field searches to safely locate missing family members or lost holiday tourists across Goa.",
  },
  "due-diligence-investigations": {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Corporate Investigations & Commercial Due Diligence",
    serviceType: "B2B Risk Intelligence",
    provider: agencyProvider,
    url: absoluteUrl("/services/due-diligence-investigations"),
    areaServed: [
      { "@type": "AdministrativeArea", name: "Panaji Patto Centre" },
      { "@type": "AdministrativeArea", name: "Verna Industrial Estate" },
      { "@type": "AdministrativeArea", name: "Ponda" },
    ],
    description:
      "Strategic evaluation of corporate liabilities, partner background vetting, internal theft detection, and asset searches prior to commercial land or asset acquisitions in Goa.",
  },
  "technical-surveillance-counter-measures-tscm": {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Technical Surveillance Counter-Measures (TSCM)",
    serviceType: "Electronic Privacy Security",
    provider: agencyProvider,
    url: absoluteUrl("/services/technical-surveillance-counter-measures-tscm"),
    areaServed: [
      { "@type": "AdministrativeArea", name: "Candolim" },
      { "@type": "AdministrativeArea", name: "Anjuna" },
      { "@type": "AdministrativeArea", name: "Canacona Palolem" },
    ],
    description:
      "Advanced professional bug sweeping using specialized electronic scanners to identify and dismantle hidden pinhole cameras, illicit microphones, and rogue transmitters inside luxury rental villas and corporate boardrooms.",
  },
};

export function getServiceSchema(slug: string) {
  return serviceSchemas[slug] ?? null;
}
