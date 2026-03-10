import MeetV3 from "./MeetV3";

export default {
  title: "Design System V3/MeetV3",
  component: MeetV3,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "V3 therapist profile section with photo placeholder and credentials badge.",
      },
    },
  },
};

export const Default = {
  args: {
    eyebrow: "a little about me",
    heading:
      "Hi, I'm [Her Name] — and I became a therapist because I know what it's like to need a way through.",
    headingEmphasis: "[Her Name]",
    credentials: [
      "LMFT · Licensed 2024",
      "MA, CIIS San Francisco",
      "Expressive Arts Emphasis",
      "SEED Scholar Partner",
    ],
    badgeText: "LMFT\nDavis, CA",
  },
};
