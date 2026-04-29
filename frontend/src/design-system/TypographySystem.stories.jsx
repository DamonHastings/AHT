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

Complete documentation of the Playfair Display + Roboto + Roboto Condensed typography system.

## Font Pairing: Elegant Editorial

**Playfair Display (Headings)**
- High-contrast serif with an editorial feel
- Strong in regular and italic display settings
- Matches the romantic tone of the Sarah & Pablo reference

**Roboto (Body)**
- Neutral, readable sans-serif
- Keeps long-form content calm and practical
- Pairs cleanly with expressive headings

**Roboto Condensed (UI)**
- Narrow uppercase rhythm for navigation, labels, and buttons
- Adds structure without competing with Playfair

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
<h1 className="font-heading text-6xl font-normal">
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
