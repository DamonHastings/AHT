import TheSpaceV3 from "./TheSpaceV3";

export default {
  title: "Design System V3/TheSpaceV3",
  component: TheSpaceV3,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "V3 two-column section for therapy space/studio with photo and color story.",
      },
    },
  },
};

export const Default = {
  args: {
    eyebrow: "the studio",
    heading: "A room that feels like permission to breathe.",
    headingEmphasis: "permission to breathe.",
    paragraphs: [
      "The space matters. A therapy room should feel like somewhere you'd actually want to sit — not a waiting room or a clinical office.",
      "There's a teal sofa. A warm terracotta chair. Art on the walls. Supplies within reach.",
    ],
    photoTag: "✦ Davis, CA",
  },
};

export const WithImage = {
  args: {
    ...Default.args,
    imageSrc: "/photos/IMG_0346.JPG",
  },
};
