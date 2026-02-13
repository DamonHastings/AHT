/**
 * Typography System
 * Font Pairing: Crimson Text + Nunito Sans
 * Mood: Classic & Compassionate
 * 
 * Crimson Text - Headings (serif)
 * - Traditional with modern touch
 * - Excellent readability
 * - Conveys authority without intimidation
 * 
 * Nunito Sans - Body Text (sans-serif)
 * - Rounded, gentle terminals
 * - Highly accessible and readable
 * - Warm and nurturing feel
 */

export const typography = {
  // Font Families
  fonts: {
    heading: '"Crimson Text", serif',
    body: '"Nunito Sans", sans-serif',
  },

  // Font Weights
  weights: {
    light: 300,
    normal: 400,
    semibold: 600,
    bold: 700,
  },

  // Font Sizes
  sizes: {
    // Display sizes (for hero sections)
    display: {
      xl: '4.5rem',   // 72px
      lg: '3.75rem',  // 60px
      md: '3rem',     // 48px
    },
    // Heading sizes
    heading: {
      h1: '3rem',     // 48px
      h2: '2.5rem',   // 40px
      h3: '2rem',     // 32px
      h4: '1.5rem',   // 24px
      h5: '1.25rem',  // 20px
      h6: '1.125rem', // 18px
    },
    // Body sizes
    body: {
      xl: '1.25rem',  // 20px - lead text
      lg: '1.125rem', // 18px - large body
      base: '1rem',   // 16px - default
      sm: '0.875rem', // 14px - small text
      xs: '0.75rem',  // 12px - caption
    },
  },

  // Line Heights
  lineHeights: {
    tight: 1.2,
    snug: 1.3,
    normal: 1.5,
    relaxed: 1.6,
    loose: 1.8,
  },

  // Letter Spacing
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
  },
}

// Typography usage guidelines
export const typographyUsage = {
  hero: {
    headline: {
      fontFamily: typography.fonts.heading,
      fontSize: typography.sizes.display.lg,
      fontWeight: typography.weights.bold,
      lineHeight: typography.lineHeights.tight,
      color: '#3F1006', // Dark brown
    },
    subheadline: {
      fontFamily: typography.fonts.body,
      fontSize: typography.sizes.body.xl,
      fontWeight: typography.weights.normal,
      lineHeight: typography.lineHeights.relaxed,
      color: '#43595D', // Slate blue
    },
  },
  section: {
    heading: {
      fontFamily: typography.fonts.heading,
      fontSize: typography.sizes.heading.h2,
      fontWeight: typography.weights.semibold,
      lineHeight: typography.lineHeights.snug,
      color: '#3F1006',
    },
    subheading: {
      fontFamily: typography.fonts.heading,
      fontSize: typography.sizes.heading.h3,
      fontWeight: typography.weights.semibold,
      lineHeight: typography.lineHeights.snug,
      color: '#65858C', // Slate blue primary
    },
  },
  body: {
    paragraph: {
      fontFamily: typography.fonts.body,
      fontSize: typography.sizes.body.base,
      fontWeight: typography.weights.normal,
      lineHeight: typography.lineHeights.relaxed,
      color: '#43595D',
    },
    lead: {
      fontFamily: typography.fonts.body,
      fontSize: typography.sizes.body.lg,
      fontWeight: typography.weights.normal,
      lineHeight: typography.lineHeights.relaxed,
      color: '#43595D',
    },
    caption: {
      fontFamily: typography.fonts.body,
      fontSize: typography.sizes.body.sm,
      fontWeight: typography.weights.normal,
      lineHeight: typography.lineHeights.normal,
      color: '#7F7466', // Warm taupe
    },
  },
  ui: {
    button: {
      fontFamily: typography.fonts.body,
      fontSize: typography.sizes.body.base,
      fontWeight: typography.weights.semibold,
      lineHeight: typography.lineHeights.normal,
      letterSpacing: typography.letterSpacing.wide,
    },
    label: {
      fontFamily: typography.fonts.body,
      fontSize: typography.sizes.body.sm,
      fontWeight: typography.weights.semibold,
      lineHeight: typography.lineHeights.normal,
      color: '#3F1006',
    },
  },
}

// CSS Custom Properties generator
export const typographyCSS = `
  /* Typography System - Crimson Text + Nunito Sans */
  --font-heading: ${typography.fonts.heading};
  --font-body: ${typography.fonts.body};
  
  /* Font Weights */
  --font-weight-light: ${typography.weights.light};
  --font-weight-normal: ${typography.weights.normal};
  --font-weight-semibold: ${typography.weights.semibold};
  --font-weight-bold: ${typography.weights.bold};
  
  /* Font Sizes - Display */
  --font-size-display-xl: ${typography.sizes.display.xl};
  --font-size-display-lg: ${typography.sizes.display.lg};
  --font-size-display-md: ${typography.sizes.display.md};
  
  /* Font Sizes - Headings */
  --font-size-h1: ${typography.sizes.heading.h1};
  --font-size-h2: ${typography.sizes.heading.h2};
  --font-size-h3: ${typography.sizes.heading.h3};
  --font-size-h4: ${typography.sizes.heading.h4};
  --font-size-h5: ${typography.sizes.heading.h5};
  --font-size-h6: ${typography.sizes.heading.h6};
  
  /* Font Sizes - Body */
  --font-size-xl: ${typography.sizes.body.xl};
  --font-size-lg: ${typography.sizes.body.lg};
  --font-size-base: ${typography.sizes.body.base};
  --font-size-sm: ${typography.sizes.body.sm};
  --font-size-xs: ${typography.sizes.body.xs};
  
  /* Line Heights */
  --line-height-tight: ${typography.lineHeights.tight};
  --line-height-snug: ${typography.lineHeights.snug};
  --line-height-normal: ${typography.lineHeights.normal};
  --line-height-relaxed: ${typography.lineHeights.relaxed};
  --line-height-loose: ${typography.lineHeights.loose};
`

export default typography
