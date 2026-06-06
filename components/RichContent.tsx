"use client";

import { ScrollStagger, ScrollStaggerItem } from "@/components/motion/ScrollReveal";
import { staggerVariantAt } from "@/lib/motion-presets";

type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

function renderListItem(item: string) {
  const colonIndex = item.indexOf(":");
  if (colonIndex > 0) {
    const label = item.slice(0, colonIndex).trim();
    const rest = item.slice(colonIndex + 1);
    return (
      <>
        <strong style={{ color: "var(--navy)", fontWeight: 700 }}>{label}:</strong>
        {rest}
      </>
    );
  }
  return item;
}

export default function RichContent({
  blocks,
  variant = "default",
}: {
  blocks: Block[];
  variant?: "default" | "service";
}) {
  const isService = variant === "service";

  return (
    <ScrollStagger
      style={{ display: "flex", flexDirection: "column", gap: isService ? 18 : 16 }}
      stagger={0.1}
    >
      {blocks.map((block, i) => {
        const variantMotion = staggerVariantAt(i);

        if (block.type === "h2") {
          return (
            <ScrollStaggerItem key={i} variant={variantMotion}>
              <div style={{ marginTop: i > 0 ? (isService ? 28 : 20) : 0 }}>
                <h2
                  style={{
                    fontSize: isService ? "clamp(1.25rem, 2.2vw, 1.5rem)" : 22,
                    fontWeight: 700,
                    color: "var(--navy)",
                    marginBottom: isService ? 14 : 8,
                    lineHeight: 1.3,
                  }}
                >
                  {block.text}
                </h2>
                <div
                  aria-hidden
                  style={{
                    height: 3,
                    width: "100%",
                    borderRadius: 999,
                    background: "var(--gold)",
                  }}
                />
              </div>
            </ScrollStaggerItem>
          );
        }

        if (block.type === "h3") {
          return (
            <ScrollStaggerItem key={i} variant={variantMotion}>
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 600,
                  color: "var(--wine-berry)",
                  marginTop: 8,
                }}
              >
                {block.text}
              </h3>
            </ScrollStaggerItem>
          );
        }

        if (block.type === "ul") {
          return (
            <ScrollStaggerItem key={i} variant={variantMotion}>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: isService ? "4px 0 0" : 0,
                  color: "var(--text-mid)",
                  fontSize: isService ? 16 : 15,
                  lineHeight: 1.9,
                }}
              >
                {block.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      position: "relative",
                      paddingLeft: 20,
                      marginBottom: isService ? 14 : 8,
                    }}
                  >
                    <span
                      aria-hidden
                      style={{
                        position: "absolute",
                        left: 0,
                        top: "0.72em",
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "var(--navy)",
                        transform: "translateY(-50%)",
                      }}
                    />
                    {renderListItem(item)}
                  </li>
                ))}
              </ul>
            </ScrollStaggerItem>
          );
        }

        return (
          <ScrollStaggerItem key={i} variant={variantMotion}>
            <p
              style={{
                fontSize: isService ? 16 : 15,
                color: "var(--text-mid)",
                lineHeight: 1.95,
              }}
            >
              {block.text}
            </p>
          </ScrollStaggerItem>
        );
      })}
    </ScrollStagger>
  );
}

export type { Block };
