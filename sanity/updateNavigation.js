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

// Navigation with page links instead of anchors
const navigation = {
  _type: 'navigation',
  _id: 'navigation-main',
  title: 'Main Navigation',
  items: [
    {
      _key: 'nav-home',
      label: 'Home',
      linkType: 'internal',
      internalPage: '',  // Root path
    },
    {
      _key: 'nav-about',
      label: 'About',
      linkType: 'internal',
      internalPage: 'about',
    },
    {
      _key: 'nav-services',
      label: 'Services',
      linkType: 'internal',
      internalPage: 'services',
    },
    {
      _key: 'nav-contact',
      label: 'Contact',
      linkType: 'anchor',
      anchor: '#contact',
    },
  ],
};

// Update function
async function updateNavigation() {
  console.log('🧭 Updating navigation to use page links...\n');

  try {
    // Check if token is available
    if (!process.env.SANITY_API_TOKEN) {
      console.error('❌ Error: SANITY_API_TOKEN not found in environment variables');
      process.exit(1);
    }

    // Check if navigation exists
    const existing = await client.fetch(`*[_id == "navigation-main"][0]`);

    if (existing) {
      console.log('   ⚠️  Navigation already exists. Updating...');
      await client
        .patch('navigation-main')
        .set({ ...navigation, _id: undefined, _type: undefined })
        .commit();
      console.log('   ✅ Updated navigation');
    } else {
      await client.create(navigation);
      console.log('   ✅ Created navigation');
    }

    console.log('\n🎉 Navigation updated successfully!');
    console.log('\n📋 Navigation structure:');
    console.log('   • Home → / (internal page link)');
    console.log('   • About → /about (internal page link)');
    console.log('   • Services → /services (internal page link)');
    console.log('   • Contact → #contact (anchor link)');
    console.log('\n💡 These links now use React Router for navigation!');
    console.log('   - Internal page links = smooth page transitions');
    console.log('   - Anchor links = scroll to sections on current page\n');

  } catch (error) {
    console.error('\n❌ Error updating navigation:', error.message);
    process.exit(1);
  }
}

// Run the update function
updateNavigation();
