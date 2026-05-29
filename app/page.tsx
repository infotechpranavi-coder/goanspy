import HeroSlider from "@/components/HeroSlider";
import Features from "@/components/Features";
import Categories from "@/components/Categories";
import NewArrivals from "@/components/NewArrivals";
import BannerGrid from "@/components/BannerGrid";
import WhyChooseGoanSpy from "@/components/WhyChooseGoanSpy";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <ScrollReveal variant="fade-up" duration={0.72} amount={0.2}>
        <Features />
      </ScrollReveal>
      <ScrollReveal variant="depth-left" duration={0.82} delay={0.05} amount={0.18}>
        <Categories />
      </ScrollReveal>
      <ScrollReveal variant="depth-right" duration={0.82} delay={0.05} amount={0.18}>
        <WhyChooseGoanSpy />
      </ScrollReveal>
      <ScrollReveal variant="flip-up" duration={0.8} amount={0.16}>
        <NewArrivals />
      </ScrollReveal>
      <ScrollReveal variant="fade-down" duration={0.72} amount={0.18}>
        <BannerGrid />
      </ScrollReveal>
    </main>
  );
}
