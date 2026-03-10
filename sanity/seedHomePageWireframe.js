import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

dotenv.config();

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
});

// New home page based on wireframe
const homePageWireframe = {
  _type: 'page',
  _id: 'page-home-wireframe',
  title: 'Home (Wireframe)',
  slug: {
    _type: 'slug',
    current: 'home-wireframe',
  },
  metaTitle: 'Home | Arielle Hastings Therapy',
  metaDescription: 'Find your path to wellness with compassionate, evidence-based therapy tailored to your unique needs.',
  template: 'custom',
  components: [
    // Identity Quote (at top after header with logo and book button)
    {
      _type: 'identityQuoteComponent',
      _key: 'quote-identity',
      quote: 'Healing is not about fixing what is broken. It is about discovering what is already whole.',
      author: null,
    },
    {
      _type: 'spacerComponent',
      _key: 'spacer-1',
      size: 'lg',
    },
    // Hero Image section (placeholder - will need to add image)
    {
      _type: 'heroComponent',
      _key: 'hero-image',
      heading: 'Welcome to Your Healing Journey',
      subheading: 'Compassionate, evidence-based therapy for lasting change',
      overlay: 'dark',
      overlayOpacity: 0.4,
      ctaButton: {
        text: 'Book Consultation',
        link: '#contact',
        variant: 'accent',
      },
      alignment: 'center',
      height: 'large',
    },
    {
      _type: 'spacerComponent',
      _key: 'spacer-2',
      size: 'lg',
    },
    // Philosophy Section
    {
      _type: 'philosophySectionComponent',
      _key: 'philosophy',
      title: 'My Philosophy',
      content: [
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'I believe in creating a safe, non-judgmental space where healing can truly begin. My approach is centered on empathy, authenticity, and collaboration.',
            },
          ],
        },
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'Together, we will explore your unique experiences and develop strategies that resonate with your personal values and goals.',
            },
          ],
        },
      ],
    },
    {
      _type: 'spacerComponent',
      _key: 'spacer-3',
      size: 'lg',
    },
    // Focus Areas - 3 cards
    {
      _type: 'focusAreasComponent',
      _key: 'focus-areas',
      sectionTitle: 'Focus Areas',
      layout: '3col',
      areas: [
        {
          _key: 'area-1',
          title: 'Anxiety & Stress',
          description: 'Learn effective strategies to manage anxiety, reduce stress, and develop healthy coping mechanisms for daily challenges.',
          icon: '🧠',
        },
        {
          _key: 'area-2',
          title: 'Trauma & PTSD',
          description: 'Heal from traumatic experiences through compassionate, trauma-informed therapeutic approaches.',
          icon: '💙',
        },
        {
          _key: 'area-3',
          title: 'Relationship Issues',
          description: 'Improve communication, build healthier connections, and navigate relationship challenges.',
          icon: '🤝',
        },
      ],
    },
    {
      _type: 'spacerComponent',
      _key: 'spacer-4',
      size: 'lg',
    },
    // Headshot (will be added via image upload)
    {
      _type: 'headshotProfileComponent',
      _key: 'headshot',
      name: 'Arielle Hastings, LMFT',
      shape: 'rounded',
      size: 'xl',
    },
    {
      _type: 'spacerComponent',
      _key: 'spacer-5',
      size: 'md',
    },
    // Personal Statement with link to full bio
    {
      _type: 'personalStatementComponent',
      _key: 'personal-statement',
      statement: 'I am a licensed Marriage and Family Therapist dedicated to helping individuals navigate life\'s challenges with compassion and evidence-based care. My approach is collaborative, tailored to your unique needs, and focused on sustainable healing.',
      showFullBioLink: true,
      fullBioLink: '/about',
    },
    {
      _type: 'spacerComponent',
      _key: 'spacer-6',
      size: 'lg',
    },
    // Booking CTA (from wireframe footer area)
    {
      _type: 'ctaButtonComponent',
      _key: 'cta-booking',
      text: 'Book Your Consultation',
      link: '#contact',
      variant: 'accent',
      size: 'lg',
      alignment: 'center',
    },
    {
      _type: 'spacerComponent',
      _key: 'spacer-7',
      size: 'md',
    },
  ],
  showHeader: true,
  showFooter: true,
  published: true,
  publishedAt: new Date().toISOString(),
};

async function replaceHomePage() {
  console.log('🏠 Replacing home page with wireframe design...\n');

  try {
    if (!process.env.SANITY_API_TOKEN) {
      console.error('❌ Error: SANITY_API_TOKEN not found');
      process.exit(1);
    }

    console.log('📄 Updating home page...');

    // Check if home page exists
    const existing = await client.fetch(`*[_id == "page-home"][0]`);

    if (existing) {
      // Update existing home page
      await client
        .patch('page-home')
        .set({ ...homePageWireframe, _id: undefined })
        .commit();
      console.log('   ✅ Updated: Home page');
    } else {
      // Create new home page
      await client.create(homePageWireframe);
      console.log('   ✅ Created: Home page');
    }

    console.log('\n🎉 Successfully replaced home page!');
    console.log('\n📋 New wireframe page structure (based on wireframe):');
    console.log('   1. Header (Logo + Book Consultation button)');
    console.log('   2. Identity Quote');
    console.log('   3. Hero Image section (placeholder)');
    console.log('   4. Philosophy section');
    console.log('   5. Focus Areas (3 cards)');
    console.log('   6. Headshot profile');
    console.log('   7. Personal Statement with link to full bio');
    console.log('   8. Booking CTA button');
    console.log('   9. Footer (Logo, Practice Description, Contact, CTA)');
    console.log('\n📝 Next steps:');
    console.log('   1. Upload hero background image in Sanity');
    console.log('   2. Upload headshot/profile photo');
    console.log('   3. Upload philosophy section image');
    console.log('   4. Customize text content');
    console.log('\n🚀 View in Sanity Studio: http://localhost:3333');
    console.log('   Navigate to: Pages → Home\n');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

replaceHomePage();
