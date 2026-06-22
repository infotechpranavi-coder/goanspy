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

const heroEase = [0.22, 1, 0.36, 1] as const;

const imageStyle = {
  position: "absolute" as const,
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover" as const,
  objectPosition: "center" as const,
};

const overlayStyle = (background: string) => ({
  position: "absolute" as const,
  inset: 0,
  background,
});

const contentWrapStyle = {
  position: "relative" as const,
  zIndex: 1,
  width: "100%",
  maxWidth: 1300,
  margin: "0 auto",
  padding: "48px 20px 56px",
};

const breadcrumbNavStyle = (breadcrumbLowercase: boolean) => ({
  fontSize: 13,
  marginBottom: 14,
  display: "flex",
  flexWrap: "wrap" as const,
  gap: 6,
  alignItems: "center" as const,
  textTransform: breadcrumbLowercase ? ("lowercase" as const) : ("none" as const),
});

const titleStyle = (hasSubtitle: boolean) => ({
  fontFamily: "Montserrat, sans-serif",
  fontSize: "clamp(30px, 5vw, 48px)",
  fontWeight: 700,
  color: "#fff",
  lineHeight: 1.15,
  marginBottom: hasSubtitle ? 12 : 0,
  maxWidth: 800,
});

const subtitleStyle = {
  fontSize: "clamp(15px, 2vw, 18px)",
  color: "rgba(255,255,255,0.88)",
  maxWidth: 620,
  lineHeight: 1.6,
};

const actionsStyle = {
  display: "flex",
  flexWrap: "wrap" as const,
  gap: 14,
  marginTop: 24,
};

function BreadcrumbTrail({
  breadcrumbs,
  breadcrumbLowercase,
}: {
  breadcrumbs: Breadcrumb[];
  breadcrumbLowercase: boolean;
}) {
  return (
    <>
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
    </>
  );
}

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
  const canAnimate = mounted && !reduce;

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
          style={imageStyle}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : canAnimate ? (
        <motion.img
          src={imageSrc}
          alt=""
          aria-hidden
          style={{
            ...imageStyle,
            y: imageY,
            scale: imageScale,
            willChange: "transform",
          }}
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageSrc}
          alt=""
          aria-hidden
          style={{
            ...imageStyle,
            transform: "scale(1.08)",
          }}
        />
      )}

      {canAnimate ? (
        <motion.div
          aria-hidden
          style={{
            ...overlayStyle(overlayBackground),
            opacity: overlayOpacity,
          }}
        />
      ) : (
        <div aria-hidden style={overlayStyle(overlayBackground)} />
      )}

      <div style={contentWrapStyle}>
        {canAnimate ? (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: heroEase }}
            style={breadcrumbNavStyle(breadcrumbLowercase)}
            aria-label="Breadcrumb"
          >
            <BreadcrumbTrail
              breadcrumbs={breadcrumbs}
              breadcrumbLowercase={breadcrumbLowercase}
            />
          </motion.nav>
        ) : (
          <nav
            style={breadcrumbNavStyle(breadcrumbLowercase)}
            aria-label="Breadcrumb"
          >
            <BreadcrumbTrail
              breadcrumbs={breadcrumbs}
              breadcrumbLowercase={breadcrumbLowercase}
            />
          </nav>
        )}

        {canAnimate ? (
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06, ease: heroEase }}
            style={titleStyle(Boolean(subtitle))}
          >
            {title}
          </motion.h1>
        ) : (
          <h1 style={titleStyle(Boolean(subtitle))}>{title}</h1>
        )}

        {subtitle &&
          (canAnimate ? (
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14, ease: heroEase }}
              style={subtitleStyle}
            >
              {subtitle}
            </motion.p>
          ) : (
            <p style={subtitleStyle}>{subtitle}</p>
          ))}

        {actions &&
          (canAnimate ? (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22, ease: heroEase }}
              style={actionsStyle}
            >
              {actions}
            </motion.div>
          ) : (
            <div style={actionsStyle}>{actions}</div>
          ))}
      </div>
    </section>
  );
}
