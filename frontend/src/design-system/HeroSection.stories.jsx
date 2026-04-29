import HeroSection from "./HeroSection";

export default {
  title: "Design System/HeroSection",
  component: HeroSection,
  parameters: {
    docs: {
      description: {
        component:
          "Hero section with background image, large heading, and CTA. Use `variant=\"overlay\"` (default), `variant=\"split\"` for a side-by-side grid, or `variant=\"organic\"` for a split layout with expressive-style typography (Playfair Display + Roboto Condensed, terracotta emphasis, pill CTAs) and a photo clipped by an animated organic mask (`blobMorph` only — the photo stays fixed; oversized slightly so edges do not show). Image column: `blobSide` `\"left\"` / `\"right\"`, or default right when only `variant=\"organic\"` is set.",
      },
    },
    layout: "fullscreen",
  },
  argTypes: {
    backgroundImage: {
      control: "text",
    },
    overlay: {
      control: "select",
      options: ["dark", "light", "burgundy", "teal", null],
    },
    overlayOpacity: {
      control: { type: "range", min: 0, max: 1, step: 0.1 },
    },
    heading: {
      control: "text",
    },
    subheading: {
      control: "text",
    },
    ctaText: {
      control: "text",
    },
    ctaVariant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "accent"],
    },
    alignment: {
      control: "select",
      options: ["left", "center", "right"],
    },
    ctaAlignment: {
      control: "select",
      options: ["left", "center", "right"],
    },
    blobSide: {
      control: "select",
      options: [null, "left", "right"],
    },
    blobImage: {
      control: "text",
    },
    height: {
      control: "select",
      options: ["small", "medium", "large", "screen"],
    },
    variant: {
      control: "select",
      options: ["overlay", "split", "organic"],
    },
    onCtaClick: { action: "CTA clicked" },
  },
};

export const Default = {
  args: {
    backgroundImage: "/photos/IMG_0346.JPG",
    overlay: "dark",
    overlayOpacity: 0.4,
    heading: "Find Your Path to Wellness",
    subheading: "Compassionate, evidence-based therapy tailored to your unique needs",
    ctaText: "Book Free Consultation",
    ctaVariant: "accent",
    alignment: "center",
    height: "screen",
  },
};

export const LeftAligned = {
  args: {
    backgroundImage: "/photos/IMG_0346.JPG",
    overlay: "dark",
    overlayOpacity: 0.5,
    heading: "Welcome to Healing Minds Therapy",
    subheading:
      "Professional mental health services in a warm, welcoming environment. Take the first step towards a healthier, happier you.",
    ctaText: "Schedule Appointment",
    ctaVariant: "accent",
    alignment: "left",
    height: "screen",
  },
};

export const RightAligned = {
  args: {
    backgroundImage: "/photos/IMG_0346.JPG",
    overlay: "burgundy",
    overlayOpacity: 0.6,
    heading: "Your Journey Starts Here",
    subheading: "Experienced therapist specializing in anxiety, depression, and trauma recovery.",
    ctaText: "Get Started",
    ctaVariant: "accent",
    alignment: "right",
    height: "screen",
  },
};

/** Hero image clipped by a morphing superellipse mask (`blobMorph`); photo is static and oversized inside the mask. */
export const OrganicImageMask = {
  args: {
    backgroundImage: "/photos/IMG_0346.JPG",
    variant: "organic",
    overlay: null,
    kickerText: "Expressive Arts Therapy · Davis, CA",
    heading: "Healing in a space that meets you where you are",
    headingEmphasis: "where you are",
    subheading:
      "Expressive arts therapy in Davis — when words are hard to find, we find another way in together.",
    ctaText: "Book Free Consultation",
    primaryCtaHref: "#contact",
    secondaryCtaText: "Who I help →",
    secondaryCtaHref: "/#audience-children",
    ctaVariant: "accent",
    alignment: "left",
    height: "large",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Uses `variant=\"organic\"` (image defaults to the right). Typography and CTAs mirror `site/Hero`. Only the mask border-radius animates; the image does not drift.",
      },
    },
  },
};

