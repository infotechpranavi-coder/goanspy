import type { Block } from "@/components/RichContent";

export const governmentRegulationHighlights = [
  {
    value: "100%",
    label: "Lawful Scope",
    detail:
      "Every assignment is vetted for legitimate interest and lawful investigative purpose before field execution begins.",
  },
  {
    value: "Article 21",
    label: "Privacy Aligned",
    detail:
      "Operations are designed around constitutional privacy boundaries and civil-liberty safeguards.",
  },
  {
    value: "DPDP",
    label: "Data Governance",
    detail:
      "Purpose limitation, controlled retention, and secure handling govern our digital case workflows.",
  },
  {
    value: "3-Phase",
    label: "Compliance Protocol",
    detail:
      "Legal scoping, compliant fieldwork, and secure dossier delivery structure every case lifecycle.",
  },
] as const;

export const governmentRegulationLegalStance = {
  title: "Our Legal Stance - The Foundations of Lawful Intelligence",
  paragraphs: [
    "In the private investigation industry, credibility is forged through strict adherence to the law. Goan Spy operates not outside the legal framework, but as a disciplined, fully compliant asset within it. A common question among corporate boards, legal representatives, and private citizens across Goa is whether hiring a private investigator is legal. In the Union of India, hiring a private detective agency is completely lawful, provided that the agency operates within constitutional boundaries, respects individual civil liberties, and avoids infringing upon statutory laws.",
    "Goan Spy is a fully registered commercial entity operating from our regional corporate office at Office No. A-514, Edcon Centre, near the Mapusa Bus Stand, Goa. We maintain active compliance across mandatory state and central fiscal frameworks, including Ministry of Corporate Affairs expectations and local municipal shop and establishment updates.",
    "While the Private Detective Agencies (Regulation) Bill remains under parliamentary review, Goan Spy has proactively implemented an internal compliance structure that mirrors the highest standards proposed in that framework. We do not engage in gray-market tactics, unvouched fieldwork, or unauthorized operations. Every contract we sign is a legally binding document that protects the client from liability while establishing a clearly authorized scope of work.",
  ],
  bullets: [
    "Registered commercial operations from Mapusa, Goa.",
    "Clear contractual scoping before assignment acceptance.",
    "No unauthorized or gray-market investigative activity.",
    "Compliance-first structure for corporate and private clients.",
  ],
} as const;

export const governmentRegulationPrivacy = {
  title: "Constitutional Boundaries & The Right to Privacy",
  intro:
    "Our investigative practices are guided by landmark judicial precedent, including Justice K. S. Puttaswamy (Retd.) v. Union of India, which recognized privacy as a fundamental right under Article 21 of the Constitution of India. Goan Spy respects this boundary at every stage of operational planning.",
  paragraphs: [
    "Our expertise lies in gathering public-domain intelligence, visible behavioral surveillance, open-source intelligence, and voluntary background disclosures. We understand where civil liberties end and investigative authority begins.",
    "To ensure clients remain insulated from legal complications, Goan Spy enforces a strict internal code of conduct that refuses unlawful shortcuts commonly used by fraudulent or untrained operators.",
  ],
  prohibitions: [
    {
      title: "No Impersonation of Public Officials",
      text:
        "Under Section 170 of the IPC, impersonating a public servant is a criminal offense. Our operatives rely on lawful HUMINT and fieldcraft that never cross this statutory boundary.",
    },
    {
      title: "No Wiretapping or Illegal Interception",
      text:
        "We do not engage in illicit tapping, hacking, or unauthorized access to private communications. Instead, we gather evidence through physical monitoring, public tracking, and exposed digital signatures.",
    },
    {
      title: "No Trespassing on Private Property",
      text:
        "Our agents work from public vantage points and authorized spaces. We do not breach private premises, scale boundaries, or enter property without valid consent.",
    },
  ],
} as const;

export const governmentRegulationDpdp = {
  title: "The Digital Personal Data Protection (DPDP) Act Compliance",
  paragraphs: [
    "As investigations increasingly touch digital environments, data collection and processing demand greater accountability. Following the execution of the Digital Personal Data Protection Act and subsequent regulatory developments, Goan Spy has adapted its workflow to align with modern data-governance expectations.",
    "We apply this compliance lens to background checks, asset verification, pre-employment vetting, and digital case handling so that sensitive information remains purpose-bound, access-controlled, and defensible.",
  ],
  points: [
    {
      title: "Purpose Limitation",
      text:
        "Data gathered for a client brief is used strictly for that specific investigation and is never bartered, leaked, or repurposed for unrelated activity.",
    },
    {
      title: "Secure Technical Controls",
      text:
        "Our case systems rely on controlled-access digital handling and robust internal protection practices to reduce breach risk and unauthorized disclosure.",
    },
    {
      title: "Retention & Destruction Discipline",
      text:
        "After final case delivery, we initiate retention review and secure destruction practices to reduce unnecessary active-system exposure and respect erasure-oriented compliance expectations.",
    },
  ],
} as const;

