import Meet from "./Meet";

export default {
  title: "Design System/Site/Meet",
  component: Meet,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "V3 therapist profile section with photo placeholder and credentials badge.",
      },
    },
  },
};

export const Default = {
  args: {
    eyebrow: "a little about me",
    heading:
      "Hi, I'm [Her Name] — and I became a therapist because I know what it's like to need a way through.",
    headingEmphasis: "[Her Name]",
    credentials: [
      "LMFT · Licensed 2024",
      "MA, CIIS San Francisco",
      "Expressive Arts Emphasis",
      "SEED Scholar Partner",
    ],
    badgeText: "LMFT\nDavis, CA",
    imageSrc: "/photos/IMG_2481.jpeg",
    imageAlt: "Arielle Hastings, LMFT",
  },
};
