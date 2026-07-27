#!/usr/bin/env node
/**
 * One-time migration: moves legacy flat page SEO fields into the shared `seo`
 * object introduced in schemas/objects/seo.js.
 *   page.metaTitle       -> page.seo.metaTitle
 *   page.metaDescription -> page.seo.metaDescription
 * Then removes the legacy top-level fields. Safe to re-run (idempotent): it skips
 * a page if `seo.metaTitle`/`seo.metaDescription` is already populated, so it
 * never clobbers values an editor has already set on the new object.
 *
 * Run from sanity/:  SANITY_API_TOKEN=... node migrateSeoFields.js
 */
import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

dotenv.config();

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'gpgx1ndq',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
});

async function run() {
  if (!process.env.SANITY_API_TOKEN) {
    console.error('SANITY_API_TOKEN required (a token with write access).');
    process.exit(1);
  }

  // Raw query returns both published and draft docs.
  const pages = await client.fetch(
    `*[_type == "page"]{ _id, metaTitle, metaDescription, seo }`
  );

  let n = 0;
  for (const doc of pages) {
    const hasLegacy = doc.metaTitle != null || doc.metaDescription != null;
    if (!hasLegacy) continue;

    const set = {};
    if (doc.metaTitle != null && doc.seo?.metaTitle == null) {
      set['seo.metaTitle'] = doc.metaTitle;
    }
    if (doc.metaDescription != null && doc.seo?.metaDescription == null) {
      set['seo.metaDescription'] = doc.metaDescription;
    }

    let patch = client.patch(doc._id);
    if (Object.keys(set).length) patch = patch.set(set);
    patch = patch.unset(['metaTitle', 'metaDescription']);

    await patch.commit();
    console.log('Migrated', doc._id);
    n++;
  }

  console.log(n ? `Done. Updated ${n} page(s).` : 'No legacy SEO fields found.');
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
