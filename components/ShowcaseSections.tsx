import type { ReactNode } from "react";

type SplitFeatureSectionProps = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  highlightTitle: string;
  highlightText: string;
  footer?: ReactNode;
  sectionId?: string;
  imageMinHeight?: number;
  imageHeight?: number;
  highlightPlacement?: "content" | "belowImage";
  titleMaxWidth?: string;
  accentColor?: string;
  accentColorDark?: string;
  accentBorder?: string;
  accentShadow?: string;
};

type MosaicCardItem = {
  kind: "card";
  key: string;
  icon: ReactNode;
  title: string;
  text: string;
  stat: string;
  statLabel: string;
};

type MosaicImageItem = {
  kind: "image";
  key: string;
  imageSrc: string;
  imageAlt: string;
};

type MosaicItem = MosaicCardItem | MosaicImageItem;

type MosaicFeatureSectionProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  items: MosaicItem[];
  accentColor?: string;
  accentColorDark?: string;
  accentBorder?: string;
  accentShadow?: string;
};

export function SplitFeatureSection({
  eyebrow,
  title,
  paragraphs,
  imageSrc,
  imageAlt,
  highlightTitle,
  highlightText,
  footer,
  sectionId,
  imageMinHeight = 250,
  imageHeight,
  highlightPlacement = "content",
  titleMaxWidth = "12ch",
  accentColor = "#ff4b3e",
  accentColorDark = "#ff473c",
  accentBorder = "rgba(255, 75, 62, 0.7)",
  accentShadow = "rgba(255, 71, 60, 0.22)",
}: SplitFeatureSectionProps) {
  const [leadParagraph, ...restParagraphs] = paragraphs;

  return (
    <section id={sectionId} className="showcase-shell">
      <div className="showcase-split-grid">
        <div className="showcase-image-column">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={imageAlt}
            className="showcase-main-image"
            style={{
              minHeight: imageMinHeight,
              height: imageHeight ?? imageMinHeight,
            }}
          />
          {highlightPlacement === "belowImage" && (
            <div className="showcase-highlight-card showcase-highlight-card-below-image">
              <h3 className="showcase-highlight-title">{highlightTitle}</h3>
              <p className="showcase-highlight-text">{highlightText}</p>
            </div>
          )}
        </div>

        <div className="showcase-content-column">
          <p className="showcase-eyebrow">{eyebrow}</p>
          <h2 className="showcase-title" style={{ maxWidth: titleMaxWidth }}>
            {title}
          </h2>
          <p className="showcase-paragraph showcase-paragraph-lead">
            {leadParagraph}
          </p>

          {highlightPlacement === "content" && (
            <div className="showcase-highlight-card">
              <h3 className="showcase-highlight-title">{highlightTitle}</h3>
              <p className="showcase-highlight-text">{highlightText}</p>
            </div>
          )}

          <div className="showcase-paragraph-stack">
            {restParagraphs.map((paragraph) => (
              <p key={paragraph} className="showcase-paragraph">
                {paragraph}
              </p>
            ))}
          </div>

          {footer && <div className="showcase-footer-row">{footer}</div>}
        </div>
      </div>

      <style>{`
        .showcase-shell {
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(26, 39, 68, 0.12);
          border-radius: 26px;
          padding: 22px;
        }

        .showcase-split-grid {
          display: grid;
          gap: 20px;
          align-items: stretch;
        }

        .showcase-main-image {
          width: 100%;
          object-fit: cover;
          display: block;
          border-radius: 24px;
          box-shadow: 0 14px 34px rgba(26, 39, 68, 0.12);
        }

        .showcase-image-column {
          align-self: start;
        }

        .showcase-content-column {
          position: relative;
          padding: 6px 4px 6px 0;
        }

        .showcase-eyebrow {
          color: ${accentColor};
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.3px;
          margin-bottom: 10px;
        }

        .showcase-title {
          font-size: clamp(28px, 4vw, 56px);
          line-height: 1.02;
          color: var(--navy);
          margin-bottom: 18px;
        }

        .showcase-paragraph-stack {
          display: grid;
          gap: 14px;
        }

        .showcase-paragraph {
          font-size: 15px;
          line-height: 1.85;
          color: var(--text-mid);
        }

        .showcase-paragraph-lead {
          margin-bottom: 18px;
        }

        .showcase-highlight-card {
          background: ${accentColorDark};
          color: #fff;
          border-radius: 18px;
          padding: 18px 20px;
          box-shadow: 0 16px 34px ${accentShadow};
          border: 1px solid ${accentBorder};
          margin: 0 0 14px;
        }

        .showcase-highlight-title {
          font-size: clamp(20px, 2vw, 30px);
          line-height: 1.08;
          margin-bottom: 10px;
          max-width: 14ch;
        }

        .showcase-highlight-text {
          font-size: 13px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.92);
          max-width: 42ch;
        }

        .showcase-highlight-card-below-image {
          margin-top: 14px;
          margin-bottom: 0;
        }

        .showcase-footer-row {
          margin-top: 18px;
        }

        @media (min-width: 1024px) {
          .showcase-split-grid {
            grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
          }

          .showcase-highlight-card {
            margin-left: -96px;
            max-width: 430px;
          }

          .showcase-highlight-card-below-image {
            margin-left: 0;
            max-width: 100%;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

export function MosaicFeatureSection({
  eyebrow,
  title,
  subtitle,
  items,
  accentColor = "#ff4b3e",
  accentColorDark = "#ff473c",
  accentBorder = "rgba(255, 75, 62, 0.7)",
  accentShadow = "rgba(255, 71, 60, 0.22)",
}: MosaicFeatureSectionProps) {
  return (
    <section className="mosaic-shell">
      <div className="mosaic-header">
        <p className="mosaic-eyebrow">{eyebrow}</p>
        <h2 className="mosaic-title">{title}</h2>
        {subtitle && <p className="mosaic-subtitle">{subtitle}</p>}
      </div>

      <div className="mosaic-grid">
        {items.map((item) =>
          item.kind === "image" ? (
            <div key={item.key} className="mosaic-image-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.imageSrc}
                alt={item.imageAlt}
                className="mosaic-image"
              />
            </div>
          ) : (
            <div key={item.key} className="mosaic-info-card">
              <div className="mosaic-icon-wrap">{item.icon}</div>
              <h3 className="mosaic-card-title">{item.title}</h3>
              <p className="mosaic-card-text">{item.text}</p>
              <div className="mosaic-divider" />
              <div className="mosaic-stat">{item.stat}</div>
              <div className="mosaic-stat-label">{item.statLabel}</div>
            </div>
          )
        )}
      </div>

      <style>{`
        .mosaic-shell {
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(26, 39, 68, 0.12);
          border-radius: 26px;
          padding: 22px;
        }

        .mosaic-header {
          max-width: 760px;
          margin: 0 auto 18px;
          text-align: center;
        }

        .mosaic-eyebrow {
          color: ${accentColor};
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.3px;
          margin-bottom: 10px;
        }

        .mosaic-title {
          font-size: clamp(24px, 3.3vw, 42px);
          line-height: 1.1;
          color: var(--navy);
          margin-bottom: 10px;
        }

        .mosaic-subtitle {
          font-size: 14px;
          line-height: 1.75;
          color: var(--text-mid);
        }

        .mosaic-grid {
          display: grid;
          gap: 16px;
        }

        .mosaic-info-card {
          min-height: 100%;
          background: #fff;
          border: 1.5px solid ${accentBorder};
          border-radius: 18px;
          padding: 18px;
          box-shadow: 0 12px 30px ${accentShadow};
        }

        .mosaic-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 999px;
          background: ${accentColorDark};
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
          box-shadow: 0 10px 20px ${accentShadow};
        }

        .mosaic-card-title {
          font-size: 21px;
          line-height: 1.12;
          color: var(--navy);
          margin-bottom: 8px;
          max-width: 14ch;
        }

        .mosaic-card-text {
          font-size: 13px;
          line-height: 1.7;
          color: var(--text-mid);
          min-height: 64px;
        }

        .mosaic-divider {
          height: 1px;
          background: rgba(26, 39, 68, 0.16);
          margin: 12px 0;
        }

        .mosaic-stat {
          font-size: clamp(24px, 2.6vw, 38px);
          line-height: 1;
          font-weight: 800;
          color: var(--navy);
          margin-bottom: 4px;
        }

        .mosaic-stat-label {
          font-size: 13px;
          font-weight: 700;
          color: var(--navy);
        }

        .mosaic-image-card {
          overflow: hidden;
          border-radius: 18px;
          box-shadow: 0 12px 30px rgba(26, 39, 68, 0.08);
        }

        .mosaic-image {
          width: 100%;
          height: 100%;
          min-height: 190px;
          object-fit: cover;
          display: block;
        }

        @media (min-width: 1024px) {
          .mosaic-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
      `}</style>
    </section>
  );
}
