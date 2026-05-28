"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Mail, Phone, Menu, X } from "lucide-react";
import { mainNavLinks, dropdownItems, WINE_BERRY } from "@/lib/nav";
import SocialIcons from "@/components/SocialIcons";

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header
      style={{
        position: "relative",
        zIndex: 10,
        background: "linear-gradient(180deg, #ffffff 0%, #f8f9fc 100%)",
        borderBottom: "1px solid rgba(26,39,68,0.08)",
        boxShadow: "0 12px 28px rgba(26, 39, 68, 0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "14px 18px 10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
            flexShrink: 0,
            padding: "10px 14px",
            borderRadius: 20,
            border: "1px solid rgba(26,39,68,0.08)",
            background: "#ffffff",
            backdropFilter: "blur(16px)",
            boxShadow: "0 10px 24px rgba(26,39,68,0.08)",
          }}
        >
          <span
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: `linear-gradient(135deg, ${WINE_BERRY} 0%, #8cc0ff 100%)`,
              color: "#2f2f2f",
              fontSize: 18,
              fontWeight: 900,
              letterSpacing: "0.08em",
              boxShadow: "0 12px 20px rgba(47,128,237,0.22)",
              flexShrink: 0,
            }}
          >
            GS
          </span>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: 1.05,
              color: "#2f2f2f",
            }}
          >
            <span
              style={{
                fontSize: "clamp(18px, 2.1vw, 24px)",
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Goan Spy
            </span>
            <span
              style={{
                fontSize: 11,
                color: "rgba(47,47,47,0.68)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginTop: 4,
              }}
            >
              Private investigation
            </span>
          </span>
        </Link>

        <div
          className="flex items-center"
          style={{
            flexShrink: 0,
            gap: 10,
            marginLeft: "auto",
          }}
        >
          <div
            className="hidden xl:flex items-center"
            style={{
              gap: 10,
              color: "#2f2f2f",
              flexWrap: "wrap",
              justifyContent: "flex-end",
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(47,47,47,0.66)",
                marginRight: 2,
              }}
            >
              Follow
            </span>
            <SocialIcons size={18} gap={8} />

            <a
              href="tel:+917304769291"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                color: "#2f2f2f",
                textDecoration: "none",
                fontSize: 12,
                fontWeight: 600,
                padding: "9px 13px",
                borderRadius: 999,
                border: "1px solid rgba(26,39,68,0.10)",
                background: "#ffffff",
                backdropFilter: "blur(10px)",
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
                color: "#2f2f2f",
                textDecoration: "none",
                fontSize: 12,
                fontWeight: 600,
                padding: "9px 13px",
                borderRadius: 999,
                border: "1px solid rgba(26,39,68,0.10)",
                background: "#ffffff",
                backdropFilter: "blur(10px)",
              }}
            >
              <Mail size={14} />
              info@goanspy.com
            </a>
          </div>

          <Link
            href="/contact-us"
            className="hidden md:inline-flex"
            style={{
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              textDecoration: "none",
              color: "#2f2f2f",
              background: `linear-gradient(135deg, ${WINE_BERRY} 0%, #8cc0ff 100%)`,
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "12px 18px",
              borderRadius: 999,
              boxShadow: "0 14px 28px rgba(47,128,237,0.18)",
              whiteSpace: "nowrap",
            }}
          >
            Request a call
          </Link>

          <button
            type="button"
            className="lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            style={{
              background: "#ffffff",
              border: "1px solid rgba(26,39,68,0.12)",
              color: "#2f2f2f",
              cursor: "pointer",
              padding: 10,
              borderRadius: 14,
              backdropFilter: "blur(10px)",
            }}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        style={{
          height: 2,
          background:
            "linear-gradient(90deg, rgba(26,39,68,0.06) 0%, rgba(47,128,237,0.95) 48%, rgba(26,39,68,0.06) 100%)",
        }}
      />

      {mobileOpen && (
        <div
          className="lg:hidden"
          style={{
            background: "#ffffff",
            borderTop: "1px solid rgba(26,39,68,0.08)",
            padding: "16px 20px 20px",
            boxShadow: "0 20px 38px rgba(26,39,68,0.10)",
          }}
        >
          <nav aria-label="Mobile navigation">
            <div style={{ display: "grid", gap: 10 }}>
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
                        onClick={() => setMobileServicesOpen((open) => !open)}
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "14px 16px",
                          background: mobileServicesOpen
                            ? "rgba(47,128,237,0.10)"
                            : "#ffffff",
                          border: "1px solid rgba(26,39,68,0.08)",
                          color: "#2f2f2f",
                          fontSize: 14,
                          fontWeight: 600,
                          textAlign: "left",
                          borderRadius: 16,
                          cursor: "pointer",
                          boxShadow: "0 10px 22px rgba(26,39,68,0.08)",
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
                            gap: 8,
                            padding: "12px 0 4px 12px",
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
                                    ? "#c49d00"
                                    : "rgba(47,47,47,0.84)",
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
                      color: active ? "#c49d00" : "#2f2f2f",
                      textDecoration: "none",
                      fontSize: 14,
                      fontWeight: active ? 700 : 600,
                      padding: "14px 16px",
                      borderRadius: 16,
                      background: active ? "rgba(47,128,237,0.10)" : "#ffffff",
                      border: "1px solid rgba(26,39,68,0.08)",
                      boxShadow: "0 10px 22px rgba(26,39,68,0.08)",
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          <div
            style={{
              marginTop: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <SocialIcons size={20} gap={8} />
            <a
              href="/contact-us"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px 14px",
                borderRadius: 999,
                textDecoration: "none",
                background: `linear-gradient(135deg, ${WINE_BERRY} 0%, #8cc0ff 100%)`,
                color: "#2f2f2f",
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Request a call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
