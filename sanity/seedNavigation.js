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

async function seedNavigationAndSettings() {
  console.log('🧭 Setting up navigation and site settings...\n');

  try {
    // First, get the page references
    const homePage = await client.fetch(`*[_type == "page" && slug.current == "home"][0]._id`);
    const aboutPage = await client.fetch(`*[_type == "page" && slug.current == "about"][0]._id`);
    const servicesPage = await client.fetch(`*[_type == "page" && slug.current == "services"][0]._id`);

    if (!homePage) {
      console.error('❌ Home page not found. Run seed-pages first!');
      process.exit(1);
    }

    // Create Navigation Menu
    console.log('📋 Creating main navigation menu...');

    const navigation = {
      _type: 'navigation',
      _id: 'navigation-main',
      title: 'Main Navigation',
      items: [
        {
          _key: 'nav-home',
          label: 'Home',
          linkType: 'internal',
          internalPage: {
            _type: 'reference',
            _ref: homePage,
          },
        },
        {
          _key: 'nav-about',
          label: 'About',
          linkType: 'internal',
          internalPage: {
            _type: 'reference',
            _ref: aboutPage,
          },
        },
        {
          _key: 'nav-services',
          label: 'Services',
          linkType: 'internal',
          internalPage: {
            _type: 'reference',
            _ref: servicesPage,
          },
        },
        {
          _key: 'nav-contact',
          label: 'Contact',
          linkType: 'anchor',
          anchor: '#contact',
        },
      ],
    };

    const existingNav = await client.fetch(`*[_id == "navigation-main"][0]`);
    if (existingNav) {
      await client.patch('navigation-main').set(navigation).commit();
      console.log('   ✅ Updated: Main Navigation');
    } else {
      await client.create(navigation);
      console.log('   ✅ Created: Main Navigation');
    }

    // Create Site Settings
    console.log('⚙️  Creating site settings...');

    const siteSettings = {
      _type: 'siteSettings',
      _id: 'siteSettings',
      title: 'Healing Minds Therapy',
      description: 'Professional mental health services with compassionate, evidence-based care. Specializing in anxiety, depression, trauma, and relationship issues.',
      homePage: {
        _type: 'reference',
        _ref: homePage,
      },
      contactEmail: 'contact@healingminds.com',
      contactPhone: '(555) 123-4567',
      address: {
        street: '123 Main Street, Suite 200',
        city: 'Your City',
        state: 'CA',
        zipCode: '12345',
      },
      seo: {
        keywords: [
          'therapy',
          'mental health',
          'counseling',
          'anxiety treatment',
          'depression therapy',
          'trauma therapy',
          'LMFT',
          'licensed therapist',
        ],
        author: 'Healing Minds Therapy',
      },
    };

    const existingSettings = await client.fetch(`*[_id == "siteSettings"][0]`);
    if (existingSettings) {
      await client.patch('siteSettings').set(siteSettings).commit();
      console.log('   ✅ Updated: Site Settings');
    } else {
      await client.create(siteSettings);
      console.log('   ✅ Created: Site Settings');
    }

    console.log('\n🎉 Successfully configured navigation and site settings!');
    console.log('\n📋 What was created:');
    console.log('   • Main Navigation Menu (4 items)');
    console.log('     - Home → /home');
    console.log('     - About → /about');
    console.log('     - Services → /services');
    console.log('     - Contact → #contact (anchor)');
    console.log('   • Site Settings');
    console.log('     - Home page set to: /home');
    console.log('     - Contact info configured');
    console.log('     - SEO keywords set');
    console.log('\n🚀 View in Sanity Studio: http://localhost:3333');
    console.log('   Navigate to: Site Configuration\n');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

seedNavigationAndSettings();
