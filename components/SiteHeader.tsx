"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Mail,
  Phone,
  Menu,
  X,
} from "lucide-react";
import {
  HEADER_BG,
  mainNavLinks,
  dropdownItems,
} from "@/lib/nav";
import SocialIcons from "@/components/SocialIcons";

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header style={{ background: HEADER_BG, position: "relative", zIndex: 10 }}>
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontSize: "clamp(18px, 2.1vw, 24px)",
              fontWeight: 800,
              letterSpacing: "0.07em",
              color: "#fff",
              textTransform: "uppercase",
            }}
          >
            Goan Spy
          </span>
        </Link>

        <div
          className="flex items-center"
          style={{
            flexShrink: 0,
            gap: 10,
          }}
        >
          <div
            className="hidden md:flex items-center"
            style={{
              gap: 10,
              color: "#fff",
            }}
          >
            <SocialIcons size={20} gap={8} />

            <a
              href="tel:+917304769291"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                color: "rgba(255,255,255,0.9)",
                textDecoration: "none",
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              <Phone size={14} />
              +91 73047 69291
            </a>

            <a
              href="mailto:info@goanspy.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                color: "rgba(255,255,255,0.9)",
                textDecoration: "none",
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              <Mail size={14} />
              info@goanspy.com
            </a>
          </div>

          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              padding: 8,
            }}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div style={{ height: 3, background: "var(--gold)" }} />

      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            background: HEADER_BG,
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "12px 20px 18px",
          }}
        >
          <nav aria-label="Mobile navigation">
            <div
              style={{
                display: "grid",
                gap: 6,
              }}
            >
              {mainNavLinks.map((link) => {
                const active =
                  pathname === link.href ||
                  ("matchPrefix" in link &&
                    link.matchPrefix &&
                    pathname.startsWith(link.matchPrefix));
                const hasDropdown = "hasDropdown" in link && link.hasDropdown;

                if (hasDropdown) {
                  return (
                    <div key={link.label}>
                      <button
                        type="button"
                        onClick={() =>
                          setMobileServicesOpen((open) => !open)
                        }
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "12px 0",
                          background: "none",
                          border: "none",
                          color: "#fff",
                          fontSize: 14,
                          fontWeight: 600,
                          textAlign: "left",
                          borderBottom: "1px solid rgba(255,255,255,0.08)",
                          cursor: "pointer",
                        }}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          size={16}
                          style={{
                            transform: mobileServicesOpen
                              ? "rotate(180deg)"
                              : "none",
                            transition: "transform 0.2s ease",
                          }}
                        />
                      </button>

                      {mobileServicesOpen && (
                        <div
                          style={{
                            display: "grid",
                            gap: 2,
                            padding: "8px 0 10px 12px",
                          }}
                        >
                          {dropdownItems[link.label]?.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => {
                                setMobileOpen(false);
                                setMobileServicesOpen(false);
                              }}
                              style={{
                                color:
                                  pathname === item.href
                                    ? "var(--gold)"
                                    : "rgba(255,255,255,0.82)",
                                textDecoration: "none",
                                fontSize: 13,
                                padding: "8px 0",
                              }}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      color: active ? "var(--gold)" : "#fff",
                      textDecoration: "none",
                      fontSize: 14,
                      fontWeight: active ? 700 : 600,
                      padding: "12px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
