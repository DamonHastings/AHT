/**
 * Default "Who I help" hub copy — aligned with docs/website-content-roadmap.md.
 * Imported by HomePage (static fallback) and sanity/seedHome.js (re-seed).
 */

/** @param {string} variant camelCase card variant */
export function audienceAnchorId(variant) {
  const kebab = variant.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  return `audience-${kebab}`;
}

export const WHO_I_HELP_BLOCK_DEFAULTS = {
  eyebrow: "who I work with",
  heading: "Different chapters. Different doors.",
  headingEmphasis: "Different doors.",
  cards: [
    {
      variant: "children",
      tag: "Kids · about ages 7–12",
      title: "Voice, confidence, and friendship",
      body: "We use play and the arts to build communication, self-esteem, and how kids show up at home and with peers — including worries that feel hard to name. Parent collaboration is part of the work (regular check-ins by age). This fit is strongest when families want creative, relational support — not intensive behavioral plans for explosive behavior primarily outside the home.",
      linkText: "Read more →",
      linkHref: `/#${audienceAnchorId("children")}`,
    },
    {
      variant: "teens",
      tag: "Teens · Davis area",
      title: "Transitions, relationships, and real talk",
      body: "High school shifts (think ninth to tenth), juniors and seniors, and the leap toward what comes next. Friendship stress, choices, and growing insight — with someone who is not your parent but still shows up playfully and relationally, using what you actually care about as a way in.",
      linkText: "Read more →",
      linkHref: `/#${audienceAnchorId("teens")}`,
    },
    {
      variant: "youngAdults",
      tag: "Young adults",
      title: "Independence without feeling alone in it",
      body: "Scheduling your own care, naming when you're struggling, knowing who your people and resources are. I can be a steady anchor while you practice adulting in a world that often feels too big too fast.",
      linkText: "Read more →",
      linkHref: `/#${audienceAnchorId("youngAdults")}`,
    },
    {
      variant: "parents",
      tag: "Parents & co-parents",
      title: "The emotional load of raising humans",
      body: "Co-parent loneliness, discipline questions, the everyday stress nobody warns you about, and the small worries that spiral at 2 a.m. I normalize, validate, and help you think through next steps — including when your own upbringing or a parent's absence makes parenting feel like learning without a map.",
      linkText: "Read more →",
      linkHref: `/#${audienceAnchorId("parents")}`,
    },
    {
      variant: "grief",
      tag: "Grief & life transitions",
      title: "Loss that doesn't always look like a funeral",
      body: "Pets, people, identity shifts, regret over paths not taken — grief can be nebulous and still heavy. If something ended, changed, or never got to happen, and you're stuck, angry, sad, or confused, this work makes room for all of it.",
      linkText: "Read more →",
      linkHref: `/#${audienceAnchorId("grief")}`,
    },
    {
      variant: "adhd",
      tag: "ADHD & divergent brains",
      title: "The story underneath the strategies",
      body: "We make space for how ADHD (or wondering if you have it) shaped self-esteem, relationships, and feeling misunderstood — not only productivity hacks. When you want tools, we can do lists, body doubling, and practical supports; when you're on medication, we also pay attention to mood, appetite, and whether you still feel like you.",
      linkText: "Read more →",
      linkHref: `/#${audienceAnchorId("adhd")}`,
    },
    {
      variant: "anxiety",
      tag: "Anxiety & stress",
      title: "When your mind won't power down",
      body: "Stress, worry, panic-y moments, and intrusive thoughts — including the scary ones brains sometimes serve up. Cognitive skills when they help, plus a steady relationship where you won't be judged for what you think. There's energy in anxiety; part of our work can be steering it instead of only fighting it.",
      linkText: "Read more →",
      linkHref: `/#${audienceAnchorId("anxiety")}`,
    },
    {
      variant: "seed",
      tag: "SEED scholars · UC Davis",
      title: "College, family expectations, and the social maze",
      body: "In-town support with caregivers when that's useful; help holding program rules, roommate stress, and wanting connection beyond your cohort — all while parts of you feel very grown up and parts still need scaffolding.",
      linkText: "Read more →",
      linkHref: `/#${audienceAnchorId("seed")}`,
    },
    {
      variant: "groups",
      tag: "Groups · forming",
      title: "Community when you're ready",
      body: "I'm slowly gathering interest for in-person groups — including space for adults grieving a parent, and for people who want to practice latching onto hope when the world feels loud. No pressure; if you want your name on a list for when timing lines up, say the word when you reach out.",
      linkText: "Share interest →",
      linkHref: "/#contact",
    },
  ],
};
