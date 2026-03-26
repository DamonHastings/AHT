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

const aboutPage = {
  _type: 'page',
  _id: 'page-about',
  title: 'About',
  slug: {
    _type: 'slug',
    current: 'about',
  },
  metaTitle: 'About | Healing Minds Therapy',
  metaDescription:
    'Learn about my approach to therapy, my qualifications, and my commitment to providing compassionate, evidence-based mental health care.',
  template: 'custom',
  showHeader: false,
  showFooter: false,
  published: true,
  publishedAt: new Date().toISOString(),
  components: [
    {
      _type: 'heroBlock',
      _key: 'hero-about',
      kickerText: 'About',
      heading: 'About My Practice',
      headingEmphasis: 'Practice',
      body: 'Helping you unlock your inner potential through transformational hypnotherapy and holistic healing.',
      primaryCtaText: 'Book a consultation',
      primaryCtaHref: '#contact',
      secondaryCtaText: 'Our services',
      secondaryCtaHref: '/services',
    },
    {
      _type: 'spacerBlock',
      _key: 'sp-1',
      size: 'md',
    },
    {
      _type: 'proseSectionBlock',
      _key: 'welcome',
      title: 'Welcome',
      alignment: 'left',
      content: [
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: "Thank you for taking the time to learn more about my practice. I understand that seeking therapy is a significant step, and I'm honored that you're considering working with me.",
            },
          ],
        },
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'I believe that therapy is a collaborative journey, and my goal is to create a space where you feel safe, heard, and empowered to make meaningful changes in your life.',
            },
          ],
        },
      ],
    },
    {
      _type: 'spacerBlock',
      _key: 'sp-2',
      size: 'lg',
    },
    {
      _type: 'proseSectionBlock',
      _key: 'journey',
      title: 'My Journey',
      alignment: 'left',
      content: [
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: "My path to hypnotherapy began with my own healing journey. After experiencing the profound transformative power of hypnosis firsthand, I knew I had found my calling.",
            },
          ],
        },
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: "Over the years, I have witnessed countless individuals break free from limiting beliefs, overcome anxiety, release trauma, and step into their authentic power.",
            },
          ],
        },
      ],
    },
    {
      _type: 'spacerBlock',
      _key: 'sp-3',
      size: 'lg',
    },
    {
      _type: 'proseSectionBlock',
      _key: 'philosophy',
      title: 'My Philosophy',
      alignment: 'left',
      content: [
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: 'I approach every session with compassion, authenticity, and a deep respect for your unique journey. My practice is built on the foundation that you are the expert of your own experience.',
            },
          ],
        },
      ],
    },
    {
      _type: 'spacerBlock',
      _key: 'sp-4',
      size: 'lg',
    },
    {
      _type: 'whoIHelpBlock',
      _key: 'specializations',
      eyebrow: 'areas of focus',
      heading: 'Specializations',
      headingEmphasis: 'Specializations',
      cards: [
        {
          _key: 'c1',
          variant: 'women',
          tag: 'Anxiety',
          title: '🌊 Anxiety & Stress Relief',
          body: 'Release chronic worry, calm your nervous system, and rediscover peace of mind through deep subconscious work.',
        },
        {
          _key: 'c2',
          variant: 'teens',
          tag: 'Trauma',
          title: '💚 Trauma Healing',
          body: 'Gentle, effective approaches to process and release past trauma, allowing you to reclaim your sense of safety and wholeness.',
        },
        {
          _key: 'c3',
          variant: 'children',
          tag: 'Habits',
          title: '🔓 Breaking Habits',
          body: 'Transform unwanted patterns, behaviors, and habits at the subconscious level for lasting change.',
        },
        {
          _key: 'c4',
          variant: 'seed',
          tag: 'Growth',
          title: '✨ Confidence Building',
          body: 'Uncover and release limiting beliefs, stepping into your authentic power and self-worth.',
        },
        {
          _key: 'c5',
          variant: 'women',
          tag: 'Life',
          title: '🌱 Personal Growth',
          body: 'Accelerate your personal development, clarify your purpose, and align with your highest potential.',
        },
        {
          _key: 'c6',
          variant: 'teens',
          tag: 'Body',
          title: '🧘 Mind-Body Healing',
          body: 'Address psychosomatic issues, chronic pain, and promote holistic wellness through the mind-body connection.',
        },
      ],
    },
    {
      _type: 'spacerBlock',
      _key: 'sp-5',
      size: 'md',
    },
    {
      _type: 'pullQuoteBlock',
      _key: 'quote',
      eyebrow: 'words to hold',
      quote: 'The curious paradox is that when I accept myself just as I am, then I can change.',
      body: '— Carl Rogers',
    },
    {
      _type: 'spacerBlock',
      _key: 'sp-6',
      size: 'md',
    },
    {
      _type: 'ctaBlock',
      _key: 'cta',
      heading: 'Ready to begin?',
      headingEmphasis: 'The first conversation is free.',
      subheading: 'Schedule a consultation at your pace.',
      buttonText: 'Schedule Your Free Consultation',
      buttonHref: '#contact',
    },
  ],
};

async function seedAboutPage() {
  console.log('🌱 Creating / updating About page...\n');

  try {
    if (!process.env.SANITY_API_TOKEN) {
      console.error('❌ SANITY_API_TOKEN not found');
      process.exit(1);
    }

    const existing = await client.fetch(`*[_type == "page" && slug.current == "about"][0]`);

    if (existing) {
      console.log(`   Updating About (${existing._id})...`);
      await client
        .patch(existing._id)
        .set({
          ...aboutPage,
          _id: undefined,
          _type: undefined,
        })
        .commit();
      console.log('   ✅ Updated');
    } else {
      await client.create(aboutPage);
      console.log('   ✅ Created');
    }

    console.log('\n🎉 About page ready.\n');
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

seedAboutPage();
