import ProfileSection from "./ProfileSection";

export default {
  title: "Components/ProfileSection",
  component: ProfileSection,
  parameters: {
    layout: "padded",
  },
};

const sampleContent = `I believe in creating a safe, non-judgmental space where healing can truly begin. My approach is centered on empathy, authenticity, and collaboration. Together, we will explore your unique experiences and develop strategies that resonate with your personal values and goals.`;

export const Default = {
  args: {
    content: sampleContent,
    buttonText: "Learn more about me",
    buttonLink: "#",
    imageOnLeft: true,
  },
};

export const WithImage = {
  args: {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop",
    imageAlt: "Professional headshot",
    content: sampleContent,
    buttonText: "Learn more about me",
    buttonLink: "#",
    imageOnLeft: true,
  },
};

export const ImageOnRight = {
  args: {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop",
    imageAlt: "Professional headshot",
    content: sampleContent,
    buttonText: "Learn more about me",
    buttonLink: "#",
    imageOnLeft: false,
  },
};

export const WithRichContent = {
  args: {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop",
    imageAlt: "Professional headshot",
    content: (
      <>
        <p className="mb-4">
          I believe in creating a safe, non-judgmental space where healing can truly begin. My
          approach is centered on <strong>empathy</strong>, <strong>authenticity</strong>, and{" "}
          <strong>collaboration</strong>.
        </p>
        <p>
          Together, we will explore your unique experiences and develop strategies that resonate
          with your personal values and goals.
        </p>
      </>
    ),
    buttonText: "Schedule consultation",
    buttonLink: "#contact",
    imageOnLeft: true,
  },
};

export const NoButton = {
  args: {
    content: sampleContent,
    buttonText: null,
    imageOnLeft: true,
  },
};
