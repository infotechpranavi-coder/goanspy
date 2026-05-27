"use client";

import Link from "next/link";
import {
  Eye,
  FileCheck,
  LockKeyhole,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { homeImages } from "@/lib/content/home-images";

const ethicsCards = [
  {
    icon: LockKeyhole,
    title: "Absolute confidentiality",
    text: "Every conversation, field action, and final report is handled through a secure, discretion-first process.",
  },
  {
    icon: Scale,
    title: "Legitimate interest only",
    text: "We reject stalking, harassment, revenge work, and any brief that does not meet a lawful or defensible purpose.",
  },
  {
    icon: Eye,
    title: "Evidence over assumption",
    text: "Our findings are built on observation, chronology, and proof rather than rumor, pressure, or speculation.",
  },
  {
    icon: FileCheck,
    title: "Clear factual reporting",
    text: "Clients receive direct reporting on what was confirmed, disproved, or still unverified without exaggeration.",
  },
];

export default function NewArrivals() {
  return (
    <section className="elemen-dots" style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 20px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.95fr) minmax(0, 1.4fr)",
            gap: 22,
            alignItems: "stretch",
          }}
          className="ethics-showcase-grid"
        >
          <div
            style={{
              borderRadius: 26,
              overflow: "hidden",
              position: "relative",
              minHeight: 490,
              boxShadow: "0 24px 58px rgba(26,39,68,0.12)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={homeImages.newSolutionsBanner}
              alt="Goan Spy ethics and disciplined investigation"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                inset: 0,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(20,30,51,0.18) 0%, rgba(20,30,51,0.65) 52%, rgba(91,29,54,0.94) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                color: "#fff",
              }}
            >
              <div
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: 18,
                  background: "rgba(255,255,255,0.14)",
                  border: "1px solid rgba(255,255,255,0.24)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(10px)",
                }}
              >
                <ShieldCheck size={28} />
              </div>

              <div>
                <span
                  style={{
                    fontSize: 11,
                    letterSpacing: 3,
                    color: "var(--gold)",
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}
                >
                  Our Ethics
                </span>
                <h3
                  style={{
                    fontSize: "clamp(28px, 3.2vw, 38px)",
                    margin: "12px 0 12px",
                    lineHeight: 1.12,
                    fontWeight: 700,
                    maxWidth: 320,
                  }}
                >
                  How we discover truth matters.
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "rgba(255,255,255,0.82)",
                    marginBottom: 22,
                    lineHeight: 1.8,
                    maxWidth: 360,
                  }}
                >
                  Goan Spy is built around lawful investigation, disciplined
                  reporting, and careful handling of every client&apos;s privacy.
                </p>
                <Link href="/our-ethics-operational-principles" className="elemen-btn-primary">
                  Visit Our Ethics
                </Link>
              </div>
            </div>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.72)",
              borderRadius: 28,
              border: "1px solid rgba(26,39,68,0.08)",
              padding: "28px",
              boxShadow: "0 22px 54px rgba(26,39,68,0.08)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div style={{ marginBottom: 24 }}>
              <span
                style={{
                  fontSize: 12,
                  letterSpacing: 3,
                  color: "var(--wine-berry)",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                Operational Principles
              </span>
              <h2
                style={{
                  fontSize: "clamp(26px, 3vw, 38px)",
                  color: "var(--navy)",
                  margin: "10px 0 10px",
                  fontWeight: 700,
                }}
              >
                Ethics that shape every Goan Spy case
              </h2>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.8,
                  color: "var(--text-mid)",
                  maxWidth: 720,
                }}
              >
                We do not use reckless shortcuts. Every investigation is
                measured against confidentiality, lawful purpose, factual
                discipline, and reporting clarity before field activity begins.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: 18,
              }}
              className="ethics-cards-grid"
            >
              {ethicsCards.map((card) => (
                <article
                  key={card.title}
                  style={{
                    background: "linear-gradient(180deg, #ffffff, #f8f5f1)",
                    borderRadius: 22,
                    border: "1px solid rgba(26,39,68,0.08)",
                    padding: 22,
                    minHeight: 200,
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 12px 26px rgba(26,39,68,0.05)",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 16,
                      background: "var(--wine-berry)",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 16,
                    }}
                  >
                    <card.icon size={22} />
                  </div>
                  <h3
                    style={{
                      fontSize: 20,
                      color: "var(--navy)",
                      marginBottom: 10,
                      lineHeight: 1.2,
                      fontWeight: 700,
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--text-mid)",
                      lineHeight: 1.8,
                    }}
                  >
                    {card.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .ethics-showcase-grid {
            grid-template-columns: minmax(0, 1fr) !important;
          }
        }

        @media (max-width: 767px) {
          .ethics-cards-grid {
            grid-template-columns: minmax(0, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
