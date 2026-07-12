import { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";

/**
 * Palette shown as clickable swatches. `value` matches the color slugs stored on
 * each word so we can look up which words belong to a color. `label` is an
 * accessible name for the swatch.
 */
const DEFAULT_COLORS = [
  { value: "terracotta", label: "warm" },
  { value: "teal", label: "cool" },
  { value: "mauve", label: "muted" },
  { value: "gold", label: "bright" },
  { value: "terra-light", label: "soft" },
  { value: "teal-deep", label: "deep" },
];

/**
 * The word library. Each word can be associated with multiple colors, so a word
 * shows up under every color listed in its `colors` array.
 */
const DEFAULT_WORDS = [
  {
    name: "Overwhelmed",
    description:
      "So much is happening at once that it's hard to know where to put your attention. That's not weakness — it's a sign you're carrying a lot right now.",
    colors: ["terracotta", "teal-deep"],
  },
  {
    name: "Anxious",
    description:
      "Your body is bracing for something. Anxiety often shows up when something matters to you and the outcome feels uncertain.",
    colors: ["teal-deep", "terracotta"],
  },
  {
    name: "Numb",
    description:
      "Feeling far away from your own feelings is its own kind of hard. Numbness is often protection, not absence — a way of turning the volume down when things get to be too much.",
    colors: ["mauve", "teal-deep"],
  },
  {
    name: "Tender",
    description:
      "Something is close to the surface right now. Tenderness means a part of you is open, and it's worth handling gently.",
    colors: ["terra-light", "mauve"],
  },
  {
    name: "Hopeful",
    description:
      "A small light is on. Hope doesn't erase the hard parts — it just gives you somewhere to move toward.",
    colors: ["gold", "teal"],
  },
  {
    name: "Lost",
    description:
      "You're not sure which way is forward. Sometimes what feels like being lost is really the quiet space before something new.",
    colors: ["mauve", "terracotta"],
  },
  {
    name: "Calm",
    description:
      "There's a steadiness here, even if it's quiet. Notice what helped you arrive at it — that's worth remembering.",
    colors: ["teal"],
  },
  {
    name: "Tired",
    description:
      "Not just sleepy — worn down. Being tired is your system asking for rest and care, not more pushing.",
    colors: ["mauve", "teal-deep"],
  },
  {
    name: "Content",
    description:
      "Things feel okay — enough, settled, for now. Contentment is worth savoring rather than rushing past.",
    colors: ["gold", "teal"],
  },
  {
    name: "Raw",
    description:
      "Everything feels a little too close, a little unguarded. Raw often follows something real. Be kind to yourself here.",
    colors: ["terracotta", "terra-light"],
  },
];

const DEFAULT_RESONATE_PROMPT = "Do any of these feelings resonate with you?";
const DEFAULT_ALL_PROMPT =
  "No pressure to fit a color. Here's the fuller range — see if anything lands.";
const DEFAULT_NONE_LABEL = "None of these connect";
const DEFAULT_CLOSING_BLURB =
  "Naming what you feel is a small act of caring for it. You don't have to fix the feeling or explain it — just noticing it, and giving it a word, is enough to begin.";

/** Accept a slug ("terracotta"), a CSS var, or a raw color and return CSS. */
function resolveColor(value) {
  if (!value) return "transparent";
  if (value.startsWith("var(") || value.startsWith("#") || value.startsWith("rgb"))
    return value;
  return `var(--${value})`;
}

/**
 * Build a palette + word library out of the legacy `swatches` shape
 * ({ color, feel, reply }) so older Sanity content keeps working.
 */
function fromLegacySwatches(swatches) {
  const colors = swatches
    .filter((s) => s?.color)
    .map((s) => ({ value: s.color, label: s.feel }));
  const words = swatches
    .filter((s) => s?.feel)
    .map((s) => ({
      name: s.feel,
      description: s.reply || "",
      colors: s.color ? [s.color] : [],
    }));
  return { colors, words };
}

/**
 * V3 Feelings Check-In.
 *
 * A visitor picks a color, then sees the library of words associated with that
 * color ("Do any of these feelings resonate?"). Choosing a word reveals its
 * description. "None of these connect" opens the full library. A closing note
 * speaks to the value of naming what you feel.
 */
export default function FeelingsCheckIn({
  eyebrow = "a moment for you",
  heading = "How are you feeling right now?",
  subheading = "Choose a color. No explanation needed.",
  colors,
  words,
  swatches,
  resonatePrompt = DEFAULT_RESONATE_PROMPT,
  allPrompt = DEFAULT_ALL_PROMPT,
  noneLabel = DEFAULT_NONE_LABEL,
  closingBlurb = DEFAULT_CLOSING_BLURB,
}) {
  // Resolve content, falling back to legacy swatches, then to defaults.
  const { resolvedColors, resolvedWords } = useMemo(() => {
    const legacy =
      Array.isArray(swatches) && swatches.length ? fromLegacySwatches(swatches) : null;
    return {
      resolvedColors:
        Array.isArray(colors) && colors.length
          ? colors
          : legacy?.colors?.length
            ? legacy.colors
            : DEFAULT_COLORS,
      resolvedWords:
        Array.isArray(words) && words.length
          ? words
          : legacy?.words?.length
            ? legacy.words
            : DEFAULT_WORDS,
    };
  }, [colors, words, swatches]);

  // view: "idle" | "words" | "detail" | "all"
  const [view, setView] = useState("idle");
  const [activeColor, setActiveColor] = useState(null);
  const [activeWord, setActiveWord] = useState(null);
  const originRef = useRef("words"); // where "back" from a word detail returns to
  const panelRef = useRef(null);
  const didMountRef = useRef(false);

  const wordsForColor = (colorValue) =>
    resolvedWords.filter((w) => Array.isArray(w.colors) && w.colors.includes(colorValue));

  const pickColor = (color) => {
    setActiveColor(color);
    setActiveWord(null);
    setView("words");
  };

  const pickWord = (word, origin) => {
    originRef.current = origin;
    setActiveWord(word);
    setView("detail");
  };

  const showAll = () => {
    setActiveWord(null);
    setView("all");
  };

  const backFromDetail = () => {
    setActiveWord(null);
    setView(originRef.current);
  };

  const reset = () => {
    setActiveColor(null);
    setActiveWord(null);
    setView("idle");
  };

  // Move focus to the panel when the view changes (skip first mount) so keyboard
  // and screen-reader users follow the transition.
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }
    if (view !== "idle") {
      panelRef.current?.focus();
    }
  }, [view, activeWord]);

  const colorWords = activeColor ? wordsForColor(activeColor.value) : [];

  return (
    <section
      className="py-16 md:py-24 px-6 md:px-20 text-center relative overflow-hidden"
      style={{ background: "var(--navy)", color: "var(--linen)" }}
    >
      {/* Ambient blobs */}
      <div
        className="absolute w-72 h-72 md:w-[340px] md:h-[340px] rounded-full -top-20 -left-20 opacity-[0.18]"
        style={{ background: "var(--teal)", animation: "blobFloat 14s ease-in-out infinite" }}
        aria-hidden
      />
      <div
        className="absolute w-56 h-56 md:w-[260px] md:h-[260px] rounded-full -bottom-14 -right-14 opacity-[0.2]"
        style={{
          background: "var(--terracotta)",
          animation: "blobFloat 14s ease-in-out infinite",
          animationDelay: "-6s",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-[640px] mx-auto">
        <span className="site-eyebrow block mb-2" style={{ color: "var(--teal-light)" }}>
          {eyebrow}
        </span>
        <h2 className="site-heading italic text-3xl md:text-4xl mb-3">{heading}</h2>
        <p className="text-[0.95rem] opacity-70 mb-12 font-normal">{subheading}</p>

        {/* Swatch row — always available so a visitor can switch colors anytime */}
        <div className="flex justify-center flex-wrap gap-5 mb-10" role="group" aria-label="Feeling colors">
          {resolvedColors.map((c) => {
            const isActive = activeColor?.value === c.value;
            return (
              <button
                key={c.value}
                type="button"
                className="group w-14 h-14 rounded-full border-[3px] border-transparent cursor-pointer transition-all duration-200 relative hover:scale-125 hover:shadow-[0_0_0_4px_rgba(253,251,247,0.3)] hover:border-white focus:outline-none focus:ring-2 focus:ring-white/50"
                style={{
                  background: resolveColor(c.value),
                  transform: isActive ? "scale(1.25)" : undefined,
                  boxShadow: isActive ? "0 0 0 4px rgba(253,251,247,0.3)" : undefined,
                  borderColor: isActive ? "white" : undefined,
                }}
                aria-label={c.label ? `Color: ${c.label}` : `Color ${c.value}`}
                aria-pressed={isActive}
                onClick={() => pickColor(c)}
              />
            );
          })}
        </div>

        {/* Transitioning panel. The key remounts it so the fade replays. */}
        <div
          ref={panelRef}
          tabIndex={-1}
          role="region"
          aria-live="polite"
          aria-label="Feelings"
          className="min-h-[8rem] outline-none"
        >
          <div
            key={`${view}-${activeColor?.value ?? ""}-${activeWord?.name ?? ""}`}
            style={{ animation: "fadeInPanel 0.45s ease-out both" }}
          >
            {view === "idle" && (
              <p className="site-heading italic text-xl md:text-2xl opacity-80">
                Choose a color above to begin.
              </p>
            )}

            {view === "words" && (
              <WordList
                prompt={resonatePrompt}
                swatchColor={activeColor ? resolveColor(activeColor.value) : null}
                words={colorWords}
                emptyText="Let's look at the fuller range instead."
                onPick={(w) => pickWord(w, "words")}
                onNone={showAll}
                noneLabel={`${noneLabel} →`}
              />
            )}

            {view === "all" && (
              <WordList
                prompt={allPrompt}
                words={resolvedWords}
                onPick={(w) => pickWord(w, "all")}
                onNone={reset}
                noneLabel="← Start over"
              />
            )}

            {view === "detail" && activeWord && (
              <div>
                <h3 className="site-heading italic text-2xl md:text-3xl mb-4">
                  {activeWord.name}
                </h3>
                <p className="text-[1.05rem] leading-relaxed opacity-90 max-w-[52ch] mx-auto mb-8">
                  {activeWord.description}
                </p>
                <div className="flex justify-center flex-wrap gap-x-6 gap-y-3">
                  <button
                    type="button"
                    onClick={backFromDetail}
                    className="site-ui-label opacity-70 hover:opacity-100 underline underline-offset-4 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={showAll}
                    className="site-ui-label opacity-70 hover:opacity-100 underline underline-offset-4 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
                  >
                    See more feelings
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Closing note on the value of naming a feeling */}
        {closingBlurb && (
          <p className="text-[0.9rem] leading-relaxed opacity-55 max-w-[46ch] mx-auto mt-12">
            {closingBlurb}
          </p>
        )}
      </div>
    </section>
  );
}

/** A prompt + a set of word pills + a "none of these" escape hatch. */
function WordList({ prompt, swatchColor, words, emptyText, onPick, onNone, noneLabel }) {
  return (
    <div>
      <p className="site-heading italic text-xl md:text-2xl mb-6 flex items-center justify-center gap-3">
        {swatchColor && (
          <span
            className="inline-block w-4 h-4 rounded-full shrink-0"
            style={{ background: swatchColor }}
            aria-hidden
          />
        )}
        {prompt}
      </p>

      {words.length > 0 ? (
        <ul className="flex flex-wrap justify-center gap-3 mb-8 list-none p-0">
          {words.map((w, i) => (
            <li
              key={w.name}
              style={{ animation: `fadeInPanel 0.4s ease-out both`, animationDelay: `${i * 0.05}s` }}
            >
              <button
                type="button"
                onClick={() => onPick(w)}
                className="px-5 py-2.5 rounded-full text-[0.95rem] cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                style={{
                  background: "rgba(253,251,247,0.08)",
                  border: "1px solid rgba(253,251,247,0.25)",
                  color: "var(--linen)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(253,251,247,0.18)";
                  e.currentTarget.style.borderColor = "rgba(253,251,247,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(253,251,247,0.08)";
                  e.currentTarget.style.borderColor = "rgba(253,251,247,0.25)";
                }}
              >
                {w.name}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="opacity-70 mb-8">{emptyText}</p>
      )}

      <button
        type="button"
        onClick={onNone}
        className="site-ui-label opacity-60 hover:opacity-100 underline underline-offset-4 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
      >
        {noneLabel}
      </button>
    </div>
  );
}

const wordShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
});

WordList.propTypes = {
  prompt: PropTypes.string,
  swatchColor: PropTypes.string,
  words: PropTypes.arrayOf(wordShape),
  emptyText: PropTypes.string,
  onPick: PropTypes.func.isRequired,
  onNone: PropTypes.func.isRequired,
  noneLabel: PropTypes.string,
};

FeelingsCheckIn.propTypes = {
  eyebrow: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string,
    })
  ),
  words: PropTypes.arrayOf(wordShape),
  // Legacy shape kept for backward compatibility with existing Sanity content.
  swatches: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      feel: PropTypes.string,
      reply: PropTypes.string,
    })
  ),
  resonatePrompt: PropTypes.string,
  allPrompt: PropTypes.string,
  noneLabel: PropTypes.string,
  closingBlurb: PropTypes.string,
};
