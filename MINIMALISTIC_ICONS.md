# Icon System - Minimalistic Line Illustrations

## Overview

The icon system now uses **minimalistic line illustrations** instead of emojis, providing a more professional and cohesive design.

---

## 🎨 Available Icons

### Mental Health Icons

| Icon Name | Visual                | Use For                             |
| --------- | --------------------- | ----------------------------------- |
| `brain`   | Brain outline         | Anxiety, Mental Health, Cognition   |
| `wave`    | Wave pattern          | Anxiety, Stress, Flow, Balance      |
| `sun`     | Sun with rays         | Depression, Hope, Positivity, Light |
| `shield`  | Shield with checkmark | Trauma, PTSD, Protection, Safety    |

### Relationship Icons

| Icon Name | Visual           | Use For                          |
| --------- | ---------------- | -------------------------------- |
| `people`  | Multiple figures | Relationships, Family, Community |
| `heart`   | Heart outline    | Love, Compassion, Grief, Emotion |

### Growth & Development Icons

| Icon Name  | Visual               | Use For                               |
| ---------- | -------------------- | ------------------------------------- |
| `plant`    | Growing plant        | Growth, Life Transitions, Development |
| `sparkles` | Stars/sparkles       | Self-Esteem, Confidence, Achievement  |
| `unlock`   | Open lock            | Breaking Habits, Freedom, Release     |
| `target`   | Bullseye circles     | Goals, Focus, Direction               |
| `compass`  | Compass with pointer | Purpose, Direction, Guidance          |

### Wellness Icons

| Icon Name    | Visual          | Use For                           |
| ------------ | --------------- | --------------------------------- |
| `meditation` | Meditation pose | Mindfulness, Meditation, Wellness |

---

## 📖 Usage Guide

### In Sanity Studio

When adding a Focus Area or Preview Scroll item:

**Icon Field Options:**

1. **Icon Name** (recommended): `brain`, `wave`, `shield`, `people`, etc.
2. **Keyword**: `anxiety`, `trauma`, `relationship`, etc. (auto-mapped)
3. **Emoji**: Still supported (e.g., `🧠`)

**Examples:**

```
Icon: wave       → Shows wave line illustration
Icon: anxiety    → Auto-mapped to wave illustration
Icon: 🌊        → Shows emoji as fallback
```

### In Code

```jsx
import { FocusAreaCard } from '../design-system';

// Using icon name
<FocusAreaCard
  title="Anxiety & Stress"
  description="..."
  icon="wave"
/>

// Using keyword (auto-mapped)
<FocusAreaCard
  title="Trauma Support"
  description="..."
  icon="trauma"  // Maps to 'shield'
/>

// Using emoji (still works)
<FocusAreaCard
  title="Depression"
  description="..."
  icon="☀️"
/>
```

---

## 🗺️ Keyword Mapping

The system automatically maps keywords to icons:

### Mental Health Keywords

```javascript
'anxiety' → 'brain'
'stress' → 'wave'
'depression' → 'sun'
'mental' → 'brain'
```

### Emotional Keywords

```javascript
'trauma' → 'shield'
'ptsd' → 'shield'
'relationship' → 'people'
'relationships' → 'people'
'love' → 'heart'
'family' → 'people'
```

### Growth Keywords

```javascript
'growth' → 'plant'
'self-esteem' → 'sparkles'
'confidence' → 'sparkles'
'habit' → 'unlock'
'habits' → 'unlock'
'addiction' → 'unlock'
```

### Wellness Keywords

```javascript
'mindfulness' → 'meditation'
'meditation' → 'meditation'
'wellness' → 'meditation'
'balance' → 'wave'
```

### Purpose Keywords

```javascript
'goal' → 'target'
'goals' → 'target'
'direction' → 'compass'
'purpose' → 'compass'
```

---

## 🎨 Icon Design Specifications

### Style:

- **Type**: Line illustrations (stroke-based)
- **Stroke Width**: 1.5px
- **Style**: Rounded line caps and joins
- **Fill**: None (outline only)
- **Color**: Inherits text color (teal-500 by default)

### Sizing:

- **Container**: 48px × 48px (`w-12 h-12`)
- **Viewbox**: 24 × 24
- **Responsive**: Scales proportionally

### Colors:

