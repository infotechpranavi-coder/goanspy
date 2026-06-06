"use client";

import Link from "next/link";
import { ourServices } from "@/lib/site-pages";
import { servicePagePath } from "@/lib/service-routes";
import { useMounted } from "@/lib/use-mounted";

const personalServices = ourServices.slice(0, 5);
const corporateServices = ourServices.slice(5);

type ServicesHubNavProps = {
  activeSlug?: string;
  compact?: boolean;
};

function ServiceLink({
  slug,
  label,
  activeSlug,
}: {
  slug: string;
  label: string;
  activeSlug?: string;
}) {
  const mounted = useMounted();
  const isActive = mounted && activeSlug === slug;

  return (
    <Link
      href={servicePagePath(slug)}
      className="services-hub-link"
      aria-current={isActive ? "page" : undefined}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 12,
        padding: "13px 15px",
        borderRadius: 12,
        border: isActive
          ? "1px solid rgba(47,128,237,0.35)"
          : "1px solid var(--border)",
        background: isActive ? "rgba(47,128,237,0.1)" : "#fff",
        textDecoration: "none",
        transition: "border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease",
      }}
    >
      <span
        aria-hidden
        style={{
          flexShrink: 0,
          width: 9,
          height: 9,
          borderRadius: "50%",
          background: "var(--wine-berry)",
          marginTop: 6,
        }}
      />
      <span
        style={{
          fontSize: 14,
          lineHeight: 1.45,
          fontWeight: isActive ? 700 : 600,
          color: isActive ? "var(--wine-berry)" : "var(--navy)",
        }}
      >
        {label}
      </span>
    </Link>
  );
}

function ServiceColumn({
  title,
  services,
  activeSlug,
}: {
  title: string;
  services: ReadonlyArray<(typeof ourServices)[number]>;
  activeSlug?: string;
}) {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <h3
        style={{
          fontSize: 13,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--text-mid)",
          fontWeight: 700,
        }}
      >
        {title}
      </h3>
      <div style={{ display: "grid", gap: 10 }}>
        {services.map((service) => (
          <ServiceLink
            key={service.slug}
            slug={service.slug}
            label={service.label}
            activeSlug={activeSlug}
          />
        ))}
      </div>
    </div>
  );
}

export default function ServicesHubNav({
  activeSlug,
  compact = false,
}: ServicesHubNavProps) {
  return (
    <article
      style={{
        borderRadius: compact ? 20 : 24,
        background: "#fff",
        border: "1px solid rgba(26,39,68,0.08)",
        boxShadow: compact
          ? "0 12px 28px rgba(26,39,68,0.08)"
          : "0 24px 48px rgba(26,39,68,0.12)",
        padding: compact ? "20px 18px" : "clamp(24px, 4vw, 32px)",
      }}
    >
      {!compact && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            marginBottom: 24,
            paddingBottom: 18,
            borderBottom: "1px solid var(--border)",
          }}
        >
          <span
            style={{
              fontSize: 12,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--text-mid)",
              fontWeight: 700,
            }}
          >
            Services Pages
          </span>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "7px 13px",
              borderRadius: 999,
              background: "rgba(47,128,237,0.12)",
              color: "var(--wine-berry)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            10 Services
          </span>
        </div>
      )}

      <div
        className="services-hub-grid"
        style={{
          display: "grid",
          gridTemplateColumns: compact ? "1fr" : "repeat(2, minmax(0, 1fr))",
          gap: compact ? 20 : "clamp(24px, 4vw, 36px)",
        }}
      >
        <ServiceColumn
          title="Personal Investigation"
          services={personalServices}
          activeSlug={activeSlug}
        />
        <ServiceColumn
          title="Corporate Investigation"
          services={corporateServices}
          activeSlug={activeSlug}
        />
      </div>

      <style>{`
        a.services-hub-link:hover {
          border-color: rgba(47, 128, 237, 0.45);
          box-shadow: 0 6px 18px rgba(26, 39, 68, 0.06);
        }
        @media (max-width: 767px) {
          .services-hub-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </article>
  );
}
