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
  { value: "2023", label: "Founded in Goa" },
  { value: "2 Districts", label: "North and South coverage" },
  { value: "100%", label: "Confidential case handling" },
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
              style={{
                background:
                  "linear-gradient(180deg, var(--white), var(--bg-cream))",
                border: "1px solid rgba(44,58,66,0.08)",
                borderRadius: 22,
                padding: 22,
                boxShadow: "0 12px 32px rgba(44,58,66,0.06)",
                minHeight: 100,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 16,
                  background:
                    "linear-gradient(135deg, var(--wine-berry) 0%, var(--wine-berry-dark) 100%)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                <reason.icon size={22} />
              </div>
              <h3
                style={{
                  fontSize: 18,
                  color: "var(--navy)",
                  fontWeight: 700,
                  marginBottom: 10,
                }}
              >
                {reason.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.75,
                  color: "var(--text-mid)",
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
              style={{
                borderRadius: 20,
                padding: "20px 22px",
                background:
                  "linear-gradient(135deg, var(--navy) 0%, var(--navy-dark) 100%)",
                color: "#fff",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(26px, 3vw, 34px)",
                  fontWeight: 800,
                  marginBottom: 6,
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.82)" }}>
                {stat.label}
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
      `}</style>
    </section>
  );
}
