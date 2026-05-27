import { notFound } from "next/navigation";
import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import { locationPages, locationPagesBySlug } from "@/lib/content/location-pages";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return locationPages.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = locationPagesBySlug[slug];

  if (!location) {
    return {
      title: "Location | Goan Spy",
    };
  }

  return {
    title: location.title,
    description: location.description,
  };
}

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params;
  const location = locationPagesBySlug[slug];

  if (!location) {
    notFound();
  }

  return <LocationPage location={location} />;
}
