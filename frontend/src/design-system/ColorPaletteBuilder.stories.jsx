import ColorPaletteBuilder from './ColorPaletteBuilder'

export default {
  title: 'Design System/Color Palette Builder',
  component: ColorPaletteBuilder,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Color Palette Builder

An interactive color palette builder that provides a complete overview of your design system colors.

## Features

- **Original Colors Display**: View all primary colors with their designated roles
- **Extended Variants**: Automatically generated tints and shades (50-600 scale) for each color
- **Accessibility Checker**: WCAG 2.1 compliant contrast ratio testing for text/background combinations
- **CSS Export**: One-click copy of CSS custom properties for your entire palette
- **Interactive**: Click any color swatch to copy its hex value to clipboard
- **Design Recommendations**: Curated usage suggestions for optimal UI design

## Usage in Your Project

1. Click any color swatch to copy its hex code
2. Review contrast ratios to ensure accessible text/background combinations
3. Use the "Copy CSS" button to export all colors as CSS variables
4. Follow the recommendations for best practices

## Color Scale

Each color has 7 variants:
- **50-200**: Lighter tints (backgrounds, subtle accents)
- **300**: Base color (primary usage)
- **400-600**: Darker shades (hover states, emphasis)
        `,
      },
    },
  },
}

export const Default = {
  render: () => <ColorPaletteBuilder />,
}
