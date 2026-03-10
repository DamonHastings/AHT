import FeelingsCheckInV3 from "./FeelingsCheckInV3";

export default {
  title: "Design System V3/FeelingsCheckInV3",
  component: FeelingsCheckInV3,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "V3 interactive feelings check-in with color swatches.",
      },
    },
  },
};

export const Default = {
  args: {
    eyebrow: "a moment for you",
    heading: "How are you feeling right now?",
    subheading: "Choose a color. No explanation needed.",
  },
};
