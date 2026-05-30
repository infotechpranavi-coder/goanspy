"use client";

import React, { useMemo } from "react";
import { PHONE_PRIMARY } from "@/lib/brand";

function WhatsAppIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M19.31 17.52c-.24-.12-1.42-.69-1.64-.77-.22-.09-.39-.12-.55.12-.16.24-.63.77-.77.94-.14.17-.29.2-.53.07-.24-.12-1.03-.38-1.96-1.15-.72-.6-1.2-1.34-1.34-1.57-.14-.24-.01-.37.1-.49.1-.1.24-.28.36-.43.12-.15.16-.26.24-.42.08-.16.04-.3-.02-.43-.06-.12-.55-1.28-.75-1.75-.2-.48-.4-.41-.55-.42h-.46c-.16 0-.43.06-.66.31-.23.25-.86.83-.86 2.03 0 1.2.89 2.35 1.01 2.52.12.16 1.74 2.64 4.22 3.72.59.26 1.06.4 1.42.51.6.19 1.15.16 1.58.1.48-.07 1.44-.59 1.65-1.15.2-.57.2-1.06.14-1.15-.06-.1-.22-.16-.47-.28Z"
        fill="white"
      />
      <path
        d="M16 3C9.27 3 3.8 8.3 3.8 14.82c0 2.07.55 4.04 1.5 5.78L4.02 29l7.05-1.82c1.65.9 3.54 1.4 4.93 1.4 6.73 0 12.2-5.3 12.2-11.78C28.2 8.3 22.73 3 16 3Z"
        stroke="white"
        strokeWidth="1.4"
        strokeLinejoin="round"
        opacity="0.95"
      />
    </svg>
  );
}

function CallIcon({ size = 30 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      style={{ transform: "rotate(18deg)" }}
    >
      <path
        d="M6.7 4.7c.4-.4 1-.5 1.5-.2l2.1 1.2c.5.3.8.9.7 1.5l-.4 2.1c-.1.5 0 1 .3 1.4.8 1.2 1.8 2.3 3 3 .4.2.9.3 1.3.2l2.1-.4c.6-.1 1.2.2 1.5.7l1.2 2.1c.3.5.2 1.1-.2 1.5l-1.1 1.1c-.7.7-1.7 1-2.6.8-2.9-.7-5.7-2.4-8.1-4.7-2.3-2.3-4-5.2-4.7-8.1-.2-.9.1-1.9.8-2.6L6.7 4.7Z"
        fill="white"
      />
      <path
        d="M8.8 6.8c.8-.8 2.1-.8 2.9 0l1.7 1.7c.8.8.8 2.1 0 2.9l-.7.7c.5.9 1.1 1.7 1.8 2.4.7.7 1.5 1.3 2.4 1.8l.7-.7c.8-.8 2.1-.8 2.9 0l1.7 1.7c.8.8.8 2.1 0 2.9l-.7.7c-.8.8-2.1 1.1-3.2.8-3.2-1-6.2-3.1-8.7-5.6-2.5-2.5-4.6-5.5-5.6-8.7-.3-1.1 0-2.4.8-3.2l.7-.7Z"
        fill="#ffffff"
        opacity="0.96"
      />
    </svg>
  );
}

const buttonBase: React.CSSProperties = {
  width: 64,
  height: 64,
  borderRadius: "50%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  boxShadow: "0 12px 24px rgba(0,0,0,0.22)",
  border: "none",
  flexShrink: 0,
};

function FloatingContactButtons() {
  const phone = PHONE_PRIMARY;

  const { whatsappHref, callHref } = useMemo(() => {
    const whatsappHref = `https://wa.me/${phone}?text=${encodeURIComponent(
      "Hello, I'd like to know more about your services."
    )}`;
    const callHref = `tel:+91${phone}`;
    return { whatsappHref, callHref };
  }, [phone]);

  return (
    <div
      aria-label="Quick contact"
      style={{
        position: "fixed",
        right: 18,
        bottom: 18,
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        title="WhatsApp"
        style={{
          ...buttonBase,
          background:
            "radial-gradient(circle at 30% 28%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 24%, transparent 44%), linear-gradient(180deg, #2bd66e 0%, #1fb44f 100%)",
        }}
      >
        <WhatsAppIcon />
      </a>

      <a
        href={callHref}
        aria-label="Call"
        title="Call"
        style={{
          ...buttonBase,
          background:
            "radial-gradient(circle at 28% 24%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 26%, transparent 46%), linear-gradient(180deg, #ff7a1a 0%, #f36a10 100%)",
        }}
      >
        <CallIcon />
      </a>
    </div>
  );
}

export default React.memo(FloatingContactButtons);
