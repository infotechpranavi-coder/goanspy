import ContentPage from "@/components/ContentPage";
import RichContent from "@/components/RichContent";
import { pageImages } from "@/lib/content/images";
import { clientEngagementBlocks } from "@/lib/content/policies";

export const metadata = {
  title: "Client Engagement Protocol | Goan Spy",
  description:
    "An overview of how Goan Spy structures consultations, case intake, and reporting.",
};

export default function ClientEngagementProtocolPage() {
  return (
    <ContentPage
      title="Client Engagement Protocol"
      subtitle="A clear process from confidential consultation to final reporting."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Client Engagement Protocol" },
      ]}
      heroImage={{
        src: pageImages.contact,
        alt: "Client consultation and engagement process",
      }}
    >
      <RichContent blocks={clientEngagementBlocks} />
    </ContentPage>
  );
}
