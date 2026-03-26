import CTA from "./CTA";

export default {
  title: "Design System/Site/CTA",
  component: CTA,
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
