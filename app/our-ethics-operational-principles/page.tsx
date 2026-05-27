import ContentPage from "@/components/ContentPage";
import RichContent from "@/components/RichContent";
import { pageImages } from "@/lib/content/images";
import { ethicsBlocks } from "@/lib/content/policies";

export const metadata = {
  title: "Our Ethics & Operational Principles | Goan Spy",
  description:
    "The ethical standards and investigative principles that guide Goan Spy engagements.",
};

export default function EthicsPage() {
  return (
    <ContentPage
      title="Our Ethics & Operational Principles"
      subtitle="Confidentiality, proportionality, and evidence-led decision making."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Our Ethics & Operational Principles" },
      ]}
      heroImage={{
        src: pageImages.about,
        alt: "Professional ethics and operational standards",
      }}
    >
      <RichContent blocks={ethicsBlocks} />
    </ContentPage>
  );
}
