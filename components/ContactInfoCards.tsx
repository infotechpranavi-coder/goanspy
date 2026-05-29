"use client";

import { Phone, Mail, Clock, Headphones, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  SUPPORT_EMAIL,
  CONTACT_EMAIL,
} from "@/lib/brand";

type InfoCard = {
  icon: LucideIcon;
  title: string;
  lines: string[];
  href?: string;
};

const cards: InfoCard[] = [
  {
    icon: Phone,
    title: "Phone",
    lines: [`(+91) ${PHONE_PRIMARY}`, `(+91) ${PHONE_SECONDARY}`],
    href: `tel:+91${PHONE_PRIMARY}`,
  },
  {
    icon: Mail,
    title: "Support",
    lines: [SUPPORT_EMAIL],
    href: `mailto:${SUPPORT_EMAIL}`,
  },
  {
    icon: Headphones,
    title: "General enquiry",
    lines: [CONTACT_EMAIL],
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: Clock,
    title: "Business hours",
    lines: ["Mon – Sat: 9:00 AM – 6:00 PM", "Sunday: Closed"],
  },
];

export default function ContactInfoCards() {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          marginBottom: 2,
        }}
      >
        <div>
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
              marginBottom: 10,
            }}
          >
            Contact details
          </span>
          <h3
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "var(--navy)",
              margin: 0,
            }}
          >
            Everything in one place
          </h3>
        </div>

        <ArrowRight size={18} style={{ color: "#1e5db0" }} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: 16,
        }}
        className="contact-info-grid"
      >
        {cards.map((card) => {
          const Icon = card.icon;
          const inner = (
            <div
              style={{
                background: "#ffffff",
                borderRadius: 22,
                border: "1px solid rgba(26,39,68,0.08)",
                padding: "22px 20px",
                boxShadow: "0 12px 28px rgba(26,39,68,0.08)",
                height: "100%",
                transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 18px 36px rgba(26,39,68,0.12)";
                e.currentTarget.style.borderColor = "rgba(47,128,237,0.24)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 12px 28px rgba(26,39,68,0.08)";
                e.currentTarget.style.borderColor = "rgba(26,39,68,0.08)";
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: "50%",
                background:
                  "linear-gradient(135deg, var(--wine-berry) 0%, var(--wine-berry-dark) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 14,
                }}
              >
                <Icon size={20} style={{ color: "#fff" }} />
              </div>
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "var(--navy)",
                  marginBottom: 8,
                }}
              >
                {card.title}
              </h3>
              <div style={{ display: "grid", gap: 4 }}>
                {card.lines.map((line, index) => (
                  <p
                    key={`${card.title}-${index}-${line}`}
                    style={{
                      fontSize: 14,
                      color: "var(--text-mid)",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          );

          if (card.href) {
            return (
              <a
                key={card.title}
                href={card.href}
                style={{ textDecoration: "none", display: "block" }}
              >
                {inner}
              </a>
            );
          }
          return <div key={card.title}>{inner}</div>;
        })}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-info-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
