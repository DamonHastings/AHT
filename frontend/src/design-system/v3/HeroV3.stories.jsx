import HeroV3 from "./HeroV3";

export default {
  title: "Design System V3/HeroV3",
  component: HeroV3,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "V3 hero with split layout and animated blob composition. Based on therapist-homepage-v3.html.",
      },
    },
  },
  argTypes: {
    kickerText: { control: "text" },
    heading: { control: "text" },
    headingEmphasis: { control: "text" },
    body: { control: "text" },
    primaryCtaText: { control: "text" },
    secondaryCtaText: { control: "text" },
  },
};

export const Default = {
  args: {
    kickerText: "Expressive Arts Therapy · Davis, CA",
    heading: "You don't have to find the words.",
    headingEmphasis: "words.",
    headingLines: ["You don't have to", "find the words."],
    body: "Therapy doesn't have to look like sitting still and explaining yourself. Together, we find another way in — through color, movement, making, and play — so that healing can happen even when language falls short.",
    primaryCtaText: "Start with a free consultation",
    secondaryCtaText: "How it works →",
  },
};

export const SingleLineHeading = {
  args: {
    ...Default.args,
    headingLines: undefined,
    heading: "Begin your healing journey today.",
    headingEmphasis: "healing",
  },
};
