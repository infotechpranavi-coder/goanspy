import Link from "next/link";
import ContentPage from "@/components/ContentPage";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { pageImages } from "@/lib/content/images";

export const metadata = {
  title: "Case Studies & Real Case Dossiers | Goan Spy Detective Agency Goa",
  description:
    "Explore anonymized North Goa and South Goa case dossiers from Goan Spy covering infidelity, background checks, missing persons, corporate fraud, TSCM, and asset tracing.",
};

const sectionTitleStyle = {
  fontSize: "clamp(1.9rem, 3vw, 2.5rem)",
  lineHeight: 1.12,
  color: "var(--navy)",
  marginBottom: 16,
} as const;

const paragraphStyle = {
  fontSize: 16,
  lineHeight: 1.9,
  color: "var(--text-mid)",
} as const;

const labelStyle = {
  display: "inline-block",
  fontSize: 12,
  letterSpacing: "0.22em",
  textTransform: "uppercase" as const,
  color: "var(--wine-berry)",
  fontWeight: 700,
  marginBottom: 12,
} as const;

const caseLayoutClasses = [
  "xl:col-span-4",
  "xl:col-span-4",
  "xl:col-span-4",
  "xl:col-span-6",
  "xl:col-span-6",
] as const;

const caseCardMinHeights = [460, 460, 460, 430, 430] as const;

const northGoaCases = [
  {
    id: "01",
    title: "The Luxury Villa Deception",
    location: "Candolim & Calangute",
    category: "Infidelity & Cross-Border Surveillance",
    problem:
      'A high-net-worth client based in Delhi suspected her spouse of marital infidelity during frequent, unverified "corporate weekend retreats" to a private luxury villa enclave in Candolim.',
    strategy:
      "Goan Spy deployed a specialized static surveillance team near villa access points and used trained female detectives to blend into premium beach clubs where the subject was known to socialise. Operatives relied on low-light, long-range optical gear to document movement patterns without exposure.",
    result:
      "Within 48 hours, the team captured timestamped, high-definition video proof of the spouse accompanied by an undocumented partner. The final dossier, including vehicle numbers and resort check-in timings, gave the client undeniable facts.",
  },
  {
    id: "02",
    title: "The High-Society Alliance Verification",
    location: "Porvorim & Panaji",
    category: "Pre-Matrimonial Background Screening",
    problem:
      "A traditional family from Porvorim was close to finalizing a high-profile marriage alliance. The prospective groom claimed senior corporate employment and significant North Goa land holdings, but subtle discrepancies created concern.",
    strategy:
      "Our verification unit initiated a discreet multi-layered audit using litigation searches in Panaji legal records, physical address validation, and neighborhood-level reputation mapping through field agents.",
    result:
      "Goan Spy established that the subject had been terminated from his corporate role six months earlier due to financial misconduct, and that his claimed land holdings were heavily tied up in active disputes. The family withdrew before incurring major emotional and financial damage.",
  },
  {
    id: "03",
    title: 'The "Digital Nomad" Asset Disappearance',
    location: "Anjuna & Vagator",
    category: "Missing Persons & Open-Source Intelligence (OSINT)",
    problem:
      "A European family lost all communication with their 24-year-old son, who had traveled to Goa as a digital nomad. His last trace pointed to the Vagator belt before his phone went dark.",
    strategy:
      "Our cyber-intelligence desk mapped his last active networks and digital traces while ground teams interviewed hostel managers, scooter rental vendors, and beach-linked local contacts in Anjuna and nearby areas.",
    result:
      "Within 72 hours, the subject was traced to a remote communal setup near Chapora. He was found safe but in a severe personal and medical crisis, and secure contact was restored with his family.",
  },
  {
    id: "04",
    title: "Industrial Inventory Leakage & Stock Diversion",
    location: "Bicholim Industrial Estate",
    category: "Corporate Fraud & Supply Chain Intelligence",
    problem:
      "A manufacturing enterprise in Bicholim noted a persistent 12% discrepancy in high-value raw material stock over three quarters, while internal audits failed to isolate the source.",
    strategy:
      "Goan Spy ran a multi-layered corporate risk operation with undercover assets along transit corridors, vehicle tracking on outbound logistics trucks, and surveillance on suspicious stopovers.",
    result:
      "The team documented a coordinated internal ring in which transit drivers diverted raw material to an unauthorized scrap yard before the final weighing stage. The evidence allowed the board to terminate involved staff and proceed with legal action.",
  },
  {
    id: "05",
    title: "The Mapusa Market Counterfeit Ring",
    location: "Mapusa",
    category: "Intellectual Property (IP) & Anti-Counterfeiting",
    problem:
      "A premium apparel brand found high-quality counterfeit replicas of its latest designer line spreading through local stalls during the Friday market cycle, damaging both brand value and revenue.",
    strategy:
      "Our ground operatives performed low-profile market sweeps, sample buys, and static surveillance of delivery vehicles to trace the counterfeit stock back to its regional supply base.",
    result:
      "Goan Spy localized an unauthorized printing and warehousing facility operating out of a residential basement near Mapusa. The evidence dossier enabled a successful enforcement raid and seizure of counterfeit stock worth lakhs.",
  },
];

