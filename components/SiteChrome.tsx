import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

import FloatingContactButtons from "@/components/FloatingContactButtons";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <FloatingContactButtons />
      {children}
      <Footer />
    </>
  );
}

