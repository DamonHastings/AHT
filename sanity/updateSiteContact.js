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

const CONTACT = {
  contactEmail: 'therapy@arielleraehastings.com',
  contactPhone: '(510) 692-9926',
  address: {
    city: 'Davis',
    state: 'CA',
  },
};

async function updateSiteContact() {
  console.log('📞 Updating site settings contact info...\n');

  const siteSettings = await client.fetch(`*[_type == "siteSettings"][0]{_id}`);
  if (!siteSettings?._id) {
    console.error('❌ No site settings document found.');
    process.exit(1);
  }

  await client
    .patch(siteSettings._id)
    .set(CONTACT)
    .commit();

  const updated = await client.fetch(
    `*[_type == "siteSettings"][0]{contactEmail,contactPhone,address}`,
  );

  console.log('✅ Site settings contact updated:');
  console.log(`   ${updated.address?.city}, ${updated.address?.state}`);
  console.log(`   ${updated.contactPhone}`);
  console.log(`   ${updated.contactEmail}\n`);
}

updateSiteContact().catch((error) => {
  console.error('❌ Error:', error.message);
  process.exit(1);
});
