import PropTypes from "prop-types";

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
  women: {
    bg: "var(--linen-deep)",
    tagBg: "#8A7060",
    ringColor: "var(--gold)",
    blobColor: "var(--gold)",
    arrowColor: "#7A5E54",
  },
  seed: {
    bg: "#E8ECF3",
    tagBg: "#4A6080",
    ringColor: "var(--navy)",
    blobColor: "var(--navy)",
    arrowColor: "#3A5070",
  },
};

/**
 * V3 Who I Help - 4-card grid for audience segments
 */
export default function WhoIHelp({
  eyebrow = "who I work with",
  heading = "Everyone deserves a way in.",
  headingEmphasis = "way in.",
  cards = [
    {
      variant: "children",
      tag: "Children · Ages 8–12",
      title: "Little ones with big feelings",
      body: "Kids don't always have the vocabulary for what they're carrying. Through play, art, and sandtray, I give children a safe space to work through anxiety, transitions, and family changes — without ever needing to put it perfectly into words.",
      linkText: "For parents →",
      linkHref: "#",
    },
    {
      variant: "teens",
      tag: "Teens · Ages 13–18",
      title: 'For teens who are over being told to "just open up"',
      body: "You've probably heard that enough. This isn't that. We work with what actually interests you — music, movement, writing, making things — and let that be the door. No forced conversation. No performance of wellness. Real work, real connection.",
      linkText: "Read more →",
      linkHref: "#",
    },
    {
      variant: "women",
      tag: "Women & Young Adults",
      title: "For women in transition, growth, or grief",
      body: "Identity. Relationships. Burnout. Becoming. Therapy for women isn't one-size-fits-all. I offer a warm, unhurried space to explore who you are, who you've been, and who you're becoming — at whatever pace feels right for you.",
      linkText: "Learn more →",
      linkHref: "#",
    },
    {
      variant: "seed",
      tag: "SEED Scholars · UC Davis",
      title: "For students carrying more than a backpack",
      body: "Being a SEED scholar means navigating college while holding your family's hopes, your community's expectations, and your own. I work with SEED students to build support that honors all of who you are — not just the student part.",
      linkText: "For SEED scholars →",
      linkHref: "#",
    },
  ],
}) {
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
          className="block mb-1"
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: "1.15rem",
            color: "var(--terracotta)",
          }}
        >
          {eyebrow}
        </span>
        <h2
          className="font-serif text-2xl md:text-3xl font-normal leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {heading.replace(headingEmphasis, "")}
          <em style={{ fontStyle: "italic", color: "var(--teal-deep)" }}>{headingEmphasis}</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, idx) => {
          const v = CARD_VARIANTS[card.variant] || CARD_VARIANTS.children;
          return <WhoCard key={idx} card={card} variant={v} />;
        })}
      </div>
    </section>
  );
}

function WhoCard({ card, variant }) {
  return (
    <div
      className="rounded-3xl p-7 md:p-10 relative overflow-hidden cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
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
        className="inline-block text-[0.7rem] tracking-[0.12em] uppercase font-medium py-1 px-3 rounded-full mb-4 text-white"
        style={{ background: variant.tagBg }}
      >
        {card.tag}
      </span>

      <h3
        className="font-serif text-xl font-normal mb-4 leading-snug"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {card.title}
      </h3>

      <p
        className="text-[0.94rem] leading-[1.82] font-light opacity-80 mb-6"
        style={{ opacity: 0.82 }}
      >
        {card.body}
      </p>

      <a
        href={card.linkHref}
        className="text-[0.78rem] tracking-[0.1em] uppercase font-medium inline-flex items-center gap-2 transition-[gap] hover:gap-4"
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
      variant: PropTypes.oneOf(["children", "teens", "women", "seed"]).isRequired,
      tag: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      linkText: PropTypes.string.isRequired,
      linkHref: PropTypes.string.isRequired,
    })
  ),
};
