import WhoIHelpV3 from "./WhoIHelpV3";

export default {
  title: "Design System V3/WhoIHelpV3",
  component: WhoIHelpV3,
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
