#!/usr/bin/env node
/**
 * Seeds the Home page with V3 design components.
 * Run: node sanity/seedV3Home.js
 * Requires: SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET, SANITY_API_TOKEN in .env
 */
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

const v3HomePage = {
  _type: 'page',
  _id: 'page-home',
  title: 'Home',
  slug: { _type: 'slug', current: 'home' },
  metaTitle: '[Practice Name] — Expressive Arts Therapy | Davis, CA',
  metaDescription:
    "Therapy doesn't have to look like sitting still and explaining yourself. Together we find another way in — through color, movement, making, and play.",
  template: 'custom',
  showHeader: false,
  showFooter: false,
  published: true,
  publishedAt: new Date().toISOString(),
  components: [
    {
      _type: 'heroV3Component',
      _key: 'hero-v3',
      kickerText: 'Expressive Arts Therapy · Davis, CA',
      heading: "You don't have to find the words.",
      headingEmphasis: 'words.',
      body:
        "Therapy doesn't have to look like sitting still and explaining yourself. Together, we find another way in — through color, movement, making, and play — so that healing can happen even when language falls short.",
      primaryCtaText: 'Start with a free consultation',
      primaryCtaHref: '#',
      secondaryCtaText: 'How it works →',
      secondaryCtaHref: '#',
    },
    {
      _type: 'pullQuoteV3Component',
      _key: 'pullquote-v3',
      eyebrow: 'a different kind of therapy',
      quote: '"What if the way through isn\'t talking about it — but making something with it?"',
      body:
        "Expressive Arts therapy uses drawing, movement, writing, music, and play to open doors that words alone can't. It's not about being creative. It's about being human — and trusting that some things are easier to show than to say. Whether you're 8 or 28, this work meets you where you are.",
    },
    {
      _type: 'whoIHelpV3Component',
      _key: 'who-v3',
      eyebrow: 'who I work with',
      heading: 'Everyone deserves a way in.',
      headingEmphasis: 'way in.',
      cards: [
        {
          _key: 'card-children',
          variant: 'children',
          tag: 'Children · Ages 8–12',
          title: "Little ones with big feelings",
          body:
            "Kids don't always have the vocabulary for what they're carrying. Through play, art, and sandtray, I give children a safe space to work through anxiety, transitions, and family changes — without ever needing to put it perfectly into words.",
          linkText: 'For parents →',
          linkHref: '#',
        },
        {
          _key: 'card-teens',
          variant: 'teens',
          tag: 'Teens · Ages 13–18',
          title: 'For teens who are over being told to "just open up"',
          body:
            "You've probably heard that enough. This isn't that. We work with what actually interests you — music, movement, writing, making things — and let that be the door. No forced conversation. No performance of wellness. Real work, real connection.",
          linkText: 'Read more →',
          linkHref: '#',
        },
        {
          _key: 'card-women',
          variant: 'women',
          tag: 'Women & Young Adults',
          title: 'For women in transition, growth, or grief',
          body:
            "Identity. Relationships. Burnout. Becoming. Therapy for women isn't one-size-fits-all. I offer a warm, unhurried space to explore who you are, who you've been, and who you're becoming — at whatever pace feels right for you.",
          linkText: 'Learn more →',
          linkHref: '#',
        },
        {
          _key: 'card-seed',
          variant: 'seed',
          tag: 'SEED Scholars · UC Davis',
          title: "For students carrying more than a backpack",
          body:
            "Being a SEED scholar means navigating college while holding your family's hopes, your community's expectations, and your own. I work with SEED students to build support that honors all of who you are — not just the student part.",
          linkText: 'For SEED scholars →',
          linkHref: '#',
        },
      ],
    },
    {
      _type: 'theSpaceV3Component',
      _key: 'space-v3',
      eyebrow: 'the studio',
      heading: 'A room that feels like permission to breathe.',
      headingEmphasis: 'permission to breathe.',
      paragraphs: [
        "The space matters. A therapy room should feel like somewhere you'd actually want to sit — not a waiting room or a clinical office. This is a space with natural light, soft textures, and materials for making things. It was designed to be welcoming for everyone from an 8-year-old to a graduate student.",
        "There's a teal sofa. A warm terracotta chair. Art on the walls. Supplies within reach. And always, sheer curtains catching the afternoon light from Davis's wide sky.",
        "This isn't an accident — every detail is chosen to signal: you can let your guard down here.",
      ],
      photoTag: '✦ Davis, CA',
    },
    {
      _type: 'expressiveV3Component',
      _key: 'expressive-v3',
      eyebrow: 'the approach',
      heading: 'Therapy that makes something with the mess.',
      paragraphs: [
        "Expressive Arts therapy is an evidence-informed approach that weaves together multiple creative modalities — not because you need to be an artist, but because the body, the imagination, and the hands sometimes know things the mind hasn't caught up to yet.",
        "You might draw what you can't say. Write a letter you'll never send. Move through something instead of sitting still with it. The form follows what you need.",
      ],
      modalities: [
        { name: 'Drawing & painting', detail: 'for what has no shape yet' },
        { name: 'Sandtray play', detail: 'especially for children & teens' },
        { name: 'Movement & embodiment', detail: 'what the body holds' },
        { name: 'Writing & poetry', detail: 'finding language sideways' },
        { name: 'Music & sound', detail: 'rhythm as regulation' },
        { name: 'Drama & storytelling', detail: 'new ways to hold old stories' },
      ],
      quotes: [
        {
          text: "I kept thinking therapy wasn't for me — I'm not good at talking about myself. Turns out I'm really good at drawing what I feel. That was the door I needed.",
          attrib: '— Teen, age 15',
        },
        {
          text: "My daughter went from dreading Mondays to asking to go. I don't know exactly what happens in that room, but she comes home lighter.",
          attrib: '— Parent of a 10-year-old',
        },
        {
          text: "She gets what it means to be first-gen. I've never had to explain the whole context before. We just started from where I actually was.",
          attrib: '— SEED Scholar, UC Davis',
        },
      ],
    },
    {
      _type: 'meetV3Component',
      _key: 'meet-v3',
      eyebrow: 'a little about me',
      heading: "Hi, I'm [Her Name] — and I became a therapist because I know what it's like to need a way through.",
      headingEmphasis: '[Her Name]',
      paragraphs: [
        'I trained at the California Institute of Integral Studies in San Francisco with a deep emphasis in Expressive Arts therapy — a field that treats creativity not as a nice-to-have, but as the center of healing.',
        "I work with children, teens, and women in Davis and the surrounding area. I'm also proud to work alongside SEED scholars at UC Davis — students who are doing something remarkable, often without a roadmap or a safety net.",
        "My practice is warm and playful, but also genuinely rigorous. I'll meet you where you are, I'll stay curious about who you are, and I genuinely believe that where you are right now is already a good place to start.",
      ],
      credentials: ['LMFT · Licensed 2024', 'MA, CIIS San Francisco', 'Expressive Arts Emphasis', 'SEED Scholar Partner'],
      badgeText: 'LMFT\nDavis, CA',
    },
    {
      _type: 'feelingsCheckInV3Component',
      _key: 'checkin-v3',
      eyebrow: 'a moment for you',
      heading: 'How are you feeling right now?',
      subheading: 'Choose a color. No explanation needed.',
      swatches: [
        { color: 'var(--terracotta)', feel: 'overwhelmed', reply: "Overwhelmed makes sense. There's a lot. You don't have to sort it out alone." },
        { color: 'var(--teal)', feel: 'okay-ish', reply: "Okay-ish is honest. And sometimes okay-ish is actually brave." },
        { color: 'var(--mauve)', feel: 'numb', reply: "Numb is its own kind of hard. You're still here — that matters." },
        { color: 'var(--gold)', feel: 'hopeful', reply: "Hopeful is a good place to begin. Let's build something from that." },
        { color: 'var(--terra-light)', feel: 'tender', reply: "Tender means something is close to the surface. That's worth attending to." },
        { color: 'var(--navy)', feel: 'lost', reply: "Lost is a real feeling. And sometimes what looks like lost is actually a beginning." },
      ],
    },
    {
      _type: 'ctaV3Component',
      _key: 'cta-v3',
      heading: 'Ready to find a different way in?',
      headingEmphasis: 'The first conversation is free.',
      subheading: '15-minute consultations · No commitment · Telehealth & in-person available',
      buttonText: 'Schedule a free consultation',
      buttonHref: '#',
    },
  ],
};

