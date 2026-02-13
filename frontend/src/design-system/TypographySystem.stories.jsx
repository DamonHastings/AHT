import TypographySystem from './TypographySystem'

export default {
  title: 'Design System/Typography System',
  component: TypographySystem,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Typography System

Complete documentation of the Crimson Text + Nunito Sans typography system.

## Font Pairing: Classic & Compassionate

**Crimson Text (Headings)**
- Traditional serif with modern touch
- Conveys authority without intimidation
- Perfect for establishing credibility

**Nunito Sans (Body)**
- Rounded, gentle terminals
- Highly accessible and readable
- Warm and nurturing feel

## Implementation

The fonts are loaded from Google Fonts and configured in:
- \`index.html\` - Font link tags
- \`tailwind.config.js\` - Tailwind font families
- \`index.css\` - CSS custom properties
- \`typography.js\` - Typography configuration

## Usage

\`\`\`jsx
// Using Typography components
import { Heading, Text } from './design-system'

<Heading level={1}>Main Headline</Heading>
<Text variant="lead">Lead paragraph text</Text>
<Text variant="body">Regular body text</Text>

// Using Tailwind classes
<h1 className="font-heading text-6xl font-semibold">
<p className="font-body text-base leading-relaxed">
\`\`\`
        `,
      },
    },
  },
}

export const Documentation = {
  render: () => <TypographySystem />,
}
