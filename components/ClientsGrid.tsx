"use client";

import { clientLogos } from "@/lib/content/clients";

export default function ClientsGrid() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
        gap: 18,
      }}
    >
      {clientLogos.map((client) => (
        <article
          key={client.name}
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(245,249,255,0.96) 100%)",
            border: "1px solid rgba(37,99,235,0.10)",
            borderRadius: 28,
            padding: 18,
            boxShadow: "0 14px 32px rgba(15,23,42,0.06)",
            minHeight: 214,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              minHeight: 118,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 22,
              background:
                "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(235,244,255,0.86) 100%)",
              border: "1px solid rgba(37,99,235,0.10)",
              padding: "18px 16px",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              style={{
                width: "100%",
                maxWidth: 170,
                height: 64,
                objectFit: "contain",
                display: "block",
                filter: "saturate(1.02)",
              }}
            />
          </div>

          <div style={{ marginTop: 16 }}>
            <div
              style={{
                fontSize: 17,
                color: "var(--navy)",
                fontWeight: 800,
                marginBottom: 6,
                lineHeight: 1.2,
              }}
            >
              {client.name}
            </div>
            <div
              style={{
                fontSize: 12,
                color: "#4b5563",
                lineHeight: 1.5,
              }}
            >
              {client.category}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
