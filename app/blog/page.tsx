import Link from "next/link";
import ContentPage from "@/components/ContentPage";
import { pageImages } from "@/lib/content/images";

export const metadata = {
  title: "Investigation Insights & Blog | Goan Spy Detective Agency Goa",
  description:
    "Explore Goan Spy's blog articles covering infidelity, privacy, missing persons, corporate fraud, due diligence, and security risks across Goa.",
};

type BlogCard = {
  id: string;
  title: string;
  audience: string;
  summary: string;
  focus: string[];
  href: string;
};

const personalBlogs: BlogCard[] = [
  {
    id: "01",
    title: "Signs of an Unfaithful Partner: Spotting Infidelity During a Goa Vacation",
    audience: "Spouses in metros whose partners are traveling to Goa.",
    summary:
      "A Goa trip can hide behavior for a while, but suspicious timing, money patterns, and defensiveness usually leave clues.",
    focus: ["Digital blackout", "Schedule changes", "Professional surveillance"],
    href: "/contact-us",
  },
  {
    id: "02",
    title:
      "The Importance of Pre-Matrimonial Background Vetting in Goa's Changing Social Landscape",
    audience: "Families verifying a prospective marriage match.",
    summary:
      "A polished profile can hide debts, legal issues, prior relationships, or unstable lifestyle patterns.",
    focus: ["Financial status", "Relationship history", "Family peace of mind"],
    href: "/contact-us",
  },
  {
    id: "03",
    title: "Hidden Cameras in Holiday Rentals: How to Protect Your Privacy in Goa",
    audience: "Villa guests, celebrities, and sensitive off-site teams.",
    summary:
      "Tiny hidden cameras can be placed inside fixtures, power blocks, or bathrooms without visible signs.",
    focus: ["Holiday rentals", "RF analysis", "Secure privacy"],
    href: "/contact-us",
  },
  {
    id: "04",
    title: "Child Custody Disputes in Goa: Gathering Legally Admissible Evidence",
    audience: "Parents involved in visitation or welfare disputes.",
    summary:
      "Courts value factual, chronological evidence that clearly shows how a child is being cared for.",
    focus: ["Timestamped proof", "Sensitive handling", "Legal support"],
    href: "/contact-us",
  },
  {
    id: "05",
    title: "Missing Persons in Goa: Why Time is of the Essence in Location Tracing",
    audience: "Families and guardians searching for a missing loved one.",
    summary:
      "When communication stops, every hour matters because digital traces and witness memories fade quickly.",
    focus: ["Golden window", "Ground sweeps", "Fast intervention"],
    href: "/contact-us",
  },
];

const corporateBlogs: BlogCard[] = [
  {
    id: "06",
    title: "Corporate Espionage and IP Theft: Protecting Commercial Interests in Panaji",
    audience: "Boards, founders, and legal teams in Panaji.",
    summary:
      "Internal leaks, stolen client lists, and competitor-aligned sabotage can destroy years of commercial progress.",
    focus: ["Insider leaks", "Technical sweeps", "Litigation-ready proof"],
    href: "/contact-us",
  },
  {
    id: "07",
    title: "Supply Chain Leaks: Combating Inventory Theft in Ponda Industrial Estate",
    audience: "Factory owners and logistics operators in Ponda.",
    summary:
      "Recurring shrinkage usually comes from a structured internal system that exploits blind spots in transport and storage.",
    focus: ["Weighbridge checks", "Route verification", "Leak isolation"],
    href: "/contact-us",
  },
  {
    id: "08",
    title: "The Risk of Unverified Hiring: Employee Background Verification for Vasco Port Enterprises",
    audience: "HR and operations teams in maritime and logistics businesses.",
    summary:
      "Resume-only hiring in a port city can create theft, compliance, and leakage risks.",
    focus: ["Address checks", "Record review", "Sector-specific vetting"],
    href: "/contact-us",
  },
  {
    id: "09",
    title: "Due Diligence in Goa Real Estate: Avoiding Commercial Land Fraud in Margao",
    audience: "Investors, developers, and property buyers in South Goa.",
    summary:
      "Prime deals can hide co-owner problems, forged documents, and inheritance disputes that basic paperwork misses.",
    focus: ["Title checks", "Seller mapping", "Capital protection"],
    href: "/contact-us",
  },
  {
    id: "10",
    title:
      "Digital Redirection: Why Competitor Analysis and Corporate Due Diligence Matter for Modern Goa Brands",
    audience: "Hospitality, retail, and growth-stage businesses.",
    summary:
      "Clear market intelligence helps you avoid weak partners, bad vendors, and costly strategic surprises.",
    focus: ["Financial health", "Vendor reliability", "Evidence-led decisions"],
    href: "/contact-us",
  },
];

