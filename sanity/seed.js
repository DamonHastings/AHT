/**
 * Seed script for Sanity CMS
 * 
 * This script populates the Sanity dataset with initial content
 * based on a therapist website example.
 * 
 * Usage:
 *   node seed.js
 * 
 * Make sure to set SANITY_STUDIO_PROJECT_ID and SANITY_STUDIO_DATASET in your .env file
 * You may also need SANITY_API_TOKEN for write access
 */

const {createClient} = require('@sanity/client')
const dotenv = require('dotenv')
const path = require('path')

// Load environment variables
dotenv.config({path: path.join(__dirname, '.env')})

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN || '',
})

// Seed data based on example therapist website
const seedData = {
  // Social Links
  socialLinks: {
    _type: 'socialLinks',
    title: 'Social Media Links',
    links: [
      {
        _type: 'object',
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/arielle-hastings',
      },
      {
        _type: 'object',
        platform: 'psychologyToday',
        url: 'https://www.psychologytoday.com/profile/arielle-hastings',
      },
    ],
  },

  // Navigation Menu
  navigation: {
    _type: 'navigation',
    title: 'Main Navigation',
    items: [
      {
        _type: 'object',
        label: 'About',
        linkType: 'anchor',
        anchor: '#about',
      },
      {
        _type: 'object',
        label: 'Practice',
        linkType: 'anchor',
        anchor: '#practice',
      },
      {
        _type: 'object',
        label: 'Specialties',
        linkType: 'anchor',
        anchor: '#specialties',
      },
      {
        _type: 'object',
        label: 'Contact',
        linkType: 'anchor',
        anchor: '#contact',
      },
    ],
  },

  // Footer Content
  footerContent: {
    _type: 'footerContent',
    title: 'Main Footer',
    copyrightText: 'Arielle Hastings Therapy. All rights reserved.',
    licenseText: 'Licensed Marriage and Family Therapist in California',
    columns: [
      {
        _type: 'object',
        title: 'Contact',
        content: [
          {
            _type: 'object',
            text: 'arielle@example.com',
            link: 'mailto:arielle@example.com',
          },
          {
            _type: 'object',
            text: '(555) 123-4567',
            link: 'tel:+15551234567',
          },
        ],
      },
      {
        _type: 'object',
        title: 'Location',
        content: [
          {
            _type: 'object',
            text: '123 Main Street',
          },
          {
            _type: 'object',
            text: 'San Francisco, CA 94102',
          },
        ],
      },
    ],
  },

  // Site Settings
  siteSettings: {
    _type: 'siteSettings',
    title: 'Arielle Hastings Therapy',
    description: 'Licensed Marriage and Family Therapist providing compassionate therapy services in San Francisco, California. Specializing in individual, couples, and family therapy.',
    contactEmail: 'arielle@example.com',
    contactPhone: '(555) 123-4567',
    address: {
      _type: 'object',
      street: '123 Main Street',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94102',
    },
    seo: {
      _type: 'object',
      keywords: [
        'therapy',
        'counseling',
        'marriage and family therapy',
        'LMFT',
        'San Francisco',
        'California',
        'individual therapy',
        'couples therapy',
        'family therapy',
      ],
      author: 'Arielle Hastings',
    },
  },

  // Therapist Profile
  therapist: {
    _type: 'therapist',
    name: 'Arielle Hastings',
    credentials: 'LMFT',
    licenseNumber: 'LMFT12345',
    phone: '(555) 123-4567',
    email: 'arielle@example.com',
    verified: true,
    welcomeMessage: 'Welcome to a safe space for healing, growth, and transformation.',
    bio: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'I am a Licensed Marriage and Family Therapist (LMFT) dedicated to helping individuals, couples, and families navigate life\'s challenges and create meaningful change. With a warm, empathetic approach, I create a safe and non-judgmental space where clients can explore their thoughts, feelings, and experiences.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'My practice is grounded in evidence-based therapeutic approaches, and I tailor my methods to meet the unique needs of each client. I believe in the power of the therapeutic relationship and work collaboratively with clients to help them achieve their goals.',
          },
        ],
      },
    ],
    philosophy: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'I believe that everyone has the capacity for growth and healing. My therapeutic approach is client-centered, meaning I meet clients where they are and work at their pace. I integrate various therapeutic modalities including Cognitive Behavioral Therapy (CBT), Emotionally Focused Therapy (EFT), and mindfulness-based approaches.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'I am committed to creating an inclusive and affirming environment for all clients, regardless of their background, identity, or experiences. I recognize the impact of systemic issues and work to address them within the therapeutic context.',
          },
        ],
      },
    ],
    slug: {
      _type: 'slug',
      current: 'arielle-hastings',
    },
  },

  // Practice Details
  practice: {
    _type: 'practice',
    location: {
      _type: 'object',
      address: '123 Main Street',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94102',
    },
    inPerson: true,
    telehealth: true,
    fees: {
      _type: 'object',
      individual: 150,
      couple: 175,
      family: 200,
    },
    paymentMethods: ['cash', 'check', 'venmo', 'zelle', 'visa', 'mastercard', 'amex', 'ivyPay'],
    insuranceInfo: 'I am an out-of-network provider. I can provide you with a superbill that you can submit to your insurance company for potential reimbursement. I also offer a sliding scale for clients who qualify based on financial need. Please contact me to discuss payment options.',
    consultationOffer: true,
    consultationDuration: 15,
  },

  // Qualifications
  qualification: {
    _type: 'qualification',
    education: [
      {
        _type: 'object',
        degree: 'Master of Arts, Counseling Psychology',
        school: 'California Institute of Integral Studies',
        specialization: 'Expressive Arts Therapy',
      },
      {
        _type: 'object',
        degree: 'Bachelor of Arts, Psychology',
        school: 'University of California, Berkeley',
      },
    ],
    yearsInPractice: 8,
    livedExperience: 'I bring both professional training and personal lived experience to my practice. I understand the complexities of navigating mental health challenges and the importance of finding the right therapeutic fit. This perspective informs my work and helps me connect with clients on a deeper level.',
  },

  // Specialties
  specialties: [
    {
      _type: 'specialty',
      name: 'Anxiety',
      category: 'top',
      description: 'Helping clients manage and overcome anxiety disorders, panic attacks, and generalized anxiety.',
    },
    {
      _type: 'specialty',
      name: 'Depression',
      category: 'top',
      description: 'Supporting individuals dealing with depression, mood disorders, and related challenges.',
    },
    {
      _type: 'specialty',
      name: 'Relationship Issues',
      category: 'top',
      description: 'Working with couples and individuals to improve communication, resolve conflicts, and strengthen relationships.',
    },
    {
      _type: 'specialty',
      name: 'Trauma',
      category: 'expertise',
      description: 'Trauma-informed therapy for individuals who have experienced trauma, including PTSD and complex trauma.',
    },
    {
      _type: 'specialty',
      name: 'LGBTQ+ Affirming',
      category: 'expertise',
      description: 'Providing affirming and supportive therapy for LGBTQ+ individuals and their families.',
    },
    {
      _type: 'specialty',
      name: 'Life Transitions',
      category: 'expertise',
      description: 'Supporting clients through major life changes, career transitions, and personal growth.',
    },
    {
      _type: 'specialty',
      name: 'Grief and Loss',
      category: 'expertise',
      description: 'Compassionate support for individuals navigating grief, loss, and bereavement.',
    },
    {
      _type: 'specialty',
      name: 'Self-Esteem',
      category: 'expertise',
      description: 'Helping clients build self-confidence, self-worth, and positive self-image.',
    },
  ],

  // Treatment Approaches
  treatmentApproaches: [
    {
      _type: 'treatmentApproach',
      name: 'Cognitive Behavioral Therapy (CBT)',
      description: 'Evidence-based approach that helps clients identify and change negative thought patterns and behaviors.',
    },
    {
      _type: 'treatmentApproach',
      name: 'Emotionally Focused Therapy (EFT)',
      description: 'A structured approach to couples therapy that helps partners understand and reshape their emotional responses.',
    },
    {
      _type: 'treatmentApproach',
      name: 'Mindfulness-Based Therapy',
      description: 'Incorporating mindfulness practices to help clients develop awareness and acceptance of their present-moment experience.',
    },
    {
      _type: 'treatmentApproach',
      name: 'Expressive Arts Therapy',
      description: 'Using creative expression as a therapeutic tool to explore emotions and experiences.',
    },
    {
      _type: 'treatmentApproach',
      name: 'Solution-Focused Brief Therapy',
      description: 'A goal-oriented approach that focuses on solutions rather than problems.',
    },
    {
      _type: 'treatmentApproach',
      name: 'Family Systems Therapy',
      description: 'Understanding individuals within the context of their family systems and relationships.',
    },
  ],

  // Content Blocks
  contentBlocks: [
    {
      _type: 'contentBlock',
      title: 'Free Consultation CTA',
      slug: {
        _type: 'slug',
        current: 'free-consultation-cta',
      },
      blockType: 'cta',
      text: 'Ready to take the first step? Schedule a free 15-minute consultation to see if we\'re a good fit.',
      ctaButton: {
        _type: 'object',
        text: 'Schedule Free Consultation',
        link: '#contact',
        style: 'primary',
      },
      displaySettings: {
        _type: 'object',
        backgroundColor: 'blue',
        textAlignment: 'center',
      },
    },
    {
      _type: 'contentBlock',
      title: 'What to Expect',
      blockType: 'featureList',
      slug: {
        _type: 'slug',
        current: 'what-to-expect',
      },
      features: [
        {
          _type: 'object',
          title: 'Safe & Confidential',
          description: 'A non-judgmental space where you can express yourself freely.',
        },
        {
          _type: 'object',
          title: 'Personalized Approach',
          description: 'Therapy tailored to your unique needs and goals.',
        },
        {
          _type: 'object',
          title: 'Evidence-Based Methods',
          description: 'Therapeutic approaches backed by research and proven effectiveness.',
        },
        {
          _type: 'object',
          title: 'Flexible Scheduling',
          description: 'In-person and telehealth options to fit your schedule.',
        },
      ],
      displaySettings: {
        _type: 'object',
        backgroundColor: 'white',
        textAlignment: 'left',
      },
    },
  ],
}

