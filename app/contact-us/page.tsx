import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import ContactInfoCards from "@/components/ContactInfoCards";
import ContactAddressSection from "@/components/ContactAddressSection";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { pageImages } from "@/lib/content/images";

export const metadata = {
  title: "Contact Us | Goan Spy",
  description:
    "Contact Goan Spy at A 514, Edcon Centre, Mapusa Bus Stand, near Aldona, Angod, Mapusa, Goa 403507.",
};

const quickStats = [
  { label: "Response time", value: "Within 1 business day" },
  { label: "Call us", value: "+91 73047 69291" },
  { label: "Visit", value: "Mapusa, Goa" },
];

export default function ContactUsPage() {
  return (
    <main>
      <PageHero
        title="Contact Us"
        subtitle="Reach our team for quotes, support, and general enquiries."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "CONTACT US" }]}

        imageSrc={pageImages.contact}

        imageAlt="Goan Spy office in Mapusa, Goa"
      />

      <section
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "56px 20px 48px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 16,
            marginBottom: 28,
          }}
          className="contact-quick-grid"
        >
          {quickStats.map((item) => (
            <div
              key={item.label}
              style={{
                background: "#ffffff",
                border: "1px solid rgba(26,39,68,0.08)",
                borderRadius: 22,
                padding: "18px 20px",
                boxShadow: "0 12px 28px rgba(26,39,68,0.08)",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#1e5db0",
                  fontWeight: 700,
                  marginBottom: 8,
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: "var(--navy)",
                  lineHeight: 1.4,
                }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: 28, alignItems: "start" }}
        >
          <ScrollReveal variant="depth-left" duration={0.84} amount={0.18}>
            <ContactForm />
          </ScrollReveal>

          <ScrollReveal variant="depth-right" duration={0.82} amount={0.18}>
            <div>
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(26,39,68,0.08)",
                  borderRadius: 24,
                  padding: "28px 26px",
                  boxShadow: "0 18px 42px rgba(26,39,68,0.10)",
                  marginBottom: 18,
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "6px 10px",
                    borderRadius: 999,
                    background: "rgba(47,128,237,0.12)",
                    color: "#1e5db0",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}
                >
                  Quick contact
                </span>
                <h2
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: "var(--navy)",
                    marginBottom: 10,
                  }}
                >
                  Get in touch
                </h2>
                <p
                  style={{
                    fontSize: 15,
                    color: "var(--text-mid)",
                    marginBottom: 0,
                    lineHeight: 1.6,
                  }}
                >
                  Call, email, or visit our Mapusa office. We serve clients
                  across Goa for discreet investigative work and confidential
                  support.
                </p>
              </div>

              <ContactInfoCards />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ContactAddressSection />

      <style>{`
        @media (max-width: 1024px) {
          .contact-quick-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
