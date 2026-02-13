# Design System

A comprehensive design system based on a warm, cozy therapy room aesthetic. This design system balances earthy neutrals with vibrant, sophisticated colors to create a calming and inviting atmosphere.

## Color Palette

The color palette is inspired by a therapy room featuring:
- **Warm neutrals** (creamy off-whites, beiges) for backgrounds
- **Wood tones** (browns, siennas) for natural elements
- **Primary rust/reddish-brown** (#A52A2A) - inspired by the armchair
- **Secondary teal/aqua** (#008080) - inspired by the sofa
- **Accent colors** - navy, coral, burgundy, and gold

### Usage

```jsx
import { colors } from './design-system/colors'

// Access colors programmatically
const primaryColor = colors.primary[500] // #A52A2A
```

### Tailwind Classes

All colors are available as Tailwind utility classes:

```jsx
<div className="bg-primary-500 text-white">
  Primary background
</div>

<div className="bg-secondary-500 text-neutral-50">
  Secondary background
</div>
```

## Components

### Button

Multi-variant button component with different sizes and states.

```jsx
import { Button } from './design-system'

<Button variant="primary" size="md">
  Click Me
</Button>
```

**Variants:** `primary`, `secondary`, `outline`, `ghost`, `accent`  
**Sizes:** `sm`, `md`, `lg`

### Typography

Consistent text styling with Heading and Text components.

```jsx
import { Heading, Text } from './design-system'

<Heading level={1}>Main Title</Heading>
<Text variant="body">Body text content</Text>
```

**Heading Levels:** 1-6  
**Text Variants:** `lead`, `large`, `body`, `small`, `muted`

### Card

Content container with multiple variants.

```jsx
import { Card } from './design-system'

<Card variant="elevated" padding="md">
  Card content
</Card>
```

**Variants:** `default`, `elevated`, `outlined`, `filled`  
**Padding:** `none`, `sm`, `md`, `lg`

### Badge

Labels and tags for status indicators.

```jsx
import { Badge } from './design-system'

<Badge variant="primary" size="md">
  New
</Badge>
```

**Variants:** `primary`, `secondary`, `accent`, `neutral`, `success`  
**Sizes:** `sm`, `md`, `lg`

## Storybook

View all components and their variations in Storybook:

```bash
npm run storybook
```

The Storybook includes:
- Color palette display
- Component variations
- Interactive controls
- Usage examples
- Accessibility information

## Design Principles

1. **Warmth & Comfort** - Colors and styling create a welcoming atmosphere
2. **Accessibility** - All components meet WCAG AA standards
3. **Consistency** - Unified design language across all components
4. **Flexibility** - Components support multiple variants and use cases

## Color Usage Guidelines

### Backgrounds
- **Primary Background:** `neutral-50` (#F8F7F2) - Main page background
- **Secondary Background:** `neutral-100` (#F0EDE5) - Section backgrounds
- **Surface:** `white` - Card and elevated surfaces

### Text
- **Primary Text:** `wood-300` (#36454F) - Main content
- **Secondary Text:** `neutral-400` (#D2B48C) - Supporting content
- **Muted Text:** `neutral-300` (#DED8D0) - Less important content

### Interactive Elements
- **Primary Actions:** `primary-500` (#A52A2A)
- **Secondary Actions:** `secondary-500` (#008080)
- **Hover States:** Use darker shades (600-700) of the base color
