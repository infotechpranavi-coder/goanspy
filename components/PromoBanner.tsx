"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { clientLogos } from "@/lib/content/clients";

const CARD_WIDTH = 168;
const CARD_GAP = 18;
const AUTO_SHIFT_MS = 2600;

export default function PromoBanner() {
  const loopedLogos = useMemo(
    () => [...clientLogos, ...clientLogos, ...clientLogos],
    []
  );
  const [activeIndex, setActiveIndex] = useState(clientLogos.length);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => current + 1);
    }, AUTO_SHIFT_MS);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (activeIndex >= clientLogos.length * 2) {
      const timeoutId = window.setTimeout(() => {
        setActiveIndex(clientLogos.length);
      }, 700);

      return () => window.clearTimeout(timeoutId);
    }
  }, [activeIndex]);

  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, var(--navy) 0%, var(--navy-dark) 46%, var(--wine-berry-dark) 100%)",
        padding: "82px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -80,
          left: -40,
          width: 220,
          height: 220,
          borderRadius: "50%",
          border: "1px solid rgba(196,165,116,0.35)",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: -90,
          right: -50,
          width: 300,
          height: 300,
          borderRadius: 40,
          background: "rgba(91,29,54,0.34)",
        }}
      />

      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "0 20px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: 34,
          }}
        >
          <span
            style={{
              fontSize: 12,
              letterSpacing: 4,
              color: "var(--gold)",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            Our Clients
          </span>
          <h2
            style={{
              fontSize: "clamp(30px, 4.5vw, 48px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.12,
              margin: "14px auto 14px",
              maxWidth: 760,
            }}
          >
            Trusted by leading security, networking, and enterprise brands
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.8,
              fontSize: 15,
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
            A slow moving client slider highlights each partner logo in color at
            the center, while the surrounding cards stay softly desaturated for
            a premium showcase effect.
          </p>
        </div>

        <div
          style={{
            position: "relative",
            maxWidth: 1080,
            margin: "0 auto",
            padding: "18px 0 24px",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(20,30,51,0.95) 0%, rgba(20,30,51,0) 15%, rgba(20,30,51,0) 85%, rgba(20,30,51,0.95) 100%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              overflow: "hidden",
              borderRadius: 28,
              padding: "10px 0",
            }}
          >
            <motion.div
              animate={{
                x: -(activeIndex - 2) * (CARD_WIDTH + CARD_GAP),
              }}
              transition={{
                duration: 2.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: CARD_GAP,
                width: "max-content",
                paddingInline: "calc(50% - 84px)",
              }}
            >
              {loopedLogos.map((client, index) => {
                const distance = Math.abs(index - activeIndex);
                const isCentered = distance === 0;
                const isNear = distance === 1;

                return (
                  <article
                    key={`${client.name}-${index}`}
                    style={{
                      width: CARD_WIDTH,
                      height: 96,
                      borderRadius: 22,
                      border: isCentered
                        ? "1px solid rgba(196,165,116,0.75)"
                        : "1px solid rgba(255,255,255,0.1)",
                      background: isCentered
                        ? "linear-gradient(180deg, rgba(255,255,255,0.96), rgba(250,245,238,0.96))"
                        : "rgba(255,255,255,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "18px 20px",
                      boxShadow: isCentered
                        ? "0 18px 50px rgba(0,0,0,0.28)"
                        : "0 8px 22px rgba(0,0,0,0.12)",
                      transform: isCentered
                        ? "scale(1.12)"
                        : isNear
                          ? "scale(0.98)"
                          : "scale(0.9)",
                      opacity: isCentered ? 1 : isNear ? 0.78 : 0.52,
                      filter: isCentered ? "grayscale(0%)" : "grayscale(100%)",
                      transition:
                        "transform 0.7s ease, opacity 0.7s ease, filter 0.7s ease, background 0.7s ease, border-color 0.7s ease",
                      flexShrink: 0,
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      style={{
                        width: "100%",
                        height: 36,
                        objectFit: "contain",
                        display: "block",
                      }}
                    />
                  </article>
                );
              })}
            </motion.div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 10 }}>
          <Link href="/clients" className="elemen-btn-primary">
            View Our Clients
          </Link>
        </div>
      </div>
    </section>
  );
}