async function seedV3Home() {
  console.log('🌱 Seeding V3 Home page...\n');

  try {
    if (!process.env.SANITY_API_TOKEN) {
      console.error('❌ SANITY_API_TOKEN not found in .env');
      console.log('\nAdd SANITY_API_TOKEN to sanity/.env - create a token at https://sanity.io/manage\n');
      process.exit(1);
    }

    const existing = await client.fetch(`*[_id == "page-home"][0]`);

    if (existing) {
      console.log('📄 Home page exists. Updating with V3 components...');
      await client
        .patch('page-home')
        .set({
          ...v3HomePage,
          _id: undefined,
          _type: undefined,
        })
        .commit();
      console.log('   ✅ Updated');
    } else {
      console.log('📄 Creating Home page with V3 components...');
      await client.create(v3HomePage);
      console.log('   ✅ Created');
    }

    console.log('\n🎉 V3 Home page ready!');
    console.log('   View at: http://localhost:5173/ (frontend)');
    console.log('   Edit in Sanity: http://localhost:3333 (Pages → Home)\n');
  } catch (err) {
    console.error('\n❌ Error:', err.message);
    if (err.message?.includes('unauthorized')) {
      console.log('   Check SANITY_API_TOKEN has Editor/Admin permissions.\n');
    }
    process.exit(1);
  }
}

seedV3Home();
