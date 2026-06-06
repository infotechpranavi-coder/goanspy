"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useMounted } from "@/lib/use-mounted";

export type Breadcrumb = { label: string; href?: string };

type PageHeroProps = {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  imageSrc: string;
  imageAlt: string;
  videoSrc?: string;
  actions?: React.ReactNode;
  overlayBackground?: string;
  breadcrumbLowercase?: boolean;
};

export default function PageHero({
  title,
  subtitle,
  breadcrumbs = [{ label: "Home", href: "/" }],
  imageSrc,
  imageAlt,
  videoSrc,
  actions,
  overlayBackground = "linear-gradient(105deg, rgba(26,39,68,0.88) 0%, rgba(91,29,54,0.72) 45%, rgba(26,39,68,0.55) 100%)",
  breadcrumbLowercase = false,
}: PageHeroProps) {
  const mounted = useMounted();
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 28]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.86, 0.74]);
  const animateHero = mounted && !reduce;

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
      {videoSrc ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
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
            y: animateHero ? imageY : 0,
            scale: animateHero ? imageScale : 1.08,
            willChange: animateHero ? "transform" : undefined,
          }}
        />
      )}
      <motion.div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: overlayBackground,
          opacity: animateHero ? overlayOpacity : 1,
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
          initial={animateHero ? { opacity: 0, y: -10 } : false}
          animate={animateHero ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: 13,
            marginBottom: 14,
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            alignItems: "center",
            textTransform: breadcrumbLowercase ? "lowercase" : "none",
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
                    color: breadcrumbLowercase
                      ? "rgba(255,255,255,0.78)"
                      : "var(--gold)",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  {breadcrumbLowercase ? crumb.label.toLowerCase() : crumb.label}
                </Link>
              ) : (
                <span style={{ color: "rgba(255,255,255,0.85)" }}>
                  {breadcrumbLowercase ? crumb.label.toLowerCase() : crumb.label}
                </span>
              )}
            </span>
          ))}
        </motion.nav>

        <motion.h1
          initial={animateHero ? { opacity: 0, y: 20 } : false}
          animate={animateHero ? { opacity: 1, y: 0 } : false}
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
            initial={animateHero ? { opacity: 0, y: 14 } : false}
            animate={animateHero ? { opacity: 1, y: 0 } : false}
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
            initial={animateHero ? { opacity: 0, y: 14 } : false}
            animate={animateHero ? { opacity: 1, y: 0 } : false}
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
