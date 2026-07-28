import { useState } from "react";
import PropTypes from "prop-types";

/**
 * Renders a run of body paragraphs so that, below md, only the lead paragraph(s)
 * show and the remainder collapse behind a "Read more" toggle. From md up every
 * paragraph is shown and the toggle disappears.
 *
 * Uses plain state + `hidden md:block` rather than a native <details>: some
 * browsers hide a closed <details>'s content via content-visibility on
 * ::details-content, which a CSS `display` override can't beat, so the extra
 * paragraphs would vanish on desktop. A plain div toggles predictably
 * everywhere. The collapsed copy stays in the DOM at every size (crawlable).
 */
export default function ReadMore({
  paragraphs,
  leadCount = 1,
  paragraphClassName = "site-body-copy text-base mb-4",
  toggleColor = "var(--terracotta)",
}) {
  const [open, setOpen] = useState(false);
  const items = (paragraphs || []).filter(Boolean);
  if (items.length === 0) return null;

  const lead = items.slice(0, Math.max(1, leadCount));
  const rest = items.slice(Math.max(1, leadCount));
  const renderParagraph = (text, key) => (
    <p key={key} className={paragraphClassName}>
      {text}
    </p>
  );

  if (rest.length === 0) return <>{lead.map((p, i) => renderParagraph(p, i))}</>;

  return (
    <>
      {lead.map((p, i) => renderParagraph(p, i))}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="md:hidden site-ui-label inline-flex items-center gap-2 cursor-pointer select-none pt-1 pb-3 bg-transparent"
        style={{ color: toggleColor }}
      >
        <span>{open ? "Read less" : "Read more"}</span>
        <span
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? "rotate-45" : ""}`}
          style={{ fontSize: "1.1rem", lineHeight: 1 }}
        >
          +
        </span>
      </button>
      <div className={`${open ? "" : "hidden"} md:block`}>
        {rest.map((text, i) => renderParagraph(text, lead.length + i))}
      </div>
    </>
  );
}

ReadMore.propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.string),
  leadCount: PropTypes.number,
  paragraphClassName: PropTypes.string,
  toggleColor: PropTypes.string,
};
