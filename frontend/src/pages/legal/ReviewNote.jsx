/**
 * Visible "draft — review before relying on this" banner for the legal pages.
 * Intentionally obvious so it isn't shipped to production unnoticed. Remove this
 * component (and its usages) once the copy has been reviewed/finalized.
 */
export default function ReviewNote() {
  return (
    <div
      className="mb-10 rounded-lg p-4 text-[0.85rem] leading-relaxed"
      style={{
        background: "rgba(196,151,58,0.12)",
        border: "1px solid rgba(196,151,58,0.4)",
        color: "var(--ink)",
      }}
      role="note"
    >
      <strong>Draft for review.</strong> This page is provided as a starting template. Please
      review and customize it — ideally with qualified legal guidance — and remove this notice
      before relying on it.
    </div>
  );
}
