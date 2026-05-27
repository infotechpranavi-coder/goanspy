"use client";
import Link from "next/link";
import { useState } from "react";
import { homeImages } from "@/lib/content/home-images";

const blogCards = [
  {
    title: "Signs of an Unfaithful Partner: Spotting Infidelity During a Goa Vacation",
    sub: "Infidelity, travel patterns, and holiday surveillance insights",
    cta: "Read Blog",
    href: "/blog",
    img: homeImages.banners.corporate,
    eyebrow: "Blogs",
  },
  {
    title: "The Importance of Pre-Matrimonial Background Vetting in Goa's Changing Social Landscape",
    sub: "Marriage verification, family risk checks, and background truth mapping",
    cta: "Read Blog",
    href: "/blog",
    img: homeImages.banners.hospital,
    eyebrow: "Blogs",
  },
  {
    title: "Hidden Cameras in Holiday Rentals: How to Protect Your Privacy in Goa",
    sub: "Privacy sweeps, hidden camera detection, and TSCM awareness",
    cta: "Read Blog",
    href: "/blog",
    img: homeImages.banners.banking,
    eyebrow: "Blogs",
  },
];

export default function BannerGrid() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="elemen-section-white" style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 20px" }}>
        <div className="text-center" style={{ marginBottom: 40 }}>
          <span
            style={{
              fontSize: 12,
              letterSpacing: 3,
              color: "var(--wine-berry)",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Blog Highlights
          </span>
          <h2
            style={{
              fontSize: "clamp(26px, 4vw, 36px)",
              color: "var(--navy)",
              fontWeight: 700,
            }}
          >
            Investigation Blogs Worth Reading
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "260px 260px",
            gap: 20,
          }}
        >
          <Link
            href={blogCards[0].href}
            style={{
              gridRow: "1 / 3",
              gridColumn: "1",
              borderRadius: 12,
              overflow: "hidden",
              position: "relative",
              display: "block",
              textDecoration: "none",
            }}
            onMouseEnter={() => setHovered(0)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={blogCards[0].img}
              alt={blogCards[0].title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: hovered === 0 ? "scale(1.06)" : "scale(1)",
                transition: "transform 0.55s ease",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(26,39,68,0.88) 0%, rgba(26,39,68,0.26) 58%, transparent 100%)",
              }}
            />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "28px" }}>
              <span
                style={{
                  fontSize: 11,
                  color: "var(--gold)",
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                {blogCards[0].eyebrow}
              </span>
              <h3
                style={{
                  fontSize: 27,
                  color: "#fff",
                  margin: "10px 0 8px",
                  fontWeight: 700,
                  lineHeight: 1.18,
                }}
              >
                {blogCards[0].title}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, marginBottom: 18 }}>
                {blogCards[0].sub}
              </p>
              <span
                style={{
                  display: "inline-block",
                  padding: "10px 24px",
                  background: "var(--wine-berry)",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 13,
                  borderRadius: 3,
                }}
              >
                {blogCards[0].cta}
              </span>
            </div>
          </Link>

          {[1, 2].map((idx) => (
            <Link
              key={idx}
              href={blogCards[idx].href}
              style={{
                gridColumn: idx === 1 ? "2 / 4" : "2",
                gridRow: idx === 1 ? "1" : "2",
                borderRadius: 12,
                overflow: "hidden",
                position: "relative",
                display: "block",
                textDecoration: "none",
              }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={blogCards[idx].img}
                alt={blogCards[idx].title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transform: hovered === idx ? "scale(1.06)" : "scale(1)",
                  transition: "transform 0.55s ease",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, rgba(26,39,68,0.82) 0%, transparent 72%)",
                }}
              />
              <div style={{ position: "absolute", top: 28, left: 28, right: 28 }}>
                <span
                  style={{
                    fontSize: 11,
                    color: "var(--gold)",
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}
                >
                  {blogCards[idx].eyebrow}
                </span>
                <h3
                  style={{
                    fontSize: 22,
                    color: "#fff",
                    margin: "10px 0 8px",
                    fontWeight: 700,
                    lineHeight: 1.18,
                    maxWidth: idx === 1 ? 700 : 360,
                  }}
                >
                  {blogCards[idx].title}
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    fontSize: 13,
                    marginBottom: 16,
                    maxWidth: idx === 1 ? 560 : 320,
                  }}
                >
                  {blogCards[idx].sub}
                </p>
                <span
                  style={{
                    display: "inline-block",
                    padding: "9px 20px",
                    background: idx === 1 ? "var(--navy)" : "var(--wine-berry)",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: 12,
                    borderRadius: 3,
                  }}
                >
                  {blogCards[idx].cta}
                </span>
              </div>
            </Link>
          ))}

          <Link
            href="/blog"
            style={{
              gridColumn: "3",
              gridRow: "2",
              borderRadius: 12,
              overflow: "hidden",
              position: "relative",
              background: "linear-gradient(135deg, var(--navy), var(--wine-berry-dark))",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                padding: 28,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  color: "var(--gold)",
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                Blogs
              </span>
              <h3
                style={{
                  fontSize: 22,
                  color: "#fff",
                  margin: "10px 0 8px",
                  fontWeight: 700,
                }}
              >
                View More Blogs
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.78)",
                  fontSize: 13,
                  marginBottom: 18,
                  lineHeight: 1.7,
                }}
              >
                Open the full Goan Spy blog page for investigation insights, privacy
                guides, family verification reads, and corporate risk articles.
              </p>
              <span
                style={{
                  display: "inline-block",
                  padding: "10px 22px",
                  background: "#fff",
                  color: "var(--navy)",
                  fontWeight: 600,
                  fontSize: 13,
                  borderRadius: 3,
                  width: "fit-content",
                }}
              >
                View More Blogs
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
