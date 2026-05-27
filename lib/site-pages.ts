export const ourServices = [
  {
    label: "Personal & Matrimonial Investigations",
    slug: "personal-matrimonial-investigations",
  },
  {
    label: "Infidelity & Extramarital Affairs Investigations",
    slug: "infidelity-extramarital-affairs-investigations",
  },
  {
    label: "Pre-Matrimonial & Background Verification",
    slug: "pre-matrimonial-background-verification",
  },
  {
    label: "Child Custody & Teenager Lifestyle Monitoring",
    slug: "child-custody-teenager-lifestyle-monitoring",
  },
  {
    label: "Missing Persons Investigations",
    slug: "missing-persons-investigations",
  },
  {
    label: "Pre-Employment & Employee Background Checks",
    slug: "pre-employment-employee-background-checks",
  },
  {
    label: "Corporate Fraud & Internal Misconduct Investigations",
    slug: "corporate-fraud-internal-misconduct-investigations",
  },
  {
    label: "Due Diligence Investigations",
    slug: "due-diligence-investigations",
  },
  {
    label: "Intellectual Property (IP) & Anti-Counterfeiting Operations",
    slug: "intellectual-property-ip-anti-counterfeiting-operations",
  },
  {
    label: "Technical Surveillance Counter-Measures (TSCM)",
    slug: "technical-surveillance-counter-measures-tscm",
  },
] as const;

export const industries = [
  { label: "Corporate Office", slug: "corporate-office" },
  { label: "Pharmaceutical & Research Centers", slug: "pharmaceutical-research-centers" },
  { label: "Education & Learning Centers", slug: "education-learning-centers" },
  { label: "Banking & Finance Sector", slug: "banking-finance-sector" },
  { label: "Hospital & Healthcare", slug: "hospital-healthcare" },
  { label: "Real Estate Projects", slug: "real-estate-projects" },
] as const;

export function getServiceBySlug(slug: string) {
  return ourServices.find((s) => s.slug === slug);
}

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug);
}
