"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { PHONE_PRIMARY } from "@/lib/brand";
import { homeImages } from "@/lib/content/home-images";

export default function HeroSlider() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const reduceMotion = useReducedMotion();

  const whatsappHref = useMemo(() => {
    const message = encodeURIComponent(
      "Hello, I would like to speak with an investigator on WhatsApp."
    );
    return `https://wa.me/91${PHONE_PRIMARY}?text=${message}`;
  }, []);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <section
        className="elemen-dots"
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "clamp(280px, 34vw, 380px)",
          backgroundImage: `url(${homeImages.hero.cctv})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(28, 37, 43, 0.88) 0%, rgba(44, 58, 66, 0.72) 45%, rgba(125, 156, 183, 0.34) 100%)",
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1300px",
            margin: "0 auto",
            padding: "0 20px",
            minHeight: "clamp(280px, 34vw, 380px)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{ maxWidth: 760, padding: "40px 0" }}
          >
            <h1
              style={{
                color: "#fff",
                fontSize: "clamp(32px, 4.2vw, 54px)",
                lineHeight: 1.08,
                fontWeight: 700,
                marginBottom: 20,
              }}
            >
              The Premier Private Detective Agency in Goa - Absolute
              Discretion, Undisputed Proof.
            </h1>

            <p
              style={{
                color: "rgba(255, 255, 255, 0.88)",
                fontSize: "clamp(16px, 1.8vw, 19px)",
                lineHeight: 1.7,
                maxWidth: 700,
                marginBottom: 32,
              }}
            >
              Leading corporate, matrimonial, and personal investigations
              across North & South Goa. Armed with local intelligence and
              advanced surveillance technology, Goan Spy delivers clear facts
              when you need them most.
            </p>

            <div
              style={{
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
              }}
            >
              <Link href="/contact-us" className="elemen-btn-primary">
                Schedule a Confidential Consultation
              </Link>
              <Link
                href={whatsappHref}
                className="elemen-btn-outline"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#fff",
                  borderColor: "#fff",
                  background: "rgba(255, 255, 255, 0.06)",
                }}
              >
                Speak with an Investigator on WhatsApp
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {showScrollTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: "var(--wine-berry)",
            border: "2px solid var(--gold)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 999,
            boxShadow: "0 4px 16px rgba(122, 32, 50, 0.45)",
          }}
        >
          <ChevronUp size={22} />
        </button>
      )}
    </>
  );
}
