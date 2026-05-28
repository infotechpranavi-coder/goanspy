"use client";
import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { WINE_BERRY, mainNavLinks, dropdownItems } from "@/lib/nav";

export default function MainNav() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const linkIsActive = (link: (typeof mainNavLinks)[number]) => {
    if (link.href === "/") return pathname === "/";

    const matchPrefix =
      "matchPrefix" in link && link.matchPrefix ? link.matchPrefix : link.href;

    return (
      pathname === link.href ||
      pathname.startsWith(`${link.href}/`) ||
      pathname === matchPrefix ||
      pathname.startsWith(`${matchPrefix}/`)
    );
  };

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
    <nav
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f8f9fc 100%)",
        color: "#2f2f2f",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        overflow: "visible",
        borderBottom: "1px solid rgba(26,39,68,0.08)",
        boxShadow: "0 10px 24px rgba(26,39,68,0.08)",
        backdropFilter: "blur(14px)",
      }}
      className="hidden lg:block"
    >
      <div
        style={{
          position: "relative",
          maxWidth: 1480,
          margin: "0 auto",
          width: "100%",
          display: "flex",
          alignItems: "stretch",
          justifyContent: "center",
          minHeight: 58,
          padding: "10px 14px 12px",
          overflow: "visible",
        }}
      >
        <ul
          style={{
            display: "flex",
            alignItems: "stretch",
            listStyle: "none",
            margin: 0,
            flexWrap: "nowrap",
            justifyContent: "space-between",
            overflow: "visible",
            gap: 6,
            width: "100%",
            padding: "8px 10px",
            borderRadius: 999,
            background: "#ffffff",
            border: "1px solid rgba(26,39,68,0.08)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.75)",
            overflowX: "auto",
            scrollbarWidth: "none",
            minWidth: "100%",
          }}
        >
          {mainNavLinks.map((link) => {
            const active = linkIsActive(link);
            const hasDropdown = "hasDropdown" in link && link.hasDropdown;
            const isOpen = activeDropdown === link.label;

            return (
              <li
                key={link.label}
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "stretch",
                  flexShrink: 0,
                }}
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
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "10px 13px",
                    minHeight: 40,
                    fontSize: 12,
                    fontWeight: active ? 800 : 600,
                    letterSpacing: 0.2,
                    color: "#2f2f2f",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    borderRadius: 999,
                    background:
                      active || isOpen
                        ? "linear-gradient(135deg, rgba(47,128,237,0.18) 0%, rgba(220,235,255,0.95) 100%)"
                        : "#ffffff",
                    border: active || isOpen
                      ? "1px solid rgba(47,128,237,0.35)"
                      : "1px solid rgba(26,39,68,0.08)",
                    boxShadow: active || isOpen
                      ? "0 12px 22px rgba(26,39,68,0.08)"
                      : "0 6px 16px rgba(26,39,68,0.05)",
                    transition:
                      "transform 0.2s ease, background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
                    transform: active || isOpen ? "translateY(-1px)" : "none",
                  }}
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
                        transition: "transform 0.2s",
                      }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {activeDropdown === "Services" && servicesItems.length > 0 && (
          <div
            role="menu"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            style={{
              position: "absolute",
              left: "50%",
              top: "calc(100% + 12px)",
              transform: "translateX(-50%)",
              width: "min(94vw, 1220px)",
              zIndex: 1100,
            }}
          >
            <div
              style={{
                background: "#ffffff",
                boxShadow: "0 22px 50px rgba(26,39,68,0.14)",
                border: "1px solid rgba(26,39,68,0.08)",
                borderRadius: 24,
                padding: 16,
                backdropFilter: "blur(16px)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                  padding: "2px 6px 14px",
                  color: "#4a4a4a",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                <span>Services Pages</span>
                <span
                  style={{
                    padding: "5px 9px",
                    borderRadius: 999,
                    background: "rgba(47,128,237,0.12)",
                    color: "#1e5db0",
                    fontSize: 11,
                    letterSpacing: "0.08em",
                  }}
                >
                  {servicesItems.length} links
                </span>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                  gap: 10,
                }}
              >
                {servicesItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    onClick={() => setActiveDropdown(null)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      minHeight: 54,
                      padding: "12px 14px",
                      fontSize: 13,
                      color: pathname === item.href ? WINE_BERRY : "#454545",
                      fontWeight: pathname === item.href ? 700 : 500,
                      textDecoration: "none",
                      border: "1px solid rgba(26,39,68,0.08)",
                      borderRadius: 16,
                      background:
                        pathname === item.href
                          ? "rgba(47,128,237,0.12)"
                          : "#ffffff",
                      transition:
                        "background 0.15s, color 0.15s, transform 0.15s, border-color 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = WINE_BERRY;
                      e.currentTarget.style.background =
                        "rgba(47,128,237,0.12)";
                      e.currentTarget.style.transform = "translateY(-1px)";
                      e.currentTarget.style.borderColor =
                        "rgba(47,128,237,0.28)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color =
                        pathname === item.href ? WINE_BERRY : "#444";
                      e.currentTarget.style.background =
                        pathname === item.href
                          ? "rgba(47,128,237,0.12)"
                          : "#ffffff";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor =
                        "rgba(26,39,68,0.08)";
                    }}
                  >
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: "var(--wine-berry)",
                        opacity: pathname === item.href ? 1 : 0.45,
                        flexShrink: 0,
                      }}
                    />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
