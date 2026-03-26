/**
 * Wrapper for each Sanity block: keeps DOM boundary for Presentation / visual editing.
 */
export default function EditableSection({ component, children, className }) {
  return (
    <section data-component-type={component?._type} className={className}>
      {children}
    </section>
  );
}
