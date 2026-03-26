#!/usr/bin/env node
/**
 * One-time migration: rewrites legacy page component `_type` strings to current block names.
 * Run from sanity/: node migrateBlockTypes.js
 */
import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

dotenv.config();

const MAP = {
  heroV3Component: 'heroBlock',
  pullQuoteV3Component: 'pullQuoteBlock',
  whoIHelpV3Component: 'whoIHelpBlock',
  theSpaceV3Component: 'theSpaceBlock',
  expressiveV3Component: 'expressiveArtsBlock',
  meetV3Component: 'meetBlock',
  feelingsCheckInV3Component: 'feelingsCheckInBlock',
  ctaV3Component: 'ctaBlock',
};

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
});

function migrateComponents(components) {
  if (!Array.isArray(components)) return components;
  return components.map((c) => {
    const next = MAP[c._type];
    if (next) return { ...c, _type: next };
    return c;
  });
}

async function run() {
  if (!process.env.SANITY_API_TOKEN) {
    console.error('SANITY_API_TOKEN required');
    process.exit(1);
  }

  const pages = await client.fetch(`*[_type == "page"]{_id, components}`);
  let n = 0;
  for (const doc of pages) {
    const next = migrateComponents(doc.components);
    const changed = JSON.stringify(doc.components) !== JSON.stringify(next);
    if (changed) {
      await client.patch(doc._id).set({ components: next }).commit();
      console.log('Migrated', doc._id);
      n++;
    }
  }
  console.log(n ? `Done. Updated ${n} page(s).` : 'No legacy block types found.');
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
