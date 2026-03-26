import FeelingsCheckIn from "./FeelingsCheckIn";

export default {
  title: "Design System/Site/FeelingsCheckIn",
  component: FeelingsCheckIn,
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