export const governmentRegulationAdmissibility = {
  title: "Hyper-Local Ground Operations & Admissibility in Goan Courts",
  paragraphs: [
    "Our evidence is gathered to withstand scrutiny. Whether a case involves a matrimonial dispute before the District and Sessions Court in Margao, a corporate asset conflict near the Patto Centre in Panaji, or a labor-related matter around industrial sectors in Ponda and Vasco da Gama, the proof we provide is structured for clarity and reliability.",
    "We deliver high-definition photographs, clear unedited video, and meticulous chronological field logs with exact timestamps. Because our teams gather this material from public locations such as Calangute and Baga Beach walkways, transit corridors near Margao Railway Station, or public resort fronts in Candolim and Colva, the evidence is built as an observed factual record rather than an unlawfully obtained intrusion.",
    "When used alongside proper legal representation, these structured dossiers provide family courts, legal advisors, and corporate decision-makers with authentic and unmanipulated evidentiary context.",
  ],
  evidenceItems: [
    "High-definition photographic files",
    "Unedited video recordings",
    "Chronological field logs with timestamps",
    "Structured observation records from public locations",
  ],
  landmarks: [
    "District and Sessions Court, Margao",
    "Patto Centre, Panaji",
    "Ponda industrial sectors",
    "Vasco da Gama",
    "Calangute and Baga Beach",
    "Margao Railway Station",
    "Candolim and Colva",
  ],
} as const;

export const governmentRegulationAccountability = {
  title: "Our Code of Professional Accountability",
  intro:
    "To maintain our position as Goa's premier credible private investigation asset, Goan Spy applies a three-tier operational compliance protocol to every case file.",
  phases: [
    {
      step: "Phase 1",
      title: "Legal Scoping",
      text:
        "Rigorous vetting of client intent to ensure legitimate interest, lawful purpose, and properly bounded scope.",
    },
    {
      step: "Phase 2",
      title: "Compliant Fieldwork",
      text:
        "Execution of surveillance and intelligence gathering through lawful, public-domain, and structurally defensible methods.",
    },
    {
      step: "Phase 3",
      title: "Secure Dossier Delivery",
      text:
        "Encrypted transfer of timestamped evidence, structured findings, and disciplined case closure procedures.",
    },
  ],
  commitments: [
    {
      title: "Legitimate Interest Verification",
      text:
        "We do not accept assignments intended for unlawful stalking, harassment, retaliation, or extortion. Every case is screened for legitimate personal, familial, legal, or corporate interest.",
    },
    {
      title: "Transparent Documentation",
      text:
        "Clients receive clear agreements outlining scope and deliverables, aligned with our Bronze, Silver, and Gold package tiers.",
    },
    {
      title: "Operational Indemnity",
      text:
        "Our trained, law-aware field methods help protect client reputation and reduce the risk of exposure or liability caused by unlawful investigative conduct.",
    },
  ],
} as const;

export const governmentRegulationBlocks: Block[] = [
  {
    type: "p",
    text: "Goan Spy operates with a compliance-first mindset and structures engagements around lawful, ethical, and case-appropriate methods. Each assignment is reviewed for purpose, proportionality, and evidentiary relevance before field activity begins.",
  },
  {
    type: "p",
    text: "Where a matter overlaps with police, court, regulatory, or legal-advisory processes, our role is to support fact-finding responsibly while protecting client confidentiality and operational integrity.",
  },
  { type: "h3", text: "Our compliance approach includes" },
  {
    type: "ul",
    items: [
      "Screening assignments for lawful scope and legitimate purpose.",
      "Maintaining disciplined records of facts, timelines, and evidence.",
      "Avoiding speculative, coercive, or improperly intrusive practices.",
      "Coordinating with legal counsel or authorized stakeholders when needed.",
    ],
  },
];

export const ethicsBlocks: Block[] = [
  {
    type: "p",
    text: "Our ethics framework is built on discretion, factual accuracy, proportionality, and respect for confidentiality. We do not treat investigation as entertainment or gossip; every case is handled as a serious trust-based engagement.",
  },
  {
    type: "p",
    text: "Operational decisions are guided by whether a step is necessary, defensible, and relevant to the client's stated objective. This helps keep investigations focused and responsible from intake through reporting.",
  },
  { type: "h3", text: "Core operating principles" },
  {
    type: "ul",
    items: [
      "Confidentiality in communication, fieldwork, and reporting.",
      "Evidence over assumption or rumor.",
      "Minimal intrusion consistent with legitimate investigative need.",
      "Clear, honest reporting of what was confirmed, disproved, or remains unverified.",
    ],
  },
];

export const clientEngagementBlocks: Block[] = [
  {
    type: "p",
    text: "Every engagement begins with a confidential consultation to define the concern, objective, urgency, and acceptable scope of work. We use this stage to understand what the client needs proven and what outcome will be most useful.",
  },
  {
    type: "p",
    text: "Once a case is accepted, we align on communication expectations, evidence priorities, and reporting rhythm. This helps ensure the investigation remains focused, cost-aware, and operationally disciplined.",
  },
  { type: "h3", text: "Typical engagement stages" },
  {
    type: "ul",
    items: [
      "Initial consultation and case-feasibility review.",
      "Scope definition, planning, and field assignment.",
      "Progress updates where operationally appropriate.",
      "Evidence delivery and final findings summary.",
    ],
  },
];

export const publicAwarenessBlocks: Block[] = [
  {
    type: "p",
    text: "Public awareness is an important part of personal and organizational security. Many avoidable risks become serious only because warning signs are missed early or dismissed as routine inconvenience.",
  },
  {
    type: "p",
    text: "We encourage clients to combine common-sense precautions with timely fact-checking when behaviour, communication patterns, or business dealings stop making sense. Early awareness often reduces later damage.",
  },
  { type: "h3", text: "Practical guidance" },
  {
    type: "ul",
    items: [
      "Verify sensitive personal and professional claims before major commitments.",
      "Treat repeated secrecy, abrupt routine changes, and inconsistent explanations as indicators worth reviewing.",
      "Protect devices, documents, and meeting spaces when dealing with sensitive information.",
      "Escalate early when a concern may affect safety, reputation, finances, or legal exposure.",
    ],
  },
];
