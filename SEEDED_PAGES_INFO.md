# Seeded Sample Pages ✅

## What Was Created

Three complete, professional sample pages have been successfully seeded into your Sanity CMS:

### 1. 🏠 Home Page (`/home`)
**Complete landing page with:**
- Full-screen hero with heading and CTA
- Inspirational quote from Nelson Mandela
- Philosophy section with your approach
- 3 Focus area cards (Anxiety, Trauma, Relationships)
- Personal statement with link to About page
- Final CTA button

**Meta Info:**
- Title: "Home | Healing Minds Therapy"
- Description: SEO-optimized for search engines
- Status: Published ✓

---

### 2. 👤 About Page (`/about`)
**Comprehensive about page with:**
- Medium-height hero
- Welcome section introducing your practice
- Detailed background and credentials
- Philosophy section with therapeutic approach
- 6 Specialization cards:
  - Anxiety Disorders 🌊
  - Depression ☀️
  - Trauma & PTSD 💚
  - Relationship Issues 💑
  - Life Transitions 🌱
  - Self-Esteem ✨
- Inspirational quote from Socrates
- CTA to schedule consultation

**Meta Info:**
- Title: "About | Healing Minds Therapy"
- Description: SEO-optimized
- Status: Published ✓

---

### 3. 💼 Services Page (`/services`)
**Detailed services page with:**
- Large hero with teal overlay
- Introduction to comprehensive care
- 6 Service cards (2-column layout):
  - Individual Therapy 🧘
  - Couples Therapy 💑
  - Anxiety Treatment 🌊
  - Depression Treatment ☀️
  - Trauma Therapy 💚
  - Stress Management 🧘‍♀️
- Session information (format, availability, payment)
- Treatment approach philosophy section
- Getting started guide
- CTA button
- Final inspirational quote

**Meta Info:**
- Title: "Services | Healing Minds Therapy"
- Description: SEO-optimized
- Status: Published ✓

---

## View Your Pages

### In Sanity Studio
1. Visit: **http://localhost:3333**
2. Navigate to: **Pages → All Pages**
3. You'll see all three pages listed with ✓ (published)

### Edit a Page
1. Click on any page (Home, About Me, or Services)
2. Modify text, add/remove components, change images
3. Click **Publish** to save changes

---

## Page Structure Overview

### Home Page Components (9 total)
```
1. Hero Section (full screen)
2. Identity Quote
3. Spacer (medium)
4. Philosophy Section
5. Spacer (medium)
6. Focus Areas (3 columns)
7. Spacer (large)
8. Personal Statement
9. Spacer (medium)
10. CTA Button
```

### About Page Components (11 total)
```
1. Hero Section (medium)
2. Spacer
3. Text Content (Welcome)
4. Spacer (large)
5. Text Content (Background)
6. Spacer
7. Philosophy Section
8. Spacer (large)
9. Focus Areas (6 specializations, 3 columns)
10. Spacer
11. Identity Quote
12. Spacer
13. CTA Button
```

### Services Page Components (12 total)
```
1. Hero Section (large)
2. Spacer
3. Text Content (Introduction)
4. Spacer (large)
5. Focus Areas (6 services, 2 columns)
6. Spacer (large)
7. Text Content (Session Info)
8. Spacer
9. Philosophy Section
10. Spacer (large)
11. Text Content (Getting Started)
12. Spacer
13. CTA Button
14. Spacer
15. Identity Quote
```

---

## Customizing the Sample Pages

### Quick Customizations

#### 1. Update Text Content
- Click on any component
- Edit the text fields
- Save changes

#### 2. Add Your Photos
- Click on image fields in Hero or Philosophy sections
- Upload your photos
- Adjust hotspot/crop as needed

#### 3. Change Colors
- Hero overlays can be: dark, light, burgundy, teal, or none
- Button variants: accent (teal), primary (burgundy), secondary, outline

