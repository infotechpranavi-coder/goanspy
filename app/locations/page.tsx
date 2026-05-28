import Link from "next/link";
import PageHero from "@/components/PageHero";
import GoaCoverageMap from "@/components/GoaCoverageMap";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { pageImages } from "@/lib/content/images";
import {
  locationPages,
  northLocationPages,
  southLocationPages,
} from "@/lib/content/location-pages";

export const metadata = {
  title: "Investigation Locations Across Goa | Goan Spy",
  description:
    "Explore Goan Spy's Goa-wide location coverage across Mapusa, Panaji, Calangute, Candolim, Porvorim, Anjuna, Vagator, Bicholim, Margao, Vasco da Gama, Colva, Benaulim, Ponda, and Canacona.",
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

const northLocations = northLocationPages.map((location, index) => ({
  id: String(index + 1).padStart(2, "0"),
  name: location.name,
  shortLabel: location.shortLabel,
  detail: location.detail,
  href: `/locations/${location.slug}`,
}));

const southLocations = southLocationPages.map((location, index) => ({
  id: String(index + northLocations.length + 1).padStart(2, "0"),
  name: location.name,
  shortLabel: location.shortLabel,
  detail: location.detail,
  href: `/locations/${location.slug}`,
}));

const allLocations = locationPages.map((location) => ({
  slug: location.slug,
  name: location.name,
  shortLabel: location.shortLabel,
  href: `/locations/${location.slug}`,
  region: location.region,
}));

function LocationBlock({
  title,
  eyebrow,
  description,
  items,
}: {
  title: string;
  eyebrow: string;
  description: string;
  items: ReadonlyArray<{
    id: string;
    name: string;
    shortLabel: string;
    detail: string;
    href?: string;
  }>;
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
      <p style={{ ...paragraphStyle, maxWidth: 920, marginBottom: 18 }}>
        {description}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 14,
        }}
      >
        {items.map((item) => {
          const content = (
            <div
              style={{
                padding: "16px 15px",
                height: "100%",
                borderRadius: 20,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(240,246,255,1))",
                border: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  color: "var(--wine-berry)",
                  marginBottom: 10,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                {item.id} | {item.shortLabel}
              </div>
              <h3
                style={{
                  fontSize: 19,
                  lineHeight: 1.2,
                  color: "var(--navy)",
                  marginBottom: 10,
                }}
              >
                {item.name}
              </h3>
              <p style={{ ...paragraphStyle, fontSize: 15 }}>{item.detail}</p>
              {item.href && (
                <span
                  style={{
                    display: "inline-block",
                    marginTop: 12,
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#1e5db0",
                  }}
                >
                  Open location page →
                </span>
              )}
            </div>
          );

          if (item.href) {
            return (
              <Link key={item.id} href={item.href} style={{ textDecoration: "none" }}>
                {content}
              </Link>
            );
          }

          return <div key={item.id}>{content}</div>;
        })}
      </div>
    </section>
  );
}

