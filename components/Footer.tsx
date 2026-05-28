"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import SocialIcons from "@/components/SocialIcons";
import { mainNavLinks, dropdownItems } from "@/lib/nav";
import {
  BRAND_NAME,
  BRAND_TAGLINE,
  LOGO_SRC,
  SUPPORT_EMAIL,
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  OFFICE_ADDRESS,
} from "@/lib/brand";

const quickLinks = mainNavLinks.map((link) => ({
  label: link.label,
  href: link.href,
}));

const morePages = [
  { label: "Contact Us", href: "/contact-us" },
  { label: "Industry", href: "/industry" },
  { label: "Brands", href: "/brands" },
  { label: "Products", href: "/products" },
  { label: "Categories", href: "/categories" },
  { label: "Clients", href: "/clients" },
];

const footerSections = [
  { title: "Quick Links", links: quickLinks },
  { title: "All Services", links: dropdownItems.Services ?? [] },
  { title: "More Pages", links: morePages },
];

const columnTitleStyle: React.CSSProperties = {
  color: "#fff",
  fontSize: 15,
  fontWeight: 600,
  marginBottom: 20,
};

export default function Footer() {
  return (
    <footer
      style={{
        background:
          "linear-gradient(180deg, rgba(28,37,43,0.99) 0%, rgba(44,58,66,0.98) 100%)",
        color: "#cdd6da",
      }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "70px 20px 40px" }}>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
          style={{ gap: 40, marginBottom: 50 }}
        >
          <div>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 20,
                textDecoration: "none",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={LOGO_SRC}
                alt={BRAND_NAME}
                style={{ height: 48, width: "auto", objectFit: "contain" }}
              />
            </Link>
            <p
              style={{
                fontSize: 14,
                fontWeight: 700,
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
            <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 24, color: "#c2cdd1" }}>
              Mumbai-based specialists in security systems, access control, CCTV,
              and IT infrastructure solutions across India.
            </p>
            <SocialIcons size={40} gap={14} />
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
                        e.currentTarget.style.color = "#8ca4ac";
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
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16 }}>
              <li>
                <a
                  href={`tel:+91${PHONE_PRIMARY}`}
                  className="flex items-start gap-3"
                  style={{
                    color: "#c2cdd1",
                    textDecoration: "none",
                    fontSize: 13,
                    lineHeight: 1.6,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#c2cdd1";
                  }}
                >
                  <Phone size={16} style={{ color: "var(--gold)", flexShrink: 0, marginTop: 2 }} />
                  <span>
                    (+91) {PHONE_PRIMARY} / {PHONE_SECONDARY}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="flex items-start gap-3"
                  style={{
                    color: "#c2cdd1",
                    textDecoration: "none",
                    fontSize: 13,
                    lineHeight: 1.6,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#c2cdd1";
                  }}
                >
                  <Mail size={16} style={{ color: "var(--gold)", flexShrink: 0, marginTop: 2 }} />
                  <span>{SUPPORT_EMAIL}</span>
                </a>
              </li>
              <li className="flex items-start gap-3" style={{ fontSize: 13, lineHeight: 1.7 }}>
                <MapPin size={16} style={{ color: "var(--gold)", flexShrink: 0, marginTop: 2 }} />
                <span>{OFFICE_ADDRESS}</span>
              </li>
            </ul>
            <Link
              href="/contact-us"
              style={{
                display: "inline-block",
                marginTop: 22,
                fontSize: 13,
                fontWeight: 600,
                color: "var(--gold)",
                textDecoration: "none",
              }}
            >
              Get in touch →
            </Link>
          </div>
        </div>

        <div
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 28 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p style={{ fontSize: 13, color: "#8f9da3" }}>
            © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </p>
          <p style={{ fontSize: 13, color: "#8f9da3" }}>
            <a href="https://www.elemenindia.com" style={{ color: "#aeb9bd", textDecoration: "none" }}>
              www.elemenindia.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
