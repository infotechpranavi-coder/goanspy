import Link from "next/link";
import { locationPages } from "@/lib/content/location-pages";
import { locationMapData } from "@/lib/content/location-map-data";

const activeLocations = locationPages.map((location, index) => ({
  ...location,
  map: locationMapData[location.slug],
  accent: index % 3 === 0 ? "#6ee7b7" : index % 3 === 1 ? "#f7c873" : "#93c5fd",
}));

const tracedHotspots = [
  {
    slug: "calangute-baga",
    label: "Tourist Belt",
    top: "12%",
    left: "6%",
    width: 112,
    angle: 22,
    length: 72,
  },
  {
    slug: "panaji-panjim",
    label: "Capital Reach",
    top: "24%",
    right: "5%",
    width: 118,
    angle: 164,
    length: 70,
  },
  {
    slug: "margao",
    label: "South Hub",
    top: "60%",
    right: "4%",
    width: 100,
    angle: 188,
    length: 80,
  },
  {
    slug: "canacona-palolem",
    label: "Quiet Coastal",
    bottom: "6%",
    left: "6%",
    width: 114,
    angle: -18,
    length: 70,
  },
] as const;

function HotspotTrace({
  label,
  href,
  accent,
  style,
  angle,
  length,
}: {
  label: string;
  href: string;
  accent: string;
  style: Record<string, string | number>;
  angle: number;
  length: number;
}) {
  return (
    <Link
      href={href}
      style={{
        position: "absolute",
        zIndex: 3,
        textDecoration: "none",
        ...style,
      }}
    >
      <div
        style={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          padding: "8px 12px",
          borderRadius: 999,
          background: "rgba(14,22,38,0.74)",
          border: "1px solid rgba(255,255,255,0.12)",
          color: "#fff",
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          backdropFilter: "blur(10px)",
          boxShadow: "0 12px 26px rgba(0,0,0,0.18)",
        }}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: accent,
            boxShadow: `0 0 0 4px ${accent}22`,
            marginRight: 8,
            flexShrink: 0,
          }}
        />
        {label}

        <span
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: length,
            height: 2,
            borderRadius: 999,
            background: `linear-gradient(90deg, ${accent}, rgba(255,255,255,0.22))`,
            transform: `translate(-6px, -50%) rotate(${angle}deg)`,
            transformOrigin: "left center",
            pointerEvents: "none",
            opacity: 0.9,
          }}
        />
      </div>
    </Link>
  );
}

