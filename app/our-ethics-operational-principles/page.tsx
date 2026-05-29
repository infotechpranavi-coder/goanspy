import Link from "next/link";
import ContentPage from "@/components/ContentPage";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { pageImages } from "@/lib/content/images";

export const metadata = {
  title: "Our Ethics & Operational Principles | Goan Spy Detective Agency Goa",
  description:
    "Explore the ethics, confidentiality standards, legal compliance, and operational principles that guide Goan Spy's investigations across North and South Goa.",
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

const pillars = [
  {
    number: "01",
    title: "Absolute Client Confidentiality & Information Security",
    text:
      "The primary fear of any individual or corporate entity hiring an investigator in Goa is exposure or data leakage. Goan Spy enforces a strict, zero-tolerance policy regarding information security. From your initial consultation, through active field deployment, to the final delivery of your case dossier, your identity and data remain sealed within a secure operational pipeline. We never sell, barter, leverage, or discuss case parameters with unauthorized third parties. Once an investigation concludes and the case data is securely handed over, we implement disciplined data handling and deletion protocols designed to respect your privacy.",
  },
  {
    number: "02",
    title: "Strict Legitimate Interest Verification",
    text:
      "Goan Spy does not accept briefs for malicious stalking, extortion, illegal harassment, or vengeful intimidation. Before our field operatives deploy anywhere in North or South Goa, our compliance process evaluates the client's intent and the legitimacy of the requested inquiry. We must satisfy ourselves that a valid personal, familial, or corporate interest exists. This protects the integrity of the agency and shields clients from downstream civil or criminal liabilities.",
  },
  {
    number: "03",
    title: "Objective, Unmanipulated Fact-Finding",
    text:
      "Our operatives do not generate rumors, trade in hearsay, or fabricate scenarios to prolong a case or alter its outcome. We operate as clinical fact-finders. If surveillance shows a suspected partner is faithful, or that a proposed business merger appears structurally sound, we report those facts with the same clarity and documentation as we would an active breach. Our responsibility is to provide the unfiltered truth so clients can make informed personal or strategic decisions backed by verified reality.",
  },
];

export default function EthicsPage() {
  return (
    <ContentPage
      title="Our Code of Ethics"
      subtitle="At Goan Spy, how we discover the truth is just as critical as the truth itself. Discover the strict moral, legal, and operational principles that govern our exclusive investigations across Goa."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Our Ethics & Operational Principles" },
      ]}
      heroImage={{
        src: pageImages.about,
        alt: "Professional ethics and operational standards at Goan Spy",
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
              borderRadius: 28,
              padding: "clamp(28px, 5vw, 54px)",
              background:
                "linear-gradient(135deg, rgba(26,39,68,0.98) 0%, rgba(20,30,51,0.96) 58%, rgba(91,29,54,0.95) 100%)",
              color: "var(--white)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at top right, rgba(196,165,116,0.28), transparent 34%), radial-gradient(circle at bottom left, rgba(255,255,255,0.08), transparent 28%)",
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
                  Integrity, accountability, and uncompromised truth.
                </h2>
                <p
                  style={{
                    fontSize: 17,
                    lineHeight: 1.9,
                    color: "rgba(255,255,255,0.84)",
                    maxWidth: 760,
                  }}
                >
                  We built this agency around a simple rule: truth must be
                  gathered lawfully, delivered clearly, and protected with
                  absolute discretion from first consultation to final handover.
                </p>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                <Link
                  href="/government-regulation-legal-compliance"
                  className="elemen-btn-primary"
                >
                  Review Our Compliance Guidelines
                </Link>
                <Link
                  href="/contact-us"
                  className="elemen-btn-outline"
                  style={{
                    color: "var(--white)",
                    borderColor: "rgba(255,255,255,0.72)",
                  }}
                >
                  Consult with an Ethical Investigator
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
                  "Exclusive Goa-focused operations",
                  "Legitimate-interest case screening",
                  "Evidence-led reporting only",
                  "Confidential handling from intake to closure",
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
              The Core Philosophy: Ethics Over Expediency
            </h2>
            <div style={{ display: "grid", gap: 18, maxWidth: 980 }}>
              <p style={paragraphStyle}>
                In an industry that inherently operates under a veil of secrecy,
                a private investigator&apos;s truest asset is an unyielding
                moral compass. <strong>Goan Spy</strong> was founded in 2013
                upon the unwavering pillar of{" "}
                <strong>&quot;Credibility First.&quot;</strong> We recognize
                that our clients, whether they are individuals seeking
                matrimonial answers or executives protecting critical business
                interests, rely entirely on our honesty, transparency, and
                operational boundaries.
              </p>
              <p style={paragraphStyle}>
                We do not believe that the end justifies the means. An
                investigation conducted through unethical, reckless, or illegal
                avenues is not only legally useless, but also dangerous to the
                client&apos;s reputation and safety. Every assignment
                coordinated from our central office at Office No. A-514, Edcon
                Centre, near the <strong>Mapusa Bus Stand</strong>, is measured
                against a strict internal ethical checklist.
              </p>
              <p style={paragraphStyle}>
                Goan Spy operates with total professional transparency toward
                the client while maintaining complete invisibility toward the
                subject. We do not manipulate findings, inflate activity, or
                take shortcuts that compromise our standing as a credible
                intelligence and investigative agency serving Goa alone.
              </p>
            </div>

            <div
              style={{
                marginTop: 24,
                paddingLeft: 18,
                borderLeft: "3px solid var(--gold)",
                maxWidth: 760,
              }}
            >
              <p
                style={{
                  fontSize: 20,
                  lineHeight: 1.6,
                  color: "var(--navy)",
                }}
              >
                &quot;How we discover the truth is just as important as the
                truth itself.&quot;
              </p>
              <p
                style={{
                  ...paragraphStyle,
                  fontSize: 15,
                  marginTop: 10,
                }}
              >
                Every case must pass a legal, ethical, and reputational test
                before field deployment, and every report must remain
                objective, timestamped, and free from exaggeration.
              </p>
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
            <span style={labelStyle}>Section 2</span>
            <h2 style={sectionTitleStyle}>
              The Three Ironclad Pillars of Goan Spy
            </h2>

            <div style={{ display: "grid", gap: 22, marginTop: 20 }}>
              {pillars.map((pillar) => (
                <div
                  key={pillar.number}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "74px minmax(0, 1fr)",
                    gap: 16,
                    alignItems: "start",
                    paddingTop: 18,
                    borderTop: "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      color: "var(--wine-berry)",
                      fontSize: 24,
                      fontWeight: 800,
                      lineHeight: 1,
                    }}
                  >
                    {pillar.number}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
                        color: "var(--navy)",
                        marginBottom: 10,
                      }}
                    >
                      {pillar.title}
                    </h3>
                    <p style={paragraphStyle}>{pillar.text}</p>
                  </div>
                </div>
              ))}
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
            <span style={labelStyle}>Section 3</span>
            <h2 style={sectionTitleStyle}>
              Hyper-Local Ground Ethics Across Goa&apos;s Varied Landscapes
            </h2>
            <p style={{ ...paragraphStyle, maxWidth: 940, marginBottom: 22 }}>
              Our ethical boundaries remain firm across both districts of Goa.
              We adapt our field tactics to the local environment while
              respecting privacy, community dynamics, and lawful evidence
              collection standards.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: 22,
                marginBottom: 24,
              }}
            >
              <div>
                <div style={labelStyle}>North Goa</div>
                <h3
                  style={{
                    fontSize: "clamp(1.35rem, 2.4vw, 1.75rem)",
                    color: "var(--navy)",
                    marginBottom: 12,
                  }}
                >
                  High Mobility Belt
                </h3>
                <div
                  style={{
                    display: "grid",
                    gap: 8,
                    color: "var(--text-mid)",
                    lineHeight: 1.8,
                  }}
                >
                  <div>Discreet, non-intrusive tracking</div>
                  <div>Seamless blending into tourist-facing corridors</div>
                  <div>Public-domain documentation and observation only</div>
                </div>
              </div>
              <div>
                <div style={labelStyle}>South Goa</div>
                <h3
                  style={{
                    fontSize: "clamp(1.35rem, 2.4vw, 1.75rem)",
                    color: "var(--navy)",
                    marginBottom: 12,
                  }}
                >
                  Industrial & Secluded Hubs
                </h3>
                <div
                  style={{
                    display: "grid",
                    gap: 8,
                    color: "var(--text-mid)",
                    lineHeight: 1.8,
                  }}
                >
                  <div>Calm, deep-background profiling</div>
                  <div>Lawful corporate intelligence collection</div>
                  <div>Resort and hospitality privacy boundaries respected</div>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: 22,
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "clamp(1.35rem, 2.4vw, 1.8rem)",
                    color: "var(--navy)",
                    marginBottom: 14,
                  }}
                >
                  Ethical Conduct in High-Activity North Goa Sectors
                </h3>
                <p style={paragraphStyle}>
                  In North Goa, where our surveillance units monitor dense,
                  fast-moving environments, our investigators blend into public
                  settings without resorting to intrusive or unlawful tactics.
                  Whether the assignment touches <strong>Porvorim</strong>, the
                  highway routes connecting <strong>Panaji (Panjim)</strong> and
                  the <strong>Patto Centre</strong>, or lifestyle checks around
                  <strong> Calangute Beach</strong>, <strong>Baga</strong>, and
                  <strong> Candolim</strong>, our teams work with restraint,
                  discipline, and social awareness.
                </p>
                <p style={{ ...paragraphStyle, marginTop: 16 }}>
                  We do not cross private villa boundaries near
                  <strong> Anjuna</strong> or <strong>Vagator</strong>, nor do
                  we intrude upon private spaces around sites such as
                  <strong> Aguada Fort</strong>. Our evidence, including
                  timestamped video, photographs, and chronological logs, is
                  captured strictly from lawful vantage points in public-facing
                  areas.
                </p>
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "clamp(1.35rem, 2.4vw, 1.8rem)",
                    color: "var(--navy)",
                    marginBottom: 14,
                  }}
                >
                  Principled Surveillance in South Goa&apos;s Corporate & Residential Hubs
                </h3>
                <p style={paragraphStyle}>
                  In the quieter and more expansive landscapes of South Goa, our
                  commitment to non-disruptive fieldwork remains central. Our
                  teams handle sensitive matrimonial verification and missing
                  person cases around <strong>Margao</strong>, ensuring our
                  presence near the <strong>Margao Railway Station</strong> or
                  the <strong>Municipal Garden</strong> never disturbs the
                  subject or surrounding community.
                </p>
                <p style={{ ...paragraphStyle, marginTop: 16 }}>
                  When handling pre-employment vetting, logistics auditing, or
                  asset searches across <strong>Vasco da Gama</strong>, the
                  <strong> Mormugao Port</strong>, or the <strong>Ponda</strong>
                  industrial sectors, we rely on open-source records, lawful
                  verification channels, and voluntary disclosures. In the
                  luxury hospitality belts of <strong>Colva</strong>,
                  <strong> Benaulim</strong>, and
                  <strong> Palolem Beach in Canacona</strong>, we remain
                  compliant with local resort privacy expectations and guest
                  boundaries at all times.
                </p>
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
            <span style={labelStyle}>Section 4</span>
            <h2 style={sectionTitleStyle}>
              Our Uncompromised Technical and Legal Stand
            </h2>
            <div style={{ display: "grid", gap: 18 }}>
              {[
                {
                  title: "No Unauthorized Wiretapping",
                  text:
                    "We do not hack private devices or illegally intercept communication networks. Instead, we rely on lawful observation, open-source intelligence, visible digital signatures, and disciplined physical tracking to develop defensible evidence.",
                },
                {
                  title: "No Public Impersonation",
                  text:
                    "Our operatives do not falsely represent themselves as public officials or law enforcement authorities. Undercover human intelligence, when appropriate, is handled through positioning, observation, and lawful social interaction.",
                },
                {
                  title: "Integration of Specialized Female Detectives",
                  text:
                    "We use trained female investigators where context, access, and social sensitivity require it. This supports discreet presence in family settings, premium venues, and socially layered environments without breaching personal boundaries.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    paddingLeft: 18,
                    borderLeft: "3px solid var(--gold)",
                  }}
                >
                  <h3
                    style={{
                      color: "var(--navy)",
                      fontSize: 18,
                      marginBottom: 8,
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

      </article>
    </ContentPage>
  );
}

