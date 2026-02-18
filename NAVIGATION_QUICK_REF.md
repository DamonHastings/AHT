# Navigation & Root Page - Quick Reference

## ✅ What's Configured

Your site now has:
- **Root Page**: Set to Home page (`/home`)
- **Main Navigation**: 4 menu items (Home, About, Services, Contact)
- **Site Settings**: Contact info, SEO, and global config

---

## 🚀 Quick Access

### In Sanity Studio (http://localhost:3333)

```
Site Configuration
├─ Site Settings      ← Root page, contact info, SEO
├─ Navigation Menu    ← Menu items and links
└─ Footer Content     ← Footer configuration
```

---

## 📍 Root Page Management

### What is it?
The page shown at your website's root URL (`/`)

### Current Setup
- **Root Page**: Home page
- **URL**: `/` displays `/home` content

### Change Root Page
1. Go to: **Site Configuration → Site Settings**
2. Find: **Home Page** field
3. Select: Different page
4. Click: **Publish**

**Use Cases:**
- Launch with "Coming Soon" page
- Temporary landing page for campaign
- Switch to different main page

---

## 🧭 Navigation Menu

### Current Navigation
```
┌──────────────────────────────────────┐
│  Home  |  About  |  Services  | Contact │
└──────────────────────────────────────┘
```

### Link Types

| Type | Description | Example |
|------|-------------|---------|
| **Internal Page** | Link to site page | `/about` |
| **Anchor** | Same-page section | `#contact` |
| **External URL** | External site | `https://example.com` |

---

## 📝 Quick Tasks

### Add Menu Item
```
1. Site Configuration → Navigation Menu
2. Menu Items → + Add item
3. Fill in:
   - Label: "FAQ"
   - Link Type: Internal Page
   - Select page: FAQ
4. Publish
```

### Reorder Menu
```
1. Navigation Menu → Menu Items
2. Drag items using ⠿ handle
3. Publish
```

### Add External Link
```
Label: "Book Now"
Link Type: External URL
URL: https://calendly.com/your-link
Open in New Tab: ✓
```

### Change Root Page
```
Site Settings → Home Page
Select: About page (or any page)
Publish
```

---

## 💻 Frontend Code Examples

### Fetch Site Settings
```javascript
const settings = await client.fetch(`
  *[_type == "siteSettings"][0] {
    homePage->{ slug, title },
    navigation->{ items[] },
    contactEmail,
    contactPhone
  }
`);
```

### Fetch Navigation
```javascript
const nav = await client.fetch(`
  *[_type == "siteSettings"][0].navigation->{
    items[]{
      label,
      linkType,
      anchor,
      internalPage->{ slug },
      externalUrl,
      openInNewTab
    }
  }
`);
```

### Get Root Page
```javascript
const homePage = await client.fetch(`
  *[_type == "siteSettings"][0].homePage->{
    title,
    slug,
    components,
    metaTitle,
    metaDescription
  }
`);
```

### Build Nav Component
```jsx
function Navigation({ items }) {
  return (
    <nav>
      {items.map((item) => {
        const href = 
          item.linkType === 'anchor' ? item.anchor :
          item.linkType === 'internal' ? `/${item.internalPage.slug.current}` :
          item.externalUrl;

        return (
          <a 
            href={href}
            target={item.openInNewTab ? '_blank' : '_self'}
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

## 🔧 Routing Setup

### Root Route
```jsx
// Show home page at /
<Route path="/" element={
  <DynamicPage pageSlug={siteSettings.homePage.slug} />
} />
```

### Dynamic Routes
```jsx
function DynamicPage() {
  const { slug } = useParams();
  
  // If no slug, get home page from settings
  // Otherwise, get page by slug
  
  return <PageRenderer pageData={page} />;
}

<Routes>
  <Route path="/" element={<DynamicPage />} />
  <Route path="/:slug" element={<DynamicPage />} />
</Routes>
```

---

## 🎯 Best Practices

### Navigation
✅ Keep to 5-7 items max  
✅ Use clear, concise labels  
✅ Most important items first  
✅ Test on mobile devices  
✅ Ensure keyboard navigation  

### Root Page
✅ Choose your most important page  
✅ Optimize for SEO  
✅ Fast loading  
✅ Clear value proposition  
✅ Strong call-to-action  

---

## 📊 Current Setup

### Site Settings
```
Title: Healing Minds Therapy
Root Page: Home (/home)
Email: contact@healingminds.com
Phone: (555) 123-4567
```

### Navigation Items
```
1. Home → /home (internal)
2. About → /about (internal)
3. Services → /services (internal)
4. Contact → #contact (anchor)
```

---

## 🛠️ Commands

```bash
# Setup navigation & settings
cd sanity
npm run seed-navigation

# Setup everything (pages + navigation)
npm run seed-all

# Start Sanity Studio
npm run dev
```

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Nav not showing | Check Site Settings has nav reference |
| Root page 404 | Verify homePage is set in settings |
| Links broken | Check page slugs match URLs |
| Changes not live | Clear cache, republish |

---

## 📚 Full Documentation

For complete details, see: **NAVIGATION_ROOT_PAGE_GUIDE.md**

---

## ✨ You Can Now

✅ Set any page as root/home page  
✅ Manage navigation menu in Sanity  
✅ Add internal, anchor, and external links  
✅ Reorder navigation items  
✅ Configure site-wide settings  
✅ Fetch navigation in frontend  

**Edit in Sanity Studio: http://localhost:3333** 🚀