export default function GoaCoverageMap() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 34,
        padding: "clamp(18px, 2.8vw, 26px)",
        background:
          "linear-gradient(135deg, rgba(17,26,44,1) 0%, rgba(24,37,62,0.99) 48%, rgba(91,29,54,0.95) 100%)",
        color: "var(--white)",
        boxShadow: "0 28px 80px rgba(20,30,51,0.2)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 12% 18%, rgba(196,165,116,0.18), transparent 24%), radial-gradient(circle at 88% 82%, rgba(255,255,255,0.07), transparent 18%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          display: "grid",
          gap: 16,
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "end",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div style={{ maxWidth: 700 }}>
            <div
              style={{
                fontSize: 12,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 700,
                color: "rgba(255,255,255,0.74)",
                marginBottom: 8,
              }}
            >
              Active Goa Coverage
            </div>
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(1.75rem, 3.3vw, 2.6rem)",
                lineHeight: 1.02,
                color: "#fff",
              }}
            >
              Trace a location on the map, tap it, and land on the right page fast.
            </h2>
            <p
              style={{
                margin: "10px 0 0",
                fontSize: 14,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.82)",
                maxWidth: 680,
              }}
            >
              The map now does the selling. It highlights the strongest zones first, keeps
              all live points visible, and cuts down extra scrolling.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            {[
              `${activeLocations.length} live pages`,
              "Map-first browsing",
              "Low-scroll layout",
            ].map((item) => (
              <span
                key={item}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "9px 14px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.88)",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(320px, 1.08fr) minmax(300px, 0.92fr)",
            gap: 18,
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              borderRadius: 28,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.14)",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.04))",
              backdropFilter: "blur(10px)",
              display: "grid",
              gridTemplateRows: "auto 1fr",
              minHeight: 430,
            }}
          >
            <div
              style={{
                padding: "16px 18px",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 10,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 12,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.72)",
                    marginBottom: 4,
                  }}
                >
                  Live Goa Map
                </div>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  Explore hotspots directly from the coverage map
                </div>
              </div>

              <a
                href="https://www.google.com/maps/place/Goa"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "9px 14px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  textDecoration: "none",
                  color: "#fff",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Open Full Map
              </a>
            </div>

            <div
              style={{
                position: "relative",
                minHeight: 340,
                background:
                  "linear-gradient(180deg, rgba(111,167,205,0.1), rgba(67,95,132,0.05)), linear-gradient(135deg, rgba(9,18,31,0.06), rgba(9,18,31,0.01))",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at 15% 22%, rgba(255,255,255,0.1), transparent 18%), radial-gradient(circle at 88% 18%, rgba(255,255,255,0.06), transparent 12%), linear-gradient(180deg, rgba(8,15,26,0.03), rgba(8,15,26,0))",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: "9% 19% 14% 22%",
                  borderRadius: "42% 28% 38% 30% / 16% 32% 48% 40%",
                  background:
                    "linear-gradient(180deg, rgba(205,230,184,0.42), rgba(138,173,120,0.38))",
                  border: "1px solid rgba(255,255,255,0.12)",
                  transform: "rotate(12deg)",
                  boxShadow:
                    "inset 0 0 0 1px rgba(26,39,68,0.04), 0 12px 28px rgba(20,30,51,0.08)",
                }}
              />

              {tracedHotspots.map((item) => {
                const location = activeLocations.find((entry) => entry.slug === item.slug);

                if (!location) return null;

                return (
                  <HotspotTrace
                    key={item.slug}
                    label={item.label}
                    href={`/locations/${item.slug}`}
                    accent={location.accent}
                    style={item}
                    angle={item.angle}
                    length={item.length}
                  />
                );
              })}

              {activeLocations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  title={location.name}
                  style={{
                    position: "absolute",
                    top: location.map.position.top,
                    left: location.map.position.left,
                    transform: "translate(-50%, -50%)",
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    background: "#fff",
                    boxShadow: `0 0 0 6px ${location.accent}33, 0 12px 24px rgba(0,0,0,0.18)`,
                    textDecoration: "none",
                    zIndex: 2,
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      inset: 4,
                      borderRadius: "50%",
                      background: "var(--wine-berry)",
                    }}
                  />
                </Link>
              ))}

              <iframe
                title="Goa live active coverage map"
                src="https://www.google.com/maps?q=Goa,India&z=10&output=embed"
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                  opacity: 0.72,
                  mixBlendMode: "normal",
                  background: "transparent",
                }}
              />
            </div>

            <div
              style={{
                padding: "14px",
                borderTop: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(7,12,22,0.52)",
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
              }}
            >
              {activeLocations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    padding: "8px 11px",
                    borderRadius: 999,
                    textDecoration: "none",
                    background: "rgba(255,255,255,0.08)",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.08)",
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: location.accent,
                      flexShrink: 0,
                    }}
                  />
                  {location.shortLabel}
                </Link>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gap: 12,
              alignContent: "start",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 10,
              }}
            >
              {[
                ["North Goa", "7"],
                ["South Goa", "5"],
                ["Open 24/7", "Live"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    padding: "12px 12px 10px",
                    borderRadius: 18,
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.6)",
                      marginBottom: 6,
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontSize: 20,
                      fontWeight: 800,
                      color: "#fff",
                    }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 10,
              }}
            >
              {activeLocations.map((location, index) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    minHeight: 90,
                    padding: "12px 12px 10px",
                    borderRadius: 18,
                    textDecoration: "none",
                    color: "#fff",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.13), rgba(255,255,255,0.06))",
                    border: "1px solid rgba(255,255,255,0.12)",
                    boxShadow: "0 12px 28px rgba(7,11,20,0.16)",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: -18,
                      right: -14,
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: `${location.accent}22`,
                      pointerEvents: "none",
                    }}
                  />

                  <div
                    style={{
                      position: "relative",
                      display: "grid",
                      gap: 8,
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 8,
                      }}
                    >
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          fontSize: 10,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          fontWeight: 700,
                          color: "rgba(255,255,255,0.72)",
                        }}
                      >
                        <span
                          style={{
                            width: 7,
                            height: 7,
                            borderRadius: "50%",
                            background: location.accent,
                            boxShadow: `0 0 0 4px ${location.accent}22`,
                            flexShrink: 0,
                          }}
                        />
                        Live
                      </span>

                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 800,
                          color: "rgba(255,255,255,0.45)",
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div>
                      <h3
                        style={{
                          margin: 0,
                          fontSize: 15,
                          lineHeight: 1.15,
                          color: "#fff",
                        }}
                      >
                        {location.shortLabel}
                      </h3>
                      <p
                        style={{
                          margin: "5px 0 0",
                          fontSize: 12,
                          lineHeight: 1.45,
                          color: "rgba(255,255,255,0.68)",
                        }}
                      >
                        {location.map.regionLabel}
                      </p>
                    </div>

                    <div
                      style={{
                        marginTop: "auto",
                        fontSize: 12,
                        fontWeight: 700,
                        color: location.accent,
                      }}
                    >
                      {"Visit page >"}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
