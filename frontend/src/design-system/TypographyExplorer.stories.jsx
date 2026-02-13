import TypographyExplorer from './TypographyExplorer'

export default {
  title: 'Design System/Typography Explorer',
  component: TypographyExplorer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Typography Explorer

An interactive tool to explore and compare different Google Font pairings in the context 
of a real therapy website landing page.

## Features

- **5 Curated Font Pairings**: Each pairing carefully selected to match the therapy office aesthetic
- **Real Content Context**: See how fonts look with actual therapy website copy
- **Easy Comparison**: Toggle between pairings instantly to compare
- **Google Fonts Integration**: All fonts loaded dynamically from Google Fonts
- **Full Page Context**: Hero, about, specialties, approach, and CTA sections

## Font Pairings

1. **Playfair Display + Source Sans Pro** — Elegant & Trustworthy
2. **Lora + Open Sans** — Warm & Calming (Recommended)
3. **Crimson Text + Nunito Sans** — Classic & Compassionate (Recommended)
4. **Cormorant Garamond + Montserrat** — Refined & Contemporary
5. **Merriweather + Lato** — Grounded & Approachable

## How to Use

1. Use the dropdown selector at the top to switch between font pairings
2. Scroll through the sample landing page to see all typography in context
3. Compare different pairings to find the perfect fit for your brand
4. Note the pairing name and implement it in your design system

## Implementation

Once you've chosen your favorite pairing, update your theme configuration:
- Add the Google Fonts link to your \`index.html\`
- Update CSS variables or Tailwind config with the font families
- Apply heading font to h1-h6 elements
- Apply body font to body text and UI elements
        `,
      },
    },
  },
}

export const Interactive = {
  render: () => <TypographyExplorer />,
}
