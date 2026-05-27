import Link from "next/link";
import ContentPage from "@/components/ContentPage";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { pageImages } from "@/lib/content/images";

export const metadata = {
  title: "Public Awareness & Self-Protection Guide | Goan Spy Detective Agency Goa",
  description:
    "Professional awareness guidance from Goan Spy to help citizens, families, and businesses across Goa identify red flags, detect scams, and protect privacy.",
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

const supportLevels = [
  {
    name: "Bronze Support",
    subtitle: "Basic Verification",
    items: [
      "Basic background profiling",
      "Physical address validation",
      "Active employment verification",
      "Basic local asset screening",
    ],
  },
  {
    name: "Silver Support",
    subtitle: "Deep Identity Screening",
    items: [
      "Includes all Bronze support items",
      "Complete character and lifestyle audit",
      "Advanced social media footprint audits",
      "Family financial standing vetting",
    ],
  },
  {
    name: "Gold Support",
    subtitle: "Full Surveillance & Proof",
    items: [
      "Includes all Bronze and Silver items",
      "Real-time surveillance and infidelity checks",
      "Verification of hidden marriages or alliances",
      "Legal divorce and court record tracing",
    ],
  },
];

export default function PublicAwarenessGuidePage() {
  return (
    <ContentPage
      title="Public Awareness & Self-Protection Hub"
      subtitle="Empowering citizens, families, and businesses across Goa with professional insights to spot deceptive behaviors, identify modern scams, and protect personal privacy."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Public Awareness & Security Guide" },
      ]}
      heroImage={{
        src: pageImages.shop,
        alt: "Public awareness and self-protection guidance in Goa",
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
              <div style={{ maxWidth: 800 }}>
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
                  Stay informed, stay safe, and act before risk becomes damage.
                </h2>
                <p
                  style={{
                    fontSize: 17,
                    lineHeight: 1.9,
                    color: "rgba(255,255,255,0.84)",
                    maxWidth: 780,
                  }}
                >
                  We believe awareness is the first layer of defense. This hub
                  is built to help people across Goa spot warning signs early,
                  secure their privacy, and know when to move from personal
                  caution to professional investigative support.
                </p>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                <Link href="/contact-us" className="elemen-btn-primary">
                  Download Free Security Checklist
                </Link>
                <Link
                  href="/contact-us"
                  className="elemen-btn-outline"
                  style={{
                    color: "var(--white)",
                    borderColor: "rgba(255,255,255,0.72)",
                  }}
                >
                  Consult with a Privacy Expert
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
                  "Relationship red flags",
                  "Business scam awareness",
                  "North Goa and South Goa safety insights",
                  "Immediate self-protection steps",
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
              The Importance of Public Awareness in Modern Goa
            </h2>
            <div style={{ display: "grid", gap: 18, maxWidth: 980 }}>
              <p style={paragraphStyle}>
                At <strong>Goan Spy</strong>, we believe that the first line of
                defense against deception, fraud, and privacy violations is an
                informed mind. Established in 2023 and operating from Office No.
                A-514, Edcon Centre, near the
                <strong> Mapusa Bus Stand, Goa</strong>, our agency repeatedly
                encounters cases where individuals and businesses suffer severe
                emotional or financial damage simply because early warning signs
                were missed.
              </p>
              <p style={paragraphStyle}>
                Goa&apos;s unique position as a tourism hotspot, a growing
                corporate environment, and a premium real estate market makes
                residents, families, and local businesses attractive targets for
                sophisticated bad actors. That is why this awareness page is not
                just informative content. It is a practical readiness guide.
              </p>
              <p style={paragraphStyle}>
                Through this initiative, we share investigative insights that
                help you identify warning signs, secure physical and digital
                spaces, and decide when personal vigilance is no longer enough
                and a professional intelligence asset is required.
              </p>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" duration={0.66}>
          <section
            style={{
              padding: "clamp(22px, 4vw, 36px) 0",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <span style={labelStyle}>Section 2</span>
            <h2 style={sectionTitleStyle}>
              Recognizing Key Red Flags: Personal & Professional
            </h2>
            <p style={{ ...paragraphStyle, maxWidth: 940, marginBottom: 22 }}>
              Our teams, including highly observant female detectives, have
              compiled the most common warning signs seen across matrimonial,
              personal, and commercial investigations in Goa.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: 22,
              }}
            >
              <div>
                <div style={labelStyle}>Matrimonial & Relationship</div>
                <h3
                  style={{
                    fontSize: "clamp(1.35rem, 2.4vw, 1.8rem)",
                    color: "var(--navy)",
                    marginBottom: 12,
                  }}
                >
                  Behavioral shifts that deserve closer attention.
                </h3>
                <div style={{ display: "grid", gap: 16 }}>
                  <div>
                    <h4
                      style={{
                        color: "var(--navy)",
                        fontSize: 17,
                        marginBottom: 6,
                      }}
                    >
                      Extreme Digital Secretiveness
                    </h4>
                    <p style={paragraphStyle}>
                      Sudden password changes, hiding phone screens, or using
                      secondary communication profiles that cannot be verified.
                    </p>
                  </div>
                  <div>
                    <h4
                      style={{
                        color: "var(--navy)",
                        fontSize: 17,
                        marginBottom: 6,
                      }}
                    >
                      Unverifiable Background Claims
                    </h4>
                    <p style={paragraphStyle}>
                      Ambiguity around past employment, family residences, or
                      prior marital status. If a prospective partner avoids
                      connecting you to genuine family networks or long-term
                      references, deeper vetting becomes important.
                    </p>
                  </div>
                  <div>
                    <h4
                      style={{
                        color: "var(--navy)",
                        fontSize: 17,
                        marginBottom: 6,
                      }}
                    >
                      Unexplained Financial Patterns
                    </h4>
                    <p style={paragraphStyle}>
                      Repeated requests for short-term loans, secretive
                      spending, or no transparency regarding debts, assets, or
                      financial obligations.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div style={labelStyle}>Corporate & Business</div>
                <h3
                  style={{
                    fontSize: "clamp(1.35rem, 2.4vw, 1.8rem)",
                    color: "var(--navy)",
                    marginBottom: 12,
                  }}
                >
                  Commercial vulnerabilities that often surface too late.
                </h3>
                <div style={{ display: "grid", gap: 16 }}>
                  <div>
                    <h4
                      style={{
                        color: "var(--navy)",
                        fontSize: 17,
                        marginBottom: 6,
                      }}
                    >
                      Unusual Employee Behavior
                    </h4>
                    <p style={paragraphStyle}>
                      Refusing leave, insisting on controlling isolated financial
                      workflows, or accessing internal systems during
                      unauthorized late-night hours.
                    </p>
                  </div>
                  <div>
                    <h4
                      style={{
                        color: "var(--navy)",
                        fontSize: 17,
                        marginBottom: 6,
                      }}
                    >
                      Vague Vendor Vetting
                    </h4>
                    <p style={paragraphStyle}>
                      Working with vendors or partners who lack clean
                      registration details, verified local references, or a
                      reliable physical business address.
                    </p>
                  </div>
                  <div>
                    <h4
                      style={{
                        color: "var(--navy)",
                        fontSize: 17,
                        marginBottom: 6,
                      }}
                    >
                      Intellectual Property Leaks
                    </h4>
                    <p style={paragraphStyle}>
                      Internal strategies, client lists, or unique concepts
                      appearing in a competitor&apos;s campaigns without a clear
                      lawful explanation.
                    </p>
                  </div>
                </div>
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
            <span style={labelStyle}>Section 3</span>
            <h2 style={sectionTitleStyle}>
              Staying Safe Across Goa&apos;s Unique Landscapes
            </h2>
            <p style={{ ...paragraphStyle, maxWidth: 940, marginBottom: 22 }}>
              Local geography matters. Personal, digital, and business risk does
              not look the same in a crowded North Goa corridor as it does in a
              more expansive South Goa residential or industrial setting.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: 22,
              }}
            >
              <div>
                <div style={labelStyle}>North Goa Vigilance</div>
                <h3
                  style={{
                    fontSize: "clamp(1.35rem, 2.4vw, 1.8rem)",
                    color: "var(--navy)",
                    marginBottom: 12,
                  }}
                >
                  Fast-paced sectors require sharper awareness of privacy and
                  opportunistic scams.
                </h3>
                <p style={paragraphStyle}>
                  When booking holiday rentals or villas in
                  <strong> Calangute Beach</strong>, <strong>Baga</strong>,
                  <strong> Candolim</strong>, <strong>Anjuna</strong>, or
                  <strong> Vagator</strong>, inspect spaces carefully for signs
                  of unauthorized surveillance or privacy compromise. The same
                  caution applies in transit-heavy zones around
                  <strong> Mapusa</strong>, commercial corridors in
                  <strong> Porvorim</strong>, and busy parts of
                  <strong> Panaji (Panjim)</strong> near the
                  <strong> Patto Centre</strong>.
                </p>
                <p style={{ ...paragraphStyle, marginTop: 16 }}>
                  Public Wi-Fi use, loose sharing of financial details, and
                  casual disclosures in crowded venues can quickly become data
                  exposure points for organized bad actors.
                </p>
              </div>

              <div>
                <div style={labelStyle}>South Goa Security</div>
                <h3
                  style={{
                    fontSize: "clamp(1.35rem, 2.4vw, 1.8rem)",
                    color: "var(--navy)",
                    marginBottom: 12,
                  }}
                >
                  Residential, logistics, and property decisions need stronger
                  verification discipline.
                </h3>
                <p style={paragraphStyle}>
                  Businesses operating near <strong>Vasco da Gama</strong>,
                  <strong> Mormugao Port</strong>, and the industrial estates of
                  <strong> Ponda</strong> should never bypass background checks
                  for individuals handling sensitive assets, shipping lines, or
                  client data. Meanwhile, homeowners and property buyers around
                  <strong> Margao</strong>, the
                  <strong> Margao Railway Station</strong>, the
                  <strong> Municipal Garden</strong>, <strong>Colva</strong>,
                  <strong> Benaulim</strong>, and
                  <strong> Palolem Beach in Canacona</strong> should verify
                  developer backgrounds, titles, and domestic staff identities
                  before making high-value decisions.
                </p>
              </div>
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
            <span style={labelStyle}>Section 4</span>
            <h2 style={sectionTitleStyle}>Immediate Self-Protection Protocols</h2>
            <p style={{ ...paragraphStyle, maxWidth: 940, marginBottom: 22 }}>
              If you suspect deception, stalking, fraud, or targeted privacy
              abuse, do not react impulsively. A calm and methodical response
              protects both your safety and the usable evidence trail.
            </p>

            <div style={{ display: "grid", gap: 18 }}>
              {[
                {
                  step: "01",
                  title: "Document and Preserve Data",
                  text:
                    "Securely save chats, emails, bank transfer receipts, screenshots, and digital trails. Do not delete communication histories, because these are often the first usable evidence points in later analysis.",
                },
                {
                  step: "02",
                  title: "Maintain Absolute Operational Calm",
                  text:
                    "Avoid confronting a suspected partner, scammer, or fraudulent employee too early. Premature confrontation often triggers deletion of logs, sudden pattern shifts, and deliberate concealment.",
                },
                {
                  step: "03",
                  title: "Lock Down Your Personal Network",
                  text:
                    "Change passwords on primary email accounts, restrict social media visibility, review connected devices, and disable unnecessary location sharing until you have a clearer assessment of the situation.",
                },
                {
                  step: "04",
                  title: "Transition to Professional Intelligence",
                  text:
                    "When your own review confirms serious concern, move the matter into a formal investigative process. Goan Spy aligns support depth through structured Bronze, Silver, and Gold packages based on the complexity of the case.",
                },
              ].map((item, index) => (
                <div
                  key={item.step}
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
                      {item.step}
                    </span>
                    <h3
                      style={{
                        fontSize: "clamp(1.25rem, 2vw, 1.55rem)",
                        color: "var(--navy)",
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p style={paragraphStyle}>{item.text}</p>
                </div>
              ))}
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
            <span style={labelStyle}>Section 5</span>
            <h2 style={sectionTitleStyle}>Our Public Awareness Alignment Matrix</h2>
            <p style={{ ...paragraphStyle, maxWidth: 940, marginBottom: 22 }}>
              Awareness should help people make better choices. When vigilance
              alone is no longer enough, these support levels indicate the kind
              of investigative depth typically required.
            </p>

            <div style={{ display: "grid", gap: 20 }}>
              {supportLevels.map((level, index) => (
                <div
                  key={level.name}
                  style={{
                    paddingTop: index === 0 ? 0 : 18,
                    borderTop: index === 0 ? "none" : "1px solid var(--border)",
                  }}
                >
                  <div style={labelStyle}>{level.name}</div>
                  <h3
                    style={{
                      fontSize: "clamp(1.25rem, 2vw, 1.55rem)",
                      color: "var(--navy)",
                      marginBottom: 12,
                    }}
                  >
                    {level.subtitle}
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
                    {level.items.map((item, itemIndex) => (
                      <span key={item}>
                        {item}
                        {itemIndex < level.items.length - 1 ? " |" : ""}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal variant="zoom-in" duration={0.68}>
          <section style={{ padding: "clamp(24px, 4vw, 40px) 0 0" }}>
            <span style={labelStyle}>Public Awareness Footer</span>
            <h2 style={sectionTitleStyle}>
              Knowledge is your shield. Absolute proof is your solution.
            </h2>
            <p style={{ ...paragraphStyle, maxWidth: 940 }}>
              Do not make major personal, financial, or marital decisions based
              on doubt or unverified claims. Arm yourself with clear facts, and
              when necessary, move to a structured professional review with
              complete confidentiality.
            </p>

            <div
              style={{
                marginTop: 24,
                paddingTop: 24,
                borderTop: "1px solid var(--border)",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 18,
              }}
            >
              <div>
                <div style={labelStyle}>Headquarters</div>
                <p style={paragraphStyle}>
                  Office No. A-514, Edcon Centre, Mapusa Bus Stand, Mapusa,
                  Goa - 403507.
                </p>
              </div>
              <div>
                <div style={labelStyle}>Public Intelligence Desk</div>
                <p style={paragraphStyle}>+91 73047 69291</p>
              </div>
              <div>
                <div style={labelStyle}>Secure Communications</div>
                <p style={paragraphStyle}>info@goanspy.com</p>
              </div>
              <div>
                <div style={labelStyle}>Operational Footprint</div>
                <p style={paragraphStyle}>
                  Operating exclusively across North Goa and South Goa.
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                marginTop: 24,
              }}
            >
              <Link href="/contact-us" className="elemen-btn-primary">
                Request Confidential Evaluation
              </Link>
              <Link href="/contact-us" className="elemen-btn-outline">
                Speak With Goan Spy
              </Link>
            </div>
          </section>
        </ScrollReveal>
      </article>
    </ContentPage>
  );
}
