"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import {
  BRAND_NAME,
  BRAND_TAGLINE,
  LOGO_SRC,
  SUPPORT_EMAIL,
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  OFFICE_ADDRESS,
} from "@/lib/brand";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/our-services" },
  { label: "Locations", href: "/locations" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact Us", href: "/contact-us" },
];

const infoLinks = [
  { label: "Client Protocol", href: "/client-engagement-protocol" },
  { label: "Our Ethics", href: "/our-ethics-operational-principles" },
  { label: "Public Awareness", href: "/public-awareness-security-guide" },
  { label: "Blog", href: "/blog" },
  { label: "Govt Regulation", href: "/government-regulation-legal-compliance" },
];

const footerSections = [
  { title: "Quick Links", links: quickLinks },
  { title: "More Pages", links: infoLinks },
];

const columnTitleStyle: React.CSSProperties = {
  color: "#fff",
  fontSize: 15,
  fontWeight: 700,
  marginBottom: 20,
  letterSpacing: 0.2,
};

export default function Footer() {
  return (
    <footer
      style={{
        background:
          "linear-gradient(180deg, rgba(20,30,51,0.99) 0%, rgba(28,37,43,0.99) 100%)",
        color: "#cdd6da",
      }}
    >
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "72px 20px 38px" }}>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: 36, marginBottom: 48 }}
        >
          <div style={{ maxWidth: 300 }}>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 18,
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#ffffff",
                  borderRadius: 18,
                  padding: "10px 12px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 14px 26px rgba(0,0,0,0.18)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={LOGO_SRC}
                  alt={BRAND_NAME}
                  style={{ height: 84, width: "auto", objectFit: "contain" }}
                />
              </span>
            </Link>

            <p
              style={{
                fontSize: 14,
                fontWeight: 800,
                color: "#fff",
                letterSpacing: 1,
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              {BRAND_NAME}
            </p>
            <p style={{ fontSize: 13, color: "#b1bcc0", marginBottom: 16 }}>
              {BRAND_TAGLINE}
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 22, color: "#c2cdd1" }}>
              Goa-focused private investigators providing discreet surveillance,
              background verification, and evidence-led reporting with strict
              confidentiality.
            </p>

            <div style={{ display: "grid", gap: 10 }}>
              <a
                href={`tel:+91${PHONE_PRIMARY}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  color: "#dbe1e6",
                  textDecoration: "none",
                  fontSize: 13,
                  lineHeight: 1.6,
                }}
              >
                <Phone size={16} style={{ color: "var(--gold)", flexShrink: 0 }} />
                <span>(+91) {PHONE_PRIMARY} / {PHONE_SECONDARY}</span>
              </a>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  color: "#dbe1e6",
                  textDecoration: "none",
                  fontSize: 13,
                  lineHeight: 1.6,
                }}
              >
                <Mail size={16} style={{ color: "var(--gold)", flexShrink: 0 }} />
                <span>{SUPPORT_EMAIL}</span>
              </a>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "flex-start",
                  gap: 10,
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: "#dbe1e6",
                }}
              >
                <MapPin size={16} style={{ color: "var(--gold)", flexShrink: 0, marginTop: 2 }} />
                <span>{OFFICE_ADDRESS}</span>
              </div>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 style={columnTitleStyle}>{section.title}</h4>
              <ul style={{ listStyle: "none" }}>
                {section.links.map((link) => (
                  <li key={link.href} style={{ marginBottom: 10 }}>
                    <Link
                      href={link.href}
                      style={{
                        color: "#b1bcc0",
                        textDecoration: "none",
                        fontSize: 13,
                        transition: "all 0.2s",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#ffffff";
                        e.currentTarget.style.paddingLeft = "6px";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#b1bcc0";
                        e.currentTarget.style.paddingLeft = "0";
                      }}
                    >
                      <ArrowRight size={10} style={{ flexShrink: 0 }} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 style={columnTitleStyle}>Contact Us</h4>
            <p style={{ fontSize: 13, lineHeight: 1.8, color: "#c2cdd1", marginBottom: 16 }}>
              Need a confidential consultation or urgent case support? Reach out
              directly and we will route you to the right investigator.
            </p>
            <Link
              href="/contact-us"
              style={{
                display: "inline-block",
                fontSize: 13,
                fontWeight: 700,
                color: "var(--gold)",
                textDecoration: "none",
              }}
            >
              Get in touch →
            </Link>
          </div>
        </div>

        <div
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 26 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p style={{ fontSize: 13, color: "#8f9da3" }}>
            © 2013 {BRAND_NAME}. All rights reserved.
          </p>
          <p style={{ fontSize: 13, color: "#8f9da3" }}>
            <Link href="/" style={{ color: "#aeb9bd", textDecoration: "none" }}>
              goanspy.com
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
