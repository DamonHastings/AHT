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

// Sample pages data
const pages = [
  {
    _type: 'page',
    _id: 'page-home',
    title: 'Home',
    slug: {
      _type: 'slug',
      current: 'home',
    },
    metaTitle: 'Home | Healing Minds Therapy',
    metaDescription: 'Find your path to wellness with compassionate, evidence-based therapy tailored to your unique needs. Book your free consultation today.',
    template: 'custom',
    components: [
      {
        _type: 'heroComponent',
        _key: 'hero-1',
        heading: 'Find Your Path to Wellness',
        subheading: 'Compassionate, evidence-based therapy tailored to your unique needs. Take the first step towards a healthier, happier you.',
        overlay: 'dark',
        overlayOpacity: 0.5,
        ctaButton: {
          text: 'Book Free Consultation',
          link: '#contact',
          variant: 'accent',
        },
        alignment: 'center',
        height: 'screen',
      },
      {
        _type: 'identityQuoteComponent',
        _key: 'quote-1',
        quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
        author: 'Nelson Mandela',
      },
      {
        _type: 'spacerComponent',
        _key: 'spacer-1',
        size: 'md',
      },
      {
        _type: 'philosophySectionComponent',
        _key: 'philosophy-1',
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
                text: 'Together, we will explore your unique experiences and develop strategies that resonate with your personal values and goals. Every individual has the capacity for growth and healing—my role is to provide the support and evidence-based tools to help you discover your inner strength.',
              },
            ],
          },
        ],
      },
      {
        _type: 'spacerComponent',
        _key: 'spacer-2',
        size: 'md',
      },
      {
        _type: 'focusAreasComponent',
        _key: 'focus-1',
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
        _key: 'spacer-3',
        size: 'lg',
      },
      {
        _type: 'personalStatementComponent',
        _key: 'statement-1',
        statement: 'I am a licensed therapist with over 10 years of experience helping individuals navigate life\'s challenges. My approach is compassionate, evidence-based, and tailored to each client\'s unique needs. I specialize in anxiety, depression, and trauma recovery, and I\'m committed to creating a therapeutic environment where you feel heard, understood, and supported.',
        showFullBioLink: true,
        fullBioLink: '/about',
      },
      {
        _type: 'spacerComponent',
        _key: 'spacer-4',
        size: 'md',
      },
      {
        _type: 'ctaButtonComponent',
        _key: 'cta-1',
        text: 'Ready to Begin Your Journey?',
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
  },
  {
    _type: 'page',
    _id: 'page-about',
    title: 'About Me',
    slug: {
      _type: 'slug',
      current: 'about',
    },
    metaTitle: 'About | Healing Minds Therapy',
    metaDescription: 'Learn about my approach to therapy, my qualifications, and my commitment to providing compassionate, evidence-based mental health care.',
    template: 'custom',
    components: [
      {
        _type: 'heroComponent',
        _key: 'hero-about',
        heading: 'About My Practice',
        subheading: 'Dedicated to your mental health and well-being',
        overlay: 'burgundy',
        overlayOpacity: 0.6,
        alignment: 'center',
        height: 'medium',
      },
      {
        _type: 'spacerComponent',
        _key: 'spacer-about-1',
        size: 'md',
      },
      {
        _type: 'textContentComponent',
        _key: 'text-about-1',
        title: 'Welcome',
        content: [
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Thank you for taking the time to learn more about my practice. I understand that seeking therapy is a significant step, and I\'m honored that you\'re considering working with me.',
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
        alignment: 'left',
      },
      {
        _type: 'spacerComponent',
        _key: 'spacer-about-2',
        size: 'lg',
      },
      {
        _type: 'textContentComponent',
        _key: 'text-about-2',
        title: 'My Background',
        content: [
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'With over a decade of experience in mental health services, I have worked with individuals from diverse backgrounds facing a wide range of challenges. I hold a Master\'s degree in Clinical Psychology and am a Licensed Marriage and Family Therapist (LMFT).',
              },
            ],
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Throughout my career, I have specialized in anxiety disorders, depression, trauma recovery, and relationship issues. I have completed advanced training in Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and trauma-informed care.',
              },
            ],
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'My approach integrates evidence-based practices with a deep respect for each client\'s unique experiences and cultural background. I am committed to ongoing professional development and regularly attend workshops and training to stay current with the latest research and therapeutic techniques.',
              },
            ],
          },
        ],
        alignment: 'left',
      },
      {
        _type: 'spacerComponent',
        _key: 'spacer-about-3',
        size: 'md',
      },
      {
        _type: 'philosophySectionComponent',
        _key: 'philosophy-about',
        title: 'My Therapeutic Approach',
        content: [
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'I practice from a person-centered, integrative approach that recognizes the inherent worth and resilience of every individual. I believe that you are the expert on your own life, and my role is to provide guidance, support, and evidence-based tools to help you achieve your goals.',
              },
            ],
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Our work together will be collaborative, compassionate, and tailored to your specific needs. Whether you\'re dealing with anxiety, depression, trauma, or life transitions, I will work with you to develop strategies that promote healing and personal growth.',
              },
            ],
          },
        ],
      },
      {
        _type: 'spacerComponent',
        _key: 'spacer-about-4',
        size: 'lg',
      },
      {
        _type: 'focusAreasComponent',
        _key: 'focus-about',
        sectionTitle: 'Specializations',
        layout: '3col',
        areas: [
          {
            _key: 'spec-1',
            title: 'Anxiety Disorders',
            description: 'Generalized anxiety, panic disorder, social anxiety, and phobias. Evidence-based treatment including CBT and exposure therapy.',
            icon: '🌊',
          },
          {
            _key: 'spec-2',
            title: 'Depression',
            description: 'Major depressive disorder, persistent depressive disorder, and mood regulation. Compassionate support and proven therapeutic interventions.',
            icon: '☀️',
          },
          {
            _key: 'spec-3',
            title: 'Trauma & PTSD',
            description: 'Trauma-informed care for past traumatic experiences. Safe, gentle approach to processing and healing.',
            icon: '💚',
          },
          {
            _key: 'spec-4',
            title: 'Relationship Issues',
            description: 'Communication problems, conflict resolution, intimacy issues, and relationship transitions.',
            icon: '💑',
          },
          {
            _key: 'spec-5',
            title: 'Life Transitions',
            description: 'Career changes, loss, major life decisions, and adjusting to new circumstances.',
            icon: '🌱',
          },
          {
            _key: 'spec-6',
            title: 'Self-Esteem',
            description: 'Building confidence, addressing negative self-talk, and developing a healthier relationship with yourself.',
            icon: '✨',
          },
        ],
      },
      {
        _type: 'spacerComponent',
        _key: 'spacer-about-5',
        size: 'md',
      },
      {
        _type: 'identityQuoteComponent',
        _key: 'quote-about',
        quote: 'In every person, there is a sun. Just let them shine.',
        author: 'Socrates',
      },
      {
        _type: 'spacerComponent',
        _key: 'spacer-about-6',
        size: 'md',
      },
      {
        _type: 'ctaButtonComponent',
        _key: 'cta-about',
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
  },
  {
    _type: 'page',
    _id: 'page-services',
    title: 'Services',
    slug: {
      _type: 'slug',
      current: 'services',
    },
    metaTitle: 'Services | Healing Minds Therapy',
    metaDescription: 'Explore our therapy services including individual therapy, couples counseling, and specialized treatment for anxiety, depression, and trauma.',
    template: 'custom',
    components: [
      {
        _type: 'heroComponent',
        _key: 'hero-services',
        heading: 'Therapy Services',
        subheading: 'Professional mental health services tailored to your needs',
        overlay: 'teal',
        overlayOpacity: 0.5,
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
        _key: 'spacer-services-1',
        size: 'md',
      },
      {
        _type: 'textContentComponent',
        _key: 'text-services-1',
        title: 'Comprehensive Mental Health Care',
        content: [
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'I offer a range of therapeutic services designed to support your mental health and well-being. Whether you\'re seeking individual therapy, couples counseling, or specialized treatment, I provide evidence-based care in a compassionate, non-judgmental environment.',
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
        alignment: 'center',
      },
      {
        _type: 'spacerComponent',
        _key: 'spacer-services-2',
        size: 'lg',
      },
      {
        _type: 'focusAreasComponent',
        _key: 'services-list',
        sectionTitle: 'Available Services',
        layout: '2col',
        areas: [
          {
            _key: 'service-1',
            title: 'Individual Therapy',
            description: 'One-on-one sessions focused on your personal growth, mental health challenges, and therapeutic goals. Sessions are 50 minutes and tailored to your specific needs.',
            icon: '🧘',
          },
          {
            _key: 'service-2',
            title: 'Couples Therapy',
            description: 'Work together to improve communication, resolve conflicts, and strengthen your relationship. 60-minute sessions designed for both partners.',
            icon: '💑',
          },
          {
            _key: 'service-3',
            title: 'Anxiety Treatment',
            description: 'Specialized treatment for generalized anxiety, panic disorder, social anxiety, and phobias using CBT and other evidence-based approaches.',
            icon: '🌊',
          },
          {
            _key: 'service-4',
            title: 'Depression Treatment',
            description: 'Comprehensive care for depression including cognitive therapy, behavioral activation, and mindfulness-based interventions.',
            icon: '☀️',
          },
          {
            _key: 'service-5',
            title: 'Trauma Therapy',
            description: 'Trauma-informed therapy for PTSD and complex trauma. Safe, gentle approach to processing and healing from traumatic experiences.',
            icon: '💚',
          },
          {
            _key: 'service-6',
            title: 'Stress Management',
            description: 'Learn practical strategies for managing stress, preventing burnout, and maintaining work-life balance.',
            icon: '🧘‍♀️',
          },
        ],
      },
      {
        _type: 'spacerComponent',
        _key: 'spacer-services-3',
        size: 'lg',
      },
      {
        _type: 'textContentComponent',
        _key: 'text-services-2',
        title: 'Session Information',
        content: [
          {
            _type: 'block',
            style: 'h3',
            children: [
              {
                _type: 'span',
                marks: ['strong'],
                text: 'Session Format',
              },
            ],
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: '• Individual sessions: 50 minutes',
              },
            ],
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: '• Couples sessions: 60 minutes',
              },
            ],
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: '• Initial consultation: 15 minutes (complimentary)',
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
                text: 'Availability',
              },
            ],
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: '• Monday - Friday: 9:00 AM - 6:00 PM',
              },
            ],
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: '• Saturday: Limited appointments available',
              },
            ],
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: '• Evening appointments available upon request',
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
                text: 'Insurance & Payment',
              },
            ],
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'I accept most major insurance plans and provide superbills for out-of-network reimbursement. Sliding scale fees available based on financial need. Payment methods include credit cards, HSA/FSA, and various payment platforms.',
              },
            ],
          },
        ],
        alignment: 'left',
      },
      {
        _type: 'spacerComponent',
        _key: 'spacer-services-4',
        size: 'md',
      },
      {
        _type: 'philosophySectionComponent',
        _key: 'philosophy-services',
        title: 'My Approach to Treatment',
        content: [
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'I use an integrative, client-centered approach that draws from multiple evidence-based therapeutic modalities. This means that treatment is tailored to your unique needs, preferences, and goals.',
              },
            ],
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'My therapeutic approach includes Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), mindfulness-based interventions, and trauma-informed care. Together, we will develop a treatment plan that feels right for you.',
              },
            ],
          },
        ],
      },
      {
        _type: 'spacerComponent',
        _key: 'spacer-services-5',
        size: 'lg',
      },
      {
        _type: 'textContentComponent',
        _key: 'text-services-3',
        title: 'Getting Started',
        content: [
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'Beginning therapy is a courageous step. I offer a free 15-minute consultation to discuss your needs, answer questions about my approach, and determine if we\'re a good fit.',
              },
            ],
          },
          {
            _type: 'block',
            style: 'normal',
            children: [
              {
                _type: 'span',
                text: 'During this consultation, we can discuss your concerns, treatment goals, and any questions you have about the therapeutic process. There\'s no pressure or obligation—it\'s simply an opportunity to see if working together feels right for you.',
              },
            ],
          },
        ],
        alignment: 'center',
      },
      {
        _type: 'spacerComponent',
        _key: 'spacer-services-6',
        size: 'md',
      },
      {
        _type: 'ctaButtonComponent',
        _key: 'cta-services',
        text: 'Schedule Your Free Consultation',
        link: '#contact',
        variant: 'accent',
        size: 'lg',
        alignment: 'center',
      },
      {
        _type: 'spacerComponent',
        _key: 'spacer-services-7',
        size: 'md',
      },
      {
        _type: 'identityQuoteComponent',
        _key: 'quote-services',
        quote: 'Taking care of your mental health is not a luxury—it\'s a necessity.',
        author: null,
      },
    ],
    showHeader: true,
    showFooter: true,
    published: true,
    publishedAt: new Date().toISOString(),
  },
];

// Seed function
async function seedPages() {
  console.log('🌱 Starting to seed sample pages...\n');

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

    for (const page of pages) {
      console.log(`📄 Creating page: ${page.title}...`);

      // Check if page already exists
      const existing = await client.fetch(`*[_id == "${page._id}"][0]`);

      if (existing) {
        console.log(`   ⚠️  Page "${page.title}" already exists. Updating...`);
        await client
          .patch(page._id)
          .set({ ...page, _id: undefined })
          .commit();
        console.log(`   ✅ Updated: ${page.title}`);
      } else {
        await client.create(page);
        console.log(`   ✅ Created: ${page.title}`);
      }
    }

    console.log('\n🎉 Successfully seeded all sample pages!');
    console.log('\n📋 Pages created:');
    console.log('   • Home (/home)');
    console.log('   • About Me (/about)');
    console.log('   • Services (/services)');
    console.log('\n🚀 View them in Sanity Studio: http://localhost:3333');
    console.log('   Navigate to Pages → All Pages\n');

  } catch (error) {
    console.error('\n❌ Error seeding pages:', error.message);
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
seedPages();
