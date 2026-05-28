"use client";

import Link from "next/link";
import { MapPin, ExternalLink, Navigation, Phone } from "lucide-react";
import SocialIcons from "@/components/SocialIcons";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { OFFICE_ADDRESS_FULL, PHONE_PRIMARY } from "@/lib/brand";

const MAP_EMBED =
  "https://maps.google.com/maps?q=Rayaansh+Arcade+Thane+Station+West+Thane+400602&t=&z=16&ie=UTF8&iwloc=&output=embed";
const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=Thane+Station+West+Thane+400602+Maharashtra";

export default function ContactAddressSection() {
  return (
    <section
      className="elemen-dots"
      style={{
        padding: "64px 20px 80px",
        borderTop: "1px solid rgba(26,39,68,0.08)",
        background: "linear-gradient(180deg, #fbfcff 0%, #f6f7fb 100%)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <ScrollReveal variant="fade-up">
          <article
            style={{
              background: "#ffffff",
              borderRadius: 28,
              border: "1px solid rgba(26,39,68,0.08)",
              boxShadow: "0 20px 46px rgba(26,39,68,0.10)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "28px 32px 24px",
                borderBottom: "1px solid rgba(26,39,68,0.08)",
                background:
                  "linear-gradient(135deg, rgba(47,128,237,0.08) 0%, rgba(248,249,252,1) 100%)",
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  letterSpacing: 3,
                  color: "#1e5db0",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                Visit us
              </span>
              <h2
                style={{
                  fontSize: "clamp(22px, 3vw, 30px)",
                  fontWeight: 700,
                  color: "var(--navy)",
                  margin: "8px 0 0",
                }}
              >
                Office Address & Location
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row" style={{ minHeight: 380 }}>
              <div
                style={{
                  flex: "0 0 auto",
                  width: "100%",
                  maxWidth: "100%",
                  padding: "30px 32px",
                  borderBottom: "1px solid rgba(26,39,68,0.08)",
                }}
                className="contact-address-side"
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, var(--wine-berry) 0%, var(--wine-berry-dark) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                  }}
                >
                  <MapPin size={22} style={{ color: "#fff" }} />
                </div>

                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "var(--navy)",
                    marginBottom: 10,
                  }}
                >
                  ELEMEN INDIA Office
                </h3>

                <p
                  style={{
                    fontSize: 15,
                    color: "var(--text-mid)",
                    lineHeight: 1.85,
                    marginBottom: 16,
                  }}
                >
                  {OFFICE_ADDRESS_FULL}
                </p>

                <div
                  style={{
                    display: "grid",
                    gap: 10,
                    marginBottom: 18,
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 13,
                      color: "var(--text-mid)",
                    }}
                  >
                    <Navigation size={14} style={{ color: "#1e5db0" }} />
                    Near Thane Station (West) — easy road and rail access.
                  </div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 13,
                      color: "var(--text-mid)",
                    }}
                  >
                    <Phone size={14} style={{ color: "#1e5db0" }} />
                    <strong style={{ color: "var(--navy)" }}>Phone:</strong>{" "}
                    <a
                      href={`tel:+91${PHONE_PRIMARY}`}
                      style={{ color: "#1e5db0", textDecoration: "none" }}
                    >
                      (+91) {PHONE_PRIMARY}
                    </a>
                  </div>
                </div>

                <Link
                  href={MAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#1e5db0",
                    textDecoration: "none",
                    padding: "10px 14px",
                    borderRadius: 999,
                    background: "rgba(47,128,237,0.10)",
                    border: "1px solid rgba(47,128,237,0.18)",
                  }}
                >
                  Open in Google Maps
                  <ExternalLink size={14} />
                </Link>
              </div>

              <div
                style={{
                  flex: 1,
                  minHeight: 320,
                  position: "relative",
                  background: "#f4f6fb",
                }}
              >
                <iframe
                  title="Google Maps — Elemen India office, Thane"
                  src={MAP_EMBED}
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    display: "block",
                    position: "absolute",
                    inset: 0,
                    minHeight: 320,
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            <div
              style={{
                padding: "22px 32px",
                borderTop: "1px solid rgba(26,39,68,0.08)",
                background: "#f8f9fc",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 14,
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "var(--navy)",
                    margin: 0,
                  }}
                >
                  Follow ELEMEN INDIA
                </p>
                <p
                  style={{
                    fontSize: 12,
                    color: "var(--text-light)",
                    margin: "6px 0 0",
                  }}
                >
                  Stay connected for updates and announcements.
                </p>
              </div>
              <SocialIcons size={36} gap={14} />
            </div>
          </article>
        </ScrollReveal>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .contact-address-side {
            width: 360px !important;
            max-width: 360px !important;
            border-right: 1px solid rgba(26,39,68,0.08) !important;
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  );
}
