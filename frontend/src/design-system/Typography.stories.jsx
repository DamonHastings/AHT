import { Heading, Text } from "./Typography.jsx";

export default {
  title: "Design System/Typography",
  parameters: {
    docs: {
      description: {
        component: "Typography system for consistent text styling throughout the application.",
      },
    },
  },
};

export const Headings = {
  render: () => (
    <div className="space-y-4">
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
      <Heading level={5}>Heading 5</Heading>
      <Heading level={6}>Heading 6</Heading>
    </div>
  ),
};

export const TextVariants = {
  render: () => (
    <div className="space-y-4">
      <Text variant="lead">
        Lead Text - Used for introductory paragraphs and important content.
      </Text>
      <Text variant="large">Large Text - For emphasis and important information.</Text>
      <Text variant="body">Body Text - Standard paragraph text for general content.</Text>
      <Text variant="small">Small Text - For captions, labels, and secondary information.</Text>
      <Text variant="muted">Muted Text - For less important or secondary content.</Text>
    </div>
  ),
};

export const TextAs = {
  render: () => (
    <div className="space-y-4">
      <Text as="p">This is a paragraph using Text component.</Text>
      <Text as="span">This is a span using Text component.</Text>
      <Text as="div">This is a div using Text component.</Text>
    </div>
  ),
};

export const Example = {
  render: () => (
    <div className="space-y-6 max-w-3xl">
      <Heading level={1}>Welcome to Our Practice</Heading>
      <Text variant="lead">
        We provide compassionate, evidence-based therapy in a warm and welcoming environment.
      </Text>
      <Heading level={2}>Our Approach</Heading>
      <Text variant="body">
        Our therapeutic approach is tailored to each individual's unique needs. We believe in
        creating a safe space where you can explore your thoughts and feelings without judgment.
      </Text>
      <Text variant="body">
        We integrate various evidence-based modalities including cognitive-behavioral therapy,
        mindfulness practices, and person-centered approaches to support your healing journey.
      </Text>
      <Heading level={3}>Getting Started</Heading>
      <Text variant="body">
        Ready to begin? We offer a free 15-minute consultation to help you determine if we're a good
        fit for your needs.
      </Text>
      <Text variant="small" className="text-neutral-400">
        * Consultation is free and non-committal
      </Text>
    </div>
  ),
};
