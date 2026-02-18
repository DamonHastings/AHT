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

// About page based on wireframe
const aboutPage = {
  _type: 'page',
  _id: 'page-about-wireframe',
  title: 'About',
  slug: {
    _type: 'slug',
    current: 'about',
  },
  metaTitle: 'About | Advanced Hypnotherapy & Transformational Healing',
  metaDescription: 'Learn about my approach to hypnotherapy, my personal journey, practice philosophy, and credentials. Discover how transformational healing can help you.',
  template: 'custom',
  components: [
    // ABOUT HERO SECTION
    {
      _type: 'heroComponent',
      _key: 'hero-about',
      heading: 'About My Practice',
      subheading: 'Helping you unlock your inner potential through transformational hypnotherapy and holistic healing',
      overlay: 'burgundy',
      overlayOpacity: 0.5,
      alignment: 'center',
      height: 'medium',
    },
    {
      _type: 'spacerComponent',
      _key: 'spacer-1',
      size: 'lg',
    },

    // ARTICLE / PERSONAL STORY SECTION
    {
      _type: 'textContentComponent',
      _key: 'personal-story',
      title: 'My Journey',
      content: [
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'My path to hypnotherapy began with my own healing journey. After experiencing the profound transformative power of hypnosis firsthand, I knew I had found my calling. What started as personal healing became a passion to help others discover their own capacity for change and growth.',
            },
          ],
        },
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'Over the years, I have witnessed countless individuals break free from limiting beliefs, overcome anxiety, release trauma, and step into their authentic power. Each client\'s transformation deepens my commitment to this work and reminds me of the incredible resilience of the human spirit.',
            },
          ],
        },
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'I believe that within each person lies an innate wisdom and healing capacity. My role is to create a safe, supportive space where you can access that inner resource and facilitate the changes you seek.',
            },
          ],
        },
      ],
      alignment: 'left',
    },
    {
      _type: 'spacerComponent',
      _key: 'spacer-2',
      size: 'lg',
    },

    // PRACTICE PHILOSOPHY SECTION
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
              text: 'I approach every session with compassion, authenticity, and a deep respect for your unique journey. My practice is built on the foundation that you are the expert of your own experience, and my role is to guide and facilitate—never to impose.',
            },
          ],
        },
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'I integrate evidence-based hypnotherapy techniques with holistic healing principles, creating a personalized approach that honors your mind, body, and spirit. Whether you\'re working through anxiety, seeking personal growth, or releasing past trauma, I tailor each session to your specific needs and goals.',
            },
          ],
        },
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'Change doesn\'t have to be difficult. When we work with the subconscious mind—the seat of our emotions, beliefs, and habits—transformation can happen naturally and gracefully.',
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

    // CREDIBILITY / BACKGROUND SECTION
    {
      _type: 'textContentComponent',
      _key: 'background',
      title: 'Credentials & Background',
      content: [
        {
          _type: 'block',
          style: 'h3',
          children: [
            {
              _type: 'span',
              marks: ['strong'],
              text: 'Professional Training & Certifications',
            },
          ],
        },
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: '• Certified Clinical Hypnotherapist (CCH)',
            },
          ],
        },
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: '• Advanced Training in Transformational Hypnotherapy',
            },
          ],
        },
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: '• Trauma-Informed Care Certification',
            },
          ],
        },
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: '• Registered with the American Hypnosis Association',
            },
          ],
        },
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: '• Ongoing Professional Development in Mind-Body Healing',
            },
          ],
        },
        {
          _type: 'block',
          style: 'h3',
          children: [
            {
              _type: 'span',
              marks: ['strong'],
              text: 'Areas of Expertise',
            },
          ],
        },
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'With over 15 years of experience in healing and transformational work, I specialize in anxiety relief, trauma healing, breaking unwanted habits, building confidence, and facilitating deep personal transformation. I have helped hundreds of clients move beyond their perceived limitations and create lasting, meaningful change.',
            },
          ],
        },
        {
          _type: 'block',
          style: 'h3',
          children: [
            {
              _type: 'span',
              marks: ['strong'],
              text: 'Commitment to Excellence',
            },
          ],
        },
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'I am committed to maintaining the highest standards of professional practice and ethics. I regularly participate in continuing education, stay current with the latest research in hypnotherapy and neuroscience, and am dedicated to providing safe, effective, and compassionate care.',
            },
          ],
        },
      ],
      alignment: 'left',
    },
    {
      _type: 'spacerComponent',
      _key: 'spacer-4',
      size: 'lg',
    },

    // IMAGERY / SPECIALIZATION SECTION
    {
      _type: 'focusAreasComponent',
      _key: 'specializations',
      sectionTitle: 'Specializations',
      layout: '3col',
      areas: [
        {
          _key: 'spec-1',
          title: 'Anxiety & Stress Relief',
          description: 'Release chronic worry, calm your nervous system, and rediscover peace of mind through deep subconscious work.',
          icon: '🌊',
        },
        {
          _key: 'spec-2',
          title: 'Trauma Healing',
          description: 'Gentle, effective approaches to process and release past trauma, allowing you to reclaim your sense of safety and wholeness.',
          icon: '💚',
        },
        {
          _key: 'spec-3',
          title: 'Breaking Habits',
          description: 'Transform unwanted patterns, behaviors, and habits at the subconscious level for lasting change.',
          icon: '🔓',
        },
        {
          _key: 'spec-4',
          title: 'Confidence Building',
          description: 'Uncover and release limiting beliefs, stepping into your authentic power and self-worth.',
          icon: '✨',
        },
        {
          _key: 'spec-5',
          title: 'Personal Growth',
          description: 'Accelerate your personal development, clarify your purpose, and align with your highest potential.',
          icon: '🌱',
        },
        {
          _key: 'spec-6',
          title: 'Mind-Body Healing',
          description: 'Address psychosomatic issues, chronic pain, and promote holistic wellness through the mind-body connection.',
          icon: '🧘',
        },
      ],
    },
    {
      _type: 'spacerComponent',
      _key: 'spacer-5',
      size: 'md',
    },

    // CLOSING QUOTE
    {
      _type: 'identityQuoteComponent',
      _key: 'quote',
      quote: 'The curious paradox is that when I accept myself just as I am, then I can change.',
      author: 'Carl Rogers',
    },
    {
      _type: 'spacerComponent',
      _key: 'spacer-6',
      size: 'md',
    },

    // CTA
    {
      _type: 'ctaButtonComponent',
      _key: 'cta',
      text: 'Schedule Your Free Consultation',
      link: '#contact',
      variant: 'accent',
      size: 'lg',
      alignment: 'center',
    },
  ],
  showHeader: true,
  showFooter: true,
  published: true,
  publishedAt: new Date().toISOString(),
};

