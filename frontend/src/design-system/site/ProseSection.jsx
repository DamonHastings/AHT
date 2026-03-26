import PropTypes from "prop-types";
import { PortableText } from "@portabletext/react";
import { CONTAINER } from "../layout";
import { sitePortableTextComponents } from "../../content/sitePortableText";

const alignmentClasses = {
  left: "text-left",
  center: "text-center mx-auto",
  right: "text-right ml-auto",
};

export default function ProseSection({ title, content, alignment = "left" }) {
  const ac = alignmentClasses[alignment] || "text-left";
  if (!content?.length) return null;

  return (
    <section className={`${CONTAINER} max-w-4xl py-12 md:py-16 px-4`}>
      {title ? (
        <h2
          className={`text-3xl md:text-4xl mb-6 font-serif ${ac}`}
          style={{ color: "var(--ink)" }}
        >
          {title}
        </h2>
      ) : null}
      <div className={`site-prose max-w-none ${ac}`}>
        <PortableText value={content} components={sitePortableTextComponents} />
      </div>
    </section>
  );
}

ProseSection.propTypes = {
  title: PropTypes.string,
  content: PropTypes.array,
  alignment: PropTypes.oneOf(["left", "center", "right"]),
};
