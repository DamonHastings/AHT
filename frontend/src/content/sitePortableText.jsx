/** Portable Text block styles for `.site-theme` prose sections */
export const sitePortableTextComponents = {
  types: {},
  marks: {
    link: ({ value, children }) => {
      const target = value?.blank ? "_blank" : undefined;
      const rel = value?.blank ? "noopener noreferrer" : undefined;
      return (
        <a href={value?.href} target={target} rel={rel} className="underline">
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-serif mb-4" style={{ color: "var(--ink)" }}>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-serif mb-3" style={{ color: "var(--ink)" }}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-serif mb-2" style={{ color: "var(--ink)" }}>
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mb-4 leading-relaxed" style={{ color: "var(--ink)" }}>
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote
        className="border-l-4 pl-4 italic my-4"
        style={{ borderColor: "var(--teal)", color: "var(--ink)" }}
      >
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="ml-1">{children}</li>,
    number: ({ children }) => <li className="ml-1">{children}</li>,
  },
};
