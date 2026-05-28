import Link from "next/link";
import ContentPage from "@/components/ContentPage";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { pageImages } from "@/lib/content/images";

export const metadata = {
  title: "Investigation Insights & Blog | Goan Spy Detective Agency Goa",
  description:
    "Explore Goan Spy's investigation blog covering infidelity, privacy, missing persons, corporate fraud, due diligence, and security risks across Goa.",
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

const personalBlogs = [
  {
    id: "01",
    title:
      "Signs of an Unfaithful Partner: Spotting Infidelity During a Goa Vacation",
    keywords:
      "cheating spouse in Goa | signs of infidelity vacation | hire a private detective Calangute | holiday affair tracking",
    audience:
      "Spouses in Mumbai, Delhi, Bangalore, and other metros whose partners are traveling to Goa for business trips, parties, or private getaways.",
    intro:
      "For many people, a Goa trip feels like a zone of anonymity. The crowded stretches from Calangute and Baga to Candolim create the illusion that personal behavior can disappear into distance. In reality, deception still leaves patterns, and those patterns often become visible before hard proof appears.",
    sections: [
      {
        heading: 'The Psychology of the "Goa Shield"',
        text:
          "Infidelity often thrives in places where the subject believes context protects them. Beach clubs, resort environments, and holiday traffic offer cover, but they do not erase suspicious schedule changes, emotional distancing, or guarded financial activity.",
      },
      {
        heading: "Key Behavioral Warning Signs to Monitor",
        bullets: [
          'The "Digital Blackout": sudden silent mode usage or recurring network excuses during evening hours.',
          "Unverified schedule changes, unexplained timeline gaps, or inability to name specific venues visited.",
          "Guarded financial footprints, including cash switching, hidden card alerts, or unaccounted vehicle and dining charges.",
          "Sudden defensive reactions to simple questions about the day, often used as emotional deflection.",
        ],
      },
      {
        heading: "Why DIY Tracking in Goa Fails",
        text:
          "Flying down and attempting amateur surveillance in Goa is often counterproductive. Beach lanes, dense nightlife zones, and resort layouts make untrained tracking highly visible. Once a subject detects pursuit, they tend to erase evidence and change patterns immediately.",
      },
      {
        heading: "The Goan Spy Action Plan",
        text:
          "Goan Spy deploys localized field operatives, including trained female detectives, who can blend into luxury resorts, social venues, and tourist corridors while collecting timestamped visual proof from lawful public vantage points.",
      },
    ],
  },
  {
    id: "02",
    title:
      "The Importance of Pre-Matrimonial Background Vetting in Goa's Changing Social Landscape",
    keywords:
      "pre-matrimonial verification Goa | background check Porvorim | marriage verification Panaji | bride groom verification",
    audience:
      "Traditional Goan families, urban parents, and marriage decision-makers looking to verify a prospective alliance.",
    intro:
      "As Porvorim, Panaji, and Margao continue to grow, old neighborhood verification systems are no longer enough. A polished bio-data or a curated online profile can hide financial strain, legal history, prior relationships, or unstable lifestyle patterns.",
    sections: [
      {
        heading: "Moving Beyond Word-of-Mouth Assurances",
        text:
          "Pre-matrimonial vetting is no longer about distrust. It is a structured risk-control step that protects emotional, legal, and financial stability for both families involved.",
      },
      {
        heading: "Critical Hidden Factors Uncovered by Professional Vetting",
        bullets: [
          "True employment and financial status, including undisclosed debts or failed ventures.",
          "Active relationship verification involving hidden affairs, prior engagements, or separations.",
          "Civil and criminal litigation checks through regional records and court-linked review.",
          "Lifestyle and behavioral assessment, including local reputation and high-risk habits.",
        ],
      },
      {
        heading: "A Case for Professional Objectivity",
        text:
          "Families often damage genuine alliances when informal verification is handled awkwardly. A professional process allows for discreet OSINT review, local mapping, and silent verification without causing direct offense.",
      },
      {
        heading: "Secure Complete Peace of Mind",
        text:
          "Goan Spy offers Bronze, Silver, and Gold pre-matrimonial packages that convert uncertainty into an evidence-led character profile before the final commitment is made.",
      },
    ],
  },
  {
    id: "03",
    title: "Hidden Cameras in Holiday Rentals: How to Protect Your Privacy in Goa",
    keywords:
      "hidden spy camera detection | bug sweeping Goa | TSCM villa sweep Candolim | counter surveillance privacy",
    audience:
      "High-net-worth families, private villa guests, celebrities, and companies hosting sensitive off-sites in Goa.",
    intro:
      "Goa's villa market is thriving, especially in Candolim, Anjuna, and Canacona. With that growth comes a serious privacy risk: consumer-grade hidden cameras are now tiny, cheap, and easy to place in intimate spaces by rogue insiders or malicious third parties.",
    sections: [
      {
        heading: "The Rising Threat of Illicit Pinhole Surveillance",
        text:
          "Luxury does not automatically equal privacy. Hidden recording devices are increasingly disguised inside everyday fixtures and can operate without obvious visual indicators.",
      },
      {
        heading: "Common Camouflage Points for Spy Devices",
        bullets: [
          "Modified smoke detectors, clocks, lamps, and decor facing beds or dressing areas.",
          "Dummy USB adapters and power blocks using live sockets for continuous operation.",
          "Bathroom vulnerabilities such as vanity mirrors, vents, and altered fixture placements.",
        ],
      },
      {
        heading: "Amateur Inspection vs. Professional TSCM Sweeps",
        text:
          "Basic apps are poor at detecting advanced devices, especially those using local storage, intermittent transmission, or concealed wiring. Professional TSCM work relies on NLJD systems, RF analysis, and deeper structural inspection.",
      },
      {
        heading: "Reclaim Your Space with Goan Spy",
        text:
          "Our TSCM teams perform systematic sweeps for private rentals, executive stays, and confidential corporate sessions where privacy compromise would be commercially or personally devastating.",
      },
    ],
  },
  {
    id: "04",
    title: "Child Custody Disputes in Goa: Gathering Legally Admissible Evidence",
    keywords:
      "child custody evidence Margao | private investigator court cases | lifestyle monitoring Goa | child safety surveillance",
    audience:
      "Parents involved in divorce, visitation, and child welfare disputes in South Goa.",
    intro:
      "In custody conflicts, claims alone rarely shift outcomes. Courts focus on the welfare of the child, which means objective, well-documented evidence carries more weight than emotional allegations.",
    sections: [
      {
        heading: "The Legal Weight of Verifiable Evidence",
        text:
          "Where the child's safety or well-being is at stake, documentation must be factual, chronological, and professionally collected. Poorly handled surveillance can weaken rather than strengthen a case.",
      },
      {
        heading: "What Type of Evidence Holds Value in Court?",
        bullets: [
          "Timestamped proof of neglect or repeated unsafe absence.",
          "Evidence of exposure to volatile or substance-linked environments.",
          "Patterns showing clear contradiction between sworn claims and real behavior.",
        ],
      },
      {
        heading: "Handling Cases with Absolute Sensitivity",
        text:
          "Investigations involving children must be minimally intrusive and carefully controlled. The child should never be alarmed or made aware of the surveillance footprint.",
      },
      {
        heading: "Securing Your Family's Welfare",
        text:
          "Goan Spy compiles visual evidence, chronological logs, and verified checks that can support legal counsel while keeping the child's welfare at the center of the investigative process.",
      },
    ],
  },
  {
    id: "05",
    title: "Missing Persons in Goa: Why Time is of the Essence in Location Tracing",
    keywords:
      "missing persons tracker Goa | trace missing individual | locate family member Goa | missing tourist investigation",
    audience:
      "Families and guardians searching for a missing loved one, tourist, or teenager who has gone silent in Goa.",
    intro:
      "When communication suddenly stops, every passing hour matters. Goa's mix of crowded transit points, rental mobility, and remote coastal pockets makes tracing more difficult as time slips away.",
    sections: [
      {
        heading: "The Critical Golden Window",
        text:
          "The first 48 hours are the most valuable. Digital traces are freshest, witnesses remember more, and linked movement clues are still active enough to connect.",
      },
      {
        heading: "Why Official Channels Face Delays",
        text:
          "Police reporting is essential, but official systems must work through other administrative pressures. That can slow cross-checking of CCTV, transaction patterns, and geographic follow-up.",
      },
      {
        heading: "The Goan Spy Multi-Layered Tracing Strategy",
        bullets: [
          "Digital intelligence mapping of recent online, financial, and device-linked activity.",
          "Immediate ground sweeps through scooter rentals, hostels, transit points, and local witness clusters.",
        ],
      },
      {
        heading: "Immediate Professional Intervention",
        text:
          "Goan Spy activates its regional network without waiting for the situation to grow colder, helping families generate leads while the trail still has useful momentum.",
      },
    ],
  },
];

const corporateBlogs = [
  {
    id: "06",
    title:
      "Corporate Espionage and IP Theft: Protecting Commercial Interests in Panaji",
    keywords:
      "corporate spy Panaji | intellectual property theft Goa | business intelligence Patto | corporate fraud defense",
    audience:
      "Corporate boards, founders, legal teams, and executives operating in Panaji and Patto Centre business districts.",
    intro:
      "Panaji is now one of Goa's most important corporate clusters. That makes it a natural target for intellectual property theft, internal sabotage, and silent competitor-aligned leakage.",
    sections: [
      {
        heading: "The Invisible Threat to Business Assets",
        text:
          "Organizations spend years building client lists, algorithms, strategy decks, and expansion models, only to discover that the real leak began inside the company rather than outside it.",
      },
      {
        heading: "How Corporate Espionage Occurs",
        bullets: [
          "Disgruntled insiders downloading client, pricing, or code assets before exit.",
          "Competitor-driven fabrication or selective leaking of internal material to trigger reputational damage.",
          "Technical interception in premium hotels, meeting spaces, or executive sessions.",
        ],
      },
      {
        heading: "Building a Defense Infrastructure",
        text:
          "The right response combines digital controls, technical sweeps, executive vetting, and evidence-led internal review so a company can move from suspicion to proof quickly.",
      },
      {
        heading: "Insulate Your Enterprise",
        text:
          "Goan Spy's corporate risk division helps identify data leaks, internal sabotage paths, and defensible evidence that can support litigation or emergency control measures.",
      },
    ],
  },
  {
    id: "07",
    title:
      "Supply Chain Leaks: Combating Inventory Theft in Ponda Industrial Estate",
    keywords:
      "industrial asset theft Ponda | supply chain fraud Goa | manufacturing unit audit | warehouse leakage protection",
    audience:
      "Factory owners, plant managers, and logistics operators managing production and distribution risk in Ponda.",
    intro:
      "Inventory leakage often looks small at first, but recurring shrinkage is rarely random. In manufacturing environments, it is typically a structured internal system with multiple participants and repeatable blind spots.",
    sections: [
      {
        heading: "The Bottom-Line Threat of Supply Chain Leakage",
        text:
          "Losses caused by organized warehouse and transport manipulation quietly erode margins, damage trust in reporting, and create long-term operational distortion.",
      },
      {
        heading: "Common Operational Blind Spots in Logistics",
        bullets: [
          "Weighbridge manipulation and false baseline loads.",
          'The "scrap yard" diversion of working parts declared as waste.',
          "Transit stopovers where inventory or fuel is quietly siphoned away.",
        ],
      },
      {
        heading: "How Goan Spy Solves Industrial Fraud",
        text:
          "Standard guards struggle against layered fraud rings. Undercover observation, route verification, and timestamped field proof are often needed to isolate where the chain is breaking.",
      },
      {
        heading: "Secure Your Operations Today",
        text:
          "Our industrial investigations help plant operators shift from vague audit suspicion to exact proof of leakage points, participants, and diversion behavior.",
      },
    ],
  },
  {
    id: "08",
    title:
      "The Risk of Unverified Hiring: Employee Background Verification for Vasco Port Enterprises",
    keywords:
      "employee vetting Vasco | background check shipping company | pre-employment screening Goa | corporate vetting logistics",
    audience:
      "HR leads, operations heads, and directors in maritime, customs, and logistics companies in Vasco da Gama.",
    intro:
      "Port-city hiring comes with serious operational exposure. The wrong employee in a sensitive data, documentation, or warehouse role can open the door to theft, compliance failure, or corporate leakage.",
    sections: [
      {
        heading: "The High Stakes of Port-City Hiring",
        text:
          "Shipping, customs, and heavy logistics firms handle valuable cargo, confidential manifests, and highly regulated movement systems. Resume-only hiring is too weak a filter in such an environment.",
      },
      {
        heading: "What Standard HR Document Checks Miss",
        bullets: [
          "Fabricated experience histories linked to non-existent or defunct firms.",
          "Concealed white-collar, cargo, or theft-linked record patterns.",
          "Hidden competitor alignments or planted market access roles.",
        ],
      },
      {
        heading: "The ROI of Professional Vetting",
        text:
          "Deeper verification reduces liability, protects workplace culture, and prevents the far greater cost of insider access gone wrong.",
      },
      {
        heading: "Partner with Goan Spy",
        text:
          "Our Vasco verification desk runs structured checks including address validation, record review, and sector-specific risk confirmation for logistics and maritime employers.",
      },
    ],
  },
  {
    id: "09",
    title:
      "Due Diligence in Goa Real Estate: Avoiding Commercial Land Fraud in Margao",
    keywords:
      "real estate fraud Margao | commercial property due diligence | land title verification Goa | background check property partner",
    audience:
      "Commercial investors, developers, and business owners considering land or property partnerships in South Goa.",
    intro:
      "High-value land transactions in Margao and surrounding markets attract polished fraud, incomplete disclosures, and title-linked traps that basic paperwork review often misses.",
    sections: [
      {
        heading: "The Hidden Traps in Commercial Land Deals",
        text:
          "Buyers often move quickly on prime-location opportunities, only to discover disputed ownership, hidden encumbrances, or inheritance conflict after capital is already committed.",
      },
      {
        heading: "Common Real Estate Frauds in Goa",
        bullets: [
          "The phantom co-owner problem where key family consent is missing.",
          "Forged or misused power-of-attorney structures.",
          "Undisclosed loan encumbrances or ongoing inheritance disputes.",
        ],
      },
      {
        heading: "How Due Diligence Protects Your Capital",
        text:
          "Real safety comes from combining paperwork review with seller background mapping, local verification, and contextual intelligence on the deal environment itself.",
      },
      {
        heading: "Secure Your Investments",
        text:
          "Goan Spy's asset-tracing and property-risk work helps reduce the chance of entering expensive legal battles built on hidden title instability.",
      },
    ],
  },
  {
    id: "10",
    title:
      "Digital Redirection: Why Competitor Analysis and Corporate Due Diligence Matter for Modern Goa Brands",
    keywords:
      "corporate due diligence Goa | competitor intelligence Panaji | corporate asset tracing | market risk mitigation",
    audience:
      "Goa-based hospitality, retail, and growth-stage businesses building partnerships or entering competitive expansion cycles.",
    intro:
      "Modern Goa businesses no longer compete only on location and relationships. Branding, digital visibility, vendor strength, and competitor positioning now directly influence who grows and who gets exposed.",
    sections: [
      {
        heading: "The New Era of Local Business Competition",
        text:
          "Expanding without clear visibility into partner stability, competitor capability, and vendor reliability leaves an enterprise vulnerable to avoidable disruption.",
      },
      {
        heading: "Critical Components of Corporate Due Diligence",
        bullets: [
          "True financial health vetting and hidden debt analysis.",
          "Operational integrity mapping for delivery and execution reliability.",
          "Competitor asset profiling to understand real, not assumed, market strength.",
        ],
      },
      {
        heading: "The Power of Evidence-Led Business Decisions",
        text:
          "The strongest commercial decisions are made on verified reality, not market rumor or presentation quality. Clear intelligence narrows risk before capital is committed.",
      },
      {
        heading: "Get the Goan Spy Edge",
        text:
          "Our corporate intelligence services help businesses test assumptions, verify partnerships, and understand competitive movement before it becomes an expensive surprise.",
      },
    ],
  },
];

function BlogSection({
  title,
  eyebrow,
  description,
  posts,
  accent,
}: {
  title: string;
  eyebrow: string;
  description: string;
  posts: typeof personalBlogs;
  accent: "light" | "dark";
}) {
  return (
    <section
      style={{
        padding: "clamp(18px, 3vw, 28px) 0",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <span style={labelStyle}>{eyebrow}</span>
      <h2 style={sectionTitleStyle}>{title}</h2>
      <p style={{ ...paragraphStyle, maxWidth: 940, marginBottom: 18 }}>
        {description}
      </p>

      <div style={{ display: "grid", gap: 18 }}>
        {posts.map((post, index) => (
          <article
            key={post.id}
            style={{
              padding: "clamp(18px, 2.6vw, 24px)",
              borderRadius: 24,
              background:
                accent === "dark" && index % 2 === 0
                  ? "linear-gradient(145deg, rgba(26,39,68,0.98), rgba(91,29,54,0.96))"
                  : index % 2 === 0
                    ? "rgba(255,255,255,0.9)"
                    : "linear-gradient(180deg, rgba(245,244,241,0.88), rgba(255,255,255,1))",
              color:
                accent === "dark" && index % 2 === 0 ? "var(--white)" : "inherit",
              border:
                accent === "dark" && index % 2 === 0
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "1px solid var(--border)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1fr)",
                gap: 14,
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 12,
                    alignItems: "baseline",
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{
                      fontSize: 26,
                      fontWeight: 800,
                      color:
                        accent === "dark" && index % 2 === 0
                          ? "rgba(255,255,255,0.82)"
                          : "var(--wine-berry)",
                    }}
                  >
                    {post.id}
                  </span>
                  <h3
                    style={{
                      fontSize: "clamp(1.35rem, 2.2vw, 1.9rem)",
                      lineHeight: 1.18,
                      color:
                        accent === "dark" && index % 2 === 0
                          ? "var(--white)"
                          : "var(--navy)",
                    }}
                  >
                    {post.title}
                  </h3>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                    marginBottom: 10,
                  }}
                >
                  {post.keywords.split("|").map((keyword) => (
                    <span
                      key={keyword.trim()}
                      style={{
                        padding: "7px 10px",
                        borderRadius: 999,
                        fontSize: 12,
                        background:
                          accent === "dark" && index % 2 === 0
                            ? "rgba(255,255,255,0.08)"
                            : "rgba(26,39,68,0.06)",
                        color:
                          accent === "dark" && index % 2 === 0
                            ? "rgba(255,255,255,0.88)"
                            : "var(--navy)",
                      }}
                    >
                      {keyword.trim()}
                    </span>
                  ))}
                </div>

                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.8,
                    color:
                      accent === "dark" && index % 2 === 0
                        ? "rgba(255,255,255,0.8)"
                        : "var(--text-mid)",
                    marginBottom: 12,
                  }}
                >
                  <strong>Target Audience:</strong> {post.audience}
                </p>

                <p
                  style={{
                    ...paragraphStyle,
                    color:
                      accent === "dark" && index % 2 === 0
                        ? "rgba(255,255,255,0.84)"
                        : "var(--text-mid)",
                  }}
                >
                  {post.intro}
                </p>
              </div>

              <div style={{ display: "grid", gap: 12 }}>
                {post.sections.map((section) => (
                  <div
                    key={section.heading}
                    style={{
                      paddingLeft: 14,
                      borderLeft:
                        accent === "dark" && index % 2 === 0
                          ? "3px solid rgba(196,165,116,0.9)"
                          : "3px solid var(--gold)",
                    }}
                  >
                    <h4
                      style={{
                        fontSize: 18,
                        marginBottom: 6,
                        color:
                          accent === "dark" && index % 2 === 0
                            ? "var(--white)"
                            : "var(--navy)",
                      }}
                    >
                      {section.heading}
                    </h4>
                    {"text" in section && section.text && (
                      <p
                        style={{
                          ...paragraphStyle,
                          color:
                            accent === "dark" && index % 2 === 0
                              ? "rgba(255,255,255,0.82)"
                              : "var(--text-mid)",
                        }}
                      >
                        {section.text}
                      </p>
                    )}
                    {"bullets" in section && section.bullets && (
                      <div style={{ display: "grid", gap: 8 }}>
                        {section.bullets.map((bullet) => (
                          <div
                            key={bullet}
                            style={{
                              fontSize: 15,
                              lineHeight: 1.8,
                              color:
                                accent === "dark" && index % 2 === 0
                                  ? "rgba(255,255,255,0.82)"
                                  : "var(--text-mid)",
                            }}
                          >
                            {bullet}
                          </div>
                        ))}
                      </div>
                    )}
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

export default function BlogPage() {
  return (
    <ContentPage
      title="Investigation Blog & Search Insight Hub"
      subtitle="Ten high-converting, Goa-focused blog topics built around the exact questions people search when facing suspicion, privacy risks, fraud, and business uncertainty."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Blog" },
      ]}
      heroImage={{
        src: pageImages.brands,
        alt: "Goan Spy blog and investigation insight hub",
      }}
      wrapContent={false}
      contentMaxWidth={1160}
    >
      <article style={{ display: "grid", gap: 18 }}>
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
                  Goan Spy Content Hub
                </span>
                <h2
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3.35rem)",
                    lineHeight: 1.02,
                    marginBottom: 16,
                    maxWidth: 780,
                  }}
                >
                  Search-driven blog content built around real fear, real risk,
                  and real decision pressure in Goa.
                </h2>
                <p
                  style={{
                    fontSize: 17,
                    lineHeight: 1.9,
                    color: "rgba(255,255,255,0.84)",
                    maxWidth: 780,
                  }}
                >
                  This hub is designed to capture high-intent search traffic and
                  turn anxious readers into trust-first prospects. The topics
                  below speak directly to domestic suspicion, privacy threats,
                  due diligence, missing persons, corporate fraud, and local
                  business intelligence.
                </p>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                <Link href="/contact-us" className="elemen-btn-primary">
                  Request a Confidential Review
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
                  { label: "10", text: "SEO-ready blog topics" },
                  { label: "5", text: "Domestic and personal investigation posts" },
                  { label: "5", text: "B2B and corporate intelligence posts" },
                  { label: "Goa", text: "Strictly local search positioning" },
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

        <ScrollReveal variant="fade-up" duration={0.58}>
          <section
            style={{
              background: "rgba(255,255,255,0.82)",
              border: "1px solid var(--border)",
              borderRadius: 24,
              padding: "20px 20px 18px",
              boxShadow: "0 12px 30px rgba(26,39,68,0.06)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 14,
              }}
            >
              <div style={{ maxWidth: 720 }}>
                <span
                  style={{
                    ...labelStyle,
                    marginBottom: 8,
                    color: "#1e5db0",
                  }}
                >
                  What you’ll find here
                </span>
                <p style={{ ...paragraphStyle, marginBottom: 0 }}>
                  Practical, search-focused articles built around the real
                  concerns people type into Google when they need answers fast.
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {["Personal risk", "Corporate risk", "Privacy & evidence"].map(
                  (tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "9px 12px",
                        borderRadius: 999,
                        background: "rgba(47,128,237,0.10)",
                        border: "1px solid rgba(47,128,237,0.16)",
                        color: "#1e5db0",
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" duration={0.65}>
          <section
            style={{
              padding: "clamp(18px, 3vw, 28px) 0",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <span style={labelStyle}>Content Strategy</span>
            <h2 style={sectionTitleStyle}>
              A blog structure designed for search intent and conversion pressure
            </h2>
            <p style={{ ...paragraphStyle, maxWidth: 940, marginBottom: 18 }}>
              To drive organic search traffic, content must match the language
              real people use when they are suspicious, stressed, or facing
              financial exposure. These blog topics are framed around intent
              clusters that naturally fit Goan Spy&apos;s credibility-first
              position.
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
                  title: "Anxious Personal Searchers",
                  text: "Infidelity, marriage verification, child safety, and missing persons topics that attract emotionally urgent B2C traffic.",
                },
                {
                  title: "Privacy-Conscious Readers",
                  text: "TSCM, hidden camera detection, and self-protection content that builds authority before direct outreach.",
                },
                {
                  title: "Crisis-Driven Business Searchers",
                  text: "Corporate espionage, hiring risk, fraud, asset loss, and partner verification topics tied to immediate commercial pain.",
                },
                {
                  title: "Local Search Relevance",
                  text: "Each post anchors to Panaji, Patto, Ponda, Vasco, Margao, Calangute, Candolim, and other Goa locations to increase regional discoverability.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    padding: "18px",
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
          <BlogSection
            eyebrow="Part 1"
            title="Domestic & Personal Investigation Blogs"
            description="These five posts target emotionally urgent search behavior from families, spouses, and private individuals who need clarity before making high-stakes personal decisions."
            posts={personalBlogs}
            accent="light"
          />
        </ScrollReveal>

        <ScrollReveal variant="fade-up" duration={0.72}>
          <BlogSection
            eyebrow="Part 2"
            title="B2B & Corporate Intelligence Blogs"
            description="These five posts are built for founders, boards, HR leaders, plant operators, and property investors looking for evidence-led answers before exposure becomes loss."
            posts={corporateBlogs}
            accent="dark"
          />
        </ScrollReveal>

        <ScrollReveal variant="zoom-in" duration={0.68}>
          <section style={{ padding: "clamp(20px, 3vw, 32px) 0 0" }}>
            <span style={labelStyle}>Publishing Goal</span>
            <h2 style={sectionTitleStyle}>
              Turn search traffic into trust, and trust into consultations
            </h2>
            <p style={{ ...paragraphStyle, maxWidth: 940, marginBottom: 18 }}>
              The strongest blog strategy does more than rank. It gives worried
              readers a sense that someone understands the exact situation they
              are in. These topics are designed to meet search demand while
              naturally reinforcing Goan Spy as a credible local authority for
              sensitive personal and commercial investigations.
            </p>

            <div
              style={{
                marginTop: 20,
                paddingTop: 20,
                borderTop: "1px solid var(--border)",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 18,
              }}
            >
              <div>
                <div style={labelStyle}>Best Next Use</div>
                <p style={paragraphStyle}>
                  Publish these as individual blog posts, then interlink them
                  with service pages, ethics, client protocol, and public
                  awareness content.
                </p>
              </div>
              <div>
                <div style={labelStyle}>SEO Benefit</div>
                <p style={paragraphStyle}>
                  Each topic targets long-tail, high-intent phrases tied to fear,
                  suspicion, business loss, and local Goa relevance.
                </p>
              </div>
              <div>
                <div style={labelStyle}>Conversion Path</div>
                <p style={paragraphStyle}>
                  Readers can move from educational content into confidential
                  consultations once uncertainty turns into a need for proof.
                </p>
              </div>
              <div>
                <div style={labelStyle}>Action</div>
                <p style={paragraphStyle}>
                  Use the contact route and services section as the primary CTA
                  destinations from every published article.
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
                Build a Blog-Led Lead Funnel
              </Link>
              <Link href="/public-awareness-security-guide" className="elemen-btn-outline">
                Read Public Awareness Guide
              </Link>
            </div>
          </section>
        </ScrollReveal>
      </article>
    </ContentPage>
  );
}
