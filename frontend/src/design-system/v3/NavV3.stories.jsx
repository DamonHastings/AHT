import NavV3 from "./NavV3";

export default {
  title: "Design System V3/NavV3",
  component: NavV3,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "V3 fixed navigation with logo, links, and CTA. Based on therapist-homepage-v3.html.",
      },
    },
  },
  argTypes: {
    logoName: { control: "text" },
    logoSubtext: { control: "text" },
    ctaText: { control: "text" },
    ctaHref: { control: "text" },
  },
};

export const Default = {
  args: {
    logoName: "[Practice Name]",
    logoSubtext: "LMFT · Expressive Arts · Davis, CA",
    links: [
      { label: "About", href: "#" },
      { label: "Who I Help", href: "#" },
      { label: "The Approach", href: "#" },
      { label: "Resources", href: "#" },
    ],
    ctaText: "Free Consultation",
    ctaHref: "#",
  },
};

export const CustomPractice = {
  args: {
    ...Default.args,
    logoName: "Healing Minds Therapy",
    logoSubtext: "LMFT · Trauma-Informed · Sacramento, CA",
    ctaText: "Book a 15-min Call",
  },
};
