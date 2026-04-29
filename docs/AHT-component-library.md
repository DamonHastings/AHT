# HeroSection UI Component Specification

A robust, highly configurable Hero section component designed for React, suitable for prominent landing areas or top sections of pages. Features include background image options, overlays, flexible content alignment, configurable call-to-action elements, and optional animated blob accent variants.

---

## Overview

The `HeroSection` aims to serve top-of-page or landing scenarios, prioritizing accessibility, responsiveness, and support for multiple visuals and layout directions. It should be built in Storybook with thorough controls for testing and demonstration of all configurations, including blob animation variants.

---

## Features

- **Responsive Layouts**: Works seamlessly across mobile, tablet, and desktop.
- **Background Image Support**: Optional; allows aspect-fill and positioning controls.
- **Configurable Overlay**: Multiple theme and color options; adjustable opacity.
- **Typography**: Customizable heading and subheading, with semantic HTML support.
- **CTA Button**: Customizable text, styles, click actions, and optional icon support.
- **Visual Variants**: Supports layout and imagery variations such as blob animation (see below).
- **Flexible Content Alignment**: Align content and CTA left, center, or right.
- **Blob Animation Variant**: Animated SVG blob accent, optional on the left or right for added visual flair.
- **Accessible**: Headings and buttons must meet WCAG contrast and semantic rules.

---

## Variations

- **Height**: `'small'` (min-height: 240px), `'medium'` (min-height: 400px), `'large'` (min-height: 600px), `'screen'` (full viewport height).
- **Overlay**: `'dark'`, `'light'`, `'burgundy'`, `'teal'`, or `null` (no overlay); opacity in range `0.0–1.0`.
- **Background**: With image, solid color, or none.
- **Blob Shape Variant**: Enable animated SVG blob accent (variant) — can be positioned to the left or right and animated for emphasis.
- **Content Alignment**: `'left'`, `'center'`, `'right'`.
- **Button Variant**: `'primary'`, `'secondary'`, `'outline'`, `'ghost'`, `'accent'`.

---

## Props

| Prop Name         | Type                                                           | Required | Default               | Description                                                                     |
| ----------------- | -------------------------------------------------------------- | -------- | --------------------- | ------------------------------------------------------------------------------- |
| `backgroundImage` | `string`                                                       | No       | —                     | URL of the optional background image.                                           |
| `overlay`         | `'dark' \| 'light' \| 'burgundy' \| 'teal' \| null`            | No       | `'dark'`              | Overlay color, or `null` for no overlay.                                        |
| `overlayOpacity`  | `number`                                                       | No       | `0.4`                 | 0.0–1.0; sets overlay transparency.                                             |
| `heading`         | `string`                                                       | Yes      | —                     | Main heading text.                                                              |
| `subheading`      | `string`                                                       | No       | —                     | Optional subheading or tagline.                                                 |
| `ctaText`         | `string`                                                       | No       | `'Book Consultation'` | CTA button label.                                                               |
| `onCtaClick`      | `(event) => void`                                              | No       | —                     | Click handler for the CTA button.                                               |
| `ctaVariant`      | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'accent'` | No       | `'accent'`            | CTA button visual style.                                                        |
| `alignment`       | `'left' \| 'center' \| 'right'`                                | No       | `'center'`            | Horizontal alignment for text and content.                                      |
| `height`          | `'small' \| 'medium' \| 'large' \| 'screen'`                   | No       | `'screen'`            | Section vertical height.                                                        |
| `blobPosition`    | `'left' \| 'right' \| null`                                    | No       | `null`                | Show animated blob SVG, masked/accented on the given side.                      |
| `blobVariant`     | `boolean`                                                      | No       | `false`               | If true, shows the animated blob accent (variant for enhanced visual interest). |
| `className`       | `string`                                                       | No       | `''`                  | Additional CSS classes.                                                         |
| `children`        | `ReactNode`                                                    | No       | —                     | Custom additional content (see Slots).                                          |

---

## Slots & Children

- **children**: You can pass additional React nodes (e.g., custom badges, descriptions, links) to render beneath the headings and CTA.
- **heading**/**subheading**: Support for slots if using advanced composition (e.g., rich text, links).
- **CTA Button**: Supports rendering a custom button (advanced users).
- **Blob Animation Variant**: Conditionally rendered left or right based on `blobPosition` **and** shown only if `blobVariant` is true.

---

## Visual Guidelines

- **Design Tokens**: Use project’s color palette, typography, spacing scale.
- **Overlay**: Meets contrast standards for legibility over all background images.
- **Button States**: Hover, focus-visible, active, disabled; follows accessible button patterns.
- **Animation**: If using the blob animation variant (`blobVariant={true}`), the animated SVG accent animates smoothly with reduced motion support.
- **Spacing**: Consistent internal gutter and max-width for content area.

---

## Example Usage

### Standard Hero Section

```jsx
<HeroSection
  backgroundImage="/images/therapy-bg.jpg"
  overlay="burgundy"
  overlayOpacity={0.3}
  heading="Rediscover Yourself"
  subheading="Expressive Arts Therapy in Davis, CA"
  ctaText="Book Consultation"
  onCtaClick={() => setShowBooking(true)}
  ctaVariant="primary"
  alignment="left"
  height="large"
  blobPosition="right"
>
  <span className="eyebrow">Therapist · Community Care</span>
</HeroSection>
```

### Hero Section — Blob Animation Variant

```jsx
<HeroSection
  backgroundImage="/images/therapy-bg.jpg"
  overlay="burgundy"
  overlayOpacity={0.3}
  heading="Rediscover Yourself"
  subheading="Expressive Arts Therapy in Davis, CA"
  ctaText="Book Consultation"
  onCtaClick={() => setShowBooking(true)}
  ctaVariant="primary"
  alignment="left"
  height="large"
  blobPosition="right"
  blobVariant={true} // Enables animated blob accent
>
  <span className="eyebrow">Therapist · Community Care</span>
</HeroSection>
```

---

## Implementation Notes

- **Testing**: Ensure all prop combinations, including `blobVariant`, function in Storybook with interactive controls; test mobile, dark mode, reduced motion, and variant scenarios.
- **Browser Support**: Chrome, Firefox, Safari, Edge (latest 2 versions).
- **Accessibility**:
  - Provide alt text if an important image exists, or ensure image is decorative.
  - Proper focus indication and correct button semantics for CTA.
  - Headings use correct `<h1>`–`<h2>` tags as contextually appropriate.
- **Edge Cases**:
  - No background image: show minimum contrast overlay fill.
  - No CTA: omit button area and adjust spacing accordingly.
  - No heading: warn in dev mode or default to empty state.
  - If `blobVariant` is false or omitted, no animated blob accent is rendered.

---
