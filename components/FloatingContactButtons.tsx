"use client";

import React, { useMemo } from "react";
import { PHONE_PRIMARY } from "@/lib/brand";

function WhatsAppIcon({ size = 26 }: { size?: number }) {
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
        strokeWidth="1.6"
        strokeLinejoin="round"
        opacity="0.95"
      />
    </svg>
  );
}

function CallIcon({ size = 26 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M6.62 10.79c1.44 2.84 3.96 5.35 6.8 6.8l2.2-2.2c.23-.23.57-.3.86-.19 1 .4 2 .6 3.05 .6.55 0 1 .45 1 .99v3.5c0 .55-.45 1-1 1-9.45 0-17.13-7.68-17.13-17.13 0-.55.45-1 1-1h3.5c.55 0 .99.45 .99 1 0 1.05 .2 2.05 .6 3.05 .11 .29 .04 .63-.19 .86l-2.2 2.2z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}


function FloatingContactButtons() {
  const phone = PHONE_PRIMARY;

  const { whatsappHref, callHref } = useMemo(() => {
    const whatsappHref = `https://wa.me/${phone}?text=${encodeURIComponent(
      "Hello Goan Spy, I would like to inquire about your private investigation services."
    )}`;
    const callHref = `tel:+91${phone}`;
    return { whatsappHref, callHref };
  }, [phone]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fab-pulse-green {
          0%   { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.55), 0 8px 24px rgba(37,211,102,0.30); }
          70%  { box-shadow: 0 0 0 14px rgba(37, 211, 102, 0), 0 8px 24px rgba(37,211,102,0.30); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0), 0 8px 24px rgba(37,211,102,0.30); }
        }
        @keyframes fab-pulse-orange {
          0%   { box-shadow: 0 0 0 0 rgba(249,115,22, 0.55), 0 8px 24px rgba(249,115,22,0.30); }
          70%  { box-shadow: 0 0 0 14px rgba(249,115,22, 0), 0 8px 24px rgba(249,115,22,0.30); }
          100% { box-shadow: 0 0 0 0 rgba(249,115,22, 0), 0 8px 24px rgba(249,115,22,0.30); }
        }

        .fab-wa {
          animation: fab-pulse-green 2.4s ease-in-out infinite;
          transition: transform 0.25s cubic-bezier(0.175,0.885,0.32,1.275),
                      box-shadow 0.25s ease,
                      filter 0.25s ease;
        }
        .fab-wa:hover {
          transform: scale(1.12) translateY(-3px) !important;
          filter: brightness(1.08);
          box-shadow: 0 0 0 0 rgba(37,211,102,0), 0 14px 30px rgba(37,211,102,0.50) !important;
          animation: none;
        }
        .fab-wa:active { transform: scale(0.94) !important; }

        .fab-call {
          animation: fab-pulse-orange 2.4s ease-in-out infinite;
          animation-delay: 1.2s;
          transition: transform 0.25s cubic-bezier(0.175,0.885,0.32,1.275),
                      box-shadow 0.25s ease,
                      filter 0.25s ease;
        }
        .fab-call:hover {
          transform: scale(1.12) translateY(-3px) !important;
          filter: brightness(1.08);
          box-shadow: 0 0 0 0 rgba(249,115,22,0), 0 14px 30px rgba(249,115,22,0.50) !important;
          animation: none;
        }
        .fab-call:active { transform: scale(0.94) !important; }

        .fab-label {
          position: absolute;
          right: 70px;
          top: 50%;
          transform: translateY(-50%) translateX(6px);
          opacity: 0;
          pointer-events: none;
          white-space: nowrap;
          padding: 5px 11px;
          border-radius: 20px;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.01em;
          color: #f8fafc;
          background: rgba(10, 14, 26, 0.88);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.10);
          box-shadow: 0 4px 14px rgba(0,0,0,0.18);
          transition: opacity 0.2s ease, transform 0.2s ease;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        .fab-wa:hover .fab-label,
        .fab-call:hover .fab-label {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }
      ` }} />

      <div
        aria-label="Quick contact"
        style={{
          position: "fixed",
          right: 20,
          bottom: 20,
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 14,
        }}
      >
        {/* WhatsApp Button */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          title="WhatsApp"
          className="fab-wa"
          style={{
            position: "relative",
            width: 58,
            height: 58,
            borderRadius: "50%",
            background: "linear-gradient(145deg, #2ddb6f 0%, #1aa84a 100%)",
            border: "1.5px solid rgba(255,255,255,0.22)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            flexShrink: 0,
            cursor: "pointer",
          }}
        >
          <span className="fab-label">Chat on WhatsApp</span>
          <WhatsAppIcon />
        </a>

        {/* Call Button */}
        <a
          href={callHref}
          aria-label="Call now"
          title="Call"
          className="fab-call"
          style={{
            position: "relative",
            width: 58,
            height: 58,
            borderRadius: "50%",
            background: "linear-gradient(145deg, #fb923c 0%, #ea6b0a 100%)",
            border: "1.5px solid rgba(255,255,255,0.22)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            flexShrink: 0,
            cursor: "pointer",
          }}
        >
          <span className="fab-label">Call Investigator</span>
          <CallIcon />
        </a>
      </div>
    </>
  );
}

export default React.memo(FloatingContactButtons);
