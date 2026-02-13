/**
 * Color Palette
 * Comprehensive color system for the therapy practice website
 * 
 * This palette features calming powder blues, slate blues, sage greens,
 * warm taupes, and dark browns for a professional and inviting aesthetic.
 */

export const colors = {
  // Original Brand Colors
  background: {
    light: '#E4EDF2',
  },
  primary: '#65858C',
  accent: '#C2D9A0',
  secondary: '#BFAE99',
  text: {
    dark: '#3F1006',
  },

  // Powder Blue - Light, airy backgrounds
  powderBlue: {
    50: '#FFFFFF',
    100: '#F6F9FB',
    200: '#EDF3F6',
    300: '#E4EDF2',
    400: '#989EA1',
    500: '#4C4F51',
    600: '#000000',
  },

  // Slate Blue - Primary brand color
  slateBlue: {
    50: '#FFFFFF',
    100: '#CCD6D9',
    200: '#98AEB2',
    300: '#65858C',
    400: '#43595D',
    500: '#222C2F',
    600: '#000000',
  },

  // Sage Green - Accent color for freshness
  sageGreen: {
    50: '#FFFFFF',
    100: '#EBF2DF',
    200: '#D6E6C0',
    300: '#C2D9A0',
    400: '#81916B',
    500: '#414835',
    600: '#000000',
  },

  // Warm Taupe - Secondary, earthy warmth
  warmTaupe: {
    50: '#FFFFFF',
    100: '#EAE4DD',
    200: '#D4C9BB',
    300: '#BFAE99',
    400: '#7F7466',
    500: '#403A33',
    600: '#000000',
  },

  // Dark Brown - Text and strong accents
  darkBrown: {
    50: '#FFFFFF',
    100: '#BFAFAC',
    200: '#7F6059',
    300: '#3F1006',
    400: '#2A0B04',
    500: '#150502',
    600: '#000000',
  },

  // Neutral Grays - Utility colors
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    500: '#6B7280',
    700: '#374151',
    900: '#111827',
  },

  // Semantic Colors
  semantic: {
    white: '#FFFFFF',
    black: '#000000',
    success: '#27ae60',
    warning: '#f39c12',
    error: '#e74c3c',
    info: '#3498db',
  },
}

// CSS Variable Mapping
// Map JavaScript colors to CSS custom properties for easy usage
export const cssVars = {
  // Original Colors
  '--color-background-light': colors.background.light,
  '--color-primary': colors.primary,
  '--color-accent': colors.accent,
  '--color-secondary': colors.secondary,
  '--color-text-dark': colors.text.dark,

  // Powder Blue
  '--color-powder-blue-50': colors.powderBlue[50],
  '--color-powder-blue-100': colors.powderBlue[100],
  '--color-powder-blue-200': colors.powderBlue[200],
  '--color-powder-blue-300': colors.powderBlue[300],
  '--color-powder-blue-400': colors.powderBlue[400],
  '--color-powder-blue-500': colors.powderBlue[500],
  '--color-powder-blue-600': colors.powderBlue[600],

  // Slate Blue
  '--color-slate-blue-50': colors.slateBlue[50],
  '--color-slate-blue-100': colors.slateBlue[100],
  '--color-slate-blue-200': colors.slateBlue[200],
  '--color-slate-blue-300': colors.slateBlue[300],
  '--color-slate-blue-400': colors.slateBlue[400],
  '--color-slate-blue-500': colors.slateBlue[500],
  '--color-slate-blue-600': colors.slateBlue[600],

  // Sage Green
  '--color-sage-green-50': colors.sageGreen[50],
  '--color-sage-green-100': colors.sageGreen[100],
  '--color-sage-green-200': colors.sageGreen[200],
  '--color-sage-green-300': colors.sageGreen[300],
  '--color-sage-green-400': colors.sageGreen[400],
  '--color-sage-green-500': colors.sageGreen[500],
  '--color-sage-green-600': colors.sageGreen[600],

  // Warm Taupe
  '--color-warm-taupe-50': colors.warmTaupe[50],
  '--color-warm-taupe-100': colors.warmTaupe[100],
  '--color-warm-taupe-200': colors.warmTaupe[200],
  '--color-warm-taupe-300': colors.warmTaupe[300],
  '--color-warm-taupe-400': colors.warmTaupe[400],
  '--color-warm-taupe-500': colors.warmTaupe[500],
  '--color-warm-taupe-600': colors.warmTaupe[600],

  // Dark Brown
  '--color-dark-brown-50': colors.darkBrown[50],
  '--color-dark-brown-100': colors.darkBrown[100],
  '--color-dark-brown-200': colors.darkBrown[200],
  '--color-dark-brown-300': colors.darkBrown[300],
  '--color-dark-brown-400': colors.darkBrown[400],
  '--color-dark-brown-500': colors.darkBrown[500],
  '--color-dark-brown-600': colors.darkBrown[600],

  // Grays
  '--color-gray-50': colors.gray[50],
  '--color-gray-100': colors.gray[100],
  '--color-gray-200': colors.gray[200],
  '--color-gray-300': colors.gray[300],
  '--color-gray-500': colors.gray[500],
  '--color-gray-700': colors.gray[700],
  '--color-gray-900': colors.gray[900],

  // Semantic
  '--color-white': colors.semantic.white,
  '--color-black': colors.semantic.black,
  '--color-success': colors.semantic.success,
  '--color-warning': colors.semantic.warning,
  '--color-error': colors.semantic.error,
  '--color-info': colors.semantic.info,
}

// Color usage guide
export const colorUsage = {
  backgrounds: {
    primary: colors.powderBlue[300],
    secondary: colors.powderBlue[200],
    surface: colors.semantic.white,
    elevated: colors.powderBlue[100],
    accent: colors.sageGreen[100],
  },
  text: {
    primary: colors.darkBrown[300],
    secondary: colors.slateBlue[400],
    inverse: colors.semantic.white,
    muted: colors.gray[500],
  },
  borders: {
    light: colors.gray[200],
    medium: colors.gray[300],
    dark: colors.slateBlue[200],
  },
  interactive: {
    primary: colors.slateBlue[300],
    secondary: colors.sageGreen[300],
    accent: colors.warmTaupe[300],
    hover: {
      primary: colors.slateBlue[400],
      secondary: colors.sageGreen[400],
      accent: colors.warmTaupe[400],
    },
  },
}

export default colors