function BlogGrid({
  eyebrow,
  title,
  description,
  posts,
}: {
  eyebrow: string;
  title: string;
  description: string;
  posts: BlogCard[];
}) {
  return (
    <section
      style={{
        padding: "clamp(24px, 4vw, 36px)",
        borderRadius: 28,
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(247,250,255,0.98) 100%)",
        border: "1px solid rgba(26,39,68,0.08)",
        boxShadow: "0 16px 40px rgba(26,39,68,0.06)",
      }}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 12,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#1e5db0",
          fontWeight: 700,
          marginBottom: 12,
        }}
      >
        {eyebrow}
      </span>
      <h2
        style={{
          fontSize: "clamp(1.8rem, 2.6vw, 2.35rem)",
          lineHeight: 1.08,
          color: "var(--navy)",
          marginBottom: 12,
          maxWidth: 820,
        }}
      >
        {title}
      </h2>
      <p
        style={{
          fontSize: 16,
          lineHeight: 1.85,
          color: "var(--text-mid)",
          maxWidth: 920,
          marginBottom: 24,
        }}
      >
        {description}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 18,
        }}
      >
        {posts.map((post) => (
          <article
            key={post.id}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 24,
              padding: 20,
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,251,255,1) 100%)",
              border: "1px solid rgba(26,39,68,0.08)",
              boxShadow: "0 14px 34px rgba(26,39,68,0.07)",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "0 auto auto 0",
                width: "100%",
                height: 5,
                background: "linear-gradient(90deg, #1e5db0 0%, #2f80ed 52%, #c4a574 100%)",
              }}
            />

            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <span
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 14,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "linear-gradient(135deg, rgba(47,128,237,0.16), rgba(196,165,116,0.20))",
                  border: "1px solid rgba(47,128,237,0.18)",
                  color: "#1e5db0",
                  fontSize: 16,
                  fontWeight: 800,
                  flex: "0 0 auto",
                }}
              >
                {post.id}
              </span>
              <h3
                style={{
                  fontSize: 19,
                  lineHeight: 1.25,
                  color: "var(--navy)",
                  margin: 0,
                }}
              >
                {post.title}
              </h3>
            </div>

            <p
              style={{
                fontSize: 14,
                lineHeight: 1.8,
                color: "var(--text-mid)",
                marginBottom: 12,
              }}
            >
              <strong>Audience:</strong> {post.audience}
            </p>

            <p
              style={{
                fontSize: 15,
                lineHeight: 1.85,
                color: "var(--text-mid)",
                marginBottom: 14,
              }}
            >
              {post.summary}
            </p>

            <div style={{ display: "grid", gap: 8 }}>
              {post.focus.map((item) => (
                <div
                  key={item}
                  style={{
                    paddingLeft: 14,
                    borderLeft: "3px solid var(--gold)",
                    fontSize: 14,
                    lineHeight: 1.75,
                    color: "var(--text-mid)",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            <div style={{ marginTop: "auto", paddingTop: 16 }}>
              <Link href={post.href} className="elemen-btn-primary">
                Talk to Goan Spy
              </Link>
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
      title="Investigation Blog"
      subtitle="Articles and guides about real situations, practical concerns, and the work Goan Spy handles across Goa."
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
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 30,
            padding: "clamp(28px, 5vw, 56px)",
            background:
              "linear-gradient(135deg, rgba(26,39,68,0.98) 0%, rgba(20,30,51,0.98) 60%, rgba(47,128,237,0.82) 100%)",
            color: "var(--white)",
            boxShadow: "0 18px 40px rgba(26,39,68,0.16)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at top right, rgba(196,165,116,0.22), transparent 30%), radial-gradient(circle at 20% 85%, rgba(255,255,255,0.08), transparent 22%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative", display: "grid", gap: 20 }}>
            <div style={{ maxWidth: 820 }}>
              <span
                style={{
                  display: "inline-block",
                  fontSize: 12,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.72)",
                  fontWeight: 700,
                  marginBottom: 12,
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
                Search-driven blog content built around real fear, real risk, and real decision pressure in Goa.
              </h2>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.85,
                  color: "rgba(255,255,255,0.84)",
                  maxWidth: 780,
                }}
              >
                These topics are structured to be easy to scan, attractive on the page, and aligned with the exact questions people ask when they need certainty fast.
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
          </div>
        </section>

        <section
          style={{
            background: "rgba(255,255,255,0.84)",
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
              <p style={{ fontSize: 16, lineHeight: 1.9, color: "var(--text-mid)", marginBottom: 0 }}>
                Practical articles built around the real concerns people face when they need answers fast.
              </p>
            </div>
          </div>
        </section>

        <BlogGrid
          eyebrow="Part 1"
          title="Domestic & Personal Investigation Blogs"
          description="Five posts for people who need clarity on relationships, family safety, privacy, or missing person situations."
          posts={personalBlogs}
        />

        <BlogGrid
          eyebrow="Part 2"
          title="B2B & Corporate Intelligence Blogs"
          description="Five business-focused posts for leaders who need verified answers before risk turns into legal, financial, or reputational damage."
          posts={corporateBlogs}
        />
      </article>
    </ContentPage>
  );
}
