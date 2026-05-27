import Link from "next/link";
import {
  Building2,
  Database,
  FileCheck2,
  Landmark,
  Mail,
  MapPinned,
  Phone,
  Scale,
  ShieldCheck,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/motion/ScrollReveal";
import {
  MosaicFeatureSection,
  SplitFeatureSection,
} from "@/components/ShowcaseSections";
import { pageImages } from "@/lib/content/images";
import {
  governmentRegulationAccountability,
  governmentRegulationAdmissibility,
  governmentRegulationDpdp,
  governmentRegulationFooter,
  governmentRegulationHighlights,
  governmentRegulationLegalStance,
  governmentRegulationPrivacy,
} from "@/lib/content/policies";

export const metadata = {
  title: "Government Regulation & Legal Compliance | Goan Spy",
  description:
    "Operating with legal accountability, structural integrity, and constitutional compliance across Goa and India.",
};

export default function GovernmentRegulationPage() {
  const detailIcons = [Building2, Phone, Mail, MapPinned];

  return (
    <main>
      <PageHero
        title="Government Regulation & Legal Compliance Framework"
        subtitle="Operating with absolute legal accountability, structural integrity, and strict constitutional compliance within the State of Goa and the Union of India."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Government Regulation & Legal Compliance" },
        ]}
        imageSrc={pageImages.industry}
        imageAlt="Government regulation and legal compliance framework"
        actions={
          <>
            <Link href="#legal-stance" className="elemen-btn-primary">
              Review Our Legal Advisory
            </Link>
            <Link href="/contact-us" className="elemen-btn-outline">
              Request Corporate Compliance Credentials
            </Link>
          </>
        }
      />

      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "46px 20px 90px",
        }}
      >
        <div style={{ display: "grid", gap: 30 }}>
          <ScrollReveal variant="fade-up" duration={0.62}>
            <SplitFeatureSection
              sectionId="legal-stance"
              eyebrow="Government Regulation & Legal Compliance"
              title="Legal accountability, constitutional discipline, and lawful intelligence"
              paragraphs={[
                governmentRegulationLegalStance.paragraphs[0],
                governmentRegulationLegalStance.paragraphs[1],
              ]}
              titleMaxWidth="16ch"
              imageSrc={pageImages.industry}
              imageAlt="Legal compliance and regulatory accountability"
              imageMinHeight={525}
              imageHeight={210}
              highlightPlacement="belowImage"
              highlightTitle="Registered, scoped, and contract-backed from day one"
              highlightText="We operate from our Mapusa office under a compliance-first structure that rejects gray-market tactics, unauthorized operations, and undefined client scopes."
              footer={
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 10,
                  }}
                >
                  {governmentRegulationLegalStance.bullets.map((item) => (
                    <span
                      key={item}
                      style={{
                        padding: "8px 12px",
                        borderRadius: 999,
                        background: "rgba(26,39,68,0.06)",
                        color: "var(--navy)",
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              }
            />
          </ScrollReveal>

          <ScrollReveal variant="fade-up" duration={0.68}>
            <MosaicFeatureSection
              eyebrow="Why Legal Discipline Matters"
              title="A compliance architecture built for corporate and private clients"
              subtitle="Our investigative work is framed around privacy rights, data governance, admissibility standards, and operational controls that protect both the client and the case."
              items={[
                {
                  kind: "card",
                  key: "privacy-card",
                  icon: <ShieldCheck size={18} />,
                  title: governmentRegulationPrivacy.title,
                  text: governmentRegulationPrivacy.paragraphs[0],
                  stat: governmentRegulationHighlights[1].value,
                  statLabel: governmentRegulationHighlights[1].label,
                },
                {
                  kind: "image",
                  key: "privacy-image",
                  imageSrc: pageImages.contact,
                  imageAlt: "Constitutional privacy and legal boundaries",
                },
                {
                  kind: "card",
                  key: "dpdp-card",
                  icon: <Database size={18} />,
                  title: governmentRegulationDpdp.title,
                  text: governmentRegulationDpdp.paragraphs[0],
                  stat: governmentRegulationHighlights[2].value,
                  statLabel: governmentRegulationHighlights[2].label,
                },
                {
                  kind: "image",
                  key: "dpdp-image",
                  imageSrc: pageImages.products,
                  imageAlt: "Digital data governance and compliance controls",
                },
                {
                  kind: "card",
                  key: "admissibility-card",
                  icon: <Landmark size={18} />,
                  title: governmentRegulationAdmissibility.title,
                  text: governmentRegulationAdmissibility.paragraphs[0],
                  stat: governmentRegulationHighlights[3].value,
                  statLabel: governmentRegulationHighlights[3].label,
                },
                {
                  kind: "image",
                  key: "admissibility-image",
                  imageSrc: pageImages.categories,
                  imageAlt: "Goan courts and evidence-led field documentation",
                },
              ]}
            />
          </ScrollReveal>

          <ScrollReveal variant="fade-up" duration={0.7}>
          <section
            style={{
              background: "rgba(255, 255, 255, 0.6)",
              border: "1px solid rgba(26, 39, 68, 0.12)",
              borderRadius: 26,
              padding: 22,
            }}
          >
            <div
              style={{
                maxWidth: 1040,
                margin: "0 auto 22px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "#ff4b3e",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: 0.3,
                  marginBottom: 10,
                }}
              >
                Professional Accountability
              </p>
              <h2
                style={{
                  fontSize: "clamp(24px, 3.3vw, 42px)",
                  lineHeight: 1.08,
                  color: "var(--navy)",
                  marginBottom: 10,
                }}
              >
                Three-phase compliance from client intent to secure dossier
                delivery
              </h2>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.75,
                  color: "var(--text-mid)",
                }}
              >
                {governmentRegulationAccountability.intro}
              </p>
            </div>

            <div
              className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr]"
              style={{ gap: 18, alignItems: "start" }}
            >
              <div>
                <div
                  style={{
                    borderRadius: 18,
                    overflow: "hidden",
                    boxShadow: "0 14px 32px rgba(26, 39, 68, 0.12)",
                    marginBottom: 14,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={pageImages.about}
                    alt="Operational compliance and professional accountability"
                    style={{
                      width: "100%",
                      height: 210,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>

                <div
                  style={{
                    background: "#ff473c",
                    color: "#fff",
                    borderRadius: 18,
                    padding: "18px 20px",
                    boxShadow: "0 16px 34px rgba(255, 71, 60, 0.22)",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "clamp(20px, 2vw, 30px)",
                      lineHeight: 1.08,
                      marginBottom: 10,
                      maxWidth: "14ch",
                    }}
                  >
                    Phase 1 -&gt; Phase 2 -&gt; Phase 3
                  </h3>
                  <p
                    style={{
                      fontSize: 13,
                      lineHeight: 1.7,
                      color: "rgba(255, 255, 255, 0.92)",
                      maxWidth: "42ch",
                    }}
                  >
                    {`${governmentRegulationAccountability.phases[0].title}, ${governmentRegulationAccountability.phases[1].title}, and ${governmentRegulationAccountability.phases[2].title} form the structural compliance path behind every accepted Goan Spy engagement.`}
                  </p>
                </div>
              </div>

              <div>
                {[governmentRegulationAccountability.commitments[0].text, governmentRegulationAccountability.commitments[1].text].map(
                  (paragraph) => (
                    <p
                      key={paragraph}
                      style={{
                        fontSize: 14,
                        lineHeight: 1.8,
                        color: "var(--text-mid)",
                        marginBottom: 14,
                      }}
                    >
                      {paragraph}
                    </p>
                  )
                )}

                <div
                  className="grid grid-cols-1 md:grid-cols-3"
                  style={{ gap: 10, marginTop: 8 }}
                >
                  {governmentRegulationAccountability.phases.map((phase) => (
                    <div
                      key={phase.step}
                      style={{
                        padding: "12px 14px",
                        borderRadius: 14,
                        background: "rgba(26,39,68,0.06)",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          color: "#ff4b3e",
                          textTransform: "uppercase",
                          letterSpacing: 0.4,
                          marginBottom: 4,
                        }}
                      >
                        {phase.step}
                      </div>
                      <div
                        style={{
                          fontSize: 14,
                          fontWeight: 700,
                          color: "var(--navy)",
                          marginBottom: 4,
                        }}
                      >
                        {phase.title}
                      </div>
                      <p
                        style={{
                          fontSize: 13,
                          lineHeight: 1.65,
                          color: "var(--text-mid)",
                        }}
                      >
                        {phase.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" duration={0.72}>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.6)",
                border: "1px solid rgba(26, 39, 68, 0.12)",
                borderRadius: 26,
                padding: 22,
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
                  Safeguards In Practice
                </p>
                <h2
                  style={{
                    fontSize: "clamp(24px, 3vw, 40px)",
                    lineHeight: 1.08,
                    color: "var(--navy)",
                    marginBottom: 8,
                  }}
                >
                  Operational safeguards that protect the client and the case
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: 16 }}>
                {governmentRegulationPrivacy.prohibitions.map((item) => (
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
                      <ShieldCheck size={18} />
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
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" duration={0.75}>
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(26,39,68,1) 0%, rgba(26,39,68,0.94) 50%, rgba(91,29,54,0.98) 100%)",
                borderRadius: 22,
                padding: 26,
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow: "0 16px 34px rgba(26, 39, 68, 0.18)",
              }}
            >
              <div
                className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]"
                style={{ gap: 22, alignItems: "start" }}
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
                    Compliance Assurances
                  </p>
                  <h2
                    style={{
                      fontSize: "clamp(24px, 2.7vw, 32px)",
                      lineHeight: 1.15,
                      marginBottom: 12,
                    }}
                  >
                    {governmentRegulationFooter.title}
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
                    {governmentRegulationFooter.description}
                  </p>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <Link href="/contact-us" className="elemen-btn-primary">
                      Request Corporate Compliance Credentials
                    </Link>
                    <Link
                      href="#legal-stance"
                      className="elemen-btn-outline"
                      style={{
                        color: "#fff",
                        borderColor: "rgba(255,255,255,0.6)",
                        background: "rgba(255,255,255,0.06)",
                      }}
                    >
                      Review Our Legal Advisory
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 12 }}>
                  {governmentRegulationFooter.details.map((detail, idx) => {
                    const Icon = detailIcons[idx] ?? Building2;
                    const href =
                      detail.label === "Direct Compliance Line"
                        ? "tel:+917304769291"
                        : detail.label === "Official Registry Mail"
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
      </section>
    </main>
  );
}
