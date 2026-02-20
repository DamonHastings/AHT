# Profile Section Component

A flexible component for displaying a profile image alongside content with an optional call-to-action button.

## Features

- **Portrait-oriented image** with 3:4 aspect ratio (placeholder if no image provided)
- **Rich text content support** using PortableText
- **Configurable image position** (left or right)
- **Optional CTA button** with anchor or URL link support
- **Responsive layout** (stacks on mobile, side-by-side on desktop)

## Component Props

```jsx
<ProfileSection
  image="/path/to/image.jpg" // Optional: Profile image URL
  imageAlt="Professional headshot" // Optional: Image alt text for accessibility
  content={<p>Your content here</p>} // Required: Text content (string or React node)
  buttonText="Learn more about me" // Optional: Button label
  buttonLink="#about" // Optional: Button destination (URL or anchor)
  imageOnLeft={true} // Optional: Image position (default: true)
  className="" // Optional: Additional CSS classes
/>
```

## Sanity Schema

In Sanity Studio, the component includes:

- **Image field** with hotspot support
- **Image alt text** for accessibility
- **Rich text content** using block editor
- **Button text** and link configuration
- **Image position toggle** (left/right)

## Usage in Pages

1. In Sanity Studio, create or edit a page
2. Add a "Profile Section" component
3. Upload an image (or leave empty for placeholder)
4. Write your content using the rich text editor
5. Configure the button and image position
6. Publish the page

## Styling

The component uses the design system with:

- White/sand background for image placeholder
- Slate-600 text color for content
- Secondary button variant
- Responsive grid layout
- Smooth scrolling for anchor links

## Example Use Cases

- **About page introduction** with headshot and bio
- **Team member profiles** with photos and descriptions
- **Testimonials** with client photos
- **Service descriptions** with illustrative images
