"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/brand";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "13px 16px",
  border: "1px solid rgba(26,39,68,0.10)",
  borderRadius: 14,
  fontSize: 14,
  fontFamily: "inherit",
  color: "var(--navy)",
  background: "#fff",
  outline: "none",
  boxShadow: "inset 0 1px 2px rgba(26,39,68,0.03)",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  fontWeight: 600,
  color: "var(--navy)",
  marginBottom: 6,
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const subject = data.get("subject") as string;
    const message = data.get("message") as string;

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`
    );
    const mailSubject = encodeURIComponent(
      subject || `Enquiry from ${name} — Elemen India`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${mailSubject}&body=${body}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      form.reset();
    }, 400);
  };

  if (submitted) {
    return (
      <div
        style={{
          background: "#ffffff",
          borderRadius: 24,
          border: "1px solid rgba(26,39,68,0.08)",
          padding: "38px 30px",
          textAlign: "center",
          boxShadow: "0 18px 42px rgba(26,39,68,0.10)",
        }}
      >
        <CheckCircle
          size={48}
          style={{ color: "var(--wine-berry)", marginBottom: 16 }}
        />
        <h3
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "var(--navy)",
            marginBottom: 10,
          }}
        >
          Message sent
        </h3>
        <p style={{ fontSize: 15, color: "var(--text-mid)", lineHeight: 1.7 }}>
          Thank you for contacting Elemen India. Our team will get back to you
          shortly.
        </p>
        <button
          type="button"
          className="elemen-btn-primary"
          style={{ marginTop: 24, border: "none", cursor: "pointer" }}
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#ffffff",
        borderRadius: 24,
        border: "1px solid rgba(26,39,68,0.08)",
        padding: "34px 30px",
        boxShadow: "0 18px 42px rgba(26,39,68,0.10)",
      }}
    >
      <div
        style={{
          width: 72,
          height: 4,
          borderRadius: 999,
          background: "linear-gradient(90deg, var(--wine-berry) 0%, #8cc0ff 100%)",
          marginBottom: 18,
        }}
      />
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          padding: "6px 10px",
          borderRadius: 999,
          background: "rgba(47,128,237,0.12)",
          color: "#1e5db0",
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginBottom: 12,
        }}
      >
        Quick enquiry
      </span>
      <h2
        style={{
          fontSize: "clamp(24px, 2.4vw, 30px)",
          fontWeight: 700,
          color: "var(--navy)",
          marginBottom: 8,
        }}
      >
        Send us a message
      </h2>
      <p
        style={{
          fontSize: 14,
          color: "var(--text-mid)",
          marginBottom: 22,
          lineHeight: 1.6,
        }}
      >
        Fill in the form and our team will respond within one business day.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 10,
          marginBottom: 22,
        }}
        className="contact-mini-grid"
      >
        {["Fast response", "Professional support", "Clear next steps"].map(
          (item) => (
              <div
                key={item}
                style={{
                  background: "rgba(238,245,255,0.9)",
                  border: "1px solid rgba(26,39,68,0.08)",
                borderRadius: 16,
                padding: "10px 12px",
                fontSize: 12,
                fontWeight: 600,
                color: "var(--navy)",
                textAlign: "center",
              }}
            >
              {item}
            </div>
          )
        )}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
          marginBottom: 16,
        }}
        className="contact-form-grid"
      >
        <div style={{ gridColumn: "1 / -1" }} className="contact-form-full">
          <label htmlFor="name" style={labelStyle}>
            Full name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="phone" style={labelStyle}>
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+91"
            style={inputStyle}
          />
        </div>
        <div style={{ gridColumn: "1 / -1" }}>
          <label htmlFor="subject" style={labelStyle}>
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="CCTV quote, AMC, support…"
            style={inputStyle}
          />
        </div>
        <div style={{ gridColumn: "1 / -1" }}>
          <label htmlFor="message" style={labelStyle}>
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your project or enquiry…"
            style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="elemen-btn-primary"
        style={{
          border: "none",
          cursor: loading ? "wait" : "pointer",
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          opacity: loading ? 0.8 : 1,
          boxShadow: "0 14px 28px rgba(196, 157, 0, 0.18)",
        }}
      >
        <Send size={16} />
        {loading ? "Sending…" : "Submit enquiry"}
      </button>

      <p
        style={{
          marginTop: 14,
          fontSize: 12,
          color: "var(--text-light)",
          lineHeight: 1.6,
        }}
      >
        Prefer a quick call? Use the phone number above and we’ll guide you
        directly.
      </p>

      <style>{`
        @media (max-width: 540px) {
          .contact-form-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 900px) {
          .contact-mini-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  );
}
