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

async function linkNavigationToSiteSettings() {
  console.log('🔗 Linking navigation to site settings...\n');

  try {
    // Get the site settings document
    const siteSettings = await client.fetch(`*[_type == "siteSettings"][0]{_id}`);

    if (!siteSettings) {
      console.error('❌ No site settings found!');
      process.exit(1);
    }

    console.log('✅ Found site settings:', siteSettings._id);

    // Update the navigation reference to point to navigation-main
    await client
      .patch(siteSettings._id)
      .set({
        navigation: {
          _type: 'reference',
          _ref: 'navigation-main'
        }
      })
      .commit();

    console.log('✅ Updated site settings to reference navigation-main');

    // Verify the update
    const updated = await client.fetch(`
      *[_type == "siteSettings"][0]{
        _id,
        "navigation": navigation->{
          _id,
          title,
          items
        }
      }
    `);

    console.log('\n📋 Verification:');
    console.log('   Navigation ID:', updated.navigation._id);
    console.log('   Navigation Title:', updated.navigation.title);
    console.log('   Navigation Items:');
    updated.navigation.items.forEach((item, idx) => {
      const target = item.internalPage || item.anchor || item.externalUrl || 'N/A';
      console.log(`   ${idx + 1}. ${item.label} → ${item.linkType}: ${target}`);
    });

    console.log('\n🎉 Site Settings is now linked to the correct navigation!');
    console.log('   The navbar should now show:');
    console.log('   • Home (/) - page link');
    console.log('   • About (/about) - page link');
    console.log('   • Services (/services) - page link');
    console.log('   • Contact (#contact) - anchor link');
    console.log('\n✨ Refresh your frontend to see the changes!\n');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

linkNavigationToSiteSettings();