async function seed() {
  console.log('🌱 Starting seed process...\n')

  try {
    // Check if data already exists
    const existingTherapist = await client.fetch('*[_type == "therapist"][0]')
    if (existingTherapist) {
      console.log('⚠️  Data already exists. Skipping seed.')
      console.log('   To re-seed, delete existing documents first.\n')
      return
    }

    // Create Social Links
    console.log('📱 Creating social links...')
    const socialLinksDoc = await client.create(seedData.socialLinks)
    console.log('   ✓ Social links created\n')

    // Create Navigation
    console.log('🧭 Creating navigation menu...')
    const navigationDoc = await client.create(seedData.navigation)
    console.log('   ✓ Navigation created\n')

    // Create Footer Content (with reference to social links)
    console.log('🦶 Creating footer content...')
    const footerContentDoc = await client.create({
      ...seedData.footerContent,
      socialLinks: {
        _type: 'reference',
        _ref: socialLinksDoc._id,
      },
    })
    console.log('   ✓ Footer content created\n')

    // Create Site Settings (with references)
    console.log('⚙️  Creating site settings...')
    const siteSettingsDoc = await client.create({
      ...seedData.siteSettings,
      socialLinks: {
        _type: 'reference',
        _ref: socialLinksDoc._id,
      },
      footer: {
        _type: 'reference',
        _ref: footerContentDoc._id,
      },
      navigation: {
        _type: 'reference',
        _ref: navigationDoc._id,
      },
    })
    console.log('   ✓ Site settings created\n')

    // Create Therapist
    console.log('👤 Creating therapist profile...')
    const therapistDoc = await client.create(seedData.therapist)
    console.log('   ✓ Therapist profile created\n')

    // Create Practice
    console.log('🏢 Creating practice details...')
    const practiceDoc = await client.create(seedData.practice)
    console.log('   ✓ Practice details created\n')

    // Create Qualifications
    console.log('🎓 Creating qualifications...')
    const qualificationDoc = await client.create(seedData.qualification)
    console.log('   ✓ Qualifications created\n')

    // Create Specialties
    console.log('⭐ Creating specialties...')
    const specialtyDocs = await Promise.all(
      seedData.specialties.map(specialty => client.create(specialty))
    )
    console.log(`   ✓ ${specialtyDocs.length} specialties created\n`)

    // Create Treatment Approaches
    console.log('💭 Creating treatment approaches...')
    const treatmentApproachDocs = await Promise.all(
      seedData.treatmentApproaches.map(approach => client.create(approach))
    )
    console.log(`   ✓ ${treatmentApproachDocs.length} treatment approaches created\n`)

    // Create Content Blocks
    console.log('📦 Creating content blocks...')
    const contentBlockDocs = await Promise.all(
      seedData.contentBlocks.map(block => client.create(block))
    )
    console.log(`   ✓ ${contentBlockDocs.length} content blocks created\n`)

    console.log('✅ Seed completed successfully!\n')
    console.log('📊 Summary:')
    console.log(`   - 1 Site Settings document`)
    console.log(`   - 1 Navigation menu`)
    console.log(`   - 1 Footer content`)
    console.log(`   - 1 Social links`)
    console.log(`   - 1 Therapist profile`)
    console.log(`   - 1 Practice details`)
    console.log(`   - 1 Qualifications`)
    console.log(`   - ${specialtyDocs.length} Specialties`)
    console.log(`   - ${treatmentApproachDocs.length} Treatment approaches`)
    console.log(`   - ${contentBlockDocs.length} Content blocks`)
    console.log('\n🎉 Your Sanity dataset is now populated with example content!')
  } catch (error) {
    console.error('❌ Error during seed:', error)
    process.exit(1)
  }
}

// Run seed if this file is executed directly
if (require.main === module) {
  seed()
}

module.exports = seed