export const BlobLeft = {
  args: {
    backgroundImage: "/photos/IMG_0346.JPG",
    variant: "organic",
    blobSide: "left",
    overlay: null,
    kickerText: "Expressive Arts Therapy · Davis, CA",
    heading: "Healing in a space that meets you where you are",
    headingEmphasis: "where you are",
    subheading:
      "Expressive arts therapy in Davis — when words are hard to find, we find another way in together.",
    ctaText: "Book Free Consultation",
    primaryCtaHref: "#contact",
    secondaryCtaText: "Who I help →",
    secondaryCtaHref: "/#audience-children",
    ctaVariant: "accent",
    alignment: "left",
    height: "large",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Photo masked by morphing organic corners (`blobMorph`); image stays fixed inside the mask. On large screens the image sits on the left; stacks on small viewports.",
      },
    },
  },
};

export const BlobRight = {
  args: {
    backgroundImage: "/photos/IMG_0346.JPG",
    variant: "organic",
    blobSide: "right",
    overlay: null,
    kickerText: "Expressive Arts Therapy · Davis, CA",
    heading: "Your journey toward balance starts with one conversation",
    headingEmphasis: "one conversation",
    subheading: "Evidence-based care with room for creativity, movement, and play.",
    ctaText: "Schedule a visit",
    primaryCtaHref: "#contact",
    secondaryCtaText: "Learn more →",
    secondaryCtaHref: "/about",
    ctaVariant: "accent",
    alignment: "right",
    height: "large",
  },
};

export const CtaAlignment = {
  args: {
    backgroundImage: "/photos/IMG_0346.JPG",
    overlay: "dark",
    overlayOpacity: 0.45,
    heading: "Left-aligned copy, CTA on the right",
    subheading:
      "Use ctaAlignment when the headline stays left-aligned but you want the button tucked to the opposite side.",
    ctaText: "Book Consultation",
    ctaVariant: "accent",
    alignment: "left",
    ctaAlignment: "right",
    height: "medium",
  },
};

export const Split = {
  args: {
    backgroundImage: "/photos/IMG_0346.JPG",
    overlay: "dark",
    overlayOpacity: 0.4,
    heading: "Find Your Path to Wellness",
    subheading: "Compassionate, evidence-based therapy tailored to your unique needs",
    ctaText: "Book Free Consultation",
    ctaVariant: "accent",
    alignment: "left",
    variant: "split",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Split layout: image spans 7 columns with 1-column gaps on each side, text spans 3 columns on a 12-column grid. On mobile, content stacks above the image.",
      },
    },
  },
};

export const MediumHeight = {
  args: {
    backgroundImage: "/photos/IMG_0346.JPG",
    overlay: "dark",
    overlayOpacity: 0.4,
    heading: "Compassionate Care",
    subheading: "Evidence-based therapy for lasting change",
    ctaText: "Contact Me",
    ctaVariant: "accent",
    alignment: "center",
    height: "medium",
  },
};

export const SmallHeight = {
  args: {
    backgroundImage: "/photos/IMG_0346.JPG",
    overlay: "teal",
    overlayOpacity: 0.5,
    heading: "Begin Your Healing Journey",
    ctaText: "Book Now",
    ctaVariant: "accent",
    alignment: "center",
    height: "small",
  },
};

export const LightOverlay = {
  args: {
    backgroundImage: "/photos/IMG_0346.JPG",
    overlay: "light",
    overlayOpacity: 0.3,
    heading: "Transform Your Life",
    subheading: "Professional therapy services with a personal touch",
    ctaText: "Schedule Consultation",
    ctaVariant: "primary",
    alignment: "center",
    height: "large",
  },
};

export const NoOverlay = {
  args: {
    backgroundImage: "/photos/IMG_0346.JPG",
    overlay: null,
    heading: "Mental Health Matters",
    subheading: "Taking care of your mental health is not a luxury, it's a necessity",
    ctaText: "Learn More",
    ctaVariant: "accent",
    alignment: "center",
    height: "screen",
  },
};

