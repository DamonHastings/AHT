# Managing Root Page & Navigation

## Overview

Your site now has a complete navigation system with:
- ✅ Root page management (homepage)
- ✅ Main navigation menu with 4 items
- ✅ Site-wide settings
- ✅ Reference-based page linking

---

## Root Page Management

### What is the Root Page?

The **root page** is the page displayed when users visit your website's base URL (e.g., `yoursite.com/`). This is typically your home page.

### How It Works

In **Site Settings**, you select which page should be the root/home page:

```
Site Settings
├─ Home Page → [Reference to "Home" page]
└─ This page displays at the root URL (/)
```

### Setting Your Root Page

1. **In Sanity Studio** (http://localhost:3333)
2. Navigate to: **Site Configuration → Site Settings**
3. Find: **Home Page** field
4. Click and select: **Home** (or any page you want as root)
5. Click: **Publish**

**Current Setup:**
- Root page: `/home` page
- When users visit `/`, they see the Home page

### Changing the Root Page

You can change the root page at any time:

```
Site Settings
└─ Home Page: [Select different page]
   
Options:
- Home page (default)
- About page
- Services page
- Any custom page
```

**Example Use Cases:**
- Coming soon page during launch
- Landing page for campaign
- Portal/dashboard for logged-in users

---

## Navigation Management

### Navigation Structure

Your navigation is managed in: **Site Configuration → Navigation Menu**

```
Main Navigation
├─ Home → /home (internal page)
├─ About → /about (internal page)
├─ Services → /services (internal page)
└─ Contact → #contact (anchor link)
```

### Navigation Link Types

#### 1. Internal Page Link
Links to pages within your site.

**Setup:**
- Link Type: **Internal Page**
- Internal Page: **Select from your pages**
- Result: Links to `/page-slug`

**Example:**
```
Label: "About"
Link Type: Internal Page
Internal Page: [About Me page]
→ Links to: /about
```

#### 2. Anchor Link
Links to a section on the same page.

**Setup:**
- Link Type: **Anchor Link**
- Anchor ID: **#section-id**
- Result: Scrolls to section

**Example:**
```
Label: "Contact"
Link Type: Anchor
Anchor ID: #contact
→ Scrolls to: Contact section
```

#### 3. External URL
Links to external websites.

**Setup:**
- Link Type: **External URL**
- External URL: **https://example.com**
- Open in New Tab: ✓ (optional)

**Example:**
```
Label: "Book Appointment"
Link Type: External
External URL: https://calendly.com/your-link
Open in New Tab: ✓
→ Opens: External booking site
```

---

## Managing Navigation in Sanity

### Step 1: Access Navigation

1. Open Sanity Studio: http://localhost:3333
2. Navigate to: **Site Configuration → Navigation Menu**
3. You'll see: **Main Navigation** document

### Step 2: Add Menu Item

1. Scroll to: **Menu Items**
2. Click: **+ Add item**
3. Fill in fields:
   - **Label**: Display text (e.g., "About")
   - **Link Type**: Choose type
   - **Link**: Configure based on type
4. Click: **Publish**

### Step 3: Reorder Items

1. Use **⠿** drag handle on each item
2. Drag to reorder
3. Click: **Publish**

### Step 4: Edit Item

1. Click to expand any menu item
2. Edit fields
3. Click: **Publish**

### Step 5: Delete Item

1. Click **×** on the item
2. Confirm deletion
3. Click: **Publish**

---

## Common Navigation Patterns

### Standard Header Navigation
```
Home | About | Services | Contact
```

Setup:
```javascript
Items:
1. Home → Internal: Home page
2. About → Internal: About page
3. Services → Internal: Services page
4. Contact → Anchor: #contact
```

### Navigation with Dropdowns
*Note: Current schema doesn't support dropdowns, but can be extended*

For now, use flat navigation:
```
Home | About | Services | FAQ | Resources | Contact
```

### Mobile-First Navigation
All nav items work on mobile - they'll be converted to a hamburger menu by your frontend.

### CTA in Navigation
```
Home | About | Services | [Book Now]
```

Setup the CTA as:
```
Label: "Book Now"
Link Type: External
URL: https://your-booking-link.com
Open in New Tab: ✓
```

---

## Site Settings Overview

Access: **Site Configuration → Site Settings**

### Key Settings

#### 1. **Home Page** (Root Page)
Select which page displays at `/`

Current: Home page (`/home`)

#### 2. **Site Title**
Main site title used in browser tabs and meta tags

Current: "Healing Minds Therapy"

#### 3. **Site Description**
Meta description for SEO

Current: "Professional mental health services..."

#### 4. **Contact Information**
- Email: contact@healingminds.com
- Phone: (555) 123-4567
- Address: 123 Main Street...

#### 5. **SEO Settings**
- Keywords: therapy, mental health, counseling...
- Author: Healing Minds Therapy

#### 6. **References**
- Navigation Menu: Links to your navigation
- Footer Content: Links to footer config
- Social Links: Links to social media config

---

## Frontend Integration

### Fetching Site Settings

```javascript
import { client } from './utils/sanityClient';

// Get site settings with all references
const settings = await client.fetch(`
  *[_type == "siteSettings"][0] {
    title,
    description,
    homePage->{
      slug,
      title
    },
    navigation->{
      title,
      items[]{
        label,
        linkType,
        anchor,
        internalPage->{
          slug,
          title
        },
        externalUrl,
        openInNewTab
      }
    },
    contactEmail,
    contactPhone,
    address
  }
`);
```

### Fetching Root Page

```javascript
// Get the root/home page
const homePage = await client.fetch(`
  *[_type == "siteSettings"][0].homePage->{
    _id,
    title,
    slug,
    components,
    metaTitle,
    metaDescription
  }
`);
```

### Building Navigation Component

```jsx
import { useEffect, useState } from 'react';
import { client } from './utils/sanityClient';

function Navigation() {
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "siteSettings"][0].navigation->items`)
      .then(setNavItems);
  }, []);

  return (
    <nav>
      {navItems?.map((item, idx) => {
        let href = '#';
        
        // Determine href based on link type
        if (item.linkType === 'anchor') {
          href = item.anchor;
        } else if (item.linkType === 'internal' && item.internalPage?.slug) {
          href = `/${item.internalPage.slug.current}`;
        } else if (item.linkType === 'external') {
          href = item.externalUrl;
        }

        return (
          <a
            key={idx}
            href={href}
            target={item.openInNewTab ? '_blank' : '_self'}
            rel={item.openInNewTab ? 'noopener noreferrer' : undefined}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
```

---

## Routing Setup

### Option 1: Root Route (/)

Display the selected home page at the root:

```jsx
// App.jsx or Routes.jsx
import { useEffect, useState } from 'react';
import { client } from './utils/sanityClient';
import PageRenderer from './components/PageRenderer';

function RootPage() {
  const [homePage, setHomePage] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "siteSettings"][0].homePage->{
        _id, title, slug, components, metaTitle, metaDescription
      }`)
      .then(setHomePage);
  }, []);

  if (!homePage) return <div>Loading...</div>;

  return <PageRenderer pageData={homePage} />;
}

// In your router:
<Route path="/" element={<RootPage />} />
```

### Option 2: Dynamic Routing

Handle all page routes dynamically:

```jsx
// React Router example
import { Routes, Route, useParams } from 'react-router-dom';

function DynamicPage() {
  const { slug } = useParams();
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    // If no slug, get home page
    if (!slug) {
      client
        .fetch(`*[_type == "siteSettings"][0].homePage->`)
        .then(setPageData);
    } else {
      // Otherwise get page by slug
      client
        .fetch(`*[_type == "page" && slug.current == $slug][0]`, { slug })
        .then(setPageData);
    }
  }, [slug]);

  return <PageRenderer pageData={pageData} />;
}

// Routes:
<Routes>
  <Route path="/" element={<DynamicPage />} />
  <Route path="/:slug" element={<DynamicPage />} />
</Routes>
```

---

## Best Practices

### Navigation

1. **Keep It Simple**
   - 5-7 items max in main navigation
   - Use clear, concise labels
   - Most important items first

2. **Mobile Friendly**
   - Test on mobile devices
   - Ensure touch targets are large enough
   - Consider hamburger menu for 4+ items

3. **Accessibility**
   - Use semantic HTML (`<nav>`, `<a>`)
   - Ensure keyboard navigation works
   - Add ARIA labels where needed

4. **Performance**
   - Cache navigation data
   - Fetch once, reuse across pages
   - Preload linked pages

### Root Page

1. **Choose Wisely**
   - Usually your most important page
   - Should represent your brand/service
   - Optimized for conversions

2. **SEO Optimization**
   - Strong meta title and description
   - Target your main keywords
   - Include clear value proposition

3. **Fast Loading**
   - Optimize images
   - Minimize components
   - Test performance

---

## Common Tasks

### Change Home Page to Different Page

```
1. Go to: Site Configuration → Site Settings
2. Find: Home Page
3. Select: Different page (e.g., About)
4. Publish
5. Root URL now shows selected page
```

### Add New Navigation Item

```
1. Go to: Site Configuration → Navigation Menu
2. Scroll to: Menu Items
3. Click: + Add item
4. Configure:
   - Label: "Resources"
   - Link Type: Internal Page
   - Internal Page: [Select page]
5. Publish
```

### Create Dropdown Menu

*Not supported yet - future enhancement*

Workaround: Create submenu using:
- Anchor links to sections
- Separate pages with clear naming
- External links to resources

### Add External Booking Link

```
1. Go to: Navigation Menu
2. Add item:
   - Label: "Book Appointment"
   - Link Type: External URL
   - URL: https://calendly.com/your-link
   - Open in New Tab: ✓
3. Publish
```

---

## Troubleshooting

### Navigation Not Showing

1. Check Site Settings has navigation reference
2. Verify navigation has items
3. Check frontend is fetching navigation
4. Clear cache and refresh

### Root Page Not Loading

1. Verify Site Settings has homePage set
2. Check page is published
3. Verify page has components
4. Check routing configuration

### Links Not Working

1. For internal: Check page slug is correct
2. For anchor: Verify section ID exists
3. For external: Test URL directly
4. Check for typos in configuration

### Page Not Found (404)

1. Verify page slug matches URL
2. Check page is published
3. Verify routing handles slug correctly
4. Check for trailing slashes

---

## Scripts Available

```bash
# Seed navigation and settings
npm run seed-navigation

# Seed pages, then navigation
npm run seed-all

# View in Sanity Studio
npm run dev
# → http://localhost:3333
```

---

## What Was Configured

✅ **Site Settings**
- Home page set to: `/home`
- Contact info configured
- SEO keywords added

✅ **Main Navigation**
- 4 menu items configured:
  - Home → /home
  - About → /about
  - Services → /services
  - Contact → #contact

✅ **Schema Updates**
- Home page reference in Site Settings
- Page references in Navigation
- Proper link type handling

---

## Next Steps

1. ✅ View Site Settings in Studio
2. ✅ Test navigation in Studio
3. ✅ Customize contact information
4. ✅ Add your logo
5. ✅ Configure social links
6. ✅ Implement navigation in frontend

---

## Resources

- **Site Settings**: Site Configuration → Site Settings
- **Navigation**: Site Configuration → Navigation Menu
- **Pages**: Pages → All Pages
- **Studio**: http://localhost:3333

---

**Your navigation and root page are now fully configured!** 🎉
