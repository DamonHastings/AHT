# Hero Section Component

## Overview
A flexible, full-featured hero section component with background image support, large heading, subheading, and consultation booking CTA. Perfect for landing pages and top-of-page content.

## Component: `HeroSection`

### Features
- ✅ Background image with cover fit
- ✅ Customizable overlay colors and opacity
- ✅ Large, responsive heading (4xl to 7xl)
- ✅ Optional subheading
- ✅ CTA button with multiple variants
- ✅ Text alignment options (left, center, right)
- ✅ Multiple height options (small, medium, large, screen)
- ✅ Scroll indicator (for full-screen heroes)
- ✅ Fully responsive design

### Props

| Prop | Type | Default | Options | Description |
|------|------|---------|---------|-------------|
| `backgroundImage` | string | - | - | URL to background image |
| `overlay` | string/null | 'dark' | 'dark', 'light', 'burgundy', 'teal', null | Overlay color |
| `overlayOpacity` | number | 0.4 | 0.0 - 1.0 | Opacity of overlay |
| `heading` | string | - | - | Main heading text |
| `subheading` | string | - | - | Subheading/tagline text |
| `ctaText` | string | 'Book Consultation' | - | Button text |
| `onCtaClick` | function | - | - | Click handler for CTA |
| `ctaVariant` | string | 'accent' | 'primary', 'secondary', 'outline', 'ghost', 'accent' | Button style |
| `alignment` | string | 'center' | 'left', 'center', 'right' | Text alignment |
| `height` | string | 'screen' | 'small', 'medium', 'large', 'screen' | Hero height |
| `className` | string | '' | - | Additional CSS classes |

### Usage Examples

#### Basic Full-Screen Hero

```jsx
import { HeroSection } from './design-system';

<HeroSection
  backgroundImage="/photos/hero-bg.jpg"
  heading="Find Your Path to Wellness"
  subheading="Compassionate, evidence-based therapy tailored to your unique needs"
  ctaText="Book Free Consultation"
  onCtaClick={() => navigate('/booking')}
/>
```

#### Left-Aligned with Custom Overlay

```jsx
<HeroSection
  backgroundImage="/photos/hero-bg.jpg"
  overlay="burgundy"
  overlayOpacity={0.6}
  heading="Welcome to Healing Minds"
  subheading="Professional mental health services in a warm environment"
  ctaText="Schedule Appointment"
  alignment="left"
  height="large"
  onCtaClick={handleBooking}
/>
```

#### Medium Height with Light Overlay

```jsx
<HeroSection
  backgroundImage="/photos/hero-bg.jpg"
  overlay="light"
  overlayOpacity={0.3}
  heading="Transform Your Life"
  subheading="Professional therapy with a personal touch"
  ctaText="Get Started"
  ctaVariant="primary"
  height="medium"
/>
```

#### Minimal (No Background Image)

```jsx
<HeroSection
  overlay={null}
  heading="Start Your Journey Today"
  subheading="Compassionate therapy for anxiety and depression"
  ctaText="Contact Me"
  height="medium"
/>
```

## Height Options

### `small` (h-96 / 24rem / 384px)
- Quick intro sections
- Above-the-fold content
- Page headers

### `medium` (h-[32rem] / 512px)
- Standard hero sections
- Feature introductions
- Service pages

### `large` (h-[40rem] / 640px)
- Prominent hero sections
- Landing pages
- Important announcements

### `screen` (h-screen / 100vh)
- Full viewport height
- Homepage heroes
- Maximum impact
- Includes scroll indicator

## Overlay Colors

### `dark` (Black)
- Best for light backgrounds
- High contrast with white text
- Most common choice

### `light` (White)
- Best for dark backgrounds
- Softer appearance
- Use with darker text

### `burgundy` (Therapy Burgundy-900)
- Brand-aligned overlay
- Warm, professional feel
- Unique to your brand

### `teal` (Therapy Teal-900)
- Brand-aligned overlay
- Calming, trustworthy feel
- Distinct appearance

### `null` (No Overlay)
- When background is already suitable
- When using no background image
- For custom styling

## Storybook Examples

View all variations in Storybook at **http://localhost:6007/**

Navigate to: **Design System > HeroSection**

Available stories:
- Default
- Left Aligned
- Right Aligned
- Medium Height
- Small Height
- Light Overlay
- No Overlay
- No Background
- Minimal Content
- Long Content
- All Heights (comparison)
- Different Buttons (comparison)
- With Click Handler

## Wireframe Composition

The `WithHeroSection` story in **Wireframe Composition** shows the HeroSection integrated with all other wireframe components for a complete page example.

## Best Practices

### Content Length
- **Heading**: Keep to 5-10 words for impact
- **Subheading**: 10-20 words, one or two sentences max
- **CTA Text**: 2-4 words, action-oriented

### Overlay Opacity
- **0.3-0.4**: Light overlay, background still visible
- **0.4-0.5**: Balanced (recommended)
- **0.5-0.7**: Strong overlay, text very readable
- **0.7+**: Background barely visible

### Image Selection
- Use high-quality, high-resolution images (1920px+ width)
- Ensure images have good contrast areas for text
- Consider image focal point with text alignment
- Test on mobile - images crop differently

### Accessibility
- Ensure sufficient contrast between text and background
- Keep heading concise for screen readers
- Provide meaningful CTA text (avoid just "Click Here")
- Test with keyboard navigation

### Mobile Responsiveness
- Component automatically scales text on smaller screens
- Test your content at mobile breakpoints
- Consider using `medium` or `large` height on mobile
- Verify background image looks good when cropped

## Integration with Other Components

### Full Page Example

```jsx
import {
  HeroSection,
  PhilosophySection,
  FocusAreaCard,
  FooterCTA
} from './design-system';

function LandingPage() {
  return (
    <>
      <HeroSection
        backgroundImage="/hero.jpg"
        heading="Welcome"
        subheading="Your journey starts here"
        ctaText="Book Consultation"
        onCtaClick={handleBooking}
      />
      
      <main className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        <PhilosophySection
          title="My Approach"
          content="Compassionate, evidence-based care..."
          image="/philosophy.jpg"
        />
        
        <div className="grid md:grid-cols-3 gap-6">
          <FocusAreaCard
            title="Anxiety"
            description="Manage anxiety effectively"
            icon="🧠"
          />
          {/* More cards... */}
        </div>
      </main>
      
      <FooterCTA
        contactInfo={{...}}
        consultationCTA={{...}}
      />
    </>
  );
}
```

## Comparison with Existing Hero Component

The design system `HeroSection` is simpler and more focused than the existing `Hero` component in `src/components/Hero/`. 

**HeroSection** is ideal for:
- Landing pages
- Static hero sections
- Simple, focused CTAs
- Quick implementation

**Existing Hero** component is better for:
- Profile displays
- Complex layouts with images
- Parallax effects
- Sanity CMS integration

Both can coexist and serve different purposes in your application.
