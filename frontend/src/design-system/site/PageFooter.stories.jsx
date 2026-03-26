import PageFooter from "./PageFooter";

export default {
  title: "Design System/Site/PageFooter",
  component: PageFooter,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "V3 dark ink footer with logo and links.",
      },
    },
  },
};

export const Default = {
  args: {
    logoName: "[Practice Name]",
    logoSubtext: "Licensed Marriage & Family Therapist",
    info: "Davis, CA · Serving Yolo County & UC Davis\nLMFT License #[000000] · Supervised by [Supervisor Name], LMFT #[000000]",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Good Faith Estimate", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
};