#### 4. Reorder Components
- Use the **⠿** drag handle
- Drag components up or down
- Rearrange to your preference

#### 5. Add More Components
- Click **+ Add item** at bottom
- Choose from 10 component types
- Configure and save

#### 6. Delete Components
- Click the **[×]** button on any component
- Confirm deletion

---

## Sample Content Details

### Text Content Used

All sample text is realistic and professional, including:
- Welcoming, empathetic tone
- Evidence-based therapy references (CBT, DBT)
- Common specialties and services
- Professional qualifications mentions
- Clear call-to-action language

### Icons Used

The sample pages use emoji icons for visual interest:
- 🧠 Brain (Anxiety)
- 💙 Blue Heart (Trauma/PTSD)
- 🤝 Handshake (Relationships)
- 🌊 Wave (Anxiety Disorders)
- ☀️ Sun (Depression)
- 💚 Green Heart (Trauma)
- 💑 Couple (Relationships)
- 🌱 Seedling (Growth/Transitions)
- ✨ Sparkles (Self-Esteem)
- 🧘 Person Meditating (Individual Therapy)
- 🧘‍♀️ Woman Meditating (Stress Management)

Feel free to change these to any emoji or remove them!

---

## Next Steps

### 1. Customize Your Pages (15-30 minutes)
- Replace sample text with your actual content
- Upload your photos
- Adjust focus areas to match your specialties
- Update credentials and background info

### 2. Add Background Images (5-10 minutes)
- Click on Hero components
- Upload high-quality images (1920px+ width recommended)
- Adjust overlay opacity for text readability

### 3. Test Your Pages (5 minutes)
- View pages on your website
- Test on mobile devices
- Check all CTAs work correctly

### 4. Create Additional Pages (Optional)
- Contact page
- FAQ page
- Blog pages
- Resources page

---

## Re-seeding Pages

If you want to restore the sample pages or re-run the seed:

```bash
cd sanity
npm run seed-pages
```

**Note**: This will update existing pages with the same IDs, so any changes you made will be overwritten. If you want to keep your changes, don't re-run the seed script.

---

## Troubleshooting

### "Pages not showing in Studio"
1. Make sure Sanity Studio is running: `npm run dev`
2. Navigate to: Pages → All Pages
3. Refresh the page

### "Can't see images"
- Sample pages don't include actual images (only structure)
- You need to upload your own images
- Click on image fields and upload

### "Want to start fresh"
1. Delete pages in Sanity Studio
2. Re-run: `npm run seed-pages`

### "Need different content"
1. Edit `sanity/seedPages.js`
2. Modify the page content
3. Run: `npm run seed-pages`

---

## What's Included in Each Page

### SEO Optimization ✓
- Unique meta titles
- Compelling meta descriptions
- Clean URL slugs
- Published status

### Mobile Responsive ✓
- All components are mobile-friendly
- Text scales appropriately
- Images resize for mobile
- CTAs easily tappable

### Accessibility ✓
- Semantic heading structure
- Proper text hierarchy
- Spacers for visual breathing room
- Clear call-to-action buttons

### Professional Content ✓
- Welcoming, empathetic tone
- Evidence-based approach mentioned
- Clear service descriptions
- Professional credentials

---

## Success! 🎉

Your Sanity CMS now has three professional, ready-to-customize pages. You can:

✅ View them in Sanity Studio  
✅ Edit any component  
✅ Add/remove/reorder components  
✅ Customize all text and images  
✅ Publish changes instantly  
✅ Create new pages using these as templates  

**Start customizing now in Sanity Studio: http://localhost:3333**

---

## Resources

- **Quick Start Guide**: `QUICK_START_PAGE_BUILDER.md`
- **Full Documentation**: `SANITY_PAGE_BUILDER.md`
- **Visual Guide**: `SANITY_VISUAL_GUIDE.md`
- **Component Reference**: `WIREFRAME_COMPONENTS.md`

---

**Happy Editing!** 🚀
