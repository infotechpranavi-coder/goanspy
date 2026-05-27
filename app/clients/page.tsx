import ClientsGrid from "@/components/ClientsGrid";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/motion/ScrollReveal";
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
          maxWidth: 1200,
          margin: "0 auto",
          padding: "56px 20px 88px",
        }}
      >
        <ScrollReveal variant="fade-up">
          <div
            style={{
              maxWidth: 760,
              marginBottom: 34,
            }}
          >
            <span
              style={{
                fontSize: 12,
                letterSpacing: 3,
                color: "var(--wine-berry)",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Trusted Network
            </span>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                color: "var(--navy)",
                margin: "12px 0 14px",
                fontWeight: 700,
              }}
            >
              Client and partner brands we showcase with confidence
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.85,
                color: "var(--text-mid)",
              }}
            >
              This page brings together the logos and categories featured in our
              homepage client slider. It gives visitors a clear view of the
              brands associated with surveillance, access control, networking,
              and supporting infrastructure in our ecosystem.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="blur-in" duration={0.8}>
          <ClientsGrid />
        </ScrollReveal>
      </section>
    </main>
  );
}
