"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { clientLogos } from "@/lib/content/clients";

const CARD_WIDTH = 176;
const CARD_GAP = 18;
const AUTO_SHIFT_MS = 2600;

export default function PromoBanner() {
  const loopedLogos = useMemo(
    () => [...clientLogos, ...clientLogos, ...clientLogos],
    []
  );
  const [activeIndex, setActiveIndex] = useState(clientLogos.length);
  const mountedRef = useRef(false);
  const shiftTimerRef = useRef<number | null>(null);
  const resetTimerRef = useRef<number | null>(null);

  useEffect(() => {
    mountedRef.current = true;

    const tick = () => {
      if (!mountedRef.current) {
        return;
      }

      setActiveIndex((current) => current + 1);
      shiftTimerRef.current = window.setTimeout(tick, AUTO_SHIFT_MS);
    };

    shiftTimerRef.current = window.setTimeout(tick, AUTO_SHIFT_MS);

    return () => {
      mountedRef.current = false;

      if (shiftTimerRef.current !== null) {
        window.clearTimeout(shiftTimerRef.current);
      }

      if (resetTimerRef.current !== null) {
        window.clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (activeIndex >= clientLogos.length * 2) {
      resetTimerRef.current = window.setTimeout(() => {
        if (mountedRef.current) {
          setActiveIndex(clientLogos.length);
        }
      }, 700);

      return () => {
        if (resetTimerRef.current !== null) {
          window.clearTimeout(resetTimerRef.current);
        }
      };
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
            style={{
              overflow: "hidden",
              borderRadius: 28,
              padding: "14px 0 18px",
              position: "relative",
            }}
          >
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: "18px calc(50% - 104px)",
                borderRadius: 26,
                border: "1px solid rgba(196,165,116,0.42)",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.04) inset",
                pointerEvents: "none",
                zIndex: 2,
              }}
            />
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
                paddingInline: "calc(50% - 88px)",
                position: "relative",
                zIndex: 1,
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
                      height: 104,
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
                        ? "0 20px 56px rgba(0,0,0,0.32)"
                        : "0 8px 22px rgba(0,0,0,0.10)",
                      transform: isCentered
                        ? "scale(1.18) translateY(-4px)"
                        : isNear
                          ? "scale(0.98)"
                          : "scale(0.9)",
                      opacity: isCentered ? 1 : isNear ? 0.62 : 0.38,
                      filter: isCentered
                        ? "none"
                        : "grayscale(100%) saturate(0.25) brightness(0.72)",
                      zIndex: isCentered ? 3 : isNear ? 2 : 1,
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
                        height: 42,
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
