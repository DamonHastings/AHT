# PreviewScroll Component Documentation

## Overview

The **PreviewScroll** component is a horizontal scrolling carousel that displays cards in a smooth, touch-friendly interface. Perfect for showcasing focus areas, services, specializations, or any collection of items.

## Features

✅ **Smooth Scrolling** - Silky smooth scroll behavior  
✅ **Touch Enabled** - Swipe on mobile devices  
✅ **Arrow Navigation** - Click arrows on desktop  
✅ **Snap Scrolling** - Cards snap into place  
✅ **Responsive** - Adapts to all screen sizes  
✅ **Design System Integration** - Uses FocusAreaCard  
✅ **Accessible** - Keyboard and screen reader friendly

---

## Visual Design

Based on the wireframe image provided:

```
┌─────────────────────────────────────────────────┐
│  Section Title                         ← →      │
├─────────────────────────────────────────────────┤
│                                                 │
│  ┌───────┐  ┌───────┐  ┌───────┐  ┌────────  │
│  │ Card  │  │ Card  │  │ Card  │  │ Card      │
│  │  🧠   │  │  💙   │  │  🤝   │  │  ☀️      │
│  │Title  │  │Title  │  │Title  │  │Title      │
│  │Desc...│  │Desc...│  │Desc...│  │Desc...    │
│  └───────┘  └───────┘  └───────┘  └────────  │
│                                                 │
│           ← Swipe to explore →                 │
└─────────────────────────────────────────────────┘
```

---

## Component Props

### PreviewScroll Props

| Prop        | Type     | Default | Description            |
| ----------- | -------- | ------- | ---------------------- |
| `title`     | `string` | -       | Optional section title |
| `items`     | `array`  | `[]`    | Array of card items    |
| `className` | `string` | `''`    | Additional CSS classes |

### Item Object Structure

Each item in the `items` array should have:

| Property      | Type     | Required | Description             |
| ------------- | -------- | -------- | ----------------------- |
| `title`       | `string` | Yes      | Card title              |
| `description` | `string` | Yes      | Card description text   |
| `icon`        | `string` | No       | Emoji icon (e.g., '🧠') |

---

## Usage Examples

### Basic Usage

```jsx
import { PreviewScroll } from "../design-system";

const items = [
  {
    title: "Anxiety & Stress",
    description: "Learn effective strategies to manage anxiety...",
    icon: "🧠",
  },
  {
    title: "Trauma & PTSD",
    description: "Heal from traumatic experiences...",
    icon: "💙",
  },
  {
    title: "Relationship Issues",
    description: "Improve communication and build healthier connections...",
    icon: "🤝",
  },
];

<PreviewScroll title="Focus Areas" items={items} />;
```

### Without Title

```jsx
<PreviewScroll items={items} />
```

### With Custom Styling

```jsx
<PreviewScroll title="Our Services" items={items} className="bg-therapy-cream-50" />
```

---

## In Sanity Studio

### Adding to a Page

1. Go to **Pages** in Sanity Studio
2. Edit or create a page
3. Click **Add Component**
4. Select **Preview Scroll**
5. Configure:
   - **Section Title**: Optional title
   - **Scroll Items**: Add 3-12 items
     - Title (required)
     - Description (required)
     - Icon (optional emoji)

### Example Configuration

```javascript
{
  _type: 'previewScrollComponent',
  title: 'Focus Areas',
  items: [
    {
      title: 'Anxiety & Stress',
      description: 'Learn effective strategies...',
      icon: '🧠'
    },
    // ... more items
  ]
}
```

---

## Responsive Behavior

### Desktop (md and above):

- 3 cards visible at once
- Arrow buttons visible
- Smooth scroll on arrow click
- Hover effects on arrows

### Tablet:

- 2 cards visible at once
- Arrow buttons visible
- Touch swipe enabled

### Mobile:

- 1 card visible at once
- Arrow buttons hidden
- Touch swipe enabled
- "Swipe to explore" indicator

---

## Technical Details

### Scroll Behavior

**Smooth Scrolling:**

```javascript
scrollContainerRef.current.scrollTo({
  left: newScrollPosition,
  behavior: "smooth",
});
```

**Snap Points:**

```css
scroll-snap-type: x mandatory;
scroll-snap-align: start;
```

**Hidden Scrollbar:**

```css
scrollbar-width: none;
-ms-overflow-style: none;
::-webkit-scrollbar {
  display: none;
}
```

### Card Sizing

- **Mobile**: Full width minus padding
- **Tablet**: 50% width minus gap
- **Desktop**: 33.33% width minus gap

### Accessibility

- ✅ Arrow buttons have `aria-label`
- ✅ Keyboard navigation supported
- ✅ Screen reader friendly
- ✅ Focus indicators visible
- ✅ Semantic HTML structure

---

## Styling

### Colors Used

**Arrows:**

