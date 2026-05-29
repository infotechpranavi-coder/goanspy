import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { pageImages } from "@/lib/content/images";
import { northLocationPages, southLocationPages } from "@/lib/content/location-pages";

export const metadata = {
  title: "Goa Locations | Goan Spy",
  description:
    "Browse Goan Spy locations across North Goa and South Goa in a clear card layout.",
};

const sectionTitleStyle = {
  fontSize: "clamp(1.85rem, 3vw, 2.45rem)",
  lineHeight: 1.12,
  color: "var(--navy)",
  marginBottom: 12,
} as const;

const paragraphStyle = {
  fontSize: 16,
  lineHeight: 1.85,
  color: "var(--text-mid)",
} as const;

function LocationGrid({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: ReadonlyArray<{
    name: string;
    shortLabel: string;
    detail: string;
    slug: string;
    region: "North Goa" | "South Goa";
  }>;
}) {
  return (
    <section
      style={{
        padding: "clamp(18px, 3vw, 28px) 0",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <h2 style={sectionTitleStyle}>{title}</h2>
      <p style={{ ...paragraphStyle, maxWidth: 860, marginBottom: 18 }}>{description}</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 16,
        }}
      >
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/locations/${item.slug}`}
            style={{ textDecoration: "none" }}
          >
            <article
              className="location-card"
              style={{
                height: "100%",
                padding: 20,
                borderRadius: 22,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(245,249,255,1) 100%)",
                border: "1px solid rgba(26,39,68,0.08)",
                boxShadow: "0 12px 28px rgba(26,39,68,0.06)",
                transition:
                  "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  marginBottom: 12,
                }}
              >
                <span
                  style={{
                    padding: "6px 10px",
                    borderRadius: 999,
                    background: "rgba(47,128,237,0.10)",
                    border: "1px solid rgba(47,128,237,0.14)",
                    color: "#1e5db0",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                  }}
                >
                  {item.region}
                </span>
                <span
                  style={{
                    padding: "6px 10px",
                    borderRadius: 999,
                    background: "rgba(26,39,68,0.05)",
                    color: "var(--navy)",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                  }}
                >
                  {item.shortLabel}
                </span>
              </div>

              <h3
                style={{
                  fontSize: 20,
                  lineHeight: 1.2,
                  color: "var(--navy)",
                  marginBottom: 10,
                }}
              >
                {item.name}
              </h3>

              <p style={{ ...paragraphStyle, fontSize: 15 }}>{item.detail}</p>

              <div
                style={{
                  marginTop: 14,
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#1e5db0",
                }}
              >
                Open location page
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function LocationsHubPage() {
  const northLocations = northLocationPages.map((location) => ({
    name: location.name,
    shortLabel: location.shortLabel,
    detail: location.detail,
    slug: location.slug,
    region: "North Goa" as const,
  }));

  const southLocations = southLocationPages.map((location) => ({
    name: location.name,
    shortLabel: location.shortLabel,
    detail: location.detail,
    slug: location.slug,
    region: "South Goa" as const,
  }));

  return (
    <main>
      <PageHero
        title="Goa Locations"
        subtitle="Browse North Goa and South Goa location pages in a clean card layout."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Locations" },
        ]}
        imageSrc={pageImages.industry}
        imageAlt="Goan Spy location coverage across North Goa and South Goa"
        actions={
          <>
            <Link href="/locations/mapusa" className="elemen-btn-primary">
              Start with Mapusa
            </Link>
            <Link href="/contact-us" className="elemen-btn-outline">
              Contact the office
            </Link>
          </>
        }
      />

      <section style={{ maxWidth: 1140, margin: "0 auto", padding: "32px 20px 80px" }}>
        <ScrollReveal variant="fade-up" duration={0.6}>
          <section
            style={{
              padding: "clamp(18px, 3vw, 26px)",
              borderRadius: 24,
              background: "linear-gradient(180deg, #fff 0%, #f7f9ff 100%)",
              border: "1px solid rgba(26,39,68,0.08)",
              marginBottom: 18,
            }}
          >
            <p style={{ ...paragraphStyle, marginBottom: 0 }}>
              Start with Mapusa if you are unsure where to go. Then choose the
              district or city that best matches your visit or enquiry.
            </p>
          </section>
        </ScrollReveal>

        <article style={{ display: "grid", gap: 20 }}>
          <ScrollReveal variant="fade-up" duration={0.62}>
            <LocationGrid
              title="North Goa"
              description="Select this section for Mapusa, Panaji, Porvorim, Calangute, Baga, Candolim, Anjuna, Vagator, and Bicholim."
              items={northLocations}
            />
          </ScrollReveal>

          <ScrollReveal variant="fade-up" duration={0.66}>
            <LocationGrid
              title="South Goa"
              description="Select this section for Margao, Vasco da Gama, Colva, Benaulim, Ponda, and Canacona."
              items={southLocations}
            />
          </ScrollReveal>
        </article>
      </section>

      <style>{`
        .location-card:hover {
          transform: translateY(-4px);
          border-color: rgba(46, 108, 230, 0.18) !important;
          box-shadow: 0 18px 42px rgba(26, 39, 68, 0.10) !important;
        }
      `}</style>
    </main>
  );
}
