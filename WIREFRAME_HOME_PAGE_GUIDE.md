# Home Page - Wireframe Structure

## ✅ Successfully Replaced!

Your home page has been updated to match the wireframe design exactly.

---

## 📐 Wireframe Structure

Based on your wireframe sketch, the home page now follows this exact structure:

```
┌─────────────────────────────────────────┐
│  HEADER                                 │
│  [Logo]              [Book Consultation]│
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  IDENTITY QUOTE                         │
│  "Healing is not about fixing..."       │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  HERO IMAGE SECTION                     │
│  (Background image)                     │
│  Welcome to Your Healing Journey        │
│  [Book Consultation]                    │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  PHILOSOPHY                             │
│  ┌────────────┬─────────────────────┐   │
│  │  Text      │  Image              │   │
│  │  Content   │  (Upload needed)    │   │
│  └────────────┴─────────────────────┘   │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  FOCUS AREAS                            │
│  ┌──────┬──────┬──────┐                 │
│  │Card 1│Card 2│Card 3│                 │
│  │  🧠  │  💙  │  🤝  │                 │
│  └──────┴──────┴──────┘                 │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  HEADSHOT & PERSONAL STATEMENT          │
│  ┌──────┬────────────────────────────┐  │
│  │Photo │ Statement                  │  │
│  │      │ [Link to Full Bio]         │  │
│  └──────┴────────────────────────────┘  │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  [Book Your Consultation]               │
│  (CTA Button)                           │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  FOOTER                                 │
│  ┌──────┬────────────┬──────────────┐   │
│  │Logo  │ Contact    │  Availability│   │
│  │      │ Info       │  & CTA       │   │
│  │Practice│          │              │   │
│  │Description        │              │   │
│  └──────┴────────────┴──────────────┘   │
└─────────────────────────────────────────┘
```

---

## 🎯 Components Added (9 Total)

### 1. Identity Quote
**Position**: Top of page (after header)
- Quote: "Healing is not about fixing what is broken..."
- No author attribution
- Prominent placement as page intro

### 2. Spacer (Large)
Creates breathing room after quote

### 3. Hero Image Section
**Position**: Main visual impact
- Large height (not full screen)
- Heading: "Welcome to Your Healing Journey"
- Subheading included
- CTA: "Book Consultation"
- **Needs**: Background image upload

### 4. Spacer (Large)

### 5. Philosophy Section
**Position**: Mid-page
- Title: "My Philosophy"
- Two-column layout
- Text content on philosophy/approach
- **Needs**: Side image upload

### 6. Spacer (Large)

### 7. Focus Areas (3 Cards)
**Position**: Services showcase
- Layout: 3 columns
- Cards:
  1. Anxiety & Stress 🧠
  2. Trauma & PTSD 💙
  3. Relationship Issues 🤝

### 8. Spacer (Large)

### 9. Headshot Profile
**Position**: Personal connection
- Name: "Arielle Hastings, LMFT"
- Size: Extra Large
- Shape: Rounded
- **Needs**: Profile photo upload

### 10. Spacer (Medium)

### 11. Personal Statement
**Position**: Bio introduction
- Brief statement about approach
- Link to full bio: "Read Full Biography"
- Links to `/about` page

### 12. Spacer (Large)

### 13. CTA Button
**Position**: End of content
- Text: "Book Your Consultation"
- Links to: `#contact`
- Style: Accent (teal)
- Size: Large
- Centered

### 14. Spacer (Medium)

---

## 📝 What You Need to Do Next

### 1. Upload Images (Priority)

**Hero Background Image:**
```
1. Go to: Pages → Home
2. Find: Hero Image Section component
3. Click: Background Image field
4. Upload: High-res image (1920px+ width)
5. Adjust: Hotspot if needed
6. Save
```

**Philosophy Section Image:**
```
1. In same page
2. Find: Philosophy component
3. Click: Image field
4. Upload: Supporting image
5. Save
```

**Headshot/Profile Photo:**
```
1. In same page
2. Find: Headshot Profile component
3. Click: Profile Image field
4. Upload: Professional headshot
5. Adjust: Hotspot/crop
6. Save
```

### 2. Customize Text Content

All text is placeholder. Update to your actual content:
- Identity quote (or keep as is)
- Hero heading/subheading
- Philosophy text
- Focus area descriptions
- Personal statement

