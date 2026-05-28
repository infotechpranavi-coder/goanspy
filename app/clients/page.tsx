import ClientsGrid from "@/components/ClientsGrid";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { clientLogos } from "@/lib/content/clients";
import { pageImages } from "@/lib/content/images";

export const metadata = {
  title: "Clients | Goan Spy",
  description:
    "Explore the client and partner brands trusted by Goan Spy across security, surveillance, access control, and IT infrastructure.",
};

export default function ClientsPage() {
  return (
    <main>
      <PageHero
        title="Our Clients"
        subtitle="A trusted network of technology, surveillance, fire safety, and enterprise infrastructure brands."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Clients" }]}
        imageSrc={pageImages.brands}
        imageAlt="Client and technology brand showcase"
      />

      <section
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "46px 20px 88px",
        }}
      >
        <ScrollReveal variant="fade-up" duration={0.72} amount={0.18}>
          <div
            style={{
              maxWidth: 1180,
              margin: "0 auto 26px",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(244,249,255,0.96) 100%)",
              border: "1px solid rgba(37,99,235,0.10)",
              borderRadius: 28,
              padding: "22px 22px 20px",
              boxShadow: "0 18px 36px rgba(15,23,42,0.06)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ maxWidth: 760 }}>
                <span
                  style={{
                    fontSize: 12,
                    letterSpacing: 3,
                    color: "#1e5db0",
                    textTransform: "uppercase",
                    fontWeight: 800,
                  }}
                >
                  Featured logo wall
                </span>
                <h2
                  style={{
                    fontSize: "clamp(28px, 4vw, 40px)",
                    color: "var(--navy)",
                    margin: "12px 0 12px",
                    fontWeight: 800,
                  }}
                >
                  A clean card wall of the logos you shared
                </h2>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.85,
                    color: "var(--text-mid)",
                    marginBottom: 0,
                  }}
                >
                  We&apos;ve turned the client set into proper image cards so every
                  brand stays visible, aligned, and easy to scan across the
                  page.
                </p>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(120px, 1fr))",
                  gap: 10,
                  minWidth: 260,
                }}
              >
                <div
                  style={{
                    borderRadius: 18,
                    border: "1px solid rgba(37,99,235,0.12)",
                    background: "#ffffff",
                    padding: "12px 14px",
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      letterSpacing: 2,
                      textTransform: "uppercase",
                      color: "#1e5db0",
                      fontWeight: 800,
                    }}
                  >
                    Logos
                  </div>
                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: 800,
                      color: "var(--navy)",
                      marginTop: 6,
                    }}
                  >
                    {clientLogos.length}
                  </div>
                </div>
                <div
                  style={{
                    borderRadius: 18,
                    border: "1px solid rgba(37,99,235,0.12)",
                    background: "#ffffff",
                    padding: "12px 14px",
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      letterSpacing: 2,
                      textTransform: "uppercase",
                      color: "#1e5db0",
                      fontWeight: 800,
                    }}
                  >
                    Layout
                  </div>
                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: 800,
                      color: "var(--navy)",
                      marginTop: 6,
                    }}
                  >
                    Cards
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="lift-soft" duration={0.84} amount={0.16}>
          <ClientsGrid />
        </ScrollReveal>
      </section>
    </main>
  );
}

