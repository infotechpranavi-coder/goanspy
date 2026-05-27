import ContentPage from "@/components/ContentPage";
import RichContent from "@/components/RichContent";
import { pageImages } from "@/lib/content/images";
import { publicAwarenessBlocks } from "@/lib/content/policies";

export const metadata = {
  title: "Public Awareness & Security Guide | Goan Spy",
  description:
    "Practical awareness guidance for reducing personal, family, and business risk.",
};

export default function PublicAwarenessGuidePage() {
  return (
    <ContentPage
      title="Public Awareness & Security Guide"
      subtitle="Practical guidance for spotting risk early and acting with clarity."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Public Awareness & Security Guide" },
      ]}
      heroImage={{
        src: pageImages.shop,
        alt: "Public awareness and security guidance",
      }}
    >
      <RichContent blocks={publicAwarenessBlocks} />
    </ContentPage>
  );
}
