import PageHero from "@/components/PageHero";
import ServiceRichContent from "@/components/ServiceRichContent";
import ServicesHubNav from "@/components/ServicesHubNav";
import type { Block } from "@/components/RichContent";
import type { Breadcrumb } from "@/components/PageHero";

type ServicePageLayoutProps = {
  title: string;
  subtitle?: string;
  slug: string;
  breadcrumbs: Breadcrumb[];
  heroImage: { src: string; alt: string };
  blocks: Block[];
};

export default function ServicePageLayout({
  title,
  subtitle,
  slug,
  breadcrumbs,
  heroImage,
  blocks,
}: ServicePageLayoutProps) {
  return (
    <main>
      <PageHero
        title={title}
        subtitle={subtitle}
        breadcrumbs={breadcrumbs}
        imageSrc={heroImage.src}
        imageAlt={heroImage.alt}
        breadcrumbLowercase
        overlayBackground="linear-gradient(105deg, rgba(18,24,38,0.92) 0%, rgba(26,39,68,0.84) 50%, rgba(18,24,38,0.88) 100%)"
      />

      <section
        style={{
          background: "var(--bg-section)",
          borderTop: "1px solid rgba(26,39,68,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "48px 20px 80px",
          }}
        >
          <div
            className="service-page-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(280px, 340px) minmax(0, 1fr)",
              gap: 28,
              alignItems: "start",
            }}
          >
            <aside className="service-page-sidebar">
              <ServicesHubNav activeSlug={slug} compact />
            </aside>

            <div style={{ display: "grid", gap: 20 }}>
              <ServiceRichContent blocks={blocks} />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 991px) {
          .service-page-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