export const NoBackground = {
  args: {
    overlay: null,
    heading: "Start Your Journey Today",
    subheading: "Compassionate therapy for anxiety, depression, and life transitions",
    ctaText: "Book Consultation",
    ctaVariant: "accent",
    alignment: "center",
    height: "medium",
  },
  parameters: {
    backgrounds: { default: "therapy-sand" },
  },
};

export const MinimalContent = {
  args: {
    backgroundImage: "/photos/IMG_0346.JPG",
    overlay: "dark",
    overlayOpacity: 0.6,
    heading: "Welcome",
    ctaText: "Get Started",
    ctaVariant: "accent",
    alignment: "center",
    height: "medium",
  },
};

export const LongContent = {
  args: {
    backgroundImage: "/photos/IMG_0346.JPG",
    overlay: "burgundy",
    overlayOpacity: 0.5,
    heading: "Comprehensive Mental Health Services",
    subheading:
      "I provide compassionate, evidence-based therapy for individuals dealing with anxiety, depression, trauma, relationship issues, and life transitions. My approach combines cognitive-behavioral therapy, mindfulness practices, and person-centered care to help you achieve lasting positive change.",
    ctaText: "Book Free 15-Minute Consultation",
    ctaVariant: "accent",
    alignment: "center",
    height: "screen",
  },
};

export const AllHeights = {
  render: () => (
    <div className="space-y-8 bg-therapy-sand-100 p-8">
      <div>
        <h3 className="text-xl font-bold mb-2">Small Height</h3>
        <HeroSection
          backgroundImage="/photos/IMG_0346.JPG"
          overlay="dark"
          overlayOpacity={0.4}
          heading="Small Hero"
          ctaText="Get Started"
          height="small"
        />
      </div>

      <div>
        <h3 className="text-xl font-bold mb-2">Medium Height</h3>
        <HeroSection
          backgroundImage="/photos/IMG_0346.JPG"
          overlay="teal"
          overlayOpacity={0.5}
          heading="Medium Hero"
          subheading="With subheading"
          ctaText="Learn More"
          height="medium"
        />
      </div>

      <div>
        <h3 className="text-xl font-bold mb-2">Large Height</h3>
        <HeroSection
          backgroundImage="/photos/IMG_0346.JPG"
          overlay="burgundy"
          overlayOpacity={0.4}
          heading="Large Hero"
          subheading="Even more space for content"
          ctaText="Contact"
          height="large"
        />
      </div>
    </div>
  ),
};

export const DifferentButtons = {
  render: () => (
    <div className="space-y-8">
      <HeroSection
        backgroundImage="/photos/IMG_0346.JPG"
        overlay="dark"
        overlayOpacity={0.5}
        heading="Accent Button (Default)"
        subheading="Most visible, recommended for primary CTA"
        ctaText="Book Consultation"
        ctaVariant="accent"
        height="medium"
      />

      <HeroSection
        backgroundImage="/photos/IMG_0346.JPG"
        overlay="dark"
        overlayOpacity={0.5}
        heading="Primary Button"
        subheading="Strong call-to-action"
        ctaText="Get Started"
        ctaVariant="primary"
        height="medium"
      />

      <HeroSection
        backgroundImage="/photos/IMG_0346.JPG"
        overlay="dark"
        overlayOpacity={0.5}
        heading="Outline Button"
        subheading="Subtle but visible"
        ctaText="Learn More"
        ctaVariant="outline"
        height="medium"
      />
    </div>
  ),
};

export const WithClickHandler = {
  args: {
    backgroundImage: "/photos/IMG_0346.JPG",
    overlay: "dark",
    overlayOpacity: 0.4,
    heading: "Ready to Begin Your Journey?",
    subheading: "Book your free 15-minute consultation today",
    ctaText: "Schedule Now",
    ctaVariant: "accent",
    alignment: "center",
    height: "screen",
    onCtaClick: () => alert("Navigate to booking page or show booking modal"),
  },
};
