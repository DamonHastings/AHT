import { renderBlockComponent } from "../content/blockRegistry";

/**
 * Renders a page from Sanity `page` document components array.
 * @param {object} pageData
 * @param {'site'|'bare'} [variant='site'] - `site` uses warm-white background; `bare` is transparent (used inside layout shells).
 */
export default function PageRenderer({ pageData, variant = "site" }) {
  if (!pageData) {
    return <div>Page not found</div>;
  }

  const outerClass =
    variant === "site"
      ? "min-h-screen"
      : "min-h-0";

  const style =
    variant === "site"
      ? { background: "var(--warm-white)" }
      : undefined;

  return (
    <div className={outerClass} style={style}>
      {pageData.components?.map((component, index) => renderBlockComponent(component, index))}
    </div>
  );
}
