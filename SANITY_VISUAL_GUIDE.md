# Sanity Page Builder - Visual Guide

## Sanity Studio Interface Tour

### 1. Main Navigation (Left Sidebar)

```
┌─────────────────────┐
│ 📄 Pages            │ ← Click here to manage pages
│   ├ All Pages       │
│   ├ Published Pages │
│   └ Draft Pages     │
│                     │
│ ⚙️ Site Config      │ ← Global settings
│   ├ Site Settings   │
│   ├ Navigation      │
│   └ Footer Content  │
│                     │
│ 👤 Profile          │ ← Your info
│   ├ Therapist       │
│   ├ Practice        │
│   ├ Qualifications  │
│   ├ Specialties     │
│   └ Approaches      │
│                     │
│ 🧩 Content Blocks   │ ← Reusable content
│                     │
│ 🔗 Social Links     │ ← Social media
└─────────────────────┘
```

### 2. Page List View

```
┌────────────────────────────────────────────────────────────┐
│ All Pages                                    [+ Create]     │
├────────────────────────────────────────────────────────────┤
│                                                             │
│  📄 Home                                                    │
│     /home • custom ✓                                        │
│                                                             │
│  📄 About Me                                                │
│     /about • custom ✓                                       │
│                                                             │
│  📄 Services                                                │
│     /services • services (draft)                           │
│                                                             │
│  📄 Contact                                                 │
│     /contact • contact ✓                                    │
└────────────────────────────────────────────────────────────┘
```

### 3. Page Editor View

