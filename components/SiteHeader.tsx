"use client";

import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  dropdownItems,
  mainNavLinks,
  WINE_BERRY,
} from "@/lib/nav";
import { BRAND_NAME, LOGO_SRC } from "@/lib/brand";
import { useMounted } from "@/lib/use-mounted";

export default function SiteHeader() {
  const mounted = useMounted();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const linkIsActive = useCallback(
    (link: (typeof mainNavLinks)[number]) => {
      if (!mounted) return false;

      if (link.href === "/") return pathname === "/";

      const matchPrefix =
        "matchPrefix" in link && link.matchPrefix ? link.matchPrefix : link.href;

      return (
        pathname === link.href ||
        pathname.startsWith(`${link.href}/`) ||
        pathname === matchPrefix ||
        pathname.startsWith(`${matchPrefix}/`)
      );
    },
    [mounted, pathname]
  );

  const pathMatches = useCallback(
    (href: string) => mounted && pathname === href,
    [mounted, pathname]
  );

  const openDropdown = useCallback((label: string) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setActiveDropdown(label);
  }, []);

  const scheduleClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const servicesItems = dropdownItems.Services ?? [];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "rgba(255,255,255,0.96)",
        borderBottom: "1px solid rgba(26,39,68,0.08)",
        boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
        backdropFilter: "blur(16px)",
      }}
    >
      <div
        style={{
          maxWidth: 1600,
          margin: "0 auto",
          padding: "4px 14px 4px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            minHeight: 36,
          }}
        >
          <Link
            href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
                flexShrink: 0,
                minWidth: 240,
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px 10px",
                  borderRadius: 18,
                  background: "#ffffff",
                  border: "1px solid rgba(26,39,68,0.08)",
                  boxShadow: "0 8px 20px rgba(15,23,42,0.08)",
                  flexShrink: 0,
                }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={LOGO_SRC}
                alt={BRAND_NAME}
                style={{
                  display: "block",
                  width: "auto",
                  height: 40,
                  objectFit: "contain",
                }}
              />
            </span>
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: 1.02,
                color: "#111827",
                minWidth: 0,
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                Goan Spy
              </span>
              <span
                style={{
                  fontSize: 9,
                  color: "rgba(17,24,39,0.62)",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  marginTop: 3,
                  whiteSpace: "nowrap",
                }}
              >
                Private Investigation
              </span>
            </span>
          </Link>

          <nav
            aria-label="Primary"
            className="site-desktop-nav"
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                minWidth: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
                flexWrap: "nowrap",
                whiteSpace: "nowrap",
                overflowX: "visible",
                scrollbarWidth: "none",
                maxWidth: "100%",
              }}
            >
              {mainNavLinks.map((link) => {
                const active = linkIsActive(link);
                const hasDropdown = "hasDropdown" in link && link.hasDropdown;
                const isOpen = activeDropdown === link.label;

                return (
                  <div
                    key={link.label}
                    style={{ position: "relative", flexShrink: 0 }}
                    onMouseEnter={() => hasDropdown && openDropdown(link.label)}
                    onMouseLeave={hasDropdown ? scheduleClose : undefined}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        if (!hasDropdown) return;
                        if (activeDropdown !== link.label) {
                          e.preventDefault();
                          openDropdown(link.label);
                        }
                      }}
                      className="site-nav-link"
                      data-active={
                        mounted && (active || isOpen) ? "true" : undefined
                      }
                      aria-expanded={hasDropdown ? isOpen : undefined}
                      aria-haspopup={hasDropdown ? "true" : undefined}
                    >
                      {link.label}
                      {hasDropdown && (
                        <ChevronDown
                          size={12}
                          style={{
                            opacity: 0.8,
                            transform: isOpen ? "rotate(180deg)" : "none",
                            transition: "transform 0.2s ease",
                          }}
                        />
                      )}
                    </Link>
                  </div>
                );
              })}
            </div>
          </nav>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 8,
              flexShrink: 0,
              minWidth: 0,
            }}
          >
                        <Link
              href="/contact-us"
              className="site-call-cta"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                textDecoration: "none",
                color: "#fff",
                background: "linear-gradient(135deg, #2f80ed 0%, #1e5db0 100%)",
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "9px 12px",
                borderRadius: 999,
                boxShadow: "0 10px 20px rgba(47,128,237,0.18)",
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.2)",
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "#fff",
                    display: "block",
                  }}
                />
              </span>
              Contact Us
            </Link>

            <button
              type="button"
              className="site-mobile-toggle"
              onClick={() => setMobileOpen((open) => !open)}
              style={{
                display: "none",
                background: "#fff",
                border: "1px solid rgba(26,39,68,0.12)",
                color: "#111827",
                cursor: "pointer",
                padding: 10,
                borderRadius: 14,
                boxShadow: "0 10px 22px rgba(26,39,68,0.08)",
              }}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {activeDropdown === "Services" && servicesItems.length > 0 && (
        <div
          role="menu"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          style={{
            position: "absolute",
            left: "50%",
            top: "100%",
            transform: "translateX(-50%)",
            width: "min(90vw, 480px)",
            zIndex: 1100,
            marginTop: 6,
          }}
        >
          <div
            style={{
              background: "#ffffff",
              boxShadow: "0 18px 42px rgba(26,39,68,0.12)",
              border: "1px solid rgba(26,39,68,0.08)",
              borderRadius: 12,
              padding: 6,
              backdropFilter: "blur(16px)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                padding: "2px 4px 4px",
                color: "#4a4a4a",
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              <span>Services Pages</span>
              <span
                style={{
                  padding: "4px 8px",
                  borderRadius: 999,
                  background: "rgba(47,128,237,0.12)",
                  color: "#1e5db0",
                  fontSize: 10,
                  letterSpacing: "0.08em",
                }}
              >
                {servicesItems.reduce((acc, curr) => acc + (curr.items?.length || 0), 0)} services
              </span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: 6,
                paddingTop: 2,
              }}
            >
              {servicesItems.map((group) => (
                <div key={group.label}>
                  <h4
                    style={{
                      fontSize: 10,
                      fontWeight: 800,
                      color: "var(--navy)",
                      marginBottom: 6,
                      paddingLeft: 4,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    {group.label}
                  </h4>
                  <div style={{ display: "grid", gap: 8 }}>
                    {group.items?.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        role="menuitem"
                        onClick={() => setActiveDropdown(null)}
                        className="site-dropdown-link"
                        data-active={
                          mounted && pathMatches(item.href) ? "true" : undefined
                        }
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = WINE_BERRY;
                          e.currentTarget.style.background = "rgba(47,128,237,0.12)";
                          e.currentTarget.style.transform = "translateY(-1px)";
                          e.currentTarget.style.borderColor = "rgba(47,128,237,0.28)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "";
                          e.currentTarget.style.background = "";
                          e.currentTarget.style.transform = "";
                          e.currentTarget.style.borderColor = "";
                        }}
                      >
                        <span className="site-dropdown-dot" aria-hidden />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {mobileOpen && (
        <div
          className="site-mobile-panel"
          style={{
            display: "none",
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
                  mounted &&
                  (pathname === link.href ||
                    ("matchPrefix" in link &&
                      link.matchPrefix &&
                      pathname.startsWith(link.matchPrefix)));
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
                          color: "#111827",
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
                            gap: 16,
                            padding: "12px 0 4px 12px",
                          }}
                        >
                          {dropdownItems[link.label]?.map((group) => (
                            <div key={group.label}>
                              <h4 style={{ fontSize: 12, fontWeight: 700, color: "#111827", marginBottom: 8, textTransform: "uppercase" }}>{group.label}</h4>
                              <div style={{ display: "grid", gap: 8, paddingLeft: 8 }}>
                                {group.items?.map((item) => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => {
                                      setMobileOpen(false);
                                      setMobileServicesOpen(false);
                                    }}
                                    style={{
                                      color: "rgba(17,24,39,0.84)",
                                      textDecoration: "none",
                                      fontSize: 13,
                                      padding: "8px 0",
                                      fontWeight:
                                        mounted && pathMatches(item.href) ? 700 : 500,
                                    }}
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
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
                    className="site-mobile-link"
                    data-active={mounted && active ? "true" : undefined}
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
            <Link
              href="/contact-us"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px 14px",
                borderRadius: 999,
                textDecoration: "none",
                background: "linear-gradient(135deg, #2f80ed 0%, #1e5db0 100%)",
                color: "#ffffff",
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Request a call
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1023px) {
          .site-desktop-nav,
          .site-call-cta {
            display: none !important;
          }

          .site-mobile-toggle,
          .site-mobile-panel {
            display: flex !important;
          }

          header > div > div {
            min-height: 56px;
          }
        }

        @media (max-width: 768px) {
          header > div {
            padding-left: 12px;
            padding-right: 12px;
          }
        }
      `}</style>
    </header>
  );
}
