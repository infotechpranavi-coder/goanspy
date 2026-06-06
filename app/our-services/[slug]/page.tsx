import { redirect } from "next/navigation";
import { getServiceBySlug } from "@/lib/site-pages";
import { servicePagePath } from "@/lib/service-routes";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const { ourServices } = await import("@/lib/site-pages");
  return ourServices.map((s) => ({ slug: s.slug }));
}

export default async function OurServiceSlugRedirectPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  redirect(servicePagePath(slug));
}
