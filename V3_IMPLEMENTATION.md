# V3 Therapist Homepage Implementation

A new version of the frontend implementing the design from `therapist-homepage-v3.html` with a Storybook design system and Sanity CMS integration.

## What's New

### Design System (V3)

- **Theme**: Playfair Display, Jost, Caveat fonts; teal, terracotta, navy, sand, linen palette
- **Components**: Nav, Hero (animated composition), Pull Quote, Who I Help (4 cards), The Space, Expressive Arts, Meet/Profile, Feelings Check-In, CTA, Footer

### Structure

```
frontend/
├── src/
│   ├── design-system/v3/        # V3 components
│   │   ├── NavV3.jsx
│   │   ├── HeroV3.jsx
│   │   ├── PullQuoteV3.jsx
│   │   ├── WhoIHelpV3.jsx
│   │   ├── TheSpaceV3.jsx
│   │   ├── ExpressiveV3.jsx
│   │   ├── MeetV3.jsx
│   │   ├── FeelingsCheckInV3.jsx
│   │   ├── CTAV3.jsx
│   │   ├── FooterV3.jsx
│   │   ├── index.js
│   │   └── *.stories.jsx        # Storybook stories
│   ├── pages/
│   │   └── HomePageV3.jsx       # V3 home page
│   └── styles/
│       └── v3-theme.css         # CSS variables & animations

sanity/schemas/
└── v3PageComponents.js          # Sanity schemas for v3 components
```

### Routes

- **`/`** → V3 home (default)
- **`/classic`** → Original Sanity-powered home
- **`/about`**, **`/services`** → Existing pages

## Sanity Integration

1. **V3 Components in Page Builder**: Create a page in Sanity with slug `home`, template `Custom`, and add v3 components:

   - V3 Hero
   - V3 Pull Quote
   - V3 Who I Help
   - V3 The Space
   - V3 Expressive Arts
   - V3 Meet / Profile
   - V3 Feelings Check-In
   - V3 CTA

2. **When Sanity has v3 components**: The home page renders from Sanity data via PageRenderer.

3. **When Sanity has no v3 page**: A static layout with default content is shown.

## Running the App

```bash
# Frontend
cd frontend && npm run dev

# Sanity Studio
cd sanity && npm run dev
```

## Storybook

```bash
cd frontend && npm run storybook
```

V3 components appear under **Design System V3/** in Storybook.
