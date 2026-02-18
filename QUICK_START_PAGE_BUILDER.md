# Sanity Page Builder - Quick Start Guide

## 🚀 5-Minute Setup

### Step 1: Start Sanity Studio (1 min)

```bash
cd sanity
npm run dev
```

Visit: `http://localhost:3333`

### Step 2: Create Your First Page (2 min)

1. Click **Pages** in sidebar
2. Click **Create new Page**
3. Fill in:
   - **Title**: "About Me"
   - **Slug**: Click "Generate" (creates "about-me")
   - **Template**: Select "Custom (Build with Components)"

### Step 3: Add Components (2 min)

Click **Add item** under **Page Components** and add:

1. **Hero Section**
   - Heading: "Welcome to My Practice"
   - Subheading: "Compassionate therapy for your needs"
   - Upload background image (or skip)
   - CTA Button Text: "Book Consultation"

2. **Identity Quote**
   - Quote: "Healing is a journey, not a destination"
   - Author: Your name

3. **Personal Statement**
   - Statement: Write a brief intro about yourself

4. **CTA Button**
   - Text: "Schedule a Session"
   - Link: "#contact"

### Step 4: Publish (30 seconds)

1. Toggle **Published** to ON
2. Click **Publish**
3. Done! 🎉

---

## 📋 Common Page Layouts

### Home Page
```
1. Hero Section (full screen)
2. Identity Quote
3. Philosophy Section
4. Focus Areas (3 columns)
5. Headshot & Personal Statement
6. CTA Button
```

### About Page
```
1. Hero Section (medium height)
2. Text Content (introduction)
3. Spacer (medium)
4. Headshot & Personal Statement (side by side)
5. Text Content (biography)
6. Focus Areas (specialties)
7. CTA Button
```

### Services Page
```
1. Hero Section (small height)
2. Text Content (intro)
3. Focus Areas (services - 2 columns)
4. Spacer (large)
5. Philosophy Section
6. CTA Button
```

### Contact Page
```
1. Hero Section (small)
2. Text Content (contact info)
3. Spacer (medium)
4. CTA Button (multiple - phone, email, form)
```

---

## 🎨 Component Combinations

### Two-Column Layout
```
Grid container with:
- Headshot Profile (left)
- Personal Statement (right)
```

### Three-Column Cards
```
Focus Areas Component
- Set layout to "3 Columns"
- Add 3-6 focus area cards
```

### Full-Width Hero
```
Hero Section
- Height: "Full Screen"
- Alignment: "Center"
- Background image with dark overlay
```

---

## ⚡ Pro Tips

### Visual Hierarchy
- Use **Spacers** liberally (medium between sections, large before CTAs)
- Start sections with a title (in component or separate Text Content)
- Alternate text-heavy and visual components

### Performance
- Optimize images before uploading (max 2000px width)
- Use 3-6 focus areas maximum per section
- Keep galleries to 12 images or fewer

### Content Writing
- **Hero Headings**: 5-10 words max
- **Subheadings**: 1-2 sentences
- **CTAs**: 2-4 words, action-oriented ("Book Now", "Get Started")
- **Quotes**: 1-3 sentences

### Reusability
- Create **Content Blocks** for repeated content
- Use **Templates** for similar page structures
- Reference existing **Specialties** and **Qualifications**

---

## 🔧 Quick Reference

### Component Purposes

| Component | Best For | Typical Position |
|-----------|----------|------------------|
| Hero Section | Page intro, attention | Top of page |
| Identity Quote | Inspiration, mission | After hero or between sections |
| Philosophy Section | Detailed explanations | Mid-page |
| Focus Areas | Services, specialties | Mid-page |
| Headshot Profile | Personal connection | Mid-page |
| Personal Statement | Biography, intro | Mid-page |
| Text Content | General information | Anywhere |
| CTA Button | Calls to action | End of sections |
| Image Gallery | Visual content | Mid to end |
| Spacer | Breathing room | Between sections |

### Button Styles

| Style | Color | When to Use |
|-------|-------|-------------|
| Accent | Teal | Primary CTA, most important |
| Primary | Burgundy | Important actions |
| Secondary | Gray | Less important actions |
| Outline | Border only | Subtle actions |

### Image Shapes

| Shape | Best For |
|-------|----------|
| Circle | Professional headshots |
| Rounded | General profile photos |
| Square | Formal portraits |

---

## 🐛 Common Issues

### "Component not rendering"
- ✅ Check page is published
- ✅ Verify required fields are filled
- ✅ Refresh the page

### "Image not showing"
- ✅ Upload image to Sanity
- ✅ Save the page after uploading
- ✅ Wait for image processing

### "CTA button not working"
- ✅ Add link in button configuration
- ✅ Use `#contact` for anchors
- ✅ Use full URLs for external links

---

## 📚 Learn More

- **Full Documentation**: See `SANITY_PAGE_BUILDER.md`
- **Component Library**: See `WIREFRAME_COMPONENTS.md`
- **Hero Component**: See `HERO_COMPONENT.md`

---

## ✨ Example: Complete Home Page

```
Component Order:

1. Hero Section
   - Full screen
   - Heading: "Find Your Path to Wellness"
   - Subheading: "Compassionate, evidence-based therapy"
   - Background image
   - Dark overlay (0.5 opacity)
   - CTA: "Book Free Consultation"

2. Identity Quote
   - Quote: "The greatest glory in living lies not in never falling, but in rising every time we fall."
   - Author: "Nelson Mandela"

3. Spacer
   - Size: Medium

4. Philosophy Section
   - Title: "My Philosophy"
   - Content: Your philosophy text
   - Image: Office or calming scene

5. Spacer
   - Size: Medium

6. Focus Areas
   - Title: "Focus Areas"
   - Layout: 3 Columns
   - Areas:
     * Anxiety & Stress 🧠
     * Trauma & PTSD 💙
     * Relationship Issues 🤝

7. Spacer
   - Size: Large

8. [Container with Headshot + Personal Statement side by side]
   - Headshot: Large, rounded shape
   - Statement: Brief bio with "Read Full Bio" link

9. Spacer
   - Size: Medium

10. CTA Button
    - Text: "Ready to Begin?"
    - Link: "#contact"
    - Style: Accent
    - Size: Large
    - Alignment: Center
```

**Result**: Professional, engaging home page in 5 minutes!

---

**Happy Building! 🎉**
