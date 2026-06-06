import { notFound } from "next/navigation";
import ServicePageLayout from "@/components/ServicePageLayout";
import { serviceContent, serviceMeta } from "@/lib/content/services";
import { getServiceImage } from "@/lib/content/images";
import { getServiceBySlug, ourServices } from "@/lib/site-pages";
import { SERVICES_HUB_PATH } from "@/lib/service-routes";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return ourServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service | Goan Spy" };
  const meta = serviceMeta[slug];
  return {
    title: `${service.label} | Goan Spy`,
    description:
      meta?.description ??
      `${service.label} investigative support by Goan Spy.`,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const blocks = serviceContent[slug];
  if (!blocks) notFound();

  const meta = serviceMeta[slug];

  return (
    <ServicePageLayout
      title={service.label}
      subtitle={meta?.subtitle}
      slug={slug}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: SERVICES_HUB_PATH },
        { label: service.label },
      ]}
      heroImage={{
        src: getServiceImage(slug),
        alt: `${service.label} investigation service`,
      }}
      blocks={blocks}
    />
  );
}
