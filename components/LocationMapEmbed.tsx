type LocationMapEmbedProps = {
  title: string;
  subtitle: string;
  query: string;
  locationLabel?: string;
  regionLabel?: string;
  focusPosition?: {
    top: string;
    left: string;
  };
  mapsHref?: string;
  height?: number;
};

export default function LocationMapEmbed({
  title,
  subtitle,
  query,
  locationLabel,
  regionLabel,
  focusPosition,
  mapsHref,
  height = 360,
}: LocationMapEmbedProps) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=13&output=embed`;

  return (
    <section
      style={{
        borderRadius: 28,
        overflow: "hidden",
        border: "1px solid rgba(47,128,237,0.22)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,1), rgba(240,246,255,0.96))",
        boxShadow: "0 24px 60px rgba(20,30,51,0.08)",
        position: "relative",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -60,
          right: -20,
          width: 180,
          height: 180,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(47,128,237,0.18), transparent 68%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          padding: "20px 20px 18px",
          borderBottom: "1px solid rgba(26,39,68,0.08)",
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            style={{
              fontSize: 12,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: "#1e5db0",
              marginBottom: 6,
            }}
          >
            Live Location Map
          </div>
          <h3
            style={{
              margin: 0,
              fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
              lineHeight: 1.2,
              color: "var(--navy)",
            }}
          >
            {title}
          </h3>
          <p
            style={{
              margin: "8px 0 0",
              fontSize: 14,
              lineHeight: 1.7,
              color: "var(--text-mid)",
              maxWidth: 720,
            }}
            >
              {subtitle}
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginTop: 14,
              }}
            >
              {locationLabel ? (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "8px 12px",
                    borderRadius: 999,
              background: "rgba(47,128,237,0.10)",
              color: "#1e5db0",
              fontSize: 12,
              fontWeight: 700,
              border: "1px solid rgba(47,128,237,0.14)",
            }}
          >
                  {locationLabel}
                </span>
              ) : null}

              {regionLabel ? (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "8px 12px",
                    borderRadius: 999,
                    background: "rgba(26,39,68,0.06)",
              color: "var(--navy)",
              fontSize: 12,
              fontWeight: 700,
              border: "1px solid rgba(26,39,68,0.12)",
            }}
          >
                  {regionLabel}
                </span>
              ) : null}

              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "8px 12px",
                  borderRadius: 999,
              background: "rgba(47,128,237,0.12)",
              color: "var(--navy)",
              fontSize: 12,
              fontWeight: 700,
              border: "1px solid rgba(47,128,237,0.22)",
            }}
          >
                Live orientation view
              </span>
            </div>
          </div>

        {mapsHref ? (
          <a
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 16px",
              borderRadius: 999,
              border: "1px solid rgba(47,128,237,0.18)",
              color: "#1e5db0",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 13,
              background: "rgba(47,128,237,0.06)",
            }}
            >
              Open in Google Maps
          </a>
        ) : null}
      </div>

      <div
        style={{
          position: "relative",
          padding: 14,
          background:
            "linear-gradient(180deg, rgba(26,39,68,0.04), rgba(47,128,237,0.08))",
        }}
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 22,
            border: "1px solid rgba(26,39,68,0.08)",
            boxShadow: "0 14px 36px rgba(20,30,51,0.08)",
          }}
        >
          {focusPosition ? (
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 1,
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: focusPosition.top,
                  left: focusPosition.left,
                  transform: "translate(-50%, -50%)",
                  width: 150,
                  height: 150,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(47,128,237,0.32) 0%, rgba(47,128,237,0.16) 36%, rgba(47,128,237,0.08) 54%, rgba(47,128,237,0) 72%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: focusPosition.top,
                  left: focusPosition.left,
                  transform: "translate(-50%, -50%)",
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.96)",
                  boxShadow:
                    "0 0 0 10px rgba(47,128,237,0.18), 0 14px 26px rgba(20,30,51,0.22)",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    inset: 6,
                    borderRadius: "50%",
                    background: "var(--wine-berry)",
                  }}
                />
              </div>
            </div>
          ) : null}

          <div
            aria-hidden
            style={{
              position: "absolute",
              top: 14,
              right: 14,
              zIndex: 2,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 12px",
              borderRadius: 999,
              background: "rgba(14,22,38,0.8)",
              color: "#fff",
              backdropFilter: "blur(8px)",
              boxShadow: "0 10px 24px rgba(0,0,0,0.18)",
            }}
          >
            <span
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: "var(--wine-berry)",
                boxShadow: "0 0 0 4px rgba(47,128,237,0.22)",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {locationLabel ?? query}
            </span>
          </div>

          <iframe
            title={title}
            src={src}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{
              display: "block",
              width: "100%",
              height,
              border: 0,
              background: "#f6f4ef",
            }}
          />
        </div>
      </div>
    </section>
  );
}
