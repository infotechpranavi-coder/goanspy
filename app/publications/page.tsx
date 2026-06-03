import Link from "next/link";
import { ExternalLink, Newspaper } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { pageImages } from "@/lib/content/images";

export const metadata = {
  title: "Publications | Goan Spy",
  description: "Recent publications and media coverage of Goan Spy.",
};

const publications = [
  {
    href: "https://eshnnews.com/2026/05/30/goan-spy/",
    title: "Eshn News",
    description: "Read the latest coverage of Goan Spy on Eshn News.",
    bgColor: "rgba(11, 99, 229, 0.04)",
    borderColor: "rgba(11, 99, 229, 0.15)",
  },
  {
    href: "https://primenewsofindia.com/2026/05/30/goan-spy/",
    title: "Prime News of India",
    description: "Feature highlighting the impact and story of Goan Spy.",
    bgColor: "rgba(16, 185, 129, 0.04)", // emerald tint
    borderColor: "rgba(16, 185, 129, 0.15)",
  },
  {
    href: "https://indianprimebulletin.com/2026/05/30/goan-spy/",
    title: "Indian Prime Bulletin",
    description: "Insights and news updates on the Goan Spy journey.",
    bgColor: "rgba(245, 158, 11, 0.04)", // amber tint
    borderColor: "rgba(245, 158, 11, 0.15)",
  },
  {
    href: "https://www.dailydistrictnews.co.in/2026/05/goan-spy.html",
    title: "Daily District News",
    description: "Local coverage and reporting on recent developments.",
    bgColor: "rgba(225, 29, 72, 0.04)", // rose tint
    borderColor: "rgba(225, 29, 72, 0.15)",
  },
  {
    href: "https://www.newswireofindia.co.in/2026/05/goan-spy.html",
    title: "News Wire of India",
    description: "National wire coverage detailing Goan Spy.",
    bgColor: "rgba(11, 99, 229, 0.04)", // blue tint
    borderColor: "rgba(11, 99, 229, 0.15)",
  },
  {
    href: "https://www.99news.co.in/2026/05/goan-spy.html",
    title: "99 News",
    description: "Detailed analysis and news broadcast coverage.",
    bgColor: "rgba(6, 182, 212, 0.04)", // cyan tint
    borderColor: "rgba(6, 182, 212, 0.15)",
  },
  {
    href: "https://www.insidernewstimes.co.in/2026/05/goan-spy.html",
    title: "Insider News Times",
    description: "Exclusive insider perspective and news stories.",
    bgColor: "rgba(11, 99, 229, 0.04)", // blue tint
    borderColor: "rgba(11, 99, 229, 0.15)",
  },
  {
    href: "https://www.newstoday24x7.co.in/2026/05/goan-spy.html",
    title: "News Today 24x7",
    description: "Round-the-clock news reporting and updates.",
    bgColor: "rgba(11, 99, 229, 0.04)",
    borderColor: "rgba(11, 99, 229, 0.15)",
  },
  {
    href: "https://www.theindiaforbesnews.co.in/2026/05/goan-spy.html",
    title: "The India Forbes News",
    description: "Business and lifestyle coverage of Goan Spy.",
    bgColor: "rgba(16, 185, 129, 0.04)",
    borderColor: "rgba(16, 185, 129, 0.15)",
  },
  {
    href: "https://www.todaynewsstandard.co.in/2026/05/goan-spy.html",
    title: "Today News Standard",
    description: "Standardized daily news reporting and features.",
    bgColor: "rgba(245, 158, 11, 0.04)",
    borderColor: "rgba(245, 158, 11, 0.15)",
  },
];

export default function PublicationsPage() {
  return (
    <main>
      <PageHero
        title="Goan Spy in the Media"
        subtitle="Explore the latest news coverage, articles, and features highlighting our investigative work and industry impact."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Publications" }]}
        imageSrc={pageImages.contact}
        imageAlt="Media and Publications"
        videoSrc="/8371026-uhd_4096_2160_25fps.mp4"
        overlayBackground="rgba(0, 0, 0, 0.6)"
      />

      <section
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "50px 20px 80px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "6px 12px",
              borderRadius: 999,
              background: "rgba(11,99,229,0.12)",
              color: "#0b63e5",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            <Newspaper size={14} /> Media Coverage
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              lineHeight: 1.12,
              color: "var(--navy)",
              fontWeight: 800,
              marginBottom: 16,
            }}
          >
            Latest Publications
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "var(--text-mid)",
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Read about our real-world impact and investigative clarity as featured in these esteemed outlets.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {publications.map((pub, idx) => (
            <ScrollReveal
              key={idx}
              variant="fade-up"
              duration={0.6 + (idx % 3) * 0.1}
            >
              <a
                href={pub.href}
                target="_blank"
                rel="noopener noreferrer"
                className="pub-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: pub.bgColor,
                  border: `1px solid ${pub.borderColor}`,
                  borderRadius: 16,
                  padding: 24,
                  textDecoration: "none",
                  boxShadow: "0 10px 24px rgba(26,39,68,0.04)",
                  height: "100%",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: 16,
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "#ffffff",
                      border: `1px solid ${pub.borderColor}`,
                      color: "#0b63e5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
                    }}
                  >
                    <Newspaper size={20} />
                  </div>
                  <div
                    className="pub-link-icon"
                    style={{
                      color: "var(--text-light)",
                      transition: "color 0.2s ease",
                    }}
                  >
                    <ExternalLink size={18} />
                  </div>
                </div>

                <h3
                  className="pub-title"
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "var(--navy)",
                    marginBottom: 8,
                    lineHeight: 1.25,
                    transition: "color 0.2s ease",
                  }}
                >
                  {pub.title}
                </h3>
                
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--text-mid)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {pub.description}
                </p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <style>{`
        .pub-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(11, 99, 229, 0.12) !important;
          border-color: rgba(11, 99, 229, 0.4) !important;
        }
        .pub-card:hover .pub-title {
          color: #0b63e5 !important;
        }
        .pub-card:hover .pub-link-icon {
          color: #0b63e5 !important;
        }
      `}</style>
    </main>
  );
}
