# Sanity Content Seeding Guide

This guide explains how to seed your Sanity dataset with initial content for the therapist website.

## Prerequisites

1. **Sanity Project Setup**: Make sure you have:
   - A Sanity project created at [sanity.io](https://sanity.io)
   - Your project ID and dataset name
   - A write token (API token) for your project

2. **Environment Variables**: Create a `.env` file in the `sanity/` directory with:
   ```env
   SANITY_STUDIO_PROJECT_ID=your_project_id
   SANITY_STUDIO_DATASET=production
   SANITY_API_TOKEN=your_write_token
   ```

   To get your API token:
   - Go to [sanity.io/manage](https://sanity.io/manage)
   - Select your project
   - Go to API → Tokens
   - Create a new token with "Editor" permissions

3. **Install Dependencies**: Make sure you've installed the required packages:
   ```bash
   cd sanity
   npm install
   ```

## Running the Seed Script

Run the seed script to populate your dataset:

```bash
npm run seed
```

Or directly:

```bash
node seed.js
```

## What Gets Seeded

The seed script creates the following content:

### Core Content
- **Site Settings**: Global site configuration, SEO settings, contact info
- **Navigation Menu**: Main navigation with anchor links
- **Footer Content**: Footer columns, copyright text, license information
- **Social Links**: Social media profiles (LinkedIn, Psychology Today)

### Therapist Profile
- **Therapist**: Complete therapist profile with bio, philosophy, credentials
- **Practice Details**: Location, fees, payment methods, insurance info
- **Qualifications**: Education, years in practice, lived experience

### Content Collections
- **Specialties**: 8 specialties (Anxiety, Depression, Relationship Issues, etc.)
- **Treatment Approaches**: 6 treatment approaches (CBT, EFT, Mindfulness, etc.)
- **Content Blocks**: Reusable content blocks (CTAs, feature lists)

## Content Architecture

The content architecture supports reusable content across pages:

### Site Settings (`siteSettings`)
- Global site configuration
- SEO metadata
- References to navigation, footer, and social links
- Contact information

### Navigation (`navigation`)
- Flexible menu system
- Supports anchor links, internal pages, and external URLs
- Can be reused across different pages

### Footer Content (`footerContent`)
- Multi-column footer layout
- Copyright and license text
- Reference to social links
- Flexible content structure

### Social Links (`socialLinks`)
- Centralized social media links
- Can be referenced by site settings and footer
- Supports multiple platforms

### Content Blocks (`contentBlock`)
- Reusable content components
- Multiple block types:
  - Text blocks
  - CTAs (Call to Action)
  - Testimonials
  - Feature lists
  - Image with text
  - FAQ sections

## Updating Seeded Content

After seeding, you can:
1. Open Sanity Studio: `npm run dev`
2. Edit any of the created documents
3. The changes will be reflected on your website

## Re-seeding

The seed script checks if data already exists and will skip seeding if therapist data is found. To re-seed:

1. Delete existing documents in Sanity Studio, or
2. Use Sanity's Vision tool to delete documents via GROQ queries

## Customization

To customize the seed data:
1. Edit `sanity/seed.js`
2. Modify the `seedData` object
3. Run the seed script again (after deleting existing data)

## Troubleshooting

### "Token not found" error
- Make sure `SANITY_API_TOKEN` is set in your `.env` file
- Verify the token has write permissions

### "Project ID not found" error
- Check that `SANITY_STUDIO_PROJECT_ID` is set correctly
- Verify the project ID in your Sanity dashboard

### "Data already exists" message
- The script prevents overwriting existing data
- Delete existing documents if you want to re-seed

### Import errors
- Make sure all dependencies are installed: `npm install`
- Check that you're using Node.js 14+ or 16+
