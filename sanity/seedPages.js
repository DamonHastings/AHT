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

const pages = [
  {
    _type: 'page',
    _id: 'page-services',
    title: 'Services',
    slug: {
      _type: 'slug',
      current: 'services',
    },
    metaTitle: 'Services | Healing Minds Therapy',
    metaDescription:
      'Explore our therapy services including individual therapy, couples counseling, and specialized treatment for anxiety, depression, and trauma.',
    template: 'custom',
    showHeader: false,
    showFooter: false,
    published: true,
    publishedAt: new Date().toISOString(),
    components: [
      {
        _type: 'heroBlock',
        _key: 'hero-services',
        kickerText: 'Services',
        heading: 'Therapy Services',
        headingEmphasis: 'Services',
        body: 'Professional mental health services tailored to your needs.',
        primaryCtaText: 'Book consultation',
        primaryCtaHref: '#contact',
        secondaryCtaText: 'About me',
        secondaryCtaHref: '/about',
      },
      {
        _type: 'spacerBlock',
        _key: 'sp-s1',
        size: 'md',
      },
      {
        _type: 'proseSectionBlock',
        _key: 'intro',
        title: 'Comprehensive Mental Health Care',
        alignment: 'center',
        content: [
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: "I offer a range of therapeutic services designed to support your mental health and well-being. Whether you're seeking individual therapy, couples counseling, or specialized treatment, I provide evidence-based care in a compassionate, non-judgmental environment.",
              },
            ],
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'All sessions are available both in-person and via secure telehealth, providing flexibility to meet your needs and schedule.',
              },
            ],
          },
        ],
      },
      {
        _type: 'spacerBlock',
        _key: 'sp-s2',
        size: 'lg',
      },
      {
        _type: 'whoIHelpBlock',
        _key: 'services-list',
        eyebrow: 'what we offer',
        heading: 'Available Services',
        headingEmphasis: 'Services',
        cards: [
          {
            _key: 'service-1',
            variant: 'women',
            tag: 'Individual',
            title: '🧘 Individual Therapy',
            body: 'One-on-one sessions focused on your personal growth, mental health challenges, and therapeutic goals. Sessions are 50 minutes and tailored to your specific needs.',
          },
          {
            _key: 'service-2',
            variant: 'women',
            tag: 'Couples',
            title: '💑 Couples Therapy',
            body: 'Work together to improve communication, resolve conflicts, and strengthen your relationship. 60-minute sessions designed for both partners.',
          },
          {
            _key: 'service-3',
            variant: 'teens',
            tag: 'Anxiety',
            title: '🌊 Anxiety Treatment',
            body: 'Specialized treatment for generalized anxiety, panic disorder, social anxiety, and phobias using CBT and other evidence-based approaches.',
          },
          {
            _key: 'service-4',
            variant: 'children',
            tag: 'Depression',
            title: '☀️ Depression Treatment',
            body: 'Comprehensive care for depression including cognitive therapy, behavioral activation, and mindfulness-based interventions.',
          },
          {
            _key: 'service-5',
            variant: 'seed',
            tag: 'Trauma',
            title: '💚 Trauma Therapy',
            body: 'Trauma-informed therapy for PTSD and complex trauma. Safe, gentle approach to processing and healing from traumatic experiences.',
          },
          {
            _key: 'service-6',
            variant: 'women',
            tag: 'Stress',
            title: '🧘‍♀️ Stress Management',
            body: 'Learn practical strategies for managing stress, preventing burnout, and maintaining work-life balance.',
          },
        ],
      },
      {
        _type: 'spacerBlock',
        _key: 'sp-s3',
        size: 'lg',
      },
      {
        _type: 'proseSectionBlock',
        _key: 'session-info',
        title: 'Session Information',
        alignment: 'left',
        content: [
          {
            _type: 'block',
            style: 'h3',
            children: [{ _type: 'span', marks: ['strong'], text: 'Session Format' }],
          },
          {
            _type: 'block',
            style: 'normal',
            children: [{ _type: 'span', text: '• Individual sessions: 50 minutes' }],
          },
          {
            _type: 'block',
            style: 'normal',
            children: [{ _type: 'span', text: '• Couples sessions: 60 minutes' }],
          },
          {
            _type: 'block',
            style: 'normal',
            children: [{ _type: 'span', text: '• Initial consultation: 15 minutes (complimentary)' }],
          },
          {
            _type: 'block',
            style: 'h3',
            children: [{ _type: 'span', marks: ['strong'], text: 'Insurance & Payment' }],
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'I accept most major insurance plans and provide superbills for out-of-network reimbursement. Sliding scale fees available based on financial need.',
              },
            ],
          },
        ],
      },
      {
        _type: 'spacerBlock',
        _key: 'sp-s4',
        size: 'md',
      },
      {
        _type: 'expressiveArtsBlock',
        _key: 'approach',
        eyebrow: 'treatment',
        heading: 'My Approach to Treatment',
        paragraphs: [
          'I use an integrative, client-centered approach that draws from multiple evidence-based therapeutic modalities. Treatment is tailored to your unique needs, preferences, and goals.',
          'My therapeutic approach includes Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), mindfulness-based interventions, and trauma-informed care.',
        ],
        modalities: [],
        quotes: [],
      },
      {
        _type: 'spacerBlock',
        _key: 'sp-s5',
        size: 'lg',
      },
      {
        _type: 'proseSectionBlock',
        _key: 'getting-started',
        title: 'Getting Started',
        alignment: 'center',
        content: [
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: "Beginning therapy is a courageous step. I offer a free 15-minute consultation to discuss your needs, answer questions about my approach, and determine if we're a good fit.",
              },
            ],
          },
        ],
      },
      {
        _type: 'spacerBlock',
        _key: 'sp-s6',
        size: 'md',
      },
      {
        _type: 'ctaBlock',
        _key: 'cta-services',
        heading: 'Schedule Your Free Consultation',
        headingEmphasis: 'No obligation.',
        subheading: 'We can talk through what you need and what comes next.',
        buttonText: 'Schedule Your Free Consultation',
        buttonHref: '#contact',
      },
      {
        _type: 'spacerBlock',
        _key: 'sp-s7',
        size: 'md',
      },
      {
        _type: 'pullQuoteBlock',
        _key: 'quote-services',
        eyebrow: 'reminder',
        quote: "Taking care of your mental health is not a luxury—it's a necessity.",
        body: '',
      },
    ],
  },
];

async function seedPages() {
  console.log('🌱 Seeding Services page...\n');

  try {
    if (!process.env.SANITY_API_TOKEN) {
      console.error('❌ SANITY_API_TOKEN not found');
      process.exit(1);
    }

    for (const page of pages) {
      console.log(`📄 ${page.title}...`);
      const existing = await client.fetch(`*[_id == "${page._id}"][0]`);

      if (existing) {
        await client
          .patch(page._id)
          .set({ ...page, _id: undefined, _type: undefined })
          .commit();
        console.log(`   ✅ Updated: ${page.title}`);
      } else {
        await client.create(page);
        console.log(`   ✅ Created: ${page.title}`);
      }
    }

    console.log('\n🎉 Done. Use seedAboutPage.js and seedHome.js for About and Home.\n');
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

seedPages();
