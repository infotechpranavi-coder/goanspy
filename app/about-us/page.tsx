import Link from "next/link";
import {
  Building2,
  CircleDollarSign,
  FileCheck2,
  Lock,
  Mail,
  MapPinned,
  Phone,
  Radar,
  Users,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/motion/ScrollReveal";
import {
  MosaicFeatureSection,
  SplitFeatureSection,
} from "@/components/ShowcaseSections";
import {
  aboutContact,
  aboutExpertise,
  aboutFoundations,
  aboutGuarantees,
  aboutHighlights,
  aboutTeam,
  aboutTerrain,
} from "@/lib/content/about";
import { pageImages } from "@/lib/content/images";

export const metadata = {
  title: "About Us | Goan Spy",
  description:
    "About Goan Spy, a Goa-focused private detective agency specializing in discreet, evidence-led investigations.",
};

export default function AboutUsPage() {
  const detailIcons = [Building2, Phone, Mail, MapPinned];

  return (
    <main>
      <PageHero
        title="About Goan Spy - The Vanguard of Truth, Confidentiality, and Investigative Excellence in Goa."
        subtitle="Founded in 2023 with a singular mission: to provide individuals, families, and businesses across Goa with uncompromised clarity, elite field surveillance, and absolute non-disclosure."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        imageSrc={pageImages.about}
        imageAlt="Goan Spy investigators operating across Goa"
        actions={
          <>
            <Link href="/client-engagement-protocol" className="elemen-btn-primary">
              Read Our Core Methodology
            </Link>
            <Link href="/contact-us" className="elemen-btn-outline">
              Connect with a Senior Investigator
            </Link>
          </>
        }
      />

      <section
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "34px 20px 74px",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.72)",
            border: "1px solid rgba(26,39,68,0.10)",
            borderRadius: 28,
            padding: "22px 22px 18px",
            marginBottom: 24,
            boxShadow: "0 16px 34px rgba(26,39,68,0.06)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "end",
              justifyContent: "space-between",
              gap: 16,
            }}
          >
            <div style={{ maxWidth: 760 }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "6px 10px",
                  borderRadius: 999,
                  background: "rgba(47,128,237,0.12)",
                  color: "#1e5db0",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                About Goan Spy
              </span>
              <h2
                style={{
                  fontSize: "clamp(24px, 3vw, 34px)",
                  lineHeight: 1.12,
                  color: "var(--navy)",
                  marginBottom: 10,
                }}
              >
                Structured, discreet, and built for real investigative clarity.
              </h2>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: "var(--text-mid)",
                  margin: 0,
                  maxWidth: 740,
                }}
              >
                The page content is strong already; we’re just giving it a calmer
                rhythm, tighter spacing, and better visual hierarchy so every
                section reads with confidence.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 10,
                minWidth: 360,
              }}
              className="about-stat-grid"
            >
              {aboutHighlights.slice(0, 3).map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(26,39,68,0.08)",
                    borderRadius: 18,
                    padding: "14px 14px 13px",
                  }}
                >
                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: 800,
                      color: "var(--wine-berry)",
                      lineHeight: 1.1,
                      marginBottom: 6,
                    }}
                  >
                    {item.value}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--text-light)",
                      fontWeight: 700,
                      lineHeight: 1.35,
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gap: 22 }}>
          <ScrollReveal variant="fade-up" duration={0.62}>
            <SplitFeatureSection
              eyebrow="About Goan Spy"
              title="Building credibility, discretion, and investigative clarity across Goa"
              paragraphs={[
                aboutFoundations.intro,
                aboutFoundations.paragraphs[0],
                aboutFoundations.paragraphs[1],
                aboutFoundations.paragraphs[2],
              ]}
              imageSrc={pageImages.about}
              imageAlt="Goan Spy investigations across Goa"
              highlightTitle="Credibility first. Evidence always."
              highlightText="From our command point near Mapusa Bus Stand, we coordinate multi-district field surveillance that turns suspicion into structured, defensible proof."
              footer={
                <div
                  style={{
                    display: "flex",
                    gap: 18,
                    flexWrap: "wrap",
                    alignItems: "center",
                  }}
                >
                  <Link href="/contact-us" className="elemen-btn-primary">
                    More About Us
                  </Link>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      color: "var(--navy)",
                    }}
                  >
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: "50%",
                        border: "1px solid rgba(26, 39, 68, 0.16)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Phone size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700 }}>Call us anytime</div>
                      <div style={{ fontSize: 14, color: "var(--text-mid)" }}>
                        (+91) 73047 69291
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
          </ScrollReveal>

          <ScrollReveal variant="fade-up" duration={0.68}>
            <MosaicFeatureSection
              eyebrow="Why Choose Goan Spy"
              title="Your trusted investigative partner in Goa"
              subtitle="We combine local intelligence, disciplined field operations, and confidential reporting to handle personal, matrimonial, and corporate investigations with precision."
              items={[
                {
                  kind: "card",
                  key: "team-card",
                  icon: <Users size={18} />,
                  title: "Field Team Discipline",
                  text: aboutTeam.paragraphs[0],
                  stat: aboutHighlights[0].value,
                  statLabel: aboutHighlights[0].label,
                },
                {
                  kind: "image",
                  key: "team-image",
                  imageSrc: pageImages.industry,
                  imageAlt: "Goan Spy field coverage and urban intelligence",
                },
                {
                  kind: "card",
                  key: "coverage-card",
                  icon: <MapPinned size={18} />,
                  title: "Goa-Wide Coverage",
                  text: aboutTerrain[0].paragraphs[0],
                  stat: aboutHighlights[2].value,
                  statLabel: aboutHighlights[2].label,
                },
                {
                  kind: "image",
                  key: "coverage-image",
                  imageSrc: pageImages.categories,
                  imageAlt: "North and South Goa surveillance terrain",
                },
                {
                  kind: "card",
                  key: "tech-card",
                  icon: <Radar size={18} />,
                  title: "Technical Superiority",
                  text: aboutExpertise[2].description,
                  stat: aboutHighlights[3].value,
                  statLabel: aboutHighlights[3].label,
                },
                {
                  kind: "image",
                  key: "tech-image",
                  imageSrc: pageImages.products,
                  imageAlt: "Evidence-led investigative technology",
                },
              ]}
            />
          </ScrollReveal>

          <ScrollReveal variant="fade-up" duration={0.7}>
            <SplitFeatureSection
              eyebrow="Operational Strength"
              title="Spaces, situations, and subjects demand different investigative posture"
              paragraphs={[
                aboutTeam.femaleOperative,
                aboutTerrain[0].paragraphs[1],
                aboutTerrain[1].paragraphs[0],
                aboutTerrain[1].paragraphs[1],
              ]}
              imageSrc={pageImages.contact}
              imageAlt="Goan Spy surveillance and operational planning"
              highlightTitle="Women operatives, field analysts, and local adaptability"
              highlightText={aboutTeam.paragraphs[1]}
            />
          </ScrollReveal>

          <ScrollReveal variant="fade-up" duration={0.72}>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.72)",
                border: "1px solid rgba(26, 39, 68, 0.10)",
                borderRadius: 26,
                padding: 22,
                boxShadow: "0 14px 30px rgba(26,39,68,0.06)",
              }}
            >
              <div style={{ marginBottom: 16 }}>
                <p
                  style={{
                    color: "#ff4b3e",
                    fontWeight: 700,
                    fontSize: 13,
                    letterSpacing: 0.3,
                    marginBottom: 10,
                  }}
                >
                  Goan Spy Guarantee
                </p>
                <h2
                  style={{
                    fontSize: "clamp(24px, 3vw, 40px)",
                    lineHeight: 1.08,
                    color: "var(--navy)",
                    marginBottom: 8,
                  }}
                >
                  Three promises behind every case file
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: 16 }}>
                {aboutGuarantees.map((item, idx) => {
                  const Icon =
                    idx === 0 ? Lock : idx === 1 ? FileCheck2 : CircleDollarSign;

                  return (
                    <div
                      key={item.title}
                      style={{
                        background: "#fff",
                        border: "1.5px solid rgba(255, 75, 62, 0.68)",
                        borderRadius: 18,
                        padding: 20,
                        boxShadow: "0 12px 30px rgba(26, 39, 68, 0.07)",
                      }}
                    >
                      <div
                        style={{
                          width: 46,
                          height: 46,
                          borderRadius: "50%",
                          background: "#ff4b3e",
                          color: "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: 14,
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      <h3
                        style={{
                          fontSize: 22,
                          lineHeight: 1.14,
                          color: "var(--navy)",
                          marginBottom: 10,
                        }}
                      >
                        {item.title}
                      </h3>
                      <p style={{ fontSize: 14, lineHeight: 1.75, color: "var(--text-mid)" }}>
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" duration={0.76}>
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(26,39,68,1) 0%, rgba(26,39,68,0.94) 50%, rgba(91,29,54,0.98) 100%)",
              borderRadius: 22,
              padding: 24,
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.18)",
              boxShadow: "0 16px 34px rgba(26, 39, 68, 0.18)",
            }}
          >
            <div
              className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]"
              style={{ gap: 18, alignItems: "start" }}
            >
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: 12,
                    letterSpacing: 0.5,
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.74)",
                    marginBottom: 8,
                  }}
                >
                  Strategic Contact Point
                </p>
                <h2
                  style={{
                    fontSize: "clamp(24px, 2.7vw, 32px)",
                    lineHeight: 1.15,
                    marginBottom: 12,
                  }}
                >
                  {aboutContact.title}
                </h2>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.75,
                    color: "rgba(255,255,255,0.86)",
                    marginBottom: 18,
                    maxWidth: 620,
                  }}
                >
                  {aboutContact.description}
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <Link href="/contact-us" className="elemen-btn-primary">
                    Connect with a Senior Investigator
                  </Link>
                  <Link
                    href="/client-engagement-protocol"
                    className="elemen-btn-outline"
                    style={{
                      color: "#fff",
                      borderColor: "rgba(255,255,255,0.6)",
                      background: "rgba(255,255,255,0.06)",
                    }}
                  >
                    Read Our Core Methodology
                  </Link>
                </div>
              </div>

                <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 12 }}>
                {aboutContact.details.map((detail, idx) => {
                  const Icon = detailIcons[idx] ?? Building2;
                  const href =
                    detail.label === "Official Desk"
                      ? "tel:+917304769291"
                      : detail.label === "Secure Email"
                        ? "mailto:info@goanspy.com"
                        : undefined;

                  const valueContent = href ? (
                    <Link
                      href={href}
                      style={{
                        color: "#fff",
                        textDecoration: "none",
                        lineHeight: 1.65,
                        fontSize: 14,
                      }}
                    >
                      {detail.value}
                    </Link>
                  ) : (
                    <span
                      style={{
                        color: "#fff",
                        lineHeight: 1.65,
                        fontSize: 14,
                      }}
                    >
                      {detail.value}
                    </span>
                  );

                  return (
                    <div
                      key={detail.label}
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: 16,
                        padding: 18,
                      }}
                    >
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 12,
                          background: "rgba(255,255,255,0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: 12,
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      <div
                        style={{
                          color: "rgba(255,255,255,0.7)",
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: 0.4,
                          textTransform: "uppercase",
                          marginBottom: 6,
                        }}
                      >
                        {detail.label}
                      </div>
                      {valueContent}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .about-stat-grid {
            grid-template-columns: 1fr !important;
            min-width: 0 !important;
          }
        }
      `}</style>
      </section>
    </main>
  );
}