- Background: `bg-white/90` (white with 90% opacity)
- Hover: `bg-white` (solid white)
- Icon color: `text-therapy-burgundy-600`
- Shadow: `shadow-lg`

**Mobile Indicator:**

- Text: `text-slate-400`
- Icon: Inline SVG arrows

### Spacing

- Section padding: `py-12`
- Container padding: `px-6`
- Card gap: `gap-6`
- Arrow positioning: `-translate-x-4` / `translate-x-4`

---

## Integration with Page Builder

### Schema (Already Added)

```javascript
export const previewScrollComponent = {
  name: "previewScrollComponent",
  title: "Preview Scroll",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Section Title",
      type: "string",
    },
    {
      name: "items",
      title: "Scroll Items",
      type: "array",
      of: [
        /* item schema */
      ],
      validation: (Rule) => Rule.min(3).max(12),
    },
  ],
};
```

### PageRenderer (Already Updated)

```javascript
case 'previewScrollComponent':
  return (
    <PreviewScroll
      key={key}
      title={component.title}
      items={component.items || []}
    />
  );
```

---

## Best Practices

### Content

- **3-6 items**: Optimal for most use cases
- **7-12 items**: Good for comprehensive lists
- **Consistent length**: Keep descriptions similar length
- **Emojis**: Use relevant, professional emojis

### Performance

- Component uses `useRef` for efficient scroll handling
- No state updates during scroll
- Smooth animations with CSS
- Optimized for mobile devices

### UX

- Clear navigation indicators
- Smooth, predictable scrolling
- Cards snap to position
- Touch-friendly tap targets

---

## Files Created

```
frontend/src/design-system/
├── PreviewScroll.jsx          ← Main component
└── PreviewScroll.stories.jsx  ← Storybook stories

sanity/schemas/
└── pageComponents.js           ← Added previewScrollComponent

frontend/src/components/
└── PageRenderer.jsx            ← Added rendering logic
```

---

## Storybook

View in Storybook:

```bash
npm run storybook
```

Navigate to: **Components > PreviewScroll**

**Available Stories:**

- Default (with title)
- Without Title
- Few Items (3 cards)
- Many Items (8 cards)

---

## Use Cases

### Perfect For:

✅ **Focus Areas** - Display therapy specializations  
✅ **Services** - Showcase service offerings  
✅ **Specializations** - Highlight areas of expertise  
✅ **Features** - List product features  
✅ **Testimonials** - Show client testimonials  
✅ **Team Members** - Display team profiles  
✅ **Process Steps** - Outline workflow steps

### Not Ideal For:

❌ Large amounts of content (use regular grid)  
❌ Single item (use card directly)  
❌ Items needing comparison (use table/grid)

---

## Customization

### Change Card Size

Edit the width classes in PreviewScroll.jsx:

```jsx
// Current: 100% mobile, 50% tablet, 33% desktop
className = "w-[calc(100%-2rem)] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]";

// Example: Larger cards (show 2 on desktop)
className = "w-[calc(100%-2rem)] sm:w-[calc(50%-1rem)] lg:w-[calc(50%-1rem)]";
```

### Change Scroll Amount

Edit scroll distance:

```javascript
const scrollAmount = 400; // pixels to scroll per click
```

### Custom Card Component

Replace `FocusAreaCard` with your own:

```jsx
import MyCustomCard from "./MyCustomCard";

// In the map:
<MyCustomCard title={item.title} description={item.description} icon={item.icon} />;
```

---

## Browser Support

✅ Chrome/Edge (latest)  
✅ Firefox (latest)  
✅ Safari (latest)  
✅ iOS Safari  
✅ Chrome Android

**Scroll Snap Support:** All modern browsers

---

## Testing

### Manual Tests:

- [ ] Scroll with arrow buttons
- [ ] Swipe on mobile
- [ ] Cards snap correctly
- [ ] Arrow buttons appear/disappear on hover
- [ ] Responsive on all breakpoints
- [ ] Keyboard navigation works
- [ ] Screen reader announces content

### Edge Cases:

- [ ] 3 items (minimum)
- [ ] 12 items (maximum)
- [ ] Very long descriptions
- [ ] Missing icons
- [ ] No title provided

---

## Troubleshooting

### Arrows Not Working

Check if `scrollContainerRef` is attached:

```jsx
ref = { scrollContainerRef };
```

### Cards Not Snapping

Verify CSS classes:

```jsx
className = "snap-x snap-mandatory"; // On container
className = "snap-start"; // On cards
```

### Scrollbar Visible

Ensure style tag is present:

```jsx
<style jsx>{`
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
`}</style>
```

---

## Summary

The **PreviewScroll** component provides:

- ✅ Smooth horizontal scrolling
- ✅ Touch and click navigation
- ✅ Responsive design
- ✅ Sanity CMS integration
- ✅ Design system consistency
- ✅ Accessibility features
- ✅ Professional appearance

**Perfect for showcasing multiple items in a compact, engaging format!** 🎉
