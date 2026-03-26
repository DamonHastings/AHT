import WhoIHelp from "./WhoIHelp";

export default {
  title: "Design System/Site/WhoIHelp",
  component: WhoIHelp,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "V3 four-card grid for audience segments: Children, Teens, Women, SEED Scholars.",
      },
    },
  },
};

export const Default = {
  args: {
    eyebrow: "who I work with",
    heading: "Everyone deserves a way in.",
    headingEmphasis: "way in.",
  },
};
