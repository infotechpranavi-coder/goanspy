import Link from "next/link";
import PageHero from "@/components/PageHero";
import ServicesHubNav from "@/components/ServicesHubNav";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { pageImages } from "@/lib/content/images";
import {
  CONTACT_EMAIL,
  OFFICE_ADDRESS_FULL,
  PHONE_PRIMARY,
} from "@/lib/brand";

export const metadata = {
  title: "Professional Investigation Services in Goa | Goan Spy",
  description:
    "Elite personal surveillance and corporate risk intelligence across Goa. Personal, matrimonial, missing persons, fraud, due diligence, IP protection, and TSCM services.",
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

export default function ServicesHubPage() {
  return (
    <main>
      <PageHero
        title="Professional Investigation Services in Goa – Uncover the Truth with Precision"
        subtitle="Providing elite, legally accountable personal surveillance and corporate risk intelligence exclusively within the State of Goa. Backed by state-of-the-art technology and hyper-local ground expertise."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        imageSrc={pageImages.ourServices}
        imageAlt="Professional private investigation services across Goa"
        actions={
          <>
            <Link href="/contact-us" className="elemen-btn-primary">
              Book a Free Confidential Consultation
            </Link>
            <Link
              href="https://wa.me/917304769291"
              className="elemen-btn-outline"
              style={{
                color: "#fff",
                borderColor: "rgba(255,255,255,0.72)",
              }}
            >
              Message Our Operations Desk on WhatsApp
            </Link>
          </>
        }
      />

      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "48px 20px 90px" }}>
        <div style={{ display: "grid", gap: 28 }}>
          <ScrollReveal variant="fade-up" duration={0.64}>
            <section
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 28,
                padding: "clamp(28px, 4vw, 44px)",
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
              <div style={{ position: "relative", display: "grid", gap: 18 }}>
                <div style={{ maxWidth: 820 }}>
                  <span
                    style={{
                      ...labelStyle,
                      color: "rgba(255,255,255,0.72)",
                    }}
                  >
                    Our Investigative Methodology
                  </span>
                  <h2
                    style={{
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      lineHeight: 1.06,
                      marginBottom: 14,
                    }}
                  >
                    The credibility-first edge behind every Goan Spy operation.
                  </h2>
                  <p
                    style={{
                      fontSize: 16,
                      lineHeight: 1.9,
                      color: "rgba(255,255,255,0.84)",
                    }}
                  >
                    At <strong>Goan Spy</strong>, we understand that behind
                    every investigative brief lies a critical turning point in
                    your personal life or business security. Established in 2023
                    and operating out of Office No. A-514, Edcon Centre, near
                    the <strong>Mapusa Bus Stand, Goa</strong>, we provide
                    specialized, high-fidelity tracking and information
                    gathering. We refuse to consider your case a mere file
                    number.
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      lineHeight: 1.9,
                      color: "rgba(255,255,255,0.84)",
                      marginTop: 12,
                    }}
                  >
                    Every operation is executed in full camouflage mode by highly
                    disciplined professionals, including a specialized team of{" "}
                    <strong>trained female detectives</strong> who can blend
                    seamlessly into local communities, elite hospitality spaces,
                    and private venues across Goa without raising a single flag.
                    We combine advanced surveillance technologies with seasoned
                    field tactics to deliver cold, hard, timestamped photographic
                    and video proof that clears away all doubt.
                  </p>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                    gap: 14,
                    marginTop: 6,
                  }}
                >
                  {[
                    "Trained female detective deployment",
                    "State-wide Goa-only ground coverage",
                    "High-definition timestamped proof",
                    "Discreet surveillance and local reputation mapping",
                  ].map((item) => (
                    <div
                      key={item}
                      style={{
                        padding: "14px 16px",
                        borderRadius: 18,
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        fontSize: 14,
                        lineHeight: 1.65,
                        color: "rgba(255,255,255,0.9)",
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" duration={0.66}>
            <section
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 28,
                padding: "clamp(20px, 3vw, 28px)",
                background:
                  "linear-gradient(135deg, rgba(26,39,68,0.98) 0%, rgba(20,30,51,0.96) 100%)",
              }}
            >
              <ServicesHubNav />
            </section>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" duration={0.7}>
            <section
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1fr) minmax(280px, 0.9fr)",
                gap: 26,
                alignItems: "start",
                padding: "8px 0 2px",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div>
                <span style={labelStyle}>Hyper-Local Strategic Ground Network</span>
                <h2 style={sectionTitleStyle}>
                  Full coverage across every major Goan zone.
                </h2>
                <p style={{ ...paragraphStyle, maxWidth: 760 }}>
                  Our field operations desk maintains full coverage across all
                  major zones and commercial sectors in Goa, enabling rapid
                  deployment, address verification, local intelligence gathering,
                  and discreet surveillance wherever the brief demands.
                </p>
              </div>

              <div style={{ display: "grid", gap: 14 }}>
                {[
                  {
                    title: "North Goa Core",
                    text:
                      "High-intensity tracking and discrete surveillance assets across Calangute, Candolim, Anjuna, and Baga.",
                  },
                  {
                    title: "Administrative & Transit Belts",
                    text:
                      "Rapid information gathering, address verifications, and civil checks around the state capital of Panaji, Mapusa, and Porvorim.",
                  },
                  {
                    title: "South Goa Hubs",
                    text:
                      "Dedicated corporate background verifications and industrial intelligence across Margao, Vasco da Gama, and southern coastal belts.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      padding: "16px 18px",
                      borderRadius: 18,
                      background:
                        "linear-gradient(180deg, rgba(245,244,241,0.9), rgba(255,255,255,1))",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: 18,
                        color: "var(--navy)",
                        marginBottom: 8,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p style={{ ...paragraphStyle, fontSize: 15 }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" duration={0.72}>
            <section
              style={{
                borderRadius: 24,
                padding: "clamp(28px, 4vw, 40px)",
                background:
                  "linear-gradient(135deg, rgba(26,39,68,0.98) 0%, rgba(20,30,51,0.96) 58%, rgba(91,29,54,0.95) 100%)",
                color: "#fff",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  lineHeight: 1.15,
                  marginBottom: 12,
                }}
              >
                Do not allow yourself to be misled or blindsided by hidden
                realities. Secure the proof you need today.
              </h2>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.85,
                  color: "rgba(255,255,255,0.84)",
                  marginBottom: 22,
                  maxWidth: 760,
                }}
              >
                Contact our operations desk for a free confidential consultation.
                We are open 24/7 for critical briefs.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: 14,
                  marginBottom: 24,
                }}
              >
                {[
                  { label: "Address", value: OFFICE_ADDRESS_FULL },
                  {
                    label: "Direct Operations Helpline",
                    value: `+91 ${PHONE_PRIMARY.slice(0, 5)} ${PHONE_PRIMARY.slice(5)}`,
                    href: `tel:+91${PHONE_PRIMARY}`,
                  },
                  {
                    label: "Official E-mail",
                    value: CONTACT_EMAIL,
                    href: `mailto:${CONTACT_EMAIL}`,
                  },
                  { label: "Operational Hours", value: "Open 24/7 for critical briefs." },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      padding: "14px 16px",
                      borderRadius: 16,
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 11,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.62)",
                        marginBottom: 6,
                        fontWeight: 700,
                      }}
                    >
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{
                          color: "#fff",
                          textDecoration: "none",
                          fontSize: 14,
                          lineHeight: 1.6,
                          fontWeight: 600,
                        }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div
                        style={{
                          fontSize: 14,
                          lineHeight: 1.6,
                          color: "rgba(255,255,255,0.92)",
                        }}
                      >
                        {item.value}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <Link href="/contact-us" className="elemen-btn-primary">
                  Book a Free Confidential Consultation
                </Link>
                <Link
                  href="https://wa.me/917304769291"
                  className="elemen-btn-outline"
                  style={{
                    color: "#fff",
                    borderColor: "rgba(255,255,255,0.72)",
                  }}
                >
                  Message Our Operations Desk on WhatsApp
                </Link>
              </div>
            </section>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
