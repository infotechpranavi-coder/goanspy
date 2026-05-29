import Link from "next/link";
import ContentPage from "@/components/ContentPage";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { pageImages } from "@/lib/content/images";

export const metadata = {
  title: "Client Operational Protocol | Goan Spy Detective Agency Goa",
  description:
    "Understand Goan Spy's structured four-stage client engagement process, from secure intake and legitimate vetting to field deployment, dossier delivery, and data erasure across Goa.",
};

const sectionTitleStyle = {
  fontSize: "clamp(1.9rem, 3vw, 2.5rem)",
  lineHeight: 1.12,
  color: "var(--navy)",
  marginBottom: 16,
} as const;

const paragraphStyle = {
  fontSize: 16,
  lineHeight: 1.95,
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

const phases = [
  {
    step: "Phase 1",
    title: "Secure Case Intake & Consultation",
    summary:
      "Your case begins through our secure line or encrypted email with optional anonymity during the first interaction.",
    detail:
      "A senior investigator reviews the raw situation, listens to your concerns, and defines the first working scope without demanding unnecessary personal data. Whether the matter involves a matrimonial concern, a family background check, asset theft, or a corporate fraud issue, the first touchpoint is designed to be calm, protected, and clinically structured.",
  },
  {
    step: "Phase 2",
    title: "Tactical Brief Building & Legitimate Vetting",
    summary:
      "We build the confidential case brief, verify the legal basis, and align your needs with a clear service scope.",
    detail:
      "Our compliance desk checks that a legitimate personal, familial, or commercial interest exists before fieldwork begins. We then map the assignment into Bronze, Silver, or Gold engagement tiers, locking in a defined timeline, methodology, and fixed cost structure before any operative hits the ground.",
  },
  {
    step: "Phase 3",
    title: "Precision Field Deployment & Monitoring",
    summary:
      "Once the brief is approved, our Goa-based field network moves with local awareness, disciplined camouflage, and active case monitoring.",
    detail:
      "Our operatives, including trained female detectives, deploy into the relevant geography with a targeted plan. Movement, observation, and documentation stay tied to the agreed operational objective so the investigation remains efficient, discreet, and evidence-led.",
  },
  {
    step: "Phase 4",
    title: "Definitive Dossier Handover & Secure Data Erasure",
    summary:
      "We close the loop with a formal evidence package and disciplined confidentiality controls after delivery.",
    detail:
      "Clients receive a structured intelligence dossier containing timestamped photographs, unedited video captured from public vantage points, verified background reporting, and chronological field logs. After secure transfer, active case data is systematically removed from working systems according to our confidentiality protocols.",
  },
];

const packages = [
  {
    name: "Bronze Engagement",
    subtitle: "Foundational Profiling",
    items: [
      "Basic background vetting",
      "Physical address validation",
      "Active employment verification",
      "General local reputation check",
    ],
  },
  {
    name: "Silver Engagement",
    subtitle: "Deep Character Vetting",
    items: [
      "Includes all Bronze protocol items",
      "Complete character and lifestyle audit",
      "Comprehensive social media auditing",
      "Family financial standing verification",
      "Individual association history tracing",
    ],
  },
  {
    name: "Gold Engagement",
    subtitle: "Full Surveillance & Vetting",
    items: [
      "Includes all Bronze and Silver items",
      "Direct relationship and infidelity monitoring",
      "Prior marriage or engagement verification",
      "Legal divorce and separation history audits",
      "Deep asset and liability analysis",
    ],
  },
];

export default function ClientEngagementProtocolPage() {
  return (
    <ContentPage
      title="Client Operational Protocol"
      subtitle="A structured, seamless, and highly confidential four-tier engagement process designed to protect your identity while delivering unassailable evidence across Goa."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Client Engagement Protocol" },
      ]}
      heroImage={{
        src: pageImages.contact,
        alt: "Client consultation and operational process at Goan Spy",
      }}
      wrapContent={false}
      contentMaxWidth={1120}
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
                  "radial-gradient(circle at top right, rgba(196,165,116,0.28), transparent 34%), radial-gradient(circle at 18% 85%, rgba(255,255,255,0.08), transparent 22%)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative", display: "grid", gap: 22 }}>
              <div style={{ maxWidth: 780 }}>
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
                    maxWidth: 760,
                  }}
                >
                  How we work, how we protect, and how we deliver.
                </h2>
                <p
                  style={{
                    fontSize: 17,
                    lineHeight: 1.9,
                    color: "rgba(255,255,255,0.84)",
                    maxWidth: 760,
                  }}
                >
                  Every Goan Spy case follows a secure four-stage operational
                  system built to protect identity, verify legitimate intent,
                  execute precisely, and hand over clear evidence without chaos
                  or guesswork.
                </p>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                <Link href="/contact-us" className="elemen-btn-primary">
                  Initiate Secure Consultation
                </Link>
                <Link
                  href="/government-regulation-legal-compliance"
                  className="elemen-btn-outline"
                  style={{
                    color: "var(--white)",
                    borderColor: "rgba(255,255,255,0.72)",
                  }}
                >
                  Review Operational Agreement
                </Link>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10,
                  color: "rgba(255,255,255,0.84)",
                  fontSize: 14,
                  lineHeight: 1.6,
                }}
              >
                {[
                  "Confidential intake from the first contact",
                  "Legitimate-interest screening before deployment",
                  "Hyper-local field execution across Goa",
                  "Secure dossier delivery and data erasure",
                ].map((item) => (
                  <span
                    key={item}
                    style={{
                      padding: "8px 14px",
                      borderBottom: "1px solid rgba(255,255,255,0.24)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" duration={0.65}>
          <section
            style={{
              padding: "clamp(20px, 4vw, 34px) 0",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <span style={labelStyle}>Section 1</span>
            <h2 style={sectionTitleStyle}>
              The Principle of Structured Intake
            </h2>
            <div style={{ display: "grid", gap: 18, maxWidth: 980 }}>
              <p style={paragraphStyle}>
                At <strong>Goan Spy</strong>, we do not deploy field agents
                based on casual conversations, unverified rumors, or vague
                requests. In private intelligence work, outcomes depend on
                disciplined design. Established in 2013, our agency operates
                from Office No. A-514, Edcon Centre, near the
                <strong> Mapusa Bus Stand, Goa</strong>, and was built to move
                away from unstructured field practices in favor of a clinically
                organized workflow.
              </p>
              <p style={paragraphStyle}>
                Every file handled by our team moves through a standardized
                Client Engagement Protocol. This framework helps contain
                personal vulnerability or corporate exposure from the first
                interaction, places your privacy behind strict confidentiality
                layers, and gives our field teams a precise operational
                blueprint.
              </p>
              <p style={paragraphStyle}>
                We combine empathy during intake with clinical precision in the
                field, so your investment translates into evidence that is
                usable, documented, and actionable rather than speculative or
                improvised.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                marginTop: 20,
                color: "var(--navy)",
                fontSize: 15,
              }}
            >
              <span>No unnecessary personal data at first contact</span>
              <span>•</span>
              <span>No deployment without objective definition</span>
              <span>•</span>
              <span>No costs without scope and timeline clarity</span>
              <span>•</span>
              <span>No accepted case without legitimate-interest review</span>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" duration={0.68}>
          <section
            style={{
              padding: "clamp(22px, 4vw, 36px) 0",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <span style={labelStyle}>Section 2</span>
            <h2 style={sectionTitleStyle}>The Four-Stage Operational Workflow</h2>
            <p style={{ ...paragraphStyle, maxWidth: 940, marginBottom: 22 }}>
              To provide total operational transparency, every Goan Spy
              engagement is broken into four distinct phases. This gives both
              private clients and corporate stakeholders a clear view of how
              the case moves from first contact to final closure.
            </p>

            <div style={{ display: "grid", gap: 20 }}>
              {phases.map((phase, index) => (
                <div
                  key={phase.title}
                  style={{
                    paddingTop: index === 0 ? 0 : 18,
                    borderTop: index === 0 ? "none" : "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 14,
                      alignItems: "baseline",
                      marginBottom: 10,
                    }}
                  >
                    <span
                      style={{
                        color: "var(--wine-berry)",
                        fontSize: 24,
                        fontWeight: 800,
                        lineHeight: 1,
                      }}
                    >
                      0{index + 1}
                    </span>
                    <h3
                      style={{
                        fontSize: "clamp(1.25rem, 2vw, 1.55rem)",
                        color: "var(--navy)",
                      }}
                    >
                      {phase.title}
                    </h3>
                  </div>
                  <p
                    style={{
                      ...paragraphStyle,
                      color: "var(--navy)",
                      fontWeight: 600,
                      marginBottom: 10,
                    }}
                  >
                    {phase.summary}
                  </p>
                  <p style={paragraphStyle}>{phase.detail}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" duration={0.7}>
          <section
            style={{
              padding: "clamp(22px, 4vw, 36px) 0",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <span style={labelStyle}>Field Operations</span>
            <h2 style={sectionTitleStyle}>
              Precision Deployment Across North and South Goa
            </h2>
            <p style={{ ...paragraphStyle, maxWidth: 940, marginBottom: 22 }}>
              With the tactical brief locked, our regional network activates
              with terrain-specific discipline. Our teams use hyper-local
              knowledge to remain discreet while keeping every movement tied to
              the case objective.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: 22,
              }}
            >
              <div>
                <div style={labelStyle}>North Goa Deployments</div>
                <h3
                  style={{
                    fontSize: "clamp(1.35rem, 2.4vw, 1.8rem)",
                    color: "var(--navy)",
                    marginBottom: 12,
                  }}
                >
                  Fast-moving surveillance through dense coastal and commercial
                  corridors.
                </h3>
                <p style={paragraphStyle}>
                  Our teams move through the <strong>Mapusa</strong> transit
                  zones, the highway networks of <strong>Porvorim</strong>, and
                  administrative corridors near the
                  <strong> Patto Centre in Panaji (Panjim)</strong> with
                  disciplined camouflage. We track activity across
                  <strong> Calangute Beach</strong>, <strong>Baga</strong>,
                  <strong> Candolim</strong>, <strong>Anjuna</strong>, and
                  <strong> Vagator</strong> without creating suspicion near key
                  local landmarks such as <strong>Aguada Fort</strong>.
                </p>
              </div>
              <div>
                <div style={labelStyle}>South Goa Deployments</div>
                <h3
                  style={{
                    fontSize: "clamp(1.35rem, 2.4vw, 1.8rem)",
                    color: "var(--navy)",
                    marginBottom: 12,
                  }}
                >
                  Patient observation across residential, industrial, and
                  resort belts.
                </h3>
                <p style={paragraphStyle}>
                  Our southern teams manage tracking and missing-person
                  inquiries around the <strong>Margao Railway Station</strong>
                  and the <strong>Municipal Garden</strong> sectors with subtle
                  observation. Corporate risk assignments extend through
                  <strong> Ponda</strong>, <strong>Vasco da Gama</strong>, and
                  the <strong>Mormugao Port</strong> logistics lines. We also
                  handle TSCM-sensitive deployments and background work around
                  <strong> Colva</strong>, <strong>Benaulim</strong>, and
                  <strong> Palolem Beach in Canacona</strong> while respecting
                  privacy boundaries and hospitality environments.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" duration={0.68}>
          <section
            style={{
              padding: "clamp(22px, 4vw, 36px) 0",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <span style={labelStyle}>Phase 4 Output</span>
            <h2 style={sectionTitleStyle}>
              What the Final Dossier Actually Contains
            </h2>
            <p style={{ ...paragraphStyle, maxWidth: 940, marginBottom: 18 }}>
              We do not deliver vague verbal summaries. Final closure is built
              around a secure, evidence-first dossier designed to bridge field
              observation and actionable proof.
            </p>
            <div style={{ display: "grid", gap: 12 }}>
              {[
                "High-definition, timestamped photographic evidence",
                "Crystal-clear, unedited video recordings captured from public vantage points",
                "Verified public record, corporate, or financial background reports",
                "A meticulous chronological field log maintained throughout the assignment",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    paddingBottom: 12,
                    borderBottom: "1px solid var(--border)",
                    fontSize: 16,
                    lineHeight: 1.75,
                    color: "var(--text-mid)",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 22,
                paddingLeft: 18,
                borderLeft: "3px solid var(--gold)",
                maxWidth: 760,
              }}
            >
              <h3
                style={{
                  fontSize: 20,
                  color: "var(--navy)",
                  marginBottom: 8,
                }}
              >
                Secure delivery followed by active data erasure.
              </h3>
              <p style={paragraphStyle}>
                Once the dossier is delivered through secure channels, Goan Spy
                applies its information-erasure protocol to clear active case
                traces, search footprints, and working files from operational
                systems in line with confidentiality-first case handling.
              </p>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" duration={0.72}>
          <section
            style={{
              padding: "clamp(22px, 4vw, 36px) 0",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <span style={labelStyle}>Section 3</span>
            <h2 style={sectionTitleStyle}>Unified Commitment Matrix</h2>
            <p style={{ ...paragraphStyle, maxWidth: 940, marginBottom: 22 }}>
              Our client protocol is tied to clear service tiers, so you know
              exactly what depth of verification, tracking, and documentation
              is mapped to your file before the operation begins.
            </p>

            <div style={{ display: "grid", gap: 20 }}>
              {packages.map((pkg, index) => (
                <div
                  key={pkg.name}
                  style={{
                    paddingTop: index === 0 ? 0 : 18,
                    borderTop: index === 0 ? "none" : "1px solid var(--border)",
                  }}
                >
                  <div style={labelStyle}>{pkg.name}</div>
                  <h3
                    style={{
                      fontSize: "clamp(1.25rem, 2vw, 1.55rem)",
                      color: "var(--navy)",
                      marginBottom: 12,
                    }}
                  >
                    {pkg.subtitle}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 10,
                      color: "var(--text-mid)",
                      fontSize: 15,
                      lineHeight: 1.75,
                    }}
                  >
                    {pkg.items.map((item, itemIndex) => (
                      <span key={item}>
                        {item}
                        {itemIndex < pkg.items.length - 1 ? " •" : ""}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

      </article>
    </ContentPage>
  );
}
