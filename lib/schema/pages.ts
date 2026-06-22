import {
  AGENCY_ID,
  WEBSITE_ID,
  absoluteUrl,
  agencyAddress,
  agencyCore,
  agencyProvider,
  agencyPublisher,
} from "@/lib/schema/site";
import { serviceImages } from "@/lib/content/images";

/** Schema #1 — Homepage */
export function homePageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...agencyCore,
        description:
          "Goan Spy is Goa's premier private investigation agency specializing in personal surveillance, matrimonial background vetting, corporate risk assets, and professional technical counter-surveillance sweeps across North and South Goa.",
        areaServed: [
          { "@type": "AdministrativeArea", name: "North Goa" },
          { "@type": "AdministrativeArea", name: "South Goa" },
          { "@type": "AdministrativeArea", name: "Mapusa" },
          { "@type": "AdministrativeArea", name: "Panaji" },
          { "@type": "AdministrativeArea", name: "Margao" },
          { "@type": "AdministrativeArea", name: "Calangute" },
        ],
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: absoluteUrl("/"),
        name: "Goan Spy",
        publisher: { "@id": AGENCY_ID },
      },
    ],
  };
}

/** Schema #2 — About Us */
export function aboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": absoluteUrl("/about-us/#webpage"),
    url: absoluteUrl("/about-us"),
    name: "About Goan Spy | Profile & Ethics",
    description:
      "Learn about the operational history, core leadership, and professional investigative ethics of Goan Spy Detective Agency in Goa.",
    mainEntity: {
      "@type": "ProfessionalService",
      name: "Goan Spy",
      url: absoluteUrl("/"),
      knowsAbout: [
        "Private Intelligence",
        "Surveillance Protocols",
        "Data Destruction Frameworks",
      ],
    },
  };
}

/** Schema #3 — Contact Us */
export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": absoluteUrl("/contact-us/#webpage"),
    url: absoluteUrl("/contact-us"),
    name: "Contact Goan Spy | 24/7 Secure Intake Desk",
    description:
      "Connect securely with Goan Spy's confidential intake desk located at Edcon Centre, Mapusa, Goa.",
    mainEntity: {
      ...agencyProvider,
      telephone: agencyCore.telephone,
      email: agencyCore.email,
      address: agencyAddress,
    },
  };
}

/** Schema #4 — Services hub */
export function servicesHubSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": absoluteUrl("/services/#webpage"),
    url: absoluteUrl("/services"),
    name: "Investigative Services Index | Goan Spy",
    description:
      "Browse the complete spectrum of corporate intelligence, domestic surveillance, and technical safety sweeps provided across Goa.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Infidelity & Personal Surveillance",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Pre-Matrimonial Verification",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Corporate Fraud Due Diligence",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Technical Surveillance Counter-Measures (TSCM)",
        },
      ],
    },
  };
}

/** Schema #12 — Case studies hub */
export function caseStudiesPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: absoluteUrl("/case-studies"),
    name: "Anonymized Intelligence Case Dossiers",
    description:
      "Read sanitized real-world operational briefs demonstrating how Goan Spy uncovers evidence and solves complex briefs safely inside Goa.",
    creator: agencyProvider,
  };
}

/** Schemas #13, #14, #15 — Blog hub + featured posts */
export function blogPageSchema() {
  const tscmImage =
    serviceImages["technical-surveillance-counter-measures-tscm"];
  const hiddenCameraImage = tscmImage.startsWith("http")
    ? tscmImage
    : absoluteUrl(tscmImage);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": absoluteUrl("/blog/#blog"),
        url: absoluteUrl("/blog"),
        name: "Goan Spy Security & Awareness Insights Blog",
        description:
          "Expert insights on identifying hidden cameras, tracking digital risks, running pre-matrimonial validation, and mitigating corporate asset loss inside Goa.",
        publisher: agencyPublisher,
      },
      {
        "@type": "BlogPosting",
        "@id": absoluteUrl("/blog/signs-infidelity-goa-vacation/#article"),
        headline:
          "Signs of an Unfaithful Partner: Spotting Infidelity During a Goa Vacation",
        image: absoluteUrl("/services/infidelity_investigation.png"),
        datePublished: "2026-05-18",
        dateModified: "2026-06-14",
        author: {
          "@type": "Organization",
          name: "Goan Spy Intelligence Desk",
        },
        publisher: agencyPublisher,
        description:
          "An analysis of behavioral patterns, digital blackouts, and unverified schedule metrics pointing to partner unfaithfulness during coastal holiday travels across Goa.",
        mainEntityOfPage: absoluteUrl("/blog"),
      },
      {
        "@type": "BlogPosting",
        "@id": absoluteUrl("/blog/hidden-camera-detection-rental-villas/#article"),
        headline:
          "Hidden Cameras in Holiday Rentals: How to Protect Your Privacy in Goa",
        image: hiddenCameraImage,
        datePublished: "2026-05-18",
        dateModified: "2026-06-14",
        author: {
          "@type": "Organization",
          name: "Goan Spy Technical Desk",
        },
        publisher: agencyPublisher,
        description:
          "Learn the most common hiding locations for compact spy devices in luxury villa rentals and understand how professional TSCM sweeps neutralize risk.",
        mainEntityOfPage: absoluteUrl("/blog"),
      },
    ],
  };
}

/** Schemas #11 & #16 — Client protocol + pricing tiers */
export function clientProtocolPageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": absoluteUrl("/client-engagement-protocol/#webpage"),
        url: absoluteUrl("/client-engagement-protocol"),
        name: "Client Non-Disclosure & Operational Protocol Framework",
        description:
          "Review the rigid operational framework governing client intake, data destruction execution metrics, and absolute legal confidentiality regulations upheld by Goan Spy.",
        mainEntity: {
          "@type": "DigitalDocument",
          name: "Goan Spy Privacy Protection Code",
        },
      },
      {
        "@type": "PriceSpecification",
        name: "Goan Spy Operational Tiers",
        priceCurrency: "INR",
        valueAddedTaxIncluded: "true",
        description:
          "Structured investigation pricing tiers including Bronze, Silver, and Gold frameworks tailored specifically to personal, deep forensic background, and corporate technical risk scales.",
      },
    ],
  };
}
