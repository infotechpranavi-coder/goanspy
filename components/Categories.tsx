"use client";
import Link from "next/link";
import { useState } from "react";
import { homeImages } from "@/lib/content/home-images";
import { ourServices } from "@/lib/site-pages";

const serviceVisuals = [
  homeImages.categories.cctv,
  homeImages.categories.accessControl,
  homeImages.categories.fireSafety,
  homeImages.categories.network,
  homeImages.categories.visitor,
  homeImages.categories.attendance,
  homeImages.categories.network,
  homeImages.categories.accessControl,
  homeImages.categories.cctv,
  homeImages.categories.visitor,
];

const serviceHighlights = [
  "Discreet field verification",
  "Relationship truth mapping",
  "Identity and reputation checks",
  "Sensitive family monitoring",
  "Rapid lead tracing",
  "Workforce integrity checks",
  "Internal risk exposure",
  "Partnership risk review",
  "Brand protection operations",
  "Privacy and sweep response",
];

const serviceCards = ourServices.map((service, index) => ({
  name: service.label,
  href: `/our-services/${service.slug}`,
  img: serviceVisuals[index % serviceVisuals.length],
  highlight: serviceHighlights[index % serviceHighlights.length],
  badge: index < 5 ? "Personal" : "Corporate",
}));

export default function Categories() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="elemen-dots" style={{ padding: "72px 0" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 20px" }}>
        <div className="text-center" style={{ marginBottom: 42 }}>
          <span
            style={{
              fontSize: 12,
              letterSpacing: 3,
              color: "var(--wine-berry)",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Our Services
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              color: "var(--navy)",
              margin: "10px 0 16px",
              fontWeight: 700,
            }}
          >
            Investigation Services We Showcase
          </h2>
          <p
            style={{
              color: "var(--text-mid)",
              fontSize: 15,
              maxWidth: 680,
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            Personal, matrimonial, surveillance, missing-person, due diligence, fraud,
            and privacy-led service divisions presented as direct-access cards.
          </p>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
          style={{ gap: 16 }}
        >
          {serviceCards.map((card, i) => (
            <Link
              href={card.href}
              key={card.name}
              style={{ textDecoration: "none" }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  position: "relative",
                  aspectRatio: "4/5",
                  boxShadow:
                    hovered === i
                      ? "0 18px 42px rgba(26,39,68,0.2)"
                      : "0 6px 18px rgba(26,39,68,0.08)",
                  transition: "all 0.35s ease",
                  transform: hovered === i ? "translateY(-6px)" : "none",
                  border:
                    hovered === i
                      ? "2px solid rgba(196,165,116,0.88)"
                      : "2px solid transparent",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.img}
                  alt={card.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: hovered === i ? "scale(1.08)" : "scale(1)",
                    transition: "transform 0.5s ease",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      hovered === i
                        ? "linear-gradient(to top, rgba(91,29,54,0.94) 0%, rgba(26,39,68,0.55) 56%, rgba(26,39,68,0.1) 100%)"
                        : "linear-gradient(to top, rgba(26,39,68,0.82) 0%, rgba(26,39,68,0.18) 70%, transparent 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 14,
                    left: 14,
                    padding: "7px 10px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {card.badge}
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "18px 14px 16px",
                    color: "#fff",
                  }}
                >
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      lineHeight: 1.22,
                    }}
                  >
                    {card.name}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      opacity: 0.9,
                      marginTop: 6,
                      lineHeight: 1.5,
                    }}
                  >
                    {card.highlight}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