### 3. Verify Navigation

The header automatically shows:
- Logo (from Site Settings)
- "Book Consultation" button (links to #contact)

---

## 🎨 Wireframe Mapping

### From Your Sketch → Sanity Components

| Wireframe Element | Component Type | Notes |
|-------------------|----------------|-------|
| Logo (top left) | Header | From Site Settings |
| Book Consultation (top right) | Header CTA | Automatic in header |
| Identity Quote | IdentityQuote | Below header |
| Hero Image + CTA | HeroSection | Large with overlay |
| Philosophy (text + image) | PhilosophySection | Two columns |
| Focus Areas (3 boxes) | FocusAreas | 3-column grid |
| Headshot | HeadshotProfile | Extra large |
| Personal Statement | PersonalStatement | With bio link |
| Booking CTA | CTAButton | Large, centered |
| Footer | FooterCTA | From config |

---

## 🔧 Customization Options

### Change Hero Size
```
Hero Section component
→ Section Height: large (current)
Options: small, medium, large, screen
```

### Adjust Overlay Darkness
```
Hero Section component
→ Overlay Opacity: 0.4 (current)
Options: 0.0 to 1.0 (lighter to darker)
```

### Change Focus Area Layout
```
Focus Areas component
→ Layout: 3col (current)
Options: 2col, 3col
```

### Reorder Components
```
Use ⠿ drag handle on any component
Drag up or down to reorder
```

### Add More Components
```
Scroll to bottom
Click: + Add item
Choose component type
Configure and save
```

---

## 📱 Responsive Behavior

All components automatically adapt to mobile:
- Hero scales down appropriately
- 3-column cards stack on mobile
- Philosophy section stacks (image on top)
- Headshot + statement stack
- All text sizes scale down

---

## 🎯 Key Differences from Original

The wireframe-based home page is:
- **More focused**: Direct structure matching your design
- **Simpler**: Fewer distractions, clear flow
- **Image-forward**: Hero image for visual impact
- **Personal**: Headshot prominent for connection
- **Action-oriented**: Multiple CTAs for booking

---

## 💡 Design Notes

### Visual Hierarchy
1. **Identity quote** - Sets tone immediately
2. **Hero** - Visual impact + clear message
3. **Philosophy** - Explains approach
4. **Focus areas** - Shows expertise
5. **Personal** - Builds trust (headshot + bio)
6. **CTA** - Clear next step

### Spacing
- Large spacers before major sections
- Medium spacers for subtle breaks
- Creates breathing room
- Guides eye flow

### Color & Style
- Uses your therapy color palette
- Teal accents for CTAs
- Burgundy for text
- Sand/cream backgrounds
- Professional, calming aesthetic

---

## 🚀 View Your New Home Page

### In Sanity Studio
1. Visit: http://localhost:3333
2. Navigate: Pages → Home
3. See all 14 components
4. Upload images
5. Customize text
6. Publish changes

### On Your Site
After implementing frontend:
- Root URL (`/`) shows this page
- All components render in order
- Responsive on all devices
- CTAs link to contact section

---

## 🔄 Making Changes

### Quick Edits
1. Open Home page in Sanity
2. Click any component to expand
3. Edit fields
4. Click Publish

### Add Section
1. Click "+ Add item"
2. Choose component
3. Configure
4. Drag to position
5. Publish

### Remove Section
1. Click × on component
2. Confirm
3. Publish

### Reorder Sections
1. Use ⠿ drag handle
2. Drag to new position
3. Publish

---

## 📊 Component Breakdown

**Interactive Components**: 2
- Hero CTA button
- Bottom CTA button

**Content Components**: 7
- Identity Quote
- Hero
- Philosophy
- Focus Areas
- Headshot
- Personal Statement

**Spacing Components**: 5
- Strategic spacers throughout

**Total**: 14 components

---

## ✨ Next Actions

1. ✅ **View in Sanity** - See the new structure
2. ⬜ **Upload 3 images** - Hero, Philosophy, Headshot
3. ⬜ **Customize text** - Update all content
4. ⬜ **Test CTAs** - Verify links work
5. ⬜ **Publish** - Make it live

---

## 🎉 Success!

Your home page now perfectly matches your wireframe design and is ready for customization!

**Edit now: http://localhost:3333 → Pages → Home**
