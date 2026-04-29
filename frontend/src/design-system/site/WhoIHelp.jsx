import PropTypes from "prop-types";
import { audienceAnchorId, WHO_I_HELP_BLOCK_DEFAULTS } from "../../content/whoIHelpDefaults";

const WHO_DEFAULTS = WHO_I_HELP_BLOCK_DEFAULTS;

const CARD_VARIANTS = {
  children: {
    bg: "var(--terra-pale)",
    tagBg: "var(--terracotta)",
    ringColor: "var(--terracotta)",
    blobColor: "var(--terracotta)",
    arrowColor: "var(--terracotta)",
  },
  teens: {
    bg: "var(--teal-pale)",
    tagBg: "var(--teal-deep)",
    ringColor: "var(--teal-deep)",
    blobColor: "var(--teal)",
    arrowColor: "var(--teal-deep)",
  },
  /** @deprecated use youngAdults; kept for older Sanity documents */
  women: {
    bg: "var(--linen-deep)",
    tagBg: "#8A7060",
    ringColor: "var(--gold)",
    blobColor: "var(--gold)",
    arrowColor: "#7A5E54",
  },
  youngAdults: {
    bg: "#EDE8E2",
    tagBg: "#7A6558",
    ringColor: "var(--gold)",
    blobColor: "var(--gold)",
    arrowColor: "#5C4A42",
  },
  parents: {
    bg: "#F3E8E4",
    tagBg: "#A85E52",
    ringColor: "var(--terracotta)",
    blobColor: "var(--terra-light)",
    arrowColor: "var(--terracotta)",
  },
  grief: {
    bg: "#E6EAEF",
    tagBg: "#3D4F63",
    ringColor: "var(--navy)",
    blobColor: "var(--navy)",
    arrowColor: "#2C3C4D",
  },
  adhd: {
    bg: "#F4EFE3",
    tagBg: "#9A7B38",
    ringColor: "var(--gold)",
    blobColor: "var(--gold)",
    arrowColor: "#7A612E",
  },
  anxiety: {
    bg: "#EDE8EE",
    tagBg: "#6B5A72",
    ringColor: "var(--mauve)",
    blobColor: "var(--mauve)",
    arrowColor: "#4F4358",
  },
  seed: {
    bg: "#E8ECF3",
    tagBg: "#4A6080",
    ringColor: "var(--navy)",
    blobColor: "var(--navy)",
    arrowColor: "#3A5070",
  },
  groups: {
    bg: "#ECEAE8",
    tagBg: "#5C5855",
    ringColor: "#8A8580",
    blobColor: "#B0ABA5",
    arrowColor: "#4A4643",
  },
};

/**
 * V3 Who I Help - 4-card grid for audience segments
 */
export default function WhoIHelp({
  eyebrow = WHO_DEFAULTS.eyebrow,
  heading = WHO_DEFAULTS.heading,
  headingEmphasis = WHO_DEFAULTS.headingEmphasis,
  cards,
}) {
  const resolvedCards = cards?.length ? cards : WHO_DEFAULTS.cards;
  return (
    <section className="py-16 md:py-28 px-6 md:px-20 max-w-[1240px] mx-auto relative">
      {/* Ambient orbs */}
      <div
        className="absolute top-12 right-8 pointer-events-none opacity-50 hidden md:block"
        aria-hidden
      >
        <div className="relative w-20 h-20">
          <div
            className="absolute w-[70px] h-[70px] rounded-full border-[1.5px] border-[rgba(176,90,74,0.3)]"
            style={{ animation: "spinSlow 20s linear infinite" }}
          />
          <div
            className="absolute w-10 h-10 rounded-full top-4 left-4 bg-[rgba(91,158,160,0.12)]"
            style={{ animation: "orbitFloat 8s ease-in-out infinite" }}
          />
        </div>
      </div>

      <div className="mb-14">
        <span
          className="site-eyebrow block mb-2"
          style={{
            color: "var(--terracotta)",
          }}
        >
          {eyebrow}
        </span>
        <h2
          className="site-heading max-w-[760px] text-3xl md:text-4xl"
        >
          {heading.replace(headingEmphasis, "")}
          <em style={{ fontStyle: "italic", color: "var(--teal-deep)" }}>{headingEmphasis}</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {resolvedCards.map((card, idx) => {
          const v = CARD_VARIANTS[card.variant] || CARD_VARIANTS.children;
          const anchorId = card.anchorId ?? audienceAnchorId(card.variant);
          return <WhoCard key={card._key ?? idx} card={card} variant={v} anchorId={anchorId} />;
        })}
      </div>
    </section>
  );
}

function WhoCard({ card, variant, anchorId }) {
  return (
    <div
      id={anchorId}
      className="rounded-3xl p-7 md:p-10 relative overflow-hidden cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-xl scroll-mt-28"
      style={{
        background: variant.bg,
        boxShadow: "transparent",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.09)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "transparent";
      }}
    >
      <div
        className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-20"
        style={{ background: variant.blobColor, animation: "orbitFloat 12s ease-in-out infinite" }}
      />
      <div
        className="absolute top-5 right-5 w-9 h-9 rounded-full border-[1.5px] opacity-20"
        style={{ borderColor: variant.ringColor, animation: "spinSlow 18s linear infinite" }}
      />

      <span
        className="site-ui-label inline-block py-1 px-3 rounded-full mb-4 text-white"
        style={{ background: variant.tagBg }}
      >
        {card.tag}
      </span>

      <h3
        className="site-heading text-[1.45rem] mb-4"
      >
        {card.title}
      </h3>

      <p
        className="site-body-copy text-[0.95rem] mb-6"
      >
        {card.body}
      </p>

      <a
        href={card.linkHref}
        className="site-ui-label inline-flex items-center gap-2 transition-[gap] hover:gap-4"
        style={{ color: variant.arrowColor, textDecoration: "none" }}
      >
        {card.linkText}
      </a>
    </div>
  );
}

WhoIHelp.propTypes = {
  eyebrow: PropTypes.string,
  heading: PropTypes.string,
  headingEmphasis: PropTypes.string,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      variant: PropTypes.oneOf([
        "children",
        "teens",
        "women",
        "youngAdults",
        "parents",
        "grief",
        "adhd",
        "anxiety",
        "seed",
        "groups",
      ]).isRequired,
      anchorId: PropTypes.string,
      _key: PropTypes.string,
      tag: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      linkText: PropTypes.string.isRequired,
      linkHref: PropTypes.string.isRequired,
    })
  ),
};