const southGoaCases = [
  {
    id: "06",
    title: "Tracing the Defaulter's Southern Assets",
    location: "Margao",
    category: "Corporate Due Diligence & Asset Searches",
    problem:
      "A financial institution needed to enforce a court recovery order against a commercial borrower who was claiming complete bankruptcy and zero recoverable assets.",
    strategy:
      "Our asset-tracing division conducted deep public record indexing, monitored lifestyle patterns across Salcete taluka, and traced registrations structured under proxy names and relatives.",
    result:
      "Goan Spy identified two high-value commercial property units and an active luxury vehicle fleet registered through a shell company controlled by the subject's immediate family. The legal team used the asset map to challenge the bankruptcy claim successfully.",
  },
  {
    id: "07",
    title: "The Maritime Vetting Breach",
    location: "Vasco da Gama (Mormugao Port)",
    category: "Intensive Employee Background Vetting",
    problem:
      "A prominent shipping and logistics firm near Mormugao Port suffered a serious data breach involving shipping manifests and customs filings, strongly indicating an internal leak.",
    strategy:
      "Goan Spy executed a structured screening campaign on employees with administrative access, combining lifestyle audits, spending-pattern review, and targeted digital forensic analysis.",
    result:
      "The investigation identified a mid-level logistics coordinator who had made substantial unexplained cash deposits. Physical surveillance captured meetings with a direct competitor in Vasco, and the employee confessed when confronted with the evidence trail.",
  },
  {
    id: "08",
    title: "The Southern Coastal Hideaway",
    location: "Colva & Benaulim",
    category: "Child Custody & Lifestyle Monitoring",
    problem:
      "During a high-stakes custody dispute, a parent received intelligence that the former spouse was neglecting the child's welfare during South Goa holiday stays while engaging in risky nightlife behavior.",
    strategy:
      "Operatives initiated low-profile observation around the Benaulim holiday rental and documented care routines, environmental conditions, and the people entering and leaving the child's living space.",
    result:
      "Goan Spy recorded clear photographic and video proof showing the child left unattended late into the night while the parent visited local nightlife venues. The structured chronology supported an immediate modification of custody terms in family court.",
  },
  {
    id: "09",
    title: "The Labor Sabotage Investigation",
    location: "Ponda Industrial Belt",
    category: "Corporate Security Auditing & Labor Disputes",
    problem:
      "A large manufacturing plant in Ponda experienced repeated machinery failures that indicated deliberate internal sabotage during sensitive union negotiations.",
    strategy:
      "We combined a technical risk audit with undercover observation inside evening shift operations, tracking maintenance bypasses, tool handling, and employee interaction patterns.",
    result:
      "An undercover asset captured a disgruntled maintenance staff member introducing foreign particles into hydraulic lines during low-activity transitions. The company avoided a wider labor crisis through targeted, evidence-backed termination.",
  },
  {
    id: "10",
    title: "Resort Espionage & The Privacy Sweep",
    location: "Canacona (Palolem)",
    category: "Technical Surveillance Counter-Measures (TSCM)",
    problem:
      "A luxury eco-resort in South Goa received an anonymous threat claiming private guest moments in premium villas had been compromised through hidden spy cameras.",
    strategy:
      "Goan Spy deployed a TSCM team with spectrum analyzers, NLJD equipment, and thermal imaging systems to execute a full electronic sweep during a scheduled maintenance window.",
    result:
      "The team identified and neutralized two pinhole wireless spy cameras concealed inside modified fixtures. The installation trail led back to a rogue former vendor technician, allowing the resort to contain the threat and protect its reputation.",
  },
];

