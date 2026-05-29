"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

export type Breadcrumb = { label: string; href?: string };

type PageHeroProps = {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  imageSrc: string;
  imageAlt: string;
  actions?: React.ReactNode;
  overlayBackground?: string;
};

export default function PageHero({
  title,
  subtitle,
  breadcrumbs = [{ label: "Home", href: "/" }],
  imageSrc,
  imageAlt,
  actions,
  overlayBackground = "linear-gradient(105deg, rgba(26,39,68,0.88) 0%, rgba(91,29,54,0.72) 45%, rgba(26,39,68,0.55) 100%)",
}: PageHeroProps) {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 28]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.86, 0.74]);

  return (
    <section
      ref={heroRef}
      style={{
        position: "relative",
        minHeight: "clamp(260px, 38vw, 380px)",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
      }}
      aria-label={`${title} - ${imageAlt}`}
    >
      <motion.img
        src={imageSrc}
        alt=""
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          y: reduce ? 0 : imageY,
          scale: reduce ? 1.08 : imageScale,
          willChange: "transform",
        }}
      />
      <motion.div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: overlayBackground,
          opacity: reduce ? 1 : overlayOpacity,
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: 1300,
          margin: "0 auto",
          padding: "48px 20px 56px",
        }}
      >
        <motion.nav
          initial={reduce ? false : { opacity: 0, y: -10 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: 13,
            marginBottom: 14,
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            alignItems: "center",
          }}
          aria-label="Breadcrumb"
        >
          {breadcrumbs.map((crumb, i) => (
            <span
              key={`${crumb.label}-${i}`}
              style={{ display: "flex", alignItems: "center", gap: 6 }}
            >
              {i > 0 && (
                <span style={{ color: "rgba(255,255,255,0.45)" }}>/</span>
              )}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  style={{
                    color: "var(--gold)",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  {crumb.label}
                </Link>
              ) : (
                <span style={{ color: "rgba(255,255,255,0.85)" }}>
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </motion.nav>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(30px, 5vw, 48px)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.15,
            marginBottom: subtitle ? 12 : 0,
            maxWidth: 800,
          }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "rgba(255,255,255,0.88)",
              maxWidth: 620,
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </motion.p>
        )}

        {actions && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              marginTop: 24,
            }}
          >
            {actions}
          </motion.div>
        )}
      </div>
    </section>
  );
}
