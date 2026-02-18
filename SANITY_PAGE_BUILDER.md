# Sanity Page Builder System

## Overview
A flexible page builder system that allows you to create and manage pages in Sanity CMS using a component-based approach. Build custom pages by adding and arranging components, or use pre-configured page templates.

## Features

### ✅ What You Can Do

1. **Build Custom Pages**
   - Add/remove/reorder components visually
   - Mix and match different component types
   - Create unique page layouts without code

2. **Use Page Templates**
   - Pre-configured templates for common pages
   - Templates include: Home, About, Services, Contact
   - Quick setup with template defaults

3. **Manage Page Components**
   - 10 different component types available
   - Each component has customizable fields
   - Preview components as you build

4. **SEO & Publishing**
   - Meta titles and descriptions
   - URL slug management
   - Draft/published states
   - Publish date tracking

## Getting Started

### 1. Start Sanity Studio

```bash
cd sanity
npm run dev
```

Access Sanity Studio at: `http://localhost:3333`

### 2. Create a New Page

1. Navigate to **Pages** in the sidebar
2. Click **"Create new Page"**
3. Fill in basic info:
   - **Page Title**: Internal name
   - **URL Slug**: Generate from title (e.g., "about")
   - **Meta Title**: For SEO and browser tabs
   - **Meta Description**: For search results

### 3. Choose Page Type

#### Option A: Custom Page (Component Builder)
1. Select **Template**: "Custom (Build with Components)"
2. Click **"Add item"** under **Page Components**
3. Choose component types and configure them
4. Drag to reorder components

#### Option B: Template-Based Page
1. Select **Template**: Home/About/Services/Contact
2. Fill in the template-specific fields
3. Components auto-configured based on template

### 4. Publish Your Page

1. Toggle **Published** to `true`
2. Save the document
3. Page is now live on your website

## Available Components

### 1. Hero Section
Large header with background image, heading, and CTA button.

**Fields:**
- Heading (required)
- Subheading
- Background Image
- Overlay Color (dark/light/burgundy/teal/none)
- Overlay Opacity (0-1)
- CTA Button (text, link, style)
- Content Alignment (left/center/right)
- Section Height (small/medium/large/full screen)

**Best For:** Page intros, landing sections

---

### 2. Identity Quote
Inspirational or defining quote with attribution.

**Fields:**
- Quote Text (required)
- Author Name

**Best For:** Mission statements, inspiration, page intros

---

### 3. Philosophy Section
Two-column layout with text content and optional image.

**Fields:**
- Section Title
- Content (rich text)
- Image

**Best For:** Philosophy, approach, about sections

---

### 4. Focus Areas
Grid of cards displaying focus areas or services.

**Fields:**
- Section Title
- Focus Area Cards (array)
  - Title
  - Description
  - Icon (emoji)
- Layout (2 or 3 columns)

**Best For:** Services, specialties, focus areas

---

### 5. Headshot & Profile
Professional profile image with name.

**Fields:**
- Profile Image (required)
- Name
- Image Shape (rounded/circle/square)
- Size (sm/md/lg/xl)

**Best For:** About pages, team profiles

---

### 6. Personal Statement
Biography or statement with optional "Read Full Bio" link.

**Fields:**
- Statement Text (required)
- Show Full Bio Link (toggle)
- Full Bio Link (URL or anchor)

**Best For:** Bios, introductions, about sections

---

### 7. Text Content
Flexible text section with title and rich text content.

**Fields:**
- Section Title
- Content (rich text)
- Text Alignment (left/center/right)

**Best For:** General content, articles, descriptions

---

### 8. CTA Button
Call-to-action button with link.

**Fields:**
- Button Text (required)
- Button Link (required)
- Button Style (primary/secondary/accent/outline)
- Size (sm/md/lg)
- Alignment (left/center/right)

**Best For:** Calls to action, contact prompts, navigation

---

### 9. Image Gallery
Grid or masonry layout of images with captions.

**Fields:**
- Gallery Title
- Images (array)
  - Image
  - Caption
  - Alt Text
- Layout (2/3/4 column grid or masonry)

**Best For:** Photo galleries, office tours, portfolio

---

### 10. Spacer
Vertical spacing between sections.

**Fields:**
- Spacing Size (sm/md/lg/xl)

**Best For:** Adding breathing room between components

---

## Page Templates

### Home Page Template
Pre-configured home page with hero, quote, philosophy, focus areas, and personal statement.

**Template Fields:**
- Hero Heading & Subheading
- Hero Background Image
- Welcome Quote & Author
- Philosophy Title, Content & Image
- Toggle: Show Focus Areas
- Toggle: Show Personal Statement

---

### About Page Template
About page with intro, profile image, full biography, and education.

**Template Fields:**
- Page Heading
- Introduction Text
- Profile Image
- Full Biography
- Education & Training (array)
- Toggle: Show Qualifications

---

### Services Page Template
Services page with intro and detailed service listings.

**Template Fields:**
- Page Heading
- Introduction
- Services Offered (array)
  - Service Name
  - Description
  - Duration
  - Fee
- Toggle: Show Treatment Approach
- Toggle: Show Specialties

---

### Contact Page Template
Contact page with form, hours, and additional info.

**Template Fields:**
- Page Heading
- Introduction Text
- Toggle: Show Contact Form
- Toggle: Show Location Map
- Office Hours (array)
- Additional Information

---

## Sanity Studio Organization

