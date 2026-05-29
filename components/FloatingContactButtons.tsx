"use client";

import React, { useMemo } from "react";
import { Phone } from "lucide-react";
import { PHONE_PRIMARY } from "@/lib/brand";

function WhatsAppIcon({ size = 22 }: { size?: number }) {
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
        d="M19.09 17.64c-.23-.11-1.34-.66-1.55-.73-.21-.08-.36-.11-.52.11-.16.23-.6.73-.74.88-.13.16-.27.18-.5.07-.23-.11-.96-.35-1.83-1.13-.68-.6-1.14-1.34-1.27-1.57-.13-.23-.01-.36.1-.47.1-.1.23-.27.34-.41.11-.15.15-.25.22-.41.08-.15.04-.29-.02-.41-.06-.11-.52-1.27-.71-1.73-.19-.46-.38-.39-.52-.4h-.44c-.15 0-.4.06-.61.29-.21.23-.8.78-.8 1.9 0 1.12.83 2.2.94 2.35.11.15 1.62 2.46 3.92 3.45.55.24.98.38 1.32.48.56.18 1.07.15 1.48.09.45-.07 1.34-.55 1.53-1.08.19-.53.19-.99.13-1.08-.06-.09-.21-.14-.44-.25Z"
        fill="white"
      />
      <path
        d="M16 3.3c-6.99 0-12.7 5.62-12.7 12.54 0 2.2.58 4.27 1.59 6.07L3.3 28.7l6.98-1.8a12.7 12.7 0 0 0 5.72 1.4c6.99 0 12.7-5.62 12.7-12.54C28.7 8.92 22.99 3.3 16 3.3Z"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
        opacity="0.95"
      />
    </svg>
  );
}

const commonButtonStyle: React.CSSProperties = {
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 56,
  height: 56,
  borderRadius: 9999,
  textDecoration: "none",
  color: "#ffffff",
  boxShadow: "0 12px 24px rgba(0,0,0,0.25)",
  border: "1px solid rgba(255,255,255,0.22)",
};

function FloatingContactButtons() {
  const phone = PHONE_PRIMARY;

  const { whatsappHref, callHref } = useMemo(() => {
    const whatsappHref = `https://wa.me/${phone}?text=${encodeURIComponent(
      "Hello, I’d like to know more about your services."
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
        gap: 12,
      }}
    >
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        title="WhatsApp"
        style={{
          ...commonButtonStyle,
          background: "linear-gradient(180deg, #22c55e 0%, #16a34a 100%)",
        }}
      >
        <WhatsAppIcon />
      </a>

      <a
        href={callHref}
        aria-label="Call"
        title="Call"
        style={{
          ...commonButtonStyle,
          background: "linear-gradient(180deg, #f59e0b 0%, #d97706 100%)",
        }}
      >
        <Phone size={22} />
      </a>
    </div>
  );
}

export default React.memo(FloatingContactButtons);


