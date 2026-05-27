"use client";

import { clientLogos } from "@/lib/content/clients";

export default function ClientsGrid() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
        gap: 20,
      }}
    >
      {clientLogos.map((client) => (
        <article
          key={client.name}
          style={{
            background: "#fff",
            border: "1px solid rgba(26,39,68,0.08)",
            borderRadius: 24,
            padding: 22,
            boxShadow: "0 14px 34px rgba(26,39,68,0.07)",
            minHeight: 176,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              minHeight: 74,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 18,
              background: "linear-gradient(180deg, #ffffff, #f7f4ef)",
              border: "1px solid rgba(196,165,116,0.22)",
              padding: "18px 16px",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              style={{
                width: "100%",
                maxWidth: 140,
                height: 36,
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>

          <div style={{ marginTop: 18 }}>
            <div
              style={{
                fontSize: 18,
                color: "var(--navy)",
                fontWeight: 700,
                marginBottom: 6,
              }}
            >
              {client.name}
            </div>
            <div
              style={{
                fontSize: 13,
                color: "var(--text-mid)",
                lineHeight: 1.65,
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
