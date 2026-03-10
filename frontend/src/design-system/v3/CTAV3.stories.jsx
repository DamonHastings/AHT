import CTAV3 from "./CTAV3";

export default {
  title: "Design System V3/CTAV3",
  component: CTAV3,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "V3 terracotta CTA section with consultation booking.",
      },
    },
  },
};

export const Default = {
  args: {
    heading: "Ready to find a different way in?",
    headingEmphasis: "The first conversation is free.",
    subheading: "15-minute consultations · No commitment · Telehealth & in-person available",
    buttonText: "Schedule a free consultation",
    buttonHref: "#",
  },
};
