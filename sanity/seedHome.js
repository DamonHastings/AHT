#!/usr/bin/env node
/**
 * Seeds the Home page with site blocks.
 * Run: node seedHome.js  (from sanity/) or npm run seed-home
 */
import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import { WHO_I_HELP_BLOCK_DEFAULTS } from '../frontend/src/content/whoIHelpDefaults.js';

dotenv.config();

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
});

const homePage = {
  _type: 'page',
  _id: 'page-home',
  title: 'Home',
  slug: { _type: 'slug', current: 'home' },
  metaTitle: '[Practice Name] — Expressive Arts Therapy | Davis, CA',
  metaDescription:
    'Expressive arts therapy in Davis, CA — kids, teens, young adults, parents, grief, anxiety, ADHD, and SEED scholars. Schedule a free consultation.',
  template: 'custom',
  showHeader: false,
  showFooter: false,
  published: true,
  publishedAt: new Date().toISOString(),
  components: [
    {
      _type: 'heroBlock',
      _key: 'hero',
      kickerText: 'Expressive Arts Therapy · Davis, CA',
      heading: "If reaching out was hard, I'm glad you landed here.",
      headingEmphasis: 'glad you landed here.',
      body:
        "I'm an expressive arts therapist — warm and playful, and also willing to bring loving challenge when it helps. We can use movement, color, metaphor, making, and nature when they fit you; we can also talk it through. The next step is a free consultation so we can see if we're a good match.",
      primaryCtaText: 'Schedule a free consultation',
      primaryCtaHref: '#contact',
      secondaryCtaText: 'Who I help →',
      secondaryCtaHref: '/#audience-children',
    },
    {
      _type: 'pullQuoteBlock',
      _key: 'pullquote',
      eyebrow: 'a different kind of therapy',
      quote:
        '"What if the way through isn\'t only talking about it — but making, moving, or shaping something with it?"',
      body:
        "Expressive arts therapy uses drawing, movement, writing, music, and play to open doors that words alone can't. It's not about being “good at art.” It's about being human — and trusting that some things are easier to show than to say. Taking this first step is brave; if we meet, I'll celebrate that with you.",
    },
    {
      _type: 'whoIHelpBlock',
      _key: 'who',
      eyebrow: WHO_I_HELP_BLOCK_DEFAULTS.eyebrow,
      heading: WHO_I_HELP_BLOCK_DEFAULTS.heading,
      headingEmphasis: WHO_I_HELP_BLOCK_DEFAULTS.headingEmphasis,
      cards: WHO_I_HELP_BLOCK_DEFAULTS.cards.map((c, i) => ({
        ...c,
        _key: `card-${c.variant}-${i}`,
      })),
    },
    {
      _type: 'theSpaceBlock',
      _key: 'space',
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
      _type: 'expressiveArtsBlock',
      _key: 'expressive',
      eyebrow: 'the approach',
      heading: 'Collaborative, directive, and tuned to the moment.',
      paragraphs: [
        "Expressive arts therapy weaves drawing, movement, writing, music, metaphor, symbolism, and play — not because you need to be an artist, but because imagination and the body sometimes know things the mind hasn't caught up to yet. We can go outside or stay in the room; we can stay verbal when that's what you need.",
        "I'm responsive to what you bring and direct when that's useful — so you're not carrying the whole hour alone, and you're also not being talked at. Loving challenge and tolerable discomfort are part of growth; so is humor and curiosity. The form follows what you need.",
      ],
      modalities: [
        { name: 'Drawing & painting', detail: 'for what has no shape yet' },
        { name: 'Sandtray & play', detail: 'especially for children & teens' },
        { name: 'Movement & embodiment', detail: 'optional, never forced' },
        { name: 'Metaphor & symbolism', detail: 'thinking sideways' },
        { name: 'Writing & poetry', detail: 'letters you never send' },
        { name: 'Music & sound', detail: 'rhythm as regulation' },
        { name: 'Nature & space', detail: "when the room isn't enough" },
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
      _type: 'meetBlock',
      _key: 'meet',
      eyebrow: 'a little about me',
      heading: "Hi, I'm [Her Name] — and I became a therapist because I know what it's like to need a way through.",
      headingEmphasis: '[Her Name]',
      paragraphs: [
        'I trained at the California Institute of Integral Studies in San Francisco with a deep emphasis in expressive arts therapy — a field that treats creativity not as a nice-to-have, but as a real pathway for healing.',
        'In Davis I work with kids, teens, young adults, parents, people carrying grief or anxiety, folks navigating ADHD (and related neurodivergence), and SEED scholars at UC Davis — often with family or program context woven in.',
        "My style is warm, accepting, curious, and playful — and I'm not afraid of challenge when it serves you. I work collaboratively and can be directive when you want a clear co-pilot; the point is that therapy feels alive, not like a performance.",
      ],
      credentials: ['LMFT · Licensed 2024', 'MA, CIIS San Francisco', 'Expressive Arts Emphasis', 'SEED Scholar Partner'],
      badgeText: 'LMFT\nDavis, CA',
    },
    {
      _type: 'feelingsCheckInBlock',
      _key: 'checkin',
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
        {
          color: 'var(--teal-deep)',
          feel: 'wired / anxious',
          reply: "Wired usually means something matters. We can slow it down together — and sometimes use that energy instead of only fighting it.",
        },
      ],
    },
    {
      _type: 'ctaBlock',
      _key: 'cta',
      heading: "Curious if we're a fit?",
      headingEmphasis: 'The first conversation is free.',
      subheading:
        "Most people reach out the same way you might have — email or voicemail after reading a profile. We'll schedule a short consultation (about 15 minutes), no commitment. Telehealth and in-person in Davis when available.",
      buttonText: 'Schedule a free consultation',
      buttonHref: '#contact',
    },
  ],
};

async function seedHome() {
  console.log('🌱 Seeding Home page...\n');

  try {
    if (!process.env.SANITY_API_TOKEN) {
      console.error('❌ SANITY_API_TOKEN not found in .env');
      process.exit(1);
    }

    const existing = await client.fetch(`*[_id == "page-home"][0]`);

    if (existing) {
      console.log('📄 Home page exists. Updating...');
      await client
        .patch('page-home')
        .set({
          ...homePage,
          _id: undefined,
          _type: undefined,
        })
        .commit();
      console.log('   ✅ Updated');
    } else {
      console.log('📄 Creating Home page...');
      await client.create(homePage);
      console.log('   ✅ Created');
    }

    console.log('\n🎉 Home page ready!');
    console.log('   Frontend: http://localhost:5173/');
    console.log('   Studio: Pages → Home\n');
  } catch (err) {
    console.error('\n❌ Error:', err.message);
    process.exit(1);
  }
}

seedHome();
