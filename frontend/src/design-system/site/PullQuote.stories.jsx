import PullQuote from "./PullQuote";

export default {
  title: "Design System/Site/PullQuote",
  component: PullQuote,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "V3 navy pull quote section with eyebrow, quote, and body text.",
      },
    },
  },
};

export const Default = {
  args: {
    eyebrow: "a different kind of therapy",
    quote: '"What if the way through isn\'t talking about it — but making something with it?"',
    body: "Expressive Arts therapy uses drawing, movement, writing, music, and play to open doors that words alone can't. It's not about being creative. It's about being human — and trusting that some things are easier to show than to say.",
  },
};
