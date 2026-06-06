import type { Block } from "@/components/RichContent";

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

function groupBlocksIntoSections(blocks: Block[]): Block[][] {
  const sections: Block[][] = [];
  let current: Block[] = [];

  for (const block of blocks) {
    if (block.type === "h2" && current.length > 0) {
      sections.push(current);
      current = [block];
    } else {
      current.push(block);
    }
  }

  if (current.length > 0) {
    sections.push(current);
  }

  return sections;
}

const cardStyle = {
  background: "#fff",
  borderRadius: 20,
  border: "1px solid rgba(26,39,68,0.08)",
  boxShadow: "0 12px 32px rgba(26,39,68,0.06)",
  padding: "clamp(24px, 4vw, 34px)",
} as const;

const paragraphStyle = {
  fontSize: "16px",
  color: "var(--text-mid)",
  lineHeight: 1.95,
  margin: 0,
} as const;

function SectionCard({
  blocks,
  index,
}: {
  blocks: Block[];
  index: number;
}) {
  const heading = blocks.find((block) => block.type === "h2");
  const isIntro = !heading;

  return (
    <article style={cardStyle}>
      {heading && heading.type === "h2" && (
        <header style={{ marginBottom: 18 }}>
          <h2
            style={{
              fontSize: "clamp(1.25rem, 2.2vw, 1.5rem)",
              fontWeight: 700,
              color: "var(--navy)",
              marginBottom: 14,
              lineHeight: 1.3,
            }}
          >
            {heading.text}
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
        </header>
      )}

      <div style={{ display: "grid", gap: 16 }}>
        {blocks.map((block, blockIndex) => {
          if (block.type === "h2") {
            return null;
          }

          if (block.type === "h3") {
            return (
              <h3
                key={`${index}-${blockIndex}`}
                style={{
                  fontSize: 17,
                  fontWeight: 600,
                  color: "var(--wine-berry)",
                  margin: 0,
                }}
              >
                {block.text}
              </h3>
            );
          }

          if (block.type === "ul") {
            return (
              <ul
                key={`${index}-${blockIndex}`}
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  color: "var(--text-mid)",
                  fontSize: "16px",
                  lineHeight: 1.9,
                }}
              >
                {block.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      position: "relative",
                      paddingLeft: 20,
                      marginBottom: 14,
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
            );
          }

          return (
            <p key={`${index}-${blockIndex}`} style={paragraphStyle}>
              {block.text}
            </p>
          );
        })}
      </div>

      {isIntro && (
        <div
          aria-hidden
          style={{
            marginTop: 20,
            height: 3,
            width: 72,
            borderRadius: 999,
            background: "var(--gold)",
          }}
        />
      )}
    </article>
  );
}

export default function ServiceRichContent({ blocks }: { blocks: Block[] }) {
  const sections = groupBlocksIntoSections(blocks);

  return (
    <div style={{ display: "grid", gap: 20 }}>
      {sections.map((section, index) => (
        <SectionCard key={index} blocks={section} index={index} />
      ))}
    </div>
  );
}
