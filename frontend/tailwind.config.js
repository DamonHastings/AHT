/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Crimson Text"', 'serif'],
        body: ['"Nunito Sans"', 'sans-serif'],
        sans: ['"Nunito Sans"', 'sans-serif'],
        serif: ['"Crimson Text"', 'serif'],
      },
      colors: {
        // Therapy Office Palette (from IMG_0346)
        therapy: {
          // Teal/Turquoise from the couch
          teal: {
            50: '#E8F5F6',
            100: '#B8E3E6',
            200: '#8DD1D5',
            300: '#6BB5B8',
            400: '#5A9A9D',
            500: '#4A8285',
            600: '#3A6A6D',
            700: '#2D5254',
          },
          // Burgundy/Wine from the chairs
          burgundy: {
            50: '#F5E8ED',
            100: '#E3BFD0',
            200: '#C9909F',
            300: '#A44B62',
            400: '#8B3A52',
            500: '#6B2C3E',
            600: '#551F30',
            700: '#3F1623',
          },
          // Cream/Beige from walls
          cream: {
            50: '#FDFCFA',
            100: '#F5F1E8',
            200: '#EBE7DE',
            300: '#E1DCD3',
            400: '#D7D1C8',
            500: '#CDC6BC',
          },
          // Warm neutral sand tones
          sand: {
            50: '#F7F5F1',
            100: '#E8E4DA',
            200: '#D4CAB8',
            300: '#C9BFAD',
            400: '#B8AE9C',
            500: '#9F9585',
            600: '#837A6C',
          },
        },
        // Core Neutrals
        neutral: {
          50: '#F8F7F2',
          100: '#F0EDE5',
          200: '#EBE6DF',
          300: '#DED8D0',
          400: '#D2B48C',
          500: '#F5DEB3',
        },
        // Wood Tones
        wood: {
          50: '#8B4513',
          100: '#A0522D',
          200: '#BC8F8F',
          300: '#36454F',
          400: '#2F2F2F',
        },
        // Primary Brand - Rust/Reddish-brown
        primary: {
          50: '#FFE5E5',
          100: '#FFCCCC',
          200: '#FF9999',
          300: '#FF6666',
          400: '#C3583B',
          500: '#A52A2A',
          600: '#8B322F',
          700: '#6B1F1F',
          800: '#4D1515',
          900: '#2F0D0D',
        },
        // Secondary Brand - Teal/Aqua
        secondary: {
          50: '#E0F7FA',
          100: '#B2EBF2',
          200: '#80DEEA',
          300: '#4DD0E1',
          400: '#26C6DA',
          500: '#008080',
          600: '#20B2AA',
          700: '#40E0D0',
          800: '#00695C',
          900: '#004D40',
        },
        // Accent Colors
        accent: {
          navy: {
            50: '#E3F2FD',
            100: '#BBDEFB',
            200: '#90CAF9',
            300: '#64B5F6',
            400: '#42A5F5',
            500: '#000080',
            600: '#191970',
            700: '#000051',
            800: '#000033',
            900: '#00001A',
          },
          coral: {
            50: '#FFF5F0',
            100: '#FFE5D9',
            200: '#FFCCB3',
            300: '#FFB28C',
            400: '#FF9966',
            500: '#FF7F50',
            600: '#E9967A',
            700: '#CC6B4F',
            800: '#B24A33',
            900: '#99331F',
          },
          burgundy: {
            50: '#FCE4EC',
            100: '#F8BBD0',
            200: '#F48FB1',
            300: '#F06292',
            400: '#EC407A',
            500: '#C25B6C',
            600: '#8B0000',
            700: '#6B0000',
            800: '#4D0000',
            900: '#2D0000',
          },
          gold: {
            50: '#FFFDF0',
            100: '#FFF9C4',
            200: '#FFF59D',
            300: '#FFF176',
            400: '#FFEE58',
            500: '#FFD700',
            600: '#B8860B',
            700: '#9A7209',
            800: '#7C5D07',
            900: '#5E4805',
          },
        },
        // Artwork Colors
        artwork: {
          blue: {
            50: '#E3F2FD',
            100: '#BBDEFB',
            200: '#B0C4DE',
            300: '#87CEEB',
            400: '#5BA3D0',
            500: '#2E7DB5',
          },
          teal: {
            50: '#E0F7FA',
            100: '#B2EBF2',
            200: '#008080',
            300: '#40E0D0',
            400: '#20B2AA',
            500: '#00695C',
          },
        },
        // Natural Elements
        natural: {
          green: {
            50: '#F1F8E9',
            100: '#DCEDC8',
            200: '#C5E1A5',
            300: '#AED581',
            400: '#9CCC65',
            500: '#228B22',
            600: '#556B2F',
            700: '#3E5F1F',
            800: '#2D4315',
            900: '#1C280B',
          },
        },
      },
    },
  },
  plugins: [],
}