- **Default**: `text-therapy-teal-500` (#4A8285)
- **On Hover**: Same color (card shadow changes)
- **Customizable**: Any color class can be applied

---

## 🎯 Recommended Icons by Topic

### For Therapy Services:

**Anxiety & Stress:**

- Primary: `wave` 🌊 (flowing, calming)
- Alternative: `brain` 🧠 (mental focus)

**Trauma & PTSD:**

- Primary: `shield` 🛡️ (protection, safety)
- Alternative: `heart` ❤️ (healing)

**Depression:**

- Primary: `sun` ☀️ (hope, light)
- Alternative: `plant` 🌱 (growth)

**Relationships:**

- Primary: `people` 👥 (connection)
- Alternative: `heart` ❤️ (love, care)

**Personal Growth:**

- Primary: `plant` 🌱 (development)
- Alternative: `sparkles` ✨ (transformation)

**Habits & Addiction:**

- Primary: `unlock` 🔓 (freedom)
- Alternative: `target` 🎯 (focus)

**Self-Esteem:**

- Primary: `sparkles` ✨ (confidence)
- Alternative: `sun` ☀️ (shining)

**Mindfulness:**

- Primary: `meditation` 🧘 (practice)
- Alternative: `wave` 🌊 (flow)

**Life Direction:**

- Primary: `compass` 🧭 (guidance)
- Alternative: `target` 🎯 (goals)

---

## 🔧 Technical Implementation

### Icon Rendering Logic

```javascript
const renderIcon = () => {
  // 1. If no icon, return null
  if (!icon) return null;

  // 2. If React node, render directly
  if (typeof icon !== "string") return icon;

  // 3. If short string (emoji), render as text
  if (icon.length <= 2) {
    return <div className="text-4xl">{icon}</div>;
  }

  // 4. Try to map to line illustration
  const iconKey = icon.toLowerCase();
  const mappedIcon = iconMap[iconKey] || iconKey;
  const lineIcon = icons[mappedIcon];

  if (lineIcon) {
    return <div className="w-12 h-12">{lineIcon}</div>;
  }

  // 5. Fallback to text/emoji
  return <div className="text-4xl">{icon}</div>;
};
```

### SVG Structure

All icons follow this pattern:

```jsx
<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="1.5"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  {/* Icon paths */}
</svg>
```

---

## 🎭 Before & After

### Before (Emojis):

```
┌─────────────┐
│     🧠      │  ← Emoji (colorful, inconsistent)
│   Anxiety   │
│   Desc...   │
└─────────────┘
```

### After (Line Icons):

```
┌─────────────┐
│     ⎯⎯      │  ← Line illustration (minimal, consistent)
│   Anxiety   │
│   Desc...   │
└─────────────┘
```

**Benefits:**

- ✅ More professional appearance
- ✅ Consistent visual style
- ✅ Better brand alignment
- ✅ Scalable and crisp at any size
- ✅ Customizable colors
- ✅ Works with design system

---

## 📚 Quick Reference

### Most Common Icons:

**Mental Health:**

```
wave      → Anxiety/Stress
brain     → Mental health
sun       → Depression
shield    → Trauma
```

**Relationships:**

```
people    → Relationships
heart     → Love/Grief
```

**Growth:**

```
plant     → Growth
sparkles  → Confidence
unlock    → Habits
```

**Wellness:**

```
meditation → Mindfulness
compass    → Purpose
target     → Goals
```

---

## 🆕 Adding New Icons

### To add a new icon:

1. **Create SVG** in `frontend/src/design-system/icons.js`:

```javascript
export const icons = {
  // ... existing icons

  newIcon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      {/* Your icon paths */}
    </svg>
  ),
};
```

2. **Add to mapping** (optional):

```javascript
const iconMap = {
  // ... existing mappings
  keyword: "newIcon",
};
```

3. **Update documentation** with icon name and usage

---

## 🎨 Styling Customization

### Change Icon Color

Icons inherit the text color from their container:

```jsx
// Default (teal)
<div className="text-therapy-teal-500">
  {icon}
</div>

// Custom color
<div className="text-therapy-burgundy-600">
  {icon}
</div>
```

### Change Icon Size

```jsx
// Default
<div className="w-12 h-12">{icon}</div>

// Larger
<div className="w-16 h-16">{icon}</div>

// Smaller
<div className="w-8 h-8">{icon}</div>
```

### Change Stroke Width

Edit in icons.js:

```jsx
strokeWidth = "1.5"; // Default
strokeWidth = "2"; // Bolder
strokeWidth = "1"; // Lighter
```

---

## 📦 Files Modified

**Created:**

- `frontend/src/design-system/icons.js` - Icon library

**Updated:**

- `frontend/src/design-system/FocusAreaCard.jsx` - Smart icon rendering
- `frontend/src/design-system/FocusAreaCard.stories.jsx` - Updated examples
- `frontend/src/design-system/PreviewScroll.stories.jsx` - Updated examples
- `sanity/schemas/pageComponents.js` - Updated icon descriptions

---

## ✅ Summary

**Icons Changed:**

- ❌ Emojis (colorful, inconsistent)
- ✅ Line illustrations (minimal, professional)

**Features:**

- ✅ 12 minimalistic line icons
- ✅ Auto-mapping from keywords
- ✅ Emoji fallback still supported
- ✅ Customizable colors and sizes
- ✅ Consistent stroke width
- ✅ Accessible and scalable

**Result:** More professional, minimalistic focus area icons! 🎨

---

**Refresh your browser and Storybook to see the new line illustration icons!**