// Seed function
async function seedAboutPage() {
  console.log('🌱 Creating About page based on wireframe...\n');

  try {
    // Check if token is available
    if (!process.env.SANITY_API_TOKEN) {
      console.error('❌ Error: SANITY_API_TOKEN not found in environment variables');
      console.log('\nTo fix this:');
      console.log('1. Go to https://sanity.io/manage');
      console.log('2. Select your project');
      console.log('3. Go to API → Tokens');
      console.log('4. Create a new token with "Editor" or "Administrator" permissions');
      console.log('5. Add it to your .env file: SANITY_API_TOKEN=your_token_here\n');
      process.exit(1);
    }

    console.log(`📄 Creating/updating About page...`);

    // Check if a page with the slug 'about' already exists
    const existing = await client.fetch(`*[_type == "page" && slug.current == "about"][0]`);

    if (existing) {
      console.log(`   ⚠️  About page already exists (ID: ${existing._id}). Updating...`);
      await client
        .patch(existing._id)
        .set({
          ...aboutPage,
          _id: undefined,
          _type: undefined
        })
        .commit();
      console.log(`   ✅ Updated: About page`);
    } else {
      await client.create(aboutPage);
      console.log(`   ✅ Created: About page`);
    }

    console.log('\n🎉 Successfully created/updated About page!');
    console.log('\n📋 Page structure:');
    console.log('   • About Hero - Heading and subtext');
    console.log('   • Personal Story - Your journey section');
    console.log('   • Philosophy - Your practice approach');
    console.log('   • Credentials & Background - Professional info');
    console.log('   • Specializations - 6 focus areas');
    console.log('   • Quote - Inspirational closing');
    console.log('   • CTA Button - Call to action');
    console.log('\n🚀 View it in Sanity Studio: http://localhost:3333');
    console.log('   Navigate to Pages → About');
    console.log('\n💡 You can now customize the content directly in Sanity Studio!\n');

  } catch (error) {
    console.error('\n❌ Error seeding About page:', error.message);
    if (error.message.includes('unauthorized')) {
      console.log('\n⚠️  Authorization error. Please check:');
      console.log('   1. Your SANITY_API_TOKEN is correct');
      console.log('   2. The token has proper permissions (Editor or Administrator)');
      console.log('   3. Your SANITY_STUDIO_PROJECT_ID and SANITY_STUDIO_DATASET are correct\n');
    }
    process.exit(1);
  }
}

// Run the seed function
seedAboutPage();
