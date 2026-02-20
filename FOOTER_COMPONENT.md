# Footer Component

A responsive footer component that pulls content from Sanity CMS, including business information, navigation links, social media icons, and copyright text.

## Features

- **Dynamic Content**: Pulls data from Sanity Site Settings
- **Navigation Links**: Reuses the same navigation structure as the header
- **Social Media Icons**: Displays clickable social media links with icons
- **Responsive Design**: Works seamlessly on all screen sizes
- **React Router Integration**: Internal links use React Router `Link` component
- **Smooth Scrolling**: Anchor links scroll smoothly to page sections

## Components

### Footer.jsx (Design System)

The base presentational component with props for all content.

```jsx
<Footer
  businessName="Arielle Hastings Psychotherapy"
  copyrightText="© 2026 Arielle Hastings, LMFT. All Rights Reserved."
  navigationLinks={[
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
  ]}
  socialLinks={[{ label: "Facebook", url: "https://...", icon: <svg>...</svg> }]}
/>
```

### SiteFooter.jsx (Connected Component)

Fetches footer data from Sanity and renders the Footer component.

## Sanity Configuration

### Site Settings Schema

The footer pulls data from the `siteSettings` document:

- **businessName**: Business name displayed next to logo
- **copyrightText**: Copyright notice text
- **navigation**: References the navigation document (same as header)
- **socialLinks**: Array of social media platforms and URLs

### Supported Social Platforms

- Facebook
- Instagram
- LinkedIn
- Twitter
- YouTube

## Setup Instructions

### 1. Update Site Settings in Sanity

Run the script to populate default footer data:

```bash
cd sanity
node updateFooterSettings.js
```

### 2. Configure Social Links

In Sanity Studio:

1. Go to "Site Settings"
2. Scroll to "Social Media Links"
3. Add your social media platforms and URLs
4. Publish changes

### 3. Customize Business Info

Update the following fields in Site Settings:

- **Business Name (Footer)**: Your business name
- **Copyright Text (Footer)**: Your copyright notice

## Styling

The footer uses the design system with:

- White background
- Border top with sand color
- Burgundy text for links
- Hover states with color transitions
- Responsive flexbox layout
- Social icons in circular bordered containers

## Layout Structure

```
┌─────────────────────────────────────────────────┐
│  [Logo] Business Name   Nav Links   [O O O]    │
│  ─────────────────────────────────────────────  │
│         © 2026 Copyright Text                   │
└─────────────────────────────────────────────────┘
```

## Usage in App

The footer is automatically included in `App.jsx` and displays on all pages:

```jsx
<Router>
  <div className="min-h-screen flex flex-col">
    <div className="flex-grow">
      <Routes>...</Routes>
    </div>
    <SiteFooter />
  </div>
</Router>
```

## Customization

### Add New Social Platform

1. Update the `socialLinks` field in `siteSettings.js` with new platform
2. Add the SVG icon in `SiteFooter.jsx` under `getSocialIcon()` function
3. Update Sanity and publish

### Change Layout

Modify the layout in `Footer.jsx` by adjusting the Tailwind classes in the component structure.

## Notes

- The footer uses the same navigation data as the header for consistency
- Social media links always open in a new tab (`target="_blank"`)
- Internal navigation uses React Router for SPA behavior
- Anchor links scroll smoothly to page sections
