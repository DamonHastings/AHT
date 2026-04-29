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

async function removeNavigationFromSiteSettings() {
  console.log('🧹 Removing navigation from site settings...\n');

  try {
    // Get the site settings document
    const siteSettings = await client.fetch(`*[_type == "siteSettings"][0]{_id}`);

    if (!siteSettings) {
      console.error('❌ No site settings found!');
      process.exit(1);
    }

    console.log('✅ Found site settings:', siteSettings._id);

    // Remove the deprecated navigation reference from site settings.
    await client
      .patch(siteSettings._id)
      .unset(['navigation'])
      .commit();

    console.log('✅ Removed navigation reference from site settings');

    // Verify the update
    const updated = await client.fetch(`
      *[_type == "siteSettings"][0]{
        _id,
        navigation
      }
    `);

    console.log('\n📋 Verification:');
    console.log('   Navigation field:', updated.navigation ?? 'not set');
    console.log('\n🎉 Site Settings no longer stores main navigation.\n');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

removeNavigationFromSiteSettings();