function CaseGrid({
  title,
  eyebrow,
  description,
  cases,
}: {
  title: string;
  eyebrow: string;
  description: string;
  cases: typeof northGoaCases;
}) {
  return (
    <section
      style={{
        padding: "clamp(24px, 4vw, 38px) 0",
      }}
    >
      <span style={labelStyle}>{eyebrow}</span>
      <h2 style={sectionTitleStyle}>{title}</h2>
      <p style={{ ...paragraphStyle, maxWidth: 940, marginBottom: 24 }}>
        {description}
      </p>

      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12"
        style={{
          gap: 20,
          alignItems: "stretch",
        }}
      >
        {cases.map((caseFile, index) => (
          <article
            key={caseFile.id}
            className={`case-study-card ${caseLayoutClasses[index % caseLayoutClasses.length]}`}
            style={{
              height: "100%",
              minHeight: caseCardMinHeights[index % caseCardMinHeights.length],
              padding: "22px",
              borderRadius: 24,
              border: "1px solid rgba(26,39,68,0.08)",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(248,250,255,1))",
              boxShadow: "0 16px 34px rgba(26,39,68,0.06)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
            }}
          >
            <div
              style={{
                display: "grid",
                gap: 16,
                height: "100%",
                alignContent: "start",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 10,
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                >
                  <span
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 14,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 16,
                      fontWeight: 800,
                      color: "#1e5db0",
                      background: "linear-gradient(135deg, rgba(47,128,237,0.12), rgba(196,165,116,0.16))",
                      border: "1px solid rgba(47,128,237,0.16)",
                    }}
                  >
                    {caseFile.id}
                  </span>
                  <span
                    style={{
                      padding: "7px 10px",
                      borderRadius: 999,
                      fontSize: 12,
                      background: "rgba(47,128,237,0.10)",
                      color: "#1e5db0",
                      border: "1px solid rgba(47,128,237,0.14)",
                    }}
                  >
                    {caseFile.location}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "clamp(1.3rem, 2.1vw, 1.75rem)",
                    lineHeight: 1.2,
                    color: "var(--navy)",
                    marginBottom: 10,
                  }}
                >
                  {caseFile.title}
                </h3>
                <div
                  style={{
                    fontSize: 13,
                    lineHeight: 1.7,
                    color: "var(--text-mid)",
                    marginBottom: 12,
                  }}
                >
                  <strong>Service Category:</strong> {caseFile.category}
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gap: 12,
                }}
              >
                {[
                  { label: "The Problem", text: caseFile.problem },
                  { label: "The Strategy", text: caseFile.strategy },
                  { label: "The Result", text: caseFile.result },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      padding: "12px 14px",
                      borderRadius: 18,
                      background: "rgba(255,255,255,0.82)",
                      border: "1px solid rgba(26,39,68,0.06)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 12,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        fontWeight: 700,
                        marginBottom: 8,
                        color: "#1e5db0",
                      }}
                    >
                      {item.label}
                    </div>
                    <p
                      style={{
                        ...paragraphStyle,
                        fontSize: 14,
                        lineHeight: 1.7,
                        color: "var(--text-mid)",
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function CaseStudiesPage() {
  return (
    <ContentPage
      title="Real Case Dossiers"
      subtitle="Anonymous, evidence-led case studies that demonstrate how Goan Spy solves high-stakes personal and corporate investigations across North Goa and South Goa."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Case Studies" },
      ]}
      heroImage={{
        src: pageImages.industry,
        alt: "Goan Spy case studies and investigation dossiers",
      }}
      wrapContent={false}
      contentMaxWidth={1180}
    >
      <article style={{ display: "grid", gap: 24 }}>
        <ScrollReveal variant="fade-up" duration={0.65}>
          <section
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 30,
              padding: "clamp(28px, 5vw, 56px)",
              background:
                "linear-gradient(135deg, rgba(26,39,68,0.98) 0%, rgba(20,30,51,0.98) 54%, rgba(91,29,54,0.95) 100%)",
              color: "var(--white)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at top right, rgba(196,165,116,0.28), transparent 34%), radial-gradient(circle at 20% 85%, rgba(255,255,255,0.08), transparent 22%)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative", display: "grid", gap: 22 }}>
              <div style={{ maxWidth: 820 }}>
                <span
                  style={{
                    ...labelStyle,
                    color: "rgba(255,255,255,0.72)",
                  }}
                >
                  Goan Spy Detective Agency
                </span>
                <h2
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3.35rem)",
                    lineHeight: 1.02,
                    marginBottom: 16,
                    maxWidth: 780,
                  }}
                >
                  Real case files that show how local intelligence turns
                  uncertainty into proof.
                </h2>
                <p
                  style={{
                    fontSize: 17,
                    lineHeight: 1.9,
                    color: "rgba(255,255,255,0.84)",
                    maxWidth: 780,
                  }}
                >
                  These anonymized dossiers are designed to show method,
                  discipline, and results. Each file reflects the way Goan Spy
                  handles sensitive personal and commercial investigations
                  through discreet fieldwork, local terrain knowledge, and
                  evidence-led reporting.
                </p>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                <Link href="/contact-us" className="elemen-btn-primary">
                  Request a Confidential Consultation
                </Link>
                <Link
                  href="/our-services"
                  className="elemen-btn-outline"
                  style={{
                    color: "var(--white)",
                    borderColor: "rgba(255,255,255,0.72)",
                  }}
                >
                  Explore Investigation Services
                </Link>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: 14,
                }}
              >
                {[
                  { label: "10", text: "anonymized case dossiers" },
                  { label: "North Goa", text: "luxury, tourist, and industrial files" },
                  { label: "South Goa", text: "custody, corporate, and privacy files" },
                  { label: "Proof", text: "clear strategy-to-result storytelling" },
                ].map((item) => (
                  <div
                    key={item.text}
                    style={{
                      padding: "18px 18px 16px",
                      borderRadius: 20,
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    <div style={{ fontSize: 28, fontWeight: 800, marginBottom: 4 }}>
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        lineHeight: 1.6,
                        color: "rgba(255,255,255,0.82)",
                      }}
                    >
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" duration={0.65}>
          <section
            style={{
              padding: "clamp(22px, 4vw, 36px) 0",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <span style={labelStyle}>Trust Framework</span>
            <h2 style={sectionTitleStyle}>
              Professional case storytelling without compromising confidentiality
            </h2>
            <p style={{ ...paragraphStyle, maxWidth: 940, marginBottom: 22 }}>
              These files are written as structured intelligence summaries. They
              are designed to build trust by showing how Goan Spy thinks, plans,
              deploys, and delivers, while still preserving client privacy and
              operational discretion.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 18,
              }}
            >
              {[
                {
                  title: "Problem-Led Framing",
                  text: "Each case starts with a clear client problem so readers immediately understand the investigative stakes.",
                },
                {
                  title: "Tactical Transparency",
                  text: "The strategy section shows how field deployment, OSINT, surveillance, and local networks are actually used.",
                },
                {
                  title: "Result-Focused Proof",
                  text: "Every case closes on the practical outcome, whether that means evidence, recovery, legal leverage, or risk containment.",
                },
                {
                  title: "Strict Confidentiality",
                  text: "Names, identities, and sensitive specifics remain anonymized to protect the integrity of every engagement.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    padding: "20px",
                    borderRadius: 22,
                    background: "linear-gradient(180deg, rgba(245,244,241,0.9), rgba(255,255,255,1))",
                    border: "1px solid var(--border)",
                  }}
                >
                  <h3
                    style={{
                      fontSize: 20,
                      lineHeight: 1.25,
                      color: "var(--navy)",
                      marginBottom: 10,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={paragraphStyle}>{item.text}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" duration={0.68}>
          <CaseGrid
            eyebrow="Part 1"
            title="North Goa Case Files"
            description="These cases reflect the complexity of luxury surveillance, alliance verification, tourism-linked tracing, supply-chain fraud, and market-level anti-counterfeiting work across North Goa."
            cases={northGoaCases}
          />
        </ScrollReveal>

        <ScrollReveal variant="fade-up" duration={0.72}>
          <CaseGrid
            eyebrow="Part 2"
            title="South Goa Case Files"
            description="These southern dossiers show how Goan Spy handles financial asset tracing, insider breach investigations, child welfare observation, industrial sabotage, and advanced privacy sweeps."
            cases={southGoaCases}
          />
        </ScrollReveal>

      </article>

      <style>{`
        .case-study-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 22px 42px rgba(26,39,68,0.10);
          border-color: rgba(47,128,237,0.22) !important;
        }
      `}</style>
    </ContentPage>
  );
}
