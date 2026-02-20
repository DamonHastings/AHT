import PreviewScroll from "./PreviewScroll";

export default {
  title: "Components/PreviewScroll",
  component: PreviewScroll,
  parameters: {
    layout: "fullscreen",
  },
};

const sampleItems = [
  {
    title: "Anxiety & Stress",
    description:
      "Learn effective strategies to manage anxiety, reduce stress, and develop healthy coping mechanisms for daily challenges.",
    icon: "wave",
  },
  {
    title: "Trauma & PTSD",
    description:
      "Heal from traumatic experiences through compassionate, trauma-informed therapeutic approaches.",
    icon: "shield",
  },
  {
    title: "Relationship Issues",
    description:
      "Improve communication, build healthier connections, and navigate relationship challenges.",
    icon: "people",
  },
  {
    title: "Depression",
    description:
      "Major depressive disorder, persistent depressive disorder, and mood regulation with compassionate support.",
    icon: "sun",
  },
  {
    title: "Life Transitions",
    description:
      "Navigate career changes, loss, major life decisions, and adjusting to new circumstances.",
    icon: "plant",
  },
  {
    title: "Self-Esteem",
    description:
      "Building confidence, addressing negative self-talk, and developing a healthier relationship with yourself.",
    icon: "sparkles",
  },
];

export const Default = {
  args: {
    title: "Focus Areas",
    items: sampleItems,
  },
};

export const WithoutTitle = {
  args: {
    items: sampleItems,
  },
};

export const FewItems = {
  args: {
    title: "Specializations",
    items: sampleItems.slice(0, 3),
  },
};

export const ManyItems = {
  args: {
    title: "Our Services",
    items: [
      ...sampleItems,
      {
        title: "Addiction Recovery",
        description:
          "Support for overcoming substance abuse and behavioral addictions with evidence-based treatment.",
        icon: "unlock",
      },
      {
        title: "Grief & Loss",
        description:
          "Process loss and grief in a supportive environment with compassionate guidance.",
        icon: "heart",
      },
    ],
  },
};