```
┌────────────────────────────────────────────────────────────┐
│ Page: About Me                              [Publish] [•••] │
├────────────────────────────────────────────────────────────┤
│                                                             │
│ Page Title *                                                │
│ [About Me_________________________________]                 │
│                                                             │
│ URL Slug *                                                  │
│ [about-me___________________________] [Generate]            │
│                                                             │
│ Meta Title (SEO)                                            │
│ [About | Healing Minds Therapy_____________]                │
│                                                             │
│ Meta Description (SEO)                                      │
│ [Learn about Dr. Smith's approach to____                    │
│  compassionate, evidence-based therapy___]                  │
│                                                             │
│ Page Template                                               │
│ [Custom (Build with Components) ▼]                          │
│                                                             │
│ Page Components                                             │
│ ┌─────────────────────────────────────┐                    │
│ │ 1. Hero Section                      │ ⠿ [×]             │
│ │    "Welcome to My Practice"          │                    │
│ └─────────────────────────────────────┘                    │
│ ┌─────────────────────────────────────┐                    │
│ │ 2. Identity Quote                    │ ⠿ [×]             │
│ │    "Healing is a journey..."         │                    │
│ └─────────────────────────────────────┘                    │
│ ┌─────────────────────────────────────┐                    │
│ │ 3. Personal Statement                │ ⠿ [×]             │
│ │    "I am a licensed therapist..."    │                    │
│ └─────────────────────────────────────┘                    │
│                                                             │
│ [+ Add item ▼]                                              │
│   • Hero Section                                            │
│   • Identity Quote                                          │
│   • Philosophy Section                                      │
│   • Focus Areas                                             │
│   • Headshot & Profile                                      │
│   • Personal Statement                                      │
│   • Text Content                                            │
│   • CTA Button                                              │
│   • Image Gallery                                           │
│   • Spacer                                                  │
│                                                             │
│ ▼ Show Site Header                    [✓]                   │
│ ▼ Show Site Footer                    [✓]                   │
│ ▼ Published                           [ ]                   │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

### 4. Component Configuration (Hero Section Example)

```
┌────────────────────────────────────────────────────────────┐
│ Hero Section                                    [↑] [↓] [×] │
├────────────────────────────────────────────────────────────┤
│                                                             │
│ Heading *                                                   │
│ [Welcome to My Practice_____________________]               │
│                                                             │
│ Subheading                                                  │
│ [Compassionate, evidence-based therapy                      │
│  tailored to your unique needs______________]               │
│                                                             │
│ Background Image                                            │
│ [Upload image] [Select from library]                        │
│ ┌─────────────────┐                                         │
│ │                 │ hero-background.jpg                     │
│ │   [Preview]     │ 1920x1080                               │
│ │                 │                                         │
│ └─────────────────┘                                         │
│                                                             │
│ Overlay Color                                               │
│ [Dark (Black) ▼]                                            │
│   • Dark (Black)                                            │
│   • Light (White)                                           │
│   • Burgundy                                                │
│   • Teal                                                    │
│   • None                                                    │
│                                                             │
│ Overlay Opacity                                             │
│ [0.4______] (0-1)                                           │
│                                                             │
│ ▼ CTA Button                                                │
│   Button Text                                               │
│   [Book Free Consultation_________________]                 │
│                                                             │
│   Button Link                                               │
│   [#contact_______________________________]                 │
│                                                             │
│   Button Style                                              │
│   [Accent (Teal) ▼]                                         │
│                                                             │
│ Content Alignment                                           │
│ [Center ▼]                                                  │
│                                                             │
│ Section Height                                              │
│ [Full Screen ▼]                                             │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

### 5. Focus Areas Component Configuration

```
┌────────────────────────────────────────────────────────────┐
│ Focus Areas                                     [↑] [↓] [×] │
├────────────────────────────────────────────────────────────┤
│                                                             │
│ Section Title                                               │
│ [Focus Areas_________________________________]              │
│                                                             │
│ Focus Area Cards                                            │
│ ┌─────────────────────────────────────┐                    │
│ │ 1. Anxiety & Stress            🧠   │ ⠿ [×]             │
│ │    "Learn effective strategies..."   │                    │
│ └─────────────────────────────────────┘                    │
│ ┌─────────────────────────────────────┐                    │
│ │ 2. Trauma & PTSD               💙   │ ⠿ [×]             │
│ │    "Heal from traumatic..."          │                    │
│ └─────────────────────────────────────┘                    │
│ ┌─────────────────────────────────────┐                    │
│ │ 3. Relationship Issues         🤝   │ ⠿ [×]             │
│ │    "Improve communication..."        │                    │
│ └─────────────────────────────────────┘                    │
│                                                             │
│ [+ Add Focus Area Card]                                     │
│                                                             │
│ Layout                                                      │
│ [3 Columns ▼]                                               │
│   • 2 Columns                                               │
│   • 3 Columns                                               │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

### 6. Focus Area Card Detail

```
┌────────────────────────────────────────────────────────────┐
│ Focus Area Card                                 [Collapse]  │
├────────────────────────────────────────────────────────────┤
│                                                             │
│ Title *                                                     │
│ [Anxiety & Stress_________________________]                │
│                                                             │
│ Description *                                               │
│ [Learn effective strategies to manage                       │
│  anxiety, reduce stress, and develop                        │
│  healthy coping mechanisms for daily                        │
│  challenges.___________________________]                    │
│                                                             │
│ Icon (Emoji)                                                │
│ [🧠]  ← Single emoji character                              │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

## Visual Workflow

### Creating a New Page

```
Step 1: Navigate          Step 2: Create           Step 3: Configure
─────────────────         ──────────────           ─────────────────
                                                    
Sidebar                   Page List                 Page Editor
┌──────────┐             ┌──────────┐              ┌──────────┐
│ Pages ◄──┼────────────►│ [Create] ├─────────────►│ Fill in  │
└──────────┘             └──────────┘              │ details  │
                                                    └──────────┘
                                                         │
                                                         ▼
                                                    Add Components
                                                    ┌──────────┐
                                                    │ Hero     │
                                                    │ Quote    │
                                                    │ CTA      │
                                                    └──────────┘
                                                         │
                                                         ▼
                                                    [Publish]
```

### Adding Components

```
1. Click [+ Add item]        2. Select Component         3. Configure
──────────────────          ───────────────────          ───────────
                                                         
┌──────────────┐           ┌──────────────┐             ┌──────────┐
│ + Add item ▼ │──────────►│ • Hero       │────────────►│ Heading  │
└──────────────┘           │ • Quote      │             │ Image    │
                           │ • Philosophy │             │ CTA      │
                           │ • Focus      │             └──────────┘
                           │ • Headshot   │                  │
                           │ • Statement  │                  ▼
                           │ • Text       │             [Collapse]
                           │ • Button     │                  │
                           │ • Gallery    │                  ▼
                           │ • Spacer     │             Component Added
                           └──────────────┘             to Page
```

### Reordering Components

```
Drag handle (⠿) to reorder:

Before:                   After:
┌────────────┐           ┌────────────┐
│ 1. Hero ⠿  │           │ 1. Hero ⠿  │
│ 2. Quote ⠿ │───Drag───►│ 2. Text ⠿  │
│ 3. Text ⠿  │   ▲       │ 3. Quote ⠿ │
└────────────┘   │       └────────────┘
                 │
           Drag Quote Down
```

## Component Previews in Studio

### Hero Section Preview
```
┌───────────────────────────────────────────────┐
│ Hero: Welcome to My Practice                  │
│ Compassionate, evidence-based therapy         │
│ 🖼️ [Background Image Thumbnail]               │
└───────────────────────────────────────────────┘
```

### Focus Areas Preview
```
┌───────────────────────────────────────────────┐
│ Focus Areas: Focus Areas                      │
│ 3 areas                                       │
└───────────────────────────────────────────────┘
```

### Personal Statement Preview
```
┌───────────────────────────────────────────────┐
│ Personal Statement                            │
│ I am a licensed therapist with over 10...    │
└───────────────────────────────────────────────┘
```

## Common Patterns

### Homepage Layout Pattern
```
┌─────────────────────────────────┐
│         Hero (Full Screen)       │  ← Attention grabber
├─────────────────────────────────┤
│         Identity Quote           │  ← Mission/Values
├─────────────────────────────────┤
│      Spacer (Medium)             │
├─────────────────────────────────┤
│      Philosophy Section          │  ← Approach
├─────────────────────────────────┤
│      Spacer (Medium)             │
├─────────────────────────────────┤
│       Focus Areas (3 col)        │  ← Services
├─────────────────────────────────┤
│      Spacer (Large)              │
├─────────────────────────────────┤
│  Headshot + Personal Statement   │  ← Personal connection
├─────────────────────────────────┤
│      Spacer (Medium)             │
├─────────────────────────────────┤
│         CTA Button               │  ← Action
└─────────────────────────────────┘
```

### About Page Layout Pattern
```
┌─────────────────────────────────┐
│      Hero (Medium Height)        │
├─────────────────────────────────┤
│      Text Content (Intro)        │
├─────────────────────────────────┤
│      Spacer (Medium)             │
├─────────────────────────────────┤
│  ┌──────────┬──────────────────┐ │
│  │ Headshot │ Personal         │ │
│  │          │ Statement        │ │
│  └──────────┴──────────────────┘ │
├─────────────────────────────────┤
│      Text Content (Full Bio)     │
├─────────────────────────────────┤
│      Focus Areas (Specialties)   │
├─────────────────────────────────┤
│         CTA Button               │
└─────────────────────────────────┘
```

## Tips & Tricks

### Quick Navigation
- **Cmd/Ctrl + K**: Quick search
- **Cmd/Ctrl + S**: Save/Publish
- **Escape**: Close dialogs

### Component Management
- Use **⠿** drag handle to reorder
- Use **[×]** to delete component
- Use **[↑] [↓]** for fine adjustments

### Best Practices
1. **Save Often**: Click publish regularly
2. **Preview**: Check preview as you build
3. **Test**: View on actual site before finalizing
4. **Organize**: Use spacers between sections
5. **Consistency**: Stick to 2-3 component types per page

---

This visual guide should help you navigate Sanity Studio with confidence! 🎨