The studio is organized into these sections:

### 📄 Pages
- **All Pages**: View all pages
- **Published Pages**: Only live pages
- **Draft Pages**: Unpublished pages

### ⚙️ Site Configuration
- **Site Settings**: Global site settings
- **Navigation**: Menu configuration
- **Footer Content**: Footer configuration

### 👤 Profile & Practice
- **Therapist Profile**: Therapist information
- **Practice Details**: Location, fees, services
- **Qualifications**: Degrees, certifications
- **Specialties**: Treatment specialties
- **Treatment Approaches**: Therapeutic approaches

### 🧩 Content Blocks
Reusable content blocks for cross-page use

### 🔗 Social Links
Social media links and profiles

## Frontend Integration

### Using the PageRenderer Component

```jsx
import PageRenderer from './components/PageRenderer';
import { client } from './utils/sanityClient';

// Fetch page data
const pageData = await client.fetch(
  `*[_type == "page" && slug.current == $slug][0]`,
  { slug: 'about' }
);

// Render the page
<PageRenderer 
  pageData={pageData}
  showHeader={true}
  showFooter={true}
/>
```

### Fetching Pages from Sanity

```javascript
// Get all published pages
const pages = await client.fetch(`
  *[_type == "page" && published == true] {
    title,
    slug,
    metaTitle,
    metaDescription,
    template,
    components,
    showHeader,
    showFooter
  }
`);

// Get specific page by slug
const page = await client.fetch(`
  *[_type == "page" && slug.current == $slug && published == true][0]
`, { slug: 'about' });
```

### Dynamic Routing Example (React Router)

```jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PageRenderer from './components/PageRenderer';
import { client } from './utils/sanityClient';

function DynamicPage() {
  const { slug } = useParams();
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "page" && slug.current == $slug && published == true][0]`,
        { slug }
      )
      .then(setPageData)
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (!pageData) return <div>Page not found</div>;

  return <PageRenderer pageData={pageData} />;
}
```

## Best Practices

### Page Structure
1. **Start with a Hero**: Grab attention with a strong hero section
2. **Use Spacers**: Add breathing room between sections
3. **Vary Layouts**: Mix text-heavy and visual components
4. **End with CTA**: Guide users to take action

### Component Order
```
Hero Section
↓
Identity Quote (optional)
↓
Spacer (medium)
↓
Text Content / Philosophy Section
↓
Spacer (medium)
↓
Focus Areas
↓
Spacer (large)
↓
Headshot & Personal Statement (side by side)
↓
Spacer (medium)
↓
CTA Button
```

### SEO Optimization
- **Meta Title**: 50-60 characters, include key terms
- **Meta Description**: 150-160 characters, compelling summary
- **URL Slug**: Short, descriptive, lowercase, hyphen-separated
- **Image Alt Text**: Descriptive for all images

### Performance
- Use optimized images (Sanity handles this automatically)
- Limit gallery images to 12 or fewer per page
- Use spacers instead of empty components

### Content Strategy
- Keep hero headings to 5-10 words
- Limit focus areas to 3-6 items
- Break long text into multiple sections
- Use quotes to break up text-heavy pages

## Troubleshooting

### Component Not Showing
1. Check if page is published
2. Verify component has required fields filled
3. Check browser console for errors
4. Clear cache and refresh

### Images Not Loading
1. Ensure images are uploaded to Sanity
2. Check `urlFor` configuration in `sanityClient.js`
3. Verify image fields are not empty

### Template Not Working
1. Verify template fields are filled correctly
2. Check that template is selected
3. Ensure associated content (specialties, qualifications) exists

### Styling Issues
1. Verify Tailwind CSS is properly configured
2. Check component imports in PageRenderer
3. Ensure design system components are available

## Extending the System

### Adding New Components

1. **Create Component Schema** (`sanity/schemas/pageComponents.js`)
```javascript
export const myNewComponent = {
  name: 'myNewComponent',
  title: 'My New Component',
  type: 'object',
  fields: [
    // Define fields
  ],
  preview: {
    // Define preview
  },
};
```

2. **Add to Schema Index** (`sanity/schemas/index.js`)
```javascript
import { myNewComponent } from './pageComponents'

export const schemaTypes = [
  // ... other schemas
  myNewComponent,
]
```

3. **Add to Page Schema** (`sanity/schemas/page.js`)
```javascript
components: {
  type: 'array',
  of: [
    // ... existing components
    { type: 'myNewComponent' },
  ],
}
```

4. **Add Renderer** (`frontend/src/components/PageRenderer.jsx`)
```javascript
case 'myNewComponent':
  return (
    <MyNewComponent
      key={key}
      {...component}
    />
  );
```

### Creating New Templates

1. Add template schema to `sanity/schemas/pageTemplates.js`
2. Add to schema index
3. Add to page template options
4. Create template rendering logic if needed

## Support & Resources

- **Sanity Documentation**: https://www.sanity.io/docs
- **Portable Text**: https://github.com/portabletext/react-portabletext
- **Design System**: See `WIREFRAME_COMPONENTS.md`
- **Hero Component**: See `HERO_COMPONENT.md`

## Next Steps

1. ✅ Start Sanity Studio
2. ✅ Create your first page
3. ✅ Add components and arrange them
4. ✅ Publish and view on your site
5. ✅ Create additional pages as needed
6. ✅ Customize components to match your brand

---

**Last Updated**: February 2026
**System Version**: 1.0
