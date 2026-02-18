# Navigation & Root Page - Visual Overview

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     SANITY CMS                              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────┐                   │
│  │      SITE SETTINGS                  │                   │
│  ├─────────────────────────────────────┤                   │
│  │ • Site Title                        │                   │
│  │ • Description                       │                   │
│  │ • Contact Info                      │                   │
│  │ • Root Page ──────────────┐         │                   │
│  │ • Navigation  ─────┐      │         │                   │
│  │ • SEO Settings     │      │         │                   │
│  └────────────────────┼──────┼─────────┘                   │
│                       │      │                             │
│                       │      └──> ┌──────────────────┐     │
│                       │           │  HOME PAGE       │     │
│                       │           │  (Root)          │     │
│                       │           │  /home           │     │
│                       │           └──────────────────┘     │
│                       │                                    │
│                       ↓                                    │
│  ┌─────────────────────────────────────┐                   │
│  │   NAVIGATION MENU                   │                   │
│  ├─────────────────────────────────────┤                   │
│  │ Menu Items:                         │                   │
│  │  1. Home ────────┐                  │                   │
│  │  2. About ───────┼──> PAGES         │                   │
│  │  3. Services ────┤                  │                   │
│  │  4. Contact (#)  │                  │                   │
│  └──────────────────┼──────────────────┘                   │
│                     │                                      │
│                     └──> ┌──────────────────┐             │
│                          │  PAGES           │             │
│                          ├──────────────────┤             │
│                          │ • Home           │             │
│                          │ • About          │             │
│                          │ • Services       │             │
│                          │ • Contact        │             │
│                          │ • (Custom pages) │             │
│                          └──────────────────┘             │
└─────────────────────────────────────────────────────────────┘
                               │
                               ↓
┌─────────────────────────────────────────────────────────────┐
│                     FRONTEND                                │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Fetch Site Settings → Get Root Page + Navigation          │
│                                                             │
│  ┌─────────────────────────────────────┐                   │
│  │   HEADER / NAVIGATION               │                   │
│  │   [Home] [About] [Services] [Contact]                   │
│  └─────────────────────────────────────┘                   │
│                                                             │
│  ┌─────────────────────────────────────┐                   │
│  │   PAGE CONTENT                      │                   │
│  │   (Rendered from Sanity)            │                   │
│  │                                     │                   │
│  │   Route "/" → Root Page (Home)      │                   │
│  │   Route "/about" → About Page       │                   │
│  │   Route "/services" → Services Page │                   │
│  └─────────────────────────────────────┘                   │
│                                                             │
│  ┌─────────────────────────────────────┐                   │
│  │   FOOTER                            │                   │
│  └─────────────────────────────────────┘                   │
└─────────────────────────────────────────────────────────────┘
```

---

## Navigation Link Flow

### Internal Page Link
```
User clicks "About"
       ↓
Navigation Item (Internal)
       ↓
Reference to About Page
       ↓
Get slug: "about"
       ↓
Navigate to: /about
       ↓
Fetch page by slug
       ↓
Render Page
```

### Anchor Link
```
User clicks "Contact"
       ↓
Navigation Item (Anchor)
       ↓
Anchor: #contact
       ↓
Scroll to: #contact section
       ↓
(Same page, no fetch)
```

### External Link
```
User clicks "Book Now"
       ↓
Navigation Item (External)
       ↓
URL: https://calendly.com/...
       ↓
Open in new tab
       ↓
External site
```

---

## Root Page Resolution

```
User visits: yoursite.com/
       ↓
Frontend checks: Site Settings
       ↓
Gets: homePage reference
       ↓
Fetches: Referenced page (Home)
       ↓
Renders: Home page content
```

---

## Page Routing Flow

```
┌──────────────┐
│   Browser    │
│   /          │ ──────> Root Page (from Site Settings)
│   /about     │ ──────> About Page (by slug)
│   /services  │ ──────> Services Page (by slug)
│   /custom    │ ──────> Custom Page (by slug)
│   /404       │ ──────> Page Not Found
└──────────────┘
       ↓
┌──────────────┐
│   Router     │
│   Matches    │
│   slug       │
└──────────────┘
       ↓
┌──────────────┐
│  Fetch from  │
│   Sanity     │
└──────────────┘
       ↓
┌──────────────┐
│   Render     │
│   Page       │
└──────────────┘
```

---

## Sanity Studio Structure

```
Sidebar Navigation
├─ 📄 Pages
│  ├─ All Pages
│  ├─ Published Pages
│  └─ Draft Pages
│
├─ ⚙️ Site Configuration
│  ├─ Site Settings ◄────── ROOT PAGE SET HERE
│  │  ├─ Home Page (Reference)
│  │  ├─ Site Title
│  │  ├─ Contact Info
│  │  ├─ Navigation (Reference)
│  │  └─ SEO Settings
│  │
│  ├─ Navigation Menu ◄───── NAV ITEMS HERE
│  │  └─ Menu Items
│  │     ├─ Home (Internal)
│  │     ├─ About (Internal)
│  │     ├─ Services (Internal)
│  │     └─ Contact (Anchor)
│  │
│  └─ Footer Content
│
├─ 👤 Profile & Practice
└─ 🧩 Content Blocks
```

---

## Navigation Component Structure

```jsx
<Navigation>
  {navItems.map(item => {
    // Determine link based on type
    
    if (item.linkType === 'internal') {
      return <Link to={item.page.slug}>
               {item.label}
             </Link>
    }
    
    if (item.linkType === 'anchor') {
      return <a href={item.anchor}>
               {item.label}
             </a>
    }
    
    if (item.linkType === 'external') {
      return <a href={item.url} target="_blank">
               {item.label}
             </a>
    }
  })}
</Navigation>
```

---

## Data Flow: Loading a Page

```
┌─────────────────────────────────────────────────────────┐
│  1. User Navigation                                     │
│     User clicks nav item or enters URL                  │
└────────────────┬────────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────────────────────────┐
│  2. Router                                              │
│     Matches route pattern                               │
│     Extracts slug (or recognizes root)                  │
└────────────────┬────────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────────────────────────┐
│  3. Fetch Logic                                         │
│     IF route is "/"                                     │
│        → Fetch homePage from Site Settings              │
│     ELSE                                                │
│        → Fetch page by slug                             │
└────────────────┬────────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────────────────────────┐
│  4. Sanity Query                                        │
│     Query Sanity for page data                          │
│     Include: components, meta, settings                 │
└────────────────┬────────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────────────────────────┐
│  5. Page Renderer                                       │
│     Loop through components                             │
│     Render each component type                          │
│     Apply page settings                                 │
└────────────────┬────────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────────────────────────┐
│  6. Display                                             │
│     Show rendered page to user                          │
└─────────────────────────────────────────────────────────┘
```

---

## Navigation State Management

```
┌─────────────────────┐
│  App Initialization │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│  Fetch Site Settings│
│  - Navigation       │
│  - Home Page        │
│  - Contact Info     │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│  Store in State     │
│  (useState/Context) │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│  Pass to Components │
│  - Header/Nav       │
│  - Footer           │
│  - Router           │
└─────────────────────┘
```

---

## Example: Complete Flow

### User Journey: Visit Homepage

```
1. User types: yoursite.com
   ↓
2. Browser requests: /
   ↓
3. React Router: Matches root route
   ↓
4. Component: Fetches Site Settings
   Query: *[_type == "siteSettings"][0].homePage->
   ↓
5. Gets: Home page reference
   Slug: "home"
   Components: [Hero, Quote, Philosophy, ...]
   ↓
6. PageRenderer: Renders components
   - Hero Section with image
   - Identity Quote
   - Philosophy Section
   - Focus Areas
   - CTA Button
   ↓
7. Browser: Displays rendered page
```

### User Journey: Click Navigation

```
1. User clicks: "About" in navigation
   ↓
2. Navigation Component:
   Link type: Internal Page
   Reference: About page
   Slug: "about"
   ↓
3. Navigate to: /about
   ↓
4. Router: Matches /:slug route
   Param: slug = "about"
   ↓
5. Fetch: Page by slug
   Query: *[_type == "page" && slug.current == "about"][0]
   ↓
6. PageRenderer: Renders About page
   ↓
7. Browser: Shows About page
```

---

## Configuration Hierarchy

```
Site Settings (Global)
├─ Home Page ──────────> Determines root URL (/)
├─ Navigation ─────────> Main menu structure
├─ Contact Info ───────> Used in footer/contact
├─ SEO Settings ───────> Meta tags, keywords
└─ Footer Content ─────> Footer links/info

Each Page (Individual)
├─ Title ──────────────> Page name
├─ Slug ───────────────> URL path
├─ Meta Title ─────────> SEO title
├─ Meta Description ───> SEO description
├─ Components ─────────> Page content
├─ Show Header ────────> Display navigation
└─ Show Footer ────────> Display footer
```

---

## Quick Reference: Where Things Are

| What | Where in Sanity | Field |
|------|-----------------|-------|
| **Root Page** | Site Configuration → Site Settings | Home Page |
| **Nav Items** | Site Configuration → Navigation Menu | Menu Items |
| **Site Title** | Site Configuration → Site Settings | Site Title |
| **Contact Info** | Site Configuration → Site Settings | Contact Email/Phone |
| **Page Slugs** | Pages → [Any Page] | Slug |
| **SEO Keywords** | Site Configuration → Site Settings | SEO Settings |

---

This visual guide shows how everything connects! 🎨
