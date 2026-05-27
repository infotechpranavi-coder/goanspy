import PageHero from "@/components/PageHero";
import ContentCard from "@/components/ContentCard";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { ScrollStagger, ScrollStaggerItem } from "@/components/motion/ScrollReveal";
import { staggerVariantAt } from "@/lib/motion-presets";
import { pageImages, getServiceImage } from "@/lib/content/images";
import { ourServices } from "@/lib/site-pages";

export const metadata = {
  title: "Services | Goan Spy",
  description:
    "Corporate, matrimonial, and personal investigation services across Goa.",
};

export default function OurServicesPage() {
  return (
    <main>
      <PageHero
        title="Services"
        subtitle="Specialized investigation services for personal, matrimonial, and corporate matters."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        imageSrc={pageImages.ourServices}
        imageAlt="Professional private investigation services"
      />
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 20px 80px" }}>
        <ScrollReveal variant="fade-left">
          <p
            style={{
              fontSize: 15,
              color: "var(--text-mid)",
              lineHeight: 1.9,
              marginBottom: 36,
            }}
          >
            Goan Spy offers discreet investigative support across family,
            relationship, employment, fraud, due diligence, and surveillance-risk
            matters. Each case is approached with confidentiality, local
            intelligence, and evidence-focused reporting.
          </p>
        </ScrollReveal>
        <ScrollStagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 24 }}
          stagger={0.07}
        >
          {ourServices.map((service, i) => (
            <ScrollStaggerItem key={service.slug} variant={staggerVariantAt(i)}>
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
    </main>
  );
}
