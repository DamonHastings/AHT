import Card from "./Card";
import { Heading, Text } from "./Typography.jsx";
import Button from "./Button";

export default {
  title: "Design System/Card",
  component: Card,
  parameters: {
    docs: {
      description: {
        component:
          "Card component for content containers. Supports multiple variants and padding options.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "elevated", "outlined", "filled"],
    },
    padding: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
    },
  },
};

export const Default = {
  args: {
    children: "Default card content",
  },
};

export const Variants = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card variant="default">
        <Heading level={4}>Default Card</Heading>
        <Text>This is a default card with standard shadow and border.</Text>
      </Card>
      <Card variant="elevated">
        <Heading level={4}>Elevated Card</Heading>
        <Text>This card has a stronger shadow for emphasis.</Text>
      </Card>
      <Card variant="outlined">
        <Heading level={4}>Outlined Card</Heading>
        <Text>This card has a prominent border and transparent background.</Text>
      </Card>
      <Card variant="filled">
        <Heading level={4}>Filled Card</Heading>
        <Text>This card has a subtle background color.</Text>
      </Card>
    </div>
  ),
};

export const PaddingSizes = {
  render: () => (
    <div className="space-y-4">
      <Card padding="none">
        <div className="p-4 bg-neutral-100 rounded">No padding (content manages its own)</div>
      </Card>
      <Card padding="sm">
        <Text>Small padding card</Text>
      </Card>
      <Card padding="md">
        <Text>Medium padding card (default)</Text>
      </Card>
      <Card padding="lg">
        <Text>Large padding card</Text>
      </Card>
    </div>
  ),
};

export const WithContent = {
  render: () => (
    <Card className="max-w-md">
      <Heading level={3}>Therapy Session</Heading>
      <Text variant="muted" className="mb-4">
        Individual therapy sessions are tailored to your unique needs and goals.
      </Text>
      <div className="space-y-2 mb-6">
        <Text variant="small">
          <strong>Duration:</strong> 50 minutes
        </Text>
        <Text variant="small">
          <strong>Format:</strong> In-person or Online
        </Text>
        <Text variant="small">
          <strong>Cost:</strong> $150 per session
        </Text>
      </div>
      <Button fullWidth>Book Session</Button>
    </Card>
  ),
};

export const Grid = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <Heading level={4}>Individual Therapy</Heading>
        <Text variant="body">One-on-one sessions tailored to your needs.</Text>
      </Card>
      <Card>
        <Heading level={4}>Group Therapy</Heading>
        <Text variant="body">Connect with others in a supportive group setting.</Text>
      </Card>
      <Card>
        <Heading level={4}>Couples Therapy</Heading>
        <Text variant="body">Work together to strengthen your relationship.</Text>
      </Card>
    </div>
  ),
};
