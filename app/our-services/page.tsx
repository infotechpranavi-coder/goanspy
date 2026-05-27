import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContentCard from "@/components/ContentCard";
import ScrollReveal from "@/components/motion/ScrollReveal";
import {
  ScrollStagger,
  ScrollStaggerItem,
} from "@/components/motion/ScrollReveal";
import { staggerVariantAt } from "@/lib/motion-presets";
import { pageImages, getServiceImage } from "@/lib/content/images";
import { ourServices } from "@/lib/site-pages";

export const metadata = {
  title: "Professional Investigation Services in Goa | Goan Spy",
  description:
    "Elite personal surveillance, matrimonial verification, missing persons tracing, corporate fraud, due diligence, and TSCM investigation services across Goa.",
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

const serviceLayoutClasses = [
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-6",
  "lg:col-span-3",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
] as const;

const serviceCardHeights = [255, 255, 255, 255, 245, 245, 245, 250, 250, 250] as const;

export default function OurServicesPage() {
  return (
    <main>
      <PageHero
        title="Professional Investigation Services in Goa"
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
                    Credibility First Edge
                  </span>
                  <h2
                    style={{
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      lineHeight: 1.06,
                      marginBottom: 14,
                    }}
                  >
                    Hyper-local field intelligence with disciplined evidence
                    gathering.
                  </h2>
                  <p
                    style={{
                      fontSize: 16,
                      lineHeight: 1.9,
                      color: "rgba(255,255,255,0.84)",
                    }}
                  >
                    At <strong>Goan Spy</strong>, we understand that behind
                    every brief lies a major personal or commercial turning
                    point. Established in 2023 and operating out of Office No.
                    A-514, Edcon Centre, near the
                    <strong> Mapusa Bus Stand, Goa</strong>, we deliver
                    high-fidelity tracking and information gathering without
                    treating your case like a generic file number.
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      lineHeight: 1.9,
                      color: "rgba(255,255,255,0.84)",
                      marginTop: 12,
                    }}
                  >
                    Every operation is executed in full camouflage mode by
                    disciplined professionals, including trained female
                    detectives who can blend into local communities, elite
                    hospitality spaces, and private venues across Goa while
                    capturing timestamped photographic and video proof.
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
                padding: "10px 0 2px",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <span style={labelStyle}>Section 2</span>
              <h2 style={sectionTitleStyle}>
                Personal & Domestic Investigation Services
              </h2>
              <p style={{ ...paragraphStyle, maxWidth: 920, marginBottom: 22 }}>
                When uncertainty threatens your family&apos;s safety, peace of
                mind, or legal position, our personal investigation divisions
                step in to deliver clear answers through discreet evidence-led
                fieldwork.
              </p>

              <div style={{ display: "grid", gap: 18 }}>
                {[
                  {
                    title: "Infidelity & Extramarital Affairs Investigations",
                    text:
                      "If you suspect a spouse or partner is cheating, living with unresolved doubt can become emotionally exhausting. Our infidelity investigations trace interactions, locations, and behavioral patterns across major roads, transit links, private venues, and hidden coastal retreats across Goa. We utilize sophisticated long-range optical equipment and low-profile surveillance to secure unmanipulated visual proof while keeping our footprint completely hidden from the subject.",
                  },
                  {
                    title: "Pre-Matrimonial & Background Verification",
                    text:
                      "Before finalizing a marriage alliance, your family deserves verified facts rather than polished claims. Our background checks uncover hidden details relating to prior marital status, personal reputation, financial health, active relationship lines, and legal vulnerabilities. We conduct discreet verification across communities ranging from Porvorim to Margao, delivering a clear and objective character profile before a life-changing commitment is made.",
                  },
                  {
                    title: "Child Custody & Teenager Lifestyle Monitoring",
                    text:
                      "Protecting children requires objective clarity. Whether you need legally relevant evidence for a custody matter at the District Court in Margao or simply want to verify a teenager's routines, peer influence, or exposure to unsafe behavior, Goan Spy operates with sensitivity and control. Our monitoring identifies meaningful risk without disrupting your family dynamic.",
                  },
                  {
                    title: "Missing Persons Investigations",
                    text:
                      "When a loved one vanishes or cuts off communication within Goa, time becomes critical. Our missing persons unit combines real-time physical tracing, OSINT, local field interviews, and background profiling to locate missing individuals quickly and help reconnect families before viable leads go cold.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    style={{
                      paddingTop: index === 0 ? 0 : 18,
                      borderTop: index === 0 ? "none" : "1px solid var(--border)",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "clamp(1.28rem, 2vw, 1.6rem)",
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
            <section
              style={{
                padding: "10px 0 2px",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <span style={labelStyle}>Section 3</span>
              <h2 style={sectionTitleStyle}>
                Corporate & Business Intelligence Services
              </h2>
              <p style={{ ...paragraphStyle, maxWidth: 920, marginBottom: 22 }}>
                We safeguard hospitality brands, manufacturers, maritime firms,
                commercial assets, and business investments by exposing internal
                risk, verifying people and partners, and protecting valuable
                operational intelligence.
              </p>

              <div style={{ display: "grid", gap: 18 }}>
                {[
                  {
                    title: "Pre-Employment & Employee Background Checks",
                    text:
                      "Relying entirely on a resume is a significant risk when hiring into sensitive roles. Our employee vetting services verify educational credentials, previous employment, and professional reputation while screening for criminal exposure or prior misconduct. This is especially valuable for manufacturing setups in Ponda and maritime or logistics firms operating near the Mormugao Port in Vasco da Gama.",
                  },
                  {
                    title: "Corporate Fraud & Internal Misconduct Investigations",
                    text:
                      "Internal fraud, white-collar misconduct, and financial misappropriation can quietly damage the bottom line. Our corporate fraud units deploy structured field intelligence, employee screening, and financial trail mapping to identify bad actors within your organization. The final case files are built to protect your enterprise and support legal escalation if required.",
                  },
                  {
                    title: "Due Diligence Investigations",
                    text:
                      "Before entering a business acquisition, real estate transaction, partnership, or capital deployment decision in Goa, hidden facts must be surfaced. Our due diligence work maps actual financial standing, liabilities, legal exposure, and operational vulnerabilities so your investment remains protected.",
                  },
                  {
                    title: "Intellectual Property (IP) & Anti-Counterfeiting Operations",
                    text:
                      "We help brands defend trademarked products, proprietary assets, and market identity from illicit reproduction. Goan Spy traces counterfeit supply networks, monitors grey-market distributors, and gathers field intelligence on unauthorized warehousing or manufacturing so enforcement action can be executed from a position of proof.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    style={{
                      paddingTop: index === 0 ? 0 : 18,
                      borderTop: index === 0 ? "none" : "1px solid var(--border)",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "clamp(1.28rem, 2vw, 1.6rem)",
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
                <span style={labelStyle}>Section 4</span>
                <h2 style={sectionTitleStyle}>Hyper-Local Strategic Ground Network</h2>
                <p style={{ ...paragraphStyle, maxWidth: 760 }}>
                  Our field operations desk maintains active coverage across Goa&apos;s
                  highest-sensitivity corridors, enabling rapid deployment,
                  address verification, local intelligence gathering, and
                  discreet surveillance wherever the brief demands.
                </p>
              </div>

              <div style={{ display: "grid", gap: 14 }}>
                {[
                  {
                    title: "North Goa Core",
                    text:
                      "High-intensity tracking and discreet surveillance assets across Calangute, Candolim, Anjuna, and Baga.",
                  },
                  {
                    title: "Administrative & Transit Belts",
                    text:
                      "Rapid information gathering, address verification, and civil checks around Panaji, Mapusa, and Porvorim.",
                  },
                  {
                    title: "South Goa Hubs",
                    text:
                      "Dedicated corporate background verifications and industrial intelligence across Margao, Vasco da Gama, and southern coastal sectors.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      padding: "16px 18px",
                      borderRadius: 18,
                      background: "linear-gradient(180deg, rgba(245,244,241,0.9), rgba(255,255,255,1))",
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
            <section style={{ paddingTop: 8 }}>
              <span style={labelStyle}>Service Directory</span>
              <h2 style={sectionTitleStyle}>Explore Every Goan Spy Service Division</h2>
              <p style={{ ...paragraphStyle, maxWidth: 920, marginBottom: 24 }}>
                Use the directory below to move directly into the specific
                service page that matches your situation. Each page breaks down
                what the service covers and how Goan Spy approaches it.
              </p>

              <ScrollStagger
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12"
                style={{ gap: 16, alignItems: "stretch" }}
                stagger={0.07}
              >
                {ourServices.map((service, i) => (
                  <ScrollStaggerItem
                    key={service.slug}
                    variant={staggerVariantAt(i)}
                    className={serviceLayoutClasses[i % serviceLayoutClasses.length]}
                    style={{
                      minHeight: serviceCardHeights[i % serviceCardHeights.length],
                    }}
                  >
                    <ContentCard
                      href={`/our-services/${service.slug}`}
                      title={service.label}
                      imageSrc={getServiceImage(service.slug)}
                      imageAlt={service.label}
                      index={i + 1}
                    />
                  </ScrollStaggerItem>
                ))}
              </ScrollStagger>
            </section>
          </ScrollReveal>

          <ScrollReveal variant="zoom-in" duration={0.74}>
            <section
              style={{
                marginTop: 4,
                padding: "clamp(24px, 4vw, 38px)",
                borderRadius: 28,
                background:
                  "linear-gradient(135deg, rgba(196,165,116,0.14) 0%, rgba(255,255,255,1) 40%, rgba(245,244,241,0.96) 100%)",
                border: "1px solid rgba(196,165,116,0.34)",
              }}
            >
              <span style={labelStyle}>Operations Desk</span>
              <h2 style={sectionTitleStyle}>
                Do not allow yourself to be misled or blindsided by hidden realities.
              </h2>
              <p style={{ ...paragraphStyle, maxWidth: 940 }}>
                Secure the proof you need today. Goan Spy is available for
                confidential personal and corporate briefs across North Goa and
                South Goa, with priority attention for urgent or high-risk
                cases.
              </p>

              <div
                style={{
                  marginTop: 22,
                  paddingTop: 22,
                  borderTop: "1px solid var(--border)",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: 18,
                }}
              >
                <div>
                  <div style={labelStyle}>Address</div>
                  <p style={paragraphStyle}>
                    Office No. A-514, Edcon Centre, Mapusa Bus Stand, Near
                    Aldona, Angod, Mapusa, Goa - 403507.
                  </p>
                </div>
                <div>
                  <div style={labelStyle}>Direct Operations Helpline</div>
                  <p style={paragraphStyle}>+91 73047 69291</p>
                </div>
                <div>
                  <div style={labelStyle}>Official E-mail</div>
                  <p style={paragraphStyle}>info@goanspy.com</p>
                </div>
                <div>
                  <div style={labelStyle}>Operational Hours</div>
                  <p style={paragraphStyle}>Open 24/7 for critical briefs.</p>
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
                  Book a Free Confidential Consultation
                </Link>
                <Link
                  href="https://wa.me/917304769291"
                  className="elemen-btn-outline"
                >
                  Message on WhatsApp
                </Link>
              </div>
            </section>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
