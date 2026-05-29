import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      {children}
      <Footer />
    </>
  );
}
