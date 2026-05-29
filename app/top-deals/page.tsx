import PageHero from "@/components/PageHero";
import FeaturedProducts from "@/components/FeaturedProducts";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { pageImages } from "@/lib/content/images";

export const metadata = {
  title: "Top Deals | Elemen India",
  description: "Special offers on CCTV and security packages from Elemen India.",
};

export default function TopDealsPage() {
  return (
    <main>
      <PageHero
        title="Top Deals"
        subtitle="Limited-time offers on CCTV and security installations."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Top Deals" },
        ]}
        imageSrc={pageImages.topDeals}
        imageAlt="CCTV and security special offers"
      />
      <ScrollReveal variant="depth-right" duration={0.8} amount={0.18}>
        <FeaturedProducts />
      </ScrollReveal>
    </main>
  );
}
