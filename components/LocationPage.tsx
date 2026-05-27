import Link from "next/link";
import LocationMapEmbed from "@/components/LocationMapEmbed";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { locationMapData } from "@/lib/content/location-map-data";
import { pageImages } from "@/lib/content/images";
import { type LocationPageData, packageTiers } from "@/lib/content/location-pages";

const sectionTitleStyle = {
  fontSize: "clamp(1.95rem, 3vw, 2.6rem)",
  lineHeight: 1.1,
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

export default function LocationPage({ location }: { location: LocationPageData }) {
  const mapMeta = locationMapData[location.slug];
  const openMapsHref = mapMeta
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapMeta.mapQuery)}`
    : undefined;

  return (
    <main>
      <PageHero
        title={location.heroTitle}
        subtitle={location.heroSubtitle}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          { label: location.shortLabel },
        ]}
        imageSrc={pageImages.ourServices}
        imageAlt={`${location.name} private detective services and local investigation coverage`}
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
              Message Our Operations Desk
            </Link>
          </>
        }
      />

      <section style={{ maxWidth: 1140, margin: "0 auto", padding: "48px 20px 90px" }}>
        <article style={{ display: "grid", gap: 28 }}>
          <ScrollReveal variant="fade-up" duration={0.62}>
            <section
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 30,
                padding: "clamp(28px, 4vw, 46px)",
                background:
                  "linear-gradient(135deg, rgba(26,39,68,0.98) 0%, rgba(20,30,51,0.96) 56%, rgba(91,29,54,0.95) 100%)",
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
              <div style={{ position: "relative", display: "grid", gap: 20 }}>
                <div style={{ maxWidth: 860 }}>
                  <span
                    style={{
                      ...labelStyle,
                      color: "rgba(255,255,255,0.72)",
                    }}
                  >
                    {location.heroEyebrow}
                  </span>
                  <h2
                    style={{
                      fontSize: "clamp(2rem, 4vw, 3.1rem)",
                      lineHeight: 1.04,
                      marginBottom: 14,
                    }}
                  >
                    {location.heroTitle}
                  </h2>
                  <div style={{ display: "grid", gap: 12 }}>
                    {location.heroIntro.map((paragraph) => (
                      <p
                        key={paragraph}
                        style={{
                          fontSize: 16,
                          lineHeight: 1.9,
                          color: "rgba(255,255,255,0.84)",
                        }}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
                    gap: 14,
                  }}
                >
                  {location.heroHighlights.map((item) => (
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

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 26,
              alignItems: "start",
            }}
          >
            <ScrollReveal variant="fade-right" duration={0.64}>
              <section
                style={{
                  padding: "clamp(20px, 4vw, 34px) 0",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <span style={labelStyle}>Why This Location Matters</span>
                <h2 style={sectionTitleStyle}>{location.whyTitle}</h2>
                <div style={{ display: "grid", gap: 18 }}>
                  {location.whyParagraphs.map((paragraph) => (
                    <p key={paragraph} style={paragraphStyle}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal variant="fade-left" duration={0.64}>
              <aside
                style={{
                  borderRadius: 26,
                  padding: "24px 22px",
                  background:
                    "linear-gradient(180deg, rgba(196,165,116,0.16), rgba(255,255,255,0.98))",
                  border: "1px solid rgba(196,165,116,0.34)",
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--wine-berry)",
                    marginBottom: 14,
                  }}
                >
                  Local Markers
                </div>
                <div style={{ display: "grid", gap: 14 }}>
                  {location.localMarkers.map((item) => (
                    <div
                      key={item}
                      style={{
                        paddingBottom: 10,
                        borderBottom: "1px solid rgba(26,39,68,0.08)",
                        color: "var(--navy)",
                        fontSize: 15,
                        lineHeight: 1.65,
                        fontWeight: 600,
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </aside>
            </ScrollReveal>
          </div>

          {mapMeta ? (
            <ScrollReveal variant="fade-up" duration={0.65}>
              <LocationMapEmbed
                title={`${location.name} Live Location Map`}
                subtitle={`Open the active ${location.name} map view for immediate local orientation around this investigation coverage area.`}
                query={mapMeta.mapQuery}
                locationLabel={mapMeta.mapLabel}
                regionLabel={mapMeta.regionLabel}
                focusPosition={mapMeta.position}
                mapsHref={openMapsHref}
                height={400}
              />
            </ScrollReveal>
          ) : null}

          <ScrollReveal variant="fade-up" duration={0.66}>
            <section
              style={{
                padding: "clamp(20px, 4vw, 34px) 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <span style={labelStyle}>Personal Intelligence</span>
              <h2 style={sectionTitleStyle}>{location.personalTitle}</h2>
              <p style={{ ...paragraphStyle, maxWidth: 930, marginBottom: 22 }}>
                {location.personalIntro}
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: 18,
                }}
              >
                {location.personalCards.map((item) => (
                  <div
                    key={item.title}
                    style={{
                      padding: "20px 18px",
                      borderRadius: 22,
                      background:
                        "linear-gradient(180deg, rgba(245,244,241,0.9), rgba(255,255,255,1))",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: 19,
                        lineHeight: 1.25,
                        color: "var(--navy)",
                        marginBottom: 10,
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

          <ScrollReveal variant="fade-up" duration={0.68}>
            <section
              style={{
                padding: "clamp(20px, 4vw, 34px) 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <span style={labelStyle}>Corporate Intelligence</span>
              <h2 style={sectionTitleStyle}>{location.corporateTitle}</h2>
              <div style={{ display: "grid", gap: 18 }}>
                {location.corporateParagraphs.map((paragraph) => (
                  <p key={paragraph} style={paragraphStyle}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" duration={0.7}>
            <section
              style={{
                padding: "clamp(20px, 4vw, 34px) 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <span style={labelStyle}>Package Structure</span>
              <h2 style={sectionTitleStyle}>
                Bronze, Silver, and Gold investigation pathways
              </h2>
              <p style={{ ...paragraphStyle, maxWidth: 930, marginBottom: 22 }}>
                {location.packageIntro}
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: 18,
                }}
              >
                {packageTiers.map((tier, index) => (
                  <div
                    key={tier.name}
                    style={{
                      padding: "22px 20px",
                      borderRadius: 24,
                      background:
                        index === 1
                          ? "linear-gradient(145deg, rgba(26,39,68,0.98), rgba(91,29,54,0.96))"
                          : "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(245,244,241,0.9))",
                      color: index === 1 ? "var(--white)" : "inherit",
                      border:
                        index === 1
                          ? "1px solid rgba(255,255,255,0.08)"
                          : "1px solid var(--border)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 12,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        fontWeight: 700,
                        marginBottom: 8,
                        color:
                          index === 1 ? "rgba(255,255,255,0.72)" : "var(--wine-berry)",
                      }}
                    >
                      {tier.name}
                    </div>
                    <h3
                      style={{
                        fontSize: 24,
                        lineHeight: 1.15,
                        marginBottom: 14,
                        color: index === 1 ? "var(--white)" : "var(--navy)",
                      }}
                    >
                      {tier.subtitle}
                    </h3>
                    <div style={{ display: "grid", gap: 10 }}>
                      {tier.items.map((item) => (
                        <div
                          key={item}
                          style={{
                            fontSize: 15,
                            lineHeight: 1.75,
                            color:
                              index === 1
                                ? "rgba(255,255,255,0.84)"
                                : "var(--text-mid)",
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal variant="zoom-in" duration={0.74}>
            <section
              style={{
                padding: "clamp(26px, 4vw, 40px)",
                borderRadius: 28,
                background:
                  "linear-gradient(135deg, rgba(196,165,116,0.14) 0%, rgba(255,255,255,1) 40%, rgba(245,244,241,0.96) 100%)",
                border: "1px solid rgba(196,165,116,0.34)",
              }}
            >
              <span style={labelStyle}>{location.ctaEyebrow}</span>
              <h2 style={sectionTitleStyle}>{location.ctaTitle}</h2>
              <p style={{ ...paragraphStyle, maxWidth: 940 }}>{location.ctaSummary}</p>

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
                  <div style={labelStyle}>Address</div>
                  <p style={paragraphStyle}>
                    Office No. A-514, Edcon Centre, Mapusa Bus Stand, Near Aldona,
                    Angod, Mapusa, Goa - 403507.
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
                  <div style={labelStyle}>Availability</div>
                  <p style={paragraphStyle}>Open 24/7 for urgent and critical briefs.</p>
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
                <Link href="/our-services" className="elemen-btn-outline">
                  Explore All Investigation Services
                </Link>
              </div>
            </section>
          </ScrollReveal>
        </article>
      </section>
    </main>
  );
}
