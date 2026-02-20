import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

dotenv.config();

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'your-project-id',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  useCdn: false,
  token: process.env.SANITY_STUDIO_TOKEN,
  apiVersion: '2024-01-01',
});

async function updateSiteSettings() {
  console.log('Updating site settings with footer data...');

  try {
    // Fetch existing site settings
    const existingSettings = await client.fetch(`*[_type == "siteSettings"][0]`);

    if (!existingSettings) {
      console.log('No site settings found. Please create site settings first.');
      return;
    }

    // Update with footer data
    const updatedSettings = {
      ...existingSettings,
      businessName: 'Arielle Hastings Psychotherapy',
      copyrightText: '© 2026 Arielle Hastings, LMFT. All Rights Reserved.',
      socialLinks: [
        {
          _type: 'object',
          _key: 'facebook',
          platform: 'facebook',
          url: 'https://facebook.com/ariellehastingstherapy',
        },
        {
          _type: 'object',
          _key: 'instagram',
          platform: 'instagram',
          url: 'https://instagram.com/ariellehastingstherapy',
        },
        {
          _type: 'object',
          _key: 'linkedin',
          platform: 'linkedin',
          url: 'https://linkedin.com/in/ariellehastings',
        },
      ],
    };

    await client
      .patch(existingSettings._id)
      .set({
        businessName: updatedSettings.businessName,
        copyrightText: updatedSettings.copyrightText,
        socialLinks: updatedSettings.socialLinks,
      })
      .commit();

    console.log('✅ Site settings updated successfully with footer data!');
  } catch (error) {
    console.error('Error updating site settings:', error);
  }
}

updateSiteSettings();
