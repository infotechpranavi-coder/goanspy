"use client";

import Link from "next/link";
import {
  BadgeCheck,
  Eye,
  FileText,
  MapPinned,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { homeImages } from "@/lib/content/home-images";

const reasons = [
  {
    icon: MapPinned,
    title: "Goa-only field focus",
    text: "We work across North Goa and South Goa with local route knowledge, neighborhood awareness, and faster ground coordination.",
  },
  {
    icon: ShieldCheck,
    title: "Strict confidentiality",
    text: "Every case is handled with quiet communication, controlled data sharing, and a discretion-first operating process.",
  },
  {
    icon: Eye,
    title: "Evidence-led investigation",
    text: "Reports are built around photos, video, field observations, and documented timelines instead of vague verbal updates.",
  },
  {
    icon: UserCheck,
    title: "Specialized investigators",
    text: "Assignments are handled by trained operatives, including female detectives for socially sensitive and matrimonial cases.",
  },
  {
    icon: FileText,
    title: "Clear reporting structure",
    text: "Clients receive organized findings that are easier to understand, review, and use for next-step decisions.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent engagement",
    text: "We keep expectations practical from day one with clear scope, realistic timelines, and direct communication.",
  },
];

const stats = [
  {
    value: "2013",
    label: "Founded in Goa",
    detail: "Over a decade of local investigative experience built around Goa's field conditions.",
  },
  {
    value: "2 Districts",
    label: "Coverage across North Goa and South Goa",
    detail: "Active operational support across both districts for quick deployment and reach.",
  },
  {
    value: "100%",
    label: "Confidential case handling",
    detail: "Every brief is managed with strict discretion and secure communication.",
  },
];

export default function WhyChooseGoanSpy() {
  return (
      <section
        className="elemen-section-white"
        style={{
          padding: "80px 0",
          background:
            "linear-gradient(180deg, var(--white) 0%, var(--bg-cream) 52%, var(--white) 100%)",
        }}
      >
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 20px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
            alignItems: "center",
            marginBottom: 26,
          }}
        >
          <div>
            <span
              style={{
                fontSize: 12,
                letterSpacing: 3,
                color: "var(--wine-berry)",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Why Choose Us
            </span>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                color: "var(--navy)",
                margin: "12px 0 16px",
                fontWeight: 700,
                maxWidth: 520,
              }}
            >
              Why choose Goan Spy for sensitive investigations
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.85,
                color: "var(--text-mid)",
                maxWidth: 600,
              }}
            >
              Goan Spy Detective Agency operates exclusively in Goa with a
              discretion-first model. We combine local intelligence, disciplined
              surveillance, and structured reporting so clients get clarity,
              proof, and a reliable investigation process.
            </p>
            <div style={{ marginTop: 24 }}>
              <Link href="/about-us" className="elemen-btn-primary">
                Know More About Us
              </Link>
            </div>
          </div>

          <div
            style={{
              position: "relative",
              borderRadius: 28,
              overflow: "hidden",
              minHeight: 320,
              boxShadow: "0 22px 60px rgba(26, 39, 68, 0.14)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={homeImages.solutions.nvr}
              alt="Goan Spy investigation support and surveillance planning"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(26,39,68,0.08), rgba(26,39,68,0.78))",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 22,
                right: 22,
                bottom: 22,
                background: "rgba(255,255,255,0.92)",
                borderRadius: 22,
                padding: 18,
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                style={{
                  fontSize: 18,
                  color: "var(--navy)",
                  fontWeight: 700,
                  marginBottom: 6,
                }}
              >
                Local knowledge matters
              </div>
              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: "var(--text-mid)",
                }}
              >
                From Mapusa to Margao, our field understanding helps us move
                quietly, observe patterns better, and adapt faster on the
                ground.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 18,
            marginBottom: 18,
          }}
          className="why-choose-grid"
        >
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="why-card"
              style={{
                position: "relative",
                overflow: "hidden",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.98) 100%)",
                border: "1px solid rgba(44,58,66,0.09)",
                borderRadius: 24,
                padding: 24,
                boxShadow: "0 14px 38px rgba(44,58,66,0.08)",
                minHeight: 220,
                transition:
                  "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease, background 220ms ease",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at top right, rgba(46,108,230,0.08), transparent 34%)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                  height: 4,
                  background:
                    "linear-gradient(90deg, var(--wine-berry) 0%, rgba(46,108,230,0.9) 55%, rgba(46,108,230,0.35) 100%)",
                }}
              />
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: 18,
                  background:
                    "linear-gradient(135deg, rgba(46,108,230,1) 0%, rgba(24,81,194,1) 100%)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                  boxShadow: "0 10px 22px rgba(46,108,230,0.24)",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <reason.icon size={24} />
              </div>
              <h3
                style={{
                  fontSize: 19,
                  color: "var(--navy)",
                  fontWeight: 700,
                  marginBottom: 10,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {reason.title}
              </h3>
              <p
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.8,
                  color: "var(--text-mid)",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {reason.text}
              </p>
            </article>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 16,
          }}
          className="why-choose-stats"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="why-stat"
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 22,
                padding: "22px 24px",
                background:
                  "linear-gradient(135deg, rgba(26,39,68,1) 0%, rgba(18,28,50,1) 100%)",
                color: "#fff",
                boxShadow: "0 18px 38px rgba(26,39,68,0.16)",
                border: "1px solid rgba(255,255,255,0.06)",
                transition: "transform 220ms ease, box-shadow 220ms ease",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at top right, rgba(255,255,255,0.12), transparent 26%)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  fontSize: "clamp(28px, 3vw, 36px)",
                  fontWeight: 800,
                  marginBottom: 6,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: 13.5,
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.82)",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: 12.5,
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.72)",
                  marginTop: 8,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 1023px) {
          .why-choose-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }

          .why-choose-stats {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 767px) {
          .why-choose-grid,
          .why-choose-stats {
            grid-template-columns: minmax(0, 1fr) !important;
          }
        }

        .why-card:hover {
          transform: translateY(-6px);
          border-color: rgba(46, 108, 230, 0.18) !important;
          box-shadow: 0 22px 50px rgba(44, 58, 66, 0.12) !important;
          background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(246,249,255,1) 100%) !important;
        }

        .why-card:hover::after {
          opacity: 1;
        }

        .why-card::after {
          content: "";
          position: absolute;
          inset: auto 18px 18px auto;
          width: 74px;
          height: 74px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(46,108,230,0.12) 0%, rgba(46,108,230,0) 70%);
          opacity: 0.6;
          transition: opacity 220ms ease;
          pointer-events: none;
        }

        .why-stat:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 46px rgba(26,39,68,0.22) !important;
        }
      `}</style>
    </section>
  );
}