export default function LocationsHubPage() {
  return (
    <main>
      <PageHero
        title="Goan Spy Location Matrix"
        subtitle="A Goa-wide location framework built for unique, local, search-focused pages covering personal surveillance, matrimonial verification, due diligence, industrial intelligence, and privacy-sensitive investigations."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Locations" },
        ]}
        imageSrc={pageImages.industry}
        imageAlt="Goan Spy location coverage across North Goa and South Goa"
        actions={
          <>
            <Link href="/locations/mapusa" className="elemen-btn-primary">
              Open Mapusa Main Office Page
            </Link>
            <Link href="/contact-us" className="elemen-btn-outline">
              Request Local Investigation Support
            </Link>
          </>
        }
      />

      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "40px 20px 78px" }}>
        <article style={{ display: "grid", gap: 20 }}>
          <ScrollReveal variant="fade-up" duration={0.58}>
            <section
              style={{
                display: "grid",
                gap: 16,
                background: "rgba(255,255,255,0.82)",
                border: "1px solid var(--border)",
                borderRadius: 26,
                padding: "20px 20px 18px",
                boxShadow: "0 12px 30px rgba(26,39,68,0.06)",
              }}
            >
              <span style={labelStyle}>Quick Location Access</span>
              <h2 style={sectionTitleStyle}>
                All locations are visible at once with direct one-click access.
              </h2>
              <p style={{ ...paragraphStyle, maxWidth: 920, marginBottom: 2 }}>
                No dropdown. Every live location is available here on the main page as a
                small button that opens its respective city page immediately.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                  gap: 10,
                }}
                className="location-button-grid"
              >
                {allLocations.map((location) => (
                  <Link
                    key={location.slug}
                    href={location.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      padding: "10px 12px",
                      borderRadius: 999,
                      textDecoration: "none",
                      background: "#fff",
                      color: "var(--navy)",
                      border: "1px solid rgba(26,39,68,0.12)",
                      boxShadow: "0 8px 18px rgba(20,30,51,0.05)",
                      fontSize: 13,
                      fontWeight: 700,
                      minWidth: 0,
                    }}
                  >
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background:
                          location.region === "North Goa" ? "var(--wine-berry)" : "#1e5db0",
                        flexShrink: 0,
                      }}
                    />
                    {location.shortLabel}
                  </Link>
                ))}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" duration={0.6}>
            <GoaCoverageMap />
          </ScrollReveal>

          <ScrollReveal variant="fade-up" duration={0.62}>
            <section
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 28,
                padding: "clamp(24px, 4vw, 40px)",
                background:
                  "linear-gradient(135deg, rgba(26,39,68,0.98) 0%, rgba(20,30,51,0.96) 58%, rgba(47,128,237,0.95) 100%)",
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
                <div style={{ maxWidth: 840 }}>
                  <span
                    style={{
                      ...labelStyle,
                      color: "rgba(255,255,255,0.72)",
                    }}
                  >
                    Goa-Wide Rollout
                  </span>
                  <h2
                    style={{
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      lineHeight: 1.06,
                      marginBottom: 14,
                    }}
                  >
                    Every Goa location now sits on the page at once, with a map-first
                    browsing flow and direct access to each city.
                  </h2>
                  <p
                    style={{
                      fontSize: 16,
                      lineHeight: 1.9,
                      color: "rgba(255,255,255,0.84)",
                    }}
                  >
                    Each location page keeps its own landmarks, service angle, and
                    local intent, but the browsing experience is now much faster:
                    users can see all active locations immediately, tap the small
                    city buttons, and land on the relevant page with its own map.
                  </p>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                    gap: 14,
                  }}
                >
                  {[
                    "All locations visible together on the main hub",
                    "Small direct-access buttons instead of a dropdown",
                    "Map on the main page plus local map on every city page",
                    "North Goa and South Goa pages remain uniquely written",
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
            <LocationBlock
              eyebrow="North Goa"
              title="North Goa Locations"
              description="These pages target tourism-linked surveillance, residential background verification, nightlife observation, administrative checks, and industrial risk work in North Goa."
              items={northLocations}
            />
          </ScrollReveal>

          <ScrollReveal variant="fade-up" duration={0.7}>
            <LocationBlock
              eyebrow="South Goa"
              title="South Goa Locations"
              description="These pages focus more heavily on court-linked family matters, port and logistics risk, industrial fraud, southern tourist-belt surveillance, and privacy-sensitive resort work."
              items={southLocations}
            />
          </ScrollReveal>

          <ScrollReveal variant="zoom-in" duration={0.74}>
            <section
              style={{
                padding: "clamp(22px, 4vw, 34px)",
                borderRadius: 28,
                background:
                  "linear-gradient(135deg, rgba(47,128,237,0.10) 0%, rgba(255,255,255,1) 40%, rgba(240,246,255,0.96) 100%)",
                border: "1px solid rgba(47,128,237,0.20)",
              }}
            >
              <span style={labelStyle}>Build Sequence</span>
              <h2 style={sectionTitleStyle}>
                The first live benchmark is Mapusa, followed by the rest of Goa.
              </h2>
              <p style={{ ...paragraphStyle, maxWidth: 940 }}>
                We have already established the first benchmark page for
                <strong> Mapusa</strong> as the main office anchor. That page
                becomes the structural baseline for the other 11 locations,
                while each upcoming page will still be fully rewritten for its
                own geography, demographic, landmark profile, and service
                priority.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 14,
                  marginTop: 24,
                }}
              >
                <Link href="/locations/mapusa" className="elemen-btn-primary">
                  Open Mapusa Location Page
                </Link>
                <Link href="/contact-us" className="elemen-btn-outline">
                  Plan the Next Location Page
                </Link>
              </div>
            </section>
          </ScrollReveal>
        </article>
      </section>
    </main>
  );
}
